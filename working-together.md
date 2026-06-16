---
title: Working Together
description: How the product triad — product, engineering, and design — collaborates
last_reviewed: 2026-05-12
icon: "🧩"
---

# Working together

Product, engineering, and design form the product triad. Three disciplines, one product. This doc covers how the triad works day to day: who owns what, how decisions get made, and what everyone on a product team can expect from each other.

Everything connects back to the [headline metric](product-vision.md) named in the product vision — that's the number every PR, design review, and post-launch review tests against.

> 📖 Read this alongside [Product Playbook](product-playbook.md) (the operating model) and [PM Handbook](pm-handbook.md) (for PMs specifically).

---

## Each discipline owns its domain

Product owns the problem. Engineering owns the solution. Design owns the experience.

**Product** decides *what* to build and *why*, backed by customer evidence.

- PMs bring the research, usage data, and support patterns that prove a problem is real.
- They set success criteria and decide when something is ready for customers — a broader call than "is the code done" because it includes docs, experience, and GTM readiness.

**Engineering** decides *how* to build it.

- EMs and Tech Leads own technical approach, architecture, effort estimates, and code quality.
- They decide when code is production-ready. Production-ready and customer-ready are different calls. The first belongs to engineering, the second to product.

**Design** decides *what it feels like to use*.

- Design Engineers own the full experience: user flows, interaction patterns, visual execution, frontend implementation, and consistency across the product.
- They're in the room when problems get framed, not brought in later for polish.
- The triad doesn't ship without design sign-off on the experience.

Nobody dictates another's domain. Product doesn't tell engineering which database to use. Engineering doesn't dismiss a customer problem as "too complex" without proposing an alternative. Design doesn't get overruled on UX without a conversation.

### Where engineers on product teams fit

The triad sets direction. Engineers on the team build it. That doesn't make you passive in the process.

**You can identify problems and propose solutions.** If you spot a customer pain point, a UX problem, or a pattern in support tickets, say something. File a bug, raise it in standup, bring it to your EM or PM, or write an RFC yourself. You don't need permission. The bar for a good RFC is evidence of a real problem and a clear solution, regardless of who writes it.

**You should know why you're building something.** If you're handed an implementation without context on the problem it solves, ask. "What problem does this solve?" is always a fair question. If the answer isn't clear, that's a signal the work isn't ready.

**You can expect clarity from the triad.** Clear specs before build starts, honest scope conversations when trade-offs come up, and post-launch reviews that measure whether the thing you built actually worked.

---

## How decisions get made

### Specify the outcome, not the implementation

> "We need sub-50ms query response times" not "use PostgreSQL."
> "Users should understand what failed without leaving the page" not "add a modal with error details."

Product describes the problem and success criteria. Design describes what the experience should feel like. Engineering decides how to get there.

If someone hands you an implementation instead of a problem, push back. That applies in both directions. A PM telling engineering what technology to use is just as wrong as engineering telling product which problems matter.

### Decision authority

| Decision | Who decides |
|----------|------------|
| What problem to solve | Product, with triad input |
| Technical approach and architecture | Engineering |
| Experience and interaction patterns | Design |
| Effort estimates | Engineering (feeds [RICE scoring](guides/rice.md)) |
| When code is production-ready | Tech Lead |
| When to ship to customers | Product (coordinates docs, experience, GTM) |
| Scope negotiation | Shared: product owns requirements, engineering owns feasibility, design owns experience quality |

### Your product principles are the quality bar

Whatever set of [product principles](guides/product-principles.md) the team has agreed on, they are applied in PR reviews, design critiques, and scope discussions — by everyone on the triad, not just product or design. When you're reviewing a PR, ask whether the change meets each principle. When design raises a consistency concern grounded in a principle, that's the principle working as intended.

See [Product Principles](guides/product-principles.md) for how to write and apply yours.

---

## Roles when agents do much of the delivery

The triad above still owns the product when an **agentic workforce** does much of the building — what shifts is *execution*, not ownership. Agents own delivery *within the gates*; humans keep the anchors and the judgement. See [Agentic Delivery](guides/agentic-delivery.md) for the full method.

| Responsibility | Human-triad default | When agents deliver |
|---|---|---|
| Anchors — vision, principles, invariants | Product | **Stays human** — agents consume, never author |
| Principles (product + engineering standards) | Triad | Human-owned; agents *apply* them as a gate |
| Job Specs | PM authors | Agent may *draft*; a human (or fresh-process reviewer) ratifies the job statement |
| Technical approach / architecture / NFRs | Engineering | **Engineering owns** — sets the non-functional bar the agents build to |
| Design loops (implement, research unknowns) | Engineering | Delivery agents run it **under engineering oversight** |
| Adversarial review | Tech Lead / peer | **Fresh-process reviewer** — a separate process, never the author |
| Outcome UAT (customer-ready) | PM defines, Eng runs | Agent runs it; a human spot-checks ≥ 1 real round-trip |
| Production-readiness (engineering acceptance) | Tech Lead | **Engineering signs off** — depth scales with the stakes |

The load-bearing invariant: **the anchors stay human, and the reviewer is always a fresh process.** Engineers bring expertise and oversight; the agents bring throughput. Higher stakes mean deeper oversight and a higher non-functional bar — same roles, more rigour.

---

## How work reaches the team

Ideas enter through customer feedback, research, analytics, or internal discovery. Anyone can bring an idea, but every idea passes through **Signal → Standard → Speed** before it becomes work:

1. **Signal** — Is it strategy-aligned? Is there evidence of a real need?
2. **Standard** — Does it meet our three product principles?
3. **Speed** — How big is it? This determines the path:

| Path | Size | What the team gets | What happens |
|------|------|---------------------|--------------|
| **Quick Win** | Half a day or less | Verbal scope | Flag with EM/PM, then ship. Limited budget per sprint. |
| **Lightweight** | Half a day to 2 weeks | 1-page brief (Problem, Solution, Acceptance Criteria, Metrics) | Engineering confirms sizing. Build behind flag. |
| **Full Spec** | More than 2 weeks | RFC | Engineering confirms feasibility. Full triad alignment before build. |

Quick Wins are worth calling out. If you see something that takes less than half a day and passes Signal and Standard, you don't need an RFC or a meeting. Just do it. This is true for anyone on the team, not just the triad.

RFCs aren't exclusive to PMs either. If an engineer or a Design Engineer identifies a problem worth solving, write the RFC. It still gets reviewed and prioritised through the normal process.

> 🔗 See [Decision Framework](guides/decision-framework.md) for the full detail.

---

## The RFC

One document, not a separate PRD and tech spec. One ship-coupled RFC that captures the problem, the solution, and how we'll build and measure it.

| Section | Led by |
|---------|--------|
| Problem and success criteria | Product |
| Technical approach | Engineering |
| Experience | Design |

All three review the whole thing before build starts. If you're an engineer on the team and the RFC doesn't make sense, raise it before you start building. RFCs should answer your questions, not create them.

> 🔗 See [Writing an RFC](guides/product-specs.md) for the full guide and [RFC Template](templates/rfc.md) for the template.

---

## Scope, estimates, and trade-offs

Scope is a conversation, not a mandate.

"We could do X in 3 days or Y in 3 weeks, here's the trade-off" is exactly the kind of conversation we want.

- Product re-scopes.
- Engineering proposes alternatives.
- Design simplifies flows.
- The triad lands on something shippable that solves the actual problem.

If the problem is real but the solution is too expensive or the experience can't be simplified enough, the answer is to find a simpler way to solve the same problem. Not "build it anyway." Not "drop it." Find a cheaper path to the same outcome.

> ⚠️ Effort estimates feed [RICE scores](guides/rice.md), which feed prioritisation. A sandbagged estimate distorts that just as much as an optimistic one. Give your best guess, flag uncertainty, and update when you learn more.

---

## Instrument before you ship

If you can't measure it, don't ship it.

- Define success criteria in the spec.
- Wire up analytics before launch.
- Post-launch reviews depend on this data, and the feedback loop breaks without it.

PMs define the criteria, but engineers wire up the instrumentation and Design Engineers validate that the experience works as intended. If you don't know what "success" looks like for the thing you're building, ask before you start.

---

## After you ship

Shipping is the beginning. Shipped work gets measured, not to judge, but to learn.

Post-launch reviews happen at **2 weeks**, **30 days**, and **60-90 days**. PM runs them, but the data comes from the instrumentation the team wired up. The outcome is one of:

| Outcome | What it means |
|---------|--------------|
| **Accelerate** | Broader rollout, double down |
| **Iterate** | Adjust based on feedback |
| **Pivot** | Change approach based on what we learned |
| **Investigate** | More data needed |
| **Stop** | Wind down, redirect effort elsewhere |

Stopping is not failure. Continuing to invest in something the data says isn't working is.

---

## Technical decisions and tech debt

If a technical approach involves trade-offs that future engineers will wonder about, write it down. ADRs (Architecture Decision Records) capture the context, options considered, and rationale. Link them from the RFC so the reasoning is discoverable.

Tech debt, infrastructure work, refactors, and reliability improvements don't need an RFC. But they need visibility.

> ⚠️ EMs and Tech Leads: drop a note in the issue tracker so the rest of the team knows where capacity is going. If nobody knew a refactor was eating two weeks of capacity, that's a problem regardless of whether the refactor was worth it.

---

## Common situations

**You found a UX issue while building.**

- *Small fix* (button label, error message) → Fix it in the PR and mention it.
- *Flow change* (reordering steps, adding a confirmation) → Check with design or product first.
- *New surface* (modal, settings page) → Definitely check first.
- When in doubt, tag someone in the PR before merging. A 2-minute review beats a post-ship revert.

**The problem is real but the solution is too expensive.**
Find a cheaper path to the same outcome. "Just build it" and "drop it" are both wrong answers.

**You want to build without an RFC.**
Fine for tech debt, infrastructure, refactors, reliability. But make it visible in your tracker.

**Who decides when to ship?**
Two decisions, two owners:

- **Tech Lead** decides production-ready (code quality, stability, performance).
- **Product** decides customer-ready (docs, experience, GTM).
- Both need to be true before GA.

**Design and engineering disagree on implementation.**
Start with the principle: does the proposed approach pass "one mind built this"? If it creates inconsistency with adjacent features, design's concern is valid. If the consistent approach has serious technical cost, engineering's concern is valid. Talk it through.

**Design wants to rethink the approach mid-build.**
If usability testing found a real problem, that's the system working. Better to adjust now than ship something users struggle with. If it's a preference change, weigh it against delivery cost. Design explains the why, engineering scopes the impact, product decides if the trade-off is worth it.

**You disagree with the triad's direction.**
Raise it. Bring evidence if you have it. "I've been working in this area and I think X is going to cause problems because Y" is a valuable input. The triad should welcome it. If they don't, that's a sign something is off.

---

## Signs the triad is out of balance

- **Product is dictating solutions.** Step back to the problem. What outcome are we actually trying to achieve?
- **Engineering is building without clarity on the problem.** Pause and ask: who has this problem and what's the evidence?
- **Design is brought in after decisions are made.** Reset. Design shapes solutions from the start.
- **Scope keeps growing without re-evaluation.** Revisit the spec. What's the smallest thing that tests the hypothesis?
- **Nobody knows if shipped work is being used.** Instrumentation gap. Fix it before shipping the next thing.
- **Engineers on the team don't know why they're building something.** The spec failed. Revisit it.

If the triad can't resolve a disagreement, bring it to your leads with context and options, not just the disagreement. "We disagree on X. Here are the trade-offs. Here's what we recommend" is useful. "We can't agree" is not.

---

## Quick reference

| If you want to... | Go to |
|-------------------|-------|
| Understand the full operating model | [Product Playbook](product-playbook.md) |
| See the product vision and personas | [Product Vision](product-vision.md) |
| Understand how we decide what to build | [Decision Framework](guides/decision-framework.md) |
| See how RFCs work | [Writing an RFC](guides/product-specs.md) |
| Understand the delivery workflow | [Delivery Standards](guides/delivery-standards.md) |
| Grab an RFC template | [RFC](templates/rfc.md) |
