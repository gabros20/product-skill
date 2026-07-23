# Prioritization

Purpose: run every prioritization framework the available inputs actually support, surface where
they disagree as the finding, and turn the result into an outcome roadmap — never collapse to one
score when the frameworks point different ways.

Read when:
- Ranking a backlog, scoring competing feature bets, or building a roadmap.
- Deciding which framework applies given the inputs actually on hand.
- Presenting a roadmap to stakeholders without regressing into a re-sorted feature list.

Skip when:
- The opportunity hasn't been discovered or validated yet — `discovery.md`/`risk-register.md`
  first; there's nothing to rank against an unvalidated idea.
- The question is what to measure once something ships, not which bet to make — `metrics.md`.
- The candidate is a single already-committed bet needing a scope/appetite cut, not a ranking
  across bets.

Inputs: a candidate list (3 or more items) with whatever inputs actually exist per item —
reach/impact/effort estimates, stakeholder criteria, customer research, or none of the above.

Produces: a cross-framework score table with an Agreement/Divergence column, the named driver
behind every divergent item, and an outcome roadmap (Now/Next/Later).

## Contents
- Run every applicable framework
- The frameworks
- Applicability gate
- Divergence is the finding
- Refusal protocols
- Outcome roadmap
- Agentic overlay
- Validation
- Failure modes and handoff

## Run every applicable framework

Core principle ([product-on-purpose/pm-skills](https://github.com/product-on-purpose/pm-skills),
`define-prioritization-framework`): "Where RICE and ICE agree, confidence rises. Where they
disagree, the divergence reveals hidden assumptions — often the most valuable finding." Never pick
one framework up front; run every framework the inputs support, then compare.

## The frameworks

| Framework | Formula / mechanic | Needs |
|---|---|---|
| RICE | (Reach × Impact × Confidence) / Effort — Impact 0.25/0.5/1/2/3; never set Confidence at 100% without hard data | quantitative reach/impact/effort, or an agreed estimation scaffold |
| ICE | Impact + Confidence + Ease, averaged — the coarse always-applicable fallback | rough 1–10 judgment, no data required |
| Opportunity Score (Olsen) | Importance × (1 − Satisfaction) with both normalized to 0–1 (equivalently Importance × (1 − Satisfaction/10) on a 1–10 survey scale); highest = most underserved | customer importance/satisfaction survey |
| Kano | classifies each item as Basic/Performance/Excitement/Indifferent/Reverse from paired functional/dysfunctional survey questions | **GATED** — customer research required |
| MoSCoW | Must/Should/Could/Won't — bounds a fixed scope, doesn't rank | an agreed scope or time box |
| Weighted Scoring | Σ(criterion × weight) across stakeholder-agreed criteria; default 5 criteria at equal 20% unless stated otherwise | multiple stakeholders, agreed criteria |

## Applicability gate

Gate each framework by input availability before running it — don't default to one. RICE without
numbers: offer an estimation scaffold, or fall back to ICE and say so. Kano is excluded by default;
unlock it only when customer research (a paired survey) exists, and state exactly what's missing
rather than running it on guesses. Weighted Scoring from a single stakeholder isn't weighted
scoring — it's one person's opinion with decimals; redirect to ICE/RICE. Equal-weighting in
Weighted Scoring is itself a choice — flag it, don't let it pass silently as neutral.

## Divergence is the finding

One table, one row per candidate, one column per applicable framework's rank or tier, plus an
**Agreement** column (Agree / Divergent). For every Divergent item, name the specific dimension
driving the split — e.g., "high Reach but low Confidence in RICE vs. a comparably-ranked-but-more-
certain ICE score," or "Opportunity Score flags an underserved segment that Weighted Scoring's
criteria don't capture." The divergence, not the final rank, is usually the most valuable output —
it exposes which assumption (reach, confidence, or whose criteria matter) is actually load-bearing.

## Refusal protocols

- Fewer than 3 candidates → decide directly; the apparatus isn't needed.
- No stated decision context or goal → ask; don't assume one.
- RICE requested without reach/impact/effort → offer an estimation scaffold or fall back to ICE,
  and say which happened.
- A framework is insisted on that the inputs don't support (Kano with no research) → warn, then
  exclude or gather the missing input — never fabricate numbers to force it.
- Weighted Scoring from one stakeholder → redirect to ICE/RICE.
- Kano without customer research → exclude, and state precisely what unlocks it.

## Outcome roadmap

Now/Next/Later (or theme-based), each item an outcome sentence — never a feature name alone:
"Enable [segment] to [outcome] so that [impact]." Now holds 1–3 items with no committed date beyond
roughly 6 weeks; Next and Later stay outcome-level, undated. Every item cites the prioritization
result that put it there. Anti-pattern check: if removing the justification column would leave the
roadmap unreadable, it's a real roadmap; if it reads fine without it ("Add SSO," "Redesign
settings"), it's a backlog wearing a roadmap's clothes — rewrite before delivering.

## Agentic overlay

For an agentic/AI candidate, Impact and Effort inputs should include eval-pass-rate headroom,
latency, and inference cost alongside reach — a feature that scores well on RICE but fails its
eval gate isn't ready to rank as shippable. See `surface-agentic.md` for how those inputs are
produced.

## Validation

- Every candidate scored on every applicable-and-only-applicable framework; excluded frameworks
  state why.
- Agreement column filled for every row; every Divergent item names its driver.
- Roadmap items are outcome sentences with a named segment and impact, not feature names.
- Now capped at 1–3 items, none dated beyond roughly 6 weeks.

## Failure modes and handoff

- **Forced consensus**: collapsing to one framework or one score to avoid an awkward divergence —
  report the divergence instead.
- **Fabricated inputs**: inventing reach/impact/confidence numbers to complete RICE — refuse; use
  the scaffold or ICE, and tag the estimate Inference/Assumption.
- **Kano on guesses**: running Kano against assumed customer preference — exclude per the gate;
  recommend `discovery.md` for the missing research.
- **Feature-list roadmap**: Now/Next/Later items with no outcome or segment — rewrite before
  delivering.
- **Ranking the unvalidated**: prioritizing an opportunity `discovery.md`/`risk-register.md` hasn't
  validated yet — send it back first.
- Hand off the roadmap's metric implications to `metrics.md`; hand off to design/architecture via
  `handoff.md` when downstream work is expected.
