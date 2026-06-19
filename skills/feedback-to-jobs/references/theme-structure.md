# Theme Structure

A theme is one customer job, evidenced. Not a folder of feature requests grouped by product area — an analysis of what customers are trying to accomplish, why they can't today, what they do instead, and what made it urgent.

Every theme answers five questions:

1. **What job are customers trying to do?** (not "what feature do they want?")
2. **Why can't they do it today?** (root cause, not symptom)
3. **What do they do instead?** (workarounds reveal true severity)
4. **What made this urgent now?** (switching triggers)
5. **What does "done" look like from the customer's side?**

## The JTBD litmus test

A well-framed job reads:

> **When I** [situation], **I want to** [motivation], **so I can** [outcome].

If the theme reads like a list of settings or endpoints customers want, you're describing solutions, not jobs. Back up: what are they trying to accomplish, and why?

## Frontmatter

```yaml
---
theme_id: short-hyphenated-name
status: active            # active | split | archived
feedback_count: 12        # number of items in this cluster
split_threshold: 20       # split review when count crosses this
last_updated: YYYY-MM-DD

severity: medium          # high | medium | low
trend: stable             # growing | stable | declining
strategic_alignment: aligned   # aligned | neutral | misaligned
needs_split_review: false # true once feedback_count > split_threshold
---
```

Rate `severity`, `trend`, and `strategic_alignment` with [rating-criteria.md](rating-criteria.md). The three lines let someone survey every job at a glance without opening the file.

## Sections

### # Theme name

One line: the scope of the job.

### ## Jobs to be done

The 2–5 core jobs in this cluster. Frame each around the customer's outcome, not your capability:

1. **Job name** — short label
2. **JTBD statement** — "When I [situation], I want to [motivation], so I can [outcome]."
3. **Why it's hard today** — root cause, not symptom
4. **Who has this job** — the kind of user and their context (no names)

> **Good:** *When a step fails on a transient infrastructure blip, I want to retry just that step, so I can avoid re-running a 45-minute pipeline.* Why it's hard: the system treats every failure the same, so teams either retry everything or nothing.
>
> **Bad:** *Customers want more retry options.*

### ## Success criteria

One or two sentences on what "done" looks like **from the customer's side** — an outcome, not a feature. State your confidence: `high` / `medium` / `low`.

### ## Impact

- **Who's affected** — grouped by which job they care about; any pattern (one segment? one workflow?)
- **How severe** — can't do the job / expensive workaround / minor friction, with evidence
- **Business impact** — blocking a decision, churn risk, expansion if solved, competitive pressure

### ## Workarounds and switching triggers

The most important section. Workarounds reveal real severity; triggers explain the urgency.

**Workarounds** — for each job, how do people cope today?
- No workaround (true blocker, highest urgency)
- Manual workaround (possible but costly — describe it)
- External tooling (what are they using instead?)
- Feature misuse (abusing something else to approximate it)
- Accepted loss (they just don't do the job — what do they lose?)

**Switching triggers** — what surfaced this *now*? An audit, a scale threshold, a new workflow, a competitor, an incident, an org change.

### ## Trend

How many items in the recent window vs the whole? Are *new* users hitting this, or the same voices again? Is sentiment shifting from "annoying" to "blocking"?

### ## What we're hearing

A few representative quotes, grouped by job (not by feature). Verbatim beats paraphrase. Strip names.

### ## Sub-patterns emerging

Candidate sub-jobs hiding inside this theme. Flag any with 5+ items as a split candidate:

1. **Sub-job name** (N items) — what job these users are really doing

### ## Open questions

What you still don't understand about the job. Are you hearing a job or a solution request? Are different users doing different jobs you've conflated?

## When to split

Split a theme when:

- `feedback_count` crosses `split_threshold` (~20), **and**
- distinct **jobs** have emerged — not just different features within one job
- different users have the job for different reasons
- the solutions would ship independently

Find the seam, create focused sub-themes, redistribute the items, and update each `feedback_count`. A theme that's just "lots of feedback about X" is a folder, not a job — splitting it into real jobs is the point.
