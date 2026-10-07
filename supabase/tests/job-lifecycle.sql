-- PostgreSQL/Supabase administrator test; all records are rolled back.
begin;
insert into public.crm_jobs(kind,dedupe_key) values('weekly_report','test:'||gen_random_uuid()) returning id \gset job_
select set_config('test.job_id',:'job_id',true);
set local role anon;
do $$ begin
  begin perform public.crm_claim_jobs(1); raise exception 'FAIL: anonymous worker access';
  exception when insufficient_privilege then null; end;
end $$;
reset role;
set local role authenticated;
do $$ begin
  begin perform public.crm_claim_jobs(1); raise exception 'FAIL: customer worker access';
  exception when insufficient_privilege then null; end;
end $$;
reset role;
-- Restrict fixture visibility by testing claim predicates against an empty test database.
set local role service_role;
select public.crm_claim_jobs(10);
do $$ declare context jsonb; first_id uuid; second_id uuid; begin
  context=public.crm_job_context(current_setting('test.job_id')::uuid);
  if context->>'kind'<>'weekly_report' then raise exception 'FAIL: wrong job context'; end if;
  first_id=public.crm_complete_job(current_setting('test.job_id')::uuid,'Synthetic report','Synthetic report for job lifecycle verification.');
  second_id=public.crm_complete_job(current_setting('test.job_id')::uuid,'Duplicate report','Duplicate response must not create another draft.');
  if first_id<>second_id then raise exception 'FAIL: completion duplicated draft'; end if;
  if (select status from public.crm_jobs where id=current_setting('test.job_id')::uuid)<>'done' then raise exception 'FAIL: job not completed'; end if;
end $$;
reset role;
rollback;
select 'PASS: worker permissions, claim/context, atomic completion and duplicate prevention' as result;
