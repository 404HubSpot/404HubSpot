# Data ownership kit

Schema, migrations, indexing, idempotency, retention and restore.

Owning spec IDs: 18–19, 22, 29–30. [All specs](../../feature-specs/README.md).
[Root tracker](../../context/progress-tracker.md) is the only delivery status authority.
[Layer map](../../../docs/architecture/LAYER-MAP.md) defines boundaries.

Spec 18 owns an independent `database/` migration and verification package. It does not depend
on or create the API runtime; backend application data access remains in `backend/` from spec 17.

## Before implementation

Read root AGENTS, product context, owning spec, affected contracts and dependencies.
Create runtime files only where the owning spec says; add local AGENTS/commands if a new
deployable directory is introduced. Update this kit if responsibility or verification changes.
Do not infer that this documentation kit means the layer is deployed or initialized.

## Handoff

Record owner/consumer contract changes, version/source checks, real command results,
negative/failure cases, open operator gates and rollback in the root tracker/spec evidence.
