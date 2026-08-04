<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="branding/lockup-horizontal-reversed.svg">
    <img src="branding/lockup-horizontal.svg" alt="ProductOS" width="380">
  </picture>
</p>

<p align="center"><strong>A product operating system in markdown: anchors, Job Specs, a verdict rule, and agent-executable skills that make delivery run.</strong></p>

---

This is what I actually run product with. Every layer, from why we're building at all down to the single job in front of an agent, gets its own document, so whoever's touching the work, human or agent, has exactly the context that layer needs and makes the right call.

### 👉 Read it on the web: **[theproductos.com](https://theproductos.com/)**

That's the front door: the whole method, browsable, searchable, always current. This repo is the source the site builds from; if you just want to *read* ProductOS, start on the site.

Hosting is dual-mode: the canonical deploy sets `CUSTOM_DOMAIN` in the deploy workflow and serves https://theproductos.com/ at the domain root, while a fork needs no configuration at all and automatically hosts a working copy at its own `https://<owner>.github.io/<repo>/` project page (the site and base URLs are derived from the repository, see `src/site-config.mjs`).

Once you're in:

- **[Adopt it →](https://theproductos.com/guides/adopting/)** no installer; copy the shapes into your own repo in an afternoon.
- **[See it filled in on a real product →](https://github.com/switchroom/switchroom/tree/main/reference)** switchroom is a separate codebase running ProductOS end to end (a worked example, not the ProductOS source): real anchors, a product spec, 20+ Job Specs, held against a live UAT harness.

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

---

## Adopt it

This is reference-only: there's no installer, no sync, nothing to run. You copy the shapes and fill them in for your product. The canonical walkthrough is [`guides/adopting.md`](./guides/adopting.md); the compressed version:

1. Read the method ([`guides/agentic-delivery.md`](./guides/agentic-delivery.md)) and the [worked example](./guides/worked-example.md) of one job running the loop.
2. Copy the shapes: `templates/`, the [`AGENTS.md`](./AGENTS.md) contract pattern, and the [`skills/`](./skills/README.md) folders into your repo's `.claude/skills/` so your agent discovers them.
3. Write your three anchors: [vision](./anchors/product-vision.md), [principles](./anchors/product-principles.md), [invariants](./anchors/invariants.md).
4. Write your product spec and first Job Spec, using the [`create-product-spec`](./skills/create-product-spec/SKILL.md) and [`create-job-spec`](./skills/create-job-spec/SKILL.md) skills to interview you through them.
5. Point your agent at your `AGENTS.md` and run the loop: draft RFCs with [`create-rfc`](./skills/create-rfc/SKILL.md), gate every document through [`review-doc`](./skills/review-doc/SKILL.md), and guard ratified specs with [`amend-durable-doc`](./skills/amend-durable-doc/SKILL.md).

---

## Match the effort to the size

One path for everything is no path at all. The verdict rule is the *bar*, not the *paperwork*, scale the gates to the stakes.

| | Quick Win | Lightweight | Full Spec |
|---|---|---|---|
| **Size** | ≤ half a day | ½ day-2 wks | > 2 wks |
| **Process** | Flag Tech Lead/PM, ship | 1-page brief | Full RFC + RICE |
| **Approval** | Tech Lead/PM | PM + Tech Lead | Head of Product |
| **Gates** | Outcome sanity check | Outcome UAT + 2-wk review | Full verdict, 2wk/30d/90d |

Full detail on picking a path: [Decision Framework](./product-playbook/decision-framework.md).

---

## What's here

| Folder | What it is |
|---|---|
| **`anchors/`** | The three anchors: `product-vision`, `product-principles`, `invariants`, and how to write each. |
| **`guides/`** | The OS method: `agentic-delivery` (the verdict rule + four parts), `adopting`, `worked-example`, `strategy-as-code`, `jtbd-guide`, `org-as-an-api`, `writing-an-rfc`, `headline-metric`. |
| **`templates/`** | The blank shapes: `strategy.md`, `product-spec.md`, `job-spec.md`, `job-links.md`, `rfc.md`, `decision-record.md`. |
| **`examples/`** | Worked, filled examples: `tempo/` (Tempo, a fictional team-scheduling product, one worked set). |
| **`skills/`** | Agent-executable skills. Creation (interview to alignment, never draft from assumptions): `create-strategy`, `create-product-spec`, `create-job-spec`, `create-rfc`. Gates: `review-doc` (the fresh-process document reviewer), `amend-durable-doc` (the drift guard on ratified docs). Plus `feedback-to-jobs` (demand intake) and `uat-ux-debug` (outcome debugging). |
| **`AGENTS.md`** | The terse operating contract: read this to *execute* the method. |
| **`product-playbook/`** | Separate human-craft layer for the whole product function (PM, design, marketing, research): the six-phase loop, the judgement system (`craft`, with predictions written and scored inside the working artefacts), discovery, RICE, personas. It references the OS; the OS crosses back only over the named bridges in `AGENTS.md`. |
| **`astro.config.mjs`, `src/`, `public/`** | Site plumbing. The Starlight site builds straight from the same markdown files above, this is the machinery, not new content. |

---

## License

MIT. Take the shapes, adapt them, ship your own. See [LICENSE](./LICENSE).
