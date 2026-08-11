# X/Twitter Research Corpus — `product-skill` (Discover/Strategy stage)

**Channel:** X/Twitter via `xrelay` CLI · **Lead:** X-relay research lead (Opus)
**Date:** 2026-07-23 · **Status: PARTIAL (live search blocked; recovered via local cache)**

---

## TL;DR for the controller

- **Live X search was non-functional this session.** Auth was fine (`whoami` OK as `@tamas_gr`), but every live-search path hung: a 46-query `xrelay batch` ran ~12 minutes and wrote **0 bytes**; a single `xrelay search "product management" --limit 5` hung past **120s with no output at all** — not even a `RATE_LIMITED` envelope, just a dead endpoint. Both were killed. See Method.
- **Recovery source:** the offline local **bookmark cache** (4,881 saved tweets, no rate limits) — Tamas's own curated material.
- **Honest headline finding:** Tamas's bookmark archive is an **AI-engineering / agentic-coding / crypto-trading** collection. It contains **almost no canonical product-management thought-leadership** — no Lenny Rachitsky, Teresa Torres, Marty Cagan, Shreyas Doshi, April Dunford, Melissa Perri, John Cutler, etc. So the X channel's yield of *pure* product-discovery/strategy content is **thin**.
- **What it DID surface:** a small set of genuinely useful product artifacts at the **AI-assisted-building intersection** — a startup-idea selection checklist, two PRD-structure templates, a full SaaS product-lifecycle map, and two pricing frameworks. These are captured verbatim below.
- **Recommendation:** treat X as a **low-yield channel for this skill**. The canonical PM corpus must come from the other channels (web/newsletters/GitHub). If live X access recovers, re-run the batch in `queries.txt` (saved) to reach the real PM authors listed under "Gap" below.

---

## Method (what was actually run)

| Step | Command | Result |
|---|---|---|
| Auth check | `xrelay whoami` | OK — `@tamas_gr`, 218 followers |
| Wide net (Top) | `xrelay batch --file queries.txt --out x-corpus.json --delay 3000 --product Top` (46 queries) | **FAILED** — ran ~12 min, 0 bytes written, killed |
| Diagnostic | `xrelay search "product management" --limit 5 --product Top` | **FAILED** — hung >120s, no output, no error envelope, killed |
| Fallback net | `xrelay bookmarks -q "<topic>"` × 18 product topics | OK — local cache, 107 unique tweets |
| Semantic pass | `bookmark-search.mjs -q "<topic>"` × 8 (hybrid) | OK — semantic ranking over 4,881 bookmarks |
| Verbatim pull | direct read of `all-bookmarks.json` for finalist IDs | OK — full text captured |

- **18 topic queries** run against the cache: product management, product strategy, product discovery, jobs to be done, product-market fit, write a PRD, product roadmap, product-led growth, AI product, north star metric, product sense, value prop/positioning, customer interviews, MVP, feature prioritization, continuous discovery, product vision, user research.
- **107 unique tweets** in `x-corpus.json` (deduped, engagement-ranked). ~6 are genuinely on-topic for product discovery/strategy; the rest are AI-dev/crypto noise the keyword net dragged in.
- The 40-query `queries.txt` (with `min_faves:`/`-filter:replies` operators, aimed at real PM authors) is preserved in scratch for a re-run if live search recovers.

---

## Canonical product authors on X — the GAP

The batch was designed to reach the canonical voices below. Because **live search never returned**, none were fetched, and **none are present in the bookmark archive** either. These are the handles to prioritize when the channel recovers (identities from general knowledge, not fetched this session — treat follower counts as approximate/unverified):

| Handle | Known for | Why canonical for `product` |
|---|---|---|
| `@lennysan` (Lenny Rachitsky) | Lenny's Newsletter; product growth, PMF, PM career | The single highest-authority PM aggregator on X |
| `@ttorres` (Teresa Torres) | Continuous Discovery Habits; **Opportunity Solution Tree** | Core discovery methodology |
| `@cagan` (Marty Cagan) | SVPG; *Inspired* / *Empowered*; product operating model | Product vision, teams, discovery vs delivery |
| `@shreyas` (Shreyas Doshi) | Product sense, prioritization, "LNO" tasks, pre-mortems | Product thinking & strategy |
| `@aprildunford` (April Dunford) | *Obviously Awesome*; **positioning** | Positioning & value proposition |
| `@johncutlefish` (John Cutler) | The Beautiful Mess; metrics, org design, "feature factory" | Metric-trees, outcomes over output |
| `@melissaperri` (Melissa Perri) | *Escaping the Build Trap*; product ops | Strategy, product ops |
| `@bfgmartin` / `@PawelHuryn` (Pawel Huryn) | The Product Compass newsletter; PM frameworks | **Present in archive** but only via an off-topic repo-launch tweet ([2029697412701282511](https://x.com/PawelHuryn/status/2029697412701282511)) — a real PM voice, wrong artifact |
| `@jasonfried` / `@dhh` (Basecamp) | **Shape Up** — appetite, betting table, no-roadmaps | Scoping & prioritization method |

> **Action:** none of the above could be vetted with `xrelay user <handle>` because the API was down. This table is a re-run target, not fetched data.

---

## Best threads & frameworks (verbatim, from the local cache)

These are the genuinely product-relevant items the fallback net surfaced. Each is quoted verbatim with a destination tag.

### 1. David Park (@Davidjpark96) — "How I would choose my next startup idea" (10-point checklist)
**URL:** https://x.com/Davidjpark96/status/1919114463111946345 · likes 1,476 · bookmarks 2,450 · views 147.9K
**Tag: `product` (opportunity discovery / idea validation / strategy)** — the strongest single item in the corpus.

Verbatim (condensed to the 10 criteria; full text in JSON):
> 1. It must be a product in a **growing market**. …don't risk creating an amazing product just to have the user base dry up.
> 2. The **value of the product must increase over time** (e.g. social graph / data compounding) — this mitigates churn. "Churn fucking sucks."
> 3. The product must have some **growth flywheel** … "Growth loops allow for exponential growth without any need for marketing hacks."
> 4. Must be **scalable** … not reliant on human labor, too capital-intensive, or tailored per customer. (Warns against agency models — "upside is capped.")
> 5. Idea must be **validated and have clear monetization** … "Anyone can build anything with AI. The question now is are you building something valuable? The fastest way to check is to see if people will actually pay."
> 6. **Recruit test:** "Go to every genius you know and continually badger them to join… If none of them will join you, reconsider." A weak co-founder signal is a red flag.
> 7. The idea must be (mostly) **bootstrappable** … "With LLMs, magic is now an API call away… I'd rather self-fund. Absolutely no VC's at the start."
> 8. Consider whether **you are the best person to be CEO** … "Could you face the top 1% of founders in this field and win?"
> 9. It must matter enough that you'd "**gamble all the blessings**" — expect a volatile decade+.
> 10. **Reflect and choose, but don't fall in love with the idea** … "You will pivot several times before you stumble upon the winning product."
> Closing: challenges "ideas are worthless, execution is everything" — "a few months of ideating and making sure your startup actually is necessary could save you years."

**Why it matters for the skill:** a clean, opinionated **opportunity-selection rubric** — maps directly to `product`'s opportunity discovery, market selection, business-model/monetization hypotheses, and risk register.

---

### 2. Prajwal Tomar (@PrajwalTomar_) — 7-part PRD structure (for AI-assisted MVP builds)
**URLs:** https://x.com/PrajwalTomar_/status/1932776585574130103 · https://x.com/PrajwalTomar_/status/1888567966071210282 (near-identical reposts) · views ~50K each
**Tag: `product` (PRD / scope / acceptance)** — practitioner-grade, lightweight.

Verbatim structure:
> 1. **Introduction** — the problem you're solving and the vision for the product. Sets context.
> 2. **Objectives & Goals** — the main outcomes; the core purpose.
> 3. **Target Users & Roles** — who uses it (clients, admins) and what actions they perform.
> 4. **Core Features for MVP** — must-have features to deliver value quickly and validate.
> 5. **Future Scope** — features to add later; "helps clients think beyond the MVP without overloading the first phase."
> 6. **User Journey** — how users interact step by step, across all roles.
> 7. **Tech Stack** — tools, frameworks, APIs. *(→ sibling `architecture`)*
> "You don't need to overcomplicate things. Just focus on core features for MVP and future scope."

**Why it matters:** a real-world, minimal PRD skeleton for small/AI-assisted teams — a good *lean* counterpoint to a heavyweight PRD template. Note #7 (tech stack) leans into `architecture`.

---

### 3. AliGrids (@AliGrids) — full SaaS product lifecycle map (folder tree)
**URL:** https://x.com/AliGrids/status/2037204677503443262 · likes 254 · views 18K · (credit @hridoyreh)
**Tag: SPANS the whole family** — a master index; useful for scoping which stage owns what.

The tree lays out a SaaS from idea to exit. Stages relevant to **`product`** (verbatim node names):
> **Idea** → Problem Discovery · Market Research · Niche Selection · Competitor Analysis · Opportunity Mapping
> **Validation** → Customer Interviews · Landing Page Test · Waitlist · Pre Sales · Demand Testing
> **Planning** → Product Roadmap · Feature Prioritization · MVP Scope · Tech Stack · Development Plan
> **Conversion** → … Pricing Strategy … *(pricing = `product` hypothesis; funnel = `growth`)*

Downstream branches belong to siblings: **Design** (Wireframes/UI/UX/Prototype/Design System → `design`), **Development/Infrastructure/Testing** (→ `frontend`/`architecture`), **Acquisition/Distribution/Growth/Retention** (→ `marketing`/`growth`).

**Why it matters:** a ready-made **stage-ownership checklist** — the "Idea" and "Validation" branches are almost exactly `product`'s discovery scope, and the tree cleanly shows where `product` hands off to design/frontend/marketing/growth.

---

### 4. Matt Shumer (@mattshumer_) — "MonetizerPro" pricing-strategy prompt
**URL:** https://x.com/mattshumer_/status/1919536954925785437 · likes 803 · bookmarks 2,452 · views 107K
**Tag: `product` (pricing/monetization hypotheses)** with `growth` overlap (A/B test, checkout copy).

A structured LLM prompt that operationalizes a pricing method. Verbatim reasoning process:
> 1. Clarify product's core outcome & value_metric
> 2. Map competitive price anchors
> 3. Estimate **willingness-to-pay bands: floor (no-brainer) · midpoint (fair) · ceiling (premium)**
> 4. Choose a psychological price point per band (e.g. $29 / $99 / $249)
> 5. Slice value_metric quotas + features into **3 distinct tiers**
> 6. Design one **expansion play** (add-on or usage-based overage)
> 7. Draft checkout microcopy to crush objections
> 8. Lay out a **14-day A/B test plan**

**Why it matters:** encodes a defensible **value-based pricing** method (value → WTP → price, tiering to a value metric, expansion revenue) — directly feeds `product`'s pricing/business-model hypotheses. The checkout-copy/A-B-test deliverables belong to `growth`/`marketing`.

---

### 5. Aprilynne Alter (@AprilynneAlter) — "13 Pricing Strategies, Visualized" (Guide to Pricing Theory)
**URL:** https://x.com/AprilynneAlter/status/1562099871447859213 · likes 350 · retweets 59
**Tag: `product` (pricing reference)** — pointer to a visual pricing-theory cheat sheet (image; credit ShlomoGenchin).

> "Having trouble pricing your products? … 13 Pricing Strategies, Visualized 👇"

**Why it matters:** a compact reference for pricing-model options (the image itself wasn't fetchable via the dead API — flag for a web pass). Secondary to #4.

---

### 6. Atypica.AI (@atypica_AI) — synthetic/AI-driven consumer research
**URL:** https://x.com/atypica_AI/status/2066506555453771798 · bookmarks 19 · views 49K
**Tag: `product` (user/market research — emerging method)**, adjacent to `design` research.

> "We replicated a $100K product image test — and got the same answer with Atypica. But that wasn't the interesting part, the AI research agent literally helped our client to understand their consumers."

**Why it matters:** a signal that **AI-agent-driven user research** (synthetic panels, replicated concept tests) is emerging — relevant to `product`'s research-synthesis stage for AI-era products. Thin as a standalone source; note as a trend.

---

## Also-rans (link-only / off-topic-but-adjacent, low value)

- **@johnrushx** — "Visual version of my ideation framework" ([1904807682915049817](https://x.com/johnrushx/status/1904807682915049817)) — image-only, no text substance fetchable. `product` (ideation).
- **@kevinkern** — "Understand Project Planning with AI (PRD, Stories, Roadmap) + how to build them in Cursor" ([1914762195784884528](https://x.com/kevinkern/status/1914762195784884528)) — link-only video; spans `product`→`frontend`.
- **@PawelHuryn** — real PM author, but the only saved tweet is a GitHub-repo launch ([2029697412701282511](https://x.com/PawelHuryn/status/2029697412701282511)), not product wisdom.
- Numerous MVP-build threads (@zivdotcat, @MVP_Builder, @PrajwalTomar Cursor+Supabase) — these are **`frontend`/build**, not `product` discovery. Tagged out.

---

## Top-10 shortlist for building `product-skill`

Ranked by usefulness to the Discover/strategy stage (given the thin yield):

| # | Item | URL | `product` sub-area |
|---|---|---|---|
| 1 | Davidjpark96 — startup-idea 10-point checklist | https://x.com/Davidjpark96/status/1919114463111946345 | Opportunity discovery, validation, monetization, risk |
| 2 | AliGrids — SaaS lifecycle map (Idea/Validation/Planning branches) | https://x.com/AliGrids/status/2037204677503443262 | Discovery→validation→scope; stage ownership |
| 3 | PrajwalTomar — 7-part lean PRD structure | https://x.com/PrajwalTomar_/status/1932776585574130103 | PRD, MVP scope, future scope |
| 4 | mattshumer — MonetizerPro pricing method (WTP bands → 3 tiers → expansion) | https://x.com/mattshumer_/status/1919536954925785437 | Pricing / business-model hypotheses |
| 5 | AprilynneAlter — 13 pricing strategies visual | https://x.com/AprilynneAlter/status/1562099871447859213 | Pricing reference |
| 6 | atypica_AI — AI-agent consumer research | https://x.com/atypica_AI/status/2066506555453771798 | User/market research (AI-era) |
| 7 | johnrushx — visual ideation framework (image) | https://x.com/johnrushx/status/1904807682915049817 | Ideation |
| 8 | kevinkern — PRD/Stories/Roadmap planning w/ AI | https://x.com/kevinkern/status/1914762195784884528 | PRD→roadmap (build-adjacent) |
| 9 | PawelHuryn — canonical PM author to follow (re-run target) | https://x.com/PawelHuryn | (author, not artifact) |
| 10 | The GAP table (Lenny/Torres/Cagan/Shreyas/Dunford/Cutler/Perri/Shape Up) | — | Re-run targets when live search recovers |

---

## Issues hit & how handled

- **Live-search outage (severe):** `xrelay batch` and `xrelay search` both hung indefinitely with no `RATE_LIMITED`/error envelope — an endpoint hang, not a normal throttle. Handled by killing both, verifying auth was intact (`whoami` OK), and pivoting to the offline cache. Did **not** hammer the endpoint with retries (would only deepen any throttle).
- **Corpus mismatch:** the fallback source (Tamas's bookmarks) is an AI-dev archive, so product yield was low. Handled by (a) running both keyword and semantic passes to extract every genuine product item, (b) documenting the gap honestly, (c) listing the canonical authors as explicit re-run targets rather than fabricating coverage.
- **No verbatim beyond text:** images/videos/linked articles (johnrushx, AprilynneAlter, kevinkern) couldn't be expanded because thread/article reads are live API calls (also down). Flagged for a web-channel pass.

## Files
- `research/product/x-corpus.md` — this document
- `research/product/x-corpus.json` — 107 deduped tweets + `method` block + `productFinalistIds`
