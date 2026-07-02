# ProductOS

**Product execution guidance for humans and agents.** The right context at
every layer, from strategy down to a single job, so whoever's working there
makes the right call. Judgement for the humans, executable guidance and
automation for the agents.

ProductOS is the method. The working example in action is
**[switchroom](https://github.com/switchroom/switchroom)**.

> Augment the judgment, automate the delivery.

---

## Building got cheap. Judgement got scarce.

An agent can draft the spec, write the code, and run the tests before you've booked the kickoff. The bottleneck moved. It isn't capacity any more. It's whether everyone touching the work, human or agent, has the context to make the right call, and whether someone catches it when they don't.

ProductOS is that context. Each layer gets its own document, so a PM, an engineer, a designer, PMM, or an agent has exactly what that layer needs and nothing it doesn't. Humans read them to make the judgement calls. Agents read the same documents as executable guidance, with automation and skills on top.

**→ Start with [Agentic Delivery](./guides/agentic-delivery.md): the verdict rule and the four parts.**

---

## The hierarchy

```
Strategy                          which jobs are funded now, which are deferred (sibling to the anchors)
Vision · Principles · Invariants  three anchors: the why / built-well / never-cross
        ↓
Product Spec                      per product: names the outcomes, owns the job list
        ↓
Job Specs                         per job: durable, outcome-focused, UAT-verifiable
        ↓
RFCs / PRs                        ship-coupled delivery (not a named tier)
```

**Verdict rule.** A change ships only when it advances a vision outcome **and**
satisfies its Job Spec **and** passes every principle **and** crosses no
invariant.

## Match the effort to the size

One path for everything is no path at all. The verdict rule is the *bar*, not
the *paperwork*, scale the gates to the stakes.

| | Quick Win | Lightweight | Full Spec |
|---|---|---|---|
| **Size** | ≤ half a day | ½ day–2 wks | > 2 wks |
| **Process** | Flag Tech Lead/PM, ship | 1-page brief | Full RFC + RICE |
| **Approval** | Tech Lead/PM | PM + Tech Lead | Head of Product |
| **Gates** | Outcome sanity check | Outcome UAT + 2-wk review | Full verdict, 2wk/30d/90d |

A **Fast Path** exists for small work with outsized upside (< 1 day, ≤ 2 per
team per cycle). An internal decision-framework layer tiers the paths by size
and stakes.

---

## What's here

| Folder | What it is |
|---|---|
| **`anchors/`** | The three anchors: `product-vision`, `product-principles`, `invariants`, and how to write each. |
| **`guides/`** | The OS method: `agentic-delivery` (the verdict rule + four parts), `strategy-as-code`, `jtbd-guide`, `org-as-an-api`, `product-specs`, `headline-metric`. |
| **`templates/`** | The blank shapes: `strategy.md`, `product-spec.md`, `job-spec.md`, `job-links.md`, `rfc.md`, `decision-record.md`. |
| **`examples/`** | Worked, filled examples: `strategy-example/` (Tempo, a fictional team-scheduling product). |
| **`skills/`** | Agent-executable skills: `create-job-spec`, `feedback-to-jobs`, `uat-ux-debug`. |
| **`AGENTS.md`** | The terse operating contract: read this to *execute* the method. |
| **`pm-playbook/`** | Separate human-craft layer: the six-phase PM loop, discovery, RICE, personas. It references the OS; the OS never references it. Not part of the published method. |

---

## Start here

- **Run the method (agent):** [`AGENTS.md`](./AGENTS.md): the gate, the triggers, the reviewer checklist.
- **Write a spec:** [`templates/job-spec.md`](./templates/job-spec.md) + the [`create-job-spec`](./skills/create-job-spec/SKILL.md) skill (it interviews you, then writes it).
- **Set the why / good / lines:** the anchors: [vision](./anchors/product-vision.md), [principles](./anchors/product-principles.md), [invariants](./anchors/invariants.md).
- **Run a design loop (agent):** [`guides/agentic-delivery.md`](./guides/agentic-delivery.md): the four parts and the verdict rule.

---

## The worked example

**[switchroom](https://github.com/switchroom/switchroom/tree/main/reference)**:
real anchors, a product spec, and 21 Job Specs. The method filled in and proven
against a live UAT harness. When a guide here needs an example, it points there.
