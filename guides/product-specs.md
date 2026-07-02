---
title: Writing an RFC
description: How to write, approve, and deliver a JTBD-led RFC: the ship-coupled, per-initiative delivery document
last_reviewed: 2026-06-24
icon: "📖"
---

# Writing an RFC

One document. Not two.

> [!NOTE]
> **An RFC is not a named tier of its own**
>
> It's the ship-coupled, per-initiative delivery layer that sits beneath the anchors ([Vision](../anchors/product-vision.md), [Principles](../anchors/product-principles.md), [Invariants](../anchors/invariants.md)), the product-level **Product Spec** (which owns the job list), and the **[Job Specs](../templates/job-spec.md)**. It's your existing RFC/PR process for one piece of work; this guide is a reference shape for it, not a new gate.
>
> **Two doc-class variants live under the RFC shape.** An artifact ladders via `serves: <job-spec-slug>` (a ship-coupled RFC delivering a job; it archives when shipped) or via `backs: <invariant-slug>` (a design record that elaborates or defends a named invariant rather than delivering a job; it stays current and does not archive). The doc-class is declared in frontmatter. Use the `serves:` path for normal delivery work; use `backs:` for standing architectural and security rationale that underpins an invariant.

An **RFC** does the work that used to be split between a PRD ("should we build this?") and a separate delivery spec ("how do we build it?"). The shift matters: by combining them and framing the document around the **user's job to be done**, the RFC becomes useful at every phase (approval, design, build, launch, and post-ship review), and it stays useful for both humans and AI agents.

> If you're looking for the document itself, the template is here: [RFC Template](../templates/rfc.md).

---

## What changed (and why)

Previously the process had two documents:

- **PRD** -- the approval document. Answered "should we build this?"
- **Delivery spec** -- the build document. Answered "how do we build this?"

That separation produced three problems:
1. The PRD became stale the moment the delivery spec started, but it was still the document everyone cited.
2. Authors kept restating the PRD's "why" because the delivery spec was the doc people actually read during build.
3. The PRD's "how" sections (Solution, Acceptance Criteria, Non-goals) overlapped with the delivery spec, and the two drifted.

The RFC collapses both. It's a living document from approval through ship. It's framed around the **user's job**, not our launch. And it leaves the **how** open: solutions are the team's (and the AI's) creative work, not the RFC author's prescription.

---

## Principles

The RFC is built on five principles. If a section of the template doesn't serve one of these, cut it.

### 1. Job first, feature last

The RFC opens with the user's job (in JTBD form), not the feature we want to build. If you can't write the job statement crisply, you don't yet understand the problem. Drop down to discovery before continuing. The job itself lives in a durable [Job Spec](../templates/job-spec.md); the RFC references it. See [JTBD Guide](./jtbd-guide.md).

### 2. Failure is a first-class concept

Every RFC must name how the **user** would fail at the job, not just how our launch would fail.
- **Hard failure** -- user can't complete the job.
- **Soft failure** -- user completes it but is worse off than before.
- **Silent failure** -- user appears to succeed but didn't get the outcome they wanted (often the most damaging because it looks fine in analytics).
- **Adoption failure** -- the right persona never finds the feature.

If you can't articulate at least three plausible user-failure modes, you don't yet understand the job.

### 3. Guardrails, not blueprints

The RFC names what cannot break (principles, performance, trust, scope), but leaves **how to build the thing** open. RFCs that prescribe components, layouts, or data models prematurely waste the team's craft and the AI's pattern-matching strength.

### 4. AI-readable and human-readable

The same RFC gets read by a coding agent drafting a first cut, by an engineer reviewing trade-offs, and by an exec deciding whether to approve. That means:
- Predictable section headers (so agents can locate the right context)
- Structured fields rather than free-form prose where possible
- Explicit anti-goals (so agents don't fabricate them)
- Evidence linked out, not pasted in

### 5. Living document

An RFC is approved in draft and stays alive through ship. Decisions made during delivery update the RFC. When the team learns the job is shaped differently than expected, the RFC changes (or it gets re-approved if the change is large), and if the *job itself* shifted, the durable [Job Spec](../templates/job-spec.md) it references is updated too.

---

## When to write an RFC

| Path | Size | What you write | Who approves |
|------|------|---------------|--------------|
| **Quick Win** | ≤ half a day | Nothing. Flag with EM/PM, then ship. Changelog if UX, support notification always. | EM/PM alignment |
| **Lightweight** | Half a day – 2 weeks | 1-page brief (Problem, Solution, Acceptance Criteria, Metrics, Persona) | PM + Tech Lead |
| **Full Spec** | > 2 weeks | Full RFC using the [template](../templates/rfc.md) | Senior product sign-off |

Pick the path by the size and stakes of the work.

**Don't write a full RFC for:** bug fixes, internal tooling with no customer impact, prototypes (use research docs), or small/obvious fixes.

---

## Who can write an RFC

**Anyone on the team:**

- **Product Managers** -- RFCs are how you scope, justify, and get approval. Core PM skill.
- **Engineers** -- Platform/technical initiatives, infrastructure improvements.
- **Support & Success** -- Operational improvements, workflow enhancements.
- **Sales & Marketing** -- Growth experiments, customer feature requests.
- **Leadership** -- Strategic initiatives.

The RFC author owns shepherding it through approval. Anyone can be the author.

**New to writing RFCs?** Ask in your team's #product channel for a sponsor to help with problem framing, RICE scoring, and template navigation.

---

## RFC lifecycle

| Phase | RFC Status | What's Happening | Tracker Status |
|-------|------------|------------------|----------------|
| **Learn** | (no RFC yet) | Discovery, talking to customers, validating struggling moments. | (Evidence gathering) |
| **Decide** | Draft → In Review | RFC author writes the RFC, refines, submits for approval. | Backlog → Shaping |
| **Shape** | Approved | Team agrees scope and approach. Solution space narrows as design and engineering propose options. RFC updated as decisions land. | Shaping → Readying for Build |
| **Build** | Approved (living) | Build behind a flag. RFC updated when decisions are made; re-approved only if scope changes >20%. | Building → In Preview |
| **Launch** | Approved | GTM activities. The RFC is the source of truth for what we shipped. | GTM Launch Planning → Launched |
| **Sell** | Archived | Document actual vs predicted in a post-launch review. | Launched (Retro) |

---

## RFC structure

The [template](../templates/rfc.md) has these sections. The order matters: it's the order a reader (human or agent) needs them.

1. **Status** -- Header block with owner, approver, named outcome advanced, Job Spec link, tracker.
2. **TL;DR** -- Three sentences: the job, what success looks like, the biggest constraint.
3. **The Job** -- JTBD statement and persona.
4. **How Users Fail Today** -- Struggling moments with evidence.
5. **User Success Modes** -- What success looks like *from the user's perspective*.
6. **User Failure Modes** -- Hard / soft / silent / adoption failure, with detection signals and pivot/stop triggers.
7. **Guardrails** -- What cannot break (principles, performance, trust, invariants, out of scope).
8. **Solution Space** -- Must do / must not do / free to vary.
9. **Evidence** -- 3 bullets max, linked out.
10. **Bets & Risks** -- Assumptions and top risks.
11. **Rollout** -- Phases, exit criteria, rollback, instrumentation.

---

## Writing guidance by section

### TL;DR

Three sentences. The job, the success criterion, the binding constraint. A busy exec or an agent picking up the doc cold should understand the RFC in 15 seconds.

### The Job

Use the JTBD form:

> **When** `[situation]`, **`[persona]` wants to** `[motivation]`, **so they can** `[outcome]`.

Map the forces around the job in the JTBD sense: what pushes the user toward a new solution, what pulls them, what habit they're fighting. See [JTBD Guide](./jtbd-guide.md). Forces tell you whether the job is *active* (people are looking for solutions) or *latent* (people have settled for the current state). Record them in your discovery notes; a brief summary can go in the RFC body, but the full table is not required in the template.

### How Users Fail Today

The struggling moments. **Be specific.** Generic "users find this confusing" isn't a struggling moment; "users open the settings page, scroll for 20 seconds looking for the SSO option, give up, and email support" is. Each struggling moment should have linked evidence.

If you have fewer than two struggling moments with real evidence, you need more discovery before you write the RFC.

### User Success Modes

Three flavours of success, in order of weight:
- **Behavioural** -- observable in product analytics.
- **Felt** -- observable in qualitative signal (NPS, interviews, support sentiment).
- **Outcome Signal** -- the specific movement on the named vision outcome's **Signal** (the outcome-level named metric) that this RFC is responsible for.

Plus **leading indicators**, early signals (≤ 2 weeks post-launch) that tell you whether you're on track.

### User Failure Modes

> [!WARNING]
>
> This is the section most teams skip. **Don't.** If you can't name how the user would fail, you don't understand the job well enough.

For each failure mode, name the **detection signal**: how would you know in production that this is happening? Without detection signals, failure modes are theoretical.

Then name your **pivot triggers** and **stop triggers**. Specific. "60d adoption < 20% of target persona" is a trigger. "If things go badly" is not.

### Guardrails

Four buckets:
- **Quality / principle** -- your [Product Principles](../anchors/product-principles.md) applied as engineering standards.
- **Performance / reliability** -- latency budgets, error budgets, API contracts that can't break.
- **Trust / safety** -- privacy, security, reversibility. Anything the initiative must not cross by construction belongs to a named [invariant](../anchors/invariants.md), not just a guardrail.
- **Out of scope** -- explicit non-goals, even when asked.

Guardrails are the part of the RFC that says *no* to creativity in specific places. The rest of the RFC invites it.

### Solution Space

The hard part. Describe the shape of an acceptable solution **without prescribing the solution itself**.

- **Must do** -- required outcomes (not implementations).
- **Must not do** -- excluded behaviours.
- **Free to vary** -- dimensions design and engineering choose.

It's okay (and helpful) to include 2–3 *illustrative* approaches as one-line sketches. Label them clearly as illustrative: the goal is to show the shape of the envelope, not to pre-pick a winner.

### Evidence

Hard limit: 3 bullets, each one linking out. The RFC is not the research document; it points to research.

### Bets & Risks

Name what you're betting on. "If the user genuinely doesn't have this struggling moment, the RFC is wrong" is the kind of bet to surface. Risks should have mitigations.

### Rollout

Phases with **exit criteria** (specific signals) and a **rollback** path (specific actions). Instrumentation that must exist before private preview.

---

## Evidence standards

### Strong evidence (prefer these)

- Customer interviews or feedback with quotes, sample size, and links
- Usage data or analytics with baseline numbers
- Support ticket analysis (volume, trends, sentiment)
- Research documents with findings, sources, and synthesis
- Sales/CS win/loss insights
- Competitive analysis

### Weaker evidence (use sparingly)

- Team intuition or opinion
- Analogies to other products
- "Customers are asking for this" without specifics
- Cherry-picked quotes without frequency context

### Tag every load-bearing claim's confidence

Strong-vs-weak is about the *source*; the reader still needs to know how far
you'd bet on the *claim*. Tag each load-bearing evidence line inline:

- **(Validated)** -- backed by strong evidence above; you'd stake the plan on it.
- **(Directional: needs `[named data pull]`)** -- you believe it, but it isn't
  proven yet. Name the specific pull, interview, or spike that would confirm it.

A spec with no `Directional` tags is either fully validated (rare) or hiding
its assumptions. Being honest about what you *don't* yet know is what makes the
rest of the evidence trustworthy, an untagged guess reads as fact.

---

## Approval

Approval depth scales with the path and the stakes of the work.

| Path | Approver | SLA |
|---|---|---|
| **Quick Win** (≤ half a day) | PM + Tech Lead | Same day |
| **Lightweight** (half a day – 2 weeks) | PM Lead | 3 business days |
| **Full Spec** (> 2 weeks) | Senior product sign-off (SVP Product; + exec sign-off for the highest-stakes launches) | 5 business days |

### Verdict gate

A change ships only when all four hold:

1. it advances a named vision outcome (it's in scope at all);
2. it satisfies its Job Spec (does the user's job), proven by its outcome UAT;
3. it passes every principle check: product AND engineering standards (a "no" is a redesign, not a follow-up);
4. it crosses no invariant (the lines you won't cross by construction).

### Pre-review checklist

Before marking "In Review":

- [ ] Job statement crisp; persona named
- [ ] Named vision outcome and Job Spec linked in the Status table
- [ ] At least 2 struggling moments with linked evidence
- [ ] Every load-bearing claim tagged (Validated) or (Directional: needs X)
- [ ] User success modes include a behavioural + outcome-Signal check
- [ ] At least 3 user-failure modes named, each with a detection signal
- [ ] Pivot and stop triggers are specific (not "if things go badly")
- [ ] Guardrails cover quality, performance, trust, invariants, out-of-scope
- [ ] Solution space distinguishes must-do / must-not-do / free-to-vary
- [ ] Top 3 risks have mitigations
- [ ] Rollout has exit criteria and a rollback
- [ ] Instrumentation list covers every success and failure signal

### Re-approval triggers

An RFC must be re-approved if:

- **Scope changes significantly** -- more than 20% effort change
- **Timeline slips** -- more than one quarter delay
- **Business case changes** -- new market conditions, customer landscape, or strategy
- **Solution-space changes** -- the must-do / must-not-do envelope is broken

Otherwise, ship.

---

## AI-assisted authoring

A coding/writing agent (whichever your team has approved) is excellent at:

- Drafting the first cut of an RFC from research notes and customer quotes
- Generating user-failure-mode candidates given a job statement
- Reviewing a draft against the approval checklist
- Proposing 2–3 illustrative solution-space sketches

It is not good at (and shouldn't be trusted with):

- Picking the headline metric
- Deciding which struggling moments matter most
- Making strategic alignment calls
- Replacing customer conversations

Useful prompts:

- *"Draft an RFC for `[job]`. Use the template at `templates/rfc.md`. Lead with the JTBD. Generate 3 plausible user-failure modes, each with a detection signal."*
- *"Review this RFC against the approval checklist. Flag missing sections and ungrounded claims. Don't invent evidence."*
- *"Propose 3 illustrative solution-space sketches that respect the guardrails. Label each as illustrative. Do not commit to one."*

### When an agent authors or implements the RFC: review it adversarially

When an agent drafts the RFC, or implements against it, the **author cannot grade its own work** (it rubber-stamps). A separate, **fresh-process reviewer** (a different agent with fresh context, or a human) must check it and return an explicit **APPROVE / REQUEST_CHANGES / BLOCK** verdict, citing the specific section or `file:line`. Iterate until APPROVE, and don't let an automated merge fire before then. This is the design-loop discipline from [Agentic Delivery](./agentic-delivery.md): it *extends* the [approval](#approval) gate above, it doesn't replace it.

---

## Related

- **Template:** [RFC Template](../templates/rfc.md)
- **Job Spec:** [Job Spec Template](../templates/job-spec.md) -- the durable, per-job outcome contract an RFC references
- **JTBD:** [JTBD Guide](./jtbd-guide.md) -- framing the job and forces
- **Method:** [Agentic Delivery](./agentic-delivery.md) -- the verdict rule and the gates an RFC clears
- **Vision:** [Product Vision](../anchors/product-vision.md) -- the anchor every RFC ties back to
- **Principles:** [Product Principles](../anchors/product-principles.md) -- the standards each RFC is checked against
