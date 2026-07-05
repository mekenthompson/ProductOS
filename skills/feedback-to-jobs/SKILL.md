---
title: Feedback to Jobs
slug: skills/feedback-to-jobs
name: feedback-to-jobs
description: Turn a folder of raw customer feedback into a small set of customer jobs, clustered, rated, and split when they get too big, then draft a Job Spec for each. Use when you have a pile of feedback (support tickets, sales notes, call snippets, survey lines) and need to know what jobs it's really about, not what features it's asking for.
---

# Feedback to Jobs

Raw feedback is a list of feature requests in disguise. This skill reads the pile, finds the **jobs** underneath it, and hands you a drafted [Job Spec](../../templates/job-spec.md) per job: the durable artefact the rest of the system runs on.

It does the thinking with judgement, not a parser. There are no scripts: you read the feedback, cluster by job, rate, and draft. The references hold the structure so the output is consistent run to run.

## When to use this

- You have a folder of feedback items (one file or one line each) and no map of what it's about.
- You keep getting feature requests and suspect several of them are the same job wearing different clothes.
- You need to ground a roadmap in jobs, and you need the Job Specs that [The Org as an API](../../guides/org-as-an-api.md) and [Agentic Delivery](../../guides/agentic-delivery.md) assume already exist.

## The move

The whole skill is one reframe, applied at scale: **stop reading requests, start reading jobs.**

A request says *what* the customer asked for. A job says *what they were trying to get done, and why they can't.* Ten requests for "more export options" and "a CSV button" and "send me the data" are one job: *get my data out so I can work with it elsewhere.* Cluster on the job, and the pile collapses from forty items to five real things.

## Input

Point the skill at a folder of feedback. Each item is short: a sentence or a paragraph. Sources don't matter and aren't kept: a support line, a sales note, a survey row, a call snippet all reduce to the same thing once you read for the job. Strip names and identifiers as you go; the output is about jobs, not accounts.

```
feedback/
  001.md   "Can't see who's free across the team at a glance"
  002.md   "Need a combined availability view for all staff"
  003.md   "Export the monthly roster to CSV"
  ...
```

## The workflow

### 1. Read every item for the job, not the ask

Go through the pile once. For each item, write down, in your head or a scratch list, the job it implies: *when I [situation], I want to [motivation], so I can [outcome].* Ignore the feature named. If an item is too thin to imply a job, set it aside; don't invent one.

### 2. Cluster by job

Group items that serve the same job, even when the words differ. "One screen for everyone's slots" and "combined availability view" are the same job; "export the roster" is a different one. Aim for **a handful of jobs, not dozens**: if you have twenty clusters, you're still clustering on features. Each cluster becomes one theme.

### 3. Write a theme file per cluster

For each cluster, write a theme using the structure in [references/theme-structure.md](references/theme-structure.md). The theme frontmatter carries the signal at a glance:

- `feedback_count` -- how many items rolled in
- `severity` -- how badly the job is blocked (`high` / `medium` / `low`)
- `trend` -- `growing` / `stable` / `declining`
- `strategic_alignment` -- `aligned` / `neutral` / `misaligned`

Rate each with [references/rating-criteria.md](references/rating-criteria.md). The body names the jobs, why they're hard today, what people do instead (workarounds reveal real severity), and what made it urgent now (switching triggers).

### 4. Split themes that got too big

A theme past **~20 items** is usually two jobs hiding in one. When `feedback_count` crosses the threshold, look for the seam: distinct jobs, distinct situations, things that would ship independently. Split into focused sub-themes and redistribute the items. A theme that's just "lots of feedback about area X" isn't a job. It's a folder.

### 5. Draft a Job Spec per theme

For each theme, draft a [Job Spec](../../templates/job-spec.md): the standing `job` / `outcome` / `stakes` contract, its Contribution to the outcome it serves, what the product must be able to do, the observable good / bad, and the "Prove it" scenarios. This is the artefact that outlives the theme: the theme captures demand, the Job Spec defines done.

Keep account and revenue evidence **out** of the Job Spec. That join is a separate concern (see [Job Links](../../templates/job-links.md)); the Job Spec stays clean and durable.

## Output

```
themes/
  see-everyones-availability.md     ← theme: jobs, severity, trend, workarounds
  export-the-roster.md
  reliable-booking-comms.md
jobs/
  see-everyones-availability.job.md ← Job Spec, drafted
  export-the-roster.job.md
  reliable-booking-comms.job.md
clusters.md                         ← which raw items rolled into which job (the audit trail)
```

`clusters.md` is the receipt: it shows your work, so anyone can check whether item 17 really belongs under "export the roster" or got mis-grouped.

## What this skill is not

- **Not a sentiment counter.** It doesn't tally thumbs-up; it reframes requests into jobs.
- **Not a prioritiser.** It tells you what the jobs *are* and how loud each is. Sequencing the roadmap is a later step; see [The Org as an API](../../guides/org-as-an-api.md).
- **Not automated.** The clustering is judgement. A parser can count items; only a reader can tell that "CSV button" and "send me the data" are the same job.

## Related

- [Job Spec](../../templates/job-spec.md) -- the artefact this skill drafts
- [JTBD Guide](../../guides/jtbd-guide.md) -- how to frame a job well
- [The Org as an API](../../guides/org-as-an-api.md) -- what to do with the jobs once you have them
