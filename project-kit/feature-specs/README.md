# Feature specifications

33 independently reviewable outcomes. Only 01 is implemented in this branch; 02–33 are planned.
Dependencies define eligibility, not permission to batch implementation. Root tracker owns status.

| ID | Feature | Owner | Depends on | Spec |
|---|---|---|---|---|
| 01 | Landing redesign + workflow/architecture planning | frontend | Existing main | [Spec](01-foundation.md) |
| 02 | Content, brand and asset truth | content | 01 | [Spec](02-content-and-brand-audit.md) |
| 03 | Web development service redesign | frontend | 01,02 | [Spec](03-web-development-page.md) |
| 04 | Software development service redesign | frontend | 02,03 | [Spec](04-software-development-page.md) |
| 05 | Mobile app development service redesign | frontend | 02,03 | [Spec](05-mobile-service-page.md) |
| 06 | M-Pesa integration service redesign | frontend | 02,03 | [Spec](06-mpesa-service-page.md) |
| 07 | Programming classes and learning paths | frontend | 01,02 | [Spec](07-programming-classes-page.md) |
| 08 | Contact and inquiry experience | frontend | 01,02 | [Spec](08-contact-inquiry-experience.md) |
| 09 | Delivery process and collaboration page | frontend | 01,02 | [Spec](09-process-page.md) |
| 10 | Portfolio discovery and filtering | frontend | 01,02 | [Spec](10-portfolio-index.md) |
| 11 | Evidence-backed case study pages | frontend | 10 | [Spec](11-case-study-detail.md) |
| 12 | Company story and team profiles | frontend | 01,02 | [Spec](12-company-and-team-page.md) |
| 13 | Sitewide accessibility and navigation completion | qa | 03,04,05,06,07,08,09,10,11,12,33 | [Spec](13-accessibility-navigation.md) |
| 14 | Search metadata, structured data and sharing | frontend | 02,10,11,12 | [Spec](14-seo-and-sharing.md) |
| 15 | Performance budgets and media delivery | qa | 03,04,05,06,07,08,09,10,11,12,14,33 | [Spec](15-performance-and-assets.md) |
| 16 | Reproducible checks and branch previews | infra | 01 | [Spec](16-ci-and-preview.md) |
| 17 | Backend API foundation and contracts | backend | 02,16 | [Spec](17-api-foundation.md) |
| 18 | Relational data foundation and migrations | data | 17 | [Spec](18-postgres-foundation.md) |
| 19 | Durable inquiry capture and notifications | backend | 08,17,18 | [Spec](19-durable-inquiries.md) |
| 20 | Staff identity and authorization | backend | 17,18 | [Spec](20-staff-identity.md) |
| 21 | Staff inquiry workspace | frontend | 19,20 | [Spec](21-inquiry-workspace.md) |
| 22 | Content editing and controlled publishing | backend | 10,11,12,18,20 | [Spec](22-content-publishing.md) |
| 23 | Managed portfolio media | content | 18,20,22 | [Spec](23-media-management.md) |
| 24 | Private MCP read tools and resources | mcp | 17,20,21,22 | [Spec](24-read-tools.md) |
| 25 | MCP proposed writes with explicit approval | mcp | 24 | [Spec](25-approved-write-tools.md) |
| 26 | Published knowledge retrieval for AI | ai | 22 | [Spec](26-grounded-retrieval.md) |
| 27 | Staff inquiry drafting assistant | ai | 21,26 | [Spec](27-staff-draft-assistant.md) |
| 28 | Optional public FAQ assistant pilot | ai | 13,26,27 | [Spec](28-public-faq-assistant.md) |
| 29 | Inquiry retention, export and deletion operations | data | 19,20,21 | [Spec](29-privacy-and-retention.md) |
| 30 | Full-stack deployment, backups and recovery | infra | 17,18,19,20,29 | [Spec](30-fullstack-deployment-recovery.md) |
| 31 | Operational visibility and AI/MCP cost controls | infra | 19,24,27,30 | [Spec](31-observability-and-budgets.md) |
| 32 | Scaling and extraction decision review | infra | 15,30,31 | [Spec](32-scaling-readiness.md) |

| 33 | Graphics design service redesign | frontend | 02,03 | [Spec](33-graphics-design-page.md) |

| 02b | Unified site revamp bundle (owner-approved exception) | frontend | 01 | [Spec](02-unified-site-revamp.md) |
| 34 | Customer accounts & password auth (Clerk) | backend | 17,18,20 | [Spec](34-customer-auth.md) |
| 35 | Service playbook sync & planning (accomplishment report, team assignments, contract sync) | PM (planning) | None | [Spec](35-service-playbook-sync.md) |

Optional public AI pilot (28) is demand-gated. Scaling review (32) may conclude that no new
runtime is needed. Native mobile, microservices, customer portal and payment collection have
no implementation spec because their business need is not established.
