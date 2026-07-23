# Skill repository release checklist

Work top to bottom. A derived repository is expected to fail `scripts/check-sync` until every
release-critical placeholder has been replaced.

## 1. Instantiate

- [ ] Create the GitHub repository as `<skill>-skill` while keeping the runtime identifier short.
- [ ] Run `scripts/init` once, choosing `--site` and `--video` only when needed.
- [ ] Confirm `.codex-plugin/plugin.json` uses `<skill>-skill` and `skills/<skill>/SKILL.md` uses
      `<skill>`.
- [ ] Confirm no unresolved `__SKILL_*__`, `__REPO_NAME__`, color, or year tokens remain outside
      the template tooling itself.

## 2. Build the runtime skill

- [ ] Replace the `SKILL.md` description with outcome, trigger vocabulary, and close-neighbor
      exclusions.
- [ ] Fill mission, boundary, routes, universal invariants, workflow, artifact contract, validation,
      and handoff behavior.
- [ ] Replace `references/example.md`; create only references with observable loading conditions.
- [ ] Give every reference its primacy header and an early contents list when it exceeds 100 lines.
- [ ] Add runtime scripts or assets only when the workflow actually uses them; test every script.
- [ ] Ensure standalone use never depends on a sibling repository or silently invokes another skill.

## 3. Package and describe

- [ ] Fill `skills/<skill>/agents/openai.yaml`; keep the short description at 25-64 characters and
      mention `$<skill>` in the default prompt.
- [ ] Fill `.codex-plugin/plugin.json`; keep release versioning here rather than in `SKILL.md`.
- [ ] Replace activation, traversal, output, and compression-ablation eval placeholders with
      realistic cases, including adjacent-skill near misses.
- [ ] Update `install.sh` only for real host-specific prerequisites or install behavior.

## 4. Write the storefront

- [ ] Rewrite README for users: outcome, boundary, install, examples, outputs, docs, evaluations,
      releases, contribution, and license.
- [ ] Update `docs/installation.md`, `docs/usage.md`, and useful recipes; delete unused skeleton docs.
- [ ] Add research, design notes, or ADRs only for decisions future maintainers need to understand.
- [ ] Fill `CONTRIBUTING.md` with repository-specific validation and release commands.

## 5. Optional site and video

- [ ] If `--site` was selected, read [site/README.md](site/README.md) first and run a real design
      pass: inventory the skill's mental model, reshape the section list to match it, and build
      purpose-built section components. Filling the skeleton's `TODO`s is not a site.
- [ ] Keep the shared family chrome and this skill's unique accent triple; every claim, trigger
      phrase, and reference filename on the page must be true of the shipped pack.
- [ ] If `--video` was selected, storyboard and re-author the Remotion hero for this skill's core
      loop — the prepacked composition is a placeholder — using the prepacked Remotion authoring
      skills in `.agents/skills/`, then render verified light/dark videos and posters. Without
      video, verify the static poster/diagram fallback.
- [ ] Render `og.png` from `og-source.html`; put real production URLs in `llms.txt`,
      `sitemap.xml`, and `robots.txt`; deploy, claim a clean `*.vercel.app` alias if the default
      name is taken, and disable deployment protection.
- [ ] Treat README as the primary storefront even when a site exists.

## 6. Validate and release

- [ ] Configure the GitHub About area with `gh repo edit gabros20/<skill>-skill`: a one-sentence
      `--description` in the family style ("Agent skill for … — …", under 350 characters), the
      canonical site alias as `--homepage` (never the auto-generated `*-<hash>.vercel.app`
      deployment URL), and topics via `--add-topic` — the family base set
      `agent-skills ai-agents claude claude-code` plus this skill's domain topics.
- [ ] Run `scripts/check-sync` and `scripts/count-skill-tokens`.
- [ ] Run realistic activation and traversal cases multiple times; inspect selected-file traces.
- [ ] Compare a representative output against no-skill and previous-version baselines.
- [ ] Update `.codex-plugin/plugin.json` and `CHANGELOG.md` to the same semantic version. For a
      site- or video-only refresh that leaves `skills/<skill>/` untouched, still cut a patch bump so
      the deployed site and the release tag stay in parity, and scope the CHANGELOG entry
      explicitly (e.g. "visual-guide refresh, runtime pack unchanged").
- [ ] Create and push `v<version>`, then publish the matching GitHub Release.
- [ ] Install the released skill into a clean host session and run one end-to-end smoke test.
- [ ] Remove this checklist and rewrite `AGENTS.md` and `CLAUDE.md` for the skill's actual boundary,
      invariants, validation, and release workflow.
