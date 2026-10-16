# 404HubSpot — Team assignments & ownership hard rules (planning only)

Date: 2026-10-16 · Branch: `docs/web/35-service-playbook-sync`.
PM rule: one spec, one branch, one review. Dependent specs grouped under ONE
owner so no deadlock can form. Source: playbook §08 team mapping +
`src/data/site.js` verified members + root tracker spec IDs.

## 1. Team members (verified from src/data/site.js, 5 owners)

| # | Name | GitHub | Verified role | Playbook §08 role | Stats |
|---|---|---|---|---|---|
| 1 | Francis Masila | masila002 | Fullstack Developer & Designer | Founder / Lead Engineer | 35 repos / 21 followers |
| 2 | Don Artkins | DonArtkins | AI Engineer & System Architect | Backend / Payments + Mobile + Growth | 69 repos / 63 followers |
| 3 | Eric Njuki | Ericnjuki254 | UI/UX Designer | Product Designer | 6 repos / 20 followers |
| 4 | Christine Jemutai | chemii933 | Frontend Developer | Frontend / UI Engineer | 10 repos / 14 followers |
| 5 | Glory Kinya | kiki-glow | Fullstack Developer & Graphic Designer | Instructor / Academy Lead | 46 repos / 10 followers |

## 2. Spec ownership table (dependent specs grouped under one owner)

| Spec | Feature | Owner | Depends on (holder) | Blocking protocol |
|---|---|---|---|---|
| 02 | Content, brand and asset truth | Francis (Decide gate) | 01 merged ✓ | BLOCKED:02 held by Francis until Decide done |
| 03 | Web development service redesign (+hub) | Christine | 01,02 | BLOCKED:03 held by Christine until 02 merged |
| 04 | Software development service redesign | Francis | 02,03 | BLOCKED:04 held by Francis until 03 merged |
| 05 | Mobile app development service redesign | Don | 02,03 | BLOCKED:05 held by Don until 03 merged |
| 06 | M-Pesa integration service redesign | Francis | 02,03 | BLOCKED:06 held by Francis until 03 merged |
| 07 | Programming classes + academy ladder | Glory | 01,02 | BLOCKED:07 held by Glory until 02 merged |
| 08 | Contact + estimator + Nakuru info | Don | 01,02 | BLOCKED:08 held by Don until 02 merged |
| 09 | Delivery process page | Christine | 01,02 | BLOCKED:09 held by Christine until 02 merged |
| 10 | Portfolio discovery | Eric | 01,02 | BLOCKED:10 held by Eric until 02 merged |
| 11 | Case-study detail | Eric | 10 | BLOCKED:11 held by Eric until 10 merged |
| 12 | Company story + team profiles (+skill tags) | Eric | 01,02 | BLOCKED:12 held by Eric until 02 merged |
| 13 | Sitewide accessibility | Don (QA-side) | 03,04,05,06,07,08,09,10,11,12,33 | wait for all above |
| 14 | Search metadata / SSR decision | Don | 02,10,11,12 | wait for above + Search Console |
| 15 | Performance budgets | Don | 03–12,14,33 | wait for above |
| 16 | CI/previews | Don | 01 | can start after 01 merged |
| 17 | Backend API foundation | Francis | 02,16 | wait for 02+16 |
| 18 | Relational data foundation | Glory | 17 | wait for 17 |
| 19 | Durable inquiries + Brevo | Francis (review) / Don (08+estimator) | 08,17,18 | wait for 08+17+18 |
| 20 | Staff identity + authorization | Francis + Don | 17,18 | wait for 17+18 |
| 21 | Staff inquiry workspace (+UX Eric) | Eric | 19,20 | wait for 19+20 |
| 22 | Content editing/publishing (+UX Christine) | Christine | 10,11,12,18,20 | wait for above |
| 23 | Managed portfolio media | Glory | 18,20,22 | wait for above |
| 24 | Private MCP read tools | Don | 17,20,21,22 | wait for above |
| 25 | MCP proposed writes | Don | 24 | wait for 24 |
| 26 | Published knowledge retrieval (AI) | Glory | 22 | wait for 22 |
| 27 | Staff inquiry drafting assistant | Eric | 21,26 | wait for 21+26 |
| 28 | Public FAQ pilot (optional) | Glory | 13,26,27 | demand-gated |
| 29 | Retention/export/delete | Glory | 19,20,21 | wait for above |
| 30 | Full-stack deployment | Don | 17,18,19,20,29 | wait for above |
| 31 | Observability/cost controls | Don | 19,24,27,30 | wait for above |
| 32 | Scaling decision review | Don | 15,30,31 | wait for above |
| 33 | Graphics design service redesign | Glory | 02,03 | wait for 02+03 |
| 34 | Customer accounts (Clerk) | Francis + Don | 17,18,20 | secret-key gate open |

Owner field = named person who may implement. No other member's agent may touch
that spec's files.

## 3. Hard rules (PM directive — appended to AGENTS.md)

R1. **No cross-implementation.** A member's AI agent must not implement any
task not assigned to that member in table §2. If assigned to another member,
report `BLOCKED:<spec> held by <name>` to the user and stop.

R2. **Dependency handoff.** If task A (owned by member X) depends on task B
(owned by member Y), and B is not yet merged to `main`, X must tell the user
`task <A> waits on <B>, held by <name>` and must NOT implement until B lands in
main. The user manually reaches out to <name> to unblock — no agent implements
blindly across owners.

R3. **Dependent specs share one owner.** Specs that depend on each other are
grouped under a single owner in §2 so cross-owner deadlocks cannot form
(e.g. Don holds 08→19 estimator+capture; Francis holds 17→19-review).

R4. **Planning-only scope.** Branches like `docs/web/35-service-playbook-sync`
touch `docs/`, `research/`, `project-kit/`, and `AGENTS.md` only — zero `src/`,
`public/`, `backend/`, `infra/`, manifest, migration, or config changes.
Implementation starts only on a fresh `feature/<area>/<NN>-<slug>` after this
planning PR is reviewed and merged and dependencies are in main.

## 4. Deadlock escalation path

1. Agent reports `BLOCKED:<spec> held by <name>` on this channel.
2. User manually contacts <name> to expedite.
3. When `<name>` merges to `main`, the blocker reports `UNBLOCKED:<spec>`.
4. Dependent agent picks up its own spec branch only after step 3.
