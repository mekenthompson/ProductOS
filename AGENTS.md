# Product Playbook — Agent Guidance

This repository is a **reusable, product-agnostic operating system for running product organisations**. The playbook framework (six phases, RICE, decision framework, RFC/spec templates) is product-agnostic. Anything specific to a real product (vision, personas, principles, invariants, headline metric) is documented as a *guide* — what good looks like, when it's "done," and how to write your own.

## ⚠️ Important: Notion Page Handling

**ALWAYS prompt the user before deleting or archiving any Notion pages.**

- **Default behavior**: Prefer NOT to delete Notion pages unless absolutely necessary
- **When deletion is needed**: ALWAYS ask for explicit user confirmation first
- **Rationale**: Notion pages may have links from other places, be referenced by teammates, or contain important context that isn't immediately visible

When in doubt, leave the page and ask the user.

## Scope

- **Purpose**: Product management practices, processes, and principles
- **Audience**: Product leaders adopting or adapting this playbook for their team
- **Format**: Markdown, optionally synced to Notion via the included sync CLI

## Agentic Delivery — operating contract

The terse, executable contract for the method narrated in [`guides/agentic-delivery.md`](guides/agentic-delivery.md). That guide is the human narrative; this is the gate. Four working parts: **anchors · Job Specs · design loops · outcome UAT.** ("Four" is this method's anatomy, not a law for products — a product picks its own small number of vision outcomes, principles, and invariants.)

**Artifact hierarchy (top to bottom).** Three **anchors** — vision (why) · principles (built-well) · invariants (lines we won't cross by construction) — hold for the whole product. Beneath them, a **Product Spec** (one per product) names the product's outcomes, says how the product functions, and owns the list of jobs. Beneath that, **Job Specs** (one per job) are the durable, outcome-focused, UAT-verifiable contracts. **RFCs / PRs** are the ship-coupled, per-initiative delivery layer that references a Job Spec — NOT a named spec tier of their own.

**Verdict rule (the gate).** A change ships only when ALL hold:

1. it advances a named vision outcome (it's in scope at all);
2. it satisfies its Job Spec (does the user's job) — proven by its outcome UAT;
3. it passes every principle check — product AND engineering standards (a "no" is a redesign, not a follow-up);
4. it crosses no invariant (the lines you won't cross by construction).

Else: out of scope, however clever.

**Triggers — what to do when.**

- **Scoping / designing →** read the vision; name which outcome the work serves. If none, stop.
- **Writing or changing a Job Spec →** use [`templates/job-spec.md`](templates/job-spec.md); keep `job` / `outcome` / `stakes` stable, narrate retired approaches rather than rewriting the job; the `## UAT prompts` section must be non-empty. Doc-class by frontmatter key: `job:` = durable Job Spec; `artifact:` (or `artefact:`) / `serves:` = churny artifact (e.g. an RFC) that points up to a job.
- **Reviewing →** dispatch a SEPARATE fresh-process reviewer (never the author — it rubber-stamps). It returns APPROVE / REQUEST_CHANGES / BLOCK citing file:line; iterate to APPROVE. Do NOT let an automated merge fire before APPROVE.
- **Shipping →** run the outcome UAT (job × surface, real path, independent of unit tests) AND the production-readiness check. Unit-green ≠ outcome-validated ≠ production-ready — three gates, none implies the others.

**Fresh-process reviewer checklist** (hand the reviewer these — an unscoped reviewer rubber-stamps):

1. advances the named outcome and passes the verdict gate incl. the invariant clause;
2. satisfies the cited Job Spec; does not silently rewrite the job;
3. outcome UAT present and actually re-proves the job (not just unit-green);
4. passes every principle check — product AND engineering standards;
5. engineering acceptance / production-readiness met to the level the stakes demand (security, scale, availability, reliability);
6. the reviewer is a separate process and cites a location for every blocker.

**Ownership invariant** (extends "augmentation, not automation"; does not replace it). Agents own *delivery execution within the gates* — drafting Job Specs, implementing, running loops and UATs. Humans own the *gates and the judgement* — the vision, the principles, the invariants, ratifying the job statement, and engineering oversight. Agents consume the anchors; they never author them. This does NOT loosen the "Do NOT" rules below: changing the playbook's own policy (this contract, the AI stance, the anchors) is a human-ratified policy change, not routine agent delivery.

## Playbook Structure

Three tiers: **Root docs (understand how the model works) → Guides (go deeper) → Templates (grab and go)**

```
productos/
├── index.md                    # Playbook homepage + reading guide
├── product-vision.md           # How to write the product vision (guide + template)
├── product-playbook.md         # THE anchor doc (6-phase operating model)
├── pm-handbook.md              # PM role, onboarding, rituals, collaboration
├── working-together.md         # Product triad collaboration
├── product-domains.md          # Pointer doc — domain map lives in your tool of choice
├── guides/                     # Go deeper when you need to
│   ├── agentic-delivery.md     # The four-part method for agent-delivered work (anchors, Job Specs, design loops, outcome UAT)
│   ├── headline-metric.md      # How to pick the single metric the playbook anchors on
│   ├── personas.md             # Three personas pattern (Creator/Consumer/Sponsor)
│   ├── product-principles.md   # How to write the standards your product is built to
│   ├── decision-framework.md   # Signal → Standard → Speed (three paths)
│   ├── lifecycle.md            # [ARCHIVED] Redirects to delivery-standards.md
│   ├── product-specs.md       # RFC guide (lifecycle, approval, delivery)
│   ├── discovery.md            # How to validate problems before writing an RFC
│   ├── customer-feedback.md    # Handling product feedback
│   ├── rice.md                 # RICE scoring framework
│   ├── jtbd-guide.md           # Jobs to be Done framework
│   ├── customer-journey.md     # 6-phase customer journey
│   ├── delivery-standards.md     # Operational workflow with gate checklists
│   └── tools-we-use.md         # Reference toolchain
└── templates/                  # Grab these when doing the work
    ├── rfc.md                  # The ship-coupled, per-initiative delivery doc (JTBD-led)
    ├── job-spec.md             # The durable per-job outcome doc (job/outcome/stakes; outlives any RFC)
    ├── post-launch-review.md   # 2wk/30d/90d review template
    ├── ritual-review.md        # Dogfooding, onboarding, competitor review
    ├── customer-call.md        # Research
    └── research.md             # Research
```

## Template Strategy

**All copyable templates live in `templates/` only** — this is the single source of truth.

| Template | File | Notes |
| -------- | ---- | ----- |
| RFC | `rfc.md` | Single ship-coupled doc that does approval + delivery. JTBD-led; explicit user success/failure modes; guardrails; open solution space. References a Job Spec; not a named spec tier of its own |
| Job Spec | `job-spec.md` | The durable, per-job outcome doc (job/outcome/stakes + signs / anti-patterns / UAT prompts). Outlives any single RFC; an RFC's "The Job" links to it. Distinct from the job-story *sentence* in the JTBD Guide |
| Customer Call | `customer-call.md` | Interview / call notes |
| Research | `research.md` | Research synthesis |
| Post-Launch Review | `post-launch-review.md` | Reviews at 2w/30d/90d |
| Ritual Review | `ritual-review.md` | Dogfooding + competitor reviews |

**Key decisions:**

- **No PRD vs Spec split**: there used to be a separate PRD (approval) and delivery spec. They were collapsed into a single living **RFC** because the split caused drift and required restating "the why" twice.
- **JTBD-led**: every spec opens with the user's job, not the feature. If the job statement isn't crisp, drop down to discovery before writing.
- **User success and failure modes are first-class sections**: success and failure are framed from the user's perspective (hard / soft / silent / adoption failure), each with detection signals and explicit pivot/stop triggers.
- **Solution space, not blueprint**: the spec defines must-do / must-not-do / free-to-vary. *How* to build it is the team's (and the AI's) creative work.
- **AI- and human-readable**: predictable section headers, structured fields where possible, anti-goals explicit, evidence linked out (not pasted in).
- **No separate Design Spec or Tech Spec**: design coverage and technical approach are sections inside the RFC.
- **No Project Template**: Projects are operational entities in your tracker, not copyable templates.
- **JTBD Guide in guides/**: located at `guides/jtbd-guide.md`.

## Notion Sync (Optional)

The repo includes a Notion sync CLI under `scripts/notion-sync/`. It is **opt-in**: it does nothing unless you configure a `.notion/pages.yaml` mapping file (not committed) and a `NOTION_TOKEN` env var.

When configured, each markdown file declares its Notion target via a `notion_page_id` value in `.notion/pages.yaml` (and optionally in the file's frontmatter). The sync CLI reads from local markdown as the source of truth and pushes to Notion.

### ⚠️ Notion Update Safety — CRITICAL

**NEVER update a Notion page without fetching it first.**

Before any Notion update operation:

1. **Fetch the page** to inspect current state.
2. **Check for embedded content**: Look for `<page url=...>`, `<database ...>`, synced blocks.
3. **Choose a safe method**:
   - Has embedded content → Use a range-based update (`replace_content_range` or `insert_content_after`).
   - Plain text only → A full-content replace is OK.

**Why:** A full-content replace deletes ALL blocks, orphaning child pages and embedded content. Child pages become inaccessible and are sent to the recycle bin.

### Syncing Content

1. Make changes in Git (source of truth)
2. Run the sync CLI (or let CI do it)
3. Keep structure aligned between folders and Notion sub-pages

### Emoji Conventions

- **Section pages**: Navigation emojis (🧭 🔄 👤 📋)
- **Templates**: Document emojis (📄 📖 📝)
- **Guides**: Book emojis (📖 📚)

## Markdown Standards

### Supported Formatting

**Use freely:**
- Headings (`#`, `##`, `###`)
- Bold/italic, bullet/numbered lists
- Links, inline code, code blocks
- Blockquotes, horizontal rules
- Simple tables, checkboxes

**Avoid:**
- Nested lists beyond 2 levels
- Complex tables, HTML tags
- Reference-style links, footnotes

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
- Link to related playbook pages

### Visual Formatting

- **Callouts** (`> ⚠️`, `> 💡`) — Warnings, tips, important context
- **Checklists** — Actionable items, review gates
- **Tables** — Comparisons, reference data
- **Numbered lists** — Sequential steps
- **Bullet lists** — Non-sequential collections

## Key Concepts (templates teach these in detail)

### Launch Tiers (Marketing)

- **T1** — New offering. Full GTM, press release. 1-2/year.
- **T2** — Product line evolution. Partial GTM. 3-4/year.
- **T3** — Feature enhancement. Changelog, in-app. 12-20/year.
- **T4** — Usability improvement. Changelog only. Many.

### Release Phases (Product)

- **Private Preview** — Feature-flagged, no SLA, no public announcement
- **Public Preview** — Opt-in, `[PREVIEW]` label, best-effort support
- **General Availability** — Enabled by default, full SLA

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
- Use markdown that breaks Notion
- Create complex directory structures
- Add automation without explicit request
- Bake in any single company's product as an example (this playbook is meant to be reusable)

> The "Agentic Delivery — operating contract" above does not loosen these rules. Agents own *delivery within the gates*; the vision, principles, invariants, and this policy itself stay human-ratified. Changing the playbook's own policy is a human-directed policy change, not routine agent work.

## Inspiration

- **GitLab Handbook** — Comprehensive, process-oriented
- **PostHog Handbook** — Clear, opinionated, practical
