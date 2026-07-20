---
title: Handling Product Feedback
description: How to raise, route, and manage product feedback
last_reviewed: 2026-07-10
icon: "👂"
---

# Handling Product Feedback

Product Feedback is one of the most important inputs into product strategy. It's a perspective you get nowhere else. It shapes product direction, qualifies opportunities, and delights customers when it turns into a feature request that gets delivered.

Not all Product Feedback ends up as a feature. Log and track it anyway. That's how we find patterns and opportunities.

---

## What is Product Feedback (and what is it not!)

### Product Feedback

- The product is working as designed, but it's **not meeting the customer's needs or expectations**
- Highlights an opportunity to improve or evolve the platform
- Often a longer-term consideration, added to a searchable backlog for review and prioritisation
- Example: "Retry buttons don't cover canceled jobs, making it harder to re-run them cleanly."

**What to ask yourself:**
- Is this a limitation of the current product design?
- Does this reflect a gap between what the product does and what the customer is trying to achieve?

---

Product Feedback is different to Escalations / Bugs:

### Escalations and Bugs

- Something is **broken or not working as intended**
- The customer is using the product correctly, but it's behaving unexpectedly or incorrectly
- Example: "Retry button is visible but doesn't trigger a job restart."

**What to ask yourself:**
- Is this a regression or broken functionality?
- Would a fix restore the product to its intended behaviour?

Escalations should be submitted into your Support team's triage queue, in whichever issue tracker or support tool your team uses.

---

## So... what's the process!

Route all Product Feedback to a dedicated Product Feedback queue in whichever issue tracker your team uses. The exact routing is product-team-specific, but the principle holds: feedback enters one queue with one triage owner. There are usually 2–3 ways to create a feedback item:

### Option 1: Directly in the issue tracker

1. Create a new triage issue in the Product Feedback queue.
2. Complete the feedback template (problem, customer, impact, evidence).
3. Tag the source (Active Prospect, Customer, or Internal/Dogfooding).
4. Link the customer record if known.

### Option 2: Via your team chat tool

1. Use your chat–issue-tracker integration (most chat tools have one) to create a Product Feedback item.
2. Fill in the same template fields above.

### Option 3: Via your Support tool

1. From a customer ticket, create a linked Product Feedback issue.
2. Make sure the customer is tagged on the new issue.
3. Keep the original support ticket open. Product Feedback is the *underlying* product gap; the ticket tracks the *customer's* unresolved situation.

---

## What happens next

- Feedback enters triage. A member of the product team assesses it.
- Track it as the team reviews. The team weighs value and links it to any existing feedback or initiatives already on the roadmap.
- Once reviewed, feedback moves to an 'Assessed' state. It stays there until it's prioritised against all other work and allocated to a team to deliver.

---

## How to manage customers when they raise Product Feedback

Manage customer expectations on their Product Feedback. Show that we value their input. Don't commit to product changes or timelines.

### Suggested Language

- **Empathy with Problem Context:**
  "Thanks, [NAME]. I understand how [specific problem] is impacting your workflow with [xyz]. I've clearly captured the details and shared them with the product team to evaluate potential solutions. In the meantime, here's the best approach: [workaround]."

- **Acknowledging the Problem:**
  "Hi [NAME], I've recorded your feedback about [specific problem] and how it's affecting your work. This will help the product team explore solutions that address challenges like yours. For now, [workaround] is the best way to move forward."

### Avoid Saying

- **Vague Actions:**
  "We've raised it with the product team."
  "I've passed this to the product team."

- **Unrealistic Expectations:**
  "Wait to hear back from the product team."

### Why Avoid These Phrases?

These phrases are vague or set up expectations of immediate action that we can't meet. Instead, communicate confidence that the customer's problem is well understood and will inform potential solutions, without overpromising.

### Key Tips

- **Show Empathy:** Acknowledge the customer's situation and validate their experience. Understand the outcome or challenge they're facing, why the product doesn't help them with it, and the impact on their organisation
- **Communicate Understanding:** Make clear their problem is documented, including its impact
- **Manage Expectations:** Don't imply specific follow-up or timing unless it's planned
- **Offer Workarounds:** Give actionable advice for their immediate needs while feedback is evaluated

Do this and customers feel understood and confident in how their feedback is being handled.

### What happens when the customer follows up?

Customer 6 months later: *"What has been done on this feedback since I gave it?"*

- Don't say "Nothing's been done" if you can't see anything being done
- Put it back on product to share the perspective of what has been done in the meantime


---

## Churn tagging

Churn is the purest product signal there is: a customer who lived with the product and left. It is also the interview nobody wants to do, which is exactly why it's the highest-yield one. Two rules:

**1. Every churned account gets exactly one primary tag.**

| Tag | Meaning | Routed to |
|---|---|---|
| `churn:product-gap` | The product failed a real job for a right-fit customer | Product: enters the feedback queue at top priority |
| `churn:fit` | Wrong-fit customer; should not have been sold | Sales/CS: an acquisition-quality finding, **not** a roadmap input |
| `churn:commercial` | Pricing, packaging, or relationship | Commercial team |
| `churn:unavoidable` | Closed, merged, mandated change | Logged, no action |

Untagged churn is unexplained leak, and the [Commercial Frame](../anchors/measurement-chain.md) treats unexplained leak as a product fire until tagged otherwise. The product-vs-fit distinction is the load-bearing one: it stops fit mistakes polluting the roadmap and stops product gaps hiding behind "bad-fit customer" stories.

**2. Churned accounts are interviewed, not surveyed.** A churn interview is discovery with the politeness removed; treat it as a priority [customer call](./templates/customer-call.md). The domain PM does it (see [Domain Entry](./domain-entry.md), where the churned account is one of the three insiders), tags the account, and feeds what broke into the [customer model](../templates/product-spec.md#the-customer-model) in the Product Spec. If the account won't talk, the AM's post-mortem stands in, clearly labelled second-hand.

---

## Related

- **[Discovery](./discovery.md)**: How to validate problems with customer research
- **[Delivery Standards](./delivery-standards.md)**: Where feedback enters the product loop
- **[Decision Framework](./decision-framework.md)**: Signal → Standard → Speed
- **[Measurement Chain, Commercial Frame](../anchors/measurement-chain.md)**: why tagged churn is a rung of the measurement ladder
- **[Domain Entry](./domain-entry.md)**: the churned account as one of the three insiders
