# 18 — Relational data foundation and migrations

Status: PLANNED; not implemented in feature 01. Owner: Glory (data).
Branch: `feature/data/18-postgres-foundation` — create from freshly fetched `origin/main` after its readiness gates are resolved.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Establish a migration-tested store for content, staff identities and inquiry workflows.

## Dependencies and readiness

Dependencies: None. This spec creates an independent database migration package; it does not
depend on the backend API in spec 17. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Managed database provider, retention and backup approach. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: database/AGENTS.md; database/package.json; database/migrations/;
database/tests/; docs/architecture/DATA-MODEL.md.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
`database/` is a migration and verification package, not an API or separately deployed service.
Keep database connection use and application data-access code in the backend owned by spec 17.
Document the migration/connection contract for that later consumer. Owner/consumer documents
update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Translate the proposed model into reviewed relational tables, constraints and indexes; choose one migration tool after compatibility research.
2. Define separate least-privilege migration and application-runtime database identities; use isolated test databases.
3. Exercise empty database install, migration upgrade and compatible rollback; seed only synthetic data.

## Data, contracts and permissions

UUID/UTC/version fields; unique slugs/idempotency keys; transactions for aggregate + audit/outbox. No tenant model or vector store yet.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Fresh and upgrade migrations reach the same schema.
- [ ] Foreign-key/status/uniqueness constraints reject invalid writes.
- [ ] The application-runtime identity cannot perform schema administration.
- [ ] Backup/restore can be exercised in a non-production environment.

## Verification and evidence

Database integration suite including concurrent uniqueness tests; schema diff; restore smoke test.
Use synthetic data and a non-production database; do not require a running spec 17 API.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Use expand/contract migrations; retain old columns through rollback window; no automatic destructive down migration.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
