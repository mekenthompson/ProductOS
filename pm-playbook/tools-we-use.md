---
title: Tools We Use
description: Reference toolchain and conventions for a product team — tool-agnostic, with examples
last_reviewed: 2026-05-12
icon: "🛠️"
---

# Tools We Use

This guide is about the **categories** of tooling a product team needs and the conventions that matter inside each. The specific tools (Linear vs Jira vs Shortcut, Notion vs Confluence vs Coda, Claude vs ChatGPT vs Cursor) are implementation details — pick what your company already runs on. The conventions below apply regardless.

## The categories

| Category | What it does | Example tools |
|---|---|---|
| **Issue tracker** | Issues, roadmap, project tracking, customer feedback | Linear, Jira, Shortcut, GitHub Issues, Asana |
| **Long-form docs** | RFCs, specs, research, process documentation | Notion, Confluence, Coda, Google Docs, Obsidian |
| **Source control** | Code, PRs, playbook repository | GitHub, GitLab, Bitbucket |
| **Design** | Wireframes, mockups, prototypes | Figma, Sketch, Penpot |
| **Customer comms / support** | Tickets, calls, transcripts | Zendesk, Intercom, Plain, Front |
| **Sync comms** | Channels, DMs, async updates | Slack, Microsoft Teams, Discord |
| **AI assistant** | Feedback synthesis, draft assist, research summarisation | Claude, ChatGPT, Cursor, Amp, Gemini |
| **Recording** | Async demos, walkthroughs, customer call recordings | Loom, Tella, Vidyard, Granola |

You only need **one tool per category**. More than that creates copy-paste tax and split-brain documentation.

---

## Issue tracker (e.g. Linear / Jira)

**What lives here:**
- Issues (bugs, feature requests, customer feedback)
- Roadmap (what you're building, what's next)
- Project tracking (status, ownership, progress)

**Conventions:**

### Ticket Naming
- **Problem-focused, not solution-focused**
  - ✅ "Users can't recover from a failed action"
  - ❌ "Add a recovery button"
- **Customer language, not internal jargon**
  - ✅ "Notifications stop arriving after a user changes email"
  - ❌ "Email change event listener edge case"

### Project Linking
- One project per RFC
- RFC link in project description
- Keep project status synced with RFC status (Draft → In Progress → Shipped)

### Labels
- Use product area labels matching your domains
- Don't over-label — 2–3 labels max per issue

---

## Long-form docs (e.g. Notion / Confluence)

**What lives here:**
- RFCs (product requirements documents)
- Specs (product, design, technical)
- Research docs (customer calls, competitive analysis, problem briefs)
- Process documentation (this playbook)

**Conventions:**

### File Naming
- RFCs: `[Project Name] RFC`
- RFCs: `[Project Name] RFC`
- Research: `[Project Name] — [Research Type]` (e.g., "Retry Logic — Customer Research")

### Linking
- Always link RFC ↔ tracker project (bidirectional)
- Link RFC → research docs in Evidence section
- Link specs → RFC in Context section

### Status
- Keep RFC status in sync with tracker project status
- Archive old specs after launch (don't delete — keep for reference)

---

## Source control (e.g. GitHub / GitLab)

**What lives here:**
- Code
- Pull requests
- Playbook repository (markdown source, optionally synced to your docs tool)

**Conventions:**

### Playbook Changes
- PRs with `playbook:` prefix in title (e.g., "playbook: Add discovery guide")
- Tag the product team for review on process changes
- If you have a docs sync, the sync runs on merge

---

## AI assistant (e.g. Claude / ChatGPT / Cursor)

Whatever your team has approved enterprise access to — Claude (Claude Code, claude.ai), ChatGPT, Cursor, Amp, Gemini. The capabilities matter more than the brand.

**What to use it for:**
- Synthesising customer feedback from support tickets, calls, and channel threads
- Drafting RFC Evidence sections (turns raw feedback into structured problem statements)
- Summarising competitive research
- Generating job stories from interview transcripts

**When to use:**
- You have 10+ pieces of feedback on the same topic → let the assistant find patterns
- You need to draft Evidence but have raw notes → feed it the notes, edit the output
- You're comparing 3+ competitors → let the assistant summarise differences, then verify

**When NOT to use:**
- Strategic decisions (the assistant doesn't know your strategy)
- RICE scoring (needs human judgment)
- Customer conversations (don't outsource the relationship)

> 💡 Always use your company's approved enterprise account, not a personal one. Personal accounts may not have the right data-handling guarantees for customer information.

---

## Access (template)

**New to product?** Get access to one tool per category above. Specific tools and invite paths will be company-specific — keep an internal copy of this section with the current names and onboarding owners filled in.

- **Issue tracker:** [your tool] — [how to request access]
- **Long-form docs:** [your tool] — [how to request access]
- **Source control:** [your tool] — [how to request access]
- **AI assistant:** [your approved tool(s)] — [account/access process]
- **Comms:** [your tool] — [channels to join on day 1]
