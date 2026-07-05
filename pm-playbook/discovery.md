---
title: Discovery
description: How to learn what to build before writing an RFC
last_reviewed: 2026-05-12
icon: "🔍"
---

# Discovery

Discovery replaces assumptions with evidence. Do it before you write an RFC.

---

## When to Do Discovery

**Do discovery when:**
- You're writing an RFC and need evidence (3+ customer conversations minimum)
- Customer feedback is contradictory ("Some want X, others want Y" → understand the job)
- You're guessing ("I think users would..." → stop guessing, go ask)
- Data shows a problem but you don't know why (drop-off, low adoption, support tickets spiking)

**Skip discovery when:**
- Quick win (≤ half a day of engineering, obvious fix)
- You already have strong evidence (recent research, clear data, validated problem)
- Technical debt (engineering-driven, no customer-facing impact)

**The test:** Can you write the RFC Evidence section with 3+ specific customer examples? If not, you need discovery.

---

## Discovery Activities

### 1. Customer Interviews

**Best for:** Understanding the job, validating problems, hearing real workflows

**How many:** 3 minimum, 5-7 ideal, 10+ for big bets

**How:**
- Use the [Customer Call Template](./templates/customer-call.md)
- Focus on their problem, not your solution ("Tell me about the last time you had to retry that flow" not "Would you use a retry button?")
- Listen for the [four forces](../guides/jtbd-guide.md#the-four-forces-decide-whether-the-job-is-worth-serving) (push, pull, anxiety, habit): they tell you whether the job is worth serving, and the interview is where you hear them
- Record it (with permission), take notes, synthesise afterwards

**Output:** a research doc with job stories, direct quotes, and problem patterns

### 2. Data Analysis

**Best for:** Sizing the problem, finding drop-offs, measuring baselines

**What to look at:**
- **Usage data:** How many people hit this flow? Where do they drop off?
- **Support tickets:** How often does this come up? What's the impact?
- **Adoption metrics:** If we built this, would anyone use it?

**Output:** Baseline metrics for RFC Success section ("Currently 15% of users hit this, goal is 50%")

### 3. Competitive Research

**Best for:** Understanding market expectations, spotting gaps

**How:**
- Pick 3 competitors or alternatives in your category
- Use their free tier, try the relevant feature
- Document: What do they do? What's good? What's missing?

**Output:** Competitive summary table in research doc (see [Research Template](./templates/research.md))

**Don't copy competitors. Learn from them.** They might be solving the wrong problem. Their work is data, not direction.

---

## Discovery Outputs

| Output | When to Use | Template |
|--------|-------------|----------|
| **Research doc** | Every discovery effort; link in your RFC Evidence section | [Research Template](./templates/research.md) |
| **Job stories** | When you need to understand the customer job | [JTBD Guide](../guides/jtbd-guide.md) |
| **Baseline metrics** | When you need to measure success (before/after) | Include in RFC Success section |
| **Customer quotes** | When you need to make the problem real | Capture in research doc |

---

## How Much Discovery Is Enough?

**Too little:** You're guessing. The RFC Evidence section has "some customers said" instead of names and quotes.

**Enough:** You can answer "Who has this problem?" with 3+ specific examples, and "Why does it matter?" with data or direct impact.

**Too much:** You've talked to 20 people, spent a month researching, and still haven't written the RFC.

**The balance:** Discovery takes **days, not weeks**. If it's taking longer, you're overthinking it. Ship the research doc, write the RFC, learn more as you build.

---

## Tips

- **Don't lead the witness:** "Do you have trouble with retries?" (bad) vs "Tell me about the last time something failed unexpectedly" (good)
- **Record everything:** You'll miss things in the moment. Review recordings, pull better quotes.
- **Synthesise quickly:** Turn notes into insights within 48 hours while it's fresh.
- **Share as you go:** Drop findings in #product as you get them. Don't wait for the polished doc.

---

## Related

- **[Handling Product Feedback](./customer-feedback.md)**: How feedback enters the system
- **[RFC guide](../guides/writing-an-rfc.md)**: Where discovery evidence lands
- **[Delivery Standards](./delivery-standards.md)**: Where discovery fits in the delivery process
