# Risk register

Purpose: Maintain a living register of product assumptions and risks — the taxonomy, evidence bar, and challenge loop that gate every build decision.

Read when:
- The request is to build, update, or consult the risk/assumption register.
- A build decision needs a gate before it is committed to (new idea, MVP, or a scope-creep feature request on a live product).
- A strategy or PRD needs its assumptions stress-tested before sign-off.

Skip when:
- The problem itself is not yet framed → `discovery.md` first; the register consumes discovery's output, it doesn't replace it.
- The ask is a one-off SWOT or brainstorm with no intent to maintain it — this reference is for a living artifact, not a workshop exercise.
- The ask is a technical/architecture risk (scaling, vendor lock-in, ADRs) → sibling `architecture` skill; log the product-facing consequence here and cross-link.

Inputs: the validated problem, strategy, or PRD under review; any existing register entries to update rather than duplicate.

Produces: a living risk register — one entry per assumption, each with category, demand-hierarchy level (where applicable), evidence tier, and a verdict — plus a red-team pass and a pre-mortem log for the strategy/PRD as a whole.

## Contents
- Why this is living, not a canvas
- 8-category assumption taxonomy
- Demand hierarchy L0–L4
- Evidence ladder
- The four-verdict contract
- Strategy red-team
- Pre-mortem
- Register template
- Agentic overlay
- Validation
- Failure modes and handoff

## Why this is living, not a canvas

A risk canvas filled out once at kickoff is stale by the first PRD revision. Run the register as a standing artifact: every `discovery.md`, `strategy.md`, and `prd.md` pass opens or updates entries here rather than burying assumptions in prose; review it on a fixed cadence (at minimum, before every prioritization pass and before every launch). An assumption never gets silently dropped — it is resolved (evidence promotes it to Fact), re-scoped, or explicitly accepted with an owner.

## 8-category assumption taxonomy

Extends Marty Cagan's four product risks (*Inspired*: value, usability, feasibility, business viability) to eight, adding the categories a startup-calibrated register needs (phuryn/pm-skills — https://github.com/phuryn/pm-skills). Tag every entry with exactly one primary category:

| Category | Assumption question |
|---|---|
| Value | Will anyone want this enough to change behavior? |
| Usability | Can people figure out how to use it? |
| Viability | Does it work for the business (revenue, cost, legal, brand)? |
| Feasibility | Can it be built with the time, skill, and technology available? |
| Ethics | Could this harm a user, a bystander, or society even if it "works"? |
| Go-to-Market | Can we reach and acquire the target segment at a viable cost? |
| Strategy | Does this fit the chosen strategy, or is it a distraction from it? |
| Team | Does the team have the capacity, skill, and conviction to execute it? |

## Demand hierarchy L0–L4

For feature-change requests on a live product (foundation-build-risk-review, product-on-purpose/pm-skills), grade the strength of the signal that this should be built now:
- **L0** — founder/stakeholder anxiety, "competitors have it."
- **L1** — one customer ask.
- **L2** — repeated asks, but no proof of behavior change.
- **L3** — a workflow blocker: users cannot complete a core job without it.
- **L4** — a revenue or retention blocker: users refuse to pay, churn, or fail activation without it.

Build-now is usually justified only at **L3–L4**. L0–L2 route to validation, not straight to the roadmap.

## Evidence ladder

Grade every piece of supporting evidence (verbatim tiers):
- **Weak (not demand):** likes, compliments, waitlist signups, survey "would use" answers, market-size numbers alone.
- **Medium:** repeated unsolicited requests, competitor traction in the exact wedge, a manual workaround the user already maintains.
- **Strong:** real files/data handed over, booked calls, a preorder or deposit, repeated manual use, switching away from a paid alternative.

Never let a Weak-tier entry justify an L3/L4 verdict; the ladder and the hierarchy must agree before a "Build small" verdict is issued.

## The four-verdict contract

Every register entry resolves to exactly one of four verdicts — never "Kill" (a killed idea still needs a documented reason and an owner):
1. **Build small** — strong evidence, high category confidence; ship the smallest version that tests the remaining risk.
2. **Validate first** — evidence is Medium or below; name the specific, low/no-code validation step (never "build an MVP" or "do more research" as the action itself).
3. **Pivot first** — the evidence contradicts the current framing; return to `discovery.md` before continuing.
4. **Don't build yet** — evidence and hierarchy level are both too low; state what would need to change to reopen it.

## Strategy red-team

Run this pass on a completed `strategy.md` or `prd.md` before sign-off (phuryn/pm-skills — https://github.com/phuryn/pm-skills):
1. **Steelman** — restate the strategy/PRD in its strongest possible form, as if presenting it to its most sympathetic backer.
2. **Attack** — a second pass (or a second agent) attacks every pillar for the weakest assumption, the most likely competitive response, and the resource or timing risk most likely to break it.
3. **Rank** — score each attack by **impact × likelihood × cheapness-to-test**; cheap-to-test-and-high-impact items go to `discovery.md` as experiments immediately, not to the backlog.
4. **Kill-criteria** — for the top-ranked risks, write the explicit condition under which the team would abandon or pivot the strategy, decided now, before commitment bias sets in.

## Pre-mortem

Gary Klein, "Performing a Project Premortem" (HBR, 2007): before committing resources, imagine it is one year from now and the initiative failed spectacularly. Have every stakeholder independently write down every plausible reason why, then read them aloud round-robin (independent writing first prevents groupthink/anchoring on the loudest voice). Rank the reasons by likelihood and feed the top ones into the register as new entries with an owner and a mitigation, or into the red-team's kill-criteria if they overlap.

## Register template

One row per assumption:

| ID | Category (1 of 8) | Assumption | Demand level (L0–L4, if feature-change) | Evidence tier | Verdict | Owner | Status | Next review |
|---|---|---|---|---|---|---|---|---|
| R-01 | Value | … | L2 | Medium | Validate first | … | Open | … |

## Agentic overlay

For an agentic/AI product, add non-determinism, latency/cost-at-scale, and safety/misuse as first-class risk entries — usually tagged Feasibility or Ethics — before an eval set exists to measure them; see `surface-agentic.md`.

## Validation

Before treating the register as current: every open assumption from `discovery.md`/`strategy.md`/`prd.md` has an entry; every entry has exactly one primary category, an evidence tier, and one of the four verdicts; the strategy has had at least one red-team pass and one pre-mortem before build sign-off; no entry sits at "Validate first" or "Pivot first" past its stated next-review date without action.

## Failure modes and handoff

Do not issue "Build small" on Weak-tier evidence or below L3 demand — downgrade to "Validate first" and name the probe (route to `discovery.md`'s Proof-of-Life probe). Do not let a register entry go stale silently — an unreviewed entry past its review date is itself a process risk, log it as one. Technical/infrastructure risk (scaling, vendor lock-in) is `architecture`'s to own — log only the product-facing consequence here and cross-link. When the register gates a go/no-go decision, hand its open L3/L4 and red-team entries to `prioritization.md` and the resolved ones to `prd.md`'s risks section.
