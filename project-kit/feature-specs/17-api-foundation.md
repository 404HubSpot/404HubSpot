# 17 — Backend API foundation and contracts

Status: PLANNED; not implemented in feature 01. Owner: backend.
Branch: `feature/backend/17-api-foundation` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Introduce the smallest backend needed for durable inquiries and content operations.

## Dependencies and readiness

Required merged specs: 02,16. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Production hosting provider, region, budget and operational owner are deployment decisions for
spec 30; they do not block local implementation and verification here. Build and test using the
documented development environment, and keep production deployment/routing disabled until spec 30.
Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: backend/AGENTS.md; backend/package.json; backend/src/app.ts; backend/src/modules/; docs/contracts/openapi.yaml.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Validate Node LTS/TypeScript/Fastify compatibility using current official docs, then pin supported dependencies.
2. Create application-service/module boundaries, configuration validation, health/readiness endpoints and request IDs.
3. Define OpenAPI errors/validation/versioning and same-origin API routing; keep frontend runtime untouched.
4. Add shutdown/timeouts and redacted structured logging; readiness reflects actual dependencies, not a constant green response.

## Data, contracts and permissions

Formalize draft FUTURE-PLATFORM HTTP contract; no public endpoint may grant staff permissions.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Backend starts from documented commands and fails clearly on invalid config.
- [ ] Health/readiness behavior is tested during dependency failure.
- [ ] Error responses match schemas and contain no stack traces/secrets.
- [ ] Existing frontend build and static contact fallback still work independently.

## Verification and evidence

Backend typecheck/build; API schema and lifecycle integration tests; frontend regression. Record exact new commands in this spec before coding.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Keep production deployment and inquiry routing gated until spec 30 approves the provider, budget
and operating plan. Once deployed, rollback by disabling API routing, not deleting the frontend.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
