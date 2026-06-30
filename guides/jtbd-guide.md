---
title: Jobs to be Done Guide
description: How to use the JTBD framework in specs and research
last_reviewed: 2026-05-12
icon: "📖"
---

# Jobs to be Done (JTBD) guide

## What is JTBD?

> People don't buy products — they **hire** them to get a **job** done.
> — Clayton Christensen, Harvard Business School

JTBD shifts focus from *what we're building* to *why customers need it*. Instead of defining features by user type, we focus on the **situation**, **motivation**, and **desired outcome**.

**Where this is used:** Job stories go inside a [Job Spec](../templates/job-spec.md) (the durable per-job doc) and inside an [RFC](../templates/rfc.md) when scoping a delivery. They're also useful in research documents and RFC problem statements.

**Key insight:** Products come and go. The underlying job stays. Understanding the job creates better, more durable solutions.

:::note[Job story vs Job Spec]
This guide teaches the job *story* — a single sentence (`When… [persona] wants to… so they can…`) used inside a [Job Spec](../templates/job-spec.md) or an [RFC](../templates/rfc.md). A **Job Spec** is the standing document built around that job: one per job, with `job` / `outcome` / `stakes` frontmatter, that outlives any single RFC or implementation. Write the sentence here; promote durable, cross-cutting jobs into a standing doc with the [Job Spec template](../templates/job-spec.md). See [Agentic Delivery](./agentic-delivery.md) for how the standing doc anchors agent-delivered work.
:::

---

## The job story format

Instead of User Stories:

> ~~As a [persona], I want [feature] so that [benefit]~~

Use Job Stories:

> **When** [situation/context], **I want to** [motivation], **so I can** [expected outcome]

### Why job stories are better

| User Stories | Job Stories |
|--------------|-------------|
| Start with persona (assumption) | Start with situation (observable) |
| Focus on feature (implementation) | Focus on motivation (problem) |
| Limited context | Rich context |
| Hard to validate | Derived from real interviews |

---

## Writing good job stories

### 1. Add rich context to situations

The more specific the "When...", the better you can design solutions.

**Weak:**
> When I want to see what's happening...

**Strong:**
> When something fails unexpectedly and I'm under pressure to ship, and I need to understand what went wrong before standup...

### 2. Derive from real interviews, not personas

Job stories must come from actual customer conversations. You can't ask a persona about their anxieties.

**Before writing job stories, ask customers:**
- What were you trying to do when you first looked for a solution?
- What else was going on at that moment?
- What other solutions did you consider?
- What made you hesitate?

### 3. Keep jobs separate from solutions

Don't embed implementation in the job. Multiple solutions may address one job.

**Bad:**
> When I need to investigate a problem, I want to click on the logs tab...

**Good:**
> When I need to investigate a problem, I want to quickly understand what failed and why...

### 4. Include forces (anxieties, pushes, pulls)

Forces are what push customers toward or away from a solution.

| Force Type | Description | Example |
|------------|-------------|---------|
| **Push (toward)** | Pain with current situation | "Our current tool is slow and unreliable" |
| **Pull (toward)** | Attraction to new solution | "This new tool looks modern and fast" |
| **Push (away)** | Anxiety about switching | "Migration seems risky and complex" |
| **Habit** | Comfort with status quo | "We've always used the incumbent" |

### 5. Focus on situation, not user type

The same person can have different jobs in different situations. Focus on the situation.

---

## Job story examples

> Generic examples — replace with stories drawn from interviews with your own customers.

**Onboarding:**
> When I'm onboarding a new team onto the product and they're skeptical of switching tools, I want to demonstrate value quickly with minimal setup friction, so I can build internal champions before renewal decisions.

**Reliability:**
> When the product behaves inconsistently and the team is losing trust in the signal it gives, I want to identify the root cause and address it, so I can restore confidence in the tool.

**Evaluation:**
> When I'm evaluating the product against competitors and need to justify the cost to leadership, I want clear evidence of time saved and reliability gains, so I can make a compelling business case.

**Debugging:**
> When something fails unexpectedly right before a deadline and I'm under pressure from my manager, I want to quickly understand what went wrong and whether it's something I changed or a system issue, so I can either fix it fast or escalate appropriately.

---

## Identifying jobs in specs

For each spec, identify:

| Element | Question to Answer |
|---------|-------------------|
| **Main Job** | What is the customer ultimately trying to accomplish? *(Format: verb + object + context + success condition)* |
| **Struggling Moment** | What triggers the need for a solution? When do they realize the current approach isn't working? |
| **Related Jobs** | What smaller jobs ladder up to the main job? |
| **Functional dimension** | What task needs to get done? |
| **Emotional dimension** | How do they want to feel? |
| **Social dimension** | How do they want to be perceived? |
| **Competing solutions** | What do they "hire" today? (including workarounds, manual processes, competitors) |

---

## Capturing jobs in research

When conducting customer interviews:

1. **Listen for struggling moments** — When did they realize they needed something?
2. **Capture the situation** — What was happening around them?
3. **Note the forces** — What pushed them to act? What made them hesitate?
4. **Record actual quotes** — Use their words, not your interpretation

### Interview questions for JTBD

- "Walk me through the last time you had to [do the thing]..."
- "What was going on that made you look for a solution?"
- "What did you try before this?"
- "What almost stopped you from switching?"
- "What would you do if this didn't exist?"

---

## Common mistakes

| Mistake | Why It's Wrong | Fix |
|---------|---------------|-----|
| Starting with the solution | Skips understanding the real job | Start with "When..." not "I want a feature that..." |
| Using personas | Assumes behaviours from demographics | Focus on situations anyone might be in |
| Vague situations | Can't design specific solutions | Add context: time pressure, emotions, constraints |
| Missing forces | Ignores why people hesitate | Explicitly capture anxieties and competing habits |
| One job per feature | Features often serve multiple jobs | Map jobs independently, then connect to solutions |

---

## Further reading

- [Replacing the User Story with the Job Story](https://jtbd.info/replacing-the-user-story-with-the-job-story-af7cdee10c27) — Alan Klement
- [5 Tips for Writing a Job Story](https://jtbd.info/5-tips-for-writing-a-job-story-7c9092911fc9) — Alan Klement
- [When Coffee and Kale Compete](http://www.whencoffeeandkalecompete.com/) — Free book on JTBD
- [Know Your Customers' Jobs to Be Done](https://hbr.org/2016/09/know-your-customers-jobs-to-be-done) — HBR article by Clayton Christensen

---

## Related

- [Job Spec template](../templates/job-spec.md) — the standing per-job doc the job story lives inside
- [Writing an RFC](./product-specs.md) — the ship-coupled delivery doc that opens with the job
- [Agentic Delivery](./agentic-delivery.md) — how the standing Job Spec anchors agent-delivered work
