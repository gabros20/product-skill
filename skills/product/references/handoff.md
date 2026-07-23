# Handoff

Purpose: Package a completed product decision (validated problem, strategy, PRD, metric tree, risk
register) so `design` and `architecture` can act on it without re-deriving it, plus a compact
`handoff.yaml` companion for pipeline routing.

Read when:
- Finishing a product artifact that another skill is expected to build from.
- Deciding whether this run should emit a machine-readable companion at all.
- Writing or checking the `handoff.yaml` file itself.

Skip when:
- The request is standalone with no downstream execution in view — produce the human artifact and
  stop; an unread `handoff.yaml` is clutter, not diligence.
- You need the PRD's own internal structure — that's [PRD](prd.md); this reference covers what
  happens after an artifact exists, not how to write it.

Inputs: the completed product artifact(s), the decisions/assumptions/risks recorded while producing
them, and any open questions with owners.

Produces: a `handoff.yaml` companion beside the human artifact(s) — never a duplicate of the
artifact's content.

## Contents
- Standalone vs pipeline
- The handoff.yaml schema
- Field-by-field
- What design needs
- What architecture needs
- The seam discipline
- Validation
- Failure modes

## Standalone vs pipeline

`product` runs in two modes, read from context, not a flag. **Standalone**: the request is
self-contained ("give me a strategy and PRD for X") with no mention of downstream build work —
deliver the human artifact only. **Pipeline**: the request or an orchestrating controller names
downstream work explicitly (design a flow from this, architect a backend for this) or a multi-skill
run is already in motion — emit the `handoff.yaml` companion alongside the artifact. Default to
standalone; only emit the companion when a downstream consumer is actually expected to read it.

## The handoff.yaml schema

```yaml
handoff_version: 1
skill: product
status: complete
objective: ""
inputs_used: []
artifacts_created:
  - path: ""
    type: ""            # e.g. prd, strategy, positioning, metric-tree
    owner: product
decisions: []
assumptions: []
constraints: []
risks: []               # link to risk-register entries
unresolved:
  - owner: ""
    question: ""
validation:
  performed: []
  remaining: []
recommended_next:
  - skill: design
    reason: ""
```

## Field-by-field

- **handoff_version** — schema version; bump only on a breaking field change, not on content churn.
- **skill** — always `product`, the emitting skill.
- **status** — `complete` (ready to consume), `partial` (usable but with named gaps in
  `validation.remaining`), or `blocked` (do not proceed downstream until named unresolved items
  clear). Never mark `complete` while `validation.remaining` holds anything material.
- **objective** — one sentence stating what this artifact set decided. The only universally
  required field; every other field may be empty, and a consumer must tolerate it absent, not treat
  absence as a schema violation.
- **inputs_used** — the evidence and artifacts this run consumed (a research doc path, prior
  analytics, a founder brief), so a consumer can trace provenance instead of taking the artifact on
  faith.
- **artifacts_created** — one entry per artifact, each `{path, type, owner: product}`. `type`
  matches the reference that produced it: `prd`, `strategy`, `positioning`, `business-model`,
  `market-sizing`, `metric-tree`, `risk-register`, and so on.
- **decisions** — the material calls made and why, in enough words that a consumer understands the
  reasoning, not just the outcome.
- **assumptions** — unvalidated claims the artifact rests on. Mirror the risk register's assumption
  entries; do not re-derive or re-litigate them here.
- **constraints** — hard limits downstream must respect: budget, timeline, platform, compliance,
  brand.
- **risks** — pointers into the risk register's entries by id; never inline the whole register.
- **unresolved** — open questions, each with a named `owner`, never a bare "TBD". An orphaned
  question with no owner never gets answered.
- **validation** — `performed` (what was actually checked — "validated with 5 customer interviews")
  versus `remaining` (what's still open — "market size not independently verified"). This is the
  field that keeps `status: complete` honest.
- **recommended_next** — the sibling skill(s) to invoke next and why. Name them; never silently
  invoke them — that boundary rule from the main SKILL.md applies at the handoff seam too.

## What design needs

A validated problem statement, the target segment or persona, the success metrics from
[Metrics](metrics.md) design should design toward, the constraints it must not violate (platform,
brand, accessibility floor), and the open questions design should not silently resolve on its own.
Point design at the artifact paths in `artifacts_created`, not a restatement of them.

## What architecture needs

The non-functional requirements surfaced during discovery or the PRD (scale, latency, data
residency, compliance), the constraints, the risks tagged technical-feasibility in the risk
register, and any acceptance criteria that gate technical decisions — an agentic product's eval
thresholds, for instance, are architecture-relevant because they constrain model choice and infra,
not just launch-readiness.

## The seam discipline

The human artifact — the PRD, the strategy doc, the metric tree, the risk register — is the real
deliverable. `handoff.yaml` is a routing index into it, never a copy. If a consumer needs more than
the index gives, that means the human artifact itself is incomplete, not that the yaml should grow
to compensate. Only `objective` is required; every downstream skill must tolerate every other field
absent.

## Validation

Before emitting: `objective` is one sentence and non-empty; every path in `artifacts_created`
actually resolves to a real artifact; `assumptions` and `risks` trace to entries recorded during the
work, not invented at handoff time; every `unresolved` item names an owner; `recommended_next`
names an actual sibling skill (`design`, `architecture`, `marketing`, `growth`), not a vague "further
work needed."

## Failure modes

- **Duplicating the PRD into handoff.yaml** — defeats its purpose as an index; keep it a pointer.
- **Emitting handoff.yaml in standalone mode** when nothing downstream will read it — skip it.
- **`status: complete` with a non-trivial `validation.remaining`** — use `partial` and say what's
  outstanding.
- **Silently invoking design or architecture** instead of naming them in `recommended_next` — the
  same never-auto-invoke rule the main skill states applies here.
- **An `unresolved` item with no owner** — assign one or drop the item until it has one.

<!-- pattern mirrors the sibling design-skill's handoff.md (Tamás Gábor, MIT) — same seam discipline,
same handoff.yaml shape, adapted from design→frontend to product→design/architecture -->
