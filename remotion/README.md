# remotion — hero animation

The hero animation for the **product** skill's site. 16:9, 28s, loops.

The palette in [`src/theme.ts`](src/theme.ts) mirrors `site/index.html`'s `:root` tokens
exactly, so the video reads as part of the page in both light and dark.

## Commands

```bash
npm i                     # install (node_modules is gitignored)
npm run dev               # Remotion Studio preview
```

Render the two theme variants + poster stills into the site (paths are relative to this dir):

```bash
npx remotion render hero-light ../site/assets/hero-light.mp4 --codec=h264 --crf=23
npx remotion render hero-dark  ../site/assets/hero-dark.mp4  --codec=h264 --crf=23
npx remotion still hero-light ../site/assets/hero-light-poster.png --frame=815
npx remotion still hero-dark  ../site/assets/hero-dark-poster.png  --frame=815
```

The page (`site/index.html`) swaps `hero-{light,dark}.mp4` on theme change and falls back to
the poster PNG (and to the CSS arc diagram) when video/motion is unavailable. Pick the poster
`--frame` on the most representative diagram beat, not frame 0.

Rendered videos are multi-megabyte binaries. If `git push` fails with HTTP 400, raise the buffer
for that push: `git -c http.postBuffer=524288000 push`.

## Pace every scene for a reader, not the author

The single most common defect in these videos is switching too fast: a scene's text finishes
animating in and the fade-out starts immediately, so a first-time viewer never gets to read it.
This is the default failure of the placeholder composition — fix it when you re-author. Build each
scene as three explicit phases:

```text
animate IN  →  HOLD fully still (a reading beat)  →  fade OUT
```

- Size the **hold** to the text: ~2.3s for a short line, up to ~4s for a dense grid or code block.
  Read the scene aloud at a natural pace; that is the floor.
- Compute duration as `dur = content-in-end + reading-hold + fade`. The fade-out must begin at
  `dur − fade`, **after** every element has finished appearing — never at or before the last element
  lands (that yields zero or negative reading time, the exact bug this note exists to prevent).
- Verify before a full render: `npx remotion still <id> <out> --frame=N` at the middle of each hold,
  and confirm the scene is complete and legible.

A whole hero typically runs ~45–60s once every scene holds long enough to read; a 15s cut of the
same content is almost always too fast. Keep the 28s default only if every scene still passes the
read-aloud test.

## AI authoring skills (prepacked)

The official Remotion authoring skills ([remotion-dev/skills](https://github.com/remotion-dev/skills))
are prepacked in this repository — tracked under `.agents/skills/` and symlinked from
`.claude/skills/` — so any agent storyboarding or re-authoring the hero finds them without
installing anything. Refresh them to the latest upstream versions with:

```bash
npx skills add remotion-dev/skills
```

The installer also drops symlinks into the runtime `skills/` directory; those are gitignored and
`scripts/init` removes them — the installable pack must never ship them. When a repository is
initialized without `--video`, `scripts/init` strips the authoring skills along with this project.
