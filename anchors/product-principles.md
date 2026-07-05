---
title: Product Principles
description: How to define the engineering and design standards your product is built to
last_reviewed: 2026-06-24
icon: "📖"
---

# Product Principles

Product principles are the engineering and design standards that turn the [product vision](./product-vision.md) into day-to-day quality gates. They are applied in every PR, every design review, every release. They are the "built-well" clause in the [verdict rule](../guides/agentic-delivery.md): a "no" on any principle is a redesign, not a follow-up.

> [!NOTE]
> **The three anchors**
>
> Principles are the second of three anchors: **[Vision](./product-vision.md)** (why), **Principles** (built well), and **[Invariants](./invariants.md)** (lines we won't cross by construction). Together they fuse into the [verdict rule](../guides/agentic-delivery.md).

This guide explains the purpose of principles, what a good set looks like, how to write yours, and how to use them as a working tool, not wall art.

---

## What this artifact is for

Principles answer a specific question: **"What does 'good enough to ship' look like, regardless of which team built it?"**

Without principles, teams make independent quality trade-offs. One team ships terse error messages; the next team ships chatty ones. One team builds a wizard; the next ships a blank form. The customer feels the inconsistency, even if no individual decision was wrong.

Principles fix this by making "good" *teachable*. A new engineer should be able to look at a PR and tell whether it meets the bar, using the principles as a checklist.

---

## How principles connect to the rest of the system

| Where they show up | How they're used |
|---|---|
| [Verdict rule](../guides/agentic-delivery.md) | The principle check is the "built-well" clause. No principle conformance, no shipping. |
| [RFC Template](../templates/rfc.md) | The Guardrails section (Quality / principle guardrails) confirms the ship-coupled initiative meets each principle, with reasoning; Solution sections name the principles they uphold and any tensions. |
| [Job Specs](../templates/job-spec.md) | The "good / bad looks like" of each job is the principles made concrete for that outcome. |
| Code review / design review | Each principle has check questions reviewers can paste into a comment. The fresh-process reviewer runs them. |

The principle check is the second-most-cited anchor (after the vision). If yours aren't getting cited, they aren't doing their job.

---

## What good principles look like

Four properties:

1. **Three to five total, no more.** Six is forgettable; two is too coarse. Principles you can't remember aren't standards. They're trivia.

2. **Phrased as standards, not aspirations.** "We are user-obsessed" is a value, not a principle. "If they need the docs, we've failed" is a standard: it gives a reviewer a thing to test. Good principles are *checkable*.

3. **Tension-revealing.** A good principle creates discomfort sometimes. "Batteries included" forces you to choose a default, which means picking a winner. If every principle is always trivially true, they're too soft.

4. **Each has check questions.** Two or three concrete questions a reviewer can ask. Without check questions, principles are interpretation contests.

> [!NOTE]
> **Include engineering standards**
>
> Principles are *engineering and design* standards, not just UX ones. If your product carries real non-functional stakes (security, reliability, scalability, availability, performance), at least one principle should make that bar checkable. A feature can be a delight and still fail because it leaks data or falls over under load. This matters most when an agentic workforce does the building: the non-functional bar is what engineering oversight enforces (see [Agentic Delivery](../guides/agentic-delivery.md)).

---

## When are the principles "done"?

The principles are ready to use as standards when **every one of these is true**:

- [ ] **3–5 principles, each phrased as a standard** (a thing that can be true or false of a feature).
- [ ] **Each principle has 2–3 check questions** that a code or design reviewer could ask without ambiguity.
- [ ] **Each principle has ✅ Good / ❌ Bad examples** drawn from your real product.
- [ ] **Two of the last five shipped features can be evaluated against each principle**, and the team can articulate where each one passed or failed.
- [ ] **At least one principle creates a real trade-off** with another. If they all happily coexist, they're too vague.
- [ ] **They are cited in PR/design reviews.** If a month goes by without anyone referencing a principle, retire or rewrite it.

---

## How to write your own principles

### Step 1: Start from the headline metric

Look at the [headline metric](./product-vision.md) in the vision. Now ask: **"What needs to be true about every shipped feature for that metric to move?"** Those answers are the seeds of your principles.

If the metric is time-to-first-value, a candidate principle might be "First run succeeds." If the metric is retention, a candidate is "Every session ends with a clear next action." Tie principles to the metric: that's how they avoid becoming generic.

### Step 2: Capture the gripes

Walk through the product with a customer (or a recording). Note every moment where you wince. The wincing is unwritten principles: quality bars you already believe in but haven't named. Cluster the wincing into 3–5 themes; those are your candidate principles.

### Step 3: Phrase each principle as a punchy standard

Bad: "We should make the product easy to use."
Better: "If they need the docs, we've failed."

The punchy phrasing matters. A principle that gets quoted gets applied. A principle written like a corporate value statement gets ignored.

Aim for principles that sound a little extreme. The extremity is what makes them load-bearing: moderate principles don't change behaviour.

### Step 4: Write check questions

For each principle, write 2–3 questions a reviewer could ask. Test them: can someone answer your check questions about a specific PR in 30 seconds? If they need a meeting, the questions are too abstract.

### Step 5: Collect ✅ Good / ❌ Bad examples

Two of each, drawn from your real product. The examples teach the principle faster than the principle itself does. Update them as the product evolves.

### Step 6: Stress-test for tension

Take three real PRs and run them through your principles. If every PR sails through all principles, your bar is too low. Rewrite. If one principle forces you to delay a PR, that's the principle earning its keep. Keep it.

---

## How to use principles operationally

- **In RFCs:** The Guardrails section (Quality / principle guardrails) calls out which principles the ship-coupled initiative serves and any tensions it creates.
- **In design reviews:** Reviewer pastes the check questions for the relevant principle and asks for specific evidence.
- **In code reviews:** "Does this meet principle [N]? If not, what's the plan?"
- **In post-launch reviews:** If adoption is below target, the first question is "did we compromise a principle?"
- **Onboarding:** New PMs/EMs/designers can recite the principles after week one. If they can't, the principles aren't a working tool yet.

---

## Example principles (illustrative)

> The examples below are *one possible* set of three principles for a developer tool. They are intentionally opinionated to demonstrate what punchy principles look like; they are not the principles you should adopt. Write your own using the steps above.

### 1. "If they need the docs, we've failed"

Nobody wants to learn the product. They want to do their job.

The product should teach itself: inline guidance, sensible defaults, error messages that tell you what to do next. Documentation is the optional deep-dive, not the required reading.

**Check questions:**
- Can a new user complete this workflow without leaving the screen?
- Does the UI explain the "why," not just the "what"?
- When something fails, does the error message tell them what to do next?

**Examples:**
- ✅ Inline guidance that appears when you need it, with a "learn more" link for depth
- ❌ A blank form with a "Read setup guide" link
- ✅ Error: "Your API token expired. Generate a new one in Settings → API Access."
- ❌ Error code `AUTH_401` linking to authentication docs

### 2. "Batteries included, assembly optional"

Ship the pre-built thing. The first run succeeds. Defaults cover most use cases. Power users opt into complexity; beginners don't have to opt out of it.

**Check questions:**
- Does this work with zero configuration for a typical user?
- Are the defaults right for most users, or did we punt decisions to the customer?
- Can a power user customise without losing the out-of-the-box experience?

**Examples:**
- ✅ A template that runs on first click, every step editable
- ❌ A blank config file requiring 15 minutes of reading before anything runs
- ✅ Sensible defaults enabled, fine-grained controls in advanced settings
- ❌ Maximum flexibility, zero defaults, "you decide"

### 3. "One mind built this"

The whole product should feel like one person designed it. Consistent navigation, shared patterns, unified language. Learn one part, you've learned the rest.

**Check questions:**
- Does this follow the same patterns as adjacent features?
- Would this feel jarring next to the last thing shipped?
- Is the quality bar the same as your best work, or "good enough for this area"?

**Examples:**
- ✅ Consistent navigation patterns across product areas
- ❌ Each area with its own sidebar layout and terminology
- ✅ Shared component library: buttons, modals, tables look identical everywhere
- ❌ One-off UI elements that look slightly different in each section

---

## Applying the principles

Before you ship, ask:

1. **Standard test:** Does this meet every principle, with evidence?
2. **Trade-off test:** Where principles are in tension, which one did you prioritise and why?
3. **Consistency test:** Would a reviewer who doesn't know your team make the same call?

> [!CAUTION]
>
> If you can't answer all three, you're not done. Redesign, don't ship and patch later.

> [!TIP]
> **Principles judge Job Specs, they don't replace them**
>
> A change can satisfy its [Job Spec](../templates/job-spec.md) (it does the user's job) and still fail a principle check (it was built badly). When that happens, the job is the goal; the principles are how you get there without making the product feel like a kit. Both must pass: the all-must-pass gate across the vision outcome, the Job Spec, the principles, and the invariants is the **verdict rule**. See [Agentic Delivery](../guides/agentic-delivery.md).

---

## Related

- [Product Vision](./product-vision.md) -- Principles are derived from the vision (the first anchor).
- [Invariants](./invariants.md) -- The third anchor; the lines you won't cross by construction.
- [Agentic Delivery](../guides/agentic-delivery.md) -- How the principle check sits in the verdict rule.
- [RFC Guide](../guides/writing-an-rfc.md) -- How to apply principles when writing a ship-coupled RFC.
