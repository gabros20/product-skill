# Changelog

All notable changes to **product** are documented here.

The release procedure synchronizes `.codex-plugin/plugin.json`, this changelog, git tag
`v<version>`, and the matching GitHub Release. Runtime `SKILL.md` contains no version metadata.

## [Unreleased]

### Added
- Queue unreleased changes here.

## [0.3.1] — 2026-10-17

### Fixed
- `surface-agentic` cost risk: no unlimited-agent promise until tail cost per user is measured,
  and a bounded allowance offered instead, so the rule says what to sell as well as what not to.

## [0.3.0] — 2026-10-17

### Added
- **surface-agentic** §5 *Non-determinism, latency, cost, safety as product risks*: cost per
  successful task sharpened — failed and abandoned attempts stay in the numerator (cost per accepted
  task), each workload class (chat, research, code/browser, multi-agent) budgeted and priced apart
  with Anthropic's vendor-reported token multiples as the reason, no unlimited-agent promise until
  tail cost is measured, one paid workflow before broader autonomy. New output eval
  `agentic-cost-per-accepted-task`.

## [0.2.0] — 2026-10-17

### Added
- Practitioner-knowledge fold into existing sections (no new references). **Positioning:** a
  proof-backed claim ledger for unique attributes; adoption blockers as Value Proposition Canvas
  Pains; beachhead selection through Moore's two-pass market-development checklist, sharpened with
  pain-already-priced, selecting-signal-must-predict-the-North-Star (decay is revealed preference,
  not suppressed demand), sample calibration of signals, access-based hard disqualifiers, and an
  even probe split across contested segments. **Business model:** prerequisites & cost-shape sheet
  behind any near-zero-cost claim; recurring revenue needs a recurring job; a baseline-first
  economic-value model (Nagle & Müller EVE) bounding the WTP ceiling; limited-first revenue streams
  for high-risk purchases (Rogers' trialability/observability, rung sequence labeled Inference).
  **PRD:** baseline in success metrics, trigger-named deferrals, phase entry/exit criteria, a
  simulated list for pilots, unverified dependencies as phase gates, open questions with recommended
  defaults. **Agentic:** deterministic/model split (the model never owns authoritative facts;
  simplest structure first, citing Anthropic's *Building effective agents*), an out-of-bounds-action
  failure mode, route-coverage for eval task sets, real-first task-set sourcing (synthetic cases
  only fill labeled coverage gaps and never pass the release gate alone), human-only and
  act-with-validation autonomy edges, business-rule escalation triggers. **Prioritization:**
  cost-side criteria as negative weights in Weighted Scoring. **Market:** record every figure with
  its frame; never splice non-comparable frames. **Metrics:** rates name denominator and window;
  rolling windows for small samples; baseline before target. **Risk register:** absence of failure
  stories is survivorship bias; red-team closes the loop with a review changelog. **Discovery /
  website / internal:** premise-challenging desk briefs, the visitor's blocked next step as the
  website problem, and unofficial-system probes for internal tools. Router rows and two output evals
  updated to reach the new behavior. `surface-agentic.md` now sits above the 2,500-token review
  threshold (it was 2,588 before the fold); the overshoot was reviewed and accepted, since eval
  design and autonomy belong in this overlay.

## [0.1.2] — 2026-07-27

### Fixed
- Mission and boundary: named only 3 of 9 sibling skills, the lowest cross-reference count in the
  family. Extended the routing sentence to add `quality` (the ship/no-ship decision and independent
  verification), `operate` (running the product in production), `backend`/`data`/`ai` (server
  behavior, the analytical data plane, and model-driven behavior — the same build-sibling class as
  `frontend`, previously omitted), and `automation` (business processes spanning systems the
  product does not own). No new section; the existing sentence gained clauses. Runtime pack
  otherwise unchanged.

## [0.1.1] — 2026-07-23

### Fixed
- Visual guide: mobile horizontal overflow and oversized text on the agentic-wedge section —
  pinned `text-size-adjust: 100%` (stops iOS auto-inflating text), added a page-level `overflow-x`
  guard, and gave the `white-space: pre` code blocks `min-width: 0` + `max-width: 100%` so they
  scroll inside their own container instead of forcing page-wide horizontal scroll. Runtime pack
  unchanged.

## [0.1.0] — 2026-07-23

### Added
- Initial release of the `product` skill — the Discover/Strategy stage of the Digital Product
  Skills family. A faceted router over 9 primary jobs (discovery, strategy, positioning,
  business-model, market, prd, prioritization, metrics, risk-register) and 5 product-type surface
  overlays (website, app-saas, mobile, agentic, internal), with the agentic/AI-product overlay —
  eval-as-acceptance-criteria — as the differentiator. 15 references, a `handoff.yaml` contract
  into `design`/`architecture`, and activation/traversal/output/compression evals.

[0.3.1]: https://github.com/gabros20/product-skill/releases/tag/v0.3.1
[0.3.0]: https://github.com/gabros20/product-skill/releases/tag/v0.3.0
[0.2.0]: https://github.com/gabros20/product-skill/releases/tag/v0.2.0
[0.1.2]: https://github.com/gabros20/product-skill/releases/tag/v0.1.2
[0.1.1]: https://github.com/gabros20/product-skill/releases/tag/v0.1.1
[0.1.0]: https://github.com/gabros20/product-skill/releases/tag/v0.1.0
