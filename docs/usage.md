# Usage reference

## Activation

`product` should trigger on requests to decide **what to build, for whom, and why**, or to
specify it for delivery. Realistic triggers: "help me figure out what to build," "validate this
problem," "write a PRD," "define our product strategy / positioning," "prioritize this backlog,"
"what should our success metrics be," "size this market," "how should we price this," "define
acceptance criteria for our AI agent."

It should **not** trigger on: "design the onboarding screens" (`design`), "implement the checkout
in React" (`frontend`), "choose the database" (`architecture`), "write the launch campaign"
(`marketing`), or "run an A/B test on the funnel" (`growth`).

Use `/product` as documentation shorthand only. Codex explicit invocation is `$product`; other
clients use an `@` mention, a skill tool, or natural-language activation.

## Mission and boundary

`product` owns the Discover/Strategy stage — the *decision* about what to build, not its execution.
It produces validated problems, strategy, positioning, PRDs, prioritized roadmaps, success metrics,
and a living risk register, then hands a `handoff.yaml` companion to `design` and `architecture`.
It recommends its sibling skills for work it does not own and never silently invokes them.

## Workflow

Pick **one primary job** and **at most one product-type overlay**; read only those references;
produce the artifact grounded in its named framework; validate against acceptance criteria and state
confidence; emit a handoff when downstream work is expected. Stages can be entered directly — an
already-validated problem can go straight to PRD.

## Route by job

| User intent | Reference | Expected contribution |
|---|---|---|
| Discover the problem / synthesize research | `references/discovery.md` | Opportunity Solution Tree, interview plan/synthesis, JTBD |
| Set vision and strategy | `references/strategy.md` | Strategy kernel, vision, Lean Canvas |
| Position and define the value proposition | `references/positioning.md` | Positioning statement, value-prop canvas, segment |
| Model the business and price it | `references/business-model.md` | Business Model Canvas, pricing hypotheses |
| Size the market and analyze competitors | `references/market.md` | TAM/SAM/SOM with confidence, competitor profiles |
| Write the PRD / acceptance criteria | `references/prd.md` | Altitude-flexed PRD, Given/When/Then criteria, stories |
| Prioritize and roadmap | `references/prioritization.md` | Multi-engine prioritization + outcome roadmap |
| Define success metrics | `references/metrics.md` | North-star + metric tree, guardrails, OKRs |
| Track risks and assumptions | `references/risk-register.md` | Living register: taxonomy, demand hierarchy, red-team |

Product-type overlays (`surface-website`, `surface-app-saas`, `surface-mobile`, `surface-agentic`,
`surface-internal`) reshape the primary job for that product type. Always add `surface-agentic` for
an AI/agentic product — it changes acceptance criteria, metrics, and risk.

## Outputs and completion

| Output | Complete when |
|---|---|
| Validated problem / OST | Evidence labeled Fact/Inference/Assumption; opportunities framed, not features |
| PRD | Scope in/out/future stated; acceptance criteria checkable; risks and open questions with owners |
| Prioritized backlog | Every applicable framework run; divergence reported, not a single forced rank |
| Metric tree | North-star selected; input/health/counter-metrics decomposed; guardrails set |
| Risk register | Each assumption categorized, on the evidence ladder, with a validation/challenge plan |

When downstream work is expected, provide the `handoff.yaml` companion with artifact paths, owners,
decisions, constraints, risks, unresolved questions, and the recommended next skill — never a
duplicate of the full artifact.
