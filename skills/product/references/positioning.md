# Positioning

Purpose: Turn a validated problem and strategy into a positioning statement, a value-proposition
canvas, and a single named best-fit segment — the customer-facing frame that
[Business model](business-model.md) prices against and `marketing`/`design` build messaging and
experience on top of.

Read when:
- The request asks to "position the product," "write our positioning statement," "define the value
  proposition," or "pick our target segment/beachhead."
- A PRD or pricing hypothesis needs a named best-fit segment and it doesn't have one yet.
- Positioning was set before competitors were known, or reads generic ("for everyone who wants a
  better way to work").

Skip when:
- The strategic bet itself isn't set — use [Strategy](strategy.md) first; positioning frames a bet
  that already exists, it doesn't create one.
- The ask is competitor profiles or the landscape analysis feeding this — use
  [Market](market.md); pull its competitive-alternatives list in rather than re-deriving it here.
- The ask is market-copy, taglines, hero copy, or a campaign — that's `marketing`; this reference
  stops at the strategic statement, not its execution as copy.

Inputs:
- The validated problem, JTBD statements, and segment candidates from [Discovery](discovery.md).
- The competitive-alternatives list and competitor profiles from [Market](market.md) — do not
  re-derive competitors from scratch here.

Produces:
- A Moore-format positioning statement.
- A named best-fit segment via Dunford's method, with category as the output, not the input.
- A Value Proposition Canvas (fit evidenced, not asserted).
- A compact JTBD value-proposition card per segment.

## Contents

- Geoffrey Moore positioning statement
- April Dunford's positioning method (Obviously Awesome)
- Value Proposition Canvas (Osterwalder)
- JTBD value-proposition card
- Segment and audience selection — Crossing the Chasm / beachhead
- Validation
- Failure modes and handoff

## Procedure

### 1. Geoffrey Moore positioning statement

Geoffrey Moore, *Crossing the Chasm* (grounding deanpeters/Product-Manager-Skills
`positioning-statement` — https://github.com/deanpeters/Product-Manager-Skills). Fill every slot with
a real, named value — a placeholder left in any slot means the process below hasn't finished:

> For **[target customer]** who **[statement of need or opportunity]**, **[product name]** is a
> **[product category]** that **[statement of key benefit — compelling reason to buy]**. Unlike
> **[primary competitive alternative]**, **[product name]** **[statement of primary
> differentiation]**.

Do not draft this sentence before running §2 — category and differentiation are conclusions, and a
positioning statement written first tends to smuggle in an assumed category.

### 2. April Dunford's positioning method (Obviously Awesome)

April Dunford, *Obviously Awesome* (assimovt/productskills `product-positioning` —
https://github.com/assimovt/productskills). Five steps, **in this order** — running them out of order
is the most common positioning failure:
1. **List competitive alternatives** — what the customer would use or do if this product didn't
   exist, including "do nothing" or a manual workaround. Pull this from
   [Market](market.md)'s competitor profiles rather than re-deriving it.
2. **Identify unique attributes** — the capabilities this product has that the alternatives above
   genuinely lack, and can prove today. Keep a claim ledger (claim · status · proof source): an
   attribute with no proof yet is a roadmap item, not a positioning asset; proof owned by someone
   else (an employer's or partner's clients, logos, testimonials) is not this product's proof; and
   no outcome percentage enters positioning unless it was measured on this product or carries a
   High-tier source ([Market](market.md)). Until proof exists, position on what is verifiable —
   method, open artifacts, a working demo — never on invented case results.
3. **Map attributes to value** — translate each unique attribute into the value it creates for the
   customer; an attribute with no mapped value is a feature, not a positioning asset.
4. **Identify the best-fit segment** — the customers who care the most about that value, ranked
   above segments who'd merely tolerate it.
5. **Determine the market category** — the frame that makes the value obvious to the best-fit
   segment, chosen last. **Category is the output of this process, never the input** — naming the
   category before step 1 locks in whatever competitive set that category implies.

### 3. Value Proposition Canvas (Osterwalder)

Alexander Osterwalder, *Value Proposition Design*. Two sides, mapped against each other for a named
segment:
- **Customer Profile** — Customer Jobs (functional/social/emotional, per [Discovery](discovery.md)'s
  JTBD), Pains (obstacles, risks, negative outcomes), Gains (outcomes and benefits wanted).
- **Value Map** — Products & Services (what's offered), Pain Relievers (how they address the named
  Pains), Gain Creators (how they produce the named Gains).

**Fit** exists only when Pain Relievers address the top-ranked Pains and Gain Creators address the
top-ranked Gains — and fit must be evidenced (interview or usage data from
[Discovery](discovery.md)), never asserted by mapping every feature to every Job/Pain/Gain box just
to fill the canvas.

When the segment has not yet adopted the category at all, the top Pains are usually **adoption
blockers**, not task pains — the Habit and Anxiety side of [Discovery](discovery.md)'s Forces of
Progress: missing expertise, unclear return, legal or privacy uncertainty, poor data, legacy systems
that won't connect, distrust of reliability, cost, team resistance, "we already have a generic tool."
List each as a Pain and give it a Pain Reliever (a baseline-and-value model, a bounded pilot, an
approval boundary, a data-readiness step); a canvas that relieves only the task pain leaves the
reason the segment hasn't switched untouched.

### 4. JTBD value-proposition card

A compact per-segment card condensing §2–3 into six lines, adapted from phuryn/pm-skills'
`value-proposition` skill on a Jobs-to-be-Done spine (Christensen; see
[Discovery](discovery.md)'s JTBD section for the job statement itself):

| Field | States |
|---|---|
| Who | The named target segment from §5, not "everyone" |
| Why | The job/pain driving the search for a new way — functional, social, or emotional |
| What-before | The current alternative or workaround in place before switching (§2 step 1) |
| How | The mechanism — what this product specifically does differently (§2 step 2) |
| What-after | The outcome or gain achieved once adopted (§2 step 3 / VPC Gain Creators) |
| Alternatives | The competitive alternatives this replaces, "do nothing" included |

Use this card as the compact artifact when a full Moore statement plus VPC is more than the request
needs — it carries the same evidence, condensed to one card per segment.

### 5. Segment and audience selection — Crossing the Chasm / beachhead

Geoffrey Moore's bowling-pin strategy: pick **one** narrow beachhead segment and win it completely —
become the default choice within that niche — before expanding to an adjacent segment; each won
segment knocks over the next, like bowling pins. Never position for "everyone" or split go-to-market
attention across multiple unrelated segments pre-chasm. Winning the niche means delivering the
**whole product** — the core plus every ancillary piece (integrations, support, compliance) that
segment needs to be fully satisfied — not just the core feature set. Reuse
[Discovery](discovery.md)'s opportunity scoring and [Market](market.md)'s competitor set to choose
the beachhead; don't re-score segments from scratch here.

**Choosing among candidate beachheads.** Moore's market-development checklist (*Crossing the
Chasm*, "Target the Point of Attack") runs in two passes. Gate first — a segment scoring low on any
of these is out: a reachable **target customer** with budget and authority, a **compelling reason to
buy** now, a **whole product** deliverable soon, no **competitor** already owning the niche. Then
rank survivors on partners and allies, distribution, pricing, positioning credibility, and the next
target customer it unlocks. Sharpen the gate with three checks:
- **Pain already priced.** A segment that already pays for the pain (staff hours it can count, a
  budget line or existing contract the product can slot into) beats one that must first be convinced
  the pain exists. A channel that is reachable — and legally usable — today counts as distribution;
  a segment whose primary channel is gated is a later pin.
- **The selecting signal must predict the North Star.** Pick segments by evidence of the job the
  product needs them to keep doing, not by an easy-to-detect symptom. Absence of a behavior is
  revealed preference, not suppressed demand: an asset nobody has touched in years shows nobody
  wants to touch it — exactly the wrong segment for a product whose retention depends on frequent
  use. Look for **thwarted demand** — the job recurs structurally *and* the segment is blocked from
  doing it — which is often the mirror image of the segment the symptom points to. For a recurring
  revenue model, the pain that closes the first sale is not the job that renews it
  ([Business model](business-model.md)); select on the renewing job.
- **Calibrate signals on a real sample before trusting weights.** A signal that rarely fires cannot
  rank anyone; one nearly every candidate has belongs in the filter, not the score.

Write **hard disqualifiers** alongside the beachhead: segments that look adjacent but the product
cannot serve, or that already self-serve the job. Test the buyer's actual access to the alternative,
not its mere presence — a tool the customer cannot or dare not use (someone else holds the seat) is
not an alternative they have. When two beachheads stay contested after the gate, split the
[Discovery](discovery.md) Proof-of-Life probe evenly across them so the result compares segments
rather than validating whichever one was tried first.

## Validation

- Every Moore-template slot names a real category and competitor — no placeholder text.
- Competitive alternatives and unique attributes (§2 steps 1–2) were identified before the category
  was named (§2 step 5) — check the order, not just the presence of each step.
- Value Proposition Canvas fit is backed by cited evidence, not asserted by exhaustive mapping.
- Exactly one beachhead segment is named — not a list, not "everyone" — with its hard
  disqualifiers, and its selecting signal predicts the North Star behavior rather than a symptom.
- Every unique attribute in the statement has a proof source in the claim ledger; unproven ones are
  labeled Assumption, not stated as differentiation.

## Failure modes and handoff

- **The category or tagline was decided before competitors were listed** — halt, run §2 from step 1,
  and be prepared for the category to change.
- **No competitor list exists yet** — hand off to [Market](market.md) for competitor profiles before
  drafting anything here rather than inventing a competitive set.
- **The request wants a beachhead that is actually "everyone" or three unrelated segments** — return
  to §5; a positioning statement can only serve one best-fit segment at a time.
- **The request wants market-copy, a tagline, or hero copy** — name and recommend `marketing`; this
  reference's output is the strategic statement and card, not the copywriting.
- **The product is agentic/AI** — read the agentic overlay in
  [surface-agentic.md](surface-agentic.md) before finalizing the category: "tool," "agent," and
  "service" carry different autonomy and trust expectations, and the category choice here sets them.
