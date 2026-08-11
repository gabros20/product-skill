# webdesign skill → extraction & routing map

**What this is.** A verbatim knowledge-preservation extract of the soon-to-be-decommissioned `webdesign` skill, so nothing valuable is lost when it is abandoned. Every non-obvious framework, checklist, decision rule, catalog, threshold, and source has been lifted **verbatim** with a `file:line` reference and **tagged by the sibling skill it should migrate to**: `[product]` (Discover/strategy — the skill being built now), `[design]` (experience/UX/UI/visual), `[frontend]` (production implementation), or `[cross]` (serves more than one).

**Source (read-only):** `/Users/tamas/Documents/Personal/Projects/webdesign/skills/webdesign/` — 22 reference files + `SKILL.md` + `agents/openai.yaml` (24 files, ~4,133 lines).

**Method.** Six parallel workers read the files in full and lifted items; every item block below is a byte-for-byte copy of a worker's verbatim excerpt, re-grouped under its destination-tag heading (multi-line quotes and code preserved intact). Combined-tag items (e.g. `[product]/[design]`) are filed under their first/primary tag; the label still shows the full combination.

**Totals:** ~296 discrete tagged item-blocks + the 62-entry `SOURCES.md` provenance catalog. Split by primary tag: **[product] 58 · [design] 106 · [frontend] 82 · [cross] 50 · sources 62.**

---

## What product-skill should take from webdesign

The old `webdesign` skill is mostly visual/frontend craft, but it carries a spine of genuine **Discover-stage strategy** that the new `product-skill` should absorb directly. The highest-value transfers:

1. **The register decision, made *per surface* and *before* any direction** — "Design IS the product" (brand/marketing/landing → distinctiveness is the bar, take the aesthetic risk) vs "Design SERVES the product" (dashboards/dense tools → earned familiarity, proven patterns win). Named per surface, not per project; can invert every downstream principle. This is a positioning + scope decision that belongs to product. `design-direction.md:126-140`.
2. **The premium↔information dial** — the core strategic framework for reading a business/vertical and choosing how much to spend on brand vs. proof/legibility. `niche-and-vertical-design.md:29-48`, with the **trust-heavy** doctrine (three credibility layers Visual→Content→Social; "specificity beats superlatives — named clients, exact numbers"; proof adjacent to action; Stanford "75% judge credibility on design alone") `:66-78` and the **premium-creative** doctrine (narrative arc **Problem → Empathy → Solution → Proof → Action**; "beauty alone loses the sale — pair brand presence with proof") `:54-65`.
3. **Why work reads templated/AI/boring — root-cause diagnosis + system-level fixes** — a reusable decision framework for pushing off the "statistical-average" attractor (kill default font/color, break the symmetric grid once, vary section rhythm, real content, "feed references not adjectives"). `design-thinking.md:65-83`.
4. **Persuasion & conversion as a design contract** — conversion hierarchy, ethical-persuasion levers, proof placement, and friction reduction. Entire `persuasion-and-conversion.md` (8 items) — product owns the *strategy*; design/frontend own execution.
5. **Trust / E-E-A-T / credibility architecture and case-study structure** — the trust-architecture and design-level-SEO contribution frameworks. Entire `trust-proof-and-structure.md` (8 sub-frameworks).
6. **Discovery discipline: pin the subject before designing** — "name one concrete subject, its audience, and the page's single job, and state your choice"; "the subject's own world … is where distinctive choices come from." `frontend-design-principles.md:50-57`, plus the **register framework** (adapted from `pbakaus/impeccable`) `:59-79`.
7. **Artifact-scope boundary for a design contract (PRD-adjacent)** — what a `DESIGN.md` covers vs. explicitly does NOT (information architecture, content model, component behavior live in their own docs). A clean statement of where the design artifact ends and the product/IA artifacts begin. `design-direction.md:116-122`; two-path **keep-brand vs. full-rebrand** decision `:142-158`.
8. **The award-winner's discipline / spend priority** — Awwwards weighting **Design 40 / Usability 30 / Creativity 20 / Content 10**; "one signature, not twenty effects"; "the signature should *mean* something about the subject." A prioritization/sequencing principle. `experimental-and-creative.md:150-161`.
9. **Review-gate frameworks worth borrowing for product QA** — the A0–A3 art-review severity scale and the go/no-go critique gate (P0 = any missing section/broken core flow is a NO-GO) are process templates product can adapt for acceptance-criteria and launch gates. `art-review.md:137-165`, `design-critique.md:92-118`.

Everything else routes to `[design]`, `[frontend]`, or `[cross]` below and should be handed to those sibling skills rather than the product skill.

---

## Coverage table (all 24 files)

| # | File | Lines | Items | Dominant tag |
|---|---|---:|---:|---|
| 1 | anti-default-catalog.md | 79 | 11 | design |
| 2 | art-review.md | 237 | 16 | design |
| 3 | color-and-rhythm.md | 97 | 9 | design |
| 4 | decoration.md | 133 | 10 | design |
| 5 | depth-and-texture.md | 213 | 9 | design/frontend |
| 6 | design-critique.md | 119 | 8 | cross |
| 7 | design-direction.md | 200 | 13 | product/frontend |
| 8 | design-thinking.md | 121 | 7 | design (product spine) |
| 9 | experimental-and-creative.md | 168 | 12 | frontend |
| 10 | frontend-build-patterns.md | 434 | 25 | frontend |
| 11 | frontend-design-principles.md | 207 | 16 | product/design |
| 12 | imagery.md | 217 | 10 | design/frontend |
| 13 | layout-and-composition.md | 253 | 16 | design/frontend |
| 14 | motion-and-interaction.md | 158 | 11 | frontend |
| 15 | niche-and-vertical-design.md | 243 | 17 | **product** |
| 16 | persuasion-and-conversion.md | 164 | 8 | **product** |
| 17 | section-archetypes.md | 234 | 24 | cross |
| 18 | section-design-workflow.md | 165 | 13 | design/product/cross |
| 19 | trust-proof-and-structure.md | 136 | 8 | **product** |
| 20 | typography.md | 139 | 9 | design |
| 21 | tailwind-v4-theme.md | 141 | 10 | frontend |
| 22 | SOURCES.md | 155 | 62 | design/product/frontend |
| 23 | SKILL.md | 114 | 8 | cross |
| 24 | agents/openai.yaml | 6 | 1 | cross |
| | **Total** | **~4,133** | **~296 + 62 sources** | |

_No file was empty or irrelevant; all 24 were covered. `openai.yaml` (6 lines) is a thin agent-config stub — lifted for completeness._

---

## [product]

_Discovery, positioning, conversion/trust strategy, vertical strategy, decision frameworks, register/scope decisions, PRD/acceptance-criteria shapes. **This is the section the new product-skill mines directly.**_

_58 items._

- `[product] art-review.md:32-34`
  > "If the project preserves existing copy as SEO-sensitive IP, also flag any section whose copy the build **altered** from the source/blueprint as a top-severity finding — content drift isn't a design nitpick when the copy itself must be preserved."

- `[product] design-critique.md:92-118` — Go/no-go QA gate (coverage, build health, real-browser check, blocking rule)
  > When this rubric is the final check before a build ships (not just self-critique while building), add two mechanical layers underneath the judgment above, and let them gate the ship decision directly:
  > - **Coverage.** Confirm every component/section the design or content plan calls for is actually wired up and rendering — not silently missing or falling back to a blank/placeholder state. A design system, template, or content model that defines a piece but never renders it is a load-bearing gap, not a cosmetic one: treat any such gap as a **blocker** (P0/NO-GO), not a polish item.
  > - **Build health.** The build/typecheck/lint pipeline passes clean, and — if a design-system spec like `DESIGN.md` backs the project — it still lints clean... with no broken token references.
  > - **Look at the real thing, don't just build it.** Drive a real browser and screenshot *every* route/page at both a desktop viewport (e.g. 1440×900) and a mobile device viewport (e.g. an iPhone-class width), then read the screenshots. Route real layout/visual defects — overflow or clipping, header overlap, broken or placeholder media, unusable mobile navigation, unwanted horizontal scroll, low contrast — into the P0–P3 severity system above. A screenshot-only review (never actually looking at rendered output) misses exactly the defects that matter most to a real visitor.
  > Fold the coverage and build-health findings into the same P0–P3 list rather than keeping them as a separate checklist — a broken build or a missing section is exactly the kind of P0 that should block a ship decision alongside a usability P0 found by eye. **Any P0, or a P1 you can't immediately fix, is a NO-GO** — don't round up a broken core flow to "ready" because the visual polish is otherwise good.

- `[product] design-direction.md:24-29` — DESIGN.md as contract, tool chain
  > How to decide a project's visual direction and record it as a `DESIGN.md` — the design-system **contract** between "what the design should look like" and "the code that builds it." Author it once (the look), then export its tokens straight into a Tailwind theme... and build against it. Put the file at the project's convention for a design-system doc — typically the repo root or `docs/DESIGN.md`... so it's easy for both humans and coding agents to find.

- `[product] design-direction.md:116-122` — Scope boundary (what DESIGN.md does NOT cover)
  > - **Covers:** the *look* — color, type, spacing, radii, component styling, motion (as a custom section), and the prose rationale + Do's/Don'ts.
  > - **Does NOT cover:** information architecture (sitemap/nav/templates), content modeling (entities/copy), or component behavior/props. Keep those in their own documents — `DESIGN.md` sits *beside* the IA plan and the content model, not instead of them.

- `[product] design-direction.md:126-140` — Register decision, decided BEFORE direction (design-thinking/decision framework)
  > Decide the register per surface — before choosing any direction. This choice sets the bar for everything else, and can **invert** the principles below.
  > - **Design IS the product** (brand sites, landing pages, marketing, launch microsites) — distinctiveness is the bar; take the aesthetic risk.
  > - **Design SERVES the product** (dashboards, app shells, dense daily tools) — earned familiarity is the bar; a fixed rem scale, full interactive-state coverage, and boring proven patterns beat novelty.
  > Name the register **per surface, not per project** — most products are mostly-serve with a few is-the-product surfaces (e.g. a marketing home sitting over an app).

- `[product] design-direction.md:142-158` — Two-path decision: keep brand vs. full rebrand
  > When the job is to redesign an *existing* product or site, there are two distinct paths — decide which one applies before drafting tokens:
  > - **Keep the brand.** Author a new look/UX — deliberate layout, composition, components, motion + a Do's and Don'ts section — but **keep the brand identity**: reuse the existing logo and its **core brand colors + type** (extract those from the current site/brand assets). No rebrand; the visual system changes, the brand doesn't. Run the draft against [anti-default-catalog.md](anti-default-catalog.md) and revise anything that matches a current tell.
  > - **Full rebrand.** Author a complete new identity from the brand strategy/positioning work (new palette/type/voice/iconography + a signature element + a Do's and Don'ts section). Run the same anti-default check.
  > If there's no existing product at all (greenfield), this collapses to the rebrand path — there's no brand to preserve.

- `[product] design-direction.md:195-199` — Handoff summary format
  > When you finish authoring, the useful summary is: the register decision(s), the visual direction in one line, the lint result, and the file path. If this is a supervised project, that's the natural point to show the direction for approval before a build consumes it.

- `[product] design-thinking.md:65-83` — B3: Why designs read templated/AI/boring — diagnosis + fixes (root cause is a decision-framework insight, fixes lean design/frontend but the diagnosis itself is strategic)
  > **Causes:** models default to the most statistically common pattern — hero + 3 feature cards + testimonials + pricing + CTA, **Inter** type, **indigo-600 / slate-900**, even spacing, stock everything. It's the average of a billion tutorials. The model optimizes for coherence/usability, not originality, and isn't rewarded for risk.
  > **Fixes (system-level, not per-component):**
  > - **Kill the default font** — swap Inter for a font with a viewpoint (a distinctive grotesk, or serif headline + clean sans body for editorial contrast).
  > - **Kill the default color** — replace indigo/slate with an owned palette; ration ONE accent to the single primary action per screen.
  > - **Break the symmetric grid once** — one asymmetric/editorial moment per page (off-center hero, oversized number, full-bleed image).
  > - **Vary section rhythm** — alternate density, alignment, and bleed; not every section is centered-text-over-3-cards.
  > - **Real content** — specific copy/photography over lorem + stock; generic content is the loudest "AI" tell.
  > - **Intentional micro-interactions** — one or two considered ones signal craft.
  > - **Feed references, not adjectives** — "make it premium" yields the average; concrete UI references push off the default attractor.

- `[product]/[cross] experimental-and-creative.md:150-161`
  > **The award-winner's discipline (synthesized from Awwwards judging)**: "One signature, not twenty effects." Awwwards weights **Design 40 / Usability 30 / Creativity 20 / Content 10** — creativity is real but usability outweighs it. Spend the wow on ONE moment. "Custom > template." Judges spot off-the-shelf instantly. "Performance is design." Treat the frame budget as a constraint from day one. "Narrative." The signature should *mean* something about the subject — emotion and story, not effect for its own sake. "Accessibility floor still applies." Reduced-motion path, keyboard reachability, focus states, and no meaning-by-motion-alone — even on the most experimental section.

- `[product]/[design] frontend-design-principles.md:27-32`
  > Approach this as the design lead at a small studio known for giving every client a visual identity that could not be mistaken for anyone else's. Assume the client has already rejected proposals that felt templated, and is paying for a distinctive point of view: make deliberate, opinionated choices about palette, typography, and layout that are specific to this brief, and take one real aesthetic risk you can justify.

- `[product]/[cross] frontend-design-principles.md:50-57`
  > Ground it in the subject: If the brief does not pin down what the product or subject is, pin it yourself before designing: name one concrete subject, its audience, and the page's single job, and state your choice. If there's any information available about the audience's preferences, context about what's being built, or past designs, use that as a hint. The subject's own world — its materials, instruments, artifacts, and vernacular — is where distinctive choices come from.

- `[product]/[design] frontend-design-principles.md:59-79` — **Register framework (adapted from pbakaus/impeccable)**
  > Decide this before choosing any direction — it sets the bar, and can **invert** the principles below. **Design IS the product** — brand sites, landing pages, marketing, launch microsites: anything whose job is to be *noticed and remembered*. **Distinctiveness is the bar.** ... **Design SERVES the product** — dashboards, app shells, settings, admin, dense tools people operate daily. **Earned familiarity is the bar.** A fluent Linear / Figma / Notion user should look at it and immediately *trust and operate* it; surprise here is a cost, not a feature. This inverts several defaults: prefer a **fixed rem type scale** over fluid `clamp()`; give every interactive component its **full state set** (hover / focus / active / disabled / loading / empty / error); reach for boring, proven patterns over novel ones (a modal as the *first* idea is usually laziness, not a choice); and **Inter / SF Pro is a legitimate pick here, not a tell**. Name the register **per surface, not per project** — most products are mostly-serve with a few is-the-product surfaces (a marketing home sitting over an app).

- `[product]/[design] frontend-design-principles.md:112-124`
  > Design with real assets, not invented ones: Specify concrete assets in the design direction instead of leaving the builder to invent them — real libraries exist for nearly everything a page needs: icons (full meaning→icon index, pick one weight and hold it), flags (dedicated flag-icon library), full-color brand/partner logos (maintained SVG logo set), mono brand/social icons (simple-icons-style set), background patterns (CSS pattern library), decoration (waves, blobs, hand-drawn underlines — dedicated small libraries). An icon used wrong-for-meaning, hand-rolled, mis-sized, or mixed-weight — or decoration that reads as noise rather than one deliberate move — is a real defect at review time, not a nitpick; the point of naming real libraries in the direction is that the builder had no excuse to invent worse.

- `[product]/[design] frontend-design-principles.md:126-141` — **Named anti-default look catalog (three clusters)**
  > AI-generated design right now clusters around three looks: (1) a warm cream background (near #F4F1EA) with a high-contrast serif display and a terracotta accent; (2) a near-black background with a single bright acid-green or vermilion accent; (3) a broadsheet-style layout with hairline rules, zero border-radius, and dense newspaper-like columns. All three are legitimate for some briefs, but they are defaults rather than choices, and they appear regardless of subject. Where the brief pins down a visual direction, follow it exactly — the brief's own words always win... For the fuller, more specific list of current tells — the cream/sand OKLCH band and its token-name giveaways, display-type ceilings, reflex-reject fonts, eyebrow/numbered-marker devices, GPT ghost-card/over-rounding defects, and the second-order "anti-default rebound" trap — run your draft token system against anti-default-catalog.md.

- `[product]/[design] frontend-design-principles.md:143-156` — **Two-pass design process with concrete token-system spec**
  > Work in two passes. First, brainstorm a short design plan based on the brief: create a compact token system with color, type, layout, and signature. **Color:** describe the palette as 4–6 named hex values. **Type:** the typefaces for 2+ roles (a characterful display face that's used with restraint, a complementary body face, and a utility face for captions or data if needed). **Layout:** a layout concept, using one-sentence prose descriptions and ASCII wireframes to ideate and compare. **Signature:** the single unique element this page will be remembered by that embodies the brief in an appropriate way. Then review that plan against the brief before building: if any part of it reads like the generic default you would produce for any similar page... rather than a choice made for this specific brief — revise that part, say what you changed and why. Only after you've confirmed the relative uniqueness of your design plan should you start to write the code.

- `[product]/[design] frontend-design-principles.md:184-193`
  > More on writing in design: Words appear in a design for one reason: to make it easier to understand, and therefore easier to use. They are design material, not decoration... Write from the end user's side of the screen. Name things by what people control and recognize, never by how the system is built. A person manages notifications, not webhook config. Describe what something does in plain terms rather than selling it. Being specific is always better than being clever.

- `[product]/[design] frontend-design-principles.md:195-199`
  > Use active voice as default. A control should say exactly what happens when it's used: "Save changes," not "Submit." An action keeps the same name through the whole flow, so the button that says "Publish" produces a toast that says "Published." The vocabulary of an interface is the signposting for someone navigating the product. Cohesion and consistency are how people learn their way around.

- `[product]/[design] frontend-design-principles.md:201-207`
  > Treat failure and emptiness as moments for direction, not mood. Explain what went wrong and how to fix it, in the interface's voice rather than a person's. Errors don't apologize, and they are never vague about what happened. An empty screen is an invitation to act. Keep the register conversational and tuned: plain verbs, sentence case, no filler, with tone matched to the brand and the audience. Let each element do exactly one job. A label labels, an example demonstrates, and nothing quietly does double duty.

- `[product] niche-and-vertical-design.md:29-48` **The governing idea: the premium↔information dial** (core strategic framework)
  > "A niche site has to satisfy two things at once — **premium brand presence**... and **high-quality information + proof**... These are not a compromise; they're a **dial you set per surface and per scroll-depth**"
  > "Premium is signaled by what you leave OUT... *Luxury whispers.*"
  > "Proof is signaled by structured DENSITY..."
  > "Sequence them down the page: an emotional, restrained hero (premium) → progressively denser proof and information as the visitor scrolls and self-qualifies → a low-friction action."
  > "Where you set the dial is decided by stakes & emotion, not taste: the higher the money/health/legal risk, the more information + proof must lead and the more conservative the visual register (finance, healthcare, law are the most restrained). The more lifestyle/brand-prestige-driven..., the more premium/emotional can lead — but proof always carries equal final weight. Premium polish earns the halo; proof closes the deal. **Never let aesthetics bury the phone number, the credentials, or the next step.**"

- `[product] niche-and-vertical-design.md:54-65` **Premium-creative niches cross-cutting doctrine** — "The work is the interface." "Premium = restraint, not decoration." "Aesthetic is authority, but beauty alone loses the sale — pair brand presence with proof." Narrative arc: **Problem → Empathy → Solution → Proof → Action.** "Curate hard (selectivity is positioning...)." "Real photography only (stock instantly kills perceived value)." "Fast load is a premium signal (47% expect <2s)." "Mobile is the primary surface." "Proof appears early." "The About/Team page converts (buyers want to know who they'll work with)."

- `[product] niche-and-vertical-design.md:66-78` **Trust-heavy niches cross-cutting doctrine** — Three credibility layers: **Visual** (75% judge credibility on design alone, Stanford) → **Content** (clarity/specificity/plain language) → **Social** (reviews/testimonials/case results, third-party validation). "First screen answers, in ~5–10s: who you help, what you offer, how to start, what happens next." "Specificity beats superlatives — named clients, exact numbers ($ verdicts, AUM, homes sold, % ROI, review counts), real photos." "Proof adjacent to action." "Friction discipline — 3–5 form fields, staged intake, risk-reducers... Speed = trust (sub-3s, ideally sub-1s). Mobile-first (60–83% of traffic). Security/compliance visible (SSL, HIPAA, SOC 2, GDPR) as both function and signal."

- `[product] niche-and-vertical-design.md:86-106` **Architecture firms (worked example)** — full vertical playbook: audience stat "~9 in 10 pro-services buyers rule a firm out before contact, 8+ in 10 evaluate via the website first"; "Design for your ideal client, not to impress other architects (the classic trap)"; structure (hero→positioning→portfolio 8-25 projects→case-study pages: brief→scope→challenge→solution→outcome shown as sketches→site analysis→development→built photos→Team page (2nd most-visited)→FAQ→CTAs); proof devices; register; dial; pitfalls incl. "heavy un-optimized images (cap ~2000px / ≤200KB)."

- `[product] niche-and-vertical-design.md:107-113` **Interior design/studios** playbook — full structure/proof/register/dial/pitfalls, stock photos flagged as "fatal."

- `[product] niche-and-vertical-design.md:115-123` **Creative agencies/studios** playbook — "if they can't tell what you do in ~5s, they leave"; case studies as "decision tools"; "expressive motion is on-brand here (the site is itself a portfolio piece) but never at the cost of clarity/speed."

- `[product] niche-and-vertical-design.md:125-134` **Luxury/high-end & hospitality** playbook — "home → room → booking in ≤3 clicks" for hospitality; heritage/craftsmanship storytelling; "friction-free utility (booking, pricing, currency) is itself a luxury expectation."

- `[product] niche-and-vertical-design.md:136-145` **Photographers/artists** playbook — stat "79% want background on the artist/work before buying"; **curation ratios**: photographers ~15-40 using the "**20-60-20 rule**: 20% best, 60% solid, 20% range"; artists 10-15 pieces, ≤~20/gallery, lightbox viewing.

- `[product] niche-and-vertical-design.md:147-156` **Law firms/attorneys** playbook — structure (hero+phone+"Schedule a Free Consultation" above fold → one page per practice area, not generic "Services" list → attorney profiles ("digital handshake") → case results with $ figures → testimonials → resources → intake); proof devices incl. rating badges (Super Lawyers, Avvo, Martindale, Best Lawyers); dial "~60% info/proof, 40% polish"; pitfall "gavel/scales stock clichés."

- `[product] niche-and-vertical-design.md:158-167` **Financial services/wealth/fintech** playbook — proof devices: "designations after every name (CFP/CFA/CPA/ChFC)", explicit "fiduciary" language, AUM/tenure/client-count stats; register "deep navy + crisp white"; "over-design erodes trust here most."

- `[product] niche-and-vertical-design.md:169-178` **Healthcare/medical/dental** playbook — 4-stage flow: 1) Fit & Scope (~10s) → 2) Trust & Credibility → 3) Process Expectations → 4) Action Path (booking only after clarity); anxiety reducers (pre-visit expectations near submit, explicit response-time commitments, staged intake); dial "~65% info/reassurance."

- `[product] niche-and-vertical-design.md:180-191` **Real estate/property** playbook — structure incl. luxury variant ordering (location→amenities→architecture→floor plans→specs→team before the selection tool); proof = agent performance data (homes sold, volume, days-on-market, sale-to-list); dial "luxury ~60% premium/emotional; mainstream tilts to search utility + social proof."

- `[product] niche-and-vertical-design.md:193-204` **B2B SaaS/tech products** playbook — buying committee framing (technical evaluator, finance/ROI, executive); ordered structure (hero with outcome headline <8 words, sub-head with proof point, product UI screenshot, primary CTA, trust bar → problem→solution → multi-stakeholder value: ROI calculator/tech specs/implementation timeline/comparison → social proof → feature→benefit → product video → secondary CTA → FAQ); proof: named customer logos, G2 ratings, usage metrics, security/compliance badges (SOC 2, ISO 27001, GDPR, WCAG AA); CTA rules: first-person, risk-reducers, 3-5 fields, "offer trial + demo for different readiness."

- `[product] niche-and-vertical-design.md:206-217` **Professional services/consulting/local high-ticket** playbook — "halo effect" framing (75% judge credibility on design → assumed expertise); 5-page structure (Home→Services→Case Studies→trust-About→Contact); proof: membership/cert badges every page (ICAEW, ACCA, CPA, Xero/QuickBooks partner), "**Google reviews (25+ @ 4.5★+)**", "quantified case studies (visible credentials + social proof can lift conversion up to ~200%)"; contractors: before/after photos, licenses/insurance/warranties/financing, service-area pages.

- `[product/cross] niche-and-vertical-design.md:221-234` **Brand↔info axis table** — full 10-row table mapping vertical → brand-presence weight → info/proof weight → signature proof device (Luxury/hospitality, Interior design, Real estate luxury, Photographers/artists, Architecture, Professional services, Law, B2B SaaS, Healthcare, Finance/wealth).

- `[product/cross] niche-and-vertical-design.md:236-242` **How to use this reference** — 5-step workflow: name the vertical (and ideal client) → set the dial from the table → lay out structure from the playbook + pick signature proof device → sequence premium hero→densifying proof→low-friction action → build sections with technique refs, pulling proof/trust mechanics from `trust-proof-and-structure.md` and persuasion mechanics from `persuasion-and-conversion.md`.

**niche-and-vertical-design.md: 17 items lifted, dominant tag [product], 243 lines.**

- `[product] persuasion-and-conversion.md:27-31` Ethical framing up front: "honest persuasion **reduces friction to a decision the user genuinely wants**; a dark pattern **manufactures a decision against their interest.** The strongest long-term lever is a real value match, not a trick."

- `[product] persuasion-and-conversion.md:36-49` **Cialdini's 7 principles as sections** — Reciprocity, Commitment & consistency, Social proof, Authority ("badge soup — one credible mark beats ten vague ones"), Liking, Scarcity (loss aversion: "we weight loss ~2× gain"; pitfall "fake countdowns / false 'only 2 left' are FTC-flagged dark patterns"), Unity — each with why/how/pitfall.

- `[product/cross] persuasion-and-conversion.md:55-74` **Cognitive biases as UX devices** — full catalog with formulas/thresholds:
  - Anchoring — "show original/premium price first; lead pricing with the high tier."
  - Framing — gain vs loss valence.
  - Loss aversion/endowment — "easy-in/hard-out cancellation is a dark pattern."
  - Von Restorff (isolation) — "reserve your single boldest color exclusively for the primary CTA."
  - Hick's law — "3–5 visible choices then progressive disclosure... (jam study: 6 options outsold 24)."
  - Fitts's law — "CTA ≈2× body size, ≥44×44px tap target, placed where the eye rests (end of a reading flow / thumb zone); sticky CTA on long pages."
  - Zeigarnik — progress bars ("Step 2 of 3"); pitfall "manufactured endless incompletion = engagement-farming."
  - Peak-end rule — "engineer a delight peak... and a strong close."
  - Cognitive load/Miller — "working memory ~3–5 chunks... beyond 3–5 weighted options → analysis paralysis → no choice."

- `[product] persuasion-and-conversion.md:77-94` **Conversion-Centered Design** — Governing metric: "**Attention Ratio** = links-on-page ÷ intended-actions. A campaign landing page should approach **1:1**... tightening toward 1:1 commonly lifts conversion ~31%." Full 7 principles: Create focus, Build structure (F/Z pattern reuse), Stay consistent/message match ("visual processing ~60,000× faster than text"; "2–3 colors, 2 fonts"), Show benefits (real people > product/stock shots; **squint test**), Draw attention, Design for trust, Reduce friction ("drop the name field where it correlates with lower conversion"). **The ONE-goal rule**: "every landing/campaign page serves a single conversion goal (1:1). Homepages may carry a 1:many ratio (exploration) — don't confuse the two."

- `[product] persuasion-and-conversion.md:98-109` **Persuasive copy ↔ design pairing** — Value prop anatomy: "**Hero → UVP → Benefits → Social Proof → CTA → details/FAQ → final CTA.**" Benefit-led not feature-led (translate every feature). Objection handling placement rule. CTA copy: "first-person ('Start **my** free trial') beats second-person by 10–90%; value-specific... beats 'Submit'/'Learn more'; 2–5 words. **Test order: copy → placement → color.**" Urgency tastefully — real deadlines only; pitfall "re-arming 'expired' timers, perpetual 'ends tonight.'"

- `[product/design cross] :113-126` **Emotional design & first impressions** — "The ~50ms halo — users judge visual appeal in 50ms (stable at 17ms) and it colors later judgments of credibility/usability/trust." "Aesthetic-usability effect — beautiful designs are perceived as more usable and forgiven minor friction (Kurosu & Kashimura ATM study; aesthetics↔trust ~r=0.74)... polish delays complaints, it doesn't fix broken flows." **Color psychology — evidence vs myth**: "universal color→emotion→purchase claims are largely unsupported folklore. What's real: (1) contrast drives CTA performance (a red button beats blue on a blue page because it stands out, not because red is 'better'); (2) color aids differentiation and brand recall; (3) palettes shift perceived premium-ness/mood, not deterministic behavior." Apply: "pick CTA color for max contrast against its surroundings (≥4.5:1, also the a11y floor)." Pitfall: "don't cite 'blue = trust, orange = buy' as fact."

- `[product] persuasion-and-conversion.md:130-146` **Premium/luxury psychology & pricing mechanics** — "Whitespace as confidence — generous negative space signals 'we don't need to sell hard'; space reads as quality and cognitive fluency (ease → trust). Mass-market maximizes every pixel; luxury subtracts." Restraint & editorial rhythm ("leafing through a printed magazine" feel). Scarcity→desire. "Price-anchoring for premium — a visible flagship/high tier anchors the range up... never discount-shout (undercuts premium). Minimalism sells luxury; clutter signals bargain — the visual register itself is a price cue." **Pricing-page mechanics**: "three tiers convert ~1.4× two (4+ convert worse); center-stage effect pulls buyers to the middle (put the target there); decoy effect — a deliberately weaker option makes the target look like obvious value (distinct from anchoring: anchoring sets a reference number, decoy adds a dominated option); stack signals on the target tier ('Most Popular' = social proof + default cue + center-stage); charm pricing ($X9) shifts perceived magnitude, but luxury often uses round prices to signal confidence."

- `[product] persuasion-and-conversion.md:150-163` **The ethical line table** — FTC (2022→2025) blacklists fake timers, false scarcity, hidden subscriptions, confirmshaming as material misrepresentations. Full 6-row table (Scarcity/urgency, Commitment, Social proof, Default/Zeigarnik, Endowment, Confirmshaming) mapping mechanism → ethical use → dark pattern. Closing line: "Design for the user's **informed yes.**"

**persuasion-and-conversion.md: 8 items lifted, dominant tag [product], 164 lines.**

- `[product]/[cross] section-archetypes.md:51-59` Sitemap procedure and IA-preservation decision rule: "if the plan calls for **preserving the existing IA** (SEO, familiarity), keep routes 1:1 with the source, no renaming/merging/dropping, and let sections re-chunk freely under a new design without touching the URL. If the plan calls for **restructuring the IA** (a rebuild aimed at a different funnel or audience), the new sitemap must still satisfy any redirect map already committed to (every "moved-to" URL from a migration plan needs a matching sitemap route) — that redirect target set is the authoritative new IA, not a suggestion."

  - `[product] section-archetypes.md:72-74` "Author a bespoke type only when nothing fits. A from-scratch redesign (new vocabulary, not mirroring the source) means you'll author more bespoke sections than a faithful preservation would — that's expected, not a failure to find a match."

- `[product] section-archetypes.md:104-115` Copy-fidelity spectrum framework (decision rule): "**Copy fidelity is a spectrum — decide where this project sits and apply it consistently:**
  - **Verbatim** (a faithful port/rebuild): populate every text field with the source copy word-for-word. Don't rewrite, tighten, reorder, or "improve" it — the existing copy may carry real SEO equity or be contractually the client's own IP.
  - **Preserve, lightly tighten** (a redesign that keeps the message): carry the source copy over, with light SEO-safe tightening only where a line is genuinely broken or unclear. Keep titles, meta, and the substance of every section — never a full rewrite.
  - **Rewrite** (a repositioning / reimagining): author fresh copy against a stated persona/goal and copywriting framework (AIDA, PAS, BAB, PASTOR, etc.). If there's an SEO migration in play, preserve the target keywords and search intent from the old ranking pages so the rewrite *carries* the ranking forward instead of losing it — the redirects alone don't do that."

- `[product] section-archetypes.md:144-152` Section sequence = IA doctrine: "Page section order is a structural decision, not decoration. When the site's domain/vertical implies a natural order (e.g. a portfolio-driven business: work samples → case study → team → proof/trust → consultation CTA; or the common "premium framing → social proof → action" arc), use that domain knowledge to sequence sections, and place proof/trust sections and CTAs where persuasion literature says they convert best (proof before the ask, not buried after it)."

- `[product]/[design] section-design-workflow.md:63-78` "The fourth law — design for the *business*, not 'a website'" — **premium↔information dial** (named framework, verbatim):
  > "A niche site must be **premium** (noticed, remembered, trusted as high-quality) *and* deliver **information + proof** (answer questions, prove competence, reduce risk). Premium is signaled by what you leave OUT (whitespace, restraint, one idea, craft story); proof by structured DENSITY (scannable IA, credentials/E-E-A-T, case results, social proof by the CTA). **Don't blend them — sequence them:** a restrained emotional hero → progressively denser proof as the visitor scrolls and self-qualifies → a low-friction action. **Where you set the dial is decided by stakes & emotion**, not taste: higher money/health/legal risk → proof leads, register goes conservative (finance, healthcare, law); lifestyle/prestige-driven → premium can lead (luxury, high-end real estate) — but proof always carries equal final weight. Never let aesthetics bury the phone number, the credentials, or the next step."

- `[product] trust-proof-and-structure.md:1-4` Purpose: "Design credibility, proof, information architecture, and SEO-aware structure where they affect the website experience."

- `[product] trust-proof-and-structure.md:33-40` **The three credibility layers** (named framework, verbatim, with cited stat): "75% of users judge a company's credibility on website design alone (Stanford Web Credibility Project). Credibility is built in three reinforcing layers:
  1. **Visual** — design quality, real photography (not stock), consistent branding. The instant ~50ms halo.
  2. **Content** — clarity, specificity, depth, plain language; answers in the order questions arise.
  3. **Social** — reviews, testimonials, named logos, case results. *The most powerful* — third-party peer validation. Trust signals lift conversion ~15–34%; 93% read reviews before buying."

- `[product] trust-proof-and-structure.md:43-53` **E-E-A-T as design** (Google's quality framework mapped to design devices, verbatim — named framework):
  - "**Experience (firsthand):** original photography, personal process descriptions, real case studies, authentic reviews, "we did this" narrative. → design: a process/behind-the-scenes section, real project imagery."
  - "**Expertise:** author/team bios with **credentials, certifications, education**; bylines; topic-deep content. → design: author cards, an internal-linked author/team page, designation badges."
  - "**Authoritativeness:** reputation + external validation — press/"as seen in" logos, awards, quality backlinks, consistent brand voice. → design: a media/awards strip, recognizable identity."
  - "**Trustworthiness (foundational — without it the rest is diluted):** clear authorship, **HTTPS**, accessible privacy policy, secure forms, transparent contact info, user-friendly design. → design: visible security/compliance cues, a real address/phone, honest copy."

- `[product] trust-proof-and-structure.md:57-69` **Social-proof devices and placement rules** (verbatim, with specific tactical thresholds):
  - "**Testimonials:** real quote + **full name + role + company + headshot** (face visible, shoulders in frame). "Alex H." reads as fake; specificity converts. Video testimonials feel most authentic."
  - "**Logo wall:** recognizable customer/client logos (named logos outperform generic trust bars), desaturated/downsized so they support rather than distract."
  - "**Numbers / stats:** review counts + star ratings, usage ("Join 5,000+ companies"), outcome metrics, years/counts ("43 years," "500+ transactions"). Specific > superlative, always."
  - "**Case studies / results:** the strongest device for high-consideration buys (see §6)."
  - "**Trust badges:** SSL/secure-payment, certifications, compliance (SOC 2, HIPAA, GDPR, ISO), guarantees."
  - "**Placement is the lever:** put the strongest testimonial / rating badge / guarantee **directly next to the CTA or form** to neutralize last-minute hesitation; logos and ratings on pricing/contact pages; reviews near product CTAs. Cluster multiple testimonials for a bandwagon effect."
  - "**Pitfall:** fabricated or stock-photo testimonials are unethical and easy to smell — and FTC-actionable."

- `[product]/[design] trust-proof-and-structure.md:73-82` **Information architecture rules** (verbatim thresholds):
  - "**Navigation:** primary nav **2–7 items**; keep the hierarchy **flat** (any page reachable in 2–3 clicks)."
  - "**Plain labels beat clever ones** on every usability metric — descriptive, parallel structure (nouns with nouns), no internal jargon. Group into logical categories (Product / Company / Resources / Support)."
  - "**Consistency:** keep nav order/placement stable across the site (critical for assistive tech)."
  - "**Scannability:** people skim — use headings, subheadings, bulleted lists, cards, and buttons to chunk content into scannable sections; surface highlights so a skim conveys the gist."
  - "**Progressive disclosure:** show the routing-critical level first; reveal depth on demand (accordions, "read more," detail pages) so a page isn't a wall."
  - "**Pitfall:** deep hierarchies and creative/branded nav labels increase scanning effort and bounce."

- `[product] trust-proof-and-structure.md:107-119` **Case-study / proof-page anatomy** (named structure, verbatim — HIGH VALUE):
  - "The highest-converting proof format for high-consideration buyers. Structure as a **scannable narrative**:
  - **Top context block:** industry / year / scope / client — so a scanning decision-maker instantly gauges relevance.
  - **The arc:** **Challenge → Solution → Results.** Results carry the headline outcome.
  - **Proof callouts:** pull the key metrics into **large/bold typography** or shaded callout boxes (a graph in a bright accent carrying the headline number; a pull-quote from the client closing it out) so skimmers catch them without reading prose.
  - **Make it scannable + immersive:** motion/animated reveals keep people moving through the story; a named, photographed client quote anchors authenticity.
  - **Multi-asset:** a scannable web page + a sales PDF one-pager + a 60–90s video covers different buyer modes.
  - **Pitfall:** burying the measurable result in a paragraph; vague outcomes ("great results") instead of a number, a %, a timeframe, or a $."

- `[product]/[design] trust-proof-and-structure.md:123-135` **Presenting dense information without killing the premium aesthetic** (reconciliation framework, verbatim):
  - "**Whitespace around dense blocks** — a stat row or spec table reads premium when isolated in space, cheap when crammed."
  - "**Typographic hierarchy does the compression** — big number + small label (a "proof stat" pattern) conveys density while staying elegant; let scale carry the data."
  - "**Progressive disclosure** — keep the premium surface clean; move depth into accordions, tabs, detail/case pages, and FAQs so the hero stays restrained and the proof is one interaction away."
  - "**One styled accent for proof** — shaded callouts / a single accent on the headline metric (von Restorff, `persuasion-and-conversion.md`) makes proof pop without clutter."
  - "**Real photography unifies** — credentialed team photos and real project shots are *both* proof and premium texture; stock is neither."
  - "**Sequence, don't blend** — premium hero first, proof densifies as the visitor scrolls and self-qualifies."

  - `[product]`/`[design]` "**Plan pages, navigation, footer, and section catalog** | [Section archetypes](references/section-archetypes.md) | Sitemap, blueprint, and reusable section schema"

  - `[product]` "**Design for a specific business or vertical** | [Niche and vertical design](references/niche-and-vertical-design.md) | Premium-information dial and vertical-specific proof strategy"

  - `[product]` "**Build credibility, proof, E-E-A-T, or case-study structure** | [Trust, proof, and structure](references/trust-proof-and-structure.md) | Trust architecture and design-level SEO contribution"

  - `[product]` "**Improve ethical persuasion and conversion through design** | [Persuasion and conversion](references/persuasion-and-conversion.md) | Conversion hierarchy, proof placement, and friction reduction"

  - `[product]`/`[design]` "**Choose and judge a composition approach** | [Design thinking](references/design-thinking.md) | Decision process, alternatives, and self-critique"


## [design]

_Experience/UX/UI/visual craft — typography, color, layout, motion, imagery, depth, decoration, section craft. Routes to the `design` sibling skill._

_106 items._

- `[design] anti-default-catalog.md:28-31`
  > "**The cream/sand/beige body background is the saturated AI default of 2026.** The whole band is suspect: OKLCH roughly **L 0.84–0.97, C < 0.06, hue 40–100**. The token names give it away too — `--paper`, `--cream`, `--sand`, `--linen`, `--parchment`, `--bone`. If the background landed there without a brief reason, it's a default, not a choice."

- `[design] anti-default-catalog.md:32-34`
  > "Purple→blue and indigo→violet gradients (especially on text or as the primary accent).
  > Gradient-filled text headings as the hero device.
  > Dark mode with a single bright acid-green / vermilion glow accent (default #2 of the cluster)."

- `[design] anti-default-catalog.md:38`
  > "**Display `clamp()` max ≤ 6rem.** Bigger reads as a generated hero, not a designed one."

- `[design] anti-default-catalog.md:39-40`
  > "**Letter-spacing floor ≥ −0.04em on display type.** The reflex default of −0.05 to −0.085em makes the letters touch — a dead giveaway."

- `[design] anti-default-catalog.md:41-43`
  > "**Reflex-reject font list** (overused to the point of being tells): Inter, Fraunces, Playfair Display, Space Grotesk, DM Sans. Using one isn't banned, but if your pick *matches the reflex*, start the font choice over and justify it against the brief.
  > Inter as the body face everywhere (legitimate only in serve register)."

- `[design] anti-default-catalog.md:48-53`
  > "**Eyebrow / kicker chips** above every hero headline (the little pill-labeled overline).
  > **Numbered section markers** (01 / 02 / 03) used as decoration — only honest when the content *is* an ordered sequence (a real process, a typed timeline) where order carries information.
  > Cards inside cards inside cards (nested-card soup).
  > Icon-tile stacks: a grid of rounded squares each holding one line-icon + label.
  > Centered three-up feature row with identical cards as the default "features" answer."

- `[design] anti-default-catalog.md:71-78`
  > "## How to use this
  > During the plan-critique pass..., run your draft token system against this list: any color, type, or structural choice that matches a tell must either earn its place with a brief-specific reason or be replaced — and say what you changed and why. It's also the reference an [art-review.md](art-review.md) pass judges a finished build against."

- `[design] art-review.md:1-3`
  > "# Art-direction review — judging a build against its design direction
  > Purpose: Judge a rendered build against its approved visual direction and return an actionable punch list or sign-off."

- `[design] art-review.md:26-30`
  > "The studio creative-review pass: the eye that set the visual direction ... checks the build before final correctness QA. You judge with taste, not a test runner. If you can't edit the code yourself, your job is to **see, judge, and write the punch-list** for whoever builds — direction → build → *review* → revise → sign-off, repeated until the build honors the direction."

- `[design] art-review.md:36-50` (What you judge against — 4-point framework)
  > "1. **The project's `DESIGN.md`** (or equivalent design-direction document) — the contract that was written. Palette, type pairing, register per-surface, the signature element. Does the build read as this direction, or did it drift to a default?
  > 2. **The original source design signals**, when the brief is "new look, same brand" — the source look the build should still evoke.
  > 3. **Any project-specific design-system doctrine** the build was supposed to follow — an anti-slop checklist, editorial principles, an "art-direct the page" rule set. Absent a project-specific doctrine, use [anti-default-catalog.md] and [frontend-design-principles.md] as the bar, including the **signature-section rule**: every page needs at least one bespoke composition, not just a catalog assembly of generic sections.
  > 4. Your own design taste, informed by the anti-default catalog and the "spend your boldness in one place" discipline."

- `[design] art-review.md:85-92` (capture procedure)
  > "Full-page screenshots downscale and lose the detail art direction actually lives in. Capture each distinct section/component of the built page as its own tight crop, at both a desktop viewport and a mobile device viewport, with reduced motion emulated so reveal/scroll animations settle to their final resting state before the shot — a blank crop from motion-in-progress is a capture miss, not a design defect; note it and move on. Build an ordered manifest (document order, desktop before mobile per section) so the walk below is systematic rather than a random scroll-through."

- `[design] art-review.md:94-100` (per-section, write-as-you-go rule)
  > "Go down the manifest in order. For **each** section: look at it, then **immediately write a short finding for it** into a running notes document before moving to the next. Don't batch the whole page and judge it at the end — typing each observation as you see it keeps every per-section judgment available, so when you synthesize the final hand-off nothing gets lost to a fading first impression."

- `[design] art-review.md:102-108` (zoom-in discipline)
  > "**Zoom in — don't rubber-stamp the gestalt.** A section can read fine at a glance and still be wrong in the details: a misused or awkwardly placed icon, an icon in the wrong size/style, text that wraps into an orphan or overflows its container, a label misaligned with its value, elements that don't sit on a shared line. These are exactly the flaws that slip through a fast "looks good" approval. Inspect each crop at full resolution and **actively hunt for the small defect** in every section before you accept it. Finding nothing is a conclusion you earn by looking, not a default."

- `[design] art-review.md:110-135` (per-section checklist: direction fidelity, composition, rhythm, iconography, micro-typography, anti-slop tells, desktop↔mobile)
  > "- **Direction fidelity** — palette/type/register match the design direction? Or drifted to a default (cream+serif+terracotta, near-black+acid-accent, generic broadsheet...)?
  > - **Composition** — asymmetry & tension, or centered-everything? Intentional grid use, or a uniform card grid? Real type hierarchy (display↔body jump), or flat?
  > - **Rhythm** — does this section's density differ from its neighbors, or is every section the same height/padding?
  > - **Iconography** *(inspect every icon)* — is each icon the **right symbol for its meaning** (not a vaguely-related or generic glyph)? One **consistent set/style/weight** across the section (not mixed outline+solid, not mismatched sizes)? **Optically centered & aligned** in its container and on a shared baseline/axis with its label (not floating, off-center, clipped, oversized, or crammed against text)? No **emoji-as-icons** and no **hand-rolled inline icon SVG** when a real icon library was available and a meaning→icon mapping exists — a wrong-for-meaning, hand-drawn, mis-sized, or mixed-weight icon is a real defect, not a nitpick.
  > - **Micro-typography & element detail** — **awkward line breaks / orphans / widows**, text that **overflows, clips, or collides** with a neighbor, cramped or uneven padding, headings that wrap badly, **misaligned elements** (things that should share an edge/baseline but don't), inconsistent gaps, off-center content, buttons with lopsided label padding. The small alignment/spacing/wrapping flaws that make a build feel unfinished.
  > - **Anti-slop tells** — rounded-2xl+shadow cards, gradient text, emoji icons, purple/indigo, a predictable 3-col icon-title-blurb, weak contrast...
  > - **Desktop ↔ mobile** — does the composition hold on mobile, or collapse to a generic stack? Do icons and text keep their alignment on mobile, or do labels wrap and icons drift?"

- `[design] art-review.md:137-153` (A0–A3 severity scale — named framework)
  > "- **A0 — direction violation.** Off-direction palette/type/register, a clear anti-default-catalog tell, broken hierarchy. **Blocks** → drives a revision round.
  > - **A1 — composition/rhythm failure OR a real detail defect.** Centered-everything, uniform repeated card grids, identical section rhythm, no signature section on the page — **and** the detail-level flaws that read as unfinished: an **icon misused / wrong-for-meaning / awkwardly positioned / mismatched in size or style**, **text that overflows, clips, collides, or breaks into awkward orphans**, **visibly misaligned elements** (things that should share an edge/baseline but don't). **Blocks.** (Judge severity by how obvious it is — a clearly awkward icon or broken text wrap is A1; a 2px nudge is A2.)
  > - **A2 — refinement.** Sub-perceptual spacing/alignment/measure/motion-tuning that would lift it but isn't *noticeably* wrong. Advisory — fix if cheap, never blocks.
  > - **A3 — delight.** Optional polish. Advisory."

- `[design] art-review.md:220-225` (acceptance criteria)
  > "The review record has an explicit `verdict`; on `revise`, every A0/A1 appears in the blocking list with a concrete fix. On `approve`, blocking is empty and `signed_off` is true. **Round 1's verdict is never `approve`** — it always carries at least one blocking item, whether a real A0/A1 or a promoted round-1 polish item."

- `[design] color-and-rhythm.md:17-19` (framing)
  > "Color does two jobs: **set the palette** (one accent, disciplined neutrals) and **create rhythm down the page** (alternating value). Each entry: **why → how → pitfall.**"

- `[design] color-and-rhythm.md:22-34` (§1 inverted/alternating sections — named rhythm device)
  > "**Why:** Alternating value (light → dark → light) as you scroll creates a regular cadence and chapter breaks — the single biggest move for long pages to feel *composed*. A dark section reads premium and signals a shift; it's where the CTA/hero often lives.
  > **How:** define paired surface tokens and flip them per section; the dark section gets the depth treatment (aurora/grain/glass) and the one accent on its CTA.
  > ```css
  > :root { --bg:#ffffff; --fg:#0a0a0f; --bg-invert:#0a0a0f; --fg-invert:#f4f4f5; }
  > .section            { background: var(--bg);        color: var(--fg); }
  > .section--invert    { background: var(--bg-invert); color: var(--fg-invert); isolation:isolate; }
  > ```
  > Don't alternate sections mechanically — cluster (light, light, **dark**, light) so the dark one lands as an event. Pair with varied *layout* rhythm too...
  > **Pitfall:** Mechanical zebra striping is a template tell — vary the *interval*. Re-check contrast/accent legibility on both surfaces; an accent tuned for light bg may wash out on dark."

- `[design] color-and-rhythm.md:57-59` (accessibility shortcut + pitfall)
  > "**Accessibility shortcut:** Backgrounds with **L ≥ 0.87** generally pair safely with black text; keep the same L across hues so all buttons share contrast.
  > **Pitfall:** High chroma can fall outside a screen's gamut — verify at oklch.com. Don't let saturation changes drift the hue (OKLCH avoids HSL's hue shift, but only if you change C, not H)."

- `[design] color-and-rhythm.md:61-66` (§3 one accent + 60-30-10 rule — named framework)
  > "**Why:** Restraint reads as confidence. A monochrome base + a single accent used *for meaning* (primary action, success, danger) — never decoration — is the Linear/Stripe/Vercel signature.
  > **How:** **60%** dominant (neutral bg), **30%** secondary (surfaces/text), **10%** accent (CTAs, key marks). Build a 5–7 step neutral ramp in OKLCH (vary L, chroma 0 or near-0) + one or two accent hues.
  > **Pitfall:** Multiple accents competing = the "AI gradient" look. Keep one accent per screen; everything else neutral. Replacing default indigo-600/slate-900 with an *owned* palette is a top fix for the templated look (`design-thinking.md §B3`)."

- `[design] color-and-rhythm.md:68-80` (§4 duotone/monochrome imagery)
  > "**Why:** Tinting photography to the palette stops images fighting the design — unifies a section and reads art-directed.
  > **How:** CSS blend approach (quick) or SVG `feColorMatrix`/`feComponentTransfer` (precise two-color map)."
  > ```css
  > /* quick duotone: grayscale base + accent multiply + highlight screen */
  > .duotone { position: relative; filter: grayscale(1) contrast(1.1); }
  > .duotone::before { content:""; position:absolute; inset:0; mix-blend-mode:multiply;
  >   background: var(--accent); }   /* shadows take the accent hue */
  > .duotone::after  { content:""; position:absolute; inset:0; mix-blend-mode:lighten;
  >   background: #0a0a0f; }
  > ```
  > "**Pitfall:** Heavy duotone hurts product/detail clarity — reserve it for atmospheric/brand imagery, not screenshots that must read. Keep enough luminance range or faces go muddy."

- `[design] color-and-rhythm.md:82-86` (§5 gradient meshes/glows vs hard linear gradients)
  > "**Why:** Soft, desaturated, multi-point radial glows read premium; a hard 2-stop linear gradient reads cheap. Full technique = aurora in `depth-and-texture.md §3`.
  > **How:** stacked blurred `radial-gradient`s, big `blur()`, moderate opacity over a dark base. Add a grain layer to kill banding.
  > **Pitfall:** Saturated diagonal linear gradients (especially purple→pink) are the canonical AI tell — avoid unless the brief demands it."

- `[design] color-and-rhythm.md:88-91` (§6 contrast/accessibility floor — hard numeric thresholds)
  > "Body text ≥ **4.5:1**, large text (≥18pt / 14pt bold) ≥ **3:1** (WCAG AA). Verify on *both* surfaces if you alternate (§1) and on the *brightest* image area if text sits over a photo (`imagery.md §3`).
  > Never carry meaning by color alone (accent + an icon/label)."

- `[design] color-and-rhythm.md:95-96` (quick recipe summary)
  > "## Quick recipe
  > Neutral ramp + ONE accent in OKLCH (vary L, hold C/H) · alternate light↔dark for rhythm, dark sections carrying the CTA + depth treatment · tint imagery to the accent if atmospheric · soft radial glow (never hard linear gradient) + grain on the dark sections · AA contrast on every surface."

- `[design] decoration.md:30`
  > "Decoration that **elevates, not clutters**. The test: does it add depth/brand/eye-guidance, or is it noise? Use sparingly — one or two per section. Each entry: **why → how (+ tool) → pitfall (how it looks cheap).**"

- `[design] decoration.md:56-57` (§2 SVG noise/grain — cross-reference, named "highest-ROI")
  > "The highest-ROI texture device; see `depth-and-texture.md §2` (feTurbulence + mix-blend) to unify gradients and kill banding. Cross-reference rather than duplicating."

- `[design] decoration.md:77-81` (§4 organic blobs)
  > "**Why:** A soft blob of color behind content adds an accent and organic counterpoint to rectangular layout.
  > **How:** an SVG/`clip-path: shape()` blob, or a big blurred radial gradient (see aurora, `depth-and-texture.md §3`). Tools: blobmaker.app, css-generators.com/blob, haikei.app.
  > **Pitfall:** Hard-edged, saturated blobs look dated; blur or keep them low-saturation and partly off-canvas. One anchored accent only."

- `[design] decoration.md:99-109` (§6 PNG/3D cutout objects — Stripe-style, named pattern + code)
  > "**Why:** Small, *relevant* objects/stickers/3D bits at the margins add playful depth and reinforce the subject (a lock for security, a coin for payments, a tiny UI chip) — the Stripe/Linear "scattered relevant objects" look.
  > **How:** absolutely-positioned PNGs/SVGs at the foreground plane with `drop-shadow`, slight rotation, and a subtle float animation; some breaking the section edge for depth."
  > ```css
  > .float-obj { position:absolute; filter: drop-shadow(0 12px 24px rgb(0 0 0 / .35));
  >   animation: bob 6s ease-in-out infinite alternate; }
  > @keyframes bob { to { transform: translateY(-10px) rotate(-3deg); } }
  > ```
  > "**Pitfall:** *Relevant* only — random floating shapes read as filler. Keep 2–4 max, vary depth (size/blur), `pointer-events:none`, `aria-hidden`, and gate the float on `prefers-reduced-motion`."

- `[design] decoration.md:111-116` (§7 logo/brand mark as texture)
  > "**Why:** The brand mark blown up and ghosted, or tiled as a faint watermark, brands the section without a literal logo slap.
  > **How:** one giant low-opacity mark behind content (like the ghost type in `typography.md §6`), or a tiled SVG pattern at ~4% opacity, edge-masked.
  > **Pitfall:** Too visible = tacky letterhead; keep ≤6% opacity and behind a clear content plane."

- `[design] decoration.md:118-119` (§8 gradient mesh/glow — cross-ref)
  > "Covered as "aurora" in `depth-and-texture.md §3` — soft desaturated radial glows behind dark sections, far better than a hard linear gradient (the cheap default). Cross-reference."

- `[design] decoration.md:129-132` (the discipline — named rule)
  > "## The discipline
  > Every decoration must justify itself: **depth, brand, or eye-guidance.** If none of those, cut it (Chanel rule — remove one accessory before shipping). Loud, saturated, hard-edged decoration is the cheap tell; faint, color-matched, edge-faded, *relevant* decoration is the premium one."

- `[design] depth-and-texture.md:29-32`
  > The premium "Linear/Stripe/Vercel" feel is **stacked planes + soft light + a faint grain that unifies them**. Build depth in order: (1) establish a canvas, (2) glow a midground behind it (aurora), (3) float foreground cards on layered shadows / glass, (4) lay one shared grain layer over the whole section to fuse it, (5) add motion (parallax/tilt) only as the final 10%.

- `[design] depth-and-texture.md:36-50` — Z-axis plane composition
  > **Why:** The eye reads *foreground → midground → background* as physical distance, so a section stops being a flat panel. Cool/dark recede; warm/bright/high-contrast advance.
  > **How:** assign explicit stacking + scale per plane; advancing planes get contrast + shadow + slight scale-up; receding planes get blur, lower opacity, desaturation.
  ```css
  .section { position: relative; isolation: isolate; background:#0a0a0f; }
  .plane-bg  { position:absolute; inset:0; z-index:0; filter:blur(40px); opacity:.6; } /* glow */
  .plane-mid { position:relative; z-index:1; transform:scale(1); }                      /* product */
  .plane-fg  { position:absolute; z-index:2; filter:drop-shadow(0 20px 40px #0008); }   /* chips */
  ```
  > **Example:** Stripe/Linear hero — dark canvas, aurora bloom behind, tilted screenshot mid, small UI tooltips/avatars escaping the frame in front.
  > **Pitfall:** without `isolation:isolate` (or a z-index context), `mix-blend-mode` grain and `backdrop-filter` glass leak across sections. Always scope the stacking context to the section.

- `[design] depth-and-texture.md:99-122` — Layered shadows / elevation
  > Real shadows = a tight dark *contact* shadow + a soft wide *ambient* one. A single `box-shadow` is a flat blurred silhouette and reads fake. Stack 3–6 shadows with doubling offset+blur and decaying opacity → genuine penumbra.
  ```css
  .e1 { box-shadow: 0 1px 1px hsl(220 40% 2% / .08), 0 2px 2px hsl(220 40% 2% / .08); }
  .e3 {
    box-shadow:
      0 1px 2px  hsl(220 40% 2% / .2),
      0 2px 4px  hsl(220 40% 2% / .2),
      0 4px 8px  hsl(220 40% 2% / .2),
      0 8px 16px hsl(220 40% 2% / .2),
      0 16px 32px hsl(220 40% 2% / .2);
  }
  ```
  > **Rules that signal quality:** **One light source:** every shadow shares the same offset ratio (convention: vertical offset = 2× horizontal, light from top-left). **Elevation ramp:** as things rise, offset ↑, blur ↑, **opacity ↓**. Bake a 3–5 step token scale (`--e0…--e4`). **Tint the shadow, never pure black:** `hsl()` matched to bg hue (low sat/light). Pure `#000` looks dead grey. `filter: drop-shadow()` instead of `box-shadow` for transparent/odd-shaped elements (contours the alpha). **Pitfall:** layered shadows are render-expensive — don't animate them on large elements (animate a pseudo-element's `opacity` instead). On dark themes shadows nearly vanish → use **inset rim-light + border** for elevation.

- `[design] depth-and-texture.md:191-199` — Neumorphism, know it/avoid it
  > **Why dated:** dual light/dark inset-shadow "extruded plastic" (peaked ~2020) fails WCAG contrast (buttons don't look clickable), breaks in dark mode, can't reuse native components. **Where it still works:** sparingly — one toggle/slider thumb/subtle card — *with* a real border for affordance. The premium 2026 "soft tactile" equivalent is **glass + layered shadow + grain**, not this.
  ```css
  .neu { background:#e0e5ec; border-radius:20px;
    box-shadow: 8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff; } /* reference only */
  ```

- `[design] design-critique.md:36-45` — Nielsen's 10 heuristics scored 0–4, honesty calibration
  > Score each heuristic 0 (broken) → 4 (exemplary): visibility of system status · match to the real world · user control & freedom (undo/redo, escape hatches) · consistency & standards · error prevention · recognition over recall · flexibility & efficiency · aesthetic & minimalist design · help users recognize/diagnose/recover from errors · help & documentation.
  > **Honesty calibration:** most real, shipped interfaces score **20–32 / 40**. A 38 means you aren't looking hard enough. Report the per-heuristic scores, not just the total, and name the lowest two as the focus.

- `[design] design-critique.md:59-64` — Five test personas
  > Walk the key flow as each: **power user** (is it fast, keyboardable?), **first-timer** (is the next step obvious?), **accessibility user** (focus order, contrast, labels, reduced motion), **stress-tester** (long strings, empty/overflow/error states), **distracted-mobile** (one thumb, sunlight, half-attention).

- `[design] design-direction.md:46-55` — Format structure (two layers) + philosophy
  > A `DESIGN.md` is a single Markdown file:
  > 1. **YAML front-matter** = machine-readable **tokens** (the normative values).
  > 2. **Markdown body** = human-readable **prose** (intent + application rules).
  > Philosophy: **prose is primary, tokens are secondary context.** A specific reference ("a 1970s university lecture handout") steers generation better than a list of adjectives or values, and negative constraints ("Do's and Don'ts") fall out of a specific-enough reference. Author the prose to carry intent; let tokens pin the exact values.

- `[design] design-direction.md:87-93` — Canonical prose section order (hard rule)
  > All optional, but present sections **must appear in this order** (out-of-order → `section-order` warning; duplicate heading → hard error). All `##`:
  > `Overview` (brand/personality/audience) · `Colors` · `Typography` · `Layout` · `Elevation & Depth` · `Shapes` · `Components` · `Do's and Don'ts`.

- `[design] design-thinking.md:33-46` — B1: composition process, ordered steps
  > Order of operations the pros actually follow:
  > 1. **Decide the section's ONE job** (one message, one primary action) before any visuals. Can't name it in a sentence → the layout will be mushy.
  > 2. **Establish hierarchy first in grayscale** — set scale/weight/spacing so the eye lands in the right order with zero color. Color comes last.
  > 3. **Set a type scale:** headings ~2–3× body (16px body → 32–48px H2). Three levels only: heading / subhead / body. Need more emphasis? change weight or color, not size.
  > 4. **Spacing as relationships (proximity):** related items tight, groups separated by clearly larger space. Inconsistent gaps read as broken.
  > 5. **Grid + alignment:** snap to a 12-col grid with consistent gutters; one shared left edge does more for "intentional" than any decoration.
  > 6. **One bold move + restraint** (B4).
  > 7. **Refinement pass** (B5).

- `[design] design-thinking.md:48-63` — B2: Core composition principles + heuristics (verbatim, all 7)
  > - **Contrast** — the eye goes to maximum difference; create it with *size/weight/color/space*, not just color. *Heuristic:* one element per section is unambiguously the biggest/boldest. If everything's bold, nothing is.
  > - **Hierarchy** — controls reading order. *Heuristic:* squint; you should still see #1, #2, #3. If they flatten, increase scale/weight/space contrast.
  > - **Rhythm/repetition** — repeated margins, header treatments, card patterns give scannability and a "system." *Heuristic:* reuse a small set of spacing/radius/type tokens everywhere; novelty per-section = chaos.
  > - **Balance** — distribute visual weight; asymmetric is fine if in equilibrium. *Heuristic:* check for a "heavy corner"; counterweight it.
  > - **Proximity** — closeness = relationship. *Heuristic:* gap *between* groups must be visibly larger than gap *within* a group.
  > - **Alignment** — shared edges = order. *Heuristic:* count distinct left edges; fewer is cleaner. Center-align headlines yes, long copy no.
  > - **Whitespace** — generous negative space = perceived premium + focus. *Heuristic:* when in doubt, remove an element and add space rather than fill it.

- `[design] design-thinking.md:85-91` — B4: "One bold move + restraint" named pattern
  > The shared trait of Linear/Stripe/Vercel/Notion is **restraint, not a look**: fewer choices, each intentional and consistent. The formula — pick **one** memorable, opinionated element per section/page (a giant type lockup, a single saturated accent, one striking image, one unusual layout break), then make **everything else quiet and disciplined** so that move lands. Two bold moves compete and cancel; zero = generic. *Heuristic:* "What is the one thing someone remembers about this section?" If the answer is "nothing" or "five things," recompose.

- `[design] design-thinking.md:93-101` — B5: Refinement pass checklist (8 items, verbatim)
  > - **Squint test** — hierarchy survives blur? Primary action still obvious?
  > - **Grayscale test** — works with color removed? (proves hierarchy isn't propped up by color alone)
  > - **Alignment audit** — count left edges; collapse strays to the grid.
  > - **Spacing audit** — within-group gaps < between-group gaps, consistently; values from one scale (4/8px base).
  > - **Type audit** — ≤3 sizes, ≤2 families, body line length 45–75ch; headings on the scale.
  > - **Color audit** — one accent, used once for the primary action; WCAG AA contrast (4.5:1 text).
  > - **Remove-one test** — can any element be deleted without loss? If yes, delete it and add space.
  > - **Consistency** — radii, shadows, button styles, icon weight all from one token set.

- `[design]/[cross] frontend-build-patterns.md:148-158`
  > Anti-slop checklist: Everything centered. Uniform, repeated card grids as the only layout pattern. Identical section rhythm/spacing every single section. Weak type contrast between headings and body copy. Reflexive purple/gradient decoration as the default "make it look designed" move. Fix by reaching for a different composition, varying section spacing, and deliberately breaking the grid somewhere it earns attention.

- `[design]/[product] frontend-design-principles.md:83-91`
  > For web designs, the hero is a thesis. Open with the most characteristic thing in the subject's world... Be deliberate with your choice: a big number with a small label, supporting stats, and a gradient accent is the template answer, only use if that's truly the best option. Typography carries the personality of the page. Pair the display and body faces deliberately, not the same families you would reach for on any other project... Make the type treatment itself a memorable part of the design, not a neutral delivery vehicle for the content.

- `[design]/[product] frontend-design-principles.md:93-97`
  > Structure is information. Structural devices — numbering, eyebrows, dividers, labels — should encode something true about the content, not decorate it. Many generic designs use numbered markers (01 / 02 / 03), but that's only appropriate if the content actually is a sequence — like a real process or a typed timeline where order carries information the reader needs. Question whether choices like numbered markers actually make sense before incorporating them.

- `[design] frontend-design-principles.md:99-103`
  > Leverage motion deliberately... An orchestrated moment usually lands harder than scattered effects; choose what the direction calls for. However, sometimes less is more, and extra animation contributes to the feeling that the design is AI-generated.

- `[design]/[cross] frontend-design-principles.md:105-106`
  > Match complexity to the vision. Maximalist directions need elaborate execution; minimal directions need precision in spacing, type, and detail. Elegance is executing the chosen vision well.

- `[design] imagery.md:30-31`
  > Images that read as *designed, layered, intentional* (Godly / Awwwards / Apple). Each: **why → how → example → pitfall.** Default crime is "stock photo in a box."

- `[design]/[frontend] imagery.md:35-56` — **Masked/clipped shapes catalog**
  > A non-rectangular silhouette instantly signals art direction. Arches = editorial; circles = human/portrait; blobs = soft/organic; angles = kinetic/tech. (code: `.arch` border-radius trick, `.angled`/`.hex` clip-path polygons, `.blob` new CSS `shape()` — "Chrome/Edge/Safari; Firefox shipped Feb 2026"). `clip-path` is GPU-accelerated and animatable; two shapes with the **same number of curve commands** can `transition`/morph (blob wobble on hover). For deep curves / soft alpha edges, use `mask-image` (respects partial alpha; clip-path is hard-edged). **Pitfall:** Hard clip-path edges alias on curves — prefer `mask-image` for smooth organic edges. Clipping crops content: combine with `object-fit: cover` + `object-position` and test the focal point per breakpoint. Generators: bennettfeely.com/clippy, css-generators.com/blob.

- `[design]/[frontend] imagery.md:60-78` — **SVG masks & scroll-reveal masks**
  > A mask reveal turns a static image into a *moment* — content wipes/irises in as it enters view. (code: `@keyframes reveal` with `clip-path: inset()`, `animation-timeline: view()`, `animation-range: entry 25% cover 50%`). For complex blinds/iris wipes use a responsive SVG `viewBox="0 0 100 100"` `<mask>` (black base rect + white shapes that grow), driven by GSAP ScrollTrigger with `scrub` + small `stagger`; add `+0.01` overlap and `shape-rendering="crispEdges"` to kill subpixel gaps. **Pitfall:** `clip-path: inset()` is cheap/composited; animating mask rect `width/height` is not. `animation-timeline: view()` is modern-only — ship as **progressive enhancement** (image visible by default) so unsupported browsers don't get blank boxes.

- `[design]/[frontend] imagery.md:82-97` — **Text-over-image scrim technique with damage-ordered levers**
  > A scrim buys contrast *without* tinting the whole photo flat. The #1 pro solution to text-on-image. (code: `.media::after` gradient scrim). Levers, least→most damage to the image: **strip/highlight** behind text only → **copy space** (crop so text sits where the image is quiet) → **backdrop-blur chip** (`backdrop-filter:blur(8px); background:rgb(0 0 0 /.25)`) → **full tint** (last resort). Add `text-shadow: 0 1px 3px rgb(0 0 0 /.6)` for stray bright pixels. **WCAG:** body ≥ 4.5:1, large text ≥ 3:1. **Pitfall:** A fixed scrim fails on light images — make scrim strength/direction respond, or use a darkened variant. Test the *brightest* worst-case photo (CMS images vary).

- `[design]/[frontend] imagery.md:101-117` — **Masonry & mixed-aspect galleries**
  > Lets images keep **native aspect ratios** — no forced uniform crop — so a gallery feels curated. (code: native `grid-template-rows: masonry` vs. zero-JS aspect-driven row-span trick with `grid-auto-rows:8px` + `grid-row: span var(--span)`). CSS columns (`columns:3; break-inside:avoid`) is a no-JS alt but orders top-to-bottom per column. **Pitfall:** Native `grid-template-rows: masonry` isn't universally shipped — `@supports` feature-detect + fall back to the row-span trick. Masonry reading order can confuse keyboard/SR flow; keep DOM order logical. **Don't masonry < ~6 items (looks accidental).**

- `[design]/[frontend] imagery.md:121-126`
  > Breakout / full-bleed / overlap: Text stays at a readable measure while images **break the column to the edges** — the contained→full→contained rhythm is the core of editorial layout. Overlap depth: negative margin or `transform: translateY()` to pull an image up over the section above; pair with `z-index` + soft shadow. **Pitfall:** `width:100vw; margin-left:calc(50% - 50vw)` causes horizontal scroll with a scrollbar present — the grid-breakout method avoids it. Reset overlaps to a clean stack on mobile.

- `[design]/[frontend] imagery.md:130-145` — **Device/browser mockups & tilted 3D screenshots**
  > A raw screenshot reads flat/dev-ish; a framed, slightly tilted device gives physicality and "real product" credibility. (code: `.scene { perspective: 1200px; }`, `.device { transform: rotateX(8deg) rotateY(-18deg) rotateZ(-2deg); ... }`, hover settle transform). Layered "real glass" look: stack ~6 composited layers (bezel/glass/screen/glare/shadow) pushed apart on Z (`translateZ`). Browser chrome: a thin top bar + three dots signals "web app." **Pitfall:** Steep tilts murder UI legibility — keep ≤20° if the screenshot must be readable. Bake at 2× and `object-fit: cover`; CSS-scaling a small PNG looks cheap.

- `[design]/[frontend] imagery.md:149-162` — **Collage / scattered / pinned-photo**
  > Slight rotations, overlap, varied sizes read as hand-arranged (pinboard/polaroid) — warm, human, anti-template. Strong for about/brand/lifestyle. (code: `.collage .photo` absolute + rotate per nth-child, straighten on hover). Add a "pin"/"tape" `::before` for the corkboard look. **Pitfall:** Absolute positioning doesn't reflow — provide a stacked/grid fallback under mobile, keep DOM order meaningful (SR reads it).

- `[design]/[frontend] imagery.md:166-179` — **Ken Burns / slow zoom & parallax**
  > Subtle continuous motion (12–20s pan-zoom, or bg drifting slower than fg) makes a static hero feel cinematic without video weight. (code: `.kb` keyframes `scale(1)→scale(1.12) translate3d`). Use `translate3d`/`scale3d` (GPU) over `background-position`/`margin`. Native scroll parallax: `animation: drift auto linear both; animation-timeline: scroll();`. **Pitfall:** Honor `prefers-reduced-motion` (vestibular safety). Keep zoom ≤1.15 or faces distort; container needs `overflow:hidden`.

- `[design]/[frontend] imagery.md:183-198` — **Foundations: object-fit / aspect-ratio / art direction**
  > `aspect-ratio` reserves space (kills CLS); `object-fit: cover` fills any box without squishing; `<picture>` swaps the *crop* per viewport — keeping every technique above responsive and shift-free. **Pitfall:** `object-fit: cover` silently crops faces/products on extreme ratios — set `object-position` and verify. Always ship `width`/`height` attrs **or** `aspect-ratio` to reserve space. Use `<picture>` only when the *crop* must change; for mere resolution use `srcset`/`sizes`.

- `[design]/[frontend] imagery.md:202-217` — **Full "goal → primary lever" cheat sheet table (verbatim)**
  > | Goal | Lever |
  > |---|---|
  > | Hard non-rect shape | `clip-path: polygon()/shape()` |
  > | Soft/alpha-edged shape | `mask-image` (SVG/gradient) |
  > | Arch | `border-radius: 50% 50% 0 0 / 35% 35% 0 0` |
  > | Text legible on photo | `::after` gradient scrim + `text-shadow` |
  > | Edge-to-edge image | named-line breakout grid `grid-column: full` |
  > | Depth / overlap | negative margin / `translateY` + `z-index` |
  > | Tilted screenshot | `perspective` + `rotateX/Y/Z` |
  > | Reveal on scroll | `animation-timeline: view()` + `clip-path: inset()` |
  > | Ken Burns | `@keyframes` `scale3d/translate3d` |
  > | Mixed-aspect gallery | `grid-template-rows: masonry` / aspect row-span |
  > | No-CLS responsive media | `aspect-ratio` + `object-fit: cover` |
  > | Per-viewport crop | `<picture>` + `media` |

- `[design] layout-and-composition.md:29-32` "Techniques for distinctive, non-templated section layout (Linear / Stripe / Vercel / Awwwards / Godly tier). Each entry: **why → how → example → pitfall.** Use one structural idea per section; break ~20% of a grid, not 100%."

- `[design] layout-and-composition.md:138-146` **Broken Grid** — "Start from a real 12-col grid, then *deliberately* let chosen elements offset/overlap/span oddly via explicit line placement. Keep ~80% on-grid, break ~20%." Pitfall: "Without retained alignment anchors it reads as chaos. Keep ≥1 consistent edge/baseline."

- `[design] layout-and-composition.md:148-152` **Asymmetric Balance** — "Balance by visual *weight*, not pixel count — a small high-contrast element outweighs a large pale one. Squint-test; if it tips, redistribute."

- `[design] layout-and-composition.md:154-157` **60/40 Split** — "60% dominant leads the eye; 40% gives breathing room (≈ golden ratio). More interesting than 50/50." `grid-template-columns: 3fr 2fr;` Pitfall: "Don't center the focal point — place it at a rule-of-thirds intersection."

- `[design] layout-and-composition.md:185-196` **Whitespace as a Tool** — "Linear/Stripe/Vercel rule: *'take the spacing that feels like enough, then double it.'*" Section vertical padding often `clamp(4rem, 10vw, 10rem)`. **Visual Rhythm via a Spacing Scale** — 8px (or 4px) base unit, tokens `--space-1…--space-8`, pick ~6-8 rungs, alternate dense/open sections for cadence.

- `[design] layout-and-composition.md:202-213` **Eye-flow patterns**: F-Pattern (text-heavy) vs Z-Pattern (sparse/hero) with exact placement guidance and pitfalls ("density reverts it toward F"); **Hierarchy levers** — scale, color/contrast, weight, whitespace, scan-path position, "Establish exactly ONE primary focal point per section... if everything is emphasized, nothing is."; **Rule of Thirds** — "off-center focal (at a 3×3 intersection) reads dynamic; dead-center reads static... off-center ≠ misaligned — still snap to the grid."

- `[design] layout-and-composition.md:219-227` **Gestalt Principles for Layout** — Proximity, Similarity, Common Region/Enclosure, Continuation & Closure, Figure/Ground, each with pitfall; general pitfall: "Gestalt cues can fight each other — resolve so one clear grouping wins."

- `[design] layout-and-composition.md:231-241` **THE "PREMIUM SAAS" SYSTEM (Linear/Stripe/Vercel)** — four reinforcing principles (high contrast; generous whitespace; monochrome base + ONE accent used for meaning never decoration; sharp/geometric typography like Geist); plus blueprint/dot-grid texture background; premium microstates (hover/focus/active/disabled/loading/empty each distinct). "Anti-pattern ('AI slop'): centered-everything, three equal feature cards, purple gradient, friendly rounded font, even spacing."

- `[design/cross] layout-and-composition.md:245-252` **QUICK DECISION HEURISTICS** — full mapping of situation → pattern (long-form→breakout grid; feature showcase→bento; hero with one goal→Z-pattern+60/40+off-center focal; feel bespoke→break ~20% of grid + overlap; feel premium→high contrast+double whitespace+monochrome+1 accent+sharp type; always: 8px spacing scale, one focal point, `minmax(0,1fr)`, squint-test).

**layout-and-composition.md: 16 items lifted, dominant tag [design]/[frontend] mixed, 253 lines.**

- `[design/cross] motion-and-interaction.md:33-35` Golden rule: "motion **guides attention and rewards**, never decorates; make the no-motion state the complete, usable state; always honor `prefers-reduced-motion`."

- `[design/cross] motion-and-interaction.md:151-157` **A11. Motion principles (the taste layer)** — Duration: "small UI 150–240ms; overlays/sections 300–400ms; most transitions 200–500ms. More travel = slightly longer." Easing: "`ease-out` for entrances..., `ease-in` for exits, `cubic-bezier(0.16,1,0.3,1)` (expo-out) for the 'expensive' decelerate. Never linear for UI (only loops/marquees/scrubs)." Stagger: "60–100ms between siblings; cap total so a list doesn't crawl." Purposeful vs decorative rule: "every motion should communicate state (enter, success, relationship, spatial origin). If it doesn't tell the user something, it's decoration — ration it."

**motion-and-interaction.md: 11 items lifted, dominant tag [frontend], 158 lines.**

- `[design]/[frontend] section-archetypes.md:186-201` Full section archetype table (page sections): `hero`, `feature-cards`, `cta-band`, `stats-band`, `image-gallery`, `faq`, `contact-form`, `prose-section`, `timeline`, `logo-wall`, `testimonial`, `featured-collection` — with exact field shorthand syntax, e.g.:
  ```
  | `hero` | hero | `eyebrow:string` · `title:string*` · `subtitle:text` · `cta:link` · `image:media(image)` | hero |
  ```
  and shorthand key: "`key: type[modifier]` · `*` = the rare `required:true` · `[]` = a `list` with the nested fields shown · `media(image)` = a media field constrained to images." (line 183-184)

- `[design]/[frontend] section-archetypes.md:203-214` Global sections table: `site-header`, `site-footer` field shapes; note on static-content builds rendering header/footer as layout chrome vs. through a shared section-map/registry (cross-ref to `frontend-build-patterns.md`) to avoid double-rendering.

- `[design]/[frontend] section-archetypes.md:216-227` Collections table: `project/post/case-study`, `team-member`, `service/plan` field shapes; detail-route-as-single-template principle: "its **detail route** (`/projects/[slug]`) is a **single template page** that renders whichever entry matches the slug — not one hand-built page per entry."

- `[design]/[cross] section-design-workflow.md:1-3` "Purpose: Select one bold visual move and the smallest craft-device set needed to design a distinctive section."

- `[design] section-design-workflow.md:25-31` Framing: "This is the craft layer for designing distinctive, non-templated webpage sections — the layered, intentional kind trending on Godly/Awwwards/Linear/Stripe/Vercel — plus the strategy layer for designing for a specific business niche (architect, law firm, SaaS, luxury, healthcare…)." Lists craft categories: "layout systems, typography, depth/layering, decorative devices, color rhythm, image presentation, motion, experimental WebGL — plus per-vertical playbooks, the premium↔information dial, trust/proof/E-E-A-T + SEO structure, and ethical persuasion/conversion."

- `[design]/[cross] section-design-workflow.md:41-43` THE core principle (named/quotable): "**A boring section is one flat plane: text + an image-square on a solid fill.** A great section has **depth** (layers in Z), **tension** (asymmetry / scale contrast), and **one deliberate move** no template would make — executed with restraint everywhere else."

- `[design] section-design-workflow.md:47-58` "Three laws" (named framework, verbatim):
  1. "**Depth over flatness.** Resolve a section into ≥2 planes (background field → mid subject → foreground accents). A single shared grain layer, a glow behind, a card floating on layered shadow — any of these turns a panel into a space."
  2. "**Contrast creates interest.** Manufacture difference in *scale* (huge type vs tiny label), *weight*, *color* (light vs inverted), *and depth*. Even spacing + even weight = forgettable. One element per section is unambiguously the biggest/boldest."
  3. "**One bold move + restraint.** Spend boldness in ONE place… keep everything else quiet so that move lands. Two bold moves compete and cancel; zero = generic. This is also the Awwwards rule — every Site-of-the-Day has *one* signature moment, not twenty effects; custom-built beats template; performance is part of the design."

- `[design] section-design-workflow.md:60-61` Cardinal rule: "**The cardinal rule of this whole workflow: use one or two devices per section, executed precisely — never all of them at once.** A pile of effects is as templated as no effects."

- `[design]/[cross] section-design-workflow.md:82-97` "The device map" — table mapping design goal → device → reference file (full table, high-value index of what lives where):
  ```
  | Lay out the section / break the obvious grid | breakout grid, bento, asymmetry, overlap, hierarchy, Gestalt | layout-and-composition.md |
  | Make type the hero | modular/fluid scale, oversized display, pairing, kinetic, watermark type | typography.md |
  | Make it feel 3D / premium / not flat | Z-planes, grain/noise, aurora glow, layered shadows, glass, 3D tilt, parallax | depth-and-texture.md |
  | Add clever decoration | SVG patterns, wave/blob dividers, lines/connectors, PNG cutouts, logo-as-texture | decoration.md |
  | Set color & section rhythm | inverted light↔dark cadence, OKLCH palette, one-accent discipline, duotone | color-and-rhythm.md |
  | Present images as more than squares | clip-path/mask shapes, scrims, masonry, mockups, collage, Ken Burns, bleed | imagery.md |
  | Add motion / interaction | scroll-driven reveals, pinned scrollytelling, magnetic buttons, marquee, GSAP/Lenis | motion-and-interaction.md |
  | Go Awwwards-tier / experimental | WebGL/shader bg, canvas particles, custom cursors, View Transitions, generative accents | experimental-and-creative.md |
  | Design for a *specific business/niche* | per-vertical playbooks (architect, law, SaaS, luxury…), the premium↔info dial | niche-and-vertical-design.md |
  | Build credibility / proof / findability | E-E-A-T, social proof, info architecture, SEO/semantic structure, case-study anatomy | trust-proof-and-structure.md |
  | Drive & convert the user (ethically) | Cialdini, cognitive biases, conversion-centered design, copy↔design, pricing psychology | persuasion-and-conversion.md |
  | Decide *what* to do & judge it | composition process, the "AI-slop" tells + fixes, critique checklist | design-thinking.md |
  ```
  Plus rule at 99-101: "**Load the reference(s) for the move you're making** — don't load all eight. Designing a hero? Likely `layout` + `typography` + `depth`. A logo strip? `motion` (marquee) + `decoration`. A gallery? `imagery` + `layout`. Always finish against the checklist below."

- `[design] section-design-workflow.md:103-126` "Quick recipes" — six named composite patterns worth preserving verbatim as reusable recipes:
  - **Premium dark hero** (105-108): "dark canvas + `isolation:isolate` → aurora glow behind (`depth §3`) → tilted product screenshot mid-plane (`depth §6`) → one glass chip floating in foreground (`depth §5`) → one shared grain layer at ~5% overlay (`depth §2`) → oversized tight headline (`typography`). One accent on the CTA only."
  - **Editorial feature** (109-111): "named-line breakout grid (`layout §1`) → full-bleed image breaking the measure → arch- or angle-masked secondary image (`imagery §1`) → serif display + clean body pairing (`typography`)."
  - **"Look how much we do" section** (112-113): "bento grid with `grid-auto-flow:dense` (`layout §2`), each tile a different content type, one hero tile 2× the rest. Container-query the tile internals."
  - **Section rhythm across a page** (114-115): "alternate light → inverted dark → light (`color §1`); the dark section is the CTA/"chapter break" and reads premium."
  - **Brand/about warmth** (116-117): "scattered pinned-photo collage (`imagery §7`) + a faint oversized watermark word behind (`typography` + `decoration`)."
  - **Awwwards hero (one signature)** (118-120): "a single lazy-loaded WebGL shader gradient OR cursor-reactive particle field (`experimental §1–2`) + a custom lerping cursor (`experimental §3`) — then keep the rest of the page disciplined CSS. Static grain/gradient fallback for reduced-motion."
  - **Architect / premium-creative homepage** (121-126, `[product]/[design]`): "restrained image-led hero (large architectural photography, whitespace, `layout §1` breakout + `typography` display) → curated portfolio grid (`imagery` masonry/bento) → per-project case study (challenge→solution→outcome with process artifacts, `trust-proof §6`) → Team page block (real headshots + credentials) → proof strip (awards/press/testimonials, `trust-proof §3`) → low-friction "book a consult" CTA. Dial: balanced, tilting to proof."

- `[design] section-design-workflow.md:128-149` **The anti-boring checklist** (named, full verbatim checklist — high value):
  "Section fails if you answer "no" to the top block or "yes" to the bottom block.
  **Must be YES:**
  - Depth: are there ≥2 visual planes, or at least one unifying texture/glow/shadow? (not one flat fill)
  - One focal point: squint — is it obvious what's #1? Exactly one element is biggest/boldest.
  - Contrast move: is there a real jump in scale OR weight OR color OR depth somewhere?
  - One signature: what's the one thing someone remembers here? (if "nothing" → recompose)
  - Grayscale test: hierarchy still reads with color removed? (proves it's not propped up by color)
  - Spacing system: gaps come from one scale (4/8px base); within-group gap < between-group gap.
  - Quality floor: responsive to mobile, visible keyboard focus, `prefers-reduced-motion` respected.
  **Must be NO (the "AI-slop" tells — any one is a hit):**
  - Centered-everything with even spacing throughout.
  - Three identical equal-width feature cards as the only idea.
  - Every section the same rhythm (centered text over a uniform card grid).
  - Weak heading↔body contrast; default Inter + indigo-600/slate-900; purple/gradient decoration for its own sake.
  - Emoji used as icons; predictable 01/02/03 markers on content that isn't actually a sequence.
  - More than two "bold moves" fighting in one section."

- `[design]/[cross] section-design-workflow.md:151-164` **Working method** (5-step named process, verbatim):
  1. "Name the **niche, ideal client, and the section's one job** (one message, one action). Set the **premium↔info dial** for the surface from `niche-and-vertical-design.md` (the vertical playbook + brand↔info axis table)."
  2. "Pick the **register** — is this section *the product* (distinctiveness is the bar) or does it *serve* the product (earned familiarity is the bar)? This can invert choices…"
  3. "Choose **one bold move** for the section and the **1–2 devices** that deliver it. Load those refs; add the proof/conversion mechanics (`trust-proof-and-structure.md`, `persuasion-and-conversion.md`) where the section's job is credibility or action."
  4. "Build hierarchy in **grayscale first**; add color last (one accent)."
  5. "Run the **anti-boring checklist**. Remove one accessory (Chanel rule) before you ship." [Note: "Chanel rule" is a named principle worth flagging — remove one accessory before shipping.]

- `[design] typography.md:1-15` Purpose/frame: "Use typography as a deliberate visual and information-hierarchy device." Inputs: "Brand register, content hierarchy, available fonts, viewport range, and accessibility constraints."

- `[design] typography.md:28-31` Hard limits (named constraint, verbatim): "Type carries the personality of a section — make it a memorable element, not a neutral delivery vehicle. Each entry: **why → how → pitfall.** Hard limits that keep it from looking templated: **≤2 families, ≤3 sizes per section, body line length 45–75ch.**"

- `[design]/[frontend] typography.md:34-48` **Modular type scale** section:
  - Ratios (verbatim): "Common ratios: **1.2** (minor third, subtle/dense UI), **1.25** (major third), **1.333** (perfect fourth — punchy, marketing), **1.5** (perfect fifth — very editorial). Expose as tokens."
  - Code:
    ```css
    :root {
      --step-0: 1rem;                          /* body */
      --step-1: calc(var(--step-0) * 1.25);    /* 1.25 ratio */
      --step-2: calc(var(--step-1) * 1.25);
      --step-3: calc(var(--step-2) * 1.25);
    }
    ```
  - Pitfall: "Don't invent a 4th heading size to add emphasis — change **weight or color** instead. Too many rungs flattens hierarchy."

- `[design]/[frontend] typography.md:50-60` **Fluid typography with clamp()**:
  - "Smoothly scales between a min and max across viewports — no breakpoint jumps (which cause CLS penalties), and respects browser zoom (mixing `rem` with `vw` satisfies WCAG 1.4.4)."
  - Code: `h1 { font-size: clamp(2.5rem, 1.5rem + 5vw, 5rem); }   /* 40px → 80px */` and `p { font-size: clamp(1rem, 0.95rem + 0.4vw, 1.125rem); }`
  - Tools: "Generate scales without manual math: fluid-type-scale.com, clampgen.com."
  - Pitfall (accessibility-load-bearing): "A `vw`-only preferred value (no `rem` term) breaks zoom accessibility. Always keep a `rem` anchor in the middle term. Set sane MIN so mobile stays readable."

- `[design]/[frontend] typography.md:62-77` **Oversized/display typography**:
  - "Headlines at 8–20vw make the *type itself* the visual — replaces the hero image, weighs a fraction of a KB, renders instantly. The dominant 2025/26 hero move."
  - Code:
    ```css
    .display {
      font-size: clamp(3rem, 8vw, 9rem);
      letter-spacing: -0.03em;     /* -0.02 to -0.04em on big type */
      line-height: 0.95;           /* tight leading on display */
      text-wrap: balance;          /* even line lengths on headings */
      font-weight: 600;
    }
    ```
  - Pitfall: "Negative tracking that's too aggressive collides glyphs; tight leading on multi-line display needs testing. Keep high contrast against the background — big moving/over-image type fails fast if low-contrast."

- `[design] typography.md:79-93` **Font pairing (deliberate contrast)**:
  - "The most common mistake is pairing two fonts that are *too similar*."
  - Rules: "Share one quality, contrast another (humanist sans + humanist serif; geometric display + geometric body). Safest options:
    - **Superfamily** (serif + sans designed together — guaranteed to harmonize).
    - **One family, many weights** (Inter/Work Sans: Black headings, Regular body, Italic emphasis) — clean but be aware Inter-as-default is itself an "AI tell" (B3); give it a viewpoint or swap it.
    - **Grotesque + serif:** Neue Montreal (clean grotesque) + Editorial New (high-contrast serif) = modern-meets-classic. **Space Grotesk / Space Mono** for tech/AI/crypto.
    - **Mono accent:** a mono face for captions/labels/data adds a technical register."
  - How: "Body 16–18px, `display=swap` on font URLs, load only the weights you use, prefer variable fonts (all weights, one file)."
  - Pitfall: "Two display faces fight; two near-identical sans read as a mistake, not a pairing. Pair by *role* (display / body / utility), not by vibe."

- `[design]/[frontend] typography.md:95-108` **Kinetic / variable-font typography**:
  - "Variable fonts let you animate weight/width/optical-size axes in real time — cheap, native, expressive. Reads as crafted and alive."
  - How: "animate `font-variation-settings` (e.g. `'wght'`) on hover/scroll; or letter-by-letter reveal; or a horizontal marquee of type."
  - Code:
    ```css
    .kinetic { font-variation-settings: 'wght' 400; transition: font-variation-settings .3s ease; }
    .kinetic:hover { font-variation-settings: 'wght' 800; }
    ```
  - "For scroll-scrubbed weight shifts, drive `--wght` from a scroll-driven animation. Morphing, liquid motion, and animated collage are the trending kinetic techniques."
  - Pitfall (perf-sensitive): "Animating `font-variation-settings` can trigger layout (reflow) on width/weight changes — keep it to small elements or accept the cost; test perf. Moving type must stay high-contrast to remain readable. Honor `prefers-reduced-motion`."

- `[design]/[frontend] typography.md:110-124` **Watermark / faint enlarged characters (ghost type)**:
  - "A huge ghosted word, number, or single letter behind content at low opacity adds depth and reinforces brand — the "faint enlarged characters" device. Also doubles as a section divider/eyebrow."
  - Code:
    ```css
    .ghost {
      position:absolute; inset:auto auto -5% -2%; z-index:0; pointer-events:none;
      font-size: clamp(8rem, 30vw, 24rem); font-weight: 800; line-height: 1;
      color: transparent; -webkit-text-stroke: 1px rgb(255 255 255 / .06);   /* outline ghost */
      /* or: color: rgb(255 255 255 / .04);  for a solid faint fill */
    }
    ```
  - Pitfall (a11y-load-bearing): "Keep opacity low (≤8%) or it competes with the foreground; ensure it never reduces contrast of real text in front of it. `aria-hidden` it / use a pseudo-element so screen readers skip the decoration."

- `[design] typography.md:126-132` **Body readability** (the "unglamorous rule"):
  - "All the display drama collapses if the body is hard to read."
  - How: "body 16–18px; **line length 45–75ch** (`max-width: 65ch`); line-height ~1.5–1.65 for body, tighter for headings; left-align long copy (never justify or center paragraphs); establish a vertical rhythm (consistent spacing multiples)."
  - Pitfall: "Full-width body text (>75ch) tanks readability; centered multi-line paragraphs are hard to track. Contrast ≥ 4.5:1 for body."

- `[design] typography.md:136-139` **Quick recipe** (complete system in one line): "Display headline (`clamp` + `-0.03em` tracking + `line-height:.95`) · one supporting body face at 16–18px, 65ch · optional mono utility face for labels/data · one ghost watermark glyph behind for depth · variable font for any motion. That's a complete, distinctive type system in two families."

- `[design]`+`[frontend]` `[cross]` L71-75: "**Color values are OKLCH-friendly.** `--color-*` (and DESIGN.md `colors:`) accept any CSS color syntax — author palette values in **OKLCH** when you want perceptual control (`oklch(L C H)`; vary L, hold C/H for a harmonious ramp; one accent). Same role slots, no rename. AA-check **both** surfaces when the page alternates light↔dark. (Depth effects — grain/glow/glass/duotone — are per-section build-time craft, not theme tokens; see [depth-and-texture.md](depth-and-texture.md).)"

  - `[design]` "**Decide a visual direction / take a point of view / avoid generic** | [Frontend design principles](references/frontend-design-principles.md) | Register, direction constraints, and anti-generic defaults"

  - `[design]` "**Record the direction as a DESIGN.md** | [Design direction](references/design-direction.md) | Design-system contract, tokens, and lintable specification"

  - `[design]` "**Check a draft against named AI tells** | [Anti-default catalog](references/anti-default-catalog.md) | Concrete default-pattern findings and replacements"

  - `[design]` "**Design and build one distinctive section** | [Section design workflow](references/section-design-workflow.md) | One bold move, selected devices, and an anti-boring check"

  - `[design]` "**Lay out a section or break the grid** | [Layout and composition](references/layout-and-composition.md) | Responsive composition pattern and CSS mechanism"

  - `[design]` "**Make type the primary visual device** | [Typography](references/typography.md) | Type hierarchy, pairing, scale, and implementation"

  - `[design]` "**Set palette and section rhythm** | [Color and rhythm](references/color-and-rhythm.md) | Palette roles, contrast, and light/dark cadence"

  - `[design]` "**Add depth without visual clutter** | [Depth and texture](references/depth-and-texture.md) | Layering, texture, lighting, and shadow treatment"

  - `[design]` "**Add patterns, dividers, or cutouts** | [Decoration](references/decoration.md) | Restrained decorative system with implementation examples"

  - `[design]` "**Present imagery as more than rectangles** | [Imagery](references/imagery.md) | Art direction, framing, treatment, and responsive behavior"

  - `[design]` "**Add motion or scroll interaction** | [Motion and interaction](references/motion-and-interaction.md) | Motion hierarchy, reduced-motion behavior, and implementation"

  - `[design]` "**Use WebGL, shaders, particles, or custom cursors** | [Experimental techniques](references/experimental-and-creative.md) | Feasibility boundary, progressive enhancement, and effect pattern"

  - `[design]` "**Review a build against its approved direction** | [Art review](references/art-review.md) | Evidence-backed A0-A3 punch list or sign-off"


## [frontend]

_Production implementation — CSS/Tailwind v4, build patterns, capture tooling, code. Routes to the `frontend` sibling skill._

_82 items._

- `[frontend] anti-default-catalog.md:55-61`
  > "## GPT / Codex-specific defects (refuse and rewrite)
  > **Ghost card**: a `1px` border *plus* a `box-shadow` with ≥16px blur on the same element.
  > **Over-rounding**: `border-radius: 32px+` on cards/containers.
  > Hand-drawn / `feTurbulence` "sketchy" SVG filters used for faux-organic texture.
  > `repeating-linear-gradient` candy stripes as a background pattern.
  > Meta-criticism copy ("not your average...", "this isn't just another...")."

- `[frontend] art-review.md:52-64` (capture tooling capability contract)
  > "This review is visual: it cannot run from source code alone. The capability contract, independent of any specific tool:
  > 1. **Serve the build** (dev server or static output) on a local port.
  > 2. **Screenshot it programmatically** — per-section tight crops, two viewports (desktop ~1440×900 and an iPhone-class device), `prefers-reduced-motion` emulated, each element scrolled into view before the shot (lazy images).
  > 3. **Read the images** — the reviewing model must be multimodal. No vision, no art review.
  > Token economy: **spend tokens reading crops, not driving the browser.** A picture is worth a thousand tokens; a chatty automation layer burns them before you've seen anything."

- `[frontend] art-review.md:66-78` (tooling specifics)
  > "**Batch capture (building the manifest): script it.** A short throwaway Playwright script — or a shell loop issued as one command — that walks every route/section and writes all crops plus an ordered manifest (document order, desktop before mobile) to a directory in a single run. Zero tokens while it runs; you only pay to look at the results.
  > **Interactive inspection (hover states, nav, forms, "what does this actually do"): `agent-browser`** — a fast CDP-based CLI built for agents (`npm i -g agent-browser && agent-browser install`, then `agent-browser skills get core` for usage that matches the installed version). Terse output — a click returns "Done", not a page snapshot — makes it an order of magnitude cheaper in context than MCP-based browser automation; it needs no Playwright/Puppeteer install and runs on any agent host. `set viewport 1440 900` / `set device "iPhone 14"` cover the two-viewport rule.
  > **Fallback: your host's native browser tools** (e.g. Claude Code's Chrome integration) when nothing can be installed.
  > **No browser at all → degrade honestly.** Review markup/CSS/tokens against the direction and label the result explicitly: *"code-level pass — not an art review; no build was viewed."* Never present an unviewed review as a viewed one."

- `[frontend] color-and-rhythm.md:35-43` (§2 OKLCH palettes — technical spec)
  > "**Why:** OKLCH is *perceptually uniform* — equal numeric changes = equal perceived changes, keeping palettes harmonious and contrast predictable. W3C Design Tokens default (Oct 2025); all modern browsers support it.
  > **Syntax & ranges:** `oklch(L C H / a)` — **L** 0→1 (black→white), **C** 0→~0.37 (gray→saturated), **H** 0–360° (red 20, yellow 90, green 140, blue 220, purple 320).
  > **How — build a palette by varying L, holding C/H:**"

- `[frontend] color-and-rhythm.md:40-56` (OKLCH code block)
  > ```css
  > :root {
  >   /* neutrals: chroma 0, vary lightness */
  >   --surface-0: oklch(0.96 0.005 300);
  >   --surface-1: oklch(1 0 0);
  >   --text-primary:   oklch(0 0 0);
  >   --text-secondary: oklch(0.54 0 0);
  >   /* accents: mid-to-high L + meaningful C + hue */
  >   --accent: oklch(0.57 0.18 286);
  >   --danger: oklch(0.59 0.23 7);
  > }
  > @media (prefers-color-scheme: dark) {
  >   :root { --surface-0: oklch(0 0 0); --surface-1: oklch(0.29 0.01 300); --text-primary: oklch(1 0 0); }
  > }
  > /* relative-color tweaks keep identity: */
  > .btn:hover { background: oklch(from var(--accent) calc(l + 0.1) c h); }
  > ```

- `[frontend] decoration.md:34-54` (§1 SVG background patterns — code + tool list)
  > "**Why:** A faint repeating pattern adds texture/depth to a flat fill without competing with content — the Vercel/Linear "blueprint" feel.
  > **How:** inline an SVG `background-image` (cheaper than a raster, scales crisp). Dot grid via `radial-gradient` needs no asset at all:"
  > ```css
  > .dotgrid {
  >   background-image: radial-gradient(rgb(255 255 255 / .08) 1px, transparent 1px);
  >   background-size: 24px 24px;
  > }
  > .bluelines {  /* graph-paper grid */
  >   background-image:
  >     linear-gradient(rgb(255 255 255 / .05) 1px, transparent 1px),
  >     linear-gradient(90deg, rgb(255 255 255 / .05) 1px, transparent 1px);
  >   background-size: 40px 40px;
  > }
  > ```
  > "Fade edges with a `mask-image: radial-gradient(...)` so it doesn't hit the section border hard. Tools: heropatterns.com, fffuel.co, magicpattern.design.
  > **Pitfall:** opacity too high turns texture into noise (keep ~3–8%); a hard pattern edge at the section boundary looks unfinished — always mask/fade it."

- `[frontend] decoration.md:59-75` (§3 section dividers — code + tools)
  > "**Why:** Break the hard horizontal seam between two sections; signal a transition; add organic softness or kinetic angle.
  > **How:** **Diagonal/slant** with `clip-path` (cheap); **waves/curves** with an inline SVG (clip-path polygons can't do smooth curves well)."
  > ```css
  > .slant { clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%); }  /* angled bottom edge */
  > ```
  > ```html
  > <!-- wave divider: an SVG sitting at the section boundary -->
  > <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style="display:block;width:100%;height:80px">
  >   <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#0a0a0f"/>
  > </svg>
  > ```
  > "Tools: getwaves.io, haikei.app (layered/stacked waves, blobs, grids), softr SVG wave generator.
  > **Pitfall:** Loud rainbow waves read as 2017 Bootstrap. Keep dividers subtle and color-matched to the adjacent section; `preserveAspectRatio="none"` so the wave stretches full-width without gaps."

- `[frontend] decoration.md:83-97` (§5 decorative lines & connectors — code)
  > "**Why:** Thin rules guide the eye, connect related elements (cards in a process), or add a hand-made underline accent. They should encode something true (a real sequence/connection), not just decorate.
  > **How:** hairline borders/pseudo-elements for rules; an inline SVG `path` (optionally `stroke-dasharray` animated) for connectors between cards; an SVG squiggle as a headline underline."
  > ```css
  > .hand-underline { position:relative; }
  > .hand-underline::after {
  >   content:""; position:absolute; left:0; right:0; bottom:-.15em; height:.4em;
  >   background: url("data:image/svg+xml,...squiggle...") no-repeat; background-size:100% 100%;
  > }
  > ```
  > "Animate a connector drawing in on scroll via `stroke-dashoffset` + scroll-driven animation.
  > **Pitfall:** Connectors implying a false relationship mislead; keep line weights consistent with the type's hairline weight or they look bolted on."

- `[frontend] decoration.md:123-127` (generator toolbox — source list)
  > "## Generator toolbox (fast, free)
  > **Waves/blobs/layered scenes:** haikei.app · getwaves.io · blobmaker.app
  > **Patterns:** heropatterns.com · fffuel.co · magicpattern.design
  > **Noise:** fffuel.co/nnnoise · (or hand-rolled feTurbulence, `depth-and-texture.md §2`)
  > **clip-path shapes:** bennettfeely.com/clippy · 10015.io/tools/css-clip-path-generator"

- `[frontend] depth-and-texture.md:54-71` — Noise/film-grain texture (highest ROI)
  > A single faint grain over a section knits gradients, glass and shadows into one material and **kills gradient banding**. The most-overlooked reason flat designs look cheap. Pure SVG, no asset.
  ```css
  .grain::after {
    content:""; position:absolute; inset:0; z-index:10; pointer-events:none;
    opacity:.06;                 /* 0.03–0.08 is the tasteful band */
    mix-blend-mode: overlay;     /* or soft-light (subtler) / multiply (darker) */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }
  ```
  > **Levers:** `baseFrequency` = grain size — **0.6–0.9 = fine film grain**, ~0.2 = blotchy clouds. `type='fractalNoise'` = soft/cloudy, `type='turbulence'` = rippled/liquid. `numOctaves` = detail (2–4). `stitchTiles='stitch'` tiles seamlessly.
  > **Grainy gradient (banding fix):** put grain *over* a gradient and crush it with `filter: contrast(170%) brightness(1000%)` to turn it into pure speckle, then blend.
  > **Pitfall:** opacity > 0.1 looks like a broken TV; keep the grain layer static (animating `feTurbulence` per frame is expensive). Always `pointer-events:none`.

- `[frontend] depth-and-texture.md:75-96` — Aurora/gradient-mesh glow
  > Soft colored light bleeding from behind a dark section → background reads as *deep space* not a flat fill. Signature of 2025–26 AI/SaaS landing pages.
  ```css
  .aurora { position:absolute; inset:0; z-index:0; overflow:hidden; background:#08080c; }
  .aurora::before {
    content:""; position:absolute; inset:-20%;
    background:
      radial-gradient(40% 50% at 20% 30%, #6d28d9 0%, transparent 60%),
      radial-gradient(35% 45% at 75% 25%, #2563eb 0%, transparent 60%),
      radial-gradient(45% 40% at 60% 80%, #db2777 0%, transparent 60%);
    filter: blur(80px);          /* THE key line — turns hard circles into light */
    opacity:.55;
    animation: drift 24s ease-in-out infinite alternate;
  }
  @keyframes drift { to { transform: translate3d(6%, -4%, 0) rotate(8deg); } }
  ```
  > **Levers:** big `blur()` (60–100px) sells it; animate slowly (15–30s) via `transform` (compositor-cheap). **Example:** Aceternity "Aurora Background", Linear's purple/blue bloom. **Pitfall:** animate `transform`, never `filter`/`background` (stutters). Keep opacity moderate over dark bg or text contrast dies. Add a `prefers-reduced-motion` off-switch.

- `[frontend] depth-and-texture.md:126-145` — Glassmorphism / frosted glass
  > `backdrop-filter` blurs *what's behind*, so a card literally sits on a plane in front of the aurora/product — the strongest single cue that two planes are separated.
  ```css
  .glass {
    background: rgba(255,255,255,.08);              /* dark UI: keep low, 6–12% */
    backdrop-filter: blur(12px) saturate(160%);     /* saturate revives washed colors */
    -webkit-backdrop-filter: blur(12px) saturate(160%);
    border: 1px solid rgba(255,255,255,.14);        /* 1px low-opacity white = the "edge" */
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0,0,0,.25),
                inset 0 1px 0 rgba(255,255,255,.18); /* inset top = glass highlight */
  }
  ```
  > **Levers:** blur **8–15px**; bg opacity **8–30%**; the `saturate()` and the **inset top highlight** are what separate premium glass from a grey blur. **Example:** Apple "Liquid Glass", macOS sidebars, floating nav over hero media. **Pitfall:** GPU-heavy — **max 2–3 glass elements per viewport**, never animate `backdrop-filter`, drop blur to 6–8px on mobile. Needs a busy/colorful backdrop to read as glass. Ship `-webkit-` prefix + a solid fallback (`@supports not (backdrop-filter: blur())`).

- `[frontend] depth-and-texture.md:149-165` — 3D tilt / perspective on product UI
  > A perspective-tilted screenshot turns a flat PNG into an object in space — the canonical SaaS hero.
  ```css
  .stage { perspective: 1200px; }                 /* on the parent */
  .ui {
    transform: rotateX(12deg) rotateY(-16deg) rotateZ(2deg) scale(.96);
    transform-style: preserve-3d;
    box-shadow: -40px 40px 80px rgba(0,0,0,.5);   /* shadow follows the tilt direction */
    transition: transform .4s ease;
  }
  .ui.interactive { transform: perspective(1200px) rotateX(var(--rx)) rotateY(var(--ry)); }
  ```
  > JS for mouse-track: `rx = (0.5 - mouseY/h) * MAX_DEG; ry = (mouseX/w - 0.5) * MAX_DEG;`. Add a **glare** (radial-gradient following cursor) and `translateZ` child elements for parallax-within-the-card. **Pitfall:** keep angles subtle (8–16°) — over-rotation looks like a 2010 app-store mockup. Tilt distorts text; pair with a 2× asset. Throttle mouse-move with rAF; disable on touch.

- `[frontend] depth-and-texture.md:168-187` — Parallax / depth-on-scroll
  > Planes moving at different rates on scroll is the most literal depth cue. 2026 way is **pure-CSS scroll-driven animations** (compositor thread, 60fps, no main-thread JS).
  ```css
  .hero { animation: parallax-bg linear; animation-timeline: scroll(); }
  @keyframes parallax-bg { to { background-position: bottom -400px center; } }

  .hero-content {
    animation: rise linear;
    animation-timeline: view(-100px);   /* negative inset = start slightly before visible */
    animation-range: 0% 120%;
  }
  @keyframes rise { from { translate: 0 60px; } to { translate: 0 -40px; } }
  @media (prefers-reduced-motion: reduce){ *{ animation:none !important; } }
  ```
  > Legacy broad-support: `perspective:1px` on the scroll container + `translateZ(-2px) scale(3)` on far layers, `translateZ(0)` near — farther = slower. **Pitfall:** parallax that janks scroll feels cheap — keep displacement small (≤ a few hundred px). `background-attachment: fixed` is broken on iOS — prefer scroll-timeline/transforms. Always ship the `prefers-reduced-motion` kill-switch.

- `[frontend] design-direction.md:38-44` — design.md tool identity/versioning caution
  > `design.md` (npm `@google/design.md`, Apache-2.0, status **alpha**) is a plain-Markdown format for handing a design system to a coding agent.
  > **Pin the version — it's alpha and the schema churns.** Run `npx @google/design.md@<pinned>` (or install `@google/design.md` as a dev dependency at a fixed version). Before authoring, run `design.md spec` and work against *that* output, not memory — verify the API, don't recall it.

- `[frontend] design-direction.md:57-82` — Token front-matter schema, verbatim YAML
  ```yaml
  version: alpha
  name: <required — the only effectively-required field>
  description: <optional>
  colors:
    <token>: <CSS color — hex #RRGGBB recommended; rgb()/hsl()/oklch()/color-mix() allowed>
  typography:
    <token>: { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, fontFeature, fontVariation }
  rounded:
    <scale>: <Dimension — number + px|em|rem>
  spacing:
    <scale>: <Dimension | number>
  components:
    <component>:                     # e.g. button-primary
      <prop>: <value | "{token.ref}">
    <component>-hover: { ... }        # variants are SIBLING entries by naming convention
  ```
  > - **Token reference**: `{path.to.token}` (e.g. `{colors.primary}`). Must point at a primitive, except inside `components` where composite refs (`{typography.label-md}`) are allowed.
  > - **Component props** (the valid set): `backgroundColor`, `textColor`, `typography`, `rounded`, `padding`, `size`, `height`, `width`. Variants/states are separate entries (`button-primary`, `button-primary-hover`, `button-primary-active`).
  > - **Colors** are converted to sRGB for WCAG contrast checking; `#RRGGBB` is the recommended default. For perceptual control, author palette values in **OKLCH** instead (`oklch(L C H)` — vary L, hold C/H for a harmonious ramp; one accent) and AA-check both surfaces when the page alternates light↔dark.

- `[frontend] design-direction.md:95-100` — Extensibility rule
  > The format takes **any key, any section**. Add `## Motion` (durations/easing for a motion library), `## Iconography`, custom token groups — they pass validation untouched. Standardize only the universal groups (colors/typography/spacing/rounded/components); express everything else as custom sections.

- `[frontend] design-direction.md:102-114` — The CLI, verbatim table + lint rules list
  | Command | Use |
  |---|---|
  | `design.md spec [--rules]` | Print the spec (or just the rules table) — inject into the authoring prompt so you work against the installed version. |
  | `design.md lint <file>` | Validate: resolves token refs, checks **WCAG contrast** (AA < 4.5:1 warns), structure. Emits JSON findings. **The QA gate.** |
  | `design.md export <file> --format <fmt>` | Export tokens. `json-tailwind` (Tailwind v3 config), `css-tailwind` (Tailwind v4 `@theme` CSS), `dtcg` (W3C `tokens.json`). **The bridge into the build.** |
  | `design.md diff <a> <b>` | Token + prose regression detection between versions; nonzero exit on regression. Gate design iterations. |
  > **Lint rules** (9): `broken-ref` (error) · `missing-primary` (warn) · `contrast-ratio` (warn, <4.5:1) · `orphaned-tokens` (warn) · `token-summary` (info) · `missing-sections` (info) · `missing-typography` (warn) · `section-order` (warn) · `unknown-key` (warn — typo detection, e.g. `colours:` → `colors:`).

- `[frontend] design-direction.md:169-178` — Critical pitfall: spacing scale collision with Tailwind
  > **Author the scales against Tailwind v4's theme namespaces** so the exported theme reconfigures Tailwind cleanly and with full coverage... The single most important rule from that file: **don't author a t-shirt `spacing:` scale** (`xs…4xl`) in the front-matter — it exports to `--spacing-2xl` etc. and silently shadows Tailwind's `max-w-*` sizing scale, collapsing text columns. Record the spacing rhythm in the *Layout* prose instead (Tailwind's native numeric spacing carries it: `6rem → py-24`, `9rem → py-36`). Make *Elevation & Depth* → shadows, *Motion* → ease/animate curves, and the reading-measure/shell widths → container widths explicit in the prose, since the `design.md` export doesn't emit those namespaces — the build hand-authors a companion `@theme` from these sections.

- `[frontend] experimental-and-creative.md:40-47`
  > **1. WebGL / shader gradient & liquid backgrounds (the premium hero canvas)** — Why: A fragment-shader background — animated mesh gradient, liquid distortion, flowing noise — is the current high-end hero. It reads as bespoke and "motion-driven premium" in a way a CSS gradient can't, and weighs less than a video. The majority of recent Awwwards/FWA winners use Three.js / custom WebGL(GPU) for exactly this. How: a full-viewport plane with a custom fragment shader; drive color via `mix()` + a noise function, animate with a `uTime` uniform, add `uMouse` for cursor-driven distortion and a grain term. In React, use **react-three-fiber** + drei `shaderMaterial`.

- `[frontend] experimental-and-creative.md:48-68` (code sample)
  > react-three-fiber single full-screen shader plane example — `GradientBG()` component with `useFrame`, `shaderMaterial`, uniforms `uTime`/`uMouse`/`uColorA`/`uColorB`.

- `[frontend] experimental-and-creative.md:69-73`
  > **Modern note:** **TSL (Three Shading Language)** lets you write shader logic in JS/TS that targets both WebGL and WebGPU — future-proof. Shadertoy shaders port into Three.js with minor uniform renaming. **Pitfall:** ships a big dependency (Three.js ~150KB+) — **lazy-load** the canvas (dynamic import, `IntersectionObserver`), pause `useFrame` when offscreen, cap `dpr={[1,2]}`. Always render a static CSS gradient/grain fallback for `prefers-reduced-motion` and no-WebGL. One per page, hero only.

- `[frontend] experimental-and-creative.md:75-100`
  > **2. Canvas particle systems / interactive backgrounds** — Why: Particles reacting to the cursor (repulsion, connection lines, click bursts) add living depth and a tactile signature. Lighter than WebGL for 2D effects. How: HTML5 `<canvas>`, particle array, `requestAnimationFrame` loop, `mousemove` repulsion (full code sample lines 82-96). Libraries: tsParticles (modern, maintained), particles.js (legacy). **Pitfall:** particle count kills mid-range devices — cap count by viewport/device, throttle to rAF, pause when the section is offscreen, drop count on mobile. `pointer-events:none` on the canvas. Provide a static fallback under reduced-motion.

- `[frontend] experimental-and-creative.md:102-117`
  > **3. Custom cursors & cursor-driven effects** — Why: recognizable Awwwards signature, personalizes the whole site cheaply. How: hide native cursor on desktop class; fixed element **lerps** toward the real pointer each frame (lag = premium feel); scale/morph on interactive-element hover (lerp code sample lines 108-113). Pair with magnetic buttons (`motion-and-interaction.md §A6`). **Pitfall:** **Never** remove the cursor on touch (`@media (hover:hover)` gate) or you strand mobile users; keep keyboard focus styles intact; ensure the custom cursor never hides clickable affordance. Honor reduced-motion (drop the lag/trail).

- `[frontend] experimental-and-creative.md:119-137`
  > **4. View Transitions API (cinematic state & page changes)** — Why: native-feeling morphs between DOM states and **across page navigations** (MPA) — shared element animates seamlessly without SPA + heavy JS. Same-document: `document.startViewTransition(() => updateTheDOM())`. Cross-document (MPA): `@view-transition { navigation: auto; }` + `view-transition-name` on shared elements. Cross-document shipped in Chrome/Edge 126+, Safari 18.2+ (not Firefox yet). **Pitfall:** `view-transition-name` must be **unique per snapshot** on a page or the transition errors; large/looping transitions feel slow — keep ≤400ms. Re-check it doesn't fight a smooth-scroll lib.

- `[frontend] experimental-and-creative.md:139-146`
  > **5. Generative / creative-coding accents** — Why: small generative touches (flow field, reactive blobs, audio-reactive bars, self-drawing SVG) give a section "a human coded this" quality judges reward. How: light canvas/SVG sketches (p5.js for prototyping, vanilla canvas for ship), or animated SVG `stroke-dashoffset` "self-drawing" paths driven by scroll. Keep as *accents* in one plane. **Pitfall:** generative ≠ random noise — constrain to brand (palette, motion language) or it reads as a screensaver. Budget the CPU; pause offscreen.

- `[frontend] frontend-build-patterns.md:40-45`
  > Stack posture — the patterns are the contract, the stack is the example. None of it *requires* that stack: when the project already uses something else, keep the pattern and translate the mechanism — a project's existing stack always wins over this file's example.

- `[frontend] frontend-build-patterns.md:47-54` (table)
  > Pattern-to-implementation mapping table: One component per section key / Fail-loud section registry / Design tokens → styling layer / Static routes from content / Optimized image/font primitives / Redirects + not-found fallback — with reference implementation and "what to look for in your stack" columns.

- `[frontend] frontend-build-patterns.md:62-69`
  > Reference stack: **pnpm** for installs, **biome** for lint/format, **TypeScript strict**, **Next.js App Router**, **Tailwind**, **motion** (successor to framer-motion) for animation inside section components (works directly since they're client components, no extra wiring). Deploy: Vercel or equivalent.

- `[frontend] frontend-build-patterns.md:71-88`
  > Don't scaffold from scratch — start from a prebuilt template. A good template ships: base configs + typed **content loader** abstraction, App Router routing (home, dynamic slug, collection detail via `generateStaticParams`), `globals.css` with container/spacing custom properties already correctly scoped, tokenized UI primitive layer, **opt-in** archetype/component catalog to reference (not ship), codegen script that generates section-key → component map at build time and **fails loud** on unmapped key.

- `[frontend]/[cross] frontend-build-patterns.md:90-112`
  > Design system layers worth building once, reusing every time: Layout/grid/breakout/type primitives (`Section`, `Container`, `Grid`, `Breakout`, `DisplayHeading`, `Eyebrow`); A motion kit (`Reveal`, `Stagger`, `TextReveal`, `Parallax`, `Marquee`, `CountUp`); A nav kit; **A preset library** — named complete visual directions (swiss-mono, editorial-serif, premium-dark, warm-minimal, brutalist-raw, maximalist, retro-futuristic) bundling type/color/spacing/motion personality via `data-preset="<name>"`; **A variant section catalog** — archetypes (hero, features, editorial, gallery, stats, testimonials, logos, pricing, faq, cta, team, timeline, steps, contact, newsletter, prose) as **reference, not a menu** — never ship a catalog copy unmodified, never pattern-match every section to its nearest catalog neighbor; **An anti-slop checklist** kept visible while building.

- `[frontend] frontend-build-patterns.md:113-123`
  > Theming workflow: 1) Choose preset closest to target design, set `data-preset` root attribute. 2) Export design spec tokens into `@theme` block, **keeping the same token names and only overwriting values**. 3) **Keep container/spacing tokens out of the per-project theme file** if the template already defines them correctly — duplicating or removing that block re-collapses `max-w-*` layout behavior (container-token collision gotcha).

- `[frontend]/[design] frontend-build-patterns.md:125-146`
  > Sections: one client component per section key, exported default + named section-key constant. **Before writing any section, art-direct the page**: decide spatial intent — rhythm, deliberate grid breaks, which section carries most visual weight (usually hero) — *before* writing code. **At least one section per page should be a bespoke composition** designed specifically for that content — usually the hero; a page where every section is a lightly-restyled catalog variant reads as generic. **Style with theme tokens only** — no hardcoded colors, no magic pixel values.

- `[frontend] frontend-build-patterns.md:160-172`
  > Assets — use installed libraries, don't hand-roll: **Icons** — pull from an icon library package, resolve concept → icon name deliberately (search tag/name index) rather than guessing. **Flags** — dedicated flag-icon package rather than emoji flags. **Brand logos** — fetch real, full-color brand marks from a logo API/CDN at build time; render unaltered — don't recolor or restyle a real brand mark. **Background patterns / decoration** — small pattern/decoration library (wave shapes, blob paths, hand-drawn-underline effects); one deliberate decorative touch per section is enough.

- `[frontend] frontend-build-patterns.md:174-208`
  > Component-registry pattern (code sample lines 179-189: `sectionMap` `Record<string, ComponentType>`). Properties worth keeping deliberately: **Render order = data order** (don't re-sort). **An unmatched key should fail loud in development** rather than silently rendering nothing. **Every section component in the registry must be a client component** — real exception to "default to server components" guidance. **Render list-typed fields defensively** — filter rows missing required keys, use index-qualified React key (`` `${label}-${i}` ``). **Richtext fields arrive as an HTML string** — render with `dangerouslySetInnerHTML`, sanitizing untrusted input.

- `[frontend] frontend-build-patterns.md:210-223`
  > Image and link primitives worth standardizing: **A responsive image component** — build `srcSet` from media object's size variants automatically; infer width/height from largest variant so browser never lays out with content-shift gap — don't hand-manage a `fill` prop that fights this inference; resolve `alt` through fallback chain (explicit alt → asset's own alt/name metadata → safe generic default); default `sizes` to sensible responsive breakpoints, override with `sizes="100vw"` for full-bleed. **A link component** branching internal vs external: internal uses framework's client-side router `Link`, external renders native `<a>` with `rel="noopener noreferrer"` when opening in new tab.

- `[frontend] frontend-build-patterns.md:225-233`
  > Content + data wiring: source content from local JSON/content files (`{ route, title, meta, sections: [{ key, order, content }] }` per page, plus separate collection files) through a typed loader, render through real App Router routes. Resolve every media reference to a local file under public assets directory; when a reference can't be resolved, fall back to a clean placeholder component — never a broken image — and log the unresolved set so it's visible, not silently swallowed.

- `[frontend]/[product] frontend-build-patterns.md:235-244`
  > **Kept nav/footer links with no built page → a friendly fallback, not a 404.** Derive the gap automatically (all internal nav/footer hrefs minus the set of pages actually built) rather than hand-maintaining a list; route unbuilt single-segment paths to a page rendering "this page isn't part of the demo" notice inside normal header/footer chrome, with the link's own label. Route everything else unmatched to the same notice via the framework's not-found handler. This mechanism should be inert once every page actually gets built — that's a feature, not something to remove.

- `[frontend]/[product] frontend-build-patterns.md:246-250`
  > **Redirects when the IA changes.** If routes were restructured, implement a redirect map (`{ from, to, permanent: true }` entries, 301) from whatever migration plan defined the old→new mapping. Skipping this means every legacy inbound link/bookmark/search-ranked URL 404s, which is exactly the SEO equity a rewrite is supposed to carry forward.

- `[frontend] frontend-build-patterns.md:252-256`
  > Clean up dev scaffolding before shipping: Delete any dev-only style-guide/reference routes and the unused reference component catalog before the final build — they exist for the build process itself, not for the shipped site, and must not ship as live routes.

- `[frontend] frontend-build-patterns.md:258-277` (Craft gotchas — all named pitfalls)
  > **Container-token collision.** Redefining or removing the container/spacing custom-properties block re-collapses `max-w-*`-based layout across the whole site. **Grid child collapse.** An element with `max-w-*` placed directly inside a `grid-cols-[minmax(0,1fr)_auto]`-style track shrinks to min-content instead of filling its track — add `w-full` explicitly. **Button label wrap.** Inline-flex button labels can wrap mid-phrase ("View / Projects") — set `white-space: nowrap` on button/label text. **Map embeds paint black in headless browsers.** An embedded map iframe can render as a solid black box under headless/automated screenshot capture — put an on-brand fallback panel behind the iframe. **A literal `*` in a comment inside/near a token block can silently drop the whole block.** Some CSS minifiers/parsers choke on glob-style names in prose comments (e.g. writing `--spacing-*` inside a comment near `@theme`) and print a soft warning while dropping the entire token block — a build that's green but has lost all its tokens. Treat any such parser warning as a hard failure, and verify tokens are actually applied (inspect computed styles) during visual QA, not just from a green build.

- `[frontend]/[cross] frontend-build-patterns.md:280-301`
  > Visual end-to-end self-check: **A green build proves the code compiles, not that the page looks right.** 1) Serve the build, get full route list from sitemap. 2) Screenshot every route at two viewports (e.g. 1440×900 desktop + a representative mobile size); for scroll-reveal/lazy-loaded content, step-scroll with short waits, then scroll back to top before final capture. 3) Actually look at each screenshot for real defects: text overflow/clipping (oversized display heading is classic), element overlap, fixed header obscuring first heading, broken/placeholder images, unreachable/overlapping mobile nav, cramped/collapsed spacing, low-contrast text over imagery, horizontal scroll on mobile; re-check against anti-slop checklist. 4) Fix and re-shoot — loop capping at a few rounds, explicitly noting residual issues rather than looping forever. 5) Tear down the server when done.

- `[frontend]/[cross] frontend-build-patterns.md:303-318`
  > Iterative design-review loop: 1) Apply every **blocking** item — both direction violations and composition failures. Each item should name a route, a section, and a concrete fix. 2) Take cheap, clearly-right optional suggestions if you agree. 3) **Leave unflagged sections alone** — don't regress signed-off work, don't redesign the whole page for one fix. 4) Rebuild and re-run the full visual self-check. Work only from the punch-list as written — never guess at unstated intent behind a flagged item.

- `[frontend] frontend-build-patterns.md:320-330`
  > Acceptance checklist: client component exists for every section key, registry covers all with no gaps and fails loud on a miss; build is green **and** desktop+mobile screenshots show no unresolved defect (residuals explicitly noted); routes match target sitemap, unresolved media falls back to placeholder (logged, never silent), every kept nav/footer link resolves to real page or "not part of demo" fallback — no kept link ever 404s; if routes restructured, every redirect-map entry implemented and returns permanent redirect.

- `[frontend] frontend-build-patterns.md:334-336`
  > *Adapted from bendc/frontend-guidelines (Ben De Cock), modernized — dated 2015-era advice (recursion-over-loops, IIFE-as-conditional, arguments/apply/bind gymnastics, blanket prefer-Map-over-objects) has been corrected.* (attribution/provenance note)

- `[frontend] frontend-build-patterns.md:340-349`
  > Semantics: Use the element that describes the content: `<main>`, `<article>`, `<header>`, `<nav>`, `<time datetime=…>`, `<button>` — not `<div>` soup. A wrong semantic element is worse than a neutral one, so don't reach for `<section>`/`<article>` where a plain `<div>` is honest.

- `[frontend] frontend-build-patterns.md:351-357`
  > Accessibility is not an afterthought — bake it into the quality floor: Real `alt` text that describes the content (`alt="Company"`, not `alt="Logo"`). Links and buttons marked as such — **never `<div class=button>`**. Never rely on color alone to carry information. Explicitly label every form control. Visible keyboard focus; honor `prefers-reduced-motion`.

- `[frontend] frontend-build-patterns.md:359-367`
  > Brevity: no redundant attributes, no XHTML self-closing cruft; in JSX use `<Fragment>`/`<>` instead of unneeded wrapper divs. Declare `lang` on document root and UTF-8. Performance: don't block rendering, content first, non-critical scripts deferred; use framework's built-in primitives rather than hand-managing tags. Perceived speed beats micro-optimization.

- `[frontend] frontend-build-patterns.md:374-384`
  > Box model: global `box-sizing: border-box` reset fine, don't flip box model per-element. Stay in natural flow: prefer `vertical-align: middle` over `display:block` to kill image whitespace; prefer `margin-left:auto` over `position:absolute; right:0`. Positioning: favor Flexbox/Grid, avoid `position:absolute` and out-of-flow hacks unless design genuinely requires layering. Specificity: minimize `id` selectors and avoid `!important`; resolve conflicts by combining classes, not escalating specificity weight; in Tailwind, don't fight utilities with `!important` — compose variants and extract components instead.

- `[frontend] frontend-build-patterns.md:393-401`
  > Don't override; structure so you don't have to: target the real subset (`li + li`) instead of setting-then-unsetting. Inheritance: don't duplicate declarations children can inherit — set `text-shadow`/`color`/`font` on the parent. Selectors — keep them shallow: add a class once a selector exceeds roughly **three combinators/structural pseudo-classes**; don't overload attribute selectors (`[src$=svg]`, not `img[src$=svg]`).

- `[frontend] frontend-build-patterns.md:403-412`
  > Brevity: use shorthand and `calc()` over margin-offset hacks. Units: unitless where possible, favor `rem` for relative sizing, prefer seconds over milliseconds (`.5s`). Colors: Hex for opaque, `rgba()`/`color-mix()` for transparency — or whatever color space the design token spec defines (`oklch()`/`hsl()` common in modern token systems); the design spec is source of truth, not a hardcoded default.

- `[frontend] frontend-build-patterns.md:414-424`
  > **Animations — the load-bearing rule for motion.** Favor **transitions over keyframe animations**, and **only animate `opacity` and `transform`** — compositor-friendly, don't trigger layout. Animating `margin`/`width`/`top` causes reflow and visibly janks. With a motion library, same rule applies: animate `transform`/`opacity`, respect `prefers-reduced-motion`.

- `[frontend] frontend-build-patterns.md:426-433`
  > No hacks: use `will-change: transform` honestly rather than a `translateZ(0)` GPU-forcing hack; write real CSS comments, not `//`. Draw with CSS, not HTTP: replicate simple shapes (circles, triangles) with border-radius/borders instead of fetching SVG/image. Vendor prefixes: kill obsolete ones, let toolchain add what's needed; if hand-writing, put standard property *after* the prefixed one.

- `[frontend]/[cross] frontend-design-principles.md:158-165`
  > When writing the code, be careful of structuring your CSS selector specificities. It's easy to generate CSS classes that cancel each other out (especially with a type-based selector like `.section` and an element-based selector like `.cta`). This can happen often with paddings/margins between sections.

- `[frontend] layout-and-composition.md:37-52` **Full-Bleed Breakout Grid (the foundational pattern)**
  > **Why:** Solves the core tension — constrained text for readability (~65ch) vs full-width media for impact — in ONE layout system, no nested wrappers.
  > ```css
  > .wrapper {
  >   display: grid;
  >   grid-template-columns: 1fr min(42rem, 100%) 1fr;
  > }
  > .wrapper > * { grid-column: 2; }        /* centered, readable */
  > .full-bleed { grid-column: 1 / -1; }    /* edge-to-edge */
  > ```
  > `grid-column: 1 / -1` (count-from-end) is future-proof vs hardcoded line numbers.
  > **Example:** Josh Comeau's blog; standard on editorial/SaaS sites.
  > **Pitfall:** Avoid `100vw` for full-bleed — it ignores scrollbar width → horizontal scroll. The grid approach sidesteps it. If you must use vw, add `overflow-x: hidden` on `html`.

- `[frontend] layout-and-composition.md:54-82` **Multi-Tier Breakout Grid (content → popout → feature → full)** — full named-line/`clamp()`/`minmax()` CSS recipe for four graduated content widths.
  > **Example:** Ryan Mulligan's layout-breakouts; long-form editorial templates.
  > **Pitfall:** Over-stepping every element defeats it — breakouts work by contrast against a stable content column. Use sparingly.

- `[frontend] layout-and-composition.md:84-99` **Named-Line Editorial Grid + Subgrid**
  > **Why:** Components self-place by *name* (`content`, `center`, `full`) without knowing line numbers; subgrid lets nested components align to the master grid at any depth — key to scalable editorial.
  > **Pitfall:** Subgrid requires the child to be a grid *item* of the named-line parent; names only pass through actual subgrid, not regular nested grids.

- `[frontend] layout-and-composition.md:101-105` **12-Column Base with Named Repeats** — `grid-template-columns: repeat(12, [col-start] minmax(0,1fr));` → place via `grid-column: col-start 2 / span 7`.
  > **Pitfall:** Use `minmax(0, 1fr)` not bare `1fr` — bare `1fr` won't shrink below content min-size, so long content/images blow out the grid.

- `[design/frontend cross] :109-132` **BENTO GRID** full pattern (`grid-auto-flow: dense` as "the critical line"), container-query card internals, `flex-1` text-block trick, limit 6–12 blocks.
  > **Example:** Apple product pages, Linear, Vercel feature sections.
  > **Pitfalls:** (1) `grid-auto-rows: 1fr` on mobile creates huge empty gaps — restrict equal-height rows to desktop. (2) Prefer cropping (`object-position`) over squashing images to fit cells. (3) `dense` can reorder tiles away from DOM order — don't rely on visual order for meaning/tab order.

- `[frontend] layout-and-composition.md:163-179` **Overlap/Bleed/Overflow** techniques — background-only breakout trick (`section::before { content:''; position:absolute; inset:0 -50vw; …}`); "Sticky + full-bleed conflict — a full-bleed element inside a transformed/sticky ancestor clips"; grid-cell overlap via shared grid-row/column ranges preferred over negative margins for responsiveness; "Test at every breakpoint — desktop overlaps become unreadable collisions on mobile."

- `[frontend] motion-and-interaction.md:38-56` **A1. CSS scroll-driven reveals (`animation-timeline`)** — full code for `animation-timeline: view()` reveal + scroll-linked progress bar. Range keywords: `cover` (entry→exit), `contain` (only while fully visible), `entry`, `exit`; two timelines for entry+exit; `timeline-scope: --name` + `view-timeline: --name` to animate element B from element A's scroll position. Pitfall: "Firefox support is recent/partial. **Gate it:** `@media (prefers-reduced-motion: no-preference) { … animation-timeline: view(); }` so the default state is the finished, visible state."

- `[frontend] motion-and-interaction.md:58-71` **A2. Intersection Observer reveals** — full JS + CSS pattern, `threshold: 0.15, rootMargin: '0px 0px -10% 0px'`. Stagger formula: `el.style.transitionDelay = \`${i*80}ms\`` (cap ~6 items / ~500ms total). Pitfall: "Unobserve after first reveal; negative `rootMargin` bottom avoids 'pops in already on screen.'"

- `[frontend] motion-and-interaction.md:73-85` **A3. Pinned/sticky scroll (GSAP ScrollTrigger)** — code + scrub tuning: "`true` = locked; `1` = 1s catch-up (recommended); `0.5` smoother/heavier; `2` laggier/lighter." Pitfall: "In React/Next, pin breaks on remount/route change — create inside `useGSAP`/`useLayoutEffect`, call `ScrollTrigger.refresh()` after images/fonts load, clean up with `ctx.revert()`. Pinning inside transformed/overflow-hidden ancestors misbehaves."

- `[frontend] motion-and-interaction.md:87-93` **A4. Scroll-scrubbed video/image sequence** — "the Apple AirPods effect"; two implementation options (video `currentTime` mapping vs canvas image sequence, redraw only on change). Pitfall: "Safari/iOS won't seek network video smoothly. A dedicated `scroll-driven-video` skill handles the cross-browser version... Throttle `currentTime` to rAF."

- `[frontend] motion-and-interaction.md:95-102` **A5. Horizontal scroll gallery** — GSAP code + CSS-only `scroll-snap-type:x mandatory` alt. Pitfall: "Don't trap vertical-scroll users — keep pinned distance modest, ensure keyboard/trackpad reach, add scroll-snap so it doesn't feel floaty."

- `[frontend] motion-and-interaction.md:104-114` **A6. Magnetic button** — full mousemove code (strength 0.2–0.4 factor), spring-back transition, inner-label parallax at smaller factor. Pitfall: "Gate behind `@media (hover:hover)` (touch has no hover); keep strength low or the click target misses."

- `[frontend] motion-and-interaction.md:116-122` **A7. 3D card tilt** — `rotateX`/`rotateY` formula tied to cursor position, cursor-following glare idea. Pitfall: "drive via rAF not raw mousemove; cap ≤15°; reset on leave; `transform-style:preserve-3d` for depth children."

- `[frontend/design] motion-and-interaction.md:124-128` **A8. Hover micro-interactions** — image zoom recipe, underline-draw L→R recipe. Pitfall: "Transition `transform`/`opacity` only (GPU-composited); never `width`/`top`/`box-shadow` spread."

- `[frontend] motion-and-interaction.md:130-141` **A9. Continuous ambient motion** — marquee CSS-only duplicate-track trick (seam invisible), edge-fade mask-image recipe, `:hover{animation-play-state:paused}`, slow gradient drift (15–30s). Pitfall: "Set duration proportional to content width. **Reduced-motion:** stop animation + `flex-wrap:wrap` into a static grid; `aria-hidden=\"true\"` the duplicated copy (SR shouldn't read twice)."

- `[frontend] motion-and-interaction.md:143-149` **A10. Smooth scroll (Lenis) + Motion/Framer Motion** — pairing Lenis rAF with GSAP ScrollTrigger.update; pitfall "Two rAF loops fighting = jitter — drive both from one loop. Destroy on unmount (SPA leak). Disable Lenis under `prefers-reduced-motion`." Framer Motion patterns: `whileInView` + `viewport={{once:true, margin:'-10%'}}`, `variants` with `staggerChildren:0.08`, `useScroll`+`useTransform` for parallax.

  - `[frontend]/[cross] section-archetypes.md:75-80` Fixed content-type vocabulary: "string, text (multi-line), richtext, integer, float, boolean, datetime, option (select/enum), list (repeating nested fields), media, link, collection (reference to a repeatable record type), reference (relation to another page/entity). Keep the type vocabulary small and consistent across the whole catalog — every consumer downstream (content model, components) should be able to switch on exactly these types, no more."

- `[frontend]` L1-3: "# Tailwind v4 theme namespaces — mapping DESIGN.md tokens for full, collision-free coverage ... Purpose: Map approved design tokens into Tailwind v4 namespaces without collisions or scale regressions."

- `[frontend]` L25-31: "Tailwind v4 is configured in CSS: utilities are generated from **theme variables** declared in an `@theme { … }` block. Each variable lives in a **namespace** (`--color-*`, `--spacing-*`, …) and a namespace powers a family of utilities. To reconfigure the theme with your planned tokens **without collisions and with full coverage**, map every `DESIGN.md` token onto the right namespace, and hand-author the namespaces `design.md` can't express. Verify against the installed Tailwind version — these defaults are from v4 docs (`tailwindlabs/tailwindcss.com`, theme reference)."

- `[frontend]` L33-36: "**No Tailwind?** A `DESIGN.md` token export is just CSS custom properties — consume them directly in vanilla CSS (or as StyleX / CSS Modules variables). Only the namespace mapping below is Tailwind-specific; the collision and full-coverage discipline is worth mirroring in any token system."

- `[frontend]` L38-55 (full namespace table): "## 1. Namespace → utilities it powers (the complete set)
| Namespace | Powers | design.md export emits it? |
|---|---|---|
| `--color-*` | `bg-*`, `text-*`, `border-*`, `ring-*`, … | ✅ from `colors:` (values are OKLCH-friendly — see note) |
| `--font-*` | `font-sans`/`font-<name>` (families) | ✅ from `typography.*.fontFamily` |
| `--text-*` (+ `--text-*--line-height`) | `text-<size>` font sizes | ✅ from `typography` sizes |
| `--font-weight-*` | `font-<weight>` | ✅ from `typography` |
| `--tracking-*` | `tracking-*` letter-spacing | ✅ from `typography` |
| `--leading-*` | `leading-*` line-height | ✅ (when set) |
| `--radius-*` | `rounded-*` | ✅ from `rounded:` |
| `--spacing-*` | **spacing AND sizing**: `p-*`, `m-*`, `gap-*`, `w-*`, `h-*`, `max-w-*`, `max-h-*`, `inset-*`, … | ✅ from `spacing:` ⚠️ **see §2** |
| `--container-*` | `max-w-*` / `min-w-*` t-shirt sizes (`max-w-2xl`) + `@container` queries | ❌ hand-author |
| `--shadow-*` · `--inset-shadow-*` · `--drop-shadow-*` · `--text-shadow-*` | `shadow-*`, `inset-shadow-*`, `drop-shadow-*`, `text-shadow-*` | ❌ hand-author |
| `--ease-*` · `--animate-*` | `ease-*`, `animate-*` | ❌ hand-author |
| `--aspect-*` | `aspect-*` | ❌ hand-author |
| `--breakpoint-*` | responsive variants `sm:` … (also feeds `--container` query sizes) | ❌ (defaults usually fine) |
| `--blur-*` · `--perspective-*` · `--tab-size-*` · `--zoom-*` | filter/3d/misc | ❌ rarely needed |"

- `[frontend]` L57-69 (the root-cause mechanics, named "the `max-w` collapse"): "## 2. Three mechanics that bite (the root of the `max-w` collapse)
1. **`--spacing` is a single base multiplier, not a scale.** Default `--spacing: 0.25rem`; numeric utilities are computed — `p-4 = calc(var(--spacing) * 4)`, `py-24 = 6rem`. You almost never need to touch it.
2. **Named `--spacing-<key>` keys feed *sizing* utilities too** — `w-*`, `max-w-*`, `max-h-*`, … So a `--spacing-2xl: 4rem` token (which `design.md` emits from a `spacing: { 2xl: 4rem }` group) makes **`max-w-2xl` resolve to 4rem**, collapsing text columns. **Verified:** this **shadows `--container-2xl` even when the container scale is also defined** — restoring `--container-*` is *necessary but not sufficient*; the named `--spacing-*` t-shirt keys must **not be emitted at all**.
3. **`max-w-*` t-shirt sizes belong to `--container-*`** (`--container-2xl: 42rem`, `3xl: 48rem`, `4xl: 56rem`, …). That's where reading measures and the page shell go."

- `[frontend]` L77-81 (override model): "**Override model (CSS-first):** adding a variable in `@theme` **extends** (like the old `extend`). To **replace** a whole namespace (drop all Tailwind defaults, keep only yours) set `--namespace-*: initial` first (e.g. `--color-*: initial`). `--*: initial` wipes the **entire** default theme for a fully bespoke system. Removed defaults take their utilities with them (`--color-*: initial` → no more `bg-red-500`)."

- `[frontend]` L83-111 (full-coverage recipe, two `@theme` blocks — named workflow): "## 3. DESIGN.md → theme: the full-coverage recipe (two `@theme` blocks)
Keep the generated export and a hand-authored companion — don't hand-edit the generated file.
1. **Generated `theme.css`** = `design.md export --format css-tailwind` → covers `--color/--font/--font-weight/--text/--tracking/--leading/--radius`. Imported as-is.
2. **Fix spacing at the source** so the generated file never shadows sizing utilities. Best: **don't put a t-shirt `spacing:` scale in the DESIGN.md** — rely on Tailwind's native `--spacing` base and express macro-rhythm with numeric utilities (the DESIGN.md *Layout* prose records the rhythm; `6rem → py-24`, `9rem → py-36`). If custom steps are unavoidable, give them **non-reserved names** (never `xs/sm/md/lg/xl/2xl…7xl`, which collide with `--container-*`/`--text-*`), or strip the `--spacing-<tshirt>` lines from the export in a deterministic post-step.
3. **Hand-authored `@theme` companion** (a second block in `globals.css` or a `theme-extra.css`) for the namespaces `design.md` can't express — derive each from a DESIGN.md prose section so coverage is complete:
   - **`--container-*`** ← *Layout*: reading measure + shell widths (define your own, e.g. `--container-prose: 42rem`, or override the t-shirt scale). **Always present** so `max-w-*` works.
   - **`--shadow-*` / `--inset-shadow-*` / `--drop-shadow-*` / `--text-shadow-*`** ← *Elevation & Depth*.
   - **`--ease-*` / `--animate-*`** ← *Motion* (any motion/animation library uses these).
   - **`--aspect-*`** ← media ratios used by section components.
   - **`--font-*`** binding to the actual loaded font faces (the export ships family *names*; bind them to the loaded font variables in your build's font-loading setup).
   - **`--breakpoint-*`** only if the brief needs non-default breakpoints.
4. **Optional brand lockdown** — `--color-*: initial` before the brand palette so only brand colors exist (kills off-palette `bg-red-500` drift). Keep `--spacing` base, `--breakpoint-*`, and other structural namespaces on Tailwind defaults unless the brief demands otherwise."

- `[frontend]` L113-128 (default scale reference table — exact numbers): "## 4. Tailwind v4 default scales (use as the reference baseline for authored scales)
- **spacing base:** `--spacing: 0.25rem` (so `4 → 1rem`, `6 → 1.5rem`, `24 → 6rem`).
- **container (`max-w-*`):** `3xs 16` · `2xs 18` · `xs 20` · `sm 24` · `md 28` · `lg 32` · `xl 36` · `2xl 42` · `3xl 48` · `4xl 56` · `5xl 64` · `6xl 72` · `7xl 80` (rem).
- **text:** `xs .75` · `sm .875` · `base 1` · `lg 1.125` · `xl 1.25` · `2xl 1.5` · `3xl 1.875` · `4xl 2.25` · `5xl 3` · `6xl 3.75` · `7xl 4.5` · `8xl 6` · `9xl 8` (rem; each has a `--text-*--line-height`).
- **radius:** `xs .125` · `sm .25` · `md .375` · `lg .5` · `xl .75` · `2xl 1` · `3xl 1.5` · `4xl 2` (rem).
- **shadow:** `2xs … 2xl` (see docs); **breakpoints:** `sm 40` · `md 48` · `lg 64` · `xl 80` · `2xl 96` (rem).
- **tracking:** `tighter -.05 … widest .1em`; **leading:** `tight 1.25 … loose 2`; **font-weight:** `thin 100 … black 900`; **ease:** `in/out/in-out`."

- `[frontend]` L130-140 (author+build checklist): "## 5. Checklist (author + build)
- [ ] No t-shirt `--spacing-*` keys reach the generated theme (spacing as base + numeric, or non-reserved names).
- [ ] `--container-*` defined → `max-w-*` resolves to real widths (no `max-w-[42rem]` magic numbers).
- [ ] Every DESIGN.md prose section with visual weight maps to a namespace: *Elevation & Depth* → shadows, *Motion* → ease/animate, *Layout* → container/aspect.
- [ ] Font families bound to the loaded font faces.
- [ ] `design.md lint` clean; the built `@theme` is the export **plus** the companion (full coverage)."

**tailwind-v4-theme.md summary**: 10 items lifted, dominant tag `[frontend]`, 141 lines.

- `[frontend]` L28-29 (framework-agnostic stance): "Build guidance uses Next.js and Tailwind v4 as one concrete example. The patterns are the contract; the project's established framework, CSS tooling, and conventions always win."

  - `[frontend]` "**Map DESIGN.md tokens into Tailwind v4** | [Tailwind v4 theme](references/tailwind-v4-theme.md) | Collision-free theme mapping and width safeguards"

  - `[frontend]` "**Build the visual frontend from an approved design** | [Frontend build patterns](references/frontend-build-patterns.md) | Section registry, token application, assets, and visual self-check"


## [cross]

_General craft principles, review/critique process, section archetypes, and workflow that serve more than one sibling. Route by item._

_50 items._

- `[cross] anti-default-catalog.md:1-3` 
  > "# Anti-default catalog — named AI design tells (2026)
  > Purpose: Identify current visual patterns that make generated web work look generic or machine-produced."

- `[cross] anti-default-catalog.md:17-24`
  > "The specific, current tells that mark a design as machine-generated — sharper than "avoid generic." Every model was trained on the same SaaS templates, so without active resistance you get the same defaults *regardless of subject*. Name them, then refuse them.
  > Adapted from `pbakaus/impeccable` (Apache-2.0). **These are dated to 2026** — they're accurate now and will age; treat them as a live list, not gospel. Brand register only — in *serve* register... some of these are legitimate."

- `[cross] anti-default-catalog.md:63-69`
  > "## The second-order check (don't just rebound)
  > Avoid not only the category default but the **predictable anti-default rebound** — the move a model makes when told "don't be generic." Fintech-that's-not-navy-and-gold defaults to terminal-native dark mode; wellness-that's-not-sage defaults to brutalist mono. The rebound is as templated as the thing it's fleeing. Make a choice specific to *this* brief, not a reflex away from the obvious one."

- `[cross] art-review.md:157-165` (synthesize / verdict rules)
  > "The **verdict**:
  > - **`revise`** when any A0/A1 remains. List those as **specific, addressable instructions** the builder can act on without you present — name the page, the section, what's wrong, and the concrete fix ("hero is centered with two buttons; recompose as an asymmetric 5:7 split, text flush-left, per the design direction's editorial register"). A2/A3 go in a separate notes list (worth taking, don't gate).
  > - **`approve`** when there are **zero A0 and zero A1** findings — the build honors the direction — **and this is not the first review round** (see the no-first-pass rule below)."

- `[cross] art-review.md:167-179` (no-first-pass-sign-off rule — named decision rule)
  > "**Round 1 must never be a sign-off.** A first look almost always has *something* worth fixing, and a too-easy round-1 approval is exactly the failure this discipline exists to prevent. So on **round 1**:
  > - If you found any A0/A1 → `revise` as normal.
  > - If you genuinely found **no** A0/A1 → you still return **`revise`**, and **promote the 1–3 highest-value refinements** (your best A2 items — the icon/text/alignment/detail improvements that would most lift the build) into the blocking list so the builder makes **one real polish pass**. Mark each promoted item as gating this round (elevate it to A1 for routing purposes) and flag it as promoted, and say in the summary that these are promoted round-1 polish items, not direction violations.
  > This guarantees at least one build→review→**fix**→review cycle. From **round 2 onward** the normal rule applies: `approve` the moment A0/A1 are clear."

- `[cross] art-review.md:184-195` (convergence discipline)
  > "- **Converge from round 2 on, don't chase perfection.** Once the mandatory first revision is done, approve as soon as A0/A1 are clear, even if A2/A3 remain. The bar is "honors the direction and has no obviously-unfinished details," not "flawless." Don't hold the build hostage to taste micro-preferences.
  > - **Round-over-round, only escalate.** On round 2+, judge whether your prior blocking items were fixed. Don't introduce *new* low-value nitpicks you let pass earlier — that's thrash. New A0/A1 only if a revision genuinely broke something or a real defect was missed.
  > - **Cap the loop.** Agree a hard round limit up front (a good default is 3 rounds). If A0/A1 still remain at the cap, proceed anyway with the findings recorded — so make the final round's blocking list the *highest-leverage* fixes, not an exhaustive one."

- `[cross] art-review.md:201-216` (output shape — TS schema for review record)
  > ```ts
  > {
  >   round: number,                       // 1-based
  >   verdict: "approve" | "revise",
  >   summary: string,                     // one paragraph: does the build read as the direction? top issues.
  >   per_section: Array<{
  >     location: string,                  // page/route + section identifier
  >     direction_fidelity: "on" | "drifted" | "off",
  >     findings: Array<{ severity: "A0"|"A1"|"A2"|"A3", issue: string, fix: string }>
  >   }>,
  >   blocking: Array<{ location: string, severity: "A0"|"A1", issue: string, fix: string,
  >                     promoted?: boolean }>,   // promoted:true = a round-1 A2 raised to gate the mandatory first polish pass
  >   notes: Array<{ location: string, severity: "A2"|"A3", issue: string, fix: string }>,
  >   signed_off: boolean                  // true only on verdict "approve"
  > }
  > ```

- `[cross] art-review.md:229-236` (boundaries — role separation)
  > "**The reviewer's deliverable is the punch-list, not the fix.** A build that drifts from the direction is exactly what this review exists to catch, but someone else does the fixing — keep the roles separate even if the same person plays both at different times.
  > **Design taste only.** Functional correctness (build/typecheck, coverage of intended components, route parity, broken links, data delivery) belongs to a correctness QA pass..., don't duplicate it here. If you spot a hard functional break (a section renders nothing, an image 404s everywhere), note it in the summary so it gets caught early, but your severities are about the *look*."

- `[cross] depth-and-texture.md:203-212` — Quick stack checklist ("make this section feel premium")
  > 1. `background:#0a0a0f` dark canvas, `isolation:isolate` on the section.
  > 2. Aurora `::before` (blurred radial spotlights, slow `transform` drift) at `z-index:0`.
  > 3. Product screenshot mid-plane on `perspective:1200px`, ~12° tilt + long directional shadow.
  > 4. Foreground glass cards/chips on a 5-step layered-shadow elevation token scale.
  > 5. One `::after` grain layer, `opacity:.05`, `mix-blend-mode:overlay`, `pointer-events:none`, over everything.
  > 6. Scroll-driven `animation-timeline: scroll()/view()` to move planes at different rates + reduced-motion off-switch.
  > Tokenize `--canvas`, `--glow-*`, `--e0…--e4`, `--glass-bg/-border/-blur`, `--grain-opacity`. Consistency across sections is what reads as "designed," not the individual effects.

- `[cross] design-critique.md:25-33` — Purpose/provenance
  > A repeatable way to *review* an interface, not just admire it... Adapted from `pbakaus/impeccable` (Apache-2.0). Run it honestly — the point is to find the problems, not to award a high number.

- `[cross] design-critique.md:47-58` — Cognitive load classification and working-memory rule
  > Classify load as **intrinsic** (inherent to the task — keep), **extraneous** (caused by the design — cut), or **germane** (builds the user's mental model — keep). Then check:
  > - **Working-Memory Rule:** a person holds **≤ 4 items** at once (Miller's 7±2, revised down by Cowan, 2001). Concretely: **nav ≤ 5** top items, **hierarchy ≤ 3 tiers**, **a form step ≤ 4 fields** before it feels like work.
  > - Watch for named violations — e.g. **"The Wall of Options"** (every choice shown at once with no progressive disclosure), undifferentiated dense tables, dialogs that ask the user to remember something from the previous screen.

- `[cross] design-critique.md:66-72` — Assessment B mechanical checks
  > Pair the judgment above with deterministic checks the eye misses: contrast ratios (AA ≥ 4.5:1 body / 3:1 large), text never clipped or overflowing its container, no skipped heading levels, tap targets ≥ 44px, line length ~45–75ch, design-system tokens actually used (no off-scale one-off colors / radii / fonts). Check by hand or with the build's lint/a11y tooling; if you have an automated contrast/a11y detector available, run it and treat this as the pass it automates.

- `[cross] design-critique.md:74-82` — Severity routing P0–P3
  > **P0** — blocks the core task or excludes a user (unusable control, contrast failure on a primary action, keyboard trap).
  > **P1** — the test: **"would a real user contact support over this?"** If yes, it's at least P1.
  > **P2** — friction or inconsistency that slows people but has a workaround.
  > **P3** — polish, delight, refinement.

- `[cross] design-critique.md:84-90` — Synthesis / peak-end rule
  > Don't just list findings — **weave** the two assessments: note where judgment and mechanical checks agree (high confidence), where the detector flagged something the review missed (and vice-versa), and call out any false positives. Close with a **peak-end read**: what's the emotional high point of the flow, and what's the last thing the user feels? Those two moments disproportionately shape how the whole experience is remembered.

- `[cross] design-direction.md:189-193` — Acceptance criterion
  > `design.md lint` passes with **no `broken-ref` errors**; the `DESIGN.md` covers at least `colors` and `typography`, carries a Do's-and-Don'ts section, and no choice matches an unexamined entry in [anti-default-catalog.md](anti-default-catalog.md).

- `[cross] design-thinking.md:103-114` — B6: Critique framework (I like/I wish/What if + rubric + ordering rule)
  > - **Separate taste from function.** Ban "I like / I don't like." Anchor every note to a goal: user task, hierarchy, readability, conversion, accessibility, brand. "The CTA loses to the image because it has less contrast" beats "the button feels off."
  > - **Structure feedback** with *I like / I wish / What if* — what works, a constructive gap, an exploratory option.
  > - **Dimensions to score** (usable rubric): hierarchy & focal point · spacing & rhythm consistency · alignment/grid discipline · type system · color discipline (accent rationing + contrast) · whitespace · the one bold move (memorability) · motion purposefulness · accessibility (contrast, reduced-motion, focus states) · reads intentional vs templated.
  > - **Order:** section job → hierarchy → system consistency → polish. Don't critique a gradient before the reading order is right.

- `[cross] design-thinking.md:116-120` — Pointer/cross-reference to heavier rubric and anti-default catalog
  > For a heavier structured pass — Nielsen heuristics scored 0–40, cognitive-load checks, test personas, P0–P3 severity — use [design-critique.md](design-critique.md); for the token-level "AI tells" catalog (cream/sand OKLCH band, reflex-reject fonts, ghost-card defects) run a draft against [anti-default-catalog.md](anti-default-catalog.md). The checklist above (B5) and this critique framework (B6) stand on their own when a quick pass is all you need.

- `[cross] experimental-and-creative.md:27-32`
  > This is the layer that takes a section from "clean and modern" to *award-winning*. It is heavier (WebGL, canvas, JS) and **must be rationed**: the research is unanimous — every Awwwards Site-of-the-Day shares **one signature moment that makes you stop scrolling, not twenty effects**. Custom interaction is the single biggest differentiator between award winners and templated/AI sites; **performance is a creative discipline**, not a post-launch pass. So: pick ONE experimental move per page, build it bespoke, make it run at 60fps on a mid-range phone, and gate it behind `prefers-reduced-motion` + lazy init.

- `[cross] experimental-and-creative.md:34-36`
  > This reference reinforces the core law of `section-design-workflow.md`: one bold move + restraint. Experimental tech is *how* you spend the one bold move when CSS isn't enough — not a license to add five more.

- `[cross] experimental-and-creative.md:163-167`
  > **When to reach here vs stay in CSS**: Stay in CSS (other references) for 90% of sections. Reach for this tier only when **one hero/landing moment** is the page's reason to exist and CSS genuinely can't deliver it (true 3D, fluid simulation, cursor-reactive fields, cross-page shared-element morphs). If a CSS aurora + grain + tilt (`depth-and-texture.md`) gets you 90% of the wow at 5% of the cost — do that instead.

- `[cross] frontend-design-principles.md:33-48`
  > This is the taste/point-of-view layer. It pairs with: design-direction.md (recording direction as formal `DESIGN.md`), anti-default-catalog.md (named, current list of AI-design tells), design-critique.md (scored rubric for reviewing a built interface), art-review.md (judging a finished build against the direction), and the `web-section-design` skill covering the premium↔information dial (niche-and-vertical-design.md), trust/proof/E-E-A-T + SEO structure (trust-proof-and-structure.md), and ethical persuasion/conversion (persuasion-and-conversion.md).

- `[cross] frontend-design-principles.md:170-181` — **Restraint + structured critique method**
  > Spend your boldness in one place... Not taking a risk can be a risk itself! Build to a quality floor without announcing it: responsive down to mobile, visible keyboard focus, reduced motion respected. Critique your own work as you build, taking screenshots when possible — a picture is worth 1000 tokens. For a structured pass rather than an impressionistic one — **Nielsen heuristics scored 0–40 with honesty calibration, a cognitive-load / working-memory check (nav ≤ 5, ≤ 3 tiers, ≤ 4 fields), five test personas, and P0–P3 severity routing** — use design-critique.md. Consider Chanel's advice: before leaving the house, take a look in the mirror and remove one accessory. Keep notes on what you've tried across passes — memory of prior attempts helps avoid repeating a rejected idea.

- `[cross] section-archetypes.md:1-3` "Purpose: Convert a content plan into a sitemap, navigation, page blueprints, and deduplicated section catalog."

- `[cross] section-archetypes.md:19-30` Why a catalog rationale: "Almost every page reuses a small set of recurring section *types* (a hero, a feature grid, an FAQ, a CTA band). Instead of describing each page's sections freeform, **collect every section the target site needs and deduplicate them into distinct types**, each with: a stable, unique **key**… a **field shape**… and a flag for whether it **repeats**… or is **global**… This single artifact is what lets a content model and a component library both derive from the same source of truth, instead of drifting apart."

- `[cross] section-archetypes.md:61-97` Section catalog authoring rules (full list) — key sub-items to preserve verbatim:

  - `[cross] section-archetypes.md:65-69` "Map it to the nearest archetype in a section-archetype library (below) and reuse that archetype's field shape instead of inventing a schema from scratch. This is the biggest leverage point in the whole structure phase — archetypes are named to match a corresponding component in the frontend's component catalog, so a mapped section's whole structure → model → component path is already wired."

  - `[cross] section-archetypes.md:81-83` `repeatable: true` rule for collections (FAQs, team members, blog posts, projects).

  - `[cross] section-archetypes.md:84-85` `global: true` rule for shared blocks (header/footer, global CTA banner).

  - `[cross] section-archetypes.md:86-89` "**Default every field to optional.** Only mark a field required when the blueprint *always* supplies a value. A required field with no value blocks the whole page/section from being usable — the single biggest self-inflicted failure mode in this step. Logo/hero media and optional links are the classic over-eager-required offenders: leave them optional."

  - `[cross] section-archetypes.md:90-92` "Prefer a relation/collection over a deep parent-child hierarchy where either would work — simpler relations are easier to populate and query; reach for a hierarchical reference only when the content genuinely has a parent → children shape."

  - `[cross]/[frontend] section-archetypes.md:93-97` "Mark interactive widgets explicitly. When a source or design calls for a slider/carousel (a rotating hero, a testimonial rotator), an accordion, or a tabbed panel, tag that catalog entry's `interactive` field with the widget type. This is the signal the component-building step needs to actually recreate the *behavior* — without it, a rotating hero silently flattens into one static image, which is an easy, easy-to-miss fidelity loss."

- `[cross] section-archetypes.md:117-122` Media asset resolution rule: "**Resolve media fields to a real, resolvable asset reference — never a bare rendered URL and never a screenshot.** …if there's a naming convention with size/variant suffixes, prefer the canonical/original file over a specific srcset variant (a variant-only match is exactly the kind of near-miss that causes downstream tooling to give up and fall back to a screenshot). A slot with no available asset is a real content gap — flag it for asset generation/sourcing, don't paper over it."

- `[cross] section-archetypes.md:129-133` Logo-as-structured-data rule: "**The logo is first-class, not optional prose.** When a logo asset is captured, resolve it to a real file and set it as structured navigation data (`logo: {src, alt, width?, height?}`) — never omit it in favor of a text wordmark. A captured logo with no logo field is exactly the gap that causes the component-building step to hand-write a text `<span>` over what should be a real logo image."

- `[cross] section-archetypes.md:136-142` Dead-link/scope-mismatch rule: "**Keep every link even when its target page wasn't built.** …Don't prune those links down to the built set — a nav with links quietly removed looks broken, and a dangling link 404s either way. Keep the link with its real route; have the frontend resolve any internal route that isn't in the sitemap to a friendly "this page isn't part of the demo/isn't built yet" fallback instead of a raw 404."

- `[cross] section-archetypes.md:154-165` Acceptance checklist (verbatim list) — unique keys, fixed type vocabulary, collection/global marking, `interactive` marker, sitemap references only catalog keys + home route, dangling-link fallback rule, logo field rule.

- `[cross] section-archetypes.md:229-233` "How to use this catalog" closing summary paragraph.

- `[cross]/[frontend] trust-proof-and-structure.md:86-103` **SEO-aware structure** (verbatim, design/dev overlap):
  - "**Semantic HTML:** use `header / nav / main / article / section / footer` over generic `div`s — gives search engines and assistive tech a clear structural picture and improves snippet/rich-result eligibility."
  - "**Heading hierarchy:** exactly **one `H1`** (the page's main title); `H2`/`H3` for nested subsections in order — don't skip levels or pick headings for size (style with CSS). This doubles as the visual hierarchy."
  - "**Above the fold:** the H1 + value proposition + primary action visible without scrolling; crawlers and users both weight it heavily."
  - "**Structured data (JSON-LD):** add schema.org markup (Organization, LocalBusiness, Article, Product, Review, FAQ, BreadcrumbList…) in a `<script type="application/ld+json">` — translates visible content into machine-readable entities for rich results and AI answers. JSON-LD is Google's preferred format."
  - "**Core Web Vitals as a design constraint, not a cleanup pass:** reserve media space with `aspect-ratio`/`width`+`height` to avoid **CLS**; lazy-load below-the-fold; WebP/AVIF; keep the hero light for **LCP**. Sub-3s (ideally sub-1s) load is itself a trust and ranking signal."
  - "**Internal linking + breadcrumbs:** connect related pages (pillar → cluster) for both navigation and crawl depth."
  - "**Pitfall:** designing headings purely for visual size breaks the document outline for SEO and screen readers."

- `[cross]` L1-12 (frontmatter — scope definition, in/out of bounds): "description: >- Design and build distinctive websites, landing pages, and marketing-site interfaces from direction through visual QA of the builds it produces. Use for art direction, DESIGN.md systems, page IA, section composition, typography, color, imagery, motion, conversion-aware layout, CSS/theme implementation, or visual critique of those builds. Include frontend code only when it produces the approved appearance. Do not use for application state or data architecture, backend work, component API engineering, app dashboards and product UI, full accessibility audits, general SEO strategy, growth planning, or standalone design critique of work it did not build, unless the request also requires website design."

- `[cross]` L16-22 (mission and boundary statement): "Own everything between "what should this website look like" and "the pixels on screen match it": direction, structure, per-section craft, appearance-producing code, and visual review gates. This is a website-delivery specialty, not a replacement for general product design or frontend engineering. Engineering that does not change what the user sees—build tooling, state, data fetching, testing, component APIs, and backend behavior—remains outside the skill."

- `[cross]` L24-26 (operating stance for pre-supplied artifacts): "Operate independently when invoked alone. When approved briefs, content, architecture, or design artifacts are supplied, preserve them or report conflicts explicitly. Recommend adjacent skills at handoff; do not invoke them automatically."

- `[cross]` L31-42 (6-phase core workflow — named stages, directly reusable for design/frontend skill split): "## Core workflow
Enter at the earliest stage required by the request; do not replay upstream work when approved artifacts already exist.
1. **Direction:** name the register and point of view; record palette, type, tokens, and signature.
2. **Structure:** produce the sitemap, navigation, page blueprints, and deduplicated section catalog.
3. **Craft:** give each section one bold move and one or two precisely executed devices.
4. **Build:** implement the appearance layer against approved artifacts and the existing stack.
5. **Art review:** inspect rendered evidence section by section and issue an A0-A3 punch list.
6. **Critique gate:** score usability and visual quality, route findings, and decide go/no-go."

- `[cross]` L44-46 (routing discipline / lazy-load principle): "Read only what the job requires. For a multi-part request, select the smallest set of rows that covers the requested artifacts; do not preload all references."

- `[cross]`/routing table, tag per row, L48-71 (full intent→reference→contribution routing table — high-value index, individually tagged):

  - `[cross]` "**Run a scored visual and usability QA gate** | [Design critique](references/design-critique.md) | Severity-routed scorecard and go/no-go decision"

  - `[cross]` "**Trace a technique to its source** | [Sources](references/SOURCES.md) | Provenance and external reading"

- `[cross]` L73-86 (universal invariants — reusable principle set): "## Universal invariants
- Name the register per surface: marketing and brand surfaces reward distinction; dense product surfaces reward earned familiarity.
- Design for the subject and business stakes. Sequence emotional impact, proof, and low-friction action instead of blending them into a generic compromise.
- Give each section depth, one focal point, a meaningful contrast jump, and one bold move supported by no more than one or two devices.
- Use real content and real assets. Do not hide weak decisions behind lorem ipsum, stock imagery, emoji icons, or invented proof.
- Check every result against named defaults and the anti-boring gate; remove one decorative move before shipping.
- Preserve responsive behavior, interaction states, reduced motion, and legibility while pursuing distinctiveness."

- `[cross]` L88-94 (artifact contract): "Produce only the artifacts the request needs. Depending on the selected route, these may include a visual-direction brief, `DESIGN.md`, sitemap and section catalog, section implementation, complete appearance layer, art-review punch list, or scored critique. Every artifact must record its input constraints, material assumptions, and whether code is exploratory, visual-reference, or intended for production integration."

- `[cross]` L96-107 (completion and handoff checklist): "## Completion and handoff
Before completion:
- Confirm every requested page, section, state, or review artifact exists.
- Validate the result at the viewports and interaction states relevant to the request.
- For visual review, state which rendered evidence was actually inspected; never imply screenshot review when only code was available.
- Record unresolved content, asset, accessibility, engineering, SEO, or measurement work with an owner rather than silently absorbing it.
- When downstream implementation or assurance is expected, provide artifact paths, constraints, decisions, risks, and the recommended next skill without duplicating the full artifact."

- `[cross]` L109-114 (adjacent handoffs — non-invocation policy): "Recommend, but do not automatically invoke, adjacent capabilities for asset generation, reusable component API engineering, design-system extraction, full WCAG auditing, specialized browser/media techniques, or throwaway multi-direction prototyping. This skill specifies visual requirements and passes forward the approved artifacts; the adjacent capability owns its specialist output."

**SKILL.md summary**: 8 items lifted (including the 22-row routing table treated as one grouped item with 22 sub-entries individually tagged = 30 discrete lines of value), dominant tag `[cross]` (with `[design]` a close second across the routing table), 115 lines.

- `[cross]` L1-6 (full file — agent interface metadata, verbatim): "interface:
  display_name: "Webdesign"
  short_description: "Distinctive website design, build, and visual QA"
  default_prompt: "Use $webdesign to design and review a distinctive responsive landing page."
policy:
  allow_implicit_invocation: true"

**openai.yaml summary**: 1 item lifted (whole file), tag `[cross]`, 6 lines.


## Sources & provenance [cross]

_Full external-source catalog lifted verbatim from `SOURCES.md` (62 entries across 13 reference-file groups). High-value provenance for every sibling skill; each group tagged by dominant topic._

## File: `/Users/tamas/Documents/Personal/Projects/webdesign/skills/webdesign/references/SOURCES.md`

Full provenance catalog (verbatim, grouped by destination reference file, each source tagged by dominant topic):

### color-and-rhythm.md — `[design]`
- L38: "[OKLCH in CSS: why we quit RGB and HSL — Evil Martians](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl) · [OKLCH: Consistent, accessible palettes — LogRocket](https://blog.logrocket.com/oklch-css-consistent-accessible-color-palettes)"
- L39: "[oklch() — CSS-Tricks Almanac](https://css-tricks.com/almanac/functions/o/oklch/) · [OKLCH Color Picker](https://oklch.com/)"
- L40: "[Modern CSS Color Functions 2026 (OKLCH, color-mix) — ColorPick](https://www.colorpick.app/blog/css-color-functions-2026-guide)"
- L41: "[7 Websites That Incorporate Rhythm — Vanseo Design](https://vanseodesign.com/web-design/rhythm-examples/) · [Dark Mode Websites — Really Good Designs](https://reallygooddesigns.com/dark-mode-websites/)"
- L42: "[Clipping & Masking / duotone with SVG — CSS-Tricks](https://css-tricks.com/clipping-masking-css/)"

### decoration.md — `[design]`
- L46: "[Grainy Gradients — CSS-Tricks](https://css-tricks.com/grainy-gradients/) · [nnnoise generator — fffuel](https://www.fffuel.co/nnnoise/)"
- L47: "[Get Waves](https://getwaves.io/) · [Haikei — generate unique SVG assets](https://haikei.app/) · [6 SVG Pattern Generators — SitePoint](https://www.sitepoint.com/6-incredible-svg-pattern-generators/)"
- L48: "[SVG Generators — Smashing](https://www.smashingmagazine.com/2021/03/svg-generators/) · [Page Separators & Wave Generators — Tucker Triggs](https://www.tuckertriggs.com/blog/page-separators-and-wave-generators)"
- L49: "[CSS Clip-Path Generator — CSS Portal](https://www.cssportal.com/css-clip-path-generator/) · [Blob generator — css-generators](https://css-generators.com/blob/)"

### depth-and-texture.md — `[design]`
- L53: "[Designing Beautiful Shadows in CSS — Josh W. Comeau](https://www.joshwcomeau.com/css/designing-shadows/)"
- L54: "[Smoother & sharper layered box-shadows — Tobias Ahlin](https://tobiasahlin.com/blog/layered-smooth-box-shadows/)"
- L55: "[Grainy Gradients — CSS-Tricks](https://css-tricks.com/grainy-gradients/)"
- L56: "[SVG Filter Effects: Texture with feTurbulence — Codrops](https://tympanus.net/codrops/2019/02/19/svg-filter-effects-creating-texture-with-feturbulence/)"
- L57: "[Grainy CSS Backgrounds Using SVG Filters — freeCodeCamp](https://www.freecodecamp.org/news/grainy-css-backgrounds-using-svg-filters/)"
- L58: "[Aurora CSS Background — Dalton Walsh](https://daltonwalsh.com/blog/aurora-css-background-effect/) · [Aceternity Aurora](https://ui.aceternity.com/components/aurora-background)"
- L59: "[Master Glassmorphism with CSS filters — Trevor Saint](https://trevorsaint.uk/insights/master-glassmorphism-with-css-filters/) · [Glassmorphism — NN/g](https://www.nngroup.com/articles/glassmorphism/)"
- L60: "[Bringing Back Parallax With Scroll-Driven CSS — CSS-Tricks](https://css-tricks.com/bringing-back-parallax-with-scroll-driven-css-animations/) · [Intro to Scroll-Driven Animations — Smashing](https://www.smashingmagazine.com/2024/12/introduction-css-scroll-driven-animations/)"
- L61: "[3D Hover Effect Using CSS Transforms — Let's Build UI](https://www.letsbuildui.dev/articles/a-3d-hover-effect-using-css-transforms/)"
- L62: "[Neumorphism: its rise and fall — Webflow](https://webflow.com/blog/neumorphism)"

### design-thinking.md — `[product]`+`[design]`
- L66: "[The 12 Principles of Design — Toptal](https://www.toptal.com/designers/ui/principles-of-design) · [5 Principles of Visual Design — NN/g](https://www.nngroup.com/articles/principles-visual-design/)"
- L67: "[Visual Hierarchy: Definition — NN/g](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/) · [Structuring a Typographic Hierarchy — Toptal](https://www.toptal.com/designers/typography/typographic-hierarchy)"
- L68: "[AI Slop Web Design: Spotting and Fixing Generic Websites — 925studios](https://www.925studios.co/blog/ai-slop-web-design-guide) · [Why AI-Generated Websites Still Feel Generic — graystud.io](https://graystud.io/blog/why-ai-generated-websites-still-feel-generic)"
- L69: "[The Linear Effect — Rectangle (Daryl Ginn)](https://rectangle.substack.com/p/the-linear-effect) · [Four design principles behind Stripe, Linear, Vercel — Pixeldarts](https://www.pixeldarts.com/en/post/four-design-principles-behind-stripe-linear-and-vercel)"
- L70: "[10-point Design Critique Checklist — Designlab](https://designlab.com/blog/design-critique-checklist-for-ux-designers) · [How to Run a UX Design Critique — UX Tigers](https://www.uxtigers.com/post/design-crit)"

### experimental-and-creative.md — `[design]`
- L74: "[The Study of Shaders with React Three Fiber — Maxime Heckel](https://blog.maximeheckel.com/posts/the-study-of-shaders-with-react-three-fiber/) · [Subtle Shader Background with R3F — Codrops](https://tympanus.net/codrops/2024/10/31/how-to-code-a-subtle-shader-background-effect-with-react-three-fiber/)"
- L75: "[Interactive liquid gradient background with Three.js — Made By Beings](https://madebybeings.com/blog/interactive-liquid-gradient-background-with-three-js-a-step-by-step-tutorial) · [Field Guide to TSL and WebGPU — Maxime Heckel](https://blog.maximeheckel.com/posts/field-guide-to-tsl-and-webgpu/)"
- L76: "[10 Best Particles Animation JS Libraries (2026) — CSS Script](https://www.cssscript.com/best-particles-animation/) · [Custom Cursor with Particle Effects (Cursorly.js) — CSS Script](https://www.cssscript.com/custom-cursor-particle-cursorly/)"
- L77: "[Hovers, Cursors and Cute Interactions — Awwwards](https://www.awwwards.com/awwwards/collections/hovers-cursors-and-cute-interactions/)"
- L78: "[View Transition API — MDN](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API) · [What's new in view transitions (2025) — Chrome](https://developer.chrome.com/blog/view-transitions-in-2025) · [Cross-Document View Transitions: The Gotchas — CSS-Tricks](https://css-tricks.com/cross-document-view-transitions-part-1/)"
- L79: "[Award-Winning Web Design: Judging Criteria Decoded — Utsubo](https://www.utsubo.com/blog/award-winning-website-design-guide) · [A Guide on Building Awwwards Worthy Websites — Alex Streza](https://medium.com/@alex.streza/a-guide-on-building-awwwards-worthy-websites-c4fa710b1c43)"

### frontend-build-patterns.md — `[frontend]`
- L83: "[frontend-guidelines — Ben De Cock (bendc)](https://github.com/bendc/frontend-guidelines)"

### imagery.md — `[design]`
- L87: "[Layout Breakouts — Ryan Mulligan](https://ryanmulligan.dev/blog/layout-breakouts/) · [Full Bleed — CSS-Tricks](https://css-tricks.com/full-bleed/)"
- L88: "[Blob Shapes using clip-path: shape() — Frontend Masters](https://frontendmasters.com/blog/creating-blob-shapes-using-clip-path-shape/) · [clip-path — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path) · [Clippy](https://bennettfeely.com/clippy/)"
- L89: "[SVG Mask Transitions on Scroll — Codrops](https://tympanus.net/codrops/2026/03/11/svg-mask-transitions-on-scroll-with-gsap-and-scrolltrigger/) · [Image reveal with mask — Jonas Sandstedt](https://jonassandstedt.se/blog/image-reveal-effect/)"
- L90: "[Designing Accessible Text Over Images — Smashing](https://www.smashingmagazine.com/2023/08/designing-accessible-text-over-images-part1/) · [Responsive Scrim — Travis Horn](https://travishorn.com/responsive-scrim/)"
- L91: "[CSS Masonry & CSS Grid — CSS-Tricks](https://css-tricks.com/css-masonry-css-grid/) · [Masonry — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Masonry_layout)"
- L92: "[Anatomy of a CSS Phone Mockup — Conor Luddy](https://www.conor.fyi/writing/anatomy-of-a-css-phone-mockup)"
- L93: "[Scroll-Driven Animations — Chrome for Developers](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) · [The aspect-ratio property — web.dev](https://web.dev/articles/aspect-ratio)"
- L94: "[Ken Burns Effect Using CSS — kirupa](https://www.kirupa.com/html5/ken_burns_effect_css.htm)"

### layout-and-composition.md — `[design]`
- L98: "[Full-Bleed Layout with CSS Grid — Josh W. Comeau](https://www.joshwcomeau.com/css/full-bleed/)"
- L99: "[Layout Breakouts with CSS Grid — Ryan Mulligan](https://ryanmulligan.dev/blog/layout-breakouts/)"
- L100: "[Editorial Design Patterns With CSS Grid And Named Columns — Smashing](https://www.smashingmagazine.com/2019/10/editorial-design-patterns-css-grid-subgrid-naming/)"
- L101: "[Bento grid layout with CSS Grid and container queries — iamsteve](https://iamsteve.me/blog/bento-layout-css-grid)"
- L102: "[Building a Bento Grid Layout with Modern CSS Grid — WeAreDevelopers](https://www.wearedevelopers.com/en/magazine/682/building-a-bento-grid-layout-with-modern-css-grid-682)"
- L103: "[Four design principles behind Stripe, Linear, and Vercel — Pixeldarts](https://www.pixeldarts.com/en/post/four-design-principles-behind-stripe-linear-and-vercel)"
- L104: "[Complete guide to Blueprint Grid design — Setproduct](https://www.setproduct.com/blog/complete-guide-to-blueprint-grid-design)"
- L105: "[Visual hierarchy with F and Z patterns — 99designs](https://99designs.com/blog/tips/visual-hierarchy-landing-page-designs/)"
- L106: "[Design Principles: Compositional Balance — Smashing](https://www.smashingmagazine.com/2015/06/design-principles-compositional-balance-symmetry-asymmetry/)"
- L107: "[An Introduction to Broken Grid Layouts — HubSpot](https://blog.hubspot.com/website/broken-grid-layouts)"
- L108: "[Gestalt Principles — Wix/Wixel](https://www.wix.com/wixel/resources/gestalt-principles)"
- L109: "[Negative Space in Webpage Layouts — WebFX](https://www.webfx.com/blog/web-design/negative-space-in-webpage-layouts-a-guide/) · [Atlassian Spacing](https://atlassian.design/foundations/spacing)"

### motion-and-interaction.md — `[design]`
- L113: "[Scroll-Driven Animations — Josh W. Comeau](https://www.joshwcomeau.com/animation/scroll-driven-animations/) · [CSS scroll-driven animations / Timelines — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)"
- L114: "[Get started with scroll-driven animations — Google Codelabs](https://codelabs.developers.google.com/scroll-driven-animations)"
- L115: "[ScrollTrigger docs — GSAP](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) · [Horizontal Scrolling Section — Web Bae](https://www.webbae.net/posts/horizontal-scrolling-section-with-pin-and-fade-effects)"
- L116: "[3D Hover Effect Using CSS Transforms — Let's Build UI](https://www.letsbuildui.dev/articles/a-3d-hover-effect-using-css-transforms/)"
- L117: "[Infinite-Scrolling Logos in HTML & CSS — Smashing](https://www.smashingmagazine.com/2024/04/infinite-scrolling-logos-html-css/) · [Infinite Marquee using Modern CSS — Frontend Masters](https://frontendmasters.com/blog/infinite-marquee-animation-using-modern-css/)"
- L118: "[Lenis — GitHub](https://github.com/darkroomengineering/lenis) · [Intersection Observer scroll animations — DEV](https://dev.to/ljcdev/introduction-to-scroll-animations-with-intersection-observer-d05)"
- L119: "[Duration & Easing — Material Design](https://m1.material.io/motion/duration-easing.html)"

### niche-and-vertical-design.md — `[product]`
- L123: "Architecture: [Hinge Marketing](https://hingemarketing.com/blog/story/5-essential-features-of-an-architecture-firms-website) · [Archmark](https://www.archmark.co/5-website-design-tips-for-architects) · [ArchDaily](https://www.archdaily.com/996547/5-website-design-tips-for-architects) · [Pixpa](https://www.pixpa.com/blog/how-to-make-an-architecture-portfolio)"
- L124: "Interiors/agency/luxury: [March Branding](https://marchbranding.com/design-insight/25-best-interior-designer-websites) · [Webflow — Luxury](https://webflow.com/blog/luxury-brand-websites) · [Theoriq — Agency](https://www.theoriq.fr/en/post/high-converting-agency-website-examples) · [HubSpot — Luxury](https://blog.hubspot.com/website/luxury-websites)"
- L125: "Photographers/artists: [Format — Portfolios 101](https://www.format.com/photography-portfolio) · [Format — Fine Art](https://www.format.com/magazine/fine-art-portfolio-strategies)"
- L126: "Law/finance/healthcare: [Torro — Law](https://torro.io/blog/law-firm-web-design-in-2025) · [Kitces — Financial Advisor](https://www.kitces.com/blog/financial-advisor-website-design-tips-marketing-conversions-trust-credibility-strategies-tinyfrog-technologyies/) · [Digital Roots — Medical](https://www.digitalrootsmedia.com/blog/healthcare/medical-website-design-hipaa-trust-conversions/)"
- L127: "Real estate/SaaS/services: [Vide Infra — Luxury RE](https://videinfra.com/blog/luxury-real-estate-website-design-principles-strategy-and-best-practices) · [Genesys Growth — SaaS LP](https://genesysgrowth.com/blog/designing-b2b-saas-landing-pages) · [Hinge — Pro Services](https://hingemarketing.com/blog/story/b2b-website-design-trends-that-work-for-professional-services)"

### persuasion-and-conversion.md — `[product]`
- L131: "[The 7 Principles of Conversion-Centered Design — Unbounce](https://unbounce.com/conversion-centered-design/) · [Cialdini's 7 Principles — CXL](https://cxl.com/blog/cialdinis-principles-persuasion/)"
- L132: "[Cognitive Biases in UX — Lyssna](https://www.lyssna.com/blog/cognitive-biases-in-ux/) · [The 21 Laws of UX — UX Design Institute](https://www.uxdesigninstitute.com/blog/laws-of-ux/)"
- L133: "[How to Build a High-Converting Landing Page — CXL](https://cxl.com/blog/how-to-build-a-high-converting-landing-page/) · [Above the Fold — CXL](https://cxl.com/blog/above-the-fold/)"
- L134: "[Lindgaard et al. — 50ms first impression](https://www.tandfonline.com/doi/abs/10.1080/01449290500330448) · [First Impressions & Automatic Processing — NN/g](https://www.nngroup.com/articles/first-impressions-human-automaticity/)"
- L135: "[Branding Myths: Color Psychology — Branding Bullshit](https://www.brandingbullshit.com/p/branding-myths-color-psychology) · [CTA Button Best Practices — Kissmetrics](https://kissmetrics.io/blog/cta-button-best-practices)"
- L136: "[Pricing Page Psychology 2026 — Digital Applied](https://www.digitalapplied.com/blog/subscription-pricing-page-psychology-decision-framework-2026) · [Why Minimalism Sells Luxury — Get Therapy Birmingham](https://gettherapybirmingham.com/the-psychology-of-empty-space-why-minimalism-sells-luxury-but-clutter-sells-bargains/)"
- L137: "[FTC Report on Dark Patterns (2022)](https://www.ftc.gov/news-events/news/press-releases/2022/09/ftc-report-shows-rise-sophisticated-dark-patterns-designed-trick-trap-consumers) · [Deceptive Design — Brignull](https://www.deceptive.design/book/contents/chapter-15)"

### trust-proof-and-structure.md — `[product]`
- L141: "[Google E-E-A-T: How to Demonstrate First-hand Experience — Search Engine Journal](https://www.searchenginejournal.com/google-e-e-a-t-how-to-demonstrate-first-hand-experience/474446/) · [Creating Helpful, People-First Content — Google](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)"
- L142: "[8 Trust Signals You Need on Your Website — Webstacks](https://www.webstacks.com/blog/trust-signals) · [Social Proof & Trust Signals for CRO — Discovered Labs](https://discoveredlabs.com/blog/social-proof-and-trust-signals-for-conversion-rate-optimization-implementation-and-impact)"
- L143: "[Information Architecture vs Navigation — Optimal Workshop](https://www.optimalworkshop.com/blog/information-architecture-vs-navigation-creating-a-seamless-user-experience) · [Website Navigation Best Practices — Lovable](https://lovable.dev/guides/website-navigation-best-practices-that-convert)"
- L144: "[Semantic HTML for SEO — Search Atlas](https://searchatlas.com/blog/semantic-html/) · [HTML Heading Hierarchy (H1–H6) — Devtrios](https://devtrios.com/blog/html-heading-hierarchy/) · [Structured Data for SEO — Wix](https://www.wix.com/seo/learn/resource/structured-data-for-seo)"
- L145: "[Design Better B2B Case Studies — Stryve](https://www.stryvemarketing.com/blog/design-b2b-case-studies/) · [How to Design an Effective Case Study Section — Articulate](https://www.articulatemarketing.com/blog/how-to-design-an-effective-case-study-section-for-your-website)"

### typography.md — `[design]`
- L149: "[Fluid Type Scale Calculator](https://www.fluid-type-scale.com/) · [CSS Clamp Generator](https://clampgen.com/)"
- L150: "[Modern Web Typography Techniques (2025) — FrontendTools](https://www.frontendtools.tech/blog/modern-web-typography-techniques-2025-readability-guide)"
- L151: "[Responsive Typography Beyond clamp() — Roberto Moreno](https://robertcelt95.medium.com/responsive-typography-that-actually-works-beyond-font-size-clamp-acf592b79774)"
- L152: "[Best Sans & Serif Font Pairings 2025 — Pangram Pangram](https://pangrampangram.com/blogs/journal/best-font-pairings-2025) · [Best Google Font Pairings for UI 2025 — Matt Medley](https://medley.ltd/blog/best-google-font-pairings-for-ui-design-in-2025/)"
- L153: "[Kinetic Typography: Bold Text Replacing the Hero Image — Bulb Studio](https://www.bulbstudio.in/post/kinetic-typography-why-bold-text-is-replacing-the-hero-image) · [14 Websites with Oversized Experimental Typography — htmlburger](https://htmlburger.com/blog/oversized-experimental-typography-examples/)"
- L154: "[Top Web Design Trends — Figma](https://www.figma.com/resource-library/web-design-trends/)"

**SOURCES.md summary**: 62 source entries lifted across 13 reference-file groups, dominant tag `[design]` (with meaningful `[product]` and `[frontend]` clusters), 155 lines.

---
