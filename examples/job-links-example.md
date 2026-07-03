---
title: "Job Links Example: Tempo"
description: "A worked Job Links file for Tempo's see-everyones-free-time-at-once job: the accounts that have it, the ARR riding on them, and the renewal dates that money is tied to, all kept out of the durable Job Spec."
sidebar:
  order: 5
---

# Job Links Example: Tempo

This is a worked [Job Links](../templates/job-links.md) file for the Tempo job
`see-everyones-free-time-at-once`. It is the churny half of the pair: the durable
outcome contract lives in the [Job Spec](./job-spec-example.md), and everything
that drifts (accounts, ARR, renewal dates, demand) lives here, pointing up to the
spec via `serves:`.

Read it alongside the blank [template](../templates/job-links.md). The accounts,
numbers, and dates are illustrative; this snapshot is dated deliberately, because
a Job Links file ages and is meant to be re-run.

---

## The join, in one line

Three multi-location accounts carry this job. The one thing feedback, support,
CRM, and finance all agree on is the **account**, so that is what we join on,
reconciling on account name and falling back to email domain where a name is not
yet resolved.

---

## Frontmatter

```yaml
serves: see-everyones-free-time-at-once    # the Job Spec this links to

reconcile_on: account_name                 # primary join key. fallback: email_domain
join_keys:
  feedback: "FB-1182, [FitClub]"           # feedback ticket id + account-tagged title
  support_domain: fitclub.example          # support keys off contact email domain
  slack_channel: "#cus-fitclub"            # shared customer channel slug
  crm_account: "FitClub"                   # CRM account name (the spine)
  crm_opportunity: "FitClub Renewal Q3"    # the live opportunity, if any
  usage_org: fitclub                       # analytics / product-usage org slug

contributing_accounts:
  - account: FitClub
    arr: 120000
    opportunity_type: Renewal
    renewal_date: 2026-09-30
    stage: Renewal
    demand_size: 24
    roadmap_priority: P1
    sentiment: improving                   # green since the cross-location milestone shipped
  - account: BrightSmile
    arr: 60000
    opportunity_type: Expansion
    renewal_date: 2026-11-15
    stage: Meeting Set
    demand_size: 11
    roadmap_priority: P1
    sentiment: at_risk                      # pressing on integration depth vs Gridline
  - account: CityCare
    arr: 35000
    opportunity_type: New
    renewal_date: null
    stage: Discovery
    demand_size: 6
    roadmap_priority: P2
    sentiment: neutral                       # third location slipped to Q4 2026

source_systems: [feedback, support, slack, crm, finance]
captured: 2026-05-06                          # snapshot date. it ages; re-run before you rely on it.
---
```

> The frontmatter is the machine-readable join. Everything below is the human read
> of the same thing.

---

## Contributing accounts

| Account | ARR | Opportunity | Renewal | Stage | Demand | Priority | Sentiment |
|---|---|---|---|---|---|---|---|
| FitClub | $120K | Renewal | 2026-09-30 | Renewal | 24 | P1 | Improving |
| BrightSmile | $60K | Expansion | 2026-11-15 | Meeting Set | 11 | P1 | At risk |
| CityCare | $35K | New | n/a | Discovery | 6 | P2 | Neutral |

> **Demand** is the count of feedback tickets clustered under this job: the size
> of the ask. **Priority** is where the job sits on the roadmap. The two together
> are the argument: a big, well-evidenced problem with money and a date attached.

---

## What the join returns

Three accounts carry this job for a combined $215K. FitClub is the anchor: the
largest, in-quarter renewal, and its sentiment turned green once the first
cross-location milestone shipped, so the job is now protecting revenue rather than
rescuing it. BrightSmile is the account to watch. Its expansion is open, but its
"does your integration do anything Gridline's doesn't" question makes it at risk,
and that is sentiment the demand count of 11 does not capture on its own. CityCare
is new pipeline whose expansion has slipped to Q4 2026, so it carries the least
urgency of the three this quarter.

That is what you sequence against: not the loudest request, but the best-evidenced
one with the stakes and the dates attached. Here the sequence writes itself:
protect FitClub's renewal, answer BrightSmile before its Q4 conversation, keep
CityCare warm.

---

## Reconciliation notes

- Matched on account name against the existing customer corpus. Accounts seen in
  support or feedback with **no profile yet** were flagged, not silently dropped.
- BrightSmile's feedback arrived under two spellings ("Bright Smile" and
  "BrightSmile"); reconciled on the shared **email domain** rather than
  force-matching the name.
- `captured: 2026-05-06` is a snapshot on purpose. FitClub's sentiment was
  `at_risk` in the March pull and is `improving` here; that is exactly the kind of
  value that drifts, which is why it lives in this file and never in the Job Spec.

---

> **Wiring:** this file `serves:` exactly one [Job Spec](./job-spec-example.md).
> Keep one Job Links file per job, named for the job, beside the spec it serves.
> The Job Spec is the durable contract; this is the evidence that proves the job
> is worth doing now.

---

## Related

- [Job Links Template](../templates/job-links.md) -- the blank shape this fills in
- [Job Spec Example: Tempo](./job-spec-example.md) -- the durable outcome contract this file points up to
- [Product Spec Example: Tempo](./product-spec-example.md) -- the `cross-location-visibility` outcome this job ladders to
- [Tempo Strategy (worked example)](./strategy-example/STRATEGY.md) -- the strategy that funds this job
