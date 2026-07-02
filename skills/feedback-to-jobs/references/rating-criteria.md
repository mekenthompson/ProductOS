---
title: Rating Criteria
description: How to rate each feedback theme on severity, trend, and strategic alignment, independently, from evidence, so the three axes can disagree when they should.
---

# Rating Criteria

Three ratings sit in every theme's frontmatter. Rate from evidence in the cluster, not gut feel, and write the one line of reasoning that justifies each, so the rating can be checked.

## Severity: how badly is the job blocked?

Rate by how well the customer can do the job today, not by how loud they are.

- **high** -- blocking the customer from doing the job, forcing an expensive workaround, or creating a security / compliance risk. They can't get it done, or only at real cost.
- **medium** -- a painful workaround exists; the job gets done, but inefficiently.
- **low** -- minor friction; the job gets done with small overhead.

The test is the workaround, not the wording. "This is infuriating" with a clean workaround is `medium`. "It's a bit annoying" with no way to do the job at all is `high`.

## Trend: is the job getting louder?

- **growing** -- new customers hitting this, existing ones escalating, fresh switching triggers appearing.
- **stable** -- consistent volume, no real change in urgency.
- **declining** -- fewer mentions; customers found an acceptable workaround or their needs moved on.

If items carry dates, compare a recent window against the whole: noticeably more in the last stretch than the baseline rate means **growing**; noticeably less means **declining**. No dates? Judge from whether the voices are new or repeat, and whether sentiment is hardening from "annoying" toward "blocking".

## Strategic alignment: does solving it fit the direction?

- **aligned** -- this job is core to the product you're trying to build.
- **neutral** -- a legitimate job, but not a strategic priority.
- **misaligned** -- an edge-case job that adds complexity or pulls against the vision.

Alignment is about the product's direction, not the job's loudness. A high-severity, growing job can still be `misaligned`, and that tension is exactly the thing a roadmap conversation needs to surface, not bury.

## The honest-rating rule

> [!NOTE]
>
> Don't let one rating bleed into the others. A loud job is not automatically high-severity, and a high-severity job is not automatically aligned. Rate each axis on its own evidence; the value of three separate ratings is that they can disagree.

## Related

- [Theme Structure](theme-structure.md) -- where these three ratings live in the frontmatter
- [Feedback to Jobs](../SKILL.md) -- the skill that produces the themes you rate
