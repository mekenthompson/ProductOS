---
title: Product Specs
description: How to write, approve, and deliver a JTBD-led Product Spec — the single document that replaces the Product Spec + delivery-spec pair
last_reviewed: 2026-05-12
icon: "📖"
---

# Product Specs

One document. Not two.

A **Product Spec** does the work that used to be split between a Product Spec ("should we build this?") and a separate delivery spec ("how do we build it?"). The shift matters: by combining them and framing the document around the **user's job to be done**, the spec becomes useful at every phase — approval, design, build, launch, and post-ship review — and it stays useful for both humans and AI agents.

> If you're looking for the document itself, the template is here: [Product Spec Template](../templates/product-spec.md).

---

## What changed (and why)

Previously this playbook had two documents:

- **PRD** — the approval document. Answered "should we build this?"
- **Product Spec** — the delivery document. Answered "how do we build this?"

That separation produced three problems:
1. The PRD became stale the moment the spec started, but it was still the document everyone cited.
2. Spec authors kept restating the Product Spec's "why" because the spec was the doc people actually read during build.
3. The PRD's "how" sections (Solution, Acceptance Criteria, Non-goals) overlapped with the spec, and the two drifted.

The new Product Spec collapses both. It's a living document from approval through ship. It's framed around the **user's job**, not our launch. And it leaves the **how** open — solutions are the team's (and the AI's) creative work, not the spec author's prescription.

---

## Principles

The Product Spec is built on five principles. If a section of the template doesn't serve one of these, cut it.

### 1. Job first, feature last

The spec opens with the user's job (in JTBD form), not the feature we want to build. If you can't write the job statement crisply, you don't yet understand the problem. Drop down to discovery before continuing. See [JTBD Guide](jtbd-guide.md).

### 2. Failure is a first-class concept

Every spec must name how the **user** would fail at the job — not just how our launch would fail.
- **Hard failure** — user can't complete the job.
- **Soft failure** — user completes it but is worse off than before.
- **Silent failure** — user appears to succeed but didn't get the outcome they wanted (often the most damaging because it looks fine in analytics).
- **Adoption failure** — the right persona never finds the feature.

If you can't articulate at least three plausible user-failure modes, you don't yet understand the job.

### 3. Guardrails, not blueprints

The spec names what cannot break (principles, performance, trust, scope), but leaves **how to build the thing** open. Specs that prescribe components, layouts, or data models prematurely waste the team's craft and the AI's pattern-matching strength.

### 4. AI-readable and human-readable

The same document gets read by a coding agent drafting a first cut, by an engineer reviewing trade-offs, and by an exec deciding whether to approve. That means:
- Predictable section headers (so agents can locate the right context)
- Structured fields rather than free-form prose where possible
- Explicit anti-goals (so agents don't fabricate them)
- Evidence linked out, not pasted in

### 5. Living document

A spec is approved in draft and stays alive through ship. Decisions made during delivery update the spec. When the team learns the job is shaped differently than expected, the spec changes (or the spec gets re-approved if the change is large).

---

## When to write a Product Spec

| Path | Size | What you write | Who approves |
|------|------|---------------|--------------|
| **Quick Win** | ≤ half a day | Nothing. Flag with EM/PM, then ship. Changelog if UX, support notification always. | EM/PM alignment |
| **Lightweight** | Half a day – 2 weeks | 1-page brief (Problem, Solution, Acceptance Criteria, Metrics, Persona) | PM + Tech Lead |
| **Full Spec** | > 2 weeks | Full Product Spec using the [template](../templates/product-spec.md) | SVP Product (T1/T2), PM Lead (T3/T4) |

Use the [Decision Framework](decision-framework.md) to pick the path.

**Don't write a full spec for:** bug fixes, internal tooling with no customer impact, prototypes (use research docs), or T4 work.

---

## Who can write a Product Spec

**Anyone on the team:**

- **Product Managers** — Specs are how you scope, justify, and get approval. Core PM skill.
- **Engineers** — Platform/technical initiatives, infrastructure improvements.
- **Support & Success** — Operational improvements, workflow enhancements.
- **Sales & Marketing** — Growth experiments, customer feature requests.
- **Leadership** — Strategic initiatives.

The spec author owns shepherding it through approval. Anyone can be the author.

**New to writing specs?** Ask in your team's #product channel for a sponsor to help with problem framing, RICE scoring, and template navigation.

---

## Spec lifecycle

| Phase | Spec Status | What's Happening | Tracker Status |
|-------|------------|------------------|----------------|
| **Learn** | (no spec yet) | Discovery — talking to customers, validating struggling moments. | (Evidence gathering) |
| **Decide** | Draft → In Review | Spec author writes the spec, refines, submits for approval. | Backlog → Shaping |
| **Shape** | Approved | Team agrees scope and approach. Solution space narrows as design and engineering propose options. Spec updated as decisions land. | Shaping → Readying for Build |
| **Build** | Approved (living) | Build behind a flag. Spec updated when decisions are made; re-approved only if scope changes >20%. | Building → In Preview |
| **Launch** | Approved | GTM activities. Spec is the source of truth for what we shipped. | GTM Launch Planning → Launched |
| **Sell** | Archived | Document actual vs predicted in the [Post-Launch Review](../templates/post-launch-review.md). | Launched (Retro) |

See [Delivery Standards](delivery-standards.md) for full phase and gate details.

---

## Spec structure

The [template](../templates/product-spec.md) has these sections. The order matters — it's the order a reader (human or agent) needs them.

1. **Status** — Header block with owner, approver, lever, tier, tracker.
2. **TL;DR** — Three sentences: the job, what success looks like, the biggest constraint.
3. **The Job** — JTBD statement, persona, forces.
4. **How Users Fail Today** — Struggling moments with evidence.
5. **User Success Modes** — What success looks like *from the user's perspective*.
6. **User Failure Modes** — Hard / soft / silent / adoption failure, with detection signals and pivot/stop triggers.
7. **Guardrails** — What cannot break (principles, performance, trust, out of scope).
8. **Solution Space** — Must do / must not do / free to vary. Plus illustrative approaches (not prescriptions).
9. **Evidence** — 3 bullets max, linked out.
10. **Bets & Risks** — Assumptions and top risks.
11. **Rollout** — Phases, exit criteria, rollback, instrumentation.
12. **Open Questions** — What we don't know yet and how we'll find out.

---

## Writing guidance by section

### TL;DR

Three sentences. The job, the success criterion, the binding constraint. A busy exec or an agent picking up the doc cold should understand the spec in 15 seconds.

### The Job

Use the JTBD form:

> **When** `[situation]`, **`[persona]` wants to** `[motivation]`, **so they can** `[outcome]`.

Then map the **forces** around the job — what pushes the user toward a new solution, what pulls them in, what makes them anxious about changing, what habit they're fighting. Forces tell you whether the job is *active* (people are looking for solutions) or *latent* (people have settled for the current state).

### How Users Fail Today

The struggling moments. **Be specific.** Generic "users find this confusing" isn't a struggling moment; "users open the settings page, scroll for 20 seconds looking for the SSO option, give up, and email support" is. Each struggling moment should have linked evidence.

If you have fewer than two struggling moments with real evidence, you need more discovery. See [Discovery](discovery.md).

### User Success Modes

Three flavours of success, in order of weight:
- **Behavioural** — observable in product analytics.
- **Felt** — observable in qualitative signal (NPS, interviews, support sentiment).
- **Headline-metric** — the specific movement on the [headline metric](headline-metric.md) that this spec is responsible for.

Plus **leading indicators** — early signals (≤ 2 weeks post-launch) that tell you whether you're on track.

### User Failure Modes

This is the section most teams skip. **Don't.** If you can't name how the user would fail, you don't understand the job well enough.

For each failure mode, name the **detection signal** — how would you know in production that this is happening? Without detection signals, failure modes are theoretical.

Then name your **pivot triggers** and **stop triggers**. Specific. "60d adoption < 20% of target persona" is a trigger. "If things go badly" is not.

### Guardrails

Four buckets:
- **Quality / principle** — your [Product Principles](product-principles.md) applied as engineering standards.
- **Performance / reliability** — latency budgets, error budgets, API contracts that can't break.
- **Trust / safety** — privacy, security, reversibility.
- **Out of scope** — explicit non-goals, even when asked.

Guardrails are the part of the spec that says *no* to creativity in specific places. The rest of the spec invites it.

### Solution Space

The hard part. Describe the shape of an acceptable solution **without prescribing the solution itself**.

- **Must do** — required outcomes (not implementations).
- **Must not do** — excluded behaviours.
- **Free to vary** — dimensions design and engineering choose.

It's okay (and helpful) to include 2–3 *illustrative* approaches as one-line sketches. Label them clearly as illustrative — the goal is to show the shape of the envelope, not to pre-pick a winner.

### Evidence

Hard limit: 3 bullets, each one linking out. The spec is not the research document; it points to research.

### Bets & Risks

Name what you're betting on. "If the user genuinely doesn't have this struggling moment, the spec is wrong" is the kind of bet to surface. Risks should have mitigations.

### Rollout

Phases with **exit criteria** (specific signals) and a **rollback** path (specific actions). Instrumentation that must exist before private preview.

### Open Questions

What you genuinely don't know yet, and how you'll resolve each one (experiment, research, build-and-measure). Open questions are not weakness — pretending you have all the answers is.

---

## Evidence standards

### Strong evidence (prefer these)

- Customer interviews or feedback with quotes, sample size, and links
- Usage data or analytics with baseline numbers
- Support ticket analysis (volume, trends, sentiment)
- Research documents using the [Research Template](../templates/research.md)
- Sales/CS win/loss insights
- Competitive analysis

### Weaker evidence (use sparingly)

- Team intuition or opinion
- Analogies to other products
- "Customers are asking for this" without specifics
- Cherry-picked quotes without frequency context

---

## Approval

| Launch tier | Approver | SLA |
|---|---|---|
| **T1** (new offering / major release) | SVP Product (+ exec sign-off) | 5 business days |
| **T2** (product evolution) | SVP Product | 5 business days |
| **T3** (feature enhancement) | PM Lead or Engineering Lead | 3 business days |
| **T4** (usability fix) | PM + Tech Lead | Same day |

### Approval checklist

Before marking "In Review":

- [ ] Job statement crisp; persona named
- [ ] At least 2 struggling moments with linked evidence
- [ ] User success modes include a behavioural + headline-metric signal
- [ ] At least 3 user-failure modes named, each with a detection signal
- [ ] Pivot and stop triggers are specific (not "if things go badly")
- [ ] Guardrails cover quality, performance, trust, out-of-scope
- [ ] Solution space distinguishes must-do / must-not-do / free-to-vary
- [ ] Top 3 risks have mitigations
- [ ] Rollout has exit criteria and a rollback
- [ ] Instrumentation list covers every success and failure signal

### Re-approval triggers

A spec must be re-approved if:

- **Scope changes significantly** — more than 20% effort change
- **Timeline slips** — more than one quarter delay
- **Business case changes** — new market conditions, customer landscape, or strategy
- **Solution-space changes** — the must-do / must-not-do envelope is broken

Otherwise, ship.

---

## AI-assisted authoring

A coding/writing agent (whichever your team has approved) is excellent at:

- Drafting the first cut of a spec from research notes and customer quotes
- Generating user-failure-mode candidates given a job statement
- Reviewing a draft against the approval checklist
- Proposing 2–3 illustrative solution-space sketches

It is not good at (and shouldn't be trusted with):

- Picking the headline metric
- Deciding which struggling moments matter most
- Making strategic alignment calls
- Replacing customer conversations

Useful prompts:

- *"Draft a Product Spec for `[job]`. Use the template at `templates/product-spec.md`. Lead with the JTBD. Generate 3 plausible user-failure modes, each with a detection signal."*
- *"Review this Product Spec against the approval checklist. Flag missing sections and ungrounded claims. Don't invent evidence."*
- *"Propose 3 illustrative solution-space sketches that respect the guardrails. Label each as illustrative — do not commit to one."*

### When an agent authors or implements the spec: review it adversarially

When an agent drafts the spec — or implements against it — the **author cannot grade its own work** (it rubber-stamps). A separate, **fresh-process reviewer** (a different agent with fresh context, or a human) must check it and return an explicit **APPROVE / REQUEST_CHANGES / BLOCK** verdict, citing the specific section or `file:line`. Iterate until APPROVE, and don't let an automated merge fire before then. This is the design-loop discipline from [Agentic Delivery](agentic-delivery.md) — it *extends* the [approval](#approval) gate above, it doesn't replace it.

---

## Resources

- **Template:** [Product Spec Template](../templates/product-spec.md)
- **Discovery:** [Discovery guide](discovery.md) — validate problems before writing
- **Research:** [Research Template](../templates/research.md) — document findings
- **JTBD:** [JTBD Guide](jtbd-guide.md) — framing the job and forces
- **Decisions:** [Decision Framework](decision-framework.md) — Signal → Standard → Speed (pick the right path)
- **Lifecycle:** [Delivery Standards](delivery-standards.md) — full operational workflow and gate definitions
- **Strategy:** Your annual strategy doc — strategic context
- **Vision:** [Product Vision](../product-vision.md) — the anchor every spec ties back to
- **Measurement:** [Post-Launch Review](../templates/post-launch-review.md) — closes the loop
