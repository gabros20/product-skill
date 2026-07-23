# Metrics

Purpose: Choose the one metric that best predicts long-term value, decompose it into a metric tree
down to leaf levers a team can pull, and pair every metric with a guardrail so optimizing one number
doesn't quietly break another.

Read when:
- Defining success metrics for a strategy, PRD, or launch.
- A metric tree, North Star, or OKR set is requested explicitly.
- A PRD or strategy needs success metrics and none exist yet.

Skip when:
- The ask is funnel experimentation or A/B test design on an existing metric — that's `growth`'s
  execution layer; this reference picks the metric, growth moves it.
- The ask is building the dashboard, event schema, or tracking plan itself — that's `data`'s
  instrumentation job; this reference defines what to instrument, not how.

Inputs: the validated problem or strategy this product serves, the target segment, and (if it
exists) prior analytics or an existing metric set to build on rather than replace.

Produces: a North Star metric, a metric tree (input/health/counter-metrics), a HEART or AARRR
mapping where relevant, and an OKR set that targets the tree.

## Contents
- The metric tree (the differentiator)
- Selecting the North Star
- HEART and AARRR: named overlays
- Four criteria for a good metric
- OKRs as outcome targets
- Agentic products
- Validation and failure modes

## The metric tree (the differentiator)

A North Star alone is not a metrics strategy — it's a headline with nothing decomposed under it.
Build the full tree, four layers (Amplitude's North Star Playbook; Croll & Yoskovitz, *Lean
Analytics*): **North Star** (the single top-line outcome) → **input metrics** (3–5 metrics that
causally drive it, each owned by a team or lever) → **health metrics** (signals flagging that the
North Star is being gamed at the expense of overall product health) → **counter-metrics** (a
guardrail paired with every optimized metric, so a gain reads as progress only if its pair holds).

```
North Star: Weekly Teams Completing a Core Job
├─ Input: New-Team Activation Rate
│   ├─ Driver: Signup → First-Value Time
│   └─ Driver: Onboarding Completion Rate
├─ Input: Existing-Team Engagement Depth
│   ├─ Driver: Core Action Frequency (per week)
│   └─ Driver: Feature Breadth Adopted
├─ Input: Retention Rate
│   ├─ Driver: Week-4 Retention
│   └─ Driver: Reactivation Rate
├─ Health: NPS / CSAT, Support Ticket Rate, Error Rate
└─ Counter-metric per input above (e.g., Activation Rate ⨯ Time-to-First-Value —
   don't reward fast signups that never reach real value)
```

Stop decomposing at a **leaf lever** — a metric a team can move this quarter with a specific change;
an abstraction ("engagement") isn't a finished leaf. Cap the active set at 5–7 metrics; more and
nobody can recite it from memory, failing "understandable" below.

## Selecting the North Star

The North Star is the one metric that best predicts long-term customer value — not revenue, not a
vanity output metric. Revenue is a lagging consequence of value delivered; a vanity metric (signups,
page views) moves without a customer noticing anything. The right North Star is a **value moment**:
Slack's "2,000 messages sent by a team," Facebook's "7 friends in 10 days." Test a candidate: does it
reflect value experienced, not just activity? Is it a leading indicator, actionable before revenue
moves? Does it decompose into levers a team controls? Any "no" means it's a proxy, not the North Star.

## HEART and AARRR: named overlays

Use Google's **HEART** (Rodden, Hutchinson & Fu, 2010) — Happiness, Engagement, Adoption, Retention,
Task success — when the tree needs UX-quality surfaces the funnel alone doesn't capture. Define a
Goal, a Signal, and a Metric per applicable category (the Goals-Signals-Metrics grid, not the name
alone). Happiness and Task success usually need qualitative input; tag that collection to `design`.

Use Dave McClure's **AARRR** ("pirate metrics") — Acquisition, Activation, Retention, Referral,
Revenue — only to stage *which part of the funnel* an input metric belongs to. Never use it to design
the experiments that move a stage; that execution work is `growth`'s job — recommend, don't build it.

## Four criteria for a good metric

Before a metric enters the tree, check it against Croll & Yoskovitz's four criteria (*Lean
Analytics*): **comparative** (meaningful across time, cohorts, or segments), **understandable**
(statable without a dashboard open), **a ratio or rate** ("signups" is a count, "signup-to-activation
rate" is a rate), and **behavior-changing** (a mover changes what the team does next). Failing any of
the four makes it a reporting number, not a working one — keep it out of the active 5–7.

## OKRs as outcome targets

Once the tree exists, use OKRs (Doerr, *Measure What Matters*) to target it for a cycle: one
Objective (qualitative, inspiring) with 2–4 Key Results (quantitative, time-bound outcomes — never
restated tasks). A Key Result phrased as an activity ("ship the onboarding redesign") is a project
plan in an OKR's clothes; phrase it as the metric it should move ("raise Week-4 Retention from 34%
to 42%"). Distinguish **committed** Key Results (must hit 1.0, a controlled leaf lever) from
**aspirational** ones (0.6–0.7 is healthy, not a miss) — grading a stretch KR at 1.0 teaches teams to
sandbag next cycle.

## Agentic products

For an agentic or AI product, the tree gains a distinct branch: eval pass-rate, task-success rate,
and escalation-to-human rate as first-class input or counter-metrics, not afterthoughts on a
conventional funnel. Full treatment — including why eval thresholds sit in acceptance criteria, not
success metrics — is in `surface-agentic.md`; add that overlay rather than restating it here.

## Validation and failure modes

Before calling the metric set done: the North Star passes the three selection questions; the active
tree has ≤5–7 metrics, every leaf a controllable lever, not an abstraction; every optimized metric
has a named counter-metric; every metric passes at least three of the four Lean Analytics criteria;
every committed Key Result maps to a leaf lever, and every aspirational one is graded on the 0.6–0.7
band, not 1.0.

Common failures: revenue or a vanity count as North Star; a tree with no counter-metrics; a Key
Result that's a task, not an outcome; funnel-stage work done here instead of tagged to `growth`;
instrumentation designed here instead of tagged to `data` — this reference defines *what* to
measure, not the pipeline that measures it. Emit the tree and OKRs into `handoff.yaml`'s
`artifacts_created` (type `metric-tree`) when downstream work is expected — see [Handoff](handoff.md).

<!-- sources: Amplitude North Star Playbook + Croll & Yoskovitz Lean Analytics; assimovt/productskills
metrics-framework; Rodden/Hutchinson/Fu 2010 HEART; McClure AARRR; Doerr Measure What Matters;
product-on-purpose/pm-skills okr-writer + okr-grader (0.6-0.7 band) -->
