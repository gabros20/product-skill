# Agent guide — product-skill

This repository is the released `product` skill: the Discover/Strategy stage of the Digital Product
Skills family. The runtime skill lives under `skills/product/`; repository and plugin names use the
`-skill` suffix. Version metadata lives in `.codex-plugin/plugin.json`, `CHANGELOG.md`, and tags —
never in `SKILL.md`.

## What this skill owns

Product discovery, strategy, positioning, business-model & pricing, market sizing & competition,
PRDs & acceptance criteria, prioritization & roadmaps, success metrics & metric-trees, and the
risk/assumption register — across websites, web/SaaS apps, mobile, agentic/AI products, and internal
tools. It owns the *decision* about what to build, not its execution. It recommends siblings
(`design`, `frontend`, `architecture`, `marketing`, `growth`, `sales`, `success`, `data`) for work
it does not own and never silently invokes them.

## Maintainer rules

1. Run `scripts/check-sync` before any release; it validates packaging, routes, references,
   metadata, and eval fixtures. Run `scripts/lint-skill` and `scripts/count-skill-tokens` too.
2. `SKILL.md` is the direct router: a faceted table of one primary job × at most one product-type
   overlay. References are flat under `references/`, directly linked, self-describing, and loaded
   only when their observable condition applies. No required second-hop navigation.
3. Every method must be grounded in its named framework with a source. Fix a wrong formula or
   misattribution as a correctness bug, not a nit (the v0.1 review caught two).
4. Keep the boundary discipline: reference sibling territory by backtick name and recommend it;
   never absorb design/frontend/marketing/growth work.
5. Keep the eval contract current: `evals/{activation,traversal,output,compression-ablation}` must
   reflect the router. Add near-miss activation cases when a new sibling overlap appears.
6. Treat README as the primary storefront. The `site/` and `remotion/` profiles follow the
   `site/README.md` design brief — designed for this skill's faceted-router model inside the shared
   family chrome and the emerald accent, never a filled-in skeleton.
7. Release through matching plugin version + changelog entry + `v<version>` tag + GitHub Release,
   and keep the GitHub About area configured (family-style description, canonical site alias as
   homepage, base + domain topics).

Do not mark a change complete merely because lint passes. Activation, traversal, and output
evaluations must show the skill still changes agent behavior usefully.
