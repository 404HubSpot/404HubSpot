# Proposed platform data model

Planning only. No schema or migrations are installed. PostgreSQL is the proposed first store;
spec 18 owns an independent `database/` migration package, where the engine, version and provider
will be reviewed. UUID identifiers, UTC timestamps, foreign keys, explicit status constraints,
parameterized access and version fields for concurrent updates.

| Entity | Minimum fields and ownership | Constraints / access |
|---|---|---|
| Service | id, slug, title, summary, capabilities, revision, status | Unique slug; published public; editor drafts |
| CaseStudy | id, slug, clientDisplayName, challenge, work, outcomes, publicationConsent, status | Publish only with approved evidence and permission |
| Course | id, slug, audience, prerequisites, outline, format, status | No invented start dates or enrollment capacity |
| TeamMember | id, displayName, role, bio, portraitAssetId, publicProfiles, status | Published profile only; photo permission recorded |
| ContentRevision | id, entityType, entityId, version, body, editorId, createdAt | Immutable versions; publish selects one version |
| Asset | id, objectKey, mimeType, bytes, checksum, altText, attribution, permission | Allowlisted media; public only after validation |
| Inquiry | id, name, email, optionalPhone, serviceSlug, message, source, consentVersion, status, assigneeId, version, createdAt | Private; strict lengths; status new/contacted/qualified/closed/spam |
| InquiryEvent | id, inquiryId, actorId, eventType, previousStatus, nextStatus, createdAt | Append-only audit; no duplicate message body |
| StaffIdentity | id, issuer, subject, enabled | Unique issuer+subject; provider owns passwords |
| StaffRole | staffId, role | Server-side authorization on every call |
| OutboxMessage | id, aggregateId, type, dedupeKey, state, attempts, nextAttemptAt | Unique dedupe key, bounded retries, no public access |
| AuditEvent | id, actorId, action, resourceType/id, result, requestId, createdAt | Append-only; redact secrets and sensitive payloads |
| AIUsage | id, actorOrSessionHash, purpose, model, tokenCounts, costEstimate, requestId | Budget/reporting only; avoid raw prompts by default |
| ToolInvocation | id, actorId, clientId, tool, resourceId, result, requestId | Correlates MCP and domain audit without raw PII |

Relationships: service 1→N inquiries; staff 1→N assigned inquiries; content entity 1→N
revisions; inquiry 1→N events; inquiry creation 1→N deduplicated outbox messages.
Use a transaction for aggregate changes + audit/outbox. Content references use stable IDs;
public slugs are immutable or redirect explicitly. Use optimistic version checks for edits.

No embeddings initially: published structured content and PostgreSQL text search are enough
to evaluate retrieval. Add vector storage only after failed retrieval benchmarks justify it.
Retention periods, deletion/export procedures and media permissions require owner decisions
before live collection; document them in spec 29. Backups follow the same data access controls.
