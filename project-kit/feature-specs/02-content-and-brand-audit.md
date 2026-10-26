# 02 — Content, brand and asset truth

Status: MERGED (PR #7). Owner: Francis Masila (content truth decision gate).
Branch: `feature/content/02-content-and-brand-truth`, merged to organization `main`.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Create an approved source of truth for what the company may claim and publish.

## Dependencies and readiness

Required merged specs: 01. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Owner-supplied identity, contact details and evidence. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Files: src/data/site.js; src/data/courses.js; src/views/ProgrammingClasses.vue; src/views/CourseDetail.vue; src/lib/seo.js; docs/content/CONTENT-REGISTER.md; docs/content/ASSET-REGISTER.md; docs/planning/OPEN-QUESTIONS.md.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Inventory all nine page bodies, prices, biographies, phone numbers, email, social links and meeting/form destinations against original source files.
2. Resolve the LanguageCard phone mismatch through owner confirmation; record missing portraits without inventing faces or credentials.
3. Assign each claim/asset an owner, evidence, publication permission and status; distinguish proposal copy from approved facts.
4. Preserve unconfirmed claims as explicit gates; do not publish course fees or treat a provisional canonical domain as approved.

## Data, contracts and permissions

Content records carry stable IDs, source, reviewedAt, approvedBy and publication status; secrets and customer private material stay outside the repository.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Every public contact destination has an owner-confirmed value or is explicitly unavailable.
- [ ] All six services and four course categories have approved summaries and details.
- [ ] Every portfolio/portrait asset has attribution and permission status.
- [ ] No fabricated testimonials, client names, awards or performance metrics appear.
- [x] Owner-confirmed public identity, contact details, social profiles and service prices are recorded in the content register.
- [x] Course prices are withheld across listing, detail and SEO output until confirmed per course.
- [ ] Canonical domain and publication permission for portraits/media remain explicit open gates.

## Verification and evidence

Link/asset scan; compare contact destinations across all views; manual owner review of claim register.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
Docs consulted 2026-10-16: Vue 3.5.27 installed (`npm ls vue vite --depth=0`); official conditional rendering guide, https://vuejs.org/guide/essentials/conditional.html. Vite 7.3.1 installed; official build guide, https://vite.dev/guide/build.html. No new framework APIs or dependencies introduced.
2026-10-16 results: `npm run build` PASS (69 modules; warnings: stale caniuse-lite, lottie-web eval notice, static/dynamic imports); direct Node assertions PASS for contact, 13 approved service price entries, and all 12 course fees withheld; `git diff --check` PASS. `scripts/verify-ui.cjs` now contains the route/price/fee UI assertions, but it was not run because Playwright is unavailable/configuration variables are unset. Browser screenshots, live contact/social checks, and asset permission verification are not claimed.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Update public copy only after approval; preserve historical claims in an internal audit record, not duplicate public content.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
