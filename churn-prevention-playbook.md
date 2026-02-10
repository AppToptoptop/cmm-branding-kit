# Call Me Maybe — Churn Prevention Playbook

> How to keep users from cancelling. Triggers, interventions, and win-back strategies.
> Target: <10% monthly churn.

---

## 1. Churn Risk Signals

### Early Warning System (Detect Before They Leave)

| Signal | Risk Level | Detection | Trigger Point |
|--------|-----------|-----------|---------------|
| Missed 2 calls in a row | Medium | VAPI.ai logs | Auto-trigger Day 2 |
| Missed 3+ calls in a row | High | VAPI.ai logs | Auto-trigger Day 3 |
| Call duration dropping (<1.5 min avg) | Medium | VAPI.ai logs | Weekly check |
| No food photo logged in 7 days | Low | Supabase | Weekly check |
| Streak reset 3+ times in 30 days | High | Supabase | Auto-trigger |
| Opened cancellation page | Critical | PostHog | Real-time |
| No app open in 5 days | High | PostHog | Auto-trigger |
| NPS score <6 | High | In-app survey | Post-survey |
| Support complaint (negative) | Medium | Brevo/Discord | Within 24h |
| Weight plateau >3 weeks | Medium | Supabase | Weekly check |

### Risk Score Formula

```
Risk Score =
  (missed_calls_7d × 15) +
  (streak_resets_30d × 10) +
  (days_since_last_app_open × 5) +
  (cancellation_page_views × 25) -
  (current_streak × 2) -
  (photos_logged_7d × 3)

Score 0-20: Low risk (green)
Score 21-50: Medium risk (yellow)
Score 51-80: High risk (orange)
Score 81+: Critical (red)
```

---

## 2. Intervention Playbook

### Level 1: Nudge (Low Risk — Score 0-20)

**Trigger:** Missed 1 call or slight engagement drop

**Actions:**
- WhatsApp message from Maya: "Hey [NAME], missed you this morning! Everything okay? I'll call again tomorrow at [TIME]. Your streak is at [X] days — let's keep it going!"
- Push notification with streak FOMO: "Your [X]-day streak is waiting! Answer tomorrow to keep it alive."

### Level 2: Re-Engage (Medium Risk — Score 21-50)

**Trigger:** Missed 2-3 calls, engagement dropping

**Actions:**
1. Personalized WhatsApp from Aaron (not automated):
```
Hey [NAME], it's Aaron from CMM. I noticed you've been quieter lately.

No judgment — life gets busy. But I wanted to check in personally.

Is there anything about the calls that's not working for you? Too early? Too long? Not the right questions?

I can adjust your experience. Just tell me what would make this work better for you.
```

2. Offer to change call time:
```
Quick thought: would a different call time work better? Some users find evenings work when mornings don't.

Just reply with a new time and I'll switch it today.
```

3. Send a "win" reminder:
```
BTW — since you started, you've:
- Answered [X] calls
- Logged [X] meals
- Built your longest streak of [X] days

That's not nothing. That's momentum. 💪
```

### Level 3: Save (High Risk — Score 51-80)

**Trigger:** 4+ missed calls, streak broken multiple times, low engagement

**Actions:**
1. Personal video/voice message from Aaron:
```
[Record 30-second voice note]
"Hey [NAME], it's Aaron. I know we haven't connected in a few days. I wanted you to know that your spot is still here, Maya is still ready to call you, and there's no judgment about taking a break.

When you're ready, just open the app and we'll restart. No pressure. But I genuinely believe in what you started, and I'd hate for you to lose it."
```

2. Offer a "fresh start" package:
- Reset streak without penalty ("Fresh Start Mode")
- New call time option
- Lighter check-in format (2 min instead of 3)
- Change coach persona

3. Offer a free month extension:
```
[NAME], I want to give you something: 30 days free. No strings attached.

You've been part of our community and I don't want a rough week to end your journey.

Just reply "RESTART" and I'll add 30 free days to your account right now.
```

### Level 4: Last Chance (Critical — Score 81+)

**Trigger:** Opened cancellation page, or 7+ days inactive

**Actions:**
1. **Cancellation page intervention** — Before processing cancellation, show:
   - "Wait — before you go" modal with:
     - Their total stats (calls answered, streak record, days active)
     - Offer: "Pause instead? Freeze your account for up to 30 days. Your streak saves, your data saves. Come back when you're ready."
     - Offer: downgrade to free tier (1 call/week instead of daily)
     - Direct line to Aaron: "Want to tell us why? I'll personally fix it."

2. **Exit survey** (before processing):
```
We're sorry to see you go. Can you help us understand why?

[ ] Calls were annoying / too frequent
[ ] Didn't see results
[ ] Too expensive
[ ] Found a better solution
[ ] Personal reasons / life got in the way
[ ] AI felt too robotic / not personal enough
[ ] Privacy concerns
[ ] Other: ___

What would have made you stay?
[Text field]
```

3. **Win-back email** (sent 3 days after cancellation):
```
Subject: We miss you, [NAME]

Hey [NAME],

It's been a few days since you left Call Me Maybe. I wanted to reach out one more time.

I read your feedback, and you mentioned [REASON_FROM_EXIT_SURVEY]. I hear you.

Since you left, we've [IMPROVEMENT_RELATED_TO_REASON].

If you want to give us another shot, here's 50% off for 2 months:
→ Use code COMEBACK50 at callmemaybe.app/restart

No hard feelings if not. I genuinely hope you find what works for you.

— Aaron
```

4. **Win-back SMS** (sent 7 days after cancellation):
```
Hey [NAME], quick note from Aaron @ CMM. We made some changes based on your feedback. Want to try again? 50% off for 2 months: callmemaybe.app/restart (reply STOP to opt out)
```

---

## 3. Proactive Retention Strategies

### The "Plateau Problem" (Weeks 3-6)

Most churn happens when users hit a weight plateau. Prepare for it:

**Week 3 call script adjustment:**
```
"[NAME], I want to talk about something important. Around this time, many people hit what we call a plateau — the scale stops moving even though you're doing everything right.

This is NORMAL. It's actually a sign your body is adjusting. The worst thing you can do is quit now.

For the next two weeks, let's stop focusing on the number and focus on how you FEEL. Deal?"
```

**Week 4 milestone:**
```
"One month, [NAME]. Most people who quit a diet program quit in the first 30 days. You didn't. That alone is worth celebrating.

Fun fact: research shows that people who make it past 30 days are 4x more likely to reach their goal. You're in the zone."
```

### Engagement Boosters

| Strategy | When | Expected Impact |
|----------|------|----------------|
| Weekly challenge (community) | Every Monday | +15% engagement |
| Monthly leaderboard | 1st of month | +10% retention |
| Surprise reward day | Random | +20% that day |
| New coach persona unlock | Day 14, 30, 60 | +5% retention |
| Friend referral challenge | Monthly | +10% K-factor |
| Holiday-themed calls | Seasonal | +8% engagement |
| Photo before/after prompt | Day 30, 60, 90 | +12% emotional investment |

### The "Accountability Buddy" Feature

Pair users together for extra accountability:
- Both users get a notification when the other answers their call
- Shared streak counter
- If one misses, the other gets a "your buddy needs you" prompt
- Creates social pressure beyond just the AI

### Graduation Path (Prevent Boredom)

| Phase | Days | Focus | New Feature Unlocked |
|-------|------|-------|---------------------|
| Beginner | 1-14 | Build habit, basic nutrition | Streak badges |
| Intermediate | 15-30 | Deeper coaching, food logging | Photo analysis, buddy system |
| Advanced | 31-60 | Mindful eating, exercise | Weekly deep-dive call, challenges |
| Expert | 61-90 | Maintenance, mentoring | Ambassador status, help newbies |
| Master | 90+ | Long-term sustainability | Lifetime pricing, community leader |

---

## 4. Pricing Retention Tactics

### Reduce Churn with Commitment

| Tactic | Mechanism | Churn Reduction |
|--------|-----------|----------------|
| Annual plan discount (40% off) | Lock-in, sunk cost | -30% churn |
| Quarterly plan (20% off) | Medium commitment | -15% churn |
| Prepaid credits (buy 6mo, get 1 free) | Advance payment | -25% churn |
| Streak-based discount | >30 day streak = 10% off next month | -20% churn |
| Friend referral credit | Both get 1 free month | -10% churn + growth |

### Downgrade Path (Don't Lose Them Completely)

Instead of cancelling, offer:

```
Before you go — would any of these work better?

1. PAUSE (free): Freeze your account for up to 60 days. Everything saves.
2. LITE (€4.90/mo): 3 calls per week instead of daily. Keep your streak.
3. FREE: 1 call per week + community access. Stay connected.
4. CANCEL: We'll miss you, but we understand.
```

---

## 5. Win-Back Campaigns

### 30-Day Win-Back Sequence

| Day | Channel | Message |
|-----|---------|---------|
| 3 | Email | "We miss you" + personalized stat recap |
| 7 | SMS | Short message + 50% off code |
| 14 | Email | "Here's what's new" + feature update |
| 21 | WhatsApp | Voice note from Aaron |
| 30 | Email | "Final offer: 60% off for 3 months" |

### Seasonal Win-Back

| Timing | Theme | Offer |
|--------|-------|-------|
| January | New Year, New Start | 50% off + streak amnesty |
| April | Spring reset | 40% off + fresh goals setup |
| September | Back to routine | 50% off + buddy match |
| Pre-holiday | Stay on track during holidays | 30% off + holiday call scripts |

---

## 6. Metrics to Track

| Metric | Target | Alert Threshold |
|--------|--------|-----------------|
| Monthly churn rate | <10% | >12% = red alert |
| Daily call answer rate | >80% | <70% = investigate |
| 7-day retention | >85% | <75% = problem |
| 30-day retention | >60% | <50% = problem |
| 90-day retention | >40% | <30% = existential |
| Save rate (cancellation page) | >30% | <20% = improve offers |
| Win-back conversion | >15% | <10% = refresh offers |
| Pause-to-return rate | >50% | <40% = improve pause experience |
| NPS | >40 | <30 = investigate |

---

## 7. Churn Post-Mortem Template

### Monthly Churn Analysis (Do Every Month)

```
MONTH: [Month Year]
TOTAL USERS START: [X]
CHURNED: [X] ([X]%)
NET GROWTH: [X]

TOP CHURN REASONS (from exit surveys):
1. [Reason] — [X]%
2. [Reason] — [X]%
3. [Reason] — [X]%

COHORT ANALYSIS:
- Users from Month 1: [X]% still active
- Users from Month 2: [X]% still active
- Users from Month 3: [X]% still active

WHAT WORKED:
- [Intervention that saved users]
- [Feature that improved retention]

WHAT DIDN'T:
- [Failed attempt]

ACTION ITEMS FOR NEXT MONTH:
1. [Action]
2. [Action]
3. [Action]
```
