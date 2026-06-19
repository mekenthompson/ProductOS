# ProductOS — Agent Guidance

This repository is **ProductOS** — a reusable, product-agnostic **agentic-delivery operating system**: the anchors, Job Specs, templates, and agent-executable skills that make delivery *run*. Anything specific to a real product (vision, principles, invariants) is documented as a *guide* — what good looks like, when it's "done," and how to write your own.

The human PM craft (the six-phase loop, discovery, RICE, the decision framework, personas) lives in a **separate `pm-playbook` repo**. ProductOS is independent of it: pm-playbook may reference ProductOS; ProductOS never references pm-playbook.

## Scope

- **Purpose**: Product management practices, processes, and principles
- **Audience**: Product leaders adopting or adapting this for their team
- **Format**: Markdown. Humans read it via the Starlight site; agents read the raw markdown.

## Agentic Delivery — operating contract

The terse, executable contract for the method narrated in [`guides/agentic-delivery.md`](./guides/agentic-delivery.md). That guide is the human narrative; this is the gate. Four working parts: **anchors · Job Specs · design loops · outcome UAT.** ("Four" is this method's anatomy, not a law for products — a product picks its own small number of vision outcomes, principles, and invariants.)

**Artifact hierarchy (top to bottom).** Three **anchors** — vision (why) · principles (built-well) · invariants (lines we won't cross by construction) — hold for the whole product. Beneath them, a **Product Spec** (one per product) names the product's outcomes, says how the product functions, and owns the list of jobs. Beneath that, **Job Specs** (one per job) are the durable, outcome-focused, UAT-verifiable contracts. **RFCs / PRs** are the ship-coupled, per-initiative delivery layer that references a Job Spec — NOT a named spec tier of their own.

**Verdict rule (the gate).** A change ships only when ALL hold:

1. it advances a named vision outcome (it's in scope at all);
2. it satisfies its Job Spec (does the user's job) — proven by its outcome UAT;
3. it passes every principle check — product AND engineering standards (a "no" is a redesign, not a follow-up);
4. it crosses no invariant (the lines you won't cross by construction).

Else: out of scope, however clever.

**Triggers — what to do when.**

- **Scoping / designing →** read the vision; name which outcome the work serves. If none, stop.
- **Writing or changing a Job Spec →** use [`templates/job-spec.md`](./templates/job-spec.md); keep `job` / `outcome` / `stakes` stable, narrate retired approaches rather than rewriting the job; the `## Prove it` section must be non-empty. Doc-class by frontmatter key: `job:` = durable Job Spec; `artifact:` (or `artefact:`) / `serves:` = churny artifact (e.g. an RFC) that points up to a job.
- **Reviewing →** dispatch a SEPARATE fresh-process reviewer (never the author — it rubber-stamps). It returns APPROVE / REQUEST_CHANGES / BLOCK citing file:line; iterate to APPROVE. Do NOT let an automated merge fire before APPROVE.
- **Shipping →** run the outcome UAT (job × surface, real path, independent of unit tests) AND the production-readiness check. Unit-green ≠ outcome-validated ≠ production-ready — three gates, none implies the others.

**Fresh-process reviewer checklist** (hand the reviewer these — an unscoped reviewer rubber-stamps):

1. advances the named outcome and passes the verdict gate incl. the invariant clause;
2. satisfies the cited Job Spec; does not silently rewrite the job;
3. outcome UAT present and actually re-proves the job (not just unit-green);
4. passes every principle check — product AND engineering standards;
5. engineering acceptance / production-readiness met to the level the stakes demand (security, scale, availability, reliability);
6. the reviewer is a separate process and cites a location for every blocker.

**Ownership invariant** (extends "augmentation, not automation"; does not replace it). Agents own *delivery execution within the gates* — drafting Job Specs, implementing, running loops and UATs. Humans own the *gates and the judgement* — the vision, the principles, the invariants, ratifying the job statement, and engineering oversight. Agents consume the anchors; they never author them. This does NOT loosen the "Do NOT" rules below: changing the method's own policy (this contract, the AI stance, the anchors) is a human-ratified policy change, not routine agent delivery.

## Repo structure

The whole repo reads as the OS — anchors, the OS method guides, the OS
templates, and skills. The human PM craft lives in the separate `pm-playbook`
repo, not here.

```
productos/
├── README.md  PLAN.md  AGENTS.md   # orientation + the operating contract
├── anchors/                        # the three anchors (human-owned)
│   ├── product-vision.md           # How to write the product vision (guide + template)
│   ├── product-principles.md       # How to write the standards your product is built to
│   └── invariants.md               # The lines you won't cross by construction
├── guides/                         # the OS method
│   ├── agentic-delivery.md         # The four-part method (anchors, Job Specs, design loops, outcome UAT)
│   ├── jtbd-guide.md               # Jobs to be Done framework
│   ├── org-as-an-api.md            # Sequence the roadmap by joining feedback/support/CRM/finance around the job
│   └── product-specs.md            # RFC how-to (lifecycle, approval, delivery)
├── templates/                      # the OS blank shapes
│   ├── job-spec.md                 # The durable per-job outcome doc (job/outcome/stakes; outlives any RFC)
│   ├── job-links.md                # The churny per-job join (accounts/ARR/renewals); serves: a Job Spec
│   └── rfc.md                      # The ship-coupled, per-initiative delivery doc (JTBD-led)
└── skills/                         # agent-executable skills
    ├── create-job-spec/SKILL.md
    ├── feedback-to-jobs/SKILL.md
    └── uat-ux-debug/SKILL.md
```

## Template Strategy

**The OS templates live in `templates/` (`job-spec.md`, `job-links.md`, `rfc.md`)** — the
single source of truth for each. (The human PM templates — customer call,
research, post-launch review, ritual review — live in the separate
`pm-playbook` repo, not here.)

| Template | File | Notes |
| -------- | ---- | ----- |
| RFC | `rfc.md` | Single ship-coupled doc that does approval + delivery. JTBD-led; explicit user success/failure modes; guardrails; open solution space. References a Job Spec; not a named spec tier of its own |
| Job Spec | `job-spec.md` | The durable, per-job outcome doc (job/outcome/stakes + Good/bad / Prove it). Outlives any single RFC; an RFC's "The Job" links to it. Distinct from the job-story *sentence* in the JTBD Guide |
| Job Links | `job-links.md` | The churny per-job join artefact: accounts, ARR, renewals, demand. `serves:` a Job Spec and carries the evidence that drifts, keeping the Job Spec clean. Not a named spec tier of its own |

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
site — favour clarity over cleverness; deep nesting and giant tables read
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

- **Callouts** (`> ⚠️`, `> 💡`) — Warnings, tips, important context
- **Checklists** — Actionable items, review gates
- **Tables** — Comparisons, reference data
- **Numbered lists** — Sequential steps
- **Bullet lists** — Non-sequential collections

## Key Concepts (the templates teach these in detail)

### RFC Status Values

| Status | Meaning |
| ------ | ------- |
| **Draft** | Work in progress |
| **In Review** | Awaiting approval |
| **Approved** | Ready to proceed |
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
- Bake in any single company's product as an example (this method is meant to be reusable)

> The "Agentic Delivery — operating contract" above does not loosen these rules. Agents own *delivery within the gates*; the vision, principles, invariants, and this policy itself stay human-ratified. Changing the method's own policy is a human-directed policy change, not routine agent work.

## Inspiration

- **GitLab Handbook** — Comprehensive, process-oriented
- **PostHog Handbook** — Clear, opinionated, practical
