# Infra ownership kit

Builds, environments, deployment, secrets and operating evidence.

Owning spec IDs: 16–17, 30–32. [All specs](../../feature-specs/README.md).
[Root tracker](../../context/progress-tracker.md) is the only delivery status authority.
[Layer map](../../../docs/architecture/LAYER-MAP.md) defines boundaries.

## Before implementation

Read root AGENTS, product context, owning spec, affected contracts and dependencies.
Create runtime files only where the owning spec says; add local AGENTS/commands if a new
deployable directory is introduced. Update this kit if responsibility or verification changes.
Do not infer that this documentation kit means the layer is deployed or initialized.

## Handoff

Record owner/consumer contract changes, version/source checks, real command results,
negative/failure cases, open operator gates and rollback in the root tracker/spec evidence.
