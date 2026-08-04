---
title: "Using the skills in Claude"
slug: skills
description: "Where the skills live, how to install them in Claude Code (or any agent harness), how they trigger, and which skill to reach for at each point in the loop."
sidebar:
  order: 0
---

# Using the skills in Claude

The `skills/` directory is the executable layer of ProductOS: eight
agent-executable skills that carry the method's documents from creation
through review to guarded amendment. Each skill is a folder containing a
`SKILL.md` in the [Anthropic Agent Skills](https://code.claude.com/docs/en/skills)
format: plain markdown with `name` and `description` frontmatter, readable by
a human and loadable by an agent. The pages in this section *are* those
files, rendered.

## Install them

Skills are copy-and-fill, like the rest of ProductOS. Copy the skill folders
from [`skills/`](https://github.com/mekenthompson/ProductOS/tree/main/skills)
into wherever your agent discovers skills:

- **Claude Code, per project:** `.claude/skills/` in your repo, so the whole
  team and any agent working in the repo gets them. This is the recommended
  home: the skills assume they sit next to your anchors, templates, and
  specs, and Step 0 of every skill grounds itself in those documents.
- **Claude Code, personal:** `~/.claude/skills/`, follows you across every
  project on your machine.
- **Other harnesses:** any agent that can read a directory of markdown can
  use them; each `SKILL.md` is self-contained instructions. Point your
  agent's operating contract (your `AGENTS.md`) at them, the way
  [this repo's contract](/agents/) does.

Adapt the internal links as you copy: the skills reference the templates and
guides by relative path, so keep the folder shape or re-point the links at
your own copies.

## Invoke them

You rarely need to name a skill. Each one declares the natural phrasings it
triggers on, and Claude matches your ask against them:

- *"Write a job spec for this"* → [create-job-spec](/skills/create-job-spec/)
- *"Write this up as an RFC"* / *"spec this initiative"* → [create-rfc](/skills/create-rfc/)
- *"Define our outcomes and North Star"* → [create-product-spec](/skills/create-product-spec/)
- *"Draft the H2 strategy"* / *"which jobs get capacity?"* → [create-strategy](/skills/create-strategy/)
- *"Review this spec before we ratify it"* → [review-doc](/skills/review-doc/)
- *"Update the job spec, the outcome changed"* → [amend-durable-doc](/skills/amend-durable-doc/)
- *"Here's a pile of feedback, what jobs is it about?"* → [feedback-to-jobs](/skills/feedback-to-jobs/)
- *"This works but the user's job didn't get done"* → [uat-ux-debug](/skills/uat-ux-debug/)

In Claude Code you can also invoke one explicitly by name
(`/create-job-spec`, `/review-doc`, …).

Two behaviours to expect, by design:

- **The creation skills interview you.** One question at a time, until you
  and the agent share clarity, and they will not write the document until
  everything is agreed. A spec written from assumptions is worse than no
  spec, because the whole fleet anchors to it. Budget a conversation, not a
  one-shot prompt.
- **The gates say no.** [review-doc](/skills/review-doc/) runs as
  a *separate fresh process* (never the author) and returns APPROVE /
  REQUEST_CHANGES / BLOCK with file:line citations;
  [amend-durable-doc](/skills/amend-durable-doc/) refuses silent
  edits to ratified `job` / `outcome` / `stakes` lines and walks you through
  the decision record instead. That friction is the feature.

## Which skill, when

| You are… | Reach for |
|---|---|
| Turning raw feedback into jobs | [feedback-to-jobs](/skills/feedback-to-jobs/) → drafts land unratified |
| Pinning down a job before any build | [create-job-spec](/skills/create-job-spec/) |
| Naming the North Star, outcomes, and job index | [create-product-spec](/skills/create-product-spec/) |
| Deciding which jobs get funded this period | [create-strategy](/skills/create-strategy/) |
| Starting a ship-coupled initiative (> 2 weeks) | [create-rfc](/skills/create-rfc/) |
| Gating any document before it's treated as ratified | [review-doc](/skills/review-doc/) |
| Changing a ratified spec or an active strategy | [amend-durable-doc](/skills/amend-durable-doc/) |
| Debugging a shipped miss from the user outcome | [uat-ux-debug](/skills/uat-ux-debug/) |

Every creation skill exits through
[review-doc](/skills/review-doc/), and durable-document edits route
through [amend-durable-doc](/skills/amend-durable-doc/), so the
whole document lifecycle has no unguarded entrance. How that maps onto the
method's gates is the [operating contract](/agents/)'s job; how to
adopt the whole system is the [adopting guide](/guides/adopting/)'s.
