# Customer portal — implementation in progress

This is not a deployment-complete report. SMTP, authenticated end-to-end tests,
and n8n worker credentials must be verified before release.

## Current verification (27 September 2026)

- Local production build passed; bundle-size warning remains.
- Targeted lint of the new portal/auth modules is part of release verification.
- Local login at 390/768/1366px in English, and signup at 320/390/768/1366px in Arabic:
  no horizontal document overflow; labels and inputs present. Signup/reset mode switching checked.
- Anonymous dashboard shows sign-in prompt and no customer information.
- Authenticated client/admin UI and actual confirmation/reset email are NOT tested yet.
- Real iOS/Android checks remain unavailable.
- Inactive workflow imported: `mbakurCrmWorker20260927`.
- Supabase sign-in and project restoration completed on 28 September. No portal release has been pushed.
- Automated customer email acknowledgments, visitor analytics, external outage alerts and consolidation
  of the existing mailbox draft table into the cloud dashboard remain outstanding.

## Local database verification (28 September 2026)

The migration applied successfully to an isolated PostgreSQL 16 container with a minimal
Supabase-compatible auth.uid/auth.users fixture. No live database was changed.
customer-isolation.sql passed: cross-customer read/write isolation, hidden internal notes,
administrator escalation denial, protected status and idempotent requests/jobs.
job-lifecycle.sql passed: anonymous/customer worker denial, service-role job claim/context,
atomic draft completion and repeat-completion idempotency. Test data was rolled back.
These checks do not replace testing the actual Supabase API, Auth/SMTP and deployed RLS.
job-lifecycle.sql uses psql commands and must run only in an isolated test database.

## Cloud verification (28 September 2026)

- Project restored successfully; initial inspection showed no public tables and no Auth users.
- Applied `202609270001_customer_portal.sql` via Supabase SQL Editor successfully.
- Ran `customer-isolation.sql` against the actual Supabase database: PASS. All synthetic
  users, requests, messages and jobs were rolled back; no permanent test accounts remain.
- Project region is Tokyo (ap-northeast-1).
- Owner saved Hostinger SMTP credentials; dashboard confirms a stored password and enabled
  custom SMTP (`smtp.hostinger.com`, port 465). Delivery remains unverified until real signup.
- Site URL corrected from localhost:3000 to https://mbakur.com. Exact /dashboard and
  /reset-password redirect URLs saved for https://mbakur.com and http://127.0.0.1:5174.
- Owner account selection, verified account creation, administrator assignment,
  n8n backend credential and real Auth/API end-to-end tests remain pending.

## Storage and access

- Supabase Auth: client/owner login, verified email, password reset. No passwords in CRM tables.
- crm_profiles: customer name/company/language; only their owner and server-appointed administrators can read.
- crm_requests: original request, reference, status, follow-up date. Clients read only their own requests.
- crm_messages: client-visible discussion or administrator-only internal notes.
- crm_drafts: AI briefs/reply proposals, follow-up reminders and reports. Administrator only.
- crm_jobs: durable pending work; n8n on the Mac polls this queue. Website requests survive Mac downtime.
- Existing Mail Draft Review in n8n is still local storage under /Users/uqv/.n8n; it is not yet migrated to Supabase.

## Required setup

1. Access the existing Supabase project lityzhdoaztveqcxgsxr; inspect existing tables and policies.
2. Apply the additive SQL migration once after checking for conflicting crm_* names.
3. Confirm the owner's verified auth user and insert its UUID in crm_admins through the database administrator.
   Never grant administration based on user_metadata, a client-selected role, or an unverified email.
4. Configure Hostinger SMTP for Supabase confirmation/reset and allowed site/redirect URLs.
5. Store a backend credential ONLY in n8n's encrypted credentials, never in React or version control.
6. Test two distinct customer accounts, anonymous access and administrator access before publishing.
7. n8n polls pending jobs, generates review drafts, and saves results back to Supabase. It must
   use a stable source_key per job, retry failed work and mark done only after saving results.
8. Internal reports measure stored requests, not visitors. Visitor analytics requires a separate
   verified analytics source; never present request counts as unique visitors.

## Intended first release

Clients register, confirm email, sign in, submit a request, and follow their requests/messages.
The owner reviews all requests, changes status, writes internal notes or client-visible messages,
and reviews AI suggestions. AI suggestions are never automatically published to the customer.
No invoices, payments, file uploads or marketplace functionality are implied.

## Device contract

390px mobile: single-column cards and full-width forms/actions.
768px tablet: wrapping toolbar and cards; no hover-only action.
1366px laptop: list/detail composition when space permits.
Both languages share the same records/actions and support RTL/LTR. Loading, empty, error,
unauthenticated, unconfigured and saved states must be explicit. Real device testing remains required.
