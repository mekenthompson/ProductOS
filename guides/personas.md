---
title: Three Personas
description: How to define the three personas every product needs — Creator, Consumer, Sponsor
last_reviewed: 2026-05-12
icon: "📖"
---

# Three Personas

Almost every product has three audiences, even when the team only talks about one. Naming all three keeps the team honest about who they're building for and which trade-offs are showing up unintentionally.

This guide explains the three-persona pattern, how each persona connects to the rest of the playbook, what a strong persona description contains, and how to adapt the model when your product doesn't obviously have all three.

---

## The pattern

| Persona | What they do | Who pays |
|---|---|---|
| **Creator** | Configures and operates the product on behalf of others | Usually a budget holder or platform owner |
| **Consumer** | Uses the product day-to-day; doesn't choose it | Usually not a buyer |
| **Sponsor** | Funds the product; accountable for the outcome it produces | Always the buyer or budget owner |

A *Creator* sets it up. A *Consumer* lives in it. A *Sponsor* pays for it and gets asked whether it worked.

Each persona experiences the product (and the [headline metric](../product-vision.md#what-a-good-product-vision-looks-like)) differently. If a feature improves life for one persona while making it worse for another, that's a real trade-off — and the team should be able to articulate it.

---

## How personas connect to the rest of the playbook

| Where it shows up | How personas are used |
|---|---|
| [Product Vision](../product-vision.md) | Each persona gets a one-line "vision lens" question. |
| [RFC Template](../templates/rfc.md) | Every RFC names the primary persona served and (optionally) the secondary. Unclear persona = unclear value. |
| [RICE](rice.md) | Reach is scored *per persona*, not as a single blended number. |
| [Decision Framework](decision-framework.md) | "Signal" depends on whether a real persona has a real problem. |
| [Customer Journey](customer-journey.md) | Each persona has their own journey; do not collapse them. |
| [Post-Launch Review](../templates/post-launch-review.md) | Adoption is reviewed per persona — overall numbers hide persona-level failure. |

---

## What a good persona description looks like

Three properties:

1. **A motivation, not a job title.** "Operations manager" is a category; "Operations manager accountable for throughput across the team, judged monthly on error rate" is a persona. The motivation is what predicts behaviour.

2. **One sentence on what they need from the product.** Not a list of features — a description of the *outcome*. If you can't say it in one sentence, you're describing more than one persona.

3. **A vision-lens question.** A single question that asks "how fast / how clearly / how reliably does this persona get the outcome they need?" The question should be answerable from product data, and should map directly to the [headline metric](../product-vision.md).

> 💡 Optional but useful: a one-line *anti-pattern* per persona — the kind of thing that looks helpful but actually makes their job harder. E.g. "Adding configuration knobs that the Creator must explain to every Consumer."

---

## When are personas "done"?

The personas are ready to anchor the playbook when **every one of these is true**:

- [ ] **2–4 personas, no more.** Five is too many to remember; one is too few to surface trade-offs.
- [ ] **Each persona has a one-sentence outcome statement.**
- [ ] **Each persona has a vision-lens question** that maps to the headline metric.
- [ ] **Buying / not-buying split is explicit.** It is clear which persona pays.
- [ ] **A real RFC can name its primary persona** without ambiguity. Try one. If two personas look equally plausible, your descriptions aren't sharp enough.
- [ ] **Trade-offs surface.** Look at the last three things you shipped. Can you say which persona each one served *at the expense of* another? If every feature serves all personas equally, the personas are too vague.

---

## How to adapt the three-persona pattern

### Step 1 — Identify the Sponsor first

The Sponsor is the easiest one to identify: it's the person who signed the contract or approved the budget. If you can't name them, you have a sales problem, not a product problem. Document what they care about — usually trend lines, ROI, and the boardroom question "is this working?"

### Step 2 — Decide whether you have one or two end-user personas

The Creator/Consumer split exists when the person who *sets up* the product is different from the person who *uses* it. Examples:

- **Two-persona products:** Admin-heavy SaaS where one role configures the system and another role uses it day-to-day; internal tools used by frontline staff under a platform owner; B2B platforms where IT/ops sets up and end-users transact.
- **One-persona products (no Creator):** Most consumer products and prosumer SaaS, where the user installs and uses the product themselves.
- **Creator is the Sponsor:** Solo founders / small-team tools, where the buyer is also the configurator.

If you have one end-user persona, that's fine — just don't pretend you have two. Conversely, if you have a Creator and a Consumer but only talk about the Consumer, you'll quietly ship features that make Creators miserable.

### Step 3 — Write the vision-lens questions

The vision lens converts the headline metric from the [Product Vision](../product-vision.md) into a persona-specific question. Each persona should have one.

Template:

> How fast / how clearly / how reliably does `[persona]` go from `[trigger event]` to `[outcome that moves the headline metric]`?

If the headline metric is *time-to-X*, every persona's lens should be a time question. If it's *retention*, every lens is about why they'd come back. The lenses should be consistent in shape — that's what lets the team compare across personas.

### Step 4 — Stress-test against real customers

Pick three real customers (named, not hypothetical). Map each individual contact to a persona. If three customers' contacts all map cleanly, you're done. If one contact maps to "none of the above," either you missed a persona or the customer is outside your ICP. Both are useful answers.

### Step 5 — Use them

Personas only earn their keep when they're load-bearing. Add a *primary persona* field to your RFC template. Score Reach per persona in RICE. Slice adoption dashboards by persona. When a PR review surfaces a trade-off, name the persona on each side.

---

## Example personas (generic)

> The example below shows the *shape* of finished personas for a hypothetical operations tool. Replace with your own.

### Configurators
Operations leaders who define how events route through the system, what counts as "actioned," and which routing rules apply. They're accountable for the overall throughput of the system, not for individual events.

**What they need:** Powerful configuration that doesn't require code, sensible defaults, and the confidence that a small change won't break things downstream.

**Vision lens:** How fast can a Configurator go from "we need a new routing rule" to "operators are using it correctly"?

### Operators
Frontline staff who see events arrive and decide what to do next. They didn't choose this tool; their org did. They interact with the system hundreds of times a day and judge it on one thing: did it tell them what they needed to know, fast?

**What they need:** Speed, clarity, zero friction. Events that explain themselves. A UI that never makes them dig for the answer.

**Vision lens:** How fast does an Operator go from "new event arrived" to "I know what to do next"?

### Sponsors
VPs and directors accountable for throughput, error rate, and overall team output. They care about trends, not individual events: how reliable is the system over time, are we getting better, is the platform investment paying off?

**What they need:** Aggregate insight they can trust. Dashboards that answer "are we getting better?" without a data engineer building them. Evidence that justifies continued investment.

**Vision lens:** How fast does a Sponsor go from "how is the team doing?" to an answer they can act on?

---

## Using Personas in Product Decisions

When evaluating a feature or RFC, ask:

1. **Which persona does this serve?** (You should be able to name at least one)
2. **Does it meet their needs as defined above?**
3. **Does it move the vision-lens question in the right direction?**

If you can't clearly answer which persona benefits and how, the feature may not be aligned with your vision.

---

## Related

- [Product Vision](../product-vision.md) — Personas live alongside the vision and headline metric.
- [Customer Journey](customer-journey.md) — How each persona moves through the product.
- [JTBD Guide](jtbd-guide.md) — Jobs to be Done, which complements personas with motivation framing.
