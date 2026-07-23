# Installation

Install the `product` runtime pack from the independently versioned
`gabros20/product-skill` repository.

## Prerequisites

- An Agent Skills-compatible client.
- TODO: Add only real skill-specific tools, credentials, or runtime requirements.

## Install with skills.sh

```bash
npx skills add gabros20/product-skill
```

## Clone and install

```bash
git clone https://github.com/gabros20/product-skill.git
cd product-skill
./install.sh codex
```

Available targets:

| Argument | Destination |
|---|---|
| `codex` | `${CODEX_HOME:-$HOME/.codex}/skills/product/` |
| `agents` | `~/.agents/skills/product/` |
| `claude` | `~/.claude/skills/product/` |
| `cursor` | `~/.cursor/skills/product/` |
| `antigravity` | Gemini IDE and Antigravity CLI skill paths |
| `opencode` | `~/.config/opencode/skills/product/` |
| `grok` | `~/.grok/skills/product/` |
| `hermes` | `~/.hermes/skills/product/` |
| `all` | Claude, Codex, and the cross-agent path |

The installer stages a complete copy before replacing an existing installation. If replacement
fails, it restores the previous copy.

## Verify

Start a new client session and use the client's supported invocation form:

- Codex: `$product`
- Slash-command clients: `/product`
- Other clients: an `@` mention, skill tool, or natural-language trigger

For Codex, verify the installed files directly:

```bash
test -f "${CODEX_HOME:-$HOME/.codex}/skills/product/SKILL.md"
```

## Update

```bash
cd product-skill
git pull --ff-only
./install.sh codex
```

Review `CHANGELOG.md` and GitHub Releases for version history. Version metadata intentionally stays
outside runtime `SKILL.md`.

## Uninstall

```bash
rm -rf "${CODEX_HOME:-$HOME/.codex}/skills/product"
```
