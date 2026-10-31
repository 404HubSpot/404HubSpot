# Agent instructions — 404hubspot

## Daily loop prompt — paste into a fresh AI session after every feature

```text
Paste this block into a fresh AI session after each merged feature.
It implements exactly ONE next spec, then waits.

0. SKILLS + CURRENT DOCS FIRST: load this AGENTS.md plus any layer kits,
   then use MCP/Context7 to fetch current docs for every tool, framework,
   and package touched — never answer versioned APIs from memory. Record
   library, version, source, and date in the spec. If unreachable, say so
   and mark the claim unverified.
1. READ: the user request, project-kit/context/product-context.md,
   project-kit/context/progress-tracker.md (section 0 Next picks the ONE
   spec) plus each layer tracker, then the owning spec and every file it
   names. Trackers disagree: stop and ask.
2. BRANCH: fetch the default branch, cut feature/<area>/<NN>-<slug> from
   its tip (fix/ for bugs, docs/ for planning-only). Never from another
   feature branch, never straight to the default branch.
3. IMPLEMENT exactly what the spec says. Runtime files only when the spec
   orders them. Fixes go in only with owner + consumer docs in the same
   branch — tell the user and document it.
4. RULES: every rule in these agent files, every run. No destructive
   commands without approval; sudo-class commands print first, then wait.
5. TRACKERS (most important): owning plus every affected tracker — chains,
   board rows, verification evidence — in the same branch.
6. REVIEWS: address unaddressed review findings on this branch with proof.
7. PUSH GATE: this project's own verification only, never another
   layer's gates. Tracker updated before push; push only this branch.
8. REPORT: what changed, evidence with counts, open gates, deviations, and
   anything needed from the user as numbered copy-run steps. Then STOP and
   wait for explicit approval before the next spec.
```

## What this project is

Areas: web.
Stack / conventions: Vue 3, Vue Router 4, Vite 7, Tailwind CSS 3.
Adopt this project's existing folders, language, and standards as-is.
Never restructure source to match an outside scaffold.
Shared lessons live at `/home/artkins/Projects/Workflows/my-knowledge-base` — consult by topic, never commit secrets there.

## Reading order

1. The user's current request.
2. `project-kit/context/product-context.md` — problem, users, scope, constraints.
3. `project-kit/context/progress-tracker.md` — section 0 execution chain gives the next spec.
   In a layered project also read each layer's own tracker (see below).
4. The owning spec under `project-kit/feature-specs/` (or the layer's kit) plus every file it names.
5. This project's own source, configs, and tests as-is.

## Architecture: single app, monorepo, or multi-repo

Each project has its own architecture — single app, monorepo, or multi-repo.
Follow the brief and specs; never impose one shape on another.

- Single app: everything lives in this root — no layer subfolders. Do NOT
  create one folder per area for a single app; the project IS this root.
  A second folder appears only for a real second deployable layer.
- Monorepo (several areas in this folder): organize each layer into its own
  folder. Every layer gets its own `AGENTS.md` (that layer's areas, stack,
  commands), its own `README.md` (what the layer is about, an index of every
  file with what each does and how to upgrade it), and its own project kit
  (brief slice, specs, progress tracker). This root file links every layer
  file; layers reference the root instead of duplicating its decisions.
- Multi-repo: the same pattern, except each layer lives in its own
  repository at its accurate location. Repos reference each other by location
  plus interface contracts, and communicate only through those contracts.
- Progress trackers are the most important thing: the root tracker chains
  the layers and their specs, each layer tracker chains its own specs.
  Update the owning tracker plus every affected tracker in the same branch.
- Hard gates run per layer only: a layer's checks, tests, and pre-push gates
  run for that layer's changes. Never run another layer's gates while working
  in this one.

## Official scaffolds sit WITH the structure, never over it

When a project or layer starts from an official command (for example
a Next.js, Vue, React Native, or Python starter, or any official install
link), that command must NOT destroy or overwrite the folder structure
already here — not `AGENTS.md`, not the project kits, not any folder.
Scaffold into an empty temp dir or a fresh subfolder, then arrange everything
to fit: every existing file stays, and the official folder structure stays
valid. Lose no file, compromise neither structure.

## Working rules

0. NEVER implement in the default branch. The default branch (`main`) is
   merge-only: the agent must always be on a freshly cut
   `feature/<area>/<NN>-<slug>` (or `fix/`, `docs/`) branch taken from the
   fetched default tip before touching any implementation file. If the
   current branch IS the default branch, stop and cut the feature branch
   first — no exceptions, no "quick fixes" straight to main.

## PM hard rules (added 2026-10-16 — service playbook sync)

R1. No cross-implementation. A member's AI agent must not implement any task
   not assigned to that member in docs/planning/TEAM-ASSIGNMENTS.md §2. If
   assigned to another member, report `BLOCKED:<spec> held by <name>` to the
   user and stop.

R2. Dependency handoff. If task A (owned by member X) depends on task B
   (owned by member Y), and B is not merged to `main`, X must tell the user
   `task <A> waits on <B>, held by <name>` and must NOT implement until B
   lands in main. The user manually reaches out to <name> to unblock — no
   agent implements blindly across owners.

R3. Sequential cross-owner handoffs. A dependency may cross owners. The
dependent owner must wait until the prerequisite is merged to `main`, then
continue on a fresh branch; do not overlap implementation or reassign a spec
just to bypass its dependency. TEAM-ASSIGNMENTS.md §2 records each owner and
dependency holder.

R4. Planning-only scope. Branches such as `docs/web/35-service-playbook-sync`
   touch `docs/`, `research/`, `project-kit/`, and `AGENTS.md` only — zero
   `src/`, `public/`, `backend/`, `infra/`, manifest, migration, or config
   changes. Implementation starts only on a fresh `feature/<area>/<NN>-<slug>`
   after this planning PR is reviewed and merged and dependencies are in main.
1. ALWAYS read `project-kit/context/progress-tracker.md` first, every run.
   Section 0 names the ONE next spec; the status board lists EVERY feature
   one by one with its state — never batch, never skip, never reorder
   without explicit owner approval.
2. Plan before code: reviewable spec plus binary acceptance criteria first.
2. One spec, one branch, one review: `feature/<area>/<NN>-<slug>` from the
   fetched default branch tip (`fix/` for bugs, `docs/` for planning-only).
3. Implement exactly what the spec says. Runtime files (manifests,
   dependencies, migrations, containers) are created only when a feature
   spec orders them, using that spec's commands — never speculatively.
4. Verify with this project's own commands (recorded in the spec/tracker),
   and report exact output: pass/fail/skip counts, revision, limits.
5. ALWAYS update the progress tracker BEFORE push: set the owning spec's
   row to its true state plus every affected tracker, with verification
   evidence, in the same branch. Pushing with a stale tracker is forbidden.
6. Then commit and push ONLY the current feature branch to GitHub
   (`git push origin <branch>`). Never push the default branch from an
   agent session; merging is the owner's decision.
7. No destructive commands without explicit approval. Commands needing
   elevated rights: print them, ask, and wait.
8. Report when done: what changed, verification evidence, open items,
   and anything needed from the user as numbered copy-run steps. Then wait
   for explicit approval before the next spec.

## Project documentation map

- `docs/README.md` — central reading map and current/planned distinction.
- `docs/architecture/SYSTEM-DESIGN.md` — current site and staged full-stack target.
- `docs/architecture/LAYER-MAP.md` and `project-kit/layers/*/README.md` — eight logical owners.
- `docs/planning/IMPLEMENTATION-ROADMAP.md` — phased order and dependency gates.
- `project-kit/feature-specs/README.md` — all 33 feature specs; one feature per branch.
- `docs/design/MASTER-DESIGN-SYSTEM.md`, `project-kit/context/ui-*.md`, `inspo/CATALOG.md`
  — 404HubSpot UI authority. `docs/design/references/` are historical Griot snapshots,
  not active instructions, approvals, or 404HubSpot implementation status.
- `docs/planning/OPEN-QUESTIONS.md` — owner/provider/content decisions before dependent work.

Keep frontend `src/` in place. Backend/data/AI/MCP/infra runtime folders are introduced only
by their owning implementation specs. Mobile and microservices require the evidence gates
in `docs/architecture/SCALING-PATH.md`; do not create placeholder deployables.

Current checks: `npm run build`, `git diff --check`, `node scripts/verify-ui.cjs` against local
Vite. Browser tooling may be supplied via PLAYWRIGHT_MODULE and CHROMIUM_PATH. New layer
commands must be registered when introduced; no empty or pretend checks. Root tracker is
single status authority; layer kits record ownership and route to it.
