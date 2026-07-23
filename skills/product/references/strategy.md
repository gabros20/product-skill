# Strategy

Purpose: Turn a validated problem into a strategy kernel, a product vision, a small set of decision
principles, and — when the artifact needs to stay to one page — a Lean Canvas, so that positioning,
the business model, and the PRD all derive from the same stated bet instead of an implicit one.

Read when:
- The request asks to "set the vision," "define our strategy," "write our principles," or "build a
  Lean Canvas."
- A PRD or roadmap is being drafted with no stated strategy behind it — stop and establish one first.
- An idea needs a single-page hypothesis before any research spend — use the Lean Canvas or Foundation
  Sprint path.

Skip when:
- The problem itself isn't validated yet — use [Discovery](discovery.md) first; a strategy built on
  an unvalidated problem is fluff, not diagnosis.
- The ask is the positioning statement or value proposition specifically — use
  [Positioning](positioning.md); this reference stops at the strategic bet, not its customer-facing
  framing.
- The ask is a full 9-block business model or a pricing hypothesis on an already-validated business —
  use [Business model](business-model.md); Lean Canvas here is for the earlier, pre-PMF hypothesis.

Inputs:
- The validated problem, segment, and evidence from [Discovery](discovery.md), or a stated founder
  brief if working standalone.
- Any existing vision, OKRs, or prior strategy doc — state explicitly when none exists; do not
  invent one.

Produces:
- A strategy kernel (diagnosis, guiding policy, coherent actions).
- A product vision placed on the strategy pyramid, with strategic intents beneath it.
- 3–7 product principles (tenets) usable as trade-off rules.
- A Lean Canvas when the artifact needs to fit one page, or a Foundation Sprint founding hypothesis
  when the bet is pre-team, pre-funding.

## Contents

- The strategy kernel (Rumelt)
- Product vision and the strategy pyramid — escaping the build trap (Perri)
- Product principles (tenets)
- Lean Canvas (Maurya)
- Foundation Sprint founding hypothesis
- Validation
- Failure modes and handoff

## Procedure

### 1. The strategy kernel (Rumelt)

Richard Rumelt, *Good Strategy/Bad Strategy* (grounding assimovt/productskills `strategy-doc` —
https://github.com/assimovt/productskills): a strategy is exactly three parts, in order.
1. **Diagnosis** — simplify the messy reality into the one obstacle that matters most. A diagnosis
   names a challenge, not a wish ("retention drops after week 2 because onboarding never proves the
   core value," not "we need better retention").
2. **Guiding policy** — the overall approach chosen to overcome that obstacle. One sentence; it
   rules options out as much as it picks one in.
3. **Coherent actions** — specific, coordinated steps that carry out the policy, resourced and
   sequenced to reinforce each other — not a list of independent goals each team pursues separately.

A strategy **must state what it will not do**; a document with no exclusion is a goals list, not a
strategy. Reject **bad-strategy tells** before shipping the kernel: fluff (buzzwords standing in for
insight), failure to face the actual challenge, mistaking a goal for a strategy ("increase revenue
20%" is an objective, not a diagnosis or a policy), and a jumble of uncoordinated objectives dressed
up as one plan.

### 2. Product vision and the strategy pyramid — escaping the build trap (Perri)

Melissa Perri, *Escaping the Build Trap* — the build trap is an org that measures itself by what it
ships (output) instead of what changes for the customer or business (outcome). Her strategy pyramid
gives outcomes a place to live above the backlog, four layers top to bottom:
- **Vision** — the multi-year picture of the world the product creates; rarely changes.
- **Strategic intent** — the business objectives the vision requires next (e.g. "expand into mid-
  market," not a number alone).
- **Product initiatives** — the problems to solve that would move a strategic intent; framed as
  problems, not features, and each traceable to exactly one intent.
- **Options** — the backlog: experiments and features that might solve an initiative. This is the
  only layer that changes weekly; the layers above it should not.

Write the vision as a single statement of the future state and who lives in it — not a slogan, not
the positioning statement (that's [Positioning](positioning.md)'s job). State every initiative as an
outcome ("reduce time-to-first-value under 5 minutes"), never as an output ("ship onboarding
redesign") — an output-framed initiative is the build trap re-entering the pyramid.

### 3. Product principles (tenets)

Amazon's Working Backwards practice (Bryar & Carr): a short list of **tenets** — memorable,
opinionated rules that resolve trade-offs the strategy doesn't spell out line by line. Keep to 3–7;
more than that stops being memorable and starts being a policy manual. Write each as a stance that
could be violated by someone who knows a good reason to — "simple over complete, unless a committed
customer needs the exception" — not an unfalsifiable platitude ("we care about quality"). Derive
principles from the guiding policy in §1: a principle that doesn't trace back to the diagnosis is
decoration.

### 4. Lean Canvas (Maurya)

Ash Maurya, *Running Lean* — a 9-block, one-page adaptation of the Business Model Canvas for the
pre-product-market-fit stage, when most blocks would otherwise be assumptions (product-on-purpose
`foundation-lean-canvas` — https://github.com/product-on-purpose/pm-skills): **Problem** (top 1–3,
existing alternatives) · **Customer Segments** (+ early adopters, named) · **Unique Value
Proposition** (single, clear, compelling message) · **Solution** (top 3 features, sketch-level) ·
**Channels** · **Revenue Streams** · **Cost Structure** · **Key Metrics** (the one number that
matters) · **Unfair Advantage** (something not easily copied or bought).

Use Lean Canvas, not [Business model](business-model.md)'s Business Model Canvas, when the business
itself is still a hypothesis — it replaces BMC's Key Partners/Activities/Resources/Relationships
blocks (resource-planning, assumes a known model) with Problem/Solution/Key Metrics/Unfair Advantage
(hypothesis-testing, assumes nothing yet). Route to the BMC instead once the problem and segment are
validated and the question shifts from "is there a business here" to "how does this business run."

### 5. Foundation Sprint founding hypothesis

Jake Knapp & John Zeratsky's Foundation Sprint condenses strategy-setting into a short workshop that
ends in one sentence (product-on-purpose `tool-foundation-sprint-founding-hypothesis` —
https://github.com/product-on-purpose/pm-skills): work through readiness → basics → differentiation
→ approach options → the customer/product/company "magic lenses," converging on a single **founding
hypothesis** — *"We believe [named customer] will choose [this approach] over [the leading
alternative] because it is the only way to get [the specific benefit], and we'll know we're right
when we see [the validating signal]."* Treat the sentence as a strict template, not a paraphrase
target — a founding hypothesis that drops the named alternative or the validating signal has lost
the part that makes it falsifiable. Use this path, not the full kernel, when the bet predates a team
or funding and needs to be pressure-tested in a day, not a quarter.

## Validation

- The kernel names one diagnosis, one guiding policy, and coordinated actions — not three
  independent goals.
- The strategy states at least one thing it will explicitly not do.
- Every initiative on the pyramid is phrased as an outcome, not an output.
- Principles number 3–7 and each traces to the guiding policy.
- If a Lean Canvas was produced, every block is filled or explicitly flagged as an assumption.

## Failure modes and handoff

- **The "strategy" is a goals list or a slogan** — no diagnosis, no exclusion — return to §1 before
  producing a vision or canvas on top of it.
- **An initiative is really a feature request** — reframe it as the outcome it should produce before
  it enters the pyramid, or it will re-import the build trap.
- **The request is really the customer-facing statement or category** — hand off to
  [Positioning](positioning.md); this reference produces the internal bet, not the market-facing one.
- **The request wants a full validated-business model or pricing** — hand off to
  [Business model](business-model.md) once Lean Canvas blocks stop being hypotheses.
- **The product is agentic/AI** — read the agentic overlay in
  [surface-agentic.md](surface-agentic.md) before finalizing the guiding policy: model choice, build-
  vs-buy-vs-fine-tune, and autonomy level are strategic decisions here, not implementation details.
