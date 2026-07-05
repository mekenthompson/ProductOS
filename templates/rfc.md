---
title: RFC
description: "A JTBD-led, AI-readable RFC for a ship-coupled delivery: defines the user's job, how they fail today, what success and failure look like, and the guardrails, leaving the solution open"
# Doc-class keys (use exactly one):
#   serves: <job-spec-slug>     # ship-coupled RFC delivering a job; archives when shipped
#   backs: <invariant-slug>     # design record elaborating/defending an invariant; stays current
last_reviewed: 2026-06-24
icon: "📄"
---

# RFC: [Name]

> [!NOTE]
>
> One living document for a single ship-coupled effort. It does the work that used to be split between a PRD (the decision and the why) and a delivery spec (the constraints), but frames everything around the **user's job**, not our internal launch. It leaves *how* open: solutions are the team's (and the AI's) creative work, not the RFC author's prescription. The durable home of the job is its [Job Spec](./job-spec.md); this RFC is one ship-coupled effort against it.
>
> **Two doc-class variants:** a `serves:` RFC delivers a job and archives when shipped. A `backs:` design record elaborates or defends a named invariant and stays current: it is not ship-coupled and does not archive.

---

## Status

| Field | Value |
|---|---|
| **Status** | Draft \| In Review \| Approved \| Building \| Shipped \| Archived |
| **Owner** | [Name] |
| **Approver** | [Name, role] |
| **Approval date** | YYYY-MM-DD |
| **Advances outcome** | [which named vision outcome this RFC moves] |
| **Serves job spec** | [link to the Job Spec it delivers against] |
| **Tracker** | [Link to project in your issue tracker] |

---

## TL;DR

Three sentences:
1. **The job** the user is trying to do.
2. **What success looks like** for them (and for the headline metric).
3. **The biggest constraint** the solution must respect.

---

## The Job

Lead with the customer's job. Not our feature. Not our roadmap. The job they're trying to get done.

> **When** `[situation]`, **`[persona]` wants to** `[motivation]`, **so they can** `[outcome they care about]`.

> [!TIP]
>
> If this job has a standing [Job Spec](./job-spec.md), link it here instead of restating it. The Job Spec is the durable home of the job: it outlives this RFC; this RFC is one ship-coupled effort against it.

**Primary persona:** `[Creator / Consumer / Sponsor, or your persona name]`
**Secondary persona(s) affected (if any):** `[…]`

See [JTBD Guide](../guides/jtbd-guide.md) for framing the job and the forces around it.

---

## How Users Fail Today

The struggling moments. Specific scenarios where the user can't get the job done, gets stuck, gets confused, or gives up.

For each struggling moment: *the situation, what the user is trying, what goes wrong, what they do instead, and the evidence we have that this happens.*

1. **Struggling moment 1 -- [short name]**
   - *Situation:* …
   - *What the user is trying to do:* …
   - *Where it breaks:* …
   - *Current workaround:* …
   - *Evidence:* `[link to research, customer quote, support ticket pattern, analytics]`

2. **Struggling moment 2 -- [short name]**
   - *Situation:* …
   - …

3. **Struggling moment 3 -- [short name]**
   - …

> Three is usually enough. If you can name fewer than two struggling moments with evidence, do more discovery before writing the RFC.

---

## Competing Solutions

What the user hires *today* to get this job done. List the alternatives (competitors **and** the status-quo / "do nothing" option) and for each, why it fails the job. If nothing here beats "do nothing," you don't have a case yet.

| Solution | Limitation (why it fails the job) |
|---|---|
| `[Competitor / tool]` | … |
| `[Manual workaround / status quo]` | … |
| **Do nothing** | … |

---

## User Success Modes

What success looks like **from the user's perspective**. Not "we shipped on time": what the user is now able to do, feel, or decide.

- **Behavioural signal** -- User now does X without help / Without errors / Within Y seconds. Observable in product analytics.
- **Felt experience** -- When asked, the user describes the experience as `[adjective]`. Observable in NPS verbatims, interviews, or support ticket sentiment.
- **Headline-metric movement** -- Specifically, this should move `[headline metric]` by `[amount]` for `[persona]`. Measured at `[interval]`.
- **Leading indicators (≤ 2 weeks post-launch)** -- `[signal 1]`, `[signal 2]`; early reads on whether success is on track.

---

## User Failure Modes

What "this didn't work" looks like **from the user's perspective**. This is the bit teams usually skip. Be specific. If we can't name how the user would fail, we don't understand the job well enough.

| Failure mode | What the user experiences | Root cause we'd suspect | Detection signal |
|---|---|---|---|
| **Hard failure** | User can't complete the job at all. | … | … |
| **Soft failure** | User completes the job but is worse off than before (slower, less confident, more steps). | … | … |
| **Silent failure** | User appears to succeed but didn't actually get the outcome they wanted. (Often the most damaging: looks fine in analytics.) | … | … |
| **Adoption failure** | The right persona never finds or tries the feature. | … | … |

**Anti-patterns to watch:**
- *Looks like success, isn't:* `[e.g., increased clicks that come from confusion]`
- *Looks like failure, isn't:* `[e.g., usage drop because the user finished the job faster]`

**When to stop or pivot:**
- *Pivot trigger:* `[specific condition, e.g., "60d adoption < 20% of target persona"]`
- *Stop trigger:* `[specific condition, e.g., "no growth between 30d and 90d and CSAT regressed"]`

---

## Guardrails

What cannot break, regardless of how creative the solution is. These are the constraints the team and any AI agent must respect.

**Quality / principle guardrails** (see [Product Principles](../anchors/product-principles.md)):
- `[Principle 1]` -- must remain true after this ships. Check question: …
- `[Principle 2]` -- must remain true. Check question: …
- `[Principle 3]` -- must remain true. Check question: …

**Performance / reliability guardrails:**
- `[e.g., "Page load p95 must stay under 800ms"]`
- `[e.g., "Existing API contracts must not break"]`

**Trust / safety guardrails:**
- `[e.g., "No new PII collected without explicit consent"]`
- `[e.g., "Action must be reversible within 24h"]`

**Invariant guardrails** (see [Invariants](../anchors/invariants.md)):
- `[invariant-slug]` -- this work must not cross it. One-question test: …
- `[invariant-slug]` -- this work must not cross it. One-question test: …
- `[invariant-slug]` -- this work must not cross it. One-question test: …

**Out of scope (we will not do this, even if asked):**
- …
- …
- …

---

## Solution Space

This is the freedom-and-constraint envelope. **Describe the shape of an acceptable solution; do not prescribe the solution itself.** A coding agent or a human team should be able to invent multiple valid solutions inside this envelope.

**The solution MUST:**
- [Required behaviour 1, phrased as an outcome, not an implementation]
- [Required behaviour 2]
- [Required behaviour 3]

**The solution MUST NOT:**
- [Excluded behaviour 1, why this is off-limits]
- [Excluded behaviour 2]

**Free to vary (design and engineering choose):**
- UI patterns, component composition, page layouts
- Storage, query patterns, internal data model
- Whether to add a new surface or modify an existing one
- [Other dimensions left open]

---

## Evidence

Three bullets max. Link out, don't restate.

- `[Research doc title]` -- n=X interviews, key insight
- `[Analytics dashboard / query]` -- current baseline number
- `[Customer quote source]` -- representative quote

---

## Bets & Risks

What we're assuming, and what would invalidate the RFC.

**We're betting that:**
1. `[Assumption 1]` -- if wrong, this RFC is wrong.
2. `[Assumption 2]` -- …
3. `[Assumption 3]` -- …

**Top risks:**

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| `[Risk 1]` | Low/Med/High | Low/Med/High | … |
| `[Risk 2]` | … | … | … |
| `[Risk 3]` | … | … | … |

---

## Rollout

How we ship this safely.

Release shapes (staged rollout, shadow run, champion-challenger, artifact rollback, backfill): see [Writing an RFC](../guides/writing-an-rfc.md#rollout). Pick the shape that fits the change; feature-flag on/off is one option, not the only one.

Fill the table below with the shape you chose (the flag column is illustrative; replace it with ramp %, shadow, or artifact version as fits):

| Phase | Audience | Flag state | Exit criteria | Rollback |
|---|---|---|---|---|
| Private preview | 5–10 trusted accounts | ON for opted-in | `[signal 1]` ✓, `[signal 2]` ✓ | Flag OFF, no data left behind |
| Public preview | Opted-in customers | ON for self-selected | Adoption ≥ X, no critical issues | Flag OFF, communicate to opted-in |
| GA | All customers | ON by default | Maintained for 30 days post-GA | Flag OFF, post-mortem |

**Instrumentation required before private preview:**
- [ ] Event: `[event name]` -- measures `[which success signal]`
- [ ] Dashboard: `[link]` -- covers headline + guardrails
- [ ] Guardrail alert: `[metric]` triggers if it crosses `[threshold]`

---

## Open Questions

Known unknowns that resolve on delivery. Tag each with who resolves it. These are ship-coupled: they belong here in the RFC, not in the durable [Job Spec](./job-spec.md).

- `[question]` -- `[Eng spike]`
- `[question]` -- `[Leadership decision]`
- `[question]` -- `[Data pull]`
- `[question]` -- `[Customer validation]`
- `[question]` -- `[Team confirmation]`

---

## Related

- [RFC guide](../guides/writing-an-rfc.md) -- how to write this document
- [Product Vision](../anchors/product-vision.md) -- the anchor every RFC ties back to
- [Product Principles](../anchors/product-principles.md) -- the standards the solution must meet
- [Invariants](../anchors/invariants.md) -- the by-construction lines this work must not cross
- [Job Spec Template](./job-spec.md) -- the durable per-job outcome doc an RFC references
- [JTBD Guide](../guides/jtbd-guide.md) -- framing the job
- [Agentic Delivery](../guides/agentic-delivery.md) -- the verdict rule and the gates this RFC clears

---

**Last Updated:** YYYY-MM-DD
