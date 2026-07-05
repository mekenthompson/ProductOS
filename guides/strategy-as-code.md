---
title: Strategy as Code
description: "Strategy as a versioned, diffable artefact, with decision records that capture why it changed."
last_reviewed: 2026-07-02
icon: "🧭"
---

# Strategy as Code

Most product strategies fail quietly. Not because the team lacked conviction when they wrote it, but because the document lived somewhere no one could inspect, and by the time the market moved, no one remembered what they had originally believed or why.

Two failure modes drive this:

**Strategy you can't inspect or diff.** A strategy buried in a slide deck or a Notion page has no history. You can see what it says today; you cannot see what it said six months ago. You cannot see what changed. You cannot ask what we believed then that we no longer believe now. The decision that turned out wrong leaves no trace.

**Strategy with no memory of why it changed.** Even teams that update their strategy regularly lose the rationale. The current view is overwritten. The trade-offs that produced it, what we gave up, what we bet on, what we were blind to, disappear. The next person inheriting the strategy has no way to understand which parts are load-bearing and which are up for revision.

A third problem compounds both: **strategy drifting from execution.** The strategy names the jobs that matter; the roadmap funds different ones; nobody notices for two quarters. The strategy-as-code approach addresses all three together.

> 📖 This is the method guide. Read it alongside the [Strategy template](../templates/strategy.md) (the blank spine), [Decision Record template](../templates/decision-record.md) (the why, archived), [Org as an API](org-as-an-api.md) (gathering the evidence to form the view), and [Agentic Delivery](agentic-delivery.md) (running the build once the order is set). The worked example lives in [`examples/tempo/strategy/`](../examples/tempo/strategy/README.md).

---

## Where strategy sits

Strategy is not above the anchors. It does not override the vision, the principles, or the invariants. Those three anchors are **durable**: they carry the product's why, its built-well bar, and the lines it won't cross by construction. They change rarely, and when they do it is a deliberate, human-ratified act.

Strategy sits beside the anchors as a **sibling layer**. It is the market-driven view of how to deploy finite capacity, given who the customers are, what the competitive moment looks like, and which jobs most need investment in the next twelve-plus months.

```
Vision · Principles · Invariants        three anchors (durable: the why / built-well / never-cross)
Strategy                                sibling layer (12+ months; market-driven; changes as dynamics shift)
        ↓
Job Specs                               per job, durable, outcome-focused, UAT-verifiable
                                        ↑
Product Spec                            per product, owns the job list
```

The distinction matters. Anchors are stable by design: they define the kind of product you are building and the standards you hold. Strategy is explicitly expected to change as the market changes, as customers change, as competitors move. What stays constant is the anchors; what adapts is the strategy. A strategy that never changes is not a strategy. It is a mission statement that doesn't know what it is.

> [!IMPORTANT]
>
> **What strategy is not doing:** it is not re-examining the anchors. It is not asking whether the vision is right or whether the principles should be different. Those are the anchors' job. Strategy takes the anchors as given and asks: *given who we are and what we will not compromise, where do we put the capacity?*

**What strategy is doing:** naming which jobs to fund, which to explicitly defer, and what evidence and reasoning drove that allocation. It links down to the Job Specs that matter now and names the ones that don't, so the team is not guessing what is in scope.

---

## The STRATEGY.md spine

Strategy lives in a `STRATEGY.md` file in the repository. That is the deliberate choice: a file in git, not a slide, not a Notion page. A file you can diff.

The spine follows a fixed structure, not because rigidity is a virtue, but because consistent structure is what makes diffs legible. When the Situation section changes, you see it. When the Pillars shift, you see it. When a deferral gets promoted to a funded pillar, you see it. The structure makes the change visible; the decision record explains it.

The structure is not arbitrary. It is Richard Rumelt's *kernel of good strategy*, from *Good Strategy / Bad Strategy* (2011), written to disk. Rumelt argues every real strategy has three parts: a **diagnosis** of the challenge, a **guiding policy** for dealing with it, and a set of **coherent actions** that carry the policy out. The spine maps onto the kernel directly:

| Rumelt's kernel | STRATEGY.md section |
|---|---|
| Diagnosis, name the challenge, simplify the situation to its critical points | **Situation** |
| Guiding policy, the overall approach chosen to cope with the diagnosis | **Strategy** (thesis + allocation) |
| Coherent actions, coordinated steps that carry out the policy | **Pillars** (each funding its Job Specs) |
| The argument, why these actions, given this diagnosis | **Why This Wins** |

The sections, in order:

- **Situation** -- the diagnosis. What is true about the market, the customers, the competitive position. This is the foundation everything else stands on.
- **Strategy** -- the guiding policy: the thesis and the investment allocation. Where the capacity goes, and the decision tests that gate it.
- **Pillars** -- the coherent actions: the funded bets. Each names its thesis, its outcome measure, and the Job Specs it funds.
- **Explicit Deferrals** -- what we are not doing this period, and why. The absence of a decision is itself a decision; Rumelt's point that "choice means setting aside some goals in favour of others" gets its own section here.
- **Data Gaps** -- the hypotheses we have not confirmed and what would confirm them.
- **Why This Wins** -- the coherent-action argument: why this particular allocation, given this situation, produces the outcome. Rumelt's definition is the bar: strategy is "coherent action backed by an argument." This section is the argument.

See the [Strategy template](../templates/strategy.md) for the blank form with section-level guidance.

---

## Decisions as diffs

The git diff shows what changed. The decision record explains why.

These two things are always paired. When a material strategy change lands (a new pillar added, a funded job deferred, the investment allocation shifted), two things happen:

1. **STRATEGY.md is updated** in a commit. The diff is permanent. Anyone can `git diff` between any two commits and see exactly what changed.
2. **A decision record is written** for that commit. It captures: what changed in the world that triggered this (a competitor move, a customer signal, a market shift), what we are now doing differently, and what this commits us to: what we give up, what we bet on, what we are now blind to.

The decision record lives in a `decisions/` folder, named by date and a slug, and carries a link to the commit it accompanies. The commit SHA and the decision record are the two halves of a complete record: *what* and *why*, inseparable.

This is what gives the strategy memory. Six months later, when someone asks "why did we drop pillar 2?", the answer is not in anyone's head. It is in the decision record that links to the commit. The reasoning is durable even when the strategy has moved on.

---

## The evidenced / hypothesis / to-validate discipline

Not every claim in the Situation section has the same standing. Treating them all the same, as facts, is how strategies become confident and wrong simultaneously.

Every claim in the Situation is labelled one of three things:

- **evidenced** -- supported by data you can point to: customer interviews, usage numbers, churn signals, ARR movement, win/loss data. The evidence exists and the claim follows from it.
- **hypothesis** -- a reasoned belief you hold, not yet confirmed. You have grounds for it, but the data is not there yet.
- **to-validate** -- an open question you know you need to answer before you can act on this safely.

The labels are not decoration. They tell the team what is load-bearing and what is provisional. An investment allocation that rests on three hypotheses and two to-validates is a different kind of bet than one that rests on evidenced claims. The team should know which kind they are making.

**The Data Gaps section** is where the open hypotheses live, with their validation paths. What would confirm them. What would falsify them. What signal you are waiting for. This is the section that ages fastest and deserves the most attention on a cadence review.

**Org as an API is the accelerant here.** Joining feedback, support, CRM, and finance around the job is the mechanism that converts hypotheses into evidenced claims. It does not invent the strategy (that remains a human judgement), but it closes the loop between "we believe customers need this" and "here is the account-by-account evidence that they do." See [Org as an API](org-as-an-api.md) for the join method.

---

## The bad-strategy smell test

A strategy in a file you can diff is only worth having if what is in the file is actually a strategy. Rumelt's larger point in *Good Strategy / Bad Strategy* is that most "strategy" is **bad strategy**: not wrong bets, but the absence of strategy dressed up as one. He names four signatures of it. Each one is a lint you can run against a STRATEGY.md before it is committed.

- **Fluff.** Buzzwords standing in for thought. Rumelt's test: strip the jargon and see what is left. If "customer-centric intermediation" reduces to "we are a bank," it was fluff. *Lint:* can every Situation and Strategy line survive a plain-language rewrite? Flag "world-class", "synergy", "best-in-class", "leverage our platform" where they carry no specific claim.
- **Failure to face the challenge.** No named obstacle in the Situation. "If you fail to identify and analyse the obstacles, you don't have a strategy, you have a stretch goal or a budget or a list of things you wish would happen." *Lint:* the Situation must name a specific, hard challenge, not just describe the market. "Grow revenue" is not a challenge.
- **Mistaking goals for strategy.** A metric or aspiration with no mechanism. "20% growth" is ambition, not strategy. *Lint:* the Strategy section must contain a guiding policy, a chosen *approach*, not just a target. A number with no point of leverage fails.
- **Bad strategic objectives.** Two shapes. The *dog's dinner*: a sprawling, undifferentiated list of everything (Rumelt's example: a plan with 47 strategies and 178 action items). And the *blue-sky* objective: a restatement of the desired end state that skips how you get there. *Lint:* count the Pillars; if everything is a priority, nothing is. And check the Pillars are meaningfully easier than the original challenge: if an objective is as hard to hit as the problem it answers, it has added nothing.

These map onto the spine cleanly: fluff and failure-to-face-the-challenge are caught in the **Situation**, goals-as-strategy in the **Strategy**, and bad objectives in the **Pillars** and **Why This Wins**. An agent or reviewer can run the four checks as a pre-commit pass, the same way the adversarial review (below) hunts for load-bearing assumptions.

---

## Lifecycle: how the strategy stays honest

A strategy that is only updated on a calendar is a strategy that rots between reviews. A strategy that is updated on every signal is a strategy that loses coherence. The lifecycle has three triggers:

**Event-driven updates.** A material change in the world (a significant competitor move, a large customer leaving or expanding, a market signal that invalidates a core assumption) triggers a strategy review. Not every signal warrants a review; the bar is whether the signal changes what we would fund or defer. When it does, update STRATEGY.md and write a decision record.

**Cadence backstop.** A regular review cadence (quarterly is typical; adjust to the pace of your market) keeps the strategy from silently rotting in a slow-moving period. The cadence review either confirms the current view ("we looked, nothing material changed") or surfaces a drift that would have been caught later anyway. Either outcome is useful.

**Adversarial review on material changes.** Every material strategy update gets a deliberate adversarial pass before it is committed. A person or agent whose job in that session is to find where the strategy is wrong: what assumption is load-bearing and unconfirmed, what the strategy is blind to, which competitor move would break it. The adversarial review is not about making the strategy unpublishable. It is about finding the weak points before the market does. Its conclusions go into the decision record's "what we are now blind to" section.

Each material change produces exactly one dated decision record. Not a log entry, not a comment: a proper record with context, decision, and consequences. Over time, the `decisions/` folder becomes the strategy's memory: the full trail of what was believed, when, and why.

---

## For agents

When asked to update the strategy: read STRATEGY.md and the most recent decision record in `decisions/`. Update STRATEGY.md per the template sections. Draft a decision record in `decisions/YYYY-MM-DD-<slug>.md` with the context (what changed in the world), the decision (what we are now doing differently), and the consequences (commits, trade-offs, blind spots). The commit SHA goes in the decision record's `commit:` frontmatter field once committed. Flag any claim you are adding as evidenced, hypothesis, or to-validate, never unlabelled. Before committing, run two passes: the **bad-strategy smell test** (fluff, failure to face the challenge, goals mistaken for strategy, bad objectives; see the section above) and an **adversarial pass**: find the load-bearing assumptions, what the strategy is blind to, and what competitor move would break it. Document the weak points in the decision record's Blind spots field.

---

## Related

- [Strategy template](../templates/strategy.md) -- the blank spine
- [Decision Record template](../templates/decision-record.md) -- the why, archived
- [Org as an API](org-as-an-api.md) -- joining the evidence to form the view
- [Agentic Delivery](agentic-delivery.md) -- running the build once the order is set
- [Product Vision](../anchors/product-vision.md) -- one of the three anchors that strategy sits beside (not above or below)

## Further reading

- Richard Rumelt, *Good Strategy / Bad Strategy* (2011). The source of the kernel (diagnosis, guiding policy, coherent action) the STRATEGY.md spine is built on, and of the four bad-strategy signatures the smell test runs against.
