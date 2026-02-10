# Call Me Maybe — Referral Program Design

> Turn every user into a growth engine. Viral loop: user refers friend → friend signs up → both get rewarded → friend refers another friend.

---

## Program Overview

**Name:** "Bring a Buddy" (or "Invite a Friend" — test both)

**Core mechanic:** Every user gets a unique referral link. When a friend signs up AND stays for 7+ days, both the referrer and the new user get a reward.

**Why referrals work for CMM:**
- Weight loss is social — people do it with friends, partners, coworkers
- Accountability works better in pairs ("duo accountability")
- Emotional motivation: "I want my friend to succeed too"
- CMM already has a Duo plan — natural upsell path

---

## Reward Structure

### Option A: Credit-Based (Recommended for launch)

| Action | Referrer Gets | New User Gets |
|--------|---------------|---------------|
| Friend signs up (free trial) | Nothing yet | 7-day free trial |
| Friend stays 7+ days | 1 month free | 1 extra week free |
| Friend becomes paying user | €5 credit | — |
| 3 friends become paying | Full month free + "Ambassador" badge | — |
| 10 friends become paying | Lifetime Duo plan free | — |

### Option B: Tiered Rewards

| Referrals | Reward | Badge |
|-----------|--------|-------|
| 1 | 2 weeks free | 🌱 Seed |
| 3 | 1 month free | 🌿 Sprout |
| 5 | 2 months free | 🌳 Tree |
| 10 | 6 months free + merch | 🏆 Champion |
| 25 | Lifetime free + advisory board invite | 👑 Legend |

### Why Credit > Cash:
- Credits keep users in the ecosystem
- No payment processing overhead
- Creates FOMO ("I'm 1 referral away from a free month")
- Psychologically feels more valuable than a small cash amount

---

## Viral Loop Mechanics

```
User A joins CMM
    → Gets unique referral link (cmm.app/ref/AARON23)
    → Shares with Friend B
        → Friend B clicks link, gets 7-day free trial
        → Friend B completes onboarding, gets first call
        → After 7 days: both User A and Friend B get rewards
        → Friend B now has their own referral link
            → Friend B shares with Friend C
                → Cycle continues
```

### K-Factor Target

**Formula:** K = invites_per_user × conversion_rate

**Target:** K > 0.3 (every 10 users bring 3 more)

| Metric | Conservative | Optimistic |
|--------|-------------|------------|
| Users who share link | 30% | 50% |
| Avg invites per sharer | 3 | 5 |
| Click → signup rate | 20% | 35% |
| Signup → 7-day retention | 50% | 65% |
| **Effective K-factor** | 0.09 | 0.57 |

To hit K > 0.3, we need to optimize: (1) sharing rate and (2) click-to-signup conversion.

---

## Sharing Mechanisms

### 1. In-App Share Prompts

**Trigger moments (highest sharing intent):**
- After completing a 7-day streak → "You've been consistent for 7 days! Know someone who needs this too?"
- After a good call → "Great call! Share your progress with a friend"
- After reaching a weight milestone → "You lost 2kg! Celebrate by inviting a friend to join you"
- Monthly progress report → "Your month was amazing. Share with someone who'd benefit"

### 2. Referral Link Sharing

Each user gets:
- **Unique link:** `callmemaybe.app/ref/[USERNAME]`
- **Pre-written share messages** (tap to copy):

**WhatsApp (primary for France):**
> "J'utilise une app qui m'appelle tous les matins pour me coacher sur ma perte de poids. C'est bizarre mais ça marche — j'ai un streak de [X] jours. Essaie avec mon lien, on a tous les deux un bonus : [LINK]"

**Instagram Story:**
- Branded shareable card (dark theme, streak count, CMM logo)
- "Swipe up to try" (or link sticker)

**SMS:**
> "Hey! I found this app that calls me every morning for weight loss accountability. Sounds weird but I love it. Try it free: [LINK]"

**Email:**
> Subject: "This app calls me every morning (and I actually answer)"
> "Hey [NAME], I started using Call Me Maybe — it's an AI coach that calls you every morning to check in on your weight loss goals. I'm on a [X]-day streak. Try it free with my link: [LINK]"

### 3. Duo Accountability

**Concept:** "Bring your accountability buddy"
- Invite a friend → both get daily calls at the same time
- Weekly comparison: who kept their streak longer?
- Friendly competition leaderboard
- Joint progress tracking

This is THE killer referral feature. People lose weight better together.

---

## Gamification Layer

### Referral Streaks
- Refer 1 friend this month → bronze referral badge
- Refer 3 friends this month → silver + bonus reward
- Refer 5+ this month → gold + exclusive features

### Leaderboard
- Monthly "Top Referrers" leaderboard
- Top 3 get special rewards (extra months free, merch, feature in newsletter)
- Public recognition in the community

### Ambassador Program (Top 1% Referrers)
- Exclusive "CMM Ambassador" title
- Free Duo plan for life
- Direct Slack channel with founders
- Early access to new features
- Input on product roadmap
- Invited to beta test new features

---

## Anti-Gaming Measures

- Referral only counts after 7 days of active use (at least 5 calls answered)
- Same IP/device detection — no self-referrals
- Maximum 50 referrals per month per user (prevent abuse)
- Manual review for users with >20 referrals (verify quality)
- No referral credit for users who churn within 14 days

---

## Implementation Plan

### Phase 1: MVP (Launch month)
- Unique referral links (simple query parameter tracking)
- Credit-based rewards (1 month free for first referral)
- WhatsApp share button (primary channel for France)
- Basic referral dashboard in user profile

### Phase 2: Gamification (Month 2-3)
- Referral streaks and badges
- Duo accountability feature
- Instagram shareable cards
- Leaderboard

### Phase 3: Ambassador (Month 4-6)
- Ambassador program launch
- Advanced analytics (which users refer the most, which channels convert best)
- A/B test reward structures
- Partnership referrals (dietitians, gyms get custom links)

---

## Metrics to Track

| Metric | Month 1 | Month 3 | Month 6 |
|--------|---------|---------|---------|
| % users who share | 10% | 20% | 30% |
| Avg referrals per sharer | 2 | 3 | 4 |
| Referral signup rate | 15% | 25% | 30% |
| Referral → paid conversion | 10% | 18% | 25% |
| K-factor | 0.03 | 0.15 | 0.30 |
| % revenue from referrals | 5% | 15% | 25% |

---

## Cost Analysis

### Scenario: 1,000 users, 20% share, avg 3 referrals

- Users who share: 200
- Total referral signups: 120 (200 × 3 × 20% conversion)
- Referral conversions (paid): 18 (120 × 15%)
- **Revenue from referrals: €178/month** (18 × €9.90)

### Cost of rewards:
- 18 referrers get 1 month free: 18 × €9.90 = **€178 in credits**
- 18 new users got free trial: €0 (they pay after trial)

### Net: Break-even in month 1, profitable from month 2+

As the referral pool grows and conversion improves, the cost of acquisition via referral (€9.90 first-month credit) is far cheaper than paid ads (estimated €15-30 CAC via Meta/Google).

---

## Integration with Perks Program

Referral × Perks synergy:
- Top referrers unlock partner perks (Presto Fresco pizza, gym day pass)
- "Refer 3 friends, get a free pizza from Presto Fresco" ← this is SHAREABLE content
- Partner perks become referral incentives at zero cost to CMM
- Partners benefit from increased exposure through referral sharing
