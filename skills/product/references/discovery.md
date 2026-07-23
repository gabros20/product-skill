# Discovery

Purpose: Find and validate the real problem before any solution is proposed — continuous discovery, opportunity mapping, interviews, and jobs-to-be-done.

Read when:
- The request is to discover the problem, talk to users, or synthesize research.
- A solution is being proposed before the underlying opportunity has evidence.
- An idea needs a validated-problem check before strategy or a PRD is written.

Skip when:
- The problem is already validated and the ask is strategy, positioning, or a PRD → `strategy.md`, `positioning.md`, `prd.md`.
- The ask is about assumption/evidence bookkeeping after discovery → `risk-register.md`.
- The ask is usability testing or design-DNA extraction on an existing UI → recommend the `design` skill.

Inputs: the current problem framing (if any), access to users/customers or their proxies (support tickets, sales calls, forums), any prior research.

Produces: a validated problem statement, an Opportunity Solution Tree, an interview plan and synthesis, and JTBD statements — each claim tagged Fact / Inference / Assumption.

## Contents
- Continuous discovery cadence
- Opportunity Solution Tree
- MITRE Problem Framing Canvas
- Jobs-to-be-done
- The Mom Test
- Proof-of-Life probe
- Autonomous desk investigation
- Artifact templates
- Agentic overlay
- Validation
- Failure modes and handoff

## Continuous discovery cadence

Discovery is not a phase that ends at launch — run it every week. Teresa Torres, *Continuous Discovery Habits*: touch customers (interviews, usability tests, or their data) at least weekly, tie every discovery activity to a single measurable outcome, and make small, frequent bets instead of one big bet on a roadmap item. Never let the customer design the solution — they are the authority on their problem, not the fix. Default cadence: one interview or synthesis pass per week, feeding the tree below continuously rather than in a single up-front sprint.

## Opportunity Solution Tree

Structure discovery as a tree, not a backlog (Torres): **Outcome → Opportunities → Solutions → Experiments.**
- **Outcome** — the one measurable business/customer result this tree pursues (ties to `metrics.md`'s north star).
- **Opportunities** — customer needs, pain points, and desires stated as problems, never as features ("checkout feels risky," not "add a progress bar").
- **Solutions** — ≥2–3 candidate solutions per opportunity; a lone solution under an opportunity is a sign you stopped exploring too early.
- **Experiments** — the cheapest test that reduces the riskiest assumption under a solution before building it.

Score opportunities to choose which to pursue: **Opportunity Score = Importance × (1 − Satisfaction)**, both on a 0–1 scale from interview or survey evidence. Highest score = most important and least satisfied — the opportunity with the most headroom. Never rank on Importance alone; an important-but-already-satisfied need is not the next bet.

## MITRE Problem Framing Canvas

Before committing to an opportunity, frame the problem on three passes (deanpeters/Product-Manager-Skills, adapted from the MITRE Innovation Toolkit — https://github.com/deanpeters/Product-Manager-Skills):
1. **Look Inward** — what capabilities, constraints, and existing assets does the team/org actually have to bring to this problem?
2. **Look Outward** — what is true in the market, the competitive landscape, and the user's world, independent of the org?
3. **Reframe** — synthesize both into a **How Might We** statement at the right altitude: not so broad it hides the problem ("improve retention"), not so narrow it embeds a solution ("add an email reminder"). Generate 3–5 HMW variants per reframe and carry the strongest into the Opportunity Solution Tree as a new opportunity.

## Jobs-to-be-done

Clayton Christensen: people don't buy products, they "hire" them to make progress on a job with three dimensions — **functional** (the practical task), **social** (how it makes them look to others), and **emotional** (how they want to feel). Write the job as: **"When [situation], I want to [motivation], so I can [outcome]."** Strip any mention of your product from the "When" — if the situation references your current system, you are describing the existing solution, not the job.

Progress happens only when **Push + Pull > Habit + Anxiety** (Forces of Progress) — a bigger push (frustration with the status quo) and pull (attraction of the new way) than the habit of the old way and anxiety about the new one. Find the real competitor by asking switchers: *"Before this, how did you get this done?"* — the answer is often a manual workaround, a spreadsheet, or a person, not a named competitor.

## The Mom Test

Rob Fitzpatrick, *The Mom Test*: ask questions good enough that even your mom, wanting to please you, couldn't lie and make you feel good.
- Talk about **their life**, not your idea — do not pitch until the problem is understood.
- Ask about **specific past instances**, never hypotheticals or opinions about the future ("Tell me about the last time…", not "Would you use…").
- Talk less than they do; dig with follow-ups instead of filling silence.
- Distrust compliments and generic praise ("that's a great idea!") — they are noise, not signal.
- Signal is a **commitment**, ranked weakest to strongest: time spent < reputation risked < access granted < money paid < an actual behavior change already made. A "yes" with no commitment attached is not validation.
- Bad question: "Do you think this is a good idea?" Good question: "How are you dealing with [problem] today?"

## Proof-of-Life probe

Before building anything, run the cheapest artifact that tells the harshest truth about desirability — a landing page with a real signup, a concierge/manual delivery of the "product," a Wizard-of-Oz prototype, or a sales conversation with a real ask for money or a signed pilot. The bar is a real commitment (see Mom Test signal ladder), never a survey or a "would you pay for this?" question. If the cheapest probe can't produce a real commitment, escalate to the next-cheapest one rather than skipping straight to a build.

## Autonomous desk investigation

Before or between interviews, run agent-driven desk research to pre-form hypotheses cheaply: mine public forums, review sites, support tickets, and competitor gaps for recurring complaints and workarounds (deanpeters/Product-Manager-Skills). Treat every finding as an **Inference**, not a Fact, until a Mom Test interview or a Proof-of-Life probe confirms it with a real commitment.

## Artifact templates

**Validated problem statement:** Segment · Situation (When…) · Job (functional/social/emotional) · Evidence (interviews/probes, with commitment tier) · Confidence (Fact/Inference/Assumption).

**Opportunity Solution Tree** (nest as a list or diagram):
```
Outcome: <measurable result>
├─ Opportunity A (score = Importance × (1 − Satisfaction))
│  ├─ Solution A1 → Experiment: <cheapest test>
│  └─ Solution A2 → Experiment: <cheapest test>
└─ Opportunity B
   └─ Solution B1 → Experiment: <cheapest test>
```

**Interview plan/synthesis:** Research question · screener (behavioral, disqualifies insiders/professional participants) · 5–8 open questions funneling broad→specific · per-interview raw notes → pattern grouping (3+ sources) → job statements → gaps flagged for the next round.

## Agentic overlay

For an agentic/AI product, discovery must also map capabilities and failure modes (what the model can and cannot reliably do) as opportunities/risks in the tree, not just user pain points — see `surface-agentic.md`.

## Validation

Before calling a problem validated: at least one real commitment (Mom Test tier ≥ access granted, or a completed Proof-of-Life probe); the Opportunity Solution Tree has ≥2 solutions per pursued opportunity; every claim is tagged Fact/Inference/Assumption; unresolved assumptions are opened as `risk-register.md` entries, not left implicit.

## Failure modes and handoff

Stop and flag rather than proceeding to a PRD if: the only evidence is compliments or survey "would use" answers (Mom Test/evidence-ladder violation — treat as Weak, see `risk-register.md`); an opportunity has exactly one solution (discovery stopped too early); or the "outcome" is actually a feature or output, not a measurable result (return to Torres's framing). When the problem is validated, hand off the Opportunity Solution Tree and JTBD statements to `strategy.md` (vision/strategy) or `prd.md` (direct-to-spec); open a `risk-register.md` entry for every remaining assumption.
