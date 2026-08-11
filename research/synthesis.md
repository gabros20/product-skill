# product-skill — synthesis & proposed shape (SIGN-OFF GATE)

Distilled from the four research corpora ([README](README.md)). This is the plan to approve before
building. It defines what `product` owns, why it's not just another PM skill, its faceted router,
its reference set, what to reuse from existing repos, and the authoring bar.

---

## 1. Scope & boundary

`product` is the **Discover/Strategy** stage of the family — the front of the pipeline. It decides
*what to build, for whom, why, and how success is measured*, and hands a spec forward to `design`
(experience) and `architecture` (system).

**Owns:** opportunity/problem discovery · user/market/competitor research synthesis · JTBD ·
vision/strategy/principles · audience & segment selection · value proposition & positioning ·
business-model & pricing hypotheses · PRD & acceptance criteria · scope/prioritization/roadmaps ·
product-level journeys · success metrics & metric-trees · risk/assumption registers.

**Does NOT own (tag & recommend, never absorb):** experience/UX/UI/visual → `design`; production
implementation → `frontend`; system/tech decisions & ADRs → `architecture`; positioning-as-market-
copy, GTM, SEO, campaigns → `marketing`; funnels/experiments-as-execution, PLG loops → `growth`;
qualification/CRM → `sales`; onboarding/support → `success`. Contributes to these; owns none.

**Standalone vs pipeline:** works alone ("here's my idea — give me a strategy + PRD"); in pipeline
mode emits the `handoff.yaml` companion + a product artifact that `design`/`architecture` consume.
It is UPSTREAM — its handoff seeds the same design→frontend chain we already validated.

---

## 2. The differentiator (why this isn't a 7th PM-skills clone)

Generic PM/SaaS discovery is **saturated** (6 collections, 452+ skills — skills & github channels
both confirmed). `product` earns its place only by owning the gaps nobody covers:

1. **Cross-product-type adaptivity** — one skill whose discovery/strategy/metrics/PRD *reshape* per
   surface (marketing site vs SaaS vs iOS vs agentic), instead of a SaaS-shaped default. This is the
   faceted-router bet (§3), and it's the same architecture that worked for `frontend`.
2. **Agentic/AI-product discovery** — the standout white space: capability & failure-mode mapping,
   **eval sets AS acceptance criteria**, human-in-the-loop scoping, non-determinism/latency/cost as
   first-class product risks, model-choice as a product decision. Nearly absent from every corpus.
3. **Metric-tree decomposition** — north-star is everywhere; driver-tree/input-metric decomposition
   is thin. A dedicated capability.
4. **A living risk/assumption register** — not a one-off canvas; a maintained artifact with a demand
   hierarchy (L0–L4), evidence ladder (weak/medium/strong), and a challenge loop (red-team).
5. **PRD altitude flexibility** — one-pager ↔ full PRD ↔ machine-readable spec, chosen by product
   type & audience (incl. an AI-eval-block variant à la `ProductSpec` for the agentic path).

---

## 3. Proposed SKILL.md shape — faceted router

Mirrors the family pattern (frontend's primary-job + overlays). The agent selects **one primary
job**, **≤1 surface overlay**, and the **lifecycle mode**, then loads only those references.

### Primary job (exactly one)

| User intent | Reference | Produces |
|---|---|---|
| Discover the problem / talk to users / synthesize research | `discovery.md` | Opportunity Solution Tree, interview plan/synthesis, validated problem |
| Set vision & strategy | `strategy.md` | Strategy kernel (Rumelt), vision, principles, Lean Canvas |
| Position & define the value proposition | `positioning.md` | Positioning statement (Dunford/Moore), value-prop canvas, segment/audience pick |
| Model the business & price it | `business-model.md` | Business Model Canvas, pricing hypotheses (value-based, Van Westendorp, tiers) |
| Size the market | `market-sizing.md` | TAM/SAM/SOM with source-calibrated confidence + sensitivity |
| Research competitors / market | `competitive-research.md` | Competitor profiles, landscape, evidence-tagged synthesis |
| Write the PRD / spec / acceptance criteria | `prd.md` | Altitude-flexed PRD (1-pager ↔ full ↔ machine-readable), GWT acceptance criteria, job/user stories |
| Prioritize & roadmap | `prioritization.md` | Multi-engine prioritization (RICE/ICE/Opp-Score/Kano/MoSCoW) + outcome roadmap |
| Define success metrics | `metrics.md` | North-star + **metric tree** + HEART/AARRR mapping + guardrails, OKRs |
| Build & maintain the risk/assumption register | `risk-register.md` | Living register: 8-category taxonomy, demand hierarchy, evidence ladder, red-team + pre-mortem |

### Surface overlay (≤1) — the cross-product-type bet

Consolidated to **5** at the product-strategy altitude (web-app and SaaS share the same
activation/retention/pricing concerns; iOS vs Android is a design/frontend split, not a product one):

| Surface | Reference | Shifts |
|---|---|---|
| Marketing / content site | `surface-website.md` | conversion goal, positioning-led, audience journey |
| App & SaaS product | `surface-app-saas.md` | activation/retention, pricing tiers, MRR/churn metric trees, commercial lifecycle |
| Mobile app (iOS/Android) | `surface-mobile.md` | app-store context, platform expectations, mobile discovery |
| **Agentic / AI product** *(first-class)* | `surface-agentic.md` | **the differentiator** — deeper reference, plus threaded hooks in the primary jobs (below) |
| Internal / enterprise tool | `surface-internal.md` | stakeholder-driven, adoption over acquisition |

**Agentic is first-class, not just one overlay.** Beyond `surface-agentic.md`, it threads into the
primary jobs: capability & failure-mode mapping in `discovery.md`; **eval-as-acceptance-criteria** +
an AI-eval PRD block (ProductSpec-style) in `prd.md`; non-determinism / latency / cost / safety in
`risk-register.md`; eval scores as success metrics in `metrics.md`; model choice as a product
decision in `strategy.md`.

### Lifecycle mode + handoff

`handoff.md` — standalone vs pipeline behavior; the `handoff.yaml` companion; the seam into
`design`/`architecture` (what a downstream skill needs: validated problem, target segment, success
metrics, constraints, open questions).

### Universal invariants (always-loaded, in SKILL.md body)

- Discovery before solution — "never let customers design the solution"; opportunities, not features.
- Every claim tagged **Fact / Inference / Assumption**; assumptions flow to the risk register.
- Prioritization runs *all applicable* engines and reports **divergence**; never fabricates missing
  inputs (refusal protocols).
- Market/metric numbers carry **source-calibrated confidence**; a range, never a false point estimate.
- Outcomes over outputs; specificity over superlatives.
- State register/product-type explicitly; recommend—never silently invoke—sibling skills.

---

## 4. Reference set (13 primary + 6 surface + handoff)

Each reference grounded in the canon the research converged on, with sources cited. Primary:
`discovery · strategy · positioning · business-model · market-sizing · competitive-research · prd ·
prioritization · metrics · risk-register`, plus `handoff`. Surfaces: `website · webapp · saas ·
mobile · agentic · internal`. (Exact split TBD in build — some may merge per the authoring standard's
"don't split what's always loaded together" rule.)

---

## 5. Reuse map — adapt, credit, don't clone

| Source | Take |
|---|---|
| `assimovt/productskills` | Overall structure (one framework per file); closest analog |
| `product-on-purpose/pm-skills` | Triple-Diamond spine; **CI-enforced eval contract**; Build Risk Review taxonomy; multi-engine prioritization; source-calibrated market-sizing |
| `phuryn/pm-skills` | Opportunity Solution Tree, prioritization formulas, 8-section PRD, 8-category assumption taxonomy, strategy red-team |
| `deanpeters/PM-Skills` | MITRE Problem Framing Canvas, positioning template, PoL Probe, Autonomous Investigation protocol |
| `gokulrajaram/ProductSpec` | Machine-readable PRD + **AI-eval fenced blocks** (agentic PRD variant) |
| webdesign `[product]` (58 items) | Register decision, premium↔information dial, trust/E-E-A-T, persuasion/conversion, pricing psychology, discovery discipline |
| X corpus | Startup-idea selection checklist, lean-PRD structure, value-based pricing method |

Canon references (books/frameworks) cited in each reference: Torres, Fitzpatrick, Christensen, Cagan,
Rumelt, Osterwalder, Dunford, Moore, Olsen, Doerr, Ries, Singer, Perri, Blank.

---

## 6. Authoring & eval bar

Author to the family's high-signal standard, and adopt the **CI-enforced eval contract** pattern
from `product-on-purpose`: per skill/reference → trigger fixtures (≥16 routing queries incl.
near-misses) + output-scenario rubric + reciprocal boundary pointers to siblings. Build on the
hardened `skill-template` (About config, design-first site, reader-first Remotion, evals scaffold).
Release as its own `product-skill` repo, own version/site/changelog.

---

## 7. Decisions (signed off 2026-07-23)

1. **Surfaces:** 5 overlays — `website · app-saas · mobile · agentic · internal` (consolidated from 6).
2. **Agentic:** first-class — richer `surface-agentic.md` + threaded hooks across discovery/prd/
   risk/metrics/strategy (see §3).
3. **PRD altitude:** one `prd.md` with modes (1-pager ↔ full ↔ machine-readable/AI-eval), not split.
4. **Depth:** prose-first — no scripts in v1; metric-tree validator + PRD/handoff schema validator
   are v2 candidates.
5. **Reference count:** ~15 (9 primary + 5 surface + handoff), inside the authoring-standard ceiling.

Total build surface: **1 SKILL.md + ~15 references + agents/openai.yaml + evals** (trigger fixtures +
output scenarios), authored to the CI-enforced eval-contract bar, on the hardened `skill-template`.
