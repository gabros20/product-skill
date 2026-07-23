# Surface: App & SaaS

Purpose: Reshape discovery, business-model, PRD, and metrics for a web or desktop application with
accounts and ongoing usage — the job recurs every session, and revenue is a lifecycle, not a
one-time conversion.

Read when:
- The surface is a web/desktop application or SaaS product with accounts and recurring usage
  (whether or not it charges).

Skip when:
- A marketing site sits in front of the app — that surface is [Website](surface-website.md); use
  this file for the app itself.
- The surface is a mobile app — use [Mobile](surface-mobile.md) for the store/platform layer, and
  layer this file's activation/retention framing underneath it.

Inputs:
- The target segment and its recurring job-to-be-done.
- Existing usage data if any — activation funnel, retention curve, current pricing.

Produces:
- An activation/retention metric tree feeding [Metrics](metrics.md).
- A pricing-tier hypothesis feeding [Business model](business-model.md).
- An onboarding + core-loop scope feeding [PRD](prd.md).

## Shifts

- **Discovery.** Frame around activation (the "aha moment") and retention jobs, not a single
  conversion event — the job recurs every session, so churn is a discovery question, not just a
  metrics one.
- **Business model.** Pricing is tiered and lives inside a commercial lifecycle
  (trial → paid → expansion → renewal/churn). Choose a usage- or seat-based value metric and apply
  tier psychology (three tiers, center-stage effect, decoy) from [Business model](business-model.md)
  §2.
- **PRD.** Onboarding and the core loop are always first-class scope sections, not implicit. State
  time-to-first-value and the loop's repeat trigger as acceptance criteria, alongside feature
  behavior.
- **Metrics.** The north star decomposes into an activation/retention/MRR/churn metric tree
  (HEART/AARRR), not a single conversion number. Guardrails watch churn and support load, not bounce
  rate.
- **Risk register.** Track churn/retention risk, activation-drop risk, and pricing-tier
  cannibalization as named entries, not generic "market risk."

**Recommends:** `design` for product UX, states, and IA; `frontend` for implementation; `growth` for
funnel experiments and PLG loops; `success` for onboarding and support.
