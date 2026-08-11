# GitHub Corpus — `product-skill` (Discover / Strategy stage)

Research channel: **GitHub via `ghrelay`**. Goal: find and extract the most reusable
product-discovery / strategy content on GitHub — awesome-lists, PRD/spec templates, product
frameworks, roadmap/OKR/JTBD resources, product-analytics, and the emerging genre of
**"PM skills for AI agents"** (repos structurally identical to what we are building).

Scope owned by `product-skill`: opportunity/problem discovery; user/market/competitor research
synthesis; JTBD; product vision/strategy/principles; audience/segment selection; value
proposition & positioning; business-model & pricing hypotheses; PRD & acceptance criteria;
scope/prioritization/roadmaps; product-level journeys; success metrics & metric-trees;
risk/assumption registers. Sibling skills (design / frontend / architecture / marketing /
growth) are tagged inline where content belongs to them.

---

## Method & budget

**Funnel:** web-search-first (golden rule 3) → `hydrate` curated ids → `plan --probe` topic
shards → `batch` → `enrich` → `rank` → self-mine small repos + 4 Sonnet workers on the large
finalists.

- **Web searches:** 10 (awesome PM, PRD templates, JTBD, OKR/roadmap, product strategy/discovery,
  PM interview/books, continuous discovery/OST, PM artifacts/canvases, metric trees/AARRR,
  pricing/business-model). These surfaced a whole genre of *PM-skills-for-AI-agents* repos.
- **Hydrated curated ids:** 18 (from web results).
- **Probe shards:** 7 topic slices (`product-management stars:>80`, `product-discovery`,
  `jobs-to-be-done`, `product-strategy`, `prd`, `okr stars:>50`, `product-analytics stars:>50`) —
  all under the 1,000-result cap, batched in.
- **Corpus size:** 381 deduped repos.
- **Enriched:** 50 (top-star) + 17 explicit curated candidates.
- **Ranked:** build-on profile; then judgment-selected finalists (star-rank under-weights
  content-only markdown repos, which are exactly the awesome-lists/templates we want).
- **Deep reads:** 6 small repos self-mined by the lead; 4 large repos delegated to Sonnet workers
  (one per distinct repo — `digest`/`read` are per-repo tarball/cache, safe to parallelize).
- **Budget:** trivial. ~18 GraphQL points and ~50 REST-core calls total; grep.app breaker closed;
  no rate-limit events. Pools ended ~4944/5000 GraphQL, ~4953/5000 REST-core.

**Files:** this doc + `corpus.json` (full 381-repo corpus with enrichment) in
`research/product/`.

---

## Ranked table — most valuable repos

Tag = primary destination skill. `st` = stars. "PM-skills-for-agents" = a repo that packages
product methods as agent SKILL.md files (our exact format).

| Repo | st | What it offers | Tag | URL |
|---|---:|---|---|---|
| **assimovt/productskills** | 53 | 16 clean discovery→launch SKILL.md files, each grounded in one named framework (Mom Test, OST, RICE, Shape Up, Dunford, Rumelt). The single best structural analog to our skill. | product | https://github.com/assimovt/productskills |
| **phuryn/pm-skills** | 24.3k | 100+ agentic PM skills organized by phase (discovery, strategy, market-research, GTM, execution, data-analytics). Biggest reference. | product (+growth/marketing) | https://github.com/phuryn/pm-skills |
| **deanpeters/Product-Manager-Skills** | 5.9k | PM skills framework adapted from the MITRE Innovation Toolkit (Look Inward/Outward/Reframe framing, positioning). | product | https://github.com/deanpeters/Product-Manager-Skills |
| **ProductHired/open-product-management** | 4.4k | Large curated PM curriculum for technical people; framework-organized taxonomy. | product | https://github.com/ProductHired/open-product-management |
| **dend/awesome-product-management** | 2.3k | Curated resource list; section headings form a product-discipline ontology. | product | https://github.com/dend/awesome-product-management |
| **product-on-purpose/pm-skills** | 492 | 68 PM skills on a "Triple Diamond" phase model + Foundation Sprint + Design Sprint; 200+ output samples; CI-enforced artifact contracts. | product | https://github.com/product-on-purpose/pm-skills |
| **gokulrajaram/ProductSpec** | 188 | Portable machine-readable PRD standard (`.product-spec.md`): canonical section vocabulary + structured scope / acceptance-criteria / success-metrics / AI-eval fenced blocks. By Gokul Rajaram. | product (+architecture handoff) | https://github.com/gokulrajaram/ProductSpec |
| **priankr/prd-templates** | 3 | 13 real-world PRD / 1-pager / job-story templates (Aakash Gupta, Asana, Coda, Figma, Jira, Kevin Yien, Peter Yang, Product Hunt, SeatGeek, Lenny Rachitsky, Intercom, Steve Morin, Adam Thomas). | product | https://github.com/priankr/prd-templates |
| **ugur10/prd-template** | 8 | One comprehensive PRD template + worked example (exec summary → background → goals → personas → P0/P1/P2 → UX → tech → GTM → risks). | product | https://github.com/ugur10/prd-template |
| **joelparkerhenderson/business-model-canvas** | 37 | Clean writeup of the 9 BMC blocks (value props, revenue, segments, channels, cost, activities, resources, partners, relationships). | product | https://github.com/joelparkerhenderson/business-model-canvas |
| **brianrhea/awesome-jtbd** | 110 | Curated JTBD resource list (sites, books, podcasts, templates, courses, articles). | product | https://github.com/brianrhea/awesome-jtbd |
| TexasBedouin/vibe-check | 515 | 0-to-1 PM workflow by a 12-yr PM; beginner→shipped. | product | https://github.com/TexasBedouin/vibe-check |
| ankitjha67/product-architect | 99 | 31-agent "product development system." | product | https://github.com/ankitjha67/product-architect |
| lishix520/jtbd-skills | 0 | Modular JTBD + Outcome-Driven Innovation agent skills. | product | https://github.com/lishix520/jtbd-skills |
| mohitagw15856/pm-claude-skills | 1.2k | 515-skill kitchen-sink (in Anthropic plugin directory); very sprawling — mine selectively, not wholesale. | product | https://github.com/mohitagw15856/pm-claude-skills |
| umami-software/umami · PostHog/posthog · openreplay/openreplay | 37k/37k/12k | Product-analytics *tools* (not frameworks). Reference only, for the metrics/instrumentation section. | growth/reference | https://github.com/PostHog/posthog |

---

## Must-mine for `product-skill` (shortlist)

1. **assimovt/productskills** — lift the 16-skill taxonomy and format almost wholesale; it is a
   near-complete scaffold for our Discover/Strategy skill (see deep section below).
2. **phuryn/pm-skills** — the phase taxonomy and per-phase skill inventory (breadth reference).
3. **gokulrajaram/ProductSpec** — adopt the canonical PRD section vocabulary + structured
   acceptance-criteria / success-metrics / AI-eval blocks for our PRD output contract.
4. **deanpeters/Product-Manager-Skills** — MITRE framing methods (Look Inward/Outward/Reframe) for
   the problem-discovery section.
5. **priankr/prd-templates** + **ugur10/prd-template** — a ready catalog of PRD/1-pager templates
   to reference and condense.
6. **dend/awesome-product-management** + **ProductHired/open-product-management** — the canonical
   book/framework reading list and the discipline taxonomy to structure the skill family.

---

## Deep section — self-mined repos (lead)

### assimovt/productskills — the reference analog (MIT license)

16 SKILL.md files, 50–150 lines each, each grounded in ONE citable framework, using
ALWAYS/NEVER/CRITICAL rules. Their explicit design rules (`CLAUDE.md`) are worth adopting verbatim
for our skill-authoring: *opinionated, framework-driven, startup-calibrated (teams of 3–50),
examples > explanations, no role-setting, no corporate PM language (SAFe/velocity/RACI), cite the
framework source.*

**The 16 skills, grouped (path = `skills/<name>/SKILL.md`):**

*Discovery & Research*
- `user-interview` — The Mom Test + YC's Five Questions (Migicovsky) + Alstromer follow-ups; plus
  `references/interview-guide-template.md` (opening/5Q/dig-deeper/closing + bad-vs-good question
  table + commitment-currency signal ladder: time < reputation < access < money < behavior-change).
- `problem-validation` — score = Frequency × Intensity × Workarounds × WTP (each 1–5); ≥250 build,
  100–249 investigate, <100 kill; evidence ladder (observed behavior > spending > time-invested >
  interview quotes > support tickets > surveys).
- `jtbd-analysis` — job-statement format "When [situation], I want to [motivation], so I can
  [outcome]"; Forces of Progress (Push/Pull vs Anxiety/Habit); interview recent switchers.
- `research-synthesis` — Atomic Research (Pidcock): Nuggets → Patterns (3+ sources) → Insights →
  Recommendations; evidence-strength ratings (Strong/Moderate/Emerging/Weak).
- `opportunity-mapping` — Teresa Torres Opportunity Solution Tree (Outcome → Opportunities →
  Solutions → Experiments); frame opportunities as needs not features; ≥3 solutions each.

*Strategy & Positioning*
- `competitor-analysis` — feature matrix (Strong/Adequate/Weak/Missing, every row answers "so
  what?"), 2-axis positioning map (empty quadrant = opportunity), strategic gap analysis; ALWAYS
  include "do nothing" / manual workaround.
- `product-positioning` — April Dunford Obviously Awesome 5 steps in order: competitive
  alternatives → unique attributes → value → best-fit customers → market category (category is the
  *output*, not the input).
- `strategy-doc` — Rumelt Strategy Kernel (Diagnosis / Guiding Policy / Coherent Actions) +
  Playing to Win 5 cascading choices (Aspiration / Where-to-Play / How-to-Win / Capabilities /
  Systems); a strategy MUST state what you will NOT do.

*Prioritization & Scoping*
- `feature-prioritization` — RICE = (Reach × Impact × Confidence) / Effort (Impact scale
  0.25/0.5/1/2/3; never Confidence 100% without hard data) + Linear enablers-vs-blockers lens
  (prioritize blockers while growing).
- `scope-cutting` — Shape Up appetite (fixed time / variable scope), scope-hammering questions,
  cut breadth not quality, circuit-breaker (no auto-rollover).
- `bet-sizing` — Bezos Type 1 (irreversible) vs Type 2 (reversible) + Shape Up pitch
  (Problem/Appetite/Solution/Rabbit-holes/No-gos) + EV = Upside×P(success) − Downside×P(fail) +
  Learning value.

*The PRD*
- `prd-writing` — evidence-first, 800–1200 words, sections: Problem (with evidence) / Goals
  (numeric) / Target Users (narrow) / Requirements (P0 3–5 max, P1, P2) / Success Metrics (+ paired
  counter-metric) / Out of Scope / Open Questions; NEVER include implementation details.

*Launch & Measure*
- `launch-plan` — 3 tiers (silent / soft / big-bang) with per-tier checklists; default to
  tier 1–2; ≤2–3 big-bangs/year; never launch Friday. *(mostly growth/marketing; the "define
  success metrics before launch" and rollback discipline are product.)*
- `metrics-framework` — North Star (value moment, not revenue/vanity) + input/output metric tree
  (Acquisition/Activation/Engagement/Retention leaves) + a counter-metric for EVERY metric;
  ≤5–7 active metrics; exact formulas.
- `experiment-design` — hypothesis template "If we [change] for [audience], then [metric] will
  [direction] by [amount], because [evidence]"; primary + guardrail metrics; sample size before
  running; no peeking; ≥7 days. *(growth-leaning; hypothesis format is product.)*
- `roadmap-planning` — Now/Next/Later (outcomes not features); no dates beyond 6 weeks; each item
  cites evidence; Now = 1–3 items.

**Must-steal:** the whole 16-skill spine, the `CLAUDE.md` skill-design rules, the
interview-guide-template, the problem-validation scoring math, and the metrics-tree + counter-metric
pattern — all directly reusable, verbatim-quality, MIT-licensed.

### gokulrajaram/ProductSpec — a PRD *contract* for AI agents (path `SPEC.md`)

Portable `.product-spec.md` format; `artifact_type` ∈ {hypothesis, prd, openspec_proposal}.
**Canonical section vocabulary — mandatory, in order:** `problem` → `hypothesis` →
`product_summary` → `scope` → `acceptance_criteria` → `success_metrics`. **Optional:**
`user_experience`, `customer_truth`, `solution_alternatives`, `solution`, `strategic_positioning`,
`adoption`, `pricing`, `risks`, `ai`, `open_questions`, `rollout`, `related_artifacts`.

Structured fenced blocks (reusable output schema for our PRD skill):
- `productspec-scope`: `in:` / `out:` / `cut:` lists (sentence-level guardrails; the "would a user
  notice?" test decides scope vs solution-alternative).
- `productspec-acceptance-criteria`: `- id: AC-1, criterion: <observable pass/fail before launch>`
  (prefer Given/When/Then).
- `productspec-success-metrics`: `- id: SM-1, metric, target, window, target_status:
  committed|provisional`.
- `productspec-ai-evals` (for AI features): `id: EVAL-1, type (llm_judge/exact_match/…), cases
  [{input, expected}], evaluator, pass_threshold, checks[]` — **AI eval thresholds live in
  acceptance_criteria (pre-launch gate), NOT success_metrics (post-launch outcome).** Sharp,
  reusable distinction for agentic-product PRDs.

**Must-steal:** the mandatory-section ordering and the acceptance-criteria / success-metrics /
AI-eval structured schemas — this is the machine-readable PRD our skill should emit.

### PRD & one-pager template catalog

- **priankr/prd-templates** — 9 PRD templates (Aakash Gupta, Asana Spec, Coda, Figma, Jira, Kevin
  Yien, Peter Yang, Product Hunt, SeatGeek) + 4 lightweight ones (Lenny Rachitsky 1-Pager: Problem/
  Why/Success/Audience/What/How/When; Steve Morin 1-Pager; Intercom **Job Story**; Adam Thomas
  Initiative). A ready menu to reference by name.
- **ugur10/prd-template** — one comprehensive PRD (`PRD_TEMPLATE.md`) + `EXAMPLE_PRD.md`. Section
  spine: Executive Summary · Background & Context (Why Now / User Research / Market Analysis) ·
  Goals & Success Criteria (Business/User Goals, Success Metrics, Non-Goals) · Personas & Use Cases
  · Requirements (P0/P1/P2 + non-functional: perf/security/scale/a11y/platforms) · UX & Design ·
  Technical Specs · Go-to-Market · Dependencies & Risks (High/Medium + mitigation) · Open Questions.
  (UX/Design → design skill; Technical Specs → architecture; GTM → marketing.)

### Canvases & JTBD

- **joelparkerhenderson/business-model-canvas** — the 9 BMC blocks with a paragraph each: Value
  Propositions, Revenue Streams, Customer Relationships, Distribution Channels, Cost Structures,
  Target Segments, Key Activities, Key Resources, Partner Collaborations. Clean source for our
  business-model-hypothesis section.
- **brianrhea/awesome-jtbd** — JTBD link taxonomy: Sites / Books / Podcasts / Videos / Interviews /
  Templates / Courses / Conferences / Articles. Use for the JTBD reading list.

---

## Deep sections — delegated Sonnet workers (large repos)

### product-on-purpose/pm-skills — deep extraction (Apache-2.0) — HIGHEST-VALUE HAUL

68 production skills (30 phase + 11 foundation + 15 tool + 12 utility), each a **three-file
contract**: `SKILL.md` (the method) + `references/TEMPLATE.md` (the output structure) +
`references/EXAMPLE.md` (a worked example that anchors quality) + `HISTORY.md` (per-skill SemVer
changelog). This is the most rigorously engineered PM-skills repo found — the parts worth stealing
are its *contracts and taxonomies*, not just its prose. Repo:
https://github.com/product-on-purpose/pm-skills · scratchpad digests:
`pop-discover-define.md`, `pop-deliver-tools.md`.

#### Triple Diamond taxonomy (the phase model to organize the whole family)

Six-phase product cycle (extends the Design Council Double Diamond; per Zendesk). Each phase skill
carries `metadata.phase` in frontmatter. Skill names below are the `<phase>-<name>` slugs
(path `skills/<phase>-<name>/SKILL.md`):

- **Discover — find & assess the right problem (5):** `discover-interview-synthesis`,
  `discover-competitive-analysis`, `discover-stakeholder-summary`, `discover-journey-map`,
  `discover-market-sizing`. *(journey-map leans design; rest are product.)*
- **Define — frame the problem (5):** `define-problem-statement`, `define-hypothesis`,
  `define-opportunity-tree`, `define-jtbd-canvas`, `define-prioritization-framework`.
- **Develop — explore solutions (4):** `develop-solution-brief`, `develop-spike-summary`,
  `develop-adr`, `develop-design-rationale`. *(adr/spike → architecture; design-rationale → design.)*
- **Deliver — ship it (6):** `deliver-prd`, `deliver-user-stories`, `deliver-acceptance-criteria`,
  `deliver-edge-cases`, `deliver-launch-checklist`, `deliver-release-notes`. *(launch/release-notes
  → marketing/growth.)*
- **Measure — validate with data (6):** `measure-experiment-design`,
  `measure-instrumentation-spec`, `measure-dashboard-requirements`, `measure-experiment-results`,
  `measure-okr-grader`, `measure-survey-analysis`. *(instrumentation-spec → architecture handoff.)*
- **Iterate — learn & improve (4):** `iterate-retrospective`, `iterate-lessons-log`,
  `iterate-refinement-notes`, `iterate-pivot-decision`.

Plus **Foundation (11, cross-cutting)** — e.g. `foundation-build-risk-review`,
`foundation-lean-canvas`, `foundation-okr-writer`, `foundation-persona`,
`foundation-prioritized-action-plan`; **Tool families (15)** — 7 `tool-foundation-sprint-*`
(Knapp/Zeratsky 2-day strategic-alignment workshop: readiness → basics → differentiation →
approach-options → magic-lenses → founding-hypothesis → brief) + 7 `tool-design-sprint-*` (GV 5-day
prototype-and-test) + 1 standalone; **Utility (12, meta-tooling)** — the skill-authoring lifecycle
(`utility-pm-skill-builder` / `-validate` / `-iterate`), plus workflow builders and
`utility-pm-critic` (adversarial reviewer). 12 `_workflows/*.md` chain skills end-to-end
(e.g. `_workflows/customer-discovery.md`: raw research → validated problem statement).

**Steal:** adopt the six-phase spine + the phase/foundation/tool/utility classification as the
skeleton for the whole Digital Product Skills family; our `product-skill` maps directly onto
Discover + Define + the strategy-flavored Foundation skills, with Develop/Deliver/Measure tagged
for architecture/design/growth siblings.

#### The CI-enforced authoring contract (maps to our skill-authoring standard + template evals)

Every skill is a machine-checkable contract, not freeform prose:
- **Three-file structure** enforced: `SKILL.md` (method) + `references/TEMPLATE.md`
  (sections-present + sections-complete contract) + `references/EXAMPLE.md` (quality-anchoring
  worked example). "Structurally contracted: the template enforces sections-present and
  sections-complete." Skill-family contracts (e.g. `meeting-skills-contract`,
  `foundation-sprint-skills-contract`) govern frontmatter, file-naming, go-mode behavior, and
  universal output requirements.
- **Per-skill SemVer + HISTORY.md:** each skill has a versioned changelog with
  `Version | Date | Release | Effort | Type | Summary` rows; even a heading-casing normalization is
  a tracked `patch` (see `foundation-build-risk-review/HISTORY.md` 1.0.0 → 1.0.1). Frontmatter
  carries `version`, `updated`, `phase`, `category`, `frameworks`, `license`, `author`.
- **Three eval lanes** (their honest lesson: the router eval is the trustworthy instrument):
  1. **Trigger fixtures** — a fixture set of representative queries that must route to the correct
     skill (guards the `description`/trigger boundary; boundary pointers = the "use X instead"
     cross-references baked into every skill).
  2. **Controlled router eval** — does an ambiguous request select the right skill.
  3. **LLM-judged output evals** — grade the produced artifact against a family rubric.
- **Enforced by named CI scripts** in `scripts/` + `.github/` workflows: `validate-commands`,
  `validate-meeting-skills-family.sh`, `gen-derived-surfaces.mjs` (badges/catalog are generated
  from frontmatter, never hand-edited), `sync-claude`, `build-release`.

**Steal:** the three-file (method + template + example) contract and the trigger-fixture + output
rubric eval lanes are exactly the authoring/eval standard our skill family should adopt; boundary
pointers (`When NOT to Use` → sibling skill) are how they keep 68 skills from overlapping.

#### `foundation-build-risk-review` — the pre-commitment gate (verbatim-grade)
`skills/foundation-build-risk-review/SKILL.md` (+ `references/risk-taxonomy.md`, `routing-map.md`,
`TEMPLATE.md`, `EXAMPLE.md`). A hard gate that runs BEFORE a PRD exists: "Don't build it yet. First
name the one assumption most likely to make it fail." Produces a **Build Risk Review** artifact.

- **Two modes:** *pre-build* (new idea/MVP) vs *feature-change* (request/scope-creep on a live
  product).
- **7 risk tags** (`references/risk-taxonomy.md`) — tag `R1` (primary) with exactly one, +3–5
  supporting:

  | Tag | Failure mode | Routes to |
  |---|---|---|
  | `demand` | nobody wants it enough to change behavior | market-sizing / hypothesis |
  | `distribution` | can't reach first users | lean-canvas (Channels) |
  | `positioning` | wedge too broad/crowded/generic | competitive-analysis |
  | `monetization` | buyer or payment model doesn't fit | lean-canvas (Revenue) |
  | `retention` | users do it once, don't return | experiment-design |
  | `trust` | won't connect data/accounts/money | problem-statement |
  | `feature-fit` | change doesn't move usage/payment/retention | prioritization-framework |

- **Demand hierarchy L0–L4** (feature-change mode; build-now usually justified only at L3–L4):
  **L0** founder anxiety / "competitors have it" · **L1** one ask · **L2** repeated asks, no
  behavior proof · **L3** workflow blocker (can't complete core job) · **L4** revenue/retention
  blocker (refuse to pay, churn, fail activation).
- **Evidence strength ladder:** *Weak (not demand):* likes, compliments, waitlist signups,
  survey "would use", market-size numbers. *Medium:* repeated unsolicited requests, competitor
  traction in the exact wedge, a maintained manual workaround. *Strong:* real files/data handed
  over, booked calls, preorder/deposit, repeated manual use, switching from a paid alternative.
- **Exactly one of four verdicts:** Build small / Validate first / Pivot first / Don't build yet
  (never "Kill"). Each routes to the next skill. Validation step must be specific + no/low-code
  (never "build an MVP" / "do user research").

**Steal:** the risk taxonomy + demand hierarchy + evidence ladder are a ready-made
risk/assumption-register engine and a "should we build this?" gate for the front of our skill.

#### `discover-market-sizing` — source-calibrated confidence + TAM-misuse guard
`skills/discover-market-sizing/SKILL.md`. Runs ALL applicable sizing frameworks (top-down,
bottom-up, comparable-company, analogous-market) for TAM/SAM/SOM; **divergence between frameworks
is the finding**, not noise. Output sections: exec summary → market definition (explicit boundary)
→ top-down table → bottom-up table → multi-framework synthesis → sensitivity → key assumptions →
confidence & limitations → next steps.
- **Source-calibrated confidence tiers:** *High* = govt statistical agencies, 10-K / earnings,
  primary-methodology industry bodies. *Medium* = Gartner/IDC/Forrester (dated), industry
  associations. *Low* = secondary aggregators, uncited blog figures, undated estimates. (Explicitly
  do NOT blanket-label all web-fetched figures Low.)
- **5 refusal protocols:** refuse unbounded fabrication; refuse ambiguous market definition
  ("the AI market"); refuse a single "definitive" number (sizing is a range); flag hand-wavy
  sources (tweet/uncited blog → Low + assumption); and the **TAM-misuse guard** — "TAM is total
  addressable demand if 100% bought, the upper bound, NOT the revenue projection; projections come
  from SOM."

**Steal:** the confidence tiers + refusal protocols + TAM-vs-SOM guard for the
market-sizing/business-case portion of our skill.

#### `define-prioritization-framework` — multi-engine prioritization (run-all-applicable)
`skills/define-prioritization-framework/SKILL.md`. Core principle: "Multi-framework analysis
surfaces what single-framework selection hides. Where RICE and ICE agree, confidence rises. Where
they disagree, the divergence reveals hidden assumptions — often the most valuable finding."
- **Applicability filter (gate by input availability, don't reduce to one):** RICE (needs
  quantitative reach/impact/effort or an accepted estimation scaffold) · ICE (always applicable —
  the coarse fallback) · MoSCoW (binary commitment / scope bounding) · Weighted Scoring
  (multi-stakeholder; default 5 criteria at equal 20% weight, and "equal weights is itself a
  choice" must be flagged loudly) · **Kano (GATED — excluded unless customer research is provided)**.
- **Surface divergence:** cross-framework comparison table with an Agreement column; every
  Divergent item must name the dimension driving the split.
- **6 refusal protocols:** <3 items → decide directly; no decision context → ask; RICE without
  numbers → offer estimation scaffold or ICE; wrong-framework insistence → warn; single-stakeholder
  weighted scoring → redirect; Kano without research → exclude + explain what unlocks it.

**Steal:** the run-all-applicable engine + applicability gating + divergence-as-signal + the
Kano-gating/refusal discipline for our prioritization section.

#### Other product-owned artifacts worth mining here (path · what)
- `foundation-lean-canvas/` — 9-block Lean Canvas with `TEMPLATE.md` + `EXAMPLE.md` +
  `html-template.html` (business-model hypotheses).
- `foundation-okr-writer/` + `measure-okr-grader/` — OKR authoring with a typed model
  (`committed | aspirational | learning | operational_health | compliance_or_safety`) and
  indicator classes (`leading | lagging | guardrail | health | evidence_generation`), each with its
  own grading convention (aspirational 0.6–0.7 sweet spot; committed → 1.0; compliance binary;
  learning graded validated/invalidated). Sharp, reusable OKR success-metric model.
- `define-problem-statement`, `define-hypothesis`, `define-opportunity-tree`, `define-jtbd-canvas`
  — the Define-phase framing quartet, each three-file contracted.
- `tool-foundation-sprint-*` (7) — the Foundation Sprint produces a canonical **Founding
  Hypothesis** sentence + assumption scorecard (strict template, paraphrase rejected in v0.1.0);
  strong scaffold for a "product vision/founding bet" artifact.

<!-- Remaining worker sections (phuryn/pm-skills, deanpeters/Product-Manager-Skills, curated
awesome-lists) available in scratchpad digests phuryn.md / dean.md / data-analytics.md for
follow-up integration if needed. -->

