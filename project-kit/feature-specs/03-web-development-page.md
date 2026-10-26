# 03 — Web development service redesign

Status: MERGED (PR #8). Owner: Christine Jemutai (frontend).
Branch: `feature/frontend/03-web-development-page`, merged to organization `main`.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Help a business visitor understand website offerings and make a service-specific inquiry.

## Dependencies and readiness

Required merged specs: 01,02. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Approved capabilities and pricing language. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: src/views/services/WebDevelopment.vue; src/components/services/ServiceDetail.vue; src/data/services.js.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Build a reusable service-detail shell with hero, outcomes, deliverables, process, FAQs and inquiry panel using feature 01 tokens.
2. Retain the existing URL and relevant content; present package pricing only if verified, otherwise explain how a quote is scoped.
3. Use semantic FAQ disclosures and preserve service context in inquiry links; all media uses meaningful alt text.

## Data, contracts and permissions

Service detail data extends the canonical service ID/slug; the navbar/footer service registry remains stable.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Existing URL loads directly and through navbar/card links.
- [ ] Each offering states deliverables, exclusions and next action.
- [ ] FAQ is keyboard usable and no price is invented.
- [ ] Layout and CTA work at all five baseline widths.

## Verification and evidence

Production build; route/direct-refresh checks; keyboard FAQ; service-specific WhatsApp URL assertion; visual comparison.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Revert only this service content/shell; other service pages do not migrate until their own specs.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
