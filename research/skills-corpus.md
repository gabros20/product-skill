# Product-skill — Open Agent-Skills Ecosystem Corpus

**Channel:** FIND-SKILLS (open skills.sh ecosystem)
**Date:** 2026-07-23
**Purpose:** Map every existing agent skill relevant to the Discover/strategy stage of product development, so we learn from the best and know what already exists before building `product-skill`.

**Method:** `npx skills find` across the full keyword net (28 queries) + WebFetch of the top collection pages on skills.sh. No installs performed — catalog + links only. Vetting priority: 1K+ installs · official sources (anthropics) · reputable multi-skill collections > unknown single-skill authors.

**Headline finding:** Product management is one of the most saturated skill categories on skills.sh. There are **6 serious, comprehensive PM collections** (450+ skills combined) plus Anthropic's own official knowledge-work set. The generic PM/SaaS discovery surface (PRD, roadmap, JTBD, OST, positioning, OKRs, market sizing, personas, competitive analysis) is **extremely well-covered**. The white space is **cross-product-type unification** (one skill family spanning marketing site + web app + SaaS + iOS + Android + agentic/AI) and **agentic/AI-product discovery specifically** — that is our opportunity.

---

## Tier 1 — The major PM collections (read these to learn the craft)

| Collection | Author | Skills | Total installs | Coverage | Tag | Quality note |
|---|---|---|---|---|---|---|
| [knowledge-work-plugins](https://skills.sh/anthropics/knowledge-work-plugins) | **anthropics** | 230 | 421.4K | write-spec, feature-spec, user-research, research-synthesis, competitive-intelligence/analysis, product-brainstorming, roadmap-update/management, sprint-planning, competitor-brief | [product] | **OFFICIAL Anthropic.** Gold standard for skill *authoring* quality/structure. Not PM-exhaustive but every skill is well-formed. |
| [lenny-skills](https://skills.sh/refoundai/lenny-skills) | refoundai | 148 | 159.5K | ai-product-strategy, writing-prds, defining-product-vision, analyzing-user-feedback, positioning-messaging, setting-okrs-goals, designing-growth-loops, continuous-discovery, behavioral-product-design, technical/prioritizing-roadmaps, startup-ideation | [product] (+ [marketing]/[sales] spillover) | **Lenny Rachitsky brand** — highest domain authority in PM. Highest-quality *content*. Spans PM+growth+sales+marketing (tag carefully). |
| [pm-skills](https://skills.sh/phuryn/pm-skills) | phuryn | 68 | 122.9K | product-strategy, product-vision, create-prd, user-stories, job-stories, opportunity-solution-tree, north-star-metric, business-model, gtm-strategy/motions, value-proposition, pricing-strategy, market-sizing/segments, ideal-customer-profile, personas, assumptions+experiments (new/existing), pre-mortem, porters/pestle/ansoff/swot | [product] | Most *systematic* discovery→delivery coverage. Strong assumption/experiment discipline. ~1.7–2.4K each. |
| [product-manager-skills](https://skills.sh/deanpeters/product-manager-skills) | deanpeters | 70 | 85K+ | prd-development, discovery-process/interview-prep, jobs-to-be-done, opportunity-solution-tree, problem-statement/framing-canvas, positioning-statement/workshop, tam-sam-som, customer-journey-map, proto-persona, lean-ux-canvas, storyboard, saas metrics, PM career-ladder skills | [product] | Widest *breadth* + workshop facilitation angle. Also career/leadership skills (out of scope). Best taxonomy reference. |
| [pm-skills](https://skills.sh/product-on-purpose/pm-skills) | product-on-purpose | 71 | 27.6K | Lifecycle-staged: **Discover / Define / Develop / Deliver / Measure / Iterate / Foundation** — deliver-acceptance-criteria, deliver-edge-cases, define-hypothesis, define-problem-statement, define-jtbd-canvas, define-opportunity-tree, discover-interview-synthesis, measure-experiment-design, discover-market-sizing | [product] | **Best STRUCTURE.** Explicit lifecycle stages = closest architectural analog to a family skill. Also embeds Design-Sprint + Foundation-Sprint toolchains. |
| [claude-plugin-product-management](https://skills.sh/pmprompt/claude-plugin-product-management) | pmprompt | 25 | ~8K | Named-framework catalog: shape-up, working-backwards, seven-powers, hooked-model, opportunity-solution-trees, JTBD, monetizing-innovation, pmf-survey, trustworthy-experiments, positioning-canvas, thinking-in-bets | [product] | Best *framework name-check* library — each skill = one canonical PM framework. Lower installs but curated. |

---

## Tier 2 — High-install standalone / notable skills

| Skill | Source | Installs | Coverage | Tag |
|---|---|---|---|---|
| [to-prd](https://skills.sh/mattpocock/skills/to-prd) | mattpocock/skills | **359.3K** | Convert brief/chat → PRD (dev-workflow flavored) | [product]/[frontend] |
| [to-spec](https://skills.sh/mattpocock/skills/to-spec) | mattpocock/skills | 124.5K | Requirements → technical spec | [frontend]/[architecture] |
| [to-issues](https://skills.sh/mattpocock/skills) / to-tickets | mattpocock/skills | 346.5K / 123.5K | Spec → tracked issues/tickets | [product]/[frontend] |
| [domain-modeling](https://skills.sh/mattpocock/skills) | mattpocock/skills | 237.6K | Structure business-domain concepts | [product]/[architecture] |
| [brainstorming](https://skills.sh/obra/superpowers) | obra/superpowers | 292.2K | General idea generation/exploration | [product] (generic) |
| [jobs-to-be-done](https://skills.sh/wondelai/skills/jobs-to-be-done) | wondelai/skills | 4.2K | Standalone JTBD | [product] |
| [continuous-discovery](https://skills.sh/wondelai/skills/continuous-discovery) | wondelai/skills | 3.1K | Teresa-Torres-style continuous discovery | [product] |
| [discovery-interview](https://skills.sh/parcadei/continuous-claude-v3/discovery-interview) | parcadei/continuous-claude-v3 | 3.9K | Discovery interview runner | [product] |
| [product-designer](https://skills.sh/borghei/claude-skills/product-designer) | borghei/claude-skills | 4.3K | Product design workflow | **[design]** |
| [mobile-app-ui-design](https://skills.sh/ceorkm/mobile-app-ui-design) | ceorkm | 4.8K | Mobile UI design standards | **[design]** |
| [customer-research](https://skills.sh/coreyhaines31/marketingskills/customer-research) | coreyhaines31/marketingskills | 68.5K | Customer/market research (marketing lens) | [product]/[marketing] |
| [firecrawl-market-research](https://skills.sh/firecrawl/firecrawl-workflows/firecrawl-market-research) | firecrawl | 29.8K | Web-scrape-driven market research | [product] (tool) |
| [instrument-product-analytics](https://skills.sh/posthog/ai-plugin/instrument-product-analytics) | posthog/ai-plugin | 283 | Wire up product analytics events | **[frontend]**/[product] |
| [gtm-product-led-growth](https://skills.sh/github/awesome-copilot/gtm-product-led-growth) | github/awesome-copilot | 1.6K | PLG GTM strategy | **[growth]**/[marketing] |
| [business-model](https://skills.sh/phuryn/pm-skills) / monetization / pricing-strategy | phuryn | ~1.9–2.3K | Business-model & pricing hypotheses | [product] |

**Sibling-tagged (not product's, flag to those channels):** product-designer, mobile-app-ui-design, ux-research variants, behavioral-product-design → **[design]**; gtm/positioning-as-messaging, brand-storytelling, content-marketing, customer-research → **[marketing]**; founder-sales, sales-qualification → **[sales]**; growth-loops, PLG, acquisition-channel → **[growth]**; instrument-product-analytics, to-spec, domain-modeling → **[frontend]/[architecture]**.

---

## Must-read before building product-skill (top 8, relevance × quality)

1. **anthropics/knowledge-work-plugins** (421K, official) — read `write-spec`, `feature-spec`, `user-research`, `research-synthesis`, `competitive-intelligence`, `roadmap-update`. This is the *authoring-quality* benchmark; match its SKILL.md structure and altitude.
2. **product-on-purpose/pm-skills** (27.6K, 71) — the **Discover/Define/Develop/Deliver/Measure/Iterate/Foundation** lifecycle is the closest structural analog to a family skill. Steal the stage taxonomy and the acceptance-criteria / edge-cases / hypothesis tri3.
3. **refoundai/lenny-skills** (159.5K, 148) — read `ai-product-strategy`, `defining-product-vision`, `writing-prds`, `analyzing-user-feedback`, `continuous-discovery`. Highest domain-content authority (Lenny brand).
4. **phuryn/pm-skills** (122.9K, 68) — most systematic assumption/experiment/prioritization discipline; read `product-strategy`, `opportunity-solution-tree`, `identify-assumptions-*`, `north-star-metric`, `business-model`.
5. **deanpeters/product-manager-skills** (85K, 70) — widest breadth = best checklist of "topics a complete PM skill must cover" (tam-sam-som, pestel, porters, problem-framing-canvas, lean-ux-canvas, proto-persona).
6. **pmprompt/claude-plugin-product-management** (25) — canonical framework catalog: `shape-up`, `working-backwards`, `seven-powers`, `hooked-model`, `opportunity-solution-trees`, `monetizing-innovation`. Use as the "named frameworks to reference" list.
7. **mattpocock/skills → to-prd** (359.3K) — the single most-installed spec-adjacent skill; read for its *lean, developer-handoff-oriented* PRD conversion (contrast with heavyweight PM PRDs — our skill should offer both altitudes).
8. **wondelai/skills → continuous-discovery + jobs-to-be-done** (3.1K / 4.2K) — clean standalone reference implementations of the two most-copied discovery methods.

---

## Gaps = our opportunity (product topics with NO good existing skill)

1. **Cross-product-type unification.** *Every* collection is generic-PM / SaaS-flavored. **None** span marketing website + web app + SaaS + iOS + Android + agentic/AI with type-specific discovery lenses (e.g., ASO/app-store framing for mobile, SEO/conversion framing for marketing sites, eval/capability framing for agents). This is the core differentiator of the Digital Product Skills family.
2. **Agentic / AI-product discovery.** "agentic product" and "AI product" return junk or generic. Lenny's `ai-product-strategy` is the only credible hit, and it's strategy-only. **No skill** covers discovery/PRD/acceptance-criteria tailored to agentic systems — capability mapping, eval-criteria-as-acceptance, human-in-the-loop scoping, non-determinism risk. Wide-open.
3. **Mobile (iOS/Android) product discovery.** All mobile hits are *design* or *dev* (Swift, UI standards, pentest). No product-level discovery/PRD/journeys skill that understands app-store, platform constraints, or mobile-specific success metrics.
4. **Metric trees / success-metric systems.** `north-star-metric` is everywhere, but decomposing a north star into a driver/metric tree (input→output metrics, guardrails) is thin-to-absent.
5. **Integrated risk & assumption register.** Pieces exist (phuryn `identify-assumptions-*` + `pre-mortem`, product-on-purpose `build-risk-review`) but no single skill that maintains a living assumption/risk register across discovery.
6. **PRD "altitude" flexibility.** Existing PRD skills are either heavyweight-PM (deanpeters) or dev-lean (mattpocock). No skill that flexes altitude by product type and audience — a gap product-skill can own.

**Well-covered (do NOT rebuild, reference/wrap instead):** JTBD, opportunity-solution-trees, positioning/value-prop, OKRs, market sizing (TAM/SAM/SOM), personas, competitive analysis (Porters/PESTEL/Ansoff/SWOT), continuous discovery, business-model/pricing hypotheses, user-research synthesis, generic PRD/user-stories/acceptance-criteria.

---

## Corpus stats

- **Collections cataloged:** 6 major PM collections (452 skills combined) + Anthropic official + ~15 notable standalones.
- **Product-relevant skills surfaced:** 100+ across 28 keyword queries.
- **Highest-install relevant skill:** mattpocock/to-prd (359.3K).
- **Highest-authority relevant collection:** anthropics/knowledge-work-plugins (official) and refoundai/lenny-skills (Lenny brand).
