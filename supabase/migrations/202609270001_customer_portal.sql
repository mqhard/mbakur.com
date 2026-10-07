-- Customer portal v1. Additive migration; existing auth accounts are preserved.
begin;
create table if not exists public.crm_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);
alter table public.crm_admins enable row level security;
revoke all on public.crm_admins from anon, authenticated;

create or replace function public.crm_is_admin() returns boolean
language sql stable security definer set search_path = '' as $$
  select exists(select 1 from public.crm_admins where user_id = auth.uid());
$$;
revoke all on function public.crm_is_admin() from public;
grant execute on function public.crm_is_admin() to authenticated;

create table if not exists public.crm_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  name text not null check (length(name) between 1 and 120),
  company text not null default '' check (length(company) <= 160),
  language text not null default 'ar' check (language in ('ar','en')),
  created_at timestamptz not null default now()
);
create table if not exists public.crm_requests (
  id uuid primary key default gen_random_uuid(),
  reference bigint generated always as identity unique,
  user_id uuid not null references auth.users(id),
  idempotency_key uuid not null,
  service text not null check (service in ('branding','website','video','creative_direction','other')),
  title text not null check (length(title) between 3 and 160),
  description text not null check (length(description) between 20 and 10000),
  language text not null check (language in ('ar','en')),
  status text not null default 'new' check (status in ('new','reviewing','awaiting_client','proposal_sent','agreed','closed')),
  follow_up_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(user_id,idempotency_key)
);
create index if not exists crm_requests_owner on public.crm_requests(user_id,created_at desc);
create table if not exists public.crm_messages (
  id uuid primary key default gen_random_uuid(),
  request_id uuid not null references public.crm_requests(id) on delete cascade,
  author_id uuid references auth.users(id),
  body text not null check (length(body) between 1 and 10000),
  internal boolean not null default false,
  created_at timestamptz not null default now()
);
create index if not exists crm_messages_request on public.crm_messages(request_id,created_at);
create table if not exists public.crm_drafts (
  id uuid primary key default gen_random_uuid(),
  request_id uuid references public.crm_requests(id),
  source_key text not null unique,
  kind text not null check (kind in ('reply','brief','report','follow_up','error')),
  title text not null,
  body text not null,
  status text not null default 'needs_review' check(status in ('needs_review','reviewed','dismissed')),
  created_at timestamptz not null default now()
);
create table if not exists public.crm_jobs (
  id uuid primary key default gen_random_uuid(),
  request_id uuid references public.crm_requests(id),
  kind text not null check (kind in ('request_received','message_received','weekly_report','follow_up')),
  dedupe_key text not null unique,
  status text not null default 'pending' check (status in ('pending','processing','done','failed')),
  attempts integer not null default 0,
  available_at timestamptz not null default now(),
  locked_at timestamptz,
  error text,
  created_at timestamptz not null default now()
);
create index if not exists crm_jobs_pending on public.crm_jobs(status,available_at);

alter table public.crm_profiles enable row level security;
alter table public.crm_requests enable row level security;
alter table public.crm_messages enable row level security;
alter table public.crm_drafts enable row level security;
alter table public.crm_jobs enable row level security;
revoke all on public.crm_profiles,public.crm_requests,public.crm_messages,public.crm_drafts,public.crm_jobs from anon,authenticated;
grant select,insert,update on public.crm_profiles to authenticated;
grant select on public.crm_requests,public.crm_messages,public.crm_drafts,public.crm_jobs to authenticated;
grant update(status) on public.crm_drafts to authenticated;
create policy crm_profile_read on public.crm_profiles for select to authenticated using(user_id=auth.uid() or public.crm_is_admin());
create policy crm_profile_insert on public.crm_profiles for insert to authenticated with check(user_id=auth.uid());
create policy crm_profile_update on public.crm_profiles for update to authenticated using(user_id=auth.uid()) with check(user_id=auth.uid());
create policy crm_request_read on public.crm_requests for select to authenticated using(user_id=auth.uid() or public.crm_is_admin());
create policy crm_message_read on public.crm_messages for select to authenticated using(public.crm_is_admin() or (not internal and exists(select 1 from public.crm_requests r where r.id=request_id and r.user_id=auth.uid())));
create policy crm_draft_read on public.crm_drafts for select to authenticated using(public.crm_is_admin());
create policy crm_draft_review on public.crm_drafts for update to authenticated using(public.crm_is_admin()) with check(public.crm_is_admin());
create policy crm_job_read on public.crm_jobs for select to authenticated using(public.crm_is_admin());

create or replace function public.crm_create_request(p_key uuid,p_service text,p_title text,p_description text,p_language text)
returns public.crm_requests language plpgsql security definer set search_path='' as $$
declare result public.crm_requests;
begin
  if auth.uid() is null then raise exception 'AUTH_REQUIRED'; end if;
  if not exists(select 1 from auth.users where id=auth.uid() and email_confirmed_at is not null) then raise exception 'EMAIL_CONFIRMATION_REQUIRED'; end if;
  select * into result from public.crm_requests where user_id=auth.uid() and idempotency_key=p_key;
  if found then return result; end if;
  if (select count(*) from public.crm_requests where user_id=auth.uid() and created_at>now()-interval '1 hour')>=5 then raise exception 'RATE_LIMIT'; end if;
  insert into public.crm_requests(user_id,idempotency_key,service,title,description,language)
  values(auth.uid(),p_key,p_service,btrim(p_title),btrim(p_description),p_language)
  on conflict(user_id,idempotency_key) do update set idempotency_key=excluded.idempotency_key returning * into result;
  insert into public.crm_jobs(request_id,kind,dedupe_key) values(result.id,'request_received','request:'||result.id) on conflict do nothing;
  return result;
end $$;

create or replace function public.crm_add_message(p_request uuid,p_body text,p_internal boolean default false)
returns uuid language plpgsql security definer set search_path='' as $$
declare message_id uuid; owner_id uuid;
begin
  if auth.uid() is null then raise exception 'AUTH_REQUIRED'; end if;
  select user_id into owner_id from public.crm_requests where id=p_request;
  if owner_id is null or not (public.crm_is_admin() or (owner_id=auth.uid() and not p_internal)) then raise exception 'FORBIDDEN'; end if;
  if (select count(*) from public.crm_messages where author_id=auth.uid() and created_at>now()-interval '1 hour')>=30 then raise exception 'RATE_LIMIT'; end if;
  insert into public.crm_messages(request_id,author_id,body,internal) values(p_request,auth.uid(),btrim(p_body),p_internal) returning id into message_id;
  update public.crm_requests set updated_at=now() where id=p_request;
  if not public.crm_is_admin() then
    insert into public.crm_jobs(request_id,kind,dedupe_key) values(p_request,'message_received','message:'||message_id);
  end if;
  return message_id;
end $$;

create or replace function public.crm_update_request(p_request uuid,p_status text,p_follow_up timestamptz default null)
returns void language plpgsql security definer set search_path='' as $$
begin
  if not public.crm_is_admin() then raise exception 'FORBIDDEN'; end if;
  update public.crm_requests set status=p_status,follow_up_at=p_follow_up,updated_at=now() where id=p_request;
  if not found then raise exception 'NOT_FOUND'; end if;
end $$;

-- Worker RPCs are callable only by the backend service role, never the browser.
create or replace function public.crm_claim_jobs(p_limit integer default 5)
returns setof public.crm_jobs language plpgsql security definer set search_path='' as $$
begin
  return query with candidates as (
    select id from public.crm_jobs where (status='pending' or (status='processing' and locked_at<now()-interval '15 minutes'))
      and available_at<=now() and attempts<3 order by created_at for update skip locked limit least(greatest(p_limit,1),10)
  ) update public.crm_jobs j set status='processing',locked_at=now(),attempts=attempts+1
    from candidates c where j.id=c.id returning j.*;
end $$;

create or replace function public.crm_schedule_jobs() returns void
language plpgsql security definer set search_path='' as $$
begin
  insert into public.crm_jobs(request_id,kind,dedupe_key)
    select id,'follow_up','followup:'||id||':'||current_date from public.crm_requests
    where status not in ('closed','agreed') and coalesce(follow_up_at,created_at+interval '2 days')<=now()
    on conflict do nothing;
  insert into public.crm_jobs(kind,dedupe_key) values('weekly_report','week:'||to_char(now(),'IYYY-IW')) on conflict do nothing;
  update public.crm_jobs set status='failed',error='Worker timed out after 3 attempts'
    where status='processing' and locked_at<now()-interval '15 minutes' and attempts>=3;
end $$;

revoke all on function public.crm_create_request(uuid,text,text,text,text),public.crm_add_message(uuid,text,boolean),public.crm_update_request(uuid,text,timestamptz),public.crm_claim_jobs(integer),public.crm_schedule_jobs() from public,anon,authenticated;
grant execute on function public.crm_create_request(uuid,text,text,text,text),public.crm_add_message(uuid,text,boolean),public.crm_update_request(uuid,text,timestamptz) to authenticated;
grant execute on function public.crm_claim_jobs(integer),public.crm_schedule_jobs() to service_role;
grant all on public.crm_profiles,public.crm_requests,public.crm_messages,public.crm_drafts,public.crm_jobs to service_role;
grant usage,select on sequence public.crm_requests_reference_seq to service_role;

create or replace function public.crm_job_context(p_job uuid) returns jsonb
language plpgsql security definer set search_path='' as $$
declare j public.crm_jobs; r public.crm_requests; payload jsonb;
begin
  select * into j from public.crm_jobs where id=p_job and status='processing';
  if not found then raise exception 'JOB_NOT_CLAIMED'; end if;
  if j.kind='weekly_report' then
    select jsonb_build_object('requests_last_7_days',count(*),'agreed_last_7_days',count(*) filter(where status='agreed'),'open_requests_in_period',count(*) filter(where status not in ('agreed','closed'))) into payload
      from public.crm_requests where created_at>=now()-interval '7 days';
  else
    select * into r from public.crm_requests where id=j.request_id;
    payload=jsonb_build_object('reference',r.reference,'service',r.service,'title',r.title,'description',r.description,'language',r.language,'status',r.status,'created_at',r.created_at,'follow_up_at',r.follow_up_at,
      'messages',coalesce((select jsonb_agg(jsonb_build_object('body',m.body,'internal',m.internal,'created_at',m.created_at)) from (select * from public.crm_messages where request_id=r.id order by created_at desc limit 10)m),'[]'::jsonb));
  end if;
  return jsonb_build_object('job_id',j.id,'kind',j.kind,'request_id',j.request_id,'data',payload);
end $$;

create or replace function public.crm_complete_job(p_job uuid,p_title text,p_body text) returns uuid
language plpgsql security definer set search_path='' as $$
declare j public.crm_jobs; draft_id uuid; draft_kind text;
begin
  select * into j from public.crm_jobs where id=p_job for update;
  if not found then raise exception 'JOB_NOT_FOUND'; end if;
  if j.status='done' then select id into draft_id from public.crm_drafts where source_key='job:'||p_job; return draft_id; end if;
  if j.status<>'processing' then raise exception 'JOB_NOT_CLAIMED'; end if;
  if length(btrim(p_body)) not between 1 and 20000 or length(btrim(p_title)) not between 1 and 200 then raise exception 'INVALID_DRAFT'; end if;
  draft_kind=case j.kind when 'weekly_report' then 'report' when 'follow_up' then 'follow_up' when 'request_received' then 'brief' else 'reply' end;
  insert into public.crm_drafts(request_id,source_key,kind,title,body)
    values(j.request_id,'job:'||j.id,draft_kind,p_title,p_body)
    on conflict(source_key) do update set body=excluded.body,title=excluded.title returning id into draft_id;
  update public.crm_jobs set status='done',error=null where id=p_job;
  return draft_id;
end $$;
revoke all on function public.crm_job_context(uuid),public.crm_complete_job(uuid,text,text) from public,anon,authenticated;
grant execute on function public.crm_job_context(uuid),public.crm_complete_job(uuid,text,text) to service_role;
commit;
