# Surface: Mobile (iOS/Android)

Purpose: Reshape discovery, positioning, and the PRD for a native or cross-platform mobile app,
where store context, platform permissions, and short interruption-driven sessions are product
constraints — not UI craft, which stays with `design`/`frontend`.

Read when:
- The surface is a mobile app distributed through the App Store or Play Store.

Skip when:
- The actual surface is a responsive web app with no store distribution — use
  [App & SaaS](surface-app-saas.md).
- The request is mobile-web marketing content — use [Website](surface-website.md).

Inputs:
- Target platform(s) and distribution model (free/paid/subscription).
- Store category and competitor set, if known.

Produces:
- ASO framing (category, keyword strategy) feeding [Positioning](positioning.md).
- A permission/platform-constraint list feeding [PRD](prd.md) and [Risk register](risk-register.md).
- A release-channel plan feeding [Handoff](handoff.md).

## Shifts

- **Discovery.** Sessions are short and interruption-driven — frame jobs around
  notification-triggered re-entry, not desk-bound deep sessions.
- **Positioning.** The store listing's category and keyword strategy (ASO framing) is a
  product-level decision made here; the listing copy/screenshots themselves are `marketing`'s
  execution.
- **PRD.** Platform permissions (camera, location, notifications, health data, etc.) are product
  constraints and acceptance criteria — state the minimum permission set and the fallback UX when a
  permission is denied. Note OS-version support and store-review-guideline limits as scope
  boundaries, not implementation detail.
- **Metrics.** Add the install→activation funnel and store-health metrics (rating, review velocity,
  uninstall rate) to the metric tree alongside in-app activation/retention.
- **Risk register.** Track store-review rejection risk, platform-policy risk (data/permission use),
  OS-fragmentation risk, and staged-rollout risk as named entries.

**Recommends:** `design` for platform interaction patterns (iOS HIG / Material conventions);
`frontend` for native/cross-platform implementation; `marketing` for ASO execution and
store-listing copy.
