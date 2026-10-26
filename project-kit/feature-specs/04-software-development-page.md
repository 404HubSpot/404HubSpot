# 04 — Software development service redesign

Status: Implementation complete on branch; awaiting review and merge. Owner: Francis Masila (frontend).
Branch: `feature/frontend/04-software-development-page`, created from `origin/main` at `ebae976`.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Explain custom software engagements in business terms with a clear discovery path.

## Dependencies and readiness

Required merged specs: 02,03. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Verified software capabilities. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.
Implementation environment: Vue 3.5.27 from the installed lockfile; official Vue component guide
(https://vuejs.org/guide/essentials/component-basics.html) consulted 2026-10-26. No dependencies added.

## Owned files and layer boundaries

Proposed files: src/views/services/SoftwareDevelopment.vue; src/data/services.js.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Reuse the service-detail shell for internal tools, automation and business systems actually offered.
2. Explain discovery, integrations, delivery checkpoints and support ownership; avoid claiming unsupported platforms.
3. Separate example scenarios from real customer case studies and link approved evidence when available.

## Data, contracts and permissions

Existing /services/software-development route and service ID remain compatible; inquiries identify this service.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [x] All original relevant offerings have an intentional place in the new page.
- [x] Scope and handoff expectations are explicit.
- [x] Examples are not misrepresented as delivered work.
- [x] Service-specific CTA and shared shell navigation pass.

## Verification and evidence

Build; route/CTA regression; content evidence check; narrow/desktop screenshots.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

Implementation verification (2026-10-26; Windows, Node 20.20.2, Vue 3.5.27, Vite 7.3.1):

- `npm run build`: PASS; 71 modules, 0 errors. Warnings: stale caniuse-lite data, Lottie `eval`,
  and existing static/dynamic import chunk notices for site/course data.
- Integrated browser: PASS, 34 assertions across 360/768/1024/1440/1920px. No horizontal
  overflow or page errors; shared header/footer, nine main sections, approved price bands,
  illustrative-example disclaimer, FAQ disclosure, service CTAs and contact-form preselection passed.
- Full-page screenshots captured with reduced motion:
  `docs/design/evidence/software-development-360.png` and
  `docs/design/evidence/software-development-1440.png`.
- `node --check scripts/verify-ui.cjs` and `git diff --check`: PASS.
- `node scripts/verify-ui.cjs`: SKIP because Playwright is not installed locally. Equivalent
  Spec 04 browser assertions were run through the integrated browser; no dependency was added.

## Rollout, rollback and completion

Rollback page/data changes without changing the shared shell contract.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
