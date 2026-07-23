# Agentic / AI product surface

Purpose: Reshape discovery, PRD, risk, metrics, and strategy for a product whose core value comes
from a model acting under uncertainty — not a deterministic feature wrapped around a model call.
This is the differentiator overlay: nearly no PM discipline covers it; treat it as first-class, not
an afterthought bolted onto a normal SaaS flow.

Read when:
- The request involves an LLM or agent doing the job itself — drafting, deciding, calling tools,
  taking multi-step action — not just displaying model output a human fully reviews before it acts.
- A primary-job reference (discovery, prd, risk-register, metrics, strategy) hits an agentic product
  and needs the deeper treatment this file supplies; see §8 for the handoff.

Skip when:
- The model is decorative (e.g., a chatbot FAQ, fixed pre-approved answers, no action capability) —
  treat as [App & SaaS](surface-app-saas.md) with a support feature, not agentic.
- The ask is *how* to implement the eval, prompt, retrieval, or fine-tune — the `ai` skill's
  territory. This file owns the product *decision* on what bar the model must clear, not the
  implementation. Recommend `ai`, don't absorb it.
- The ask is orchestration architecture or tool-integration design — `architecture`'s system
  decision; this file feeds it a capability/risk brief, not a diagram.

Inputs: the job(s) the agent performs and what "correct" looks like per job; existing capability
evidence (prior evals, pilots, benchmarks) — state explicitly when none exists; reversibility/blast
radius of actions and latency/cost ceilings the business tolerates.

Produces: a capability & failure-mode map per job; an eval-set-as-acceptance-criteria block (feeds
[PRD](prd.md)); a human-in-the-loop autonomy decision with escalation paths and named
non-determinism/latency/cost/safety risks (both feed [risk-register](risk-register.md)); a
model-choice hypothesis (feeds [strategy](strategy.md)); agentic success metrics (feeds
[metrics](metrics.md)).

## Contents

1. [What changes](#1-what-changes)
2. [Capability & failure-mode mapping](#2-capability--failure-mode-mapping)
3. [Eval-as-acceptance-criteria](#3-eval-as-acceptance-criteria)
4. [Human-in-the-loop scoping](#4-human-in-the-loop-scoping)
5. [Non-determinism, latency, cost, safety as product risks](#5-non-determinism-latency-cost-safety-as-product-risks)
6. [Model choice as a product decision](#6-model-choice-as-a-product-decision)
7. [Agentic metrics](#7-agentic-metrics)
8. [How agentic threads the primary jobs](#8-how-agentic-threads-the-primary-jobs)

## 1. What changes

In a normal product, desirability (does anyone want this?) and feasibility (can engineering build
it?) are separable, sequential questions. In an agentic product they collapse: the job is
*desirable* only if a model can do it reliably, and reliability is empirical — discovered by testing
the model, not a spec engineering commits to in advance. Discovery must therefore probe capability
*before* trusting a desirability interview: "yes, I'd want an agent to do X" is worthless if no model
clears a usable success rate at X. Run the cheapest capability probe (a scripted prompt against a
representative task sample, hand-graded) before spending budget on demand validation — near-zero
capability means no demand evidence rescues the opportunity.

## 2. Capability & failure-mode mapping

Map every job the agent performs to a **capability tier** and a **failure-mode set** before writing
a PRD line:

| Tier | Definition | Implication |
|---|---|---|
| Reliable | Clears an acceptable success rate with no scaffolding | Candidate for `act` autonomy (§4) |
| Assistable | Performs well only with retrieval, tools, or structured prompting | Ship the scaffolding as a hard dependency |
| Unreliable | Fails or varies too much even with scaffolding | Don't ship agentic — draft/suggest surface, or don't ship the job |

Name **failure modes** per job as first-class product concerns, not engineering bugs — each changes
the acceptance bar, the autonomy level, and the risk register:

- **Hallucination** — confidently wrong output as fact; highest-stakes where the user can't verify.
- **Wrong-tool selection** — the agent picks/sequences the wrong action; compounds in multi-step chains.
- **Silent error** — fails without surfacing it; worse than a visible error since nothing prompts a check.
- **Latency spikes** — retries or long tool chains occasionally break the interaction model the UX assumed.
- **Context poisoning/drift** — a long-running agent's state degrades as wrong context accumulates.

Every mapped failure mode lands either in the eval set (§3) as a case designed to catch it, or the
risk register (§5) — an unmapped failure mode is an unmodeled risk, not an acceptable gap.

## 3. Eval-as-acceptance-criteria

**The headline move: for an agentic feature, the eval set *is* the acceptance criteria, not a QA
afterthought.** A normal PRD's acceptance criteria are Given/When/Then statements checked once; an
agentic PRD's are a *task set the model must pass at a stated rate, re-checked every time the model
or prompt changes.*

Template (adapts the `ai-evals` fenced-block shape from `gokulrajaram/ProductSpec`):

```
id: EVAL-<n>
job: <the job this eval gates>
task_set: <n representative cases, sourced from real usage/pilot transcripts, not invented>
success_definition: <pass criteria — cite the §2 failure modes this eval must catch>
evaluator: exact_match | llm_judge | human_review | tool-trace_check
pass_threshold: <e.g. 90% of task_set, or 0 hallucination-flagged cases out of n>
offline_eval: <run against the fixed task_set before every release>
online_eval: <sampled production traffic, graded continuously — catches drift the offline set misses>
regression_gate: <release blocked if pass_threshold regresses vs the last committed run>
```

Hold this distinction: **eval thresholds that gate a release live in acceptance criteria (pre-launch,
pass/fail), not success metrics (post-launch, outcome tracking)** — the same score can feed both,
but conflating them lets a team ship on a metric that was never actually a gate. `llm_judge` (a
second model grading the first) is the default where exact-match is too brittle — but the judge has
its own failure modes; state its known error rate, don't treat its verdict as ground truth. The `ai`
skill implements the evaluator and harness; this reference owns the task set, success definition, and
threshold — what "good enough" means for this job.

## 4. Human-in-the-loop scoping

Choose an autonomy level per job, never one blanket level for the whole product, using
**reversibility and blast radius** (the one-way/two-way-door test extended to agent actions):

| Level | Behavior | Fits when |
|---|---|---|
| Suggest | Agent proposes; does nothing without explicit user action | Irreversible/high-blast-radius action, or unreliable tier |
| Draft | Agent produces a full artifact for user edit/send | Assistable tier; user is the domain expert |
| Act-with-approval | Executes after one explicit confirmation | Reliable tier, reversible or low-blast-radius, user still wants a checkpoint |
| Act | Executes with no per-action confirmation | Reliable tier, reversible, low blast radius, fast escalation path |

Define the **escalation path** alongside the level: what triggers hand-off to a human (low
confidence, a flagged failure mode, a threshold breach), who receives it, what the user sees while
waiting. A level with no escalation path is incomplete — it promises action with no stated recovery
when the action is wrong.

## 5. Non-determinism, latency, cost, safety as product risks

Route each to the risk register with the same rigor as a market or demand risk:

- **Variance across runs** — same input, different output; state a variance budget (e.g., "<5% of
  repeated runs diverge materially") rather than assuming determinism.
- **p95 latency**, not average — the interaction model breaks on the tail; state the ceiling the UX
  tolerates before the job needs async, a progress state, or a smaller model.
- **Cost per successful task**, not per call — a cheap call retried three times costs more than one
  expensive call that succeeds; price the job, not the token.
- **Guardrail/policy needs** — what the agent must never do regardless of the ask (prompt-injection
  resistance, tool-allowlisting, output filtering) — required scope, not hardening polish.
- **Degradation & fallback** — behavior when the model is unavailable or degraded: deterministic
  fallback, queued retry, or an honest "unavailable" state — never a silent failure (§2).

## 6. Model choice as a product decision

Model choice trades capability against cost and latency — not a purely technical call delegated
wholesale to engineering. State it as a hypothesis: "job X needs [capability tier, §2]; the
cheapest/fastest model clearing that tier is the default; pin to a higher tier only where the
failure-mode cost (§2, §5) justifies the premium." Revisit the pin on any new model release — a pin
justified six months ago may now be overpaying once a cheaper model clears the same tier. The `ai`
skill implements getting a chosen model to clear the tier (prompting, retrieval, fine-tuning); this
reference owns which tier is worth paying for.

## 7. Agentic metrics

Feed [metrics](metrics.md) this layer beneath — never instead of — the product's north-star and
metric tree:

- **Eval score** — the §3 offline/online pass rate, tracked as a trend, not a one-time gate.
- **Task success rate** — real-usage completion, distinct from eval score (curated sample vs.
  production reality — expect divergence).
- **Escalation/deflection rate** — how often the agent hands off (§4); falling signals improving
  capability, rising signals drift or scope creep into harder jobs.
- **Cost-per-successful-task** — the §5 metric as a tracked unit economic, not just an infra line.
- **Variance** — the §5 run-to-run variance, tracked so a quality regression surfaces before users
  report it.

## 8. How agentic threads the primary jobs

Agentic is not only an overlay file — it threads into every primary job, which hands off here for
depth and folds the result back in: **discovery** runs capability probes (§1–2) before trusting a
desirability interview; **prd** acceptance criteria *are* the eval set (§3); **risk-register**
absorbs non-determinism, latency, cost, safety, and unmapped failure modes (§2, §5); **metrics**
uses eval score / task-success / escalation / cost-per-successful-task (§7); **strategy** treats
model choice as a capability/cost/latency trade-off (§6); **positioning** frames the category and
the autonomy promise (§1, §4); **business-model** prices on per-call/token cost as the value-metric
(§5); **market** re-sizes SAM/SOM as capability curves shift (§1); **prioritization** feeds eval
pass-rate, latency, and cost as Impact/Effort inputs (§7).

## Validation

- Every job has a stated capability tier (§2) with named failure modes, each mapped to an eval case
  or a risk-register entry.
- PRD acceptance criteria include the eval-set template (§3) with an explicit pass threshold and
  regression gate — not a prose "the AI should work well."
- Every job has a stated autonomy level (§4) with an escalation path, chosen by reversibility and
  blast radius, not defaulted to `act` for convenience.
- Non-determinism, p95 latency, cost-per-successful-task, and guardrail needs (§5) each have a
  risk-register entry.
- The model-choice hypothesis (§6) names the capability tier it targets and why, not just a model
  name asserted without justification.

## Failure modes and handoff

- **No capability evidence exists yet.** Say so; the first deliverable is a capability probe plan,
  not a PRD — acceptance criteria against an unvalidated capability assumption is a fabricated fact.
- **The request is really about eval implementation** (harness, prompt engineering, judge tuning,
  retrieval) — name and recommend `ai`; this reference stops at the task set, success definition,
  and threshold.
- **The request is really about system architecture** (orchestration framework, tool-calling infra,
  multi-agent topology) — name and recommend `architecture`; this feeds it a capability/risk brief,
  not a system design.
- **The request wants to skip human-in-the-loop scoping "to move fast."** Push back: an unscoped
  autonomy level on an irreversible or high-blast-radius action is a risk-register entry waiting to
  happen, not a shortcut.
