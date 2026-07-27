# Changelog

All notable changes to **product** are documented here.

The release procedure synchronizes `.codex-plugin/plugin.json`, this changelog, git tag
`v<version>`, and the matching GitHub Release. Runtime `SKILL.md` contains no version metadata.

## [Unreleased]

### Added
- Queue unreleased changes here.

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

[0.1.2]: https://github.com/gabros20/product-skill/releases/tag/v0.1.2
[0.1.1]: https://github.com/gabros20/product-skill/releases/tag/v0.1.1
[0.1.0]: https://github.com/gabros20/product-skill/releases/tag/v0.1.0
