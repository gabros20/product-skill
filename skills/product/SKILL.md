---
name: product
description: >-
  Decide what to build, for whom, and why, then specify it for delivery — product discovery,
  strategy, and PRDs across websites, web/SaaS apps, mobile, agentic/AI products, and internal
  tools. Use for opportunity discovery, user and market research, jobs-to-be-done, strategy and
  positioning, business-model and pricing, market sizing, PRDs and acceptance criteria,
  prioritization and roadmaps, success metrics and metric-trees, and risk/assumption registers. Not
  for UI/experience design, implementation, system architecture, marketing/GTM, or growth
  experiments — recommend those sibling skills.
---

# Product Strategy

## Mission and boundary

Decide what to build, for whom, and why it matters — then specify it precisely enough that design
and engineering can build the right thing. Own the front of the product lifecycle: discovery,
strategy, definition, prioritization, and the measures of success. Produce validated problems,
strategy, positioning, PRDs, prioritized roadmaps, success metrics, and a living risk register.

Own the *decision* about what to build; not its execution. Experience and UI design belong to
`design`; production code to `frontend`, server behavior to `backend`, the analytical data plane to
`data`, and model-driven behavior to `ai`; system and technical decisions to `architecture`; the
ship/no-ship decision and independent verification to `quality`; running the product in production
to `operate`; demand generation, positioning-as-market-copy, and go-to-market to `marketing`; funnel
experimentation and growth loops to `growth`; qualification and CRM to `sales`; onboarding, support,
and adoption to `success`; and business processes spanning systems the product does not own to
`automation`. Contribute to those; own none. Operate independently when invoked alone;
when upstream artifacts (research, founder brief, existing analytics) are supplied, use them without
silently overriding established decisions. Recommend adjacent skills; never invoke them
automatically unless the user requested a composition workflow.

## Route before acting

1. Identify the **one primary job** the request needs.
2. Select **at most one surface overlay** — the product type reshapes discovery, metrics, and the PRD.
3. Read every selected reference completely before producing the affected artifact; do not load
   unrelated references.
4. For an agentic/AI product, always add the agentic overlay — it changes acceptance criteria,
   metrics, and risk.

### Primary job

| User intent | Read | Produce |
|---|---|---|
| Discover the problem, talk to users, synthesize research | [Discovery](references/discovery.md) | Opportunity Solution Tree, interview plan/synthesis, validated problem, JTBD |
| Set product vision and strategy | [Strategy](references/strategy.md) | Strategy kernel, vision, principles, Lean Canvas |
| Position the product and define its value proposition | [Positioning](references/positioning.md) | Positioning statement, value-proposition canvas, segment and audience selection |
| Model the business and price it | [Business model](references/business-model.md) | Business Model Canvas, pricing hypotheses (value-based, tiers, Van Westendorp) |
| Size the market and analyze competitors | [Market](references/market.md) | TAM/SAM/SOM with source-calibrated confidence, competitor profiles, landscape |
| Write the PRD, spec, or acceptance criteria | [PRD](references/prd.md) | Altitude-flexed PRD (1-pager ↔ full ↔ machine-readable), Given/When/Then criteria, user/job stories |
| Prioritize and build a roadmap | [Prioritization](references/prioritization.md) | Multi-engine prioritization (RICE/ICE/Opportunity-Score/Kano/MoSCoW) + outcome roadmap |
| Define success metrics | [Metrics](references/metrics.md) | North-star + metric tree, HEART/AARRR mapping, guardrails, OKRs |
| Surface and maintain risks and assumptions | [Risk register](references/risk-register.md) | Living register: assumption taxonomy, demand hierarchy, evidence ladder, red-team, pre-mortem |

### Surface overlay (at most one)

| Product type | Read | Reshapes |
|---|---|---|
| Marketing or content website | [Website](references/surface-website.md) | Conversion goal, positioning-led discovery, audience journey |
| Web or SaaS application | [App & SaaS](references/surface-app-saas.md) | Activation/retention, pricing tiers, MRR/churn metric trees, commercial lifecycle |
| Mobile app (iOS/Android) | [Mobile](references/surface-mobile.md) | App-store context, platform expectations, mobile discovery |
| **Agentic / AI product** | [Agentic](references/surface-agentic.md) | **Capability & failure-mode mapping, eval-as-acceptance-criteria, human-in-loop, non-determinism/latency/cost/safety risk, model choice** |
| Internal or enterprise tool | [Internal](references/surface-internal.md) | Stakeholder-driven, adoption over acquisition |

## Universal invariants

- **Discovery before solution.** Frame opportunities, not features; never let stakeholders design
  the solution before the problem is validated. When uncertainty is about desirability, run the
  cheapest probe that tells the harshest truth before committing to build.
- **Label evidence.** Tag every claim as Fact (source-supported), Inference (reasoned), or
  Assumption (unvalidated). Assumptions flow to the risk register, not into a fabricated fact.
- **Numbers carry calibrated confidence.** Market sizes and metric targets are ranges with a
  source-quality tier, never a false single point. TAM is a ceiling; derive revenue from SOM.
- **Prioritization is multi-engine.** Run every applicable framework, report the *divergence* as the
  finding, and refuse to fabricate missing inputs rather than forcing one rank.
- **Outcomes over outputs; specificity over superlatives.** A metric, a %, a timeframe, a named
  segment — never "great results" or "everyone."
- **State the surface and the register.** Name the product type; recommend — never silently invoke —
  sibling skills for work you do not own.

## Core workflow

1. Inspect the request, evidence, constraints, and existing artifacts.
2. Select the smallest sufficient route: one primary job, at most one surface overlay.
3. Record material assumptions and unresolved inputs; open a risk-register entry for each.
4. Produce the requested artifact grounded in the named framework the reference specifies.
5. Validate it against the request, constraints, and acceptance criteria; state confidence.
6. Emit a compact handoff when downstream design/architecture work is expected.

## Artifact contract

Each reference defines its artifact. Every product artifact must record: the objective and target
segment; facts/inferences/assumptions distinguished; the decisions made and their evidence; success
metrics or acceptance criteria; open questions with owners. A PRD additionally states scope
(in/out/future), and — for an agentic product — its eval set as acceptance criteria. Provide a
machine-readable companion (`handoff.yaml`) whenever downstream work is expected; see
[Handoff](references/handoff.md).

## Completion and handoff

Before completion:

- Confirm every requested artifact exists and its acceptance criteria are checkable.
- Record decisions, assumptions, risks, and unresolved questions with owners.
- Distinguish validation performed from validation remaining; state confidence honestly.
- When downstream work is expected, emit the `handoff.yaml` companion with artifact paths,
  constraints, decisions, risks, and the recommended next skill — without duplicating the full
  artifact.

## Resources

Load only what the selected route requires.

- Primary jobs: [discovery](references/discovery.md) · [strategy](references/strategy.md) ·
  [positioning](references/positioning.md) · [business-model](references/business-model.md) ·
  [market](references/market.md) · [prd](references/prd.md) ·
  [prioritization](references/prioritization.md) · [metrics](references/metrics.md) ·
  [risk-register](references/risk-register.md)
- Surface overlays: [website](references/surface-website.md) ·
  [app-saas](references/surface-app-saas.md) · [mobile](references/surface-mobile.md) ·
  [agentic](references/surface-agentic.md) · [internal](references/surface-internal.md)
- Pipeline: [handoff](references/handoff.md) — standalone vs pipeline behavior and the `handoff.yaml`
  companion consumed by `design` and `architecture`.
