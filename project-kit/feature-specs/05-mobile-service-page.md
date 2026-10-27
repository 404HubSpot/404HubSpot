# 05 — Mobile app development service redesign

Status: Implementation complete on branch `feature/frontend/05-mobile-service-page`, cut from `origin/main` at `cbb14f1` after specs 02, 03 and 04 merged (PR #9). Automerge pre-authorized by owner (Don Artkins session, 2026-10-27).
Branch: `feature/frontend/05-mobile-service-page`.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Present mobile development as a company service without creating a native app for the portfolio.

## Dependencies and readiness

Required merged specs: 02,03. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Approved mobile delivery capabilities. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: src/views/services/MobileApps.vue; src/data/services.js.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Explain supported iOS/Android delivery approaches based on actual team capabilities.
2. Describe discovery, device testing, store handoff and ongoing maintenance responsibilities.
3. Use clearly labelled concept graphics or approved case studies; preserve the inquiry route.

## Data, contracts and permissions

/services/mobile-apps remains a marketing page; no mobile/ runtime tree is initialized.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Visitors can understand app engagement scope and request a consultation.
- [ ] Store approval and delivery timelines are not guaranteed without evidence.
- [ ] All cards and concept images have accessible structure.
- [ ] No native app dependency or unsupported product promise is introduced.

## Verification and evidence

Build; route and inquiry assertions; responsive checks; content register comparison.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Independent page rollback; native app research remains conditional in scaling policy.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
