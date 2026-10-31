# Decisions needed before dependent implementation

Feature 01 can complete without these. Future specs remain planned/blocked where noted.

| Question | Blocks |
|---|---|
| Approved company claims, case studies, screenshots and client publication permission? | 02, 10, 11 |
| Business phone/WhatsApp (+254 708 345963), email (hubspot861@gmail.com), Instagram (@404hubspot), and TikTok (@404.hubspot) confirmed by owner. Confirm canonical primary domain; confirm team-member portrait/profile publication permissions. | Domain: 14; team profiles/assets: 02, 12 |
| Class formats, schedules, availability and approved fees? | 07 |
| Brevo sender domain verified? API key stored server-side? Team inbox (INQUIRY_TO_EMAIL)? Formspree dropped per owner order (02b). | 19 live; sender/key gate sends |
| Backend hosting provider/runtime, region, monthly budget and operational owner? | 17, 30 |
| Managed database provider and database retention/backup approach? | 18, 30; coordinate retention policy with 29 |
| Staff identities and who may edit, publish, view inquiries and administer access? | 20–25 |
| Initial approved MCP clients and whether remote or local-only access is needed first? | 24 |
| AI use-case priority, provider/model budget and approved data handling? | 26–28 |
| Inquiry retention, export/delete workflow, privacy notice and consent text? | 19 live, 29 |
| Any real need for customer accounts, native mobile, online payments or independently scaled services? | Optional research only; none assumed |
| Service price bands confirmed by owner on 2026-10-16; individually confirm all course fees before publishing. | 07 (course fees); 02 (future price changes) |
| Academy cohort capacity/mode (online vs Nakuru)/internships + economics validation (playbook §07)? | 07 |
| Crawlability: Search Console confirm + Vue SSR/prerender decision (playbook §09 warning, keep Vue)? | 14 |
| Weekly-metrics owner + tooling (playbook §10: enquiries, quote-to-win, avg value, cohort fill, care attach)? | 31 |
