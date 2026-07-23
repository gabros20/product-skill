# Market

Purpose: Size the market (TAM/SAM/SOM, multiple frameworks, source-calibrated confidence) and map
the competitive landscape (competitor profiles, and — where the decision needs it —
Porter's Five Forces / SWOT / PESTEL) so strategy and business-case decisions rest on a bounded
range with named sources, never a fabricated point estimate.

Read when:
- The request asks to "size the market," "what's our TAM," "how big is this opportunity," "profile
  competitors," or "analyze the landscape."
- A business case, pitch, or PRD needs a market-size or competitive-positioning figure to justify
  investment.

Skip when:
- The ask is the business model or pricing itself — use [Business model](business-model.md); pull
  competitor price points from here only as a pricing input.
- The ask is market-copy positioning against competitors for demand generation — that's `marketing`;
  this reference stops at the analytical landscape, not the campaign narrative.
- The ask is a single competitor's UX/feature teardown for design inspiration — that's `design`.

Inputs:
- An explicit market definition: product category, geography, customer type, and time horizon.
  Refuse to size an ambiguous market ("the AI market") — narrow it with the requester first.
- Any available data: filings, industry reports, comparable-company figures, or none — state which.

Produces:
- TAM/SAM/SOM figures via top-down, bottom-up, and comparable-company methods, each carrying a
  source-calibrated confidence tier, presented as a range with sensitivity — never a single number.
- Competitor profiles and a landscape synthesis, using Porter's Five Forces / SWOT / PESTEL as
  selectable tools rather than a mandatory checklist.

## Contents

- Market sizing (top-down/bottom-up/comparable, TAM-misuse guard, confidence tiers)
- Competitive / landscape analysis (profiles, Porter's Five Forces, SWOT, PESTEL)
- Validation
- Failure modes and handoff

## Procedure

### 1. Market sizing — run every applicable framework, report divergence

Define the market explicitly before sizing anything: category, geography, customer segment, and
time horizon. An undefined boundary invalidates every number built on it.

Run all frameworks the data supports; disagreement between them is the finding, not noise:
- **Top-down** — start from a published total-market figure (industry report, government stat,
  comparable public-company revenue) and narrow it by the stated segment/geography share.
- **Bottom-up** — count addressable buyers × realistic price/usage; build this from primary
  counts (e.g. named business count, employee count) wherever possible.
- **Comparable-company / analogous-market** — infer size from a public comparable's disclosed
  revenue or market share in an adjacent category.

Report as: TAM (total addressable demand if 100% of the defined market bought) → SAM (the share
reachable by this product's actual channel/segment/geography constraints) → SOM (the share
realistically capturable in a stated timeframe given competition and go-to-market capacity).

**TAM-misuse guard** — TAM is a ceiling, not a projection:
- TAM is total addressable demand at 100% share; it is never the revenue forecast.
- Revenue projections are derived from **SOM**, not TAM — if a business case cites TAM as expected
  revenue, correct it before it ships.
- Sizing is always a **range**, never a single "definitive" number; present low/mid/high with the
  method and confidence behind each bound.
- Run a sensitivity check on the 1–2 assumptions the range is most sensitive to (e.g. price point,
  attach rate, addressable share) and state how the range moves if each shifts.

**Source-calibrated confidence tiers** — label every figure, don't blanket-label all web-sourced
numbers Low:

| Tier | Source examples |
|---|---|
| High | Government statistical agencies, SEC filings / 10-K, primary-methodology industry-body data |
| Medium | Gartner / IDC / Forrester (note the report date), industry association figures |
| Low | Secondary aggregators, uncited blog figures, undated estimates |

**Refusal protocols** — refuse rather than fabricate:
- Refuse unbounded fabrication (a number with no traceable source or method).
- Refuse an ambiguous market definition — force scoping before sizing.
- Refuse to present a single "definitive" figure — always a range.
- Flag hand-wavy sources (an uncited blog post, a single tweet) as Low confidence plus an explicit
  assumption, never silently absorbed as fact.

### 2. Competitive / landscape analysis

**Competitor profiles** — for each named competitor: what job it does, pricing model, target
segment, and the one "so what" a prospect would need to hear to choose or reject it. Always include
the "do nothing" / manual-workaround alternative as a competitor — it is usually the real baseline.

**Selectable landscape tools** — choose the tool(s) the decision actually needs; do not run all
three by default:
- **Porter's Five Forces** — competitive rivalry, supplier power, buyer power, threat of new
  entrants, threat of substitutes. Use when the question is structural: "is this market
  attractive to enter/defend," not "which feature should we build."
- **SWOT** — Strengths/Weaknesses (internal) vs Opportunities/Threats (external), scoped to this
  product against this competitive set. Use for a fast, single-page strategic snapshot.
- **PESTEL** — Political/Economic/Social/Technological/Environmental/Legal. Use when external
  macro-forces (regulation, platform shifts) materially affect the opportunity, not as a default
  addition to every analysis.

## Validation

- The market definition (category/geography/segment/horizon) is stated explicitly before any figure.
- TAM/SAM/SOM is presented as a range, each bound tagged with its confidence tier and method.
- No projection cites TAM as expected revenue — SOM is the revenue basis.
- Competitor profiles each answer "so what," and the "do nothing" alternative is included.
- Any landscape tool used (Five Forces/SWOT/PESTEL) is named as a deliberate choice, not a rote
  checklist run for its own sake.

## Failure modes and handoff

- **No data exists for a framework** — state that plainly and drop the framework rather than
  fabricating inputs; a two-framework range with stated gaps beats a three-framework range with an
  invented one.
- **The request wants pricing derived from competitor prices** — capture the price points here,
  then hand the pricing decision itself to [Business model](business-model.md).
- **The request wants market-copy positioning for demand generation** — name and recommend
  `marketing`; this reference's output is the analytical landscape, not campaign narrative.
- **The request is for an agentic/AI product** where the addressable market shifts with model
  capability or cost curves — read [surface-agentic.md](surface-agentic.md) before finalizing SAM/SOM,
  and flag capability-driven market expansion as an assumption, not a sized fact.
