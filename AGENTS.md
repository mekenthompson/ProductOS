---
title: Agent Guidance
description: "The operating contract for agents working in ProductOS: the artifact hierarchy, verdict rule, triggers, and reviewer checklist."
---

# ProductOS: Agent Guidance

This repository is **ProductOS**, a reusable, product-agnostic **agentic-delivery operating system**: the anchors, Job Specs, templates, and agent-executable skills that make delivery *run*. Anything specific to a real product (vision, principles, invariants) is documented as a *guide*: what good looks like, when it's "done," and how to write your own.

The human PM craft (the six-phase loop, discovery, RICE, personas) is a **separate, human-owned layer**, kept in `pm-playbook/`. It is now **published as a top-level section of the live site**, the human-craft layer alongside the agentic method, but it stays a distinct layer with a one-way dependency: pm-playbook may reference the core (anchors, guides, templates); the core never references pm-playbook. ProductOS stays independent of the day-to-day craft, with one deliberate bridge: the craft's **path-tiering** (Quick Win / Lightweight / Full Spec) sets *how* the verdict rule scales. The gates never disappear; their depth tracks the stakes.

## Scope

- **Purpose**: Product management practices, processes, and principles
- **Audience**: Product leaders adopting or adapting this for their team
- **Format**: Markdown. Humans read it via the Starlight site; agents read the raw markdown.

## Agentic Delivery: operating contract

The terse, executable contract for the method narrated in [`guides/agentic-delivery.md`](./guides/agentic-delivery.md). That guide is the human narrative; this is the gate. Four working parts: **anchors · Job Specs · design loops · outcome UAT.** ("Four" is this method's anatomy, not a law for products; a product picks its own small number of vision outcomes, principles, and invariants.)

**Artifact hierarchy (top to bottom).** Three **anchors**, vision (why) · principles (built-well) · invariants (lines we won't cross by construction), hold for the whole product.

Beside them as a sibling, **Strategy** (STRATEGY.md) is the 12+ month, market-driven layer: given finite capacity, which jobs are funded this period and which are explicitly deferred. It references the anchors and links down to the Job Specs that matter now; it changes as business needs, market dynamics, and competitors change while the anchors stay stable.

Beneath the anchors, a **Product Spec** (one per product) names the product's outcomes, says how the product functions, and owns the list of jobs. Beneath that, **Job Specs** (one per job) are the durable, outcome-focused, UAT-verifiable contracts. **RFCs / PRs** are the ship-coupled, per-initiative delivery layer that references a Job Spec. They are NOT a named spec tier of their own.

**Verdict rule (the gate).** A change ships only when ALL hold:

1. it advances a named vision outcome (it's in scope at all);
2. it satisfies its Job Spec (does the user's job), proven by its outcome UAT;
3. it passes every principle check: product AND engineering standards (a "no" is a redesign, not a follow-up);
4. it crosses no invariant (the lines you won't cross by construction).

Else: out of scope, however clever.

**Triggers: what to do when.**

- **Scoping / designing →** read the vision; name which outcome the work serves. If none, stop.
- **Writing or changing a Job Spec →** use [`templates/job-spec.md`](./templates/job-spec.md); keep `job` / `outcome` / `stakes` stable, narrate retired approaches rather than rewriting the job. Same spine every job, depth scales to the stakes: The job (with the struggling moment), Today's alternatives, The bet, Measures of success, Good / bad (with a named silent failure), What the job requires, Prove it, Verdict, Abandon signal, and an optional Production-readiness bar; the `## Prove it` section must be non-empty. Doc-class by frontmatter key: `job:` = durable Job Spec; `artifact:` (or `artefact:`) / `serves:` = churny artifact (e.g. an RFC) that points up to a job.
  - **Outcome-drift backstop:** the `job` / `outcome` / `stakes` lines are diff-protected. Narrating a retired *implementation approach* is normal; changing the *outcome itself* is not a silent edit. It is a ratified event needing a recorded decision and re-ratification, the same discipline STRATEGY.md demands. A change to those three lines fails review unless it cites its decision record. Otherwise a "durable" Job Spec decays into a description of whatever shipped.
- **Reviewing →** dispatch a SEPARATE fresh-process reviewer (never the author; it rubber-stamps). It returns APPROVE / REQUEST_CHANGES / BLOCK citing file:line; iterate to APPROVE. Do NOT let an automated merge fire before APPROVE.
- **Shipping →** run the outcome UAT (job × surface, real path, independent of unit tests) AND the production-readiness check. Unit-green ≠ outcome-validated ≠ production-ready: three gates, none implies the others.

**Fresh-process reviewer checklist** (hand the reviewer these; an unscoped reviewer rubber-stamps):

1. advances the named outcome and passes the verdict gate incl. the invariant clause;
2. satisfies the cited Job Spec; does not silently rewrite the job;
3. outcome UAT present and actually re-proves the job (not just unit-green);
4. passes every principle check: product AND engineering standards;
5. Production-readiness met to the level the stakes demand (security, scale, availability, reliability);
6. the reviewer is a separate process and cites a location for every blocker.

**Ownership invariant** (extends "augmentation, not automation"; does not replace it). Agents own *delivery execution within the gates*: drafting Job Specs, implementing, running loops and UATs. Humans own the *gates and the judgement*: the vision, the principles, the invariants, ratifying the job statement, and engineering oversight. Agents consume the anchors; they never author them. This does NOT loosen the "Do NOT" rules below: changing the method's own policy (this contract, the AI stance, the anchors) is a human-ratified policy change, not routine agent delivery.

## Repo structure

The whole repo reads as the OS: anchors, the OS method guides, the OS
templates, and skills. The human PM craft is a separate, human-owned layer,
out of scope here.

```
productos/
├── README.md  AGENTS.md            # orientation + the operating contract
├── anchors/                        # the three anchors (human-owned)
│   ├── product-vision.md           # How to write the product vision (guide + template)
│   ├── product-principles.md       # How to write the standards your product is built to
│   └── invariants.md               # The lines you won't cross by construction
├── guides/                         # the OS method
│   ├── agentic-delivery.md         # The four-part method (anchors, Job Specs, design loops, outcome UAT)
│   ├── jtbd-guide.md               # Jobs to be Done in ProductOS (Christensen/Moesta/Klement, applied)
│   ├── worked-example.md           # One job run through the whole loop with a gate firing
│   ├── headline-metric.md          # The Anchor Signal: what a Signal is and how it drives the North Star
│   ├── org-as-an-api.md            # Sequence the roadmap by joining feedback/support/CRM/finance around the job
│   ├── adopting.md                 # How to bring ProductOS onto an existing product
│   ├── writing-an-rfc.md           # RFC how-to (lifecycle, approval, delivery)
│   └── strategy-as-code.md         # Strategy as a versioned, diffable artefact with decision records
├── templates/                      # the OS blank shapes
│   ├── product-spec.md             # The product-level layer: North Star, outcomes with Signals, the job index
│   ├── job-spec.md                 # The durable per-job outcome doc (job/outcome/stakes; same spine, depth scales to stakes; outlives any RFC)
│   ├── job-links.md                # The churny per-job join (accounts/ARR/renewals); serves: a Job Spec
│   ├── rfc.md                      # The ship-coupled, per-initiative delivery doc (JTBD-led)
│   ├── strategy.md                 # The STRATEGY.md spine (situation/thesis/pillars/deferrals/data-gaps)
│   └── decision-record.md          # Dated record of why a strategy change was made; links to its commit
├── examples/tempo/                 # the single worked set: one fictional company (Tempo) in every layer
│   ├── README.md                   # short overview: what Tempo is, the set in doc order
│   ├── strategy/                   # Tempo strategy: README (front door), STRATEGY.md, decisions/
│   ├── product-spec.md             # Tempo product spec (North Star, outcomes, job index)
│   ├── job-spec.md                 # Tempo Job Spec, full-stakes depth, gate fires on an invariant
│   ├── job-links.md                # Tempo Job Links for the free-time job (accounts/ARR/renewals)
│   └── rfc.md                      # Tempo RFC: the unified availability view, ship-coupled
├── pm-playbook/                    # the human PM craft layer, published as a top-level site section
│   ├── README.md                   # section landing page
│   └── ...                         # the six-phase loop, discovery, RICE, personas, templates
└── skills/                         # agent-executable skills
    ├── create-job-spec/SKILL.md
    ├── feedback-to-jobs/SKILL.md
    └── uat-ux-debug/SKILL.md
```

The site machinery (`astro.config.mjs`, `src/`, `public/`, `scripts/`) builds the live Starlight site from these same files; it adds no content of its own.

## Template Strategy

**The OS templates live in `templates/` (`product-spec.md`, `job-spec.md`, `job-links.md`, `rfc.md`, `strategy.md`, `decision-record.md`)**: the
single source of truth for each. (The human PM templates, customer call,
research, post-launch review, ritual review, belong to the separate
human-craft layer, out of scope here.)

| Template | File | Notes |
| -------- | ---- | ----- |
| Product Spec | `product-spec.md` | The product-level layer between the anchors and the Job Specs. Names the North Star, the outcomes (each with a Signal), how the product functions, and owns the job index. A Job Spec `serves:` one outcome slug named here |
| RFC | `rfc.md` | Single ship-coupled doc that does approval + delivery. JTBD-led; explicit user success/failure modes; guardrails; open solution space. References a Job Spec; not a named spec tier of its own |
| Job Spec | `job-spec.md` | The durable, per-job outcome doc (job/outcome/stakes). Same spine every job (The job, Today's alternatives, The bet, Measures of success, Good/bad, What the job requires, Prove it, Verdict, Abandon signal), depth scaling to the stakes. Outlives any single RFC; an RFC's "The Job" links to it. Distinct from the job-story *sentence* in the JTBD Guide |
| Job Links | `job-links.md` | The churny per-job join artefact: accounts, ARR, renewals, demand. `serves:` a Job Spec and carries the evidence that drifts, keeping the Job Spec clean. Not a named spec tier of its own |
| Strategy | `strategy.md` | The STRATEGY.md spine: situation (evidenced/hypothesis/to-validate claims), thesis, investment allocation, pillars, explicit deferrals, data gaps, and the coherent-action argument. Sibling to the anchors; changes as market dynamics shift |
| Decision Record | `decision-record.md` | Dated record of a material strategy change: context (what changed in the world), decision (what we now do differently), consequences (commits/gives up/blind spots). One per change; lives in `decisions/`; links to the STRATEGY.md commit it accompanies |

**Key decisions:**

- **No PRD vs Spec split**: there used to be a separate PRD (approval) and delivery spec. They were collapsed into a single living **RFC** because the split caused drift and required restating "the why" twice.
- **JTBD-led**: every spec opens with the user's job, not the feature. If the job statement isn't crisp, drop down to discovery before writing.
- **User success and failure modes are first-class sections**: success and failure are framed from the user's perspective (hard / soft / silent / adoption failure), each with detection signals and explicit pivot/stop triggers.
- **Solution space, not blueprint**: the spec defines must-do / must-not-do / free-to-vary. *How* to build it is the team's (and the AI's) creative work.
- **AI- and human-readable**: predictable section headers, structured fields where possible, anti-goals explicit, evidence linked out (not pasted in).
- **No separate Design Spec or Tech Spec**: design coverage and technical approach are sections inside the RFC.
- **No Project Template**: Projects are operational entities in your tracker, not copyable templates.
- **JTBD Guide in guides/**: located at `guides/jtbd-guide.md`.

## Markdown Standards

### Supported Formatting

**Use freely:**
- Headings (`#`, `##`, `###`)
- Bold/italic, bullet/numbered lists
- Links, inline code, code blocks
- Blockquotes, horizontal rules
- Simple tables, checkboxes

**Keep it readable:** standard Markdown and MDX render fine in the Starlight
site: favour clarity over cleverness; deep nesting and giant tables read
poorly regardless of the tool.

### File Naming

- Lowercase with hyphens: `writing-product-specs.md`
- Use `index.md` for directory landing pages

### Frontmatter

```yaml
---
title: Page Title
description: Brief description
last_reviewed: YYYY-MM-DD
---
```

## Content Guidelines

### Writing Style

- Clear, direct language
- Active voice
- Short paragraphs (walls of text display poorly)
- Scannable headings every 2-4 paragraphs
- Link to related pages

### Visual Formatting

- **Callouts** (`> ⚠️`, `> 💡`) -- Warnings, tips, important context
- **Checklists** -- Actionable items, review gates
- **Tables** -- Comparisons, reference data
- **Numbered lists** -- Sequential steps
- **Bullet lists** -- Non-sequential collections

## Key Concepts (the templates teach these in detail)

### RFC Status Values

| Status | Meaning |
| ------ | ------- |
| **Draft** | Work in progress |
| **In Review** | Awaiting approval |
| **Approved** | Ready to proceed |
| **Building** | Approved and under active delivery |
| **Shipped** | Delivered and live |
| **Archived** | No longer active |

## Agent Guidelines

### When Creating Content

1. Ask clarifying questions about scope
2. Propose outline before drafting
3. Follow existing patterns
4. Include frontmatter
5. Link to related content

### When Editing Content

1. Read full document first
2. Preserve the author's voice
3. Make minimal changes
4. Don't add unnecessary structure
5. Flag accuracy concerns

### Do NOT

- Make policy changes without human direction
- Add content outside product management scope
- Create complex directory structures
- Add automation without explicit request
- Bake a real or single company's product into the *method itself* (anchors, guides, templates): it must stay product-agnostic and reusable. The one sanctioned exception is the fictional **Tempo** worked example under `examples/`, clearly labelled illustrative and kept out of the normative content

> [!CAUTION]
>
> The "Agentic Delivery: operating contract" above does not loosen these rules. Agents own *delivery within the gates*; the vision, principles, invariants, and this policy itself stay human-ratified. Changing the method's own policy is a human-directed policy change, not routine agent work.

## Inspiration

- **GitLab Handbook** -- Thorough, process-oriented
- **PostHog Handbook** -- Clear, opinionated, practical
