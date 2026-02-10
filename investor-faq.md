# Call Me Maybe — Investor FAQ & Objection Handling

> Every question an investor, advisor, or partner might ask — with data-backed answers.
> Use this for pitch prep, partner meetings, and accelerator interviews.

---

## 1. The Big Questions

### "What is Call Me Maybe in one sentence?"

**Answer:** "An AI coach that calls you every morning for weight loss accountability — the first product to combine daily phone calls, AI personalization, and streak gamification for health behavior change."

### "Why will this work?"

**Answer:** "Three converging trends: (1) AI voice agents are now good enough to have natural conversations, (2) the weight loss market is $405B and growing 7.7% CAGR, (3) accountability coaching has 2.7x better outcomes than self-monitoring, but human coaches cost $200-500/month. We deliver daily accountability for €9.90/month."

### "Why you? Why now?"

**Answer:**
- **Why us:** Aaron has product/marketing expertise, Ata has backend/AI engineering. We're building with AI-native tools, moving fast, and we deeply understand the French market.
- **Why now:** (1) AI voice quality crossed the "uncanny valley" in 2024-2025 with ElevenLabs/VAPI.ai, (2) WW France went bankrupt in 2025 — millions of users looking for alternatives, (3) France declared mental health as "Grande Cause Nationale" 2025-2026, (4) GLP-1 drugs (Ozempic/Wegovy) launched in France — these users need behavioral support alongside medication.

---

## 2. Market Questions

### "How big is the market?"

**Answer:**
- Global weight management: **$405B** (2025), growing 7.7% CAGR
- AI health coaching: **$14.6B** by 2028 (30.8% CAGR)
- France addressable: **47% of adults overweight/obese** = ~25M people
- Noom alone does **$400M+/year** revenue proving the model works

### "Who's your competition?"

**Answer:** "We have competitors in adjacent spaces, but **zero competitors** combine daily AI phone calls + weight loss + France:
- **Noom** ($3.7B valuation): Text-based, no calls, €70/month, not localized for France
- **MyFitnessPal** (Under Armour): Calorie tracking, passive, no coaching
- **CoachCall.ai**: General accountability calls, not weight-loss specific
- **Meela** ($3.5M seed): AI health coaching, chat-based, no phone calls
- **Pi.ai**: General AI companion, no health focus

The unique intersection we own: **AI + Phone Call + Weight Loss + French Market** = no one else is there."

### "What if Noom adds phone calls?"

**Answer:** "Noom has 6,000+ employees and a $3.7B valuation to protect. Adding phone calls would:
1. Cannibalize their existing text-based model
2. Require rebuilding their entire tech stack for voice
3. Cost significantly more per user (voice AI infrastructure)
4. Take 12-18 months minimum to ship

By then, we'll have 12+ months of voice interaction data, a loyal community, and brand recognition in France. Their innovator's dilemma is our advantage."

### "Why France first?"

**Answer:**
- **No AI phone call competitor** exists for under-60 in France
- **76% of French consumers prefer voice channels** (vs 52% globally)
- **WW France bankruptcy (2025)** created a vacuum in the market
- **Mental health = Grande Cause Nationale** 2025-2026 — government priority
- **RGPD as competitive weapon**: hosting data in France (OVHcloud) is a moat against US competitors
- **€9.90 pricing** works because French app ARPU is lower but subscription culture is growing
- **69% won't pay for generic apps** BUT will pay for personalized coaching that delivers results

### "France is small. How do you scale?"

**Answer:** "France is our beachhead, not our ceiling.
1. **Month 1-6:** France only (50M population, prove product-market fit)
2. **Month 7-12:** French-speaking markets (Belgium, Switzerland, Quebec = +25M)
3. **Year 2:** English markets (US, UK, Australia = 500M+)
4. **Year 2-3:** German, Spanish markets

The playbook is proven: Duolingo started in one language, BlaBlaCar started in France, Doctolib started in France. French-first, global-second."

---

## 3. Product Questions

### "How does the AI actually work?"

**Answer:** "We use VAPI.ai for voice orchestration + a custom LLM layer for coaching intelligence:
1. **Scheduled call trigger** → VAPI.ai initiates the phone call
2. **AI coach (Maya)** follows a structured 3-minute check-in: mood → yesterday review → today's plan → motivation
3. **Memory layer** (Supabase) stores conversation history — the coach remembers previous calls
4. **Personalization engine** adapts tone, questions, and advice based on user profile, streak status, and recent patterns
5. **Post-call processing**: transcript analysis, streak update, optional WhatsApp follow-up"

### "What if users don't answer the phone?"

**Answer:** "This is our #1 risk, and we've designed for it:
- **Branded caller ID** → users see 'Call Me Maybe' not an unknown number (+56% answer rate)
- **Preview notification** (5 min before call) → user expects the call
- **Contact saving** in onboarding → phone marks it as known contact
- **Streak gamification** → missing a call = breaking your streak (FOMO)
- **Estimated result: 70-90% answer rate** vs 20% for unknown calls

Our beta data target is >80% daily answer rate."

### "3 minutes seems short. Is that enough?"

**Answer:** "Yes — by design:
- **Research shows** daily micro-interactions beat weekly long sessions for behavior change
- **Duolingo model**: 5-minute daily lessons drove 500M downloads
- **Cognitive load**: 3 minutes is easy to commit to. The habit forms because the barrier is low.
- **Data**: Our voice prompt design covers mood + food + movement + one commitment in exactly 2.5-3.5 minutes
- **If users want more**: Pro plan includes a second daily call + WhatsApp support"

### "What about privacy / RGPD?"

**Answer:** "We're privacy-first, especially for health data:
- **Data hosted in France** (OVHcloud Paris region)
- **Call recordings deleted after 90 days** (transcripts after 1 year)
- **Explicit consent** for health data processing (RGPD Article 9)
- **No data sold** to third parties, ever
- **CNIL registration** before processing any health data
- **Data portability**: users can export all their data in JSON/CSV
- This is actually a **competitive moat** against US competitors who can't guarantee EU data residency"

---

## 4. Business Model Questions

### "How do you make money?"

**Answer:**
| Revenue Stream | Price | Margin | Timeline |
|---------------|-------|--------|----------|
| B2C Starter | €9.90/mo | ~75% | Launch |
| B2C Pro | €14.90/mo | ~70% | Launch |
| B2C Duo | €24.90/mo | ~80% | Launch |
| Annual plans | 40% discount | Higher LTV | Month 2 |
| B2B Corporate | €3-5/employee/mo | ~85% | Month 4+ |
| B2B Mutuelles | €2.50/member/mo | ~80% | Month 4+ |
| Gym partnerships | Rev share | Variable | Month 6+ |
| Dietitian referral | 25% commission | ~90% | Month 4+ |

### "What's your unit economics?"

**Answer:**
| Metric | Value | Benchmark |
|--------|-------|-----------|
| ARPU (blended) | ~€12/mo | Noom: €35/mo |
| COGS per user/mo | ~€2.50 (VAPI.ai + infra) | — |
| Gross margin | ~80% | SaaS median: 75% |
| CAC (target, blended) | <€15 | Health apps: €20-50 |
| LTV (6-month) | >€50 | — |
| LTV:CAC ratio | >3:1 | Healthy: >3:1 |
| Payback period | <2 months | SaaS: 12-18 months |

### "What's your revenue projection?"

**Answer:**
| Month | Users | Paying | MRR | Notes |
|-------|-------|--------|-----|-------|
| 1 | 500 | 50 | €500 | Launch |
| 3 | 2,500 | 350 | €3,500 | Organic growth |
| 6 | 8,500 | 1,300 | €13,000 | + B2B pilots |
| 12 | 25,000 | 4,000 | €50,000 | Scale |

### "When do you break even?"

**Answer:** "With a lean team of 2 and €520/month in marketing spend, we break even at ~150 paying users (€1,500 MRR). We expect to hit this in Month 2. Profitability (after all costs including founding salaries) at ~€15K MRR, expected Month 5-6."

### "What's your burn rate?"

**Answer:** "Currently near-zero (bootstrapped). Post-launch monthly costs:
- VAPI.ai (voice API): ~€500/month at 500 users
- OVHcloud hosting: ~€50/month
- Brevo (email): free tier
- PostHog: free tier
- Marketing: ~€520/month
- **Total: ~€1,070/month** (excluding salaries)

We can reach profitability without external funding."

---

## 5. Funding Questions

### "Are you raising?"

**Answer:** "We're bootstrapping to product-market fit first. Our priority is:
1. **Non-dilutive funding** (Bourse French Tech €30K, CIR/CII tax credits €30K+, BPI Subvention Innovation €50K)
2. **Revenue-funded growth** (break even at 150 users, Month 2)
3. **If we raise**: seed round at Month 6-8 with proven PMF, target €500K-1M for scaling to new markets

We don't need funding to launch. We want funding to scale faster."

### "What would you do with funding?"

**Answer:**
| Amount | Use |
|--------|-----|
| €30K (grants) | 6 months runway + marketing experiments |
| €250K (pre-seed) | Hire 1 engineer + expand to Belgium/Switzerland + paid ads |
| €500K-1M (seed) | Team of 5, English market expansion, B2B sales hire |

### "What's your valuation expectation?"

**Answer:** "Too early for formal valuation. Benchmarks:
- Meela raised $3.5M seed (AI health coaching, no phone calls)
- Noom was valued at $3.7B at maturity
- We'd be comfortable discussing at seed stage with proven metrics (>1,000 paying users, >€10K MRR, >60% 30-day retention)"

---

## 6. Risk Questions

### "What if VAPI.ai raises prices dramatically?"

**Answer:** "Three mitigations:
1. Negotiate volume pricing early (committed usage discounts)
2. Multi-provider strategy: test Retell.ai, Bland.ai as alternatives
3. Long-term: build our own voice pipeline with open-source models (WhisperV3 + fine-tuned LLM + Bark/XTTS for speech)
4. Voice API costs are trending DOWN (10x cheaper than 2023)"

### "What if people stop answering after the novelty wears off?"

**Answer:** "This is exactly why we built:
- **Streak gamification** (Duolingo model — 5x retention vs no streaks)
- **Progressive coaching** (content evolves, never repetitive)
- **Community accountability** (buddy system, Discord)
- **Escalating rewards** (new features unlock at Day 14, 30, 60)
- **Churn prevention system** (4-level intervention playbook)

Plus: answering a phone call is fundamentally different from opening an app. It's a social contract. You answer because someone called you."

### "Health data is sensitive. What if there's a breach?"

**Answer:** "We take this extremely seriously:
- Data encrypted at rest (AES-256) and in transit (TLS 1.3)
- Hosted in France (OVHcloud, ISO 27001 certified)
- Health data processed under explicit consent (RGPD Art. 9)
- 72-hour breach notification to CNIL (RGPD Art. 33)
- Regular security audits
- No employee can access personal health data without written justification
- We carry cyber insurance"

### "What if users become dependent on the AI for emotional support?"

**Answer:** "Important concern. Our safeguards:
- Maya is explicitly positioned as a **coach, not a therapist**
- If users mention serious mental health concerns, Maya says: 'That sounds important — have you talked to a professional about that?'
- We never give medical advice
- We include mental health resources in the app
- Our coaching model focuses on **habits and accountability**, not emotional dependency
- The graduation path encourages users to become more autonomous over time"

---

## 7. Team Questions

### "You're only 2 people. Can you execute?"

**Answer:** "Yes, and it's an advantage:
- **Speed**: We ship in days, not quarters. No bureaucracy.
- **AI-native**: We use AI tools (Claude, Cursor, Vercel) to do the work of 10 people
- **Focus**: We do ONE thing (daily AI calls for weight loss in France). No feature creep.
- **Cost**: Near-zero burn rate means we can iterate for months without funding pressure
- **Hire at scale**: Plan to bring on a community manager at Month 3, and an engineer at Month 6"

### "Do you have a technical co-founder?"

**Answer:** "Yes — Ata handles all backend, AI engineering, infrastructure, and data. Aaron handles product, marketing, and frontend. Classic builder + hustler founding team."

---

## 8. Quick-Fire Answers (30 Seconds Each)

| Question | Answer |
|----------|--------|
| TAM? | $405B weight management market |
| SAM? | $14.6B AI health coaching |
| SOM? | €5M (France, weight loss, AI-ready users) |
| Business model? | B2C subscription + B2B corporate wellness |
| Pricing? | €9.90 / €14.90 / €24.90 per month |
| CAC? | Target <€15 blended |
| LTV? | Target >€50 (6-month) |
| Gross margin? | ~80% |
| Break even? | 150 paying users (~Month 2) |
| Key metric? | Daily call answer rate (>80%) |
| Moat? | Voice data + French-first + community |
| Exit? | Acquisition (Noom, WW, Apple Health, insurance) |
| Comparable exits? | Noom ($3.7B), MyFitnessPal ($475M acq) |
