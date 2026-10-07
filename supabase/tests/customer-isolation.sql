-- Run in SQL Editor as the database administrator AFTER the migration.
-- Entire fixture is rolled back, including auth users. No passwords or emails are sent.
begin;
select set_config('test.crm_client_a',gen_random_uuid()::text,true);
select set_config('test.crm_client_b',gen_random_uuid()::text,true);
select set_config('test.crm_owner',gen_random_uuid()::text,true);
insert into auth.users(id,email,email_confirmed_at,role,aud)
select current_setting('test.crm_client_a')::uuid,'crm-a-'||current_setting('test.crm_client_a')||'@example.invalid',now(),'authenticated','authenticated'
union all select current_setting('test.crm_client_b')::uuid,'crm-b-'||current_setting('test.crm_client_b')||'@example.invalid',now(),'authenticated','authenticated'
union all select current_setting('test.crm_owner')::uuid,'crm-owner-'||current_setting('test.crm_owner')||'@example.invalid',now(),'authenticated','authenticated';
insert into public.crm_admins(user_id) values(current_setting('test.crm_owner')::uuid);

set local role authenticated;
select set_config('request.jwt.claim.sub',current_setting('test.crm_client_a'),true);
select set_config('test.crm_key',gen_random_uuid()::text,true);
select set_config('test.crm_request',(public.crm_create_request(current_setting('test.crm_key')::uuid,'website','Synthetic isolation test','This is a synthetic project request used only for access tests.','en')).id::text,true);
do $$ declare duplicate_id uuid; begin
  duplicate_id=(public.crm_create_request(current_setting('test.crm_key')::uuid,'website','Synthetic isolation test','This is a synthetic project request used only for access tests.','en')).id;
  if duplicate_id<>current_setting('test.crm_request')::uuid then raise exception 'FAIL: duplicate request'; end if;
  if public.crm_is_admin() then raise exception 'FAIL: client is administrator'; end if;
  begin
    insert into public.crm_admins values(auth.uid(),now());
    raise exception 'FAIL: client granted administrator';
  exception when insufficient_privilege then null; end;
  begin
    perform public.crm_update_request(current_setting('test.crm_request')::uuid,'agreed',null);
    raise exception 'FAIL: client changed protected status';
  exception when raise_exception then if sqlerrm<>'FORBIDDEN' then raise; end if; end;
end $$;

select set_config('request.jwt.claim.sub',current_setting('test.crm_owner'),true);
select public.crm_add_message(current_setting('test.crm_request')::uuid,'Internal synthetic note',true);
select public.crm_add_message(current_setting('test.crm_request')::uuid,'Client visible synthetic reply',false);

select set_config('request.jwt.claim.sub',current_setting('test.crm_client_b'),true);
do $$ begin
  if exists(select 1 from public.crm_requests where id=current_setting('test.crm_request')::uuid) then raise exception 'FAIL: client B saw client A request'; end if;
  if exists(select 1 from public.crm_messages where request_id=current_setting('test.crm_request')::uuid) then raise exception 'FAIL: client B saw messages'; end if;
  begin
    perform public.crm_add_message(current_setting('test.crm_request')::uuid,'Unauthorized synthetic reply',false);
    raise exception 'FAIL: client B wrote to client A request';
  exception when raise_exception then if sqlerrm<>'FORBIDDEN' then raise; end if; end;
end $$;

select set_config('request.jwt.claim.sub',current_setting('test.crm_client_a'),true);
do $$ begin
  if (select count(*) from public.crm_messages where request_id=current_setting('test.crm_request')::uuid)<>1 then raise exception 'FAIL: client visibility incorrect'; end if;
  if exists(select 1 from public.crm_messages where request_id=current_setting('test.crm_request')::uuid and internal) then raise exception 'FAIL: internal note leaked'; end if;
end $$;
reset role;
do $$ begin
  if (select count(*) from public.crm_jobs where request_id=current_setting('test.crm_request')::uuid and kind='request_received')<>1 then raise exception 'FAIL: duplicate queued job'; end if;
end $$;
rollback;
select 'PASS: customer isolation, internal notes, admin protection and idempotency; all fixtures rolled back' as result;
