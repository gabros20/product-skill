# product — Product Strategy

Decide **what to build, for whom, and why** — then specify it precisely enough that design and
engineering build the right thing. `product` is the Discover/Strategy stage of the
[Digital Product Skills](https://github.com/gabros20) family: an agent skill for product discovery,
strategy, positioning, PRDs, prioritization, success metrics, and risk — **across websites, web/SaaS
apps, mobile, agentic/AI products, and internal tools.**

It owns the *decision* about what to build, not its execution — it recommends its sibling skills
(`design`, `frontend`, `architecture`, `marketing`, `growth`, `sales`, `success`) for the work it
doesn't own, and never silently invokes them.

## What it does

A **faceted router**: pick one primary job × at most one product-type overlay.

**Primary jobs** — discovery · strategy · positioning · business-model & pricing · market sizing &
competition · PRD & acceptance criteria · prioritization & roadmap · success metrics & metric-trees ·
risk/assumption register.

**Product-type overlays** — website · web/SaaS app · mobile · **agentic/AI** · internal tool. The
overlay reshapes discovery, metrics, and the PRD for that product type.

**The differentiator:** first-class **agentic/AI-product** discovery — capability & failure-mode
mapping, **eval sets as acceptance criteria**, human-in-the-loop scoping, non-determinism/latency/
cost/safety as product risks, and model choice as a product decision. Plus metric-tree
decomposition and a living risk register — the gaps the existing PM-skill ecosystem doesn't cover.

Every method is grounded in its named framework — Teresa Torres (Continuous Discovery, Opportunity
Solution Tree), The Mom Test, Christensen (JTBD), Rumelt (strategy kernel), Osterwalder (Business
Model & Value Proposition Canvas), Moore & Dunford (positioning), the RICE/ICE/Kano/MoSCoW
prioritization set, North Star / HEART / AARRR metrics, and TAM/SAM/SOM with calibrated confidence.

## Install

```bash
npx skills add gabros20/product-skill -g -y
```

Or use it in Codex with `$product`.

## Examples

```text
$product turn this rough idea into a validated problem and an opportunity solution tree
$product write a PRD for the new onboarding flow, SaaS product
$product define acceptance criteria for our AI support agent   # → eval set + thresholds
$product prioritize this backlog and give me an outcome roadmap
$product build a metric tree from our north-star metric
```

## Outputs

Validated problem statements, strategy kernels, positioning statements, Business Model / Lean
Canvases, market sizing with confidence, PRDs (one-pager ↔ full ↔ machine-readable), prioritized
backlogs with framework divergence, metric trees, a living risk register, and a `handoff.yaml`
companion that feeds `design` and `architecture` downstream.

## Repository layout

```
skills/product/          runtime skill (SKILL.md + 15 references + agents/openai.yaml)
evals/                   activation · traversal · output · compression-ablation fixtures
docs/                    installation and usage
.codex-plugin/           plugin manifest
```

## Documentation & releases

- [docs/installation.md](docs/installation.md) · [docs/usage.md](docs/usage.md)
- [CHANGELOG.md](CHANGELOG.md) — release history (current: v0.1.0)
- [CONTRIBUTING.md](CONTRIBUTING.md) — local validation (`scripts/lint-skill`, `scripts/check-sync`)

## License

MIT — see [LICENSE](LICENSE).
