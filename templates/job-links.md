---
title: Job Links Template
description: The per-job join artefact that ties a Job Spec to contributing accounts, ARR, renewal dates, and demand signal, allowed to churn while the spec stays stable.
---

# Job Links: [the job, in plain words]

> A **per-job join artefact** for B2B SaaS. It ties one [Job Spec](job-spec.md) to the accounts that have the job, the revenue riding on them, and where that revenue sits in the calendar. The Job Spec stays durable; this file is allowed to churn. Re-run it and it answers with current data.

:::tip[Why this is a separate file]
The Job Spec is the durable outcome contract: `job` / `outcome` / `stakes` that outlive any implementation. The moment you write account names, ARR, and renewal dates next to a job, you've coupled a stable thing to a moving one. So the moving half lives here, pointing up to the job via `serves:`. The Job Spec never gets polluted with numbers that are stale by next quarter.
:::

:::note[Doc-class discriminator]
Decide from the frontmatter key alone: `job:` means a durable [Job Spec](job-spec.md), keep it stable. `serves:` means this file: a churny join artefact that points up to a Job Spec and carries the evidence that drifts.
:::

---

## The join, in one line

Every system keys off something different. In B2B SaaS the one thing they share is the **account**. So the account is what you join on. There is rarely a clean shared ID across feedback, support, CRM and finance, so you reconcile on **account name**, and fall back to **email domain** when a name isn't resolved yet. That reconciliation is the real work. The systems were never built to agree.

---

## Frontmatter

Your Job Links file opens with this frontmatter. Replace the values, keep the shape. Every field here is illustrative — the example is a fictional team-scheduling app, not a real company.

```yaml
serves: see-everyones-free-time-at-once   # the Job Spec this links to (its filename / job id)

reconcile_on: account_name                # primary join key. fallback: email_domain
join_keys:                                # the real per-system identifiers for this job
  feedback: "FB-1182, [FitClub]"          # feedback ticket id + the account-tagged title
  support_domain: fitclub.example         # support keys off contact email domain
  slack_channel: "#cus-fitclub"           # shared customer channel slug
  crm_account: "FitClub"                  # CRM account name (the spine)
  crm_opportunity: "FitClub Renewal Q3"   # the live opportunity, if any
  usage_org: fitclub                      # analytics / product-usage org slug

contributing_accounts:                    # who has this job, and what's riding on it
  - account: FitClub
    arr: 120000
    opportunity_type: Renewal             # New | Renewal | Expansion
    renewal_date: 2026-09-30
    stage: Negotiation                    # current CRM stage
    demand_size: 24                       # count of feedback tickets for this job
    roadmap_priority: P1
    sentiment: at_risk                    # optional: read from threads, not queried
  - account: BrightSmile
    arr: 60000
    opportunity_type: Expansion
    renewal_date: 2026-11-15
    stage: Meeting Set
    demand_size: 11
    roadmap_priority: P1
    sentiment: neutral

source_systems: [feedback, support, slack, crm, finance]   # provenance
captured: 2026-03-11                       # when this snapshot was pulled. it ages.
---
```

> The frontmatter is the machine-readable join. Everything below is the human read of the same thing.

---

## Contributing accounts

> The accounts that have this job, sized by what's riding on them. A table so the whole picture reads at a glance. Numbers below are illustrative.

| Account | ARR | Opportunity | Renewal | Stage | Demand | Priority |
|---|---|---|---|---|---|---|
| FitClub | $120K | Renewal | 2026-09-30 | Negotiation | 24 | P1 |
| BrightSmile | $60K | Expansion | 2026-11-15 | Meeting Set | 11 | P1 |
| CityCare | $35K | New | — | Discovery | 6 | P2 |

> **Demand** is the count of feedback tickets clustered under this job — the size of the ask. **Priority** is where the job sits on the roadmap. The two together are the argument: a big, well-evidenced problem with money and a date attached.

---

## What the join returns

> One to three short paragraphs reading the table back as a decision. Size of demand, names behind it, money riding on it, the dates that money is tied to.

Three accounts carry this job, with a combined value in the low hundreds of thousands. One is in active renewal inside the quarter, one is an open expansion, one is new pipeline. The same problem shows up in support as a steady drip, which is sentiment the feedback count alone doesn't capture. That is what you sequence against — not the loudest request, the best-evidenced one with the stakes attached.

---

## Reconciliation notes

> *Optional.* Where the join was non-obvious, and how you resolved it. This is the honest part — the matches that needed a human.

- Matched on account name against the existing customer corpus. Accounts seen in support or feedback with **no profile yet** were flagged, not silently dropped.
- Where a name was ambiguous, reconciled on **shared email domain**. Anything still ambiguous was left for a human, not force-matched.
- `captured:` is a snapshot date on purpose. This file ages. Re-run the join before you rely on it; don't quote a number you pulled last quarter.

---

> **Wiring:** this file `serves:` exactly one [Job Spec](job-spec.md). Keep one Job Links file per job, named for the job, beside the spec it serves (e.g. a `jobs/` folder with `see-everyones-free-time.job.md` and `see-everyones-free-time.links.md`). The Job Spec is the durable contract; this is the evidence that proves the job is worth doing now.
