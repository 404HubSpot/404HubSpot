# Decisions

- 2026-09-30: Keep Vue/Vite and flat src layout; baseline only supplies missing project planning.
- 2026-09-30: Adapt Griot's warm surfaces/card grammar to 404HubSpot's teal brand and marketing journeys.
- 2026-09-30: Scope first branch to landing and shared shell; preserve detail-page bodies and backend integrations.
- 2026-09-30: The user delegated UI selection and implementation. Design files record that direction;
  they do not claim user visual sign-off. Review and merge remain open after implementation.
- 2026-10-16: Service Architecture & Growth Playbook adopted as research source of truth (research/);
  accomplishment report + team assignments + contract sync staged on docs/web/35-service-playbook-sync
  (PLANNING ONLY, no code). Provisional prices remain owner-gated via spec 02; no Next.js/framework
  swap — crawlability evaluated inside spec 14.
- 2026-10-16: Five named owners assigned (Francis, Don, Eric, Christine, Glory) with hard rules R1–R4:
  no cross-implementation, dependency handoff to user, the original same-owner dependency rule, and
  planning-only branches touching docs/research/project-kit/AGENTS.md only. R3 was revised 2026-10-31.
- 2026-10-31: User authorized removing spec 17 as a prerequisite for spec 18 while keeping Glory
  as its owner, by defining an independent database migration package under `database/`. Cross-owner
  dependency rule R3 now requires sequential handoffs after prerequisites merge to `main`; consumers
  of both specs 17 and 18 still wait for both. Spec 18's provider, retention and backup decisions remain open.
