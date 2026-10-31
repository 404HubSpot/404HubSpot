# Implementation roadmap

Planning expanded by user request to cover the whole company portfolio and future full stack.
This is a staged redesign, not authorization to implement every layer in the current branch.
One feature/spec/branch/PR from fetched main; dependencies must merge before dependent code.

## Phase A — public company portfolio

01 landing + shared shell + workflow/architecture plan → 02 content/brand truth.
03 reusable service-detail shell + web service → 04 software, 05 mobile service, 06 M-Pesa, 33 graphics design.
Spec 33 was added at completeness review; its execution is here, not after scaling.
07 classes, 08 contact, 09 process, 10 portfolio → 11 case-study detail; 12 about/team.
13 sitewide accessibility and recovery; 14 metadata/prerender/search; 15 performance.
16 CI/previews can follow 01 early and supports every subsequent feature.

## Phase B — durable operations

17 API foundation and 18 independent relational migration package may proceed
separately after their own readiness gates; 19 durable inquiries depends on 08/17/18.
20 staff identity depends on 17/18; 21 staff inquiry workspace depends on 19/20.
22 content drafts/publishing depends on approved portfolio/team content and 18/20.
23 managed assets depends on 18/20/22. 29 retention/export/delete depends on 19/20/21.
30 production full-stack infrastructure depends on 17/18/19/20/29.
Live data collection remains gated on privacy/provider/operations readiness even if code merges.

## Phase C — safe machine interfaces and assistance

24 private read-only MCP depends on 17/20/21/22 → 25 explicitly approved inquiry writes.
26 published knowledge retrieval depends on 22 → 27 internal AI draft assistance after 21.
28 public FAQ assistant is an OPTIONAL pilot after 13/26/27 and demonstrated visitor need.
31 observability/cost controls depends on 19/24/27/30 before broad AI/MCP production enablement.
Readiness gates are distinct from code dependencies; no optional subsystem goes live unmonitored.

## Phase D — evidence-led scale

32 measures demand/cost and records keep/extract/defer decisions after 15/30/31.
Mobile, separate services, broker/cache, vector store and orchestration are conditional decisions,
not promised implementation. See [scaling criteria](../architecture/SCALING-PATH.md).

## Overlay: service playbook 90-day sequence (research/ playbook §10)

Days 1–7 Decide: roster + price floors + launch tiers + one-page tier descriptions (spec 02, Francis).
Days 8–21 Publish: pricing page (02→03), services hub (03), WhatsApp CTAs (08), estimator v1 (08),
crawlability fix decision (14, Don).
Days 22–45 Prove: 2 case studies (10→11), Spark pilot cohort (07), academy+apply page (07), first guides (22).
Days 46–90 Scale: Marathon enrolment (07), testimonials, win-rate review, hire/train gaps (all owners).
Weekly metrics: enquiries, quote-to-win, avg project value, cohort fill rate, care attach rate (spec 31, Depends 19/24/27/30).
One spec per branch; dependencies merge before dependents start, including
sequential handoffs between different owners.

## Execution and review

[Spec index](../../project-kit/feature-specs/README.md) contains precise per-feature dependencies.
[Tracker](../../project-kit/context/progress-tracker.md) owns current state. The initial
recommendation after feature 01 was spec 02; specs 02 and 03 are now merged, and spec 04 is in
progress. Spec 16 remains independently eligible after spec 01; owners should follow the current
tracker and assignment table rather than this historical recommendation.
No dependent implementation starts from an unmerged feature branch.
