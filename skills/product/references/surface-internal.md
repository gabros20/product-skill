# Surface: Internal / enterprise tool

Purpose: Reshape discovery, strategy, and prioritization for a tool built for employees or partners
rather than paying end customers — adoption replaces acquisition, the buyer is not the user, and
operational cost drives prioritization instead of revenue.

Read when:
- The surface is an internal tool, admin panel, ops dashboard, or enterprise system used by
  employees/partners.

Skip when:
- The tool is sold externally as a product — even to businesses — use
  [App & SaaS](surface-app-saas.md); commercial lifecycle and acquisition apply there.

Inputs:
- The sponsoring stakeholder (buyer) and the actual daily user(s), named separately — they usually
  differ.
- The workflow currently being used (spreadsheet, paper, legacy tool) that this replaces.

Produces:
- A stakeholder + workflow discovery map feeding [Discovery](discovery.md).
- An adoption/task-efficiency metric set feeding [Metrics](metrics.md).
- Cost-based prioritization feeding [Prioritization](prioritization.md).

## Shifts

- **Discovery.** Interview both the stakeholder who commissions the tool and the worker who operates
  it daily — their success definitions diverge (stakeholder wants throughput/compliance; user wants
  less friction). Map the existing workaround before proposing a replacement.
- **Strategy.** There is no market to win — the "competitor" is the status quo workflow and the cost
  of not building it. Frame the strategy kernel around operational risk and cost, not market share.
- **Prioritization.** Rank by operational cost avoided, hours saved, or error/compliance risk
  reduced — not revenue-weighted engines. In RICE, "Reach" is headcount using the workflow, not
  market size.
- **PRD.** Acceptance criteria describe the workflow before/after, not conversion; state any
  compliance or audit requirement as a hard constraint.
- **Metrics.** Success is task-time reduction, adoption rate (% of the target workforce actually
  using it), and error-reduction — never revenue or growth-loop metrics. A mandatory guardrail:
  compliance without shadow-workaround relapse.
- **Risk register.** Track adoption-failure risk (mandated but unused), stakeholder–user
  misalignment, and legacy-workaround relapse as named entries.

**Recommends:** `design` for workflow UX (the "serves the product" register — earned familiarity
over novelty); `architecture` for system integration, data access, and compliance.
