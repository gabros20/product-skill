# Business model

Purpose: Model how the product creates, delivers, and captures value (Business Model Canvas), then
form a testable pricing hypothesis (value-based method, Van Westendorp bands, tier psychology) —
before a PRD locks in scope that a broken business model can't support.

Read when:
- The request asks to "model the business," "figure out pricing," "price the tiers," "build a Lean
  Canvas / Business Model Canvas," or a PRD needs a pricing/monetization section it doesn't yet have.
- A `foundation-build-risk-review`-style gate has tagged `monetization` or `distribution` as the
  primary risk and the next step is to model the revenue/channel hypothesis explicitly.

Skip when:
- The ask is sizing the market or profiling competitors — use [Market](market.md).
- The ask is pricing-as-campaign (launch discount, promo copy, checkout A/B test) — that's
  `marketing`/`growth`; this reference stops at the pricing *hypothesis*, not its execution.
- The ask is a full PRD — write the PRD in [PRD](prd.md) and pull this file's outputs into its
  pricing section rather than duplicating the canvas there.

Inputs:
- The validated problem and target segment (from [Discovery](discovery.md) or supplied directly).
- Any existing cost structure, distribution channel, or competitor price points already known —
  state explicitly when none exist; do not invent them.

Produces:
- A completed Business Model Canvas (9 blocks).
- A pricing hypothesis: value metric, willingness-to-pay (WTP) bands, a chosen psychological
  tier structure, and the confidence/evidence behind each — never a single "sticker" price asserted
  as fact.

## Contents

- Business Model Canvas (Osterwalder)
- Pricing hypothesis (value-based method, Van Westendorp, tier psychology)
- Validation
- Failure modes and handoff

## Procedure

### 1. Business Model Canvas (Osterwalder)

Fill all 9 blocks; leave none blank — write "unknown, assumption flagged" rather than skip a block.
Each block is one paragraph, evidence-tagged (Fact/Inference/Assumption):

| Block | States |
|---|---|
| Value propositions | What job the product does for the segment, and why this over the "do nothing" alternative |
| Customer segments | Named, narrow segments — not "everyone"; rank if more than one |
| Channels | How the segment discovers, evaluates, buys, and receives the product |
| Customer relationships | Self-serve, high-touch, community, or hybrid — and why this segment expects it |
| Revenue streams | Pricing model(s) — see §2 — and which segment pays for which stream |
| Key activities | The 2–4 things the business must do well for the model to work |
| Key resources | The assets (data, brand, team, IP) the model depends on |
| Key partners | Who is relied on and what would break if they left |
| Cost structure | Cost-driven vs value-driven; the 2–3 largest cost lines |

A block with no evidence and no stated assumption is an unmodeled risk — route it to
[risk-register](risk-register.md) rather than leaving it implicit.

### 2. Pricing hypothesis

**Value-based pricing method** (the default starting method — anchor on value delivered, not cost
or competitor price):
1. Name the product's core outcome and its **value metric** — the unit the customer feels value
   scale with (seats, usage volume, outcomes delivered, time saved). A wrong value metric (e.g.
   charging per-seat for a product whose value scales with usage) undermines every price below it.
2. Map competitive price anchors for the same job — even an imperfect substitute (including "do
   nothing" / a manual workaround) anchors the customer's reference price.
3. Estimate three **willingness-to-pay bands**: floor (no-brainer, "obviously worth it"), midpoint
   (fair value), ceiling (premium, for the highest-value segment). State the evidence behind each
   band — interviews, comparable pricing, or an assumption flagged as such.
4. Choose a psychological price point per band (charm pricing, e.g. $29/$99/$249, shifts perceived
   magnitude down; round pricing, e.g. $30/$100/$250, signals confidence — premium/luxury positioning
   favors round, mass-market favors charm).
5. Slice the value metric and feature set into **three tiers** mapped to the three bands.
6. Name one expansion lever (usage overage, add-on, seat growth) as a secondary revenue path — not
   the primary hypothesis.

**Van Westendorp price-sensitivity** (validate the hypothesis against real respondents, when
research capacity exists): ask each respondent four prices — too cheap (quality doubt), cheap (a
bargain), expensive (starts to hesitate), too expensive (won't consider). Plot cumulative curves; the
**"too cheap" × "too expensive"** crossing is the Optimal Price Point (OPP), and the **acceptable
range** runs between the Point of Marginal Cheapness ("too cheap" × "expensive") and the Point of
Marginal Expensiveness ("too expensive" × "cheap"). The **"cheap" × "expensive"** crossing is the
Indifference Price Point — the median/normal price, not the optimum. Use this to validate or correct
the value-based estimate above — don't run it standalone with no value-metric hypothesis behind it,
or the curves have no anchor to converge on.

**Tier psychology** (apply once the tier count and price points are set):
- **Three tiers convert roughly 1.4× two tiers**; a fourth tier commonly converts worse — default to
  three unless a stated reason needs more.
- **Center-stage effect**: buyers gravitate to the middle option — put the target tier there, and
  stack signals on it ("Most Popular," a highlighted border) since the label itself functions as
  social proof and a default cue.
- **Decoy effect**: a deliberately weaker, similarly-priced option makes the target tier look like
  the obvious choice. Distinct from anchoring — anchoring sets a reference number (e.g. showing a
  premium price first to raise the whole scale), the decoy adds a dominated option.
- **Anchoring**: lead with the highest tier or a visible "regular price" before a discount — the
  first number seen sets the frame for every price after it.
- Never let tier psychology substitute for the value-based hypothesis in §1 — it shapes
  presentation of an already-justified price, not the price itself.

## Validation

- Every BMC block is filled or explicitly flagged as an assumption with an owner.
- The pricing hypothesis names a value metric, at minimum a floor/ceiling WTP band with stated
  evidence quality, and a tier structure — not a single unexplained number.
- Every unvalidated pricing or business-model assumption has a corresponding
  [risk-register](risk-register.md) entry.

## Failure modes and handoff

- **No cost or channel data exists.** State that plainly, mark the block as an assumption, and do
  not fabricate figures to fill the canvas — an honest gap outranks a false-precision block.
- **The request is really about market size or competitor pricing**, not the business model itself —
  hand off to [Market](market.md); pull only the price-anchor data point back into §2 step 2.
- **The request wants a launch price or promo strategy**, not a pricing hypothesis — that is
  `marketing`/`growth` territory; name and recommend the sibling rather than producing campaign copy.
- **The request is agentic/AI-product pricing** (per-call, per-token, or outcome-based pricing under
  variable model cost) — read the agentic overlay in
  [surface-agentic.md](surface-agentic.md) before finalizing the value metric, since cost-per-unit
  is non-deterministic there and belongs in the risk register as well as the pricing model.
