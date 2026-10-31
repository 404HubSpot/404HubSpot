# Logical layers and physical ownership

Layer kits are documentation under project-kit/layers, not fabricated deployables.
The current flat Vue source remains intact. Each future runtime directory must gain its own
AGENTS, package/testing commands and tracker when its implementation spec creates it.

| Layer | Responsibility | Current / planned physical owner | Must not own |
|---|---|---|---|
| frontend | Public pages, navigation, accessibility, admin UX | src/ (existing) | Secrets, authorization decisions, direct database access |
| content | Approved facts, service/case-study/course schemas, media provenance | src/data + public/assets; later backend content module | Invented customer proof or unsourced claims |
| backend | Validation, application workflows, identity/policy, public/staff APIs | backend/ only from spec 17 | UI layout, AI-controlled authorization |
| data | Relational schema, migrations, retention and restore | database/ migration package from spec 18; backend data access from spec 17 | Direct client or model access |
| ai | Grounded retrieval, draft assistance, evaluations, budget control | backend AI adapter/module from spec 26 | Independent inquiry ownership or automatic publishing |
| mcp | Scoped tool/resource transport for approved clients | backend MCP adapter from spec 24 | Arbitrary SQL/shell, token forwarding, public anonymous staff access |
| infra | Builds, deployment, environment separation, secrets, operations | existing hosting configs; infra/ when needed | Product content rules |
| qa | Browser, contract, auth, failure and release evidence | scripts + tests introduced by feature | Reporting unexecuted gates as passed |

Cross-layer feature work is a single vertical outcome with explicitly named producer/consumer
changes, one root spec and one branch. Cross-owner dependencies use sequential handoffs after
prerequisites merge to `main`. Layer docs route to the root status tracker; they do not create
competing status boards. Architecture changes synchronize all affected contracts.
