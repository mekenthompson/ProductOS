# ProductOS

**A product operating system in markdown: anchors, Job Specs, a verdict rule, and agent-executable skills that make delivery run.**

This is what I actually run product with. Every layer, from why we're building at all down to the single job in front of an agent, gets its own document, so whoever's touching the work, human or agent, has exactly the context that layer needs and makes the right call.

- **[Read it rendered →](https://mekenthompson.github.io/ProductOS/)** the published site, same content, easier to browse.
- **[See it filled in on a real product →](https://github.com/switchroom/switchroom/tree/main/reference)** real anchors, a product spec, 21 Job Specs, held against a live UAT harness.

---

## Building got cheap. Judgement got scarce.

An agent can draft the spec, write the code, and run the tests before you've booked the kickoff. The bottleneck moved. It isn't capacity any more. It's whether everyone touching the work, human or agent, has the context to make the right call, and whether someone catches it when they don't.

ProductOS is that context: a handful of markdown files that carry each decision down the chain, so judgement stays in the loop while the work runs at agent speed.

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

One path for everything is no path at all. The verdict rule is the *bar*, not the *paperwork*, scale the gates to the stakes.

| | Quick Win | Lightweight | Full Spec |
|---|---|---|---|
| **Size** | ≤ half a day | ½ day-2 wks | > 2 wks |
| **Process** | Flag Tech Lead/PM, ship | 1-page brief | Full RFC + RICE |
| **Approval** | Tech Lead/PM | PM + Tech Lead | Head of Product |
| **Gates** | Outcome sanity check | Outcome UAT + 2-wk review | Full verdict, 2wk/30d/90d |

Full detail on picking a path: [Decision Framework](./pm-playbook/decision-framework.md).

---

## Adopt it

This is reference-only: there's no installer. You copy the shapes below and fill them in for your product. The canonical walkthrough is [`guides/adopting.md`](./guides/adopting.md); the compressed version:

1. Read the method ([`guides/agentic-delivery.md`](./guides/agentic-delivery.md)) and the [worked example](./guides/worked-example.md) of one job running the loop.
2. Copy the shapes: `templates/` and the [`AGENTS.md`](./AGENTS.md) contract pattern.
3. Write your three anchors: [vision](./anchors/product-vision.md), [principles](./anchors/product-principles.md), [invariants](./anchors/invariants.md).
4. Write your product spec and first Job Spec, using the [`create-job-spec`](./skills/create-job-spec/SKILL.md) skill to interview you through it.
5. Point your agent at your `AGENTS.md` and run the loop.

---

## What's here

| Folder | What it is |
|---|---|
| **`anchors/`** | The three anchors: `product-vision`, `product-principles`, `invariants`, and how to write each. |
| **`guides/`** | The OS method: `agentic-delivery` (the verdict rule + four parts), `adopting`, `worked-example`, `strategy-as-code`, `jtbd-guide`, `org-as-an-api`, `writing-an-rfc`, `headline-metric`. |
| **`templates/`** | The blank shapes: `strategy.md`, `product-spec.md`, `job-spec.md`, `job-links.md`, `rfc.md`, `decision-record.md`. |
| **`examples/`** | Worked, filled examples: `tempo/` (Tempo, a fictional team-scheduling product, one worked set). |
| **`skills/`** | Agent-executable skills: `create-job-spec`, `feedback-to-jobs`, `uat-ux-debug`. |
| **`AGENTS.md`** | The terse operating contract: read this to *execute* the method. |
| **`pm-playbook/`** | Separate human-craft layer: the six-phase PM loop, discovery, RICE, personas. It references the OS; the OS never references it. |
| **`astro.config.mjs`, `src/`, `public/`, `scripts/`** | Site plumbing. The Starlight site builds straight from the same markdown files above, this is the machinery, not new content. |

---

## The working example

**[switchroom](https://github.com/switchroom/switchroom)** runs the method live. The filled-in reference sits at [`switchroom/reference`](https://github.com/switchroom/switchroom/tree/main/reference): real anchors, a product spec, 21 Job Specs, all proven against a live UAT harness. When a guide here needs an example, it points there.
