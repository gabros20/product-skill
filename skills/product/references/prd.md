# PRD

Purpose: choose the right altitude for a product-requirements artifact — one-pager, full PRD, or
machine-readable spec — matched to product type and audience, and produce the acceptance criteria
and stories that make it checkable by someone who didn't write it.

Read when:
- Writing, reviewing, or restructuring a PRD, feature spec, or acceptance criteria.
- Deciding how much PRD a request actually needs — a Slack-sized ask, a cross-team initiative, or
  an agentic feature with an eval gate.
- Writing job stories, user stories, or acceptance criteria for a handoff to design/architecture.

Skip when:
- The problem hasn't been validated yet — a PRD documents a validated decision, it doesn't produce
  one; run `discovery.md` first.
- The question is which candidate ships first, not how one candidate is specified —
  `prioritization.md`.
- The question is the success-metric or OKR itself, not where it sits inside the PRD —
  `metrics.md`.
- The question is eval design — case selection, judge model, threshold-setting — for an agentic
  feature — `surface-agentic.md`; this file only shows where that eval set is registered inside the
  PRD.
- The question is the risk/assumption register itself — `risk-register.md`.

Inputs: a validated problem statement, target segment, and — for full or machine-readable altitude
— strategic context, constraints, and known risks.

Produces: the chosen PRD artifact, its acceptance criteria (Given/When/Then across
happy/edge/error/non-functional), and its stories (job story or user story) — each checkable
independent of prose quality.

## Contents
- Choosing altitude
- One-pager
- Full PRD
- Machine-readable spec
- Acceptance criteria
- Stories
- Agentic overlay
- Validation
- Failure modes and handoff

## Choosing altitude

Default to the smallest altitude that makes the decision checkable; escalate only when audience or
risk requires it.

| Signal | Altitude |
|---|---|
| Solo/small team, single feature, days-scale build, no cross-team review | One-pager |
| Cross-functional team, multi-sprint initiative, exec or design/architecture handoff | Full PRD |
| Consumer is an engineering pipeline or an AI agent; scope/AC/metrics must parse programmatically | Machine-readable spec |
| Agentic or AI-driven feature, at any altitude | add the AI-eval block below and read `surface-agentic.md` |

## One-pager

Lenny Rachitsky's format ([priankr/prd-templates](https://github.com/priankr/prd-templates)):
**Problem** · **Why (now)** · **Success** · **Audience** · **What** · **How** · **When**. Each
field is one to three sentences — a one-pager that grows past one page has quietly become a full
PRD; re-classify it rather than letting it sprawl. For evidence-first teams, condense with
[assimovt/productskills](https://github.com/assimovt/productskills)'s `prd-writing` discipline
instead: 800–1,200 words, Problem (with evidence) → Goals (numeric) → Target Users (narrow) →
Requirements (P0: 3–5 max / P1 / P2) → Success Metrics (each paired with a counter-metric) → Out of
Scope → Open Questions. Never include implementation detail in either variant — that's
`architecture`'s.

## Full PRD

Ten sections, in order (converged skeleton across public PRD templates; the UX, Technical, and
GTM subsections belong to siblings — link out, don't duplicate them here):

1. **Exec Summary** — one paragraph: problem, solution, why now.
2. **Problem** — evidenced, not asserted; tag Fact/Inference/Assumption per the universal invariant.
3. **Users & Personas** — narrow, named segment(s); pull from `discovery.md` rather than inventing
   new ones here.
4. **Strategic Context** — how this serves the strategy kernel or OKR it ladders to (`strategy.md`,
   `metrics.md`).
5. **Solution** — the approach at a product level; UX detail is `design`'s, technical detail is
   `architecture`'s.
6. **Success Metrics** — target + window + committed/provisional (see Machine-readable spec below).
7. **Stories & Requirements** — P0/P1/P2, each requirement backed by acceptance criteria;
   non-functional requirements (performance, security, scale, accessibility, platforms) are
   first-class, not a footnote.
8. **Out of Scope** — explicit `in`/`out`/`cut`, not silence.
9. **Dependencies & Risks** — High/Medium + mitigation; open items feed `risk-register.md`.
10. **Open Questions** — each with an owner.

## Machine-readable spec

`.product-spec.md` ([gokulrajaram/ProductSpec](https://github.com/gokulrajaram/ProductSpec)).
Mandatory sections, in this order: `problem` → `hypothesis` → `product_summary` → `scope` →
`acceptance_criteria` → `success_metrics`. Optional: `user_experience`, `customer_truth`,
`solution_alternatives`, `solution`, `strategic_positioning`, `adoption`, `pricing`, `risks`, `ai`,
`open_questions`, `rollout`, `related_artifacts`.

Structured fenced blocks — reuse verbatim:

```productspec-scope
in:
  - <capability a user would notice if removed>
out:
  - <explicitly excluded from this release>
cut:
  - <considered and rejected — with why>
```

```productspec-acceptance-criteria
- id: AC-1
  criterion: <observable pass/fail before launch — prefer Given/When/Then>
```

```productspec-success-metrics
- id: SM-1
  metric: <name>
  target: <value>
  window: <timeframe>
  target_status: committed|provisional
```

```productspec-ai-evals
- id: EVAL-1
  type: llm_judge|exact_match|...
  cases:
    - input: <case input>
      expected: <expected behavior>
  evaluator: <judge model or rubric>
  pass_threshold: <value>
  checks: [<specific pass conditions>]
```

Sharp distinction: AI-eval thresholds live in `acceptance_criteria` — they gate launch — never in
`success_metrics`, which measures post-launch outcomes. See Agentic overlay below.

## Acceptance criteria

Given/When/Then, one criterion per observable behavior: **Given** &lt;precondition&gt;, **When**
&lt;action&gt;, **Then** &lt;checkable outcome&gt;. Cover four categories for every requirement of
consequence — skipping one is the most common gap:

| Category | Example |
|---|---|
| Happy path | Given a valid card, When the user submits payment, Then the order confirms within 3s. |
| Edge case | Given a cart at the maximum item count, When one more item is added, Then the add is blocked with a specific message. |
| Error | Given a declined card, When payment is submitted, Then the error names the reason and offers retry. |
| Non-functional | Given 10x normal traffic, When checkout runs, Then p95 latency stays under 2s. |

A criterion that can't be marked pass/fail by someone who didn't write it isn't done — rewrite it
or send the ambiguity back as an open question.

## Stories

- **Job story** (Christensen JTBD, popularized by Intercom): "When [situation], I want to
  [motivation], so I can [outcome]." Motivation-first, persona-free — use before a stable persona
  exists, or when the triggering situation matters more than who's in it.
- **User story** (Cohn): "As a [persona], I want [capability], so that [benefit]." Use once
  `discovery.md` has produced a named persona/role; pair every story with its acceptance criteria,
  never ship one without the other.

## Agentic overlay

For an agentic/AI feature, acceptance criteria are not fixed assertions — they're an eval set:
representative cases, a judge (exact-match or LLM-judge), and a pass threshold, registered in the
`productspec-ai-evals` block above and gating launch the same way any other acceptance criterion
does. Eval-set design, case selection, and judge choice live in `surface-agentic.md`; read it
before writing acceptance criteria for any agentic feature, at any altitude.

## Validation

- Every requirement traces to a Fact/Inference/Assumption-tagged claim, not an unlabeled one.
- Every acceptance criterion is an observable pass/fail — no "should feel fast," no adjectives
  without a number.
- Success metrics state target + window + committed/provisional; none are bare aspirations.
- Out of Scope is explicit (`in`/`out`/`cut`), never implied by omission.
- An agentic feature's PRD carries an eval block, not a "handle edge cases" placeholder.

## Failure modes and handoff

- **Over-altitude**: writing a full PRD a one-pager would have decided — default down, escalate
  only on signal.
- **Ungated requirement**: a requirement with no acceptance criteria isn't ready to hand off —
  block it.
- **Scope creep into siblings**: UX/visual detail → `design`; technical/architecture decisions →
  `architecture`; launch/GTM → `marketing`. Name the sibling and stop, don't absorb the section.
- **Forced persona**: don't invent a named persona to fit a user-story template — use a job story
  instead until `discovery.md` validates one.
- **Unvalidated problem**: if the Problem section has no evidence, return to
  `discovery.md`/`risk-register.md` before writing requirements.
