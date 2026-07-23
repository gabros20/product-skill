# site — design brief for the skill's visual guide

This folder is a **scaffold, not the deliverable**. Shipping it with the TODOs filled in is a
failed site. The agent building the site owns a real design pass: the page's sections, components,
information structure, and hero visualization must be designed for **this** skill, the way
[orchestrate-skill.vercel.app](https://orchestrate-skill.vercel.app) was designed for orchestrate.

## Shared chrome, unique identity

Every skill site in the family shares one chrome so the family reads as one product line:

- The type system, spacing, and layout grammar of `index.html`.
- Light/dark theming driven by the `:root` tokens.
- The hero-terminal motif and the "Start here" section shape.
- The footer, favicon geometry, and og-image composition.

Identity comes from two places, and only the first is free:

1. **The accent triple** — `<accent-light-hex> <accent-dark-hex> <oklch-hue>` passed to
   `scripts/init`, rendered into the site tokens and mirrored in `remotion/src/theme.ts`. One hue
   per skill, unique across the family.
2. **Everything designed below** — sections, diagrams, and the hero animation, purpose-built for
   this skill's content.

## Design the page before editing HTML

Work in this order; do not open `index.html` first.

1. **Inventory the skill's mental model.** Read the shipped `SKILL.md` and references. What is the
   skill's actual shape — a staged arc, a strategy matrix, a faceted router, a review loop? What
   are its invariants, artifacts, and trigger phrases?
2. **Derive the information structure from that model.** The skeleton's section list (arc →
   stages → laws → start-here) fits some skills and not others. Add, remove, merge, and reorder
   sections until the page teaches this skill's model — a 9-strategy skill wants a strategy
   gallery; a faceted router wants a facet-composition diagram; a review-gated skill wants the
   loop drawn.
3. **Design a purpose-built component per section.** Route tables, facet matrices, state grids,
   annotated terminal transcripts, CSS diagrams — composed from the shared tokens, designed for
   the content they carry. Never leave a section as restyled placeholder prose.
4. **Write copy that is true of the shipped pack — and covers its *whole* surface.** Real trigger
   phrases, real reference filenames, real invariant wording, real install commands; anything the
   page claims must exist in `skills/<skill>/`. The common failure is the opposite of lying: the
   site over-indexes on the most *demoable* slice and under-represents the rest, so the page reads
   as a narrower skill than shipped. Audit the sections and the hero against the full route/feature
   table in `SKILL.md` — if the pack is register- or facet-balanced, the page and the video must be
   too. Represent every branch the skill actually owns, not just the photogenic one.

## The Remotion hero

The prepacked composition in `../remotion/` is a **placeholder to be replaced**, not an asset to
re-render. Storyboard a visualization of this skill's core loop or arc — the thing an expert would
sketch on a whiteboard to explain it — then author it as the hero. Requirements:

- Palette comes from `remotion/src/theme.ts`, which must keep mirroring the site `:root` tokens so
  the video reads as part of the page in both themes.
- Render light and dark variants plus poster stills into `site/assets/` (commands in
  [`../remotion/README.md`](../remotion/README.md)); the composition must loop cleanly.
- The page falls back poster → static CSS diagram when video or motion is unavailable; keep both
  fallbacks legible.
- The official Remotion authoring skills are prepacked at `.agents/skills/` (symlinked from
  `.claude/skills/`) — use them for this work; refresh with `npx skills add remotion-dev/skills`
  if they've drifted from upstream (details in [`../remotion/README.md`](../remotion/README.md)).

## Ship checklist

- No `TODO` or template token left anywhere in `site/`.
- `og.png` rendered from `og-source.html`; `llms.txt`, `sitemap.xml`, and `robots.txt` carry the
  real production URLs.
- Deployed with the Vercel CLI; when the default project name is taken, claim a clean, readable
  `*.vercel.app` alias and disable deployment protection so the site is publicly reachable.
- **Re-point the canonical alias after every deploy.** `vercel --prod` auto-aliases the new
  deployment to a *different* auto-generated URL, silently detaching your clean alias. Immediately
  run `vercel alias set <new-deployment-url> <canonical-alias>` and verify the canonical URL serves
  the new build (compare bytes, not just a 200) before considering the deploy done.
- The canonical alias — never an auto-generated deployment URL — becomes the repository homepage
  in the GitHub About area (TEMPLATE-CHECKLIST §6).
