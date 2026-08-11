# Product-skill research corpus

Deep research run to gather the knowledge for building **`product-skill`** — the Discover/Strategy
stage of the Digital Product Skills family. Four channels, each an Opus lead fanning out Sonnet
workers; nothing dropped, everything linked to source.

`product` owns: opportunity/problem discovery · user/market/competitor research synthesis · JTBD ·
vision/strategy/principles · audience & segment selection · value proposition & positioning ·
business-model & pricing hypotheses · PRD & acceptance criteria · scope/prioritization/roadmaps ·
product-level journeys · success metrics & metric-trees · risk/assumption registers — across **all**
product types (marketing site · web app · SaaS · iOS · Android · agentic/AI · internal tools).
Sibling skills (design · frontend · architecture · marketing · sales · growth · success) are tagged
inline where content belongs to them.

## The corpus files

| File | Lines | What it is |
|---|---:|---|
| [`skills-corpus.md`](skills-corpus.md) | 81 | Every product-relevant agent skill in the open ecosystem (skills.sh + `npx skills find`), ranked by installs×quality, with the ecosystem gap analysis. |
| [`github-corpus.md`](github-corpus.md) | 367 | 381-repo GitHub sweep → ranked table + deep extractions of the best PM-skills-for-agents repos, PRD/framework/template hauls, and the CI-enforced eval-contract pattern. Raw corpus in [`corpus.json`](corpus.json) (381 repos). |
| [`webdesign-extraction.md`](webdesign-extraction.md) | 1,562 | Complete tagged extraction of the old `webdesign` skill (24 files, ~296 items + 62 sources) before it is retired. `[product]` 58 · `[design]` 106 · `[frontend]` 82 · `[cross]` 50. |
| [`x-corpus.md`](x-corpus.md) | 188 | X/Twitter — **partial** (live search was throttled/dead this session; recovered from the local bookmark cache). Low yield for PM; see caveat below. Raw in [`x-corpus.json`](x-corpus.json). |

## Cross-channel synthesis

### 1. The framework canon is settled — and consistent across every channel

GitHub, skills.sh, and the webdesign `[product]` layer independently converge on the same
named-framework spine. This is what `product-skill` must teach fluently (wrap, don't reinvent):

- **Discovery:** Continuous Discovery + Opportunity Solution Tree (Torres) · The Mom Test
  (Fitzpatrick) · JTBD (Christensen) · Customer Development / "get out of the building" (Blank).
- **Strategy:** Good Strategy/Bad Strategy (Rumelt) · Business Model Canvas + Value Proposition
  Canvas (Osterwalder) · Positioning (Moore, Dunford) · Crossing the Chasm · Lean Canvas.
- **Define / PRD:** Cagan's *Inspired* (outcomes over requirements) · Spolsky functional specs ·
  8–10 section PRD skeletons (multiple, convergent) · acceptance criteria (Given/When/Then) ·
  job-stories / user-stories / WWA.
- **Prioritization:** the multi-engine set — RICE · ICE · Opportunity Score (Olsen) · Kano ·
  MoSCoW · Weighted — with the "run all applicable, surface **divergence**, refuse to fabricate"
  discipline.
- **Metrics:** North Star · HEART · AARRR · metric trees · OKRs (Doerr).
- **Risk / assumptions:** Torres' 4 risks → extended 8-category taxonomies · Build Risk Review
  (demand hierarchy L0–L4, evidence ladder weak/medium/strong) · strategy red-team · pre-mortem.
- **Process:** Lean Startup · Shape Up · Foundation Sprint · Design Sprint · Triple Diamond.
- **Market sizing:** TAM/SAM/SOM with source-calibrated confidence tiers + TAM-misuse guard.
- **Pricing:** Van Westendorp · value-based · tiering / anchoring / decoy psychology.

### 2. The wedge — what the ecosystem is MISSING (our differentiation)

Both the skills and GitHub channels independently flagged the same white space. Generic PM/SaaS
discovery is **saturated** (6 major collections, 452+ skills). `product-skill` should own what
nobody covers well:

1. **Cross-product-type unification** — one skill that adapts discovery/strategy across marketing
   site, web app, SaaS, iOS, Android, agentic, internal. Every existing collection is
   generic-or-SaaS-flavored.
2. **Agentic/AI-product discovery** — capability mapping, **eval-as-acceptance-criteria**,
   human-in-loop scoping, non-determinism risk. Wide open; only strategy-level fragments exist.
3. **Mobile product-level discovery** (all mobile hits are design/dev, none product).
4. **Metric-tree decomposition** (north-star is everywhere; driver-tree is thin).
5. **A living, integrated risk/assumption register** (vs one-off canvases).
6. **PRD altitude flexibility** by product type & audience.

### 3. Best structural analogs — study, don't rebuild

- **`assimovt/productskills`** — 16 framework-grounded SKILL.md files; *the closest structural
  analog to what we're building.*
- **`product-on-purpose/pm-skills`** — Triple Diamond spine + a **CI-enforced eval contract**
  (trigger fixtures + output rubrics + reciprocal boundary pointers) that maps directly onto our
  own high-signal-authoring-standard and skill-template evals.
- **`phuryn/pm-skills`** (124 files, phase-organized) · **`deanpeters/Product-Manager-Skills`**
  (MITRE framing, 70 skills) · **`anthropics/knowledge-work-plugins`** (official quality benchmark).
- **`gokulrajaram/ProductSpec`** — a machine-readable PRD standard with **AI-eval fenced blocks** —
  relevant to our agentic angle and the family handoff contract.

### 4. Reusable infrastructure patterns (meta — for how we author `product-skill`)

- **CI-enforced eval contract** — the "a skill is done when its routing + output quality are
  measurable" pattern (three eval lanes; router eval is the trustworthy one).
- **Multi-engine + divergence + refusal protocols** — apply every applicable framework, report the
  disagreement as the finding, refuse to fabricate missing inputs.
- **Source-calibrated confidence + Fact/Inference/Assumption labeling** (Autonomous Investigation
  Protocol) — a research-synthesis discipline worth adopting wholesale.
- **"Commands chain skills"** — slash-command pipelines that compose skills into workflows.

### 5. The webdesign salvage (`[product]` spine, 58 items)

Before `webdesign` is retired, its product-strategy-in-design-clothing was lifted: the **register
decision** (design IS vs SERVES the product), the **premium↔information dial** (vertical/audience
strategy), the **three-credibility-layers** trust doctrine + E-E-A-T, the whole
persuasion/conversion file (Cialdini, cognitive biases, conversion-centered design, pricing
psychology), the "why work reads templated" root-cause fixes, and the discovery discipline (pin
subject/audience/single-job first). The other 188 `[design]`/`[frontend]` items route to
`design-skill` / `frontend-skill` — captured here so nothing is lost when webdesign is decommissioned.

## Caveats & provenance

- **X channel is partial.** Live X search was non-responsive this session (a 46-query batch ran
  ~12 min and wrote 0 bytes; a single search hung >120s with no envelope — an endpoint hang, not a
  normal throttle). Recovered from the local bookmark cache (4,881 tweets), but that archive is an
  AI-engineering / agentic-coding / crypto collection — canonical PM voices (Lenny, Torres, Cagan,
  Shreyas, Dunford, Cutler, Perri) are **absent**. So X is low-yield for product; the canonical
  corpus came from the web + GitHub channels. `x-corpus.md` preserves the query list and a gap table
  of canonical PM handles for a re-run if live access recovers.
- Every item in every file links to its source (repo URL, `file:line`, skills.sh URL, tweet URL).
- Sibling-skill tags (`[design]`/`[frontend]`/`[marketing]`/etc.) mark content to route elsewhere,
  not to own.

## Next step

Synthesis gate → `product-skill` build. The corpus supports a skill that: teaches the canonical
framework spine, faceted by product type (web/app/SaaS/mobile/agentic surfaces as overlays), with
the agentic-product + cross-surface + metric-tree + living-risk-register angles as the differentiator,
authored to the CI-enforced eval-contract bar.
