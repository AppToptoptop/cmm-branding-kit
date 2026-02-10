# CMM Branding Kit

Complete branding, marketing, and strategy assets for Call Me Maybe.

## Deployment

**Live**: https://cmm-branding-kit.vercel.app

## Assets Overview

### Strategy & Research

| File | Description |
|------|-------------|
| `strategy.html` | War Room dashboard — full strategy, landing pages, A/B ideas |
| `market-research.html` | France market analysis, competitor landscape |
| `cmm-market-research-2026.md` | Detailed 2026 market research |
| `pricing-benchmark.md` | Competitor pricing analysis |
| `pricing-research.html` | Visual pricing strategy |

### Landing Pages

| File | Description | Use Case |
|------|-------------|----------|
| `landing.html` | Original landing | Legacy |
| `landing-v2.html` | Modern glassmorphism | Main landing |
| `ad-landing.html` | Conversion-optimized | Paid ads (Meta, Google) |
| `one-pager.html` | Single-page overview | Investor/partner pitches |

### Branding & Design

| File | Description |
|------|-------------|
| `looks.html` | Visual style exploration |
| `logos.html` | Logo variations |
| `wallpapers.html` | Brand wallpapers |

### Marketing Content

| File | Description |
|------|-------------|
| `tiktok-scripts.html` | TikTok video scripts |
| `video-ideas.html` | Video content ideas |
| `marketing-plan.html` | Full marketing strategy |
| `seo-strategy.html` | SEO roadmap |
| `seo-strategy.md` | SEO detailed plan |

### Influencer & Community

| File | Description |
|------|-------------|
| `influencer-research.html` | Influencer targets |
| `influencer-research.md` | Detailed influencer list |
| `community-research.html` | Community platforms |
| `community-targets-research.md` | Community strategy |
| `partners.html` | Partnership opportunities |

### Product

| File | Description |
|------|-------------|
| `onboarding.html` | User onboarding flow |
| `tech-spec.html` | Technical specifications |
| `interview-script.html` | User interview guide |
| `prd-preview-notification.html` | PRD preview feature |

### Pitch Decks

| File | Description |
|------|-------------|
| `pitch.html` | Pitch deck (FR) |
| `pitch-en.html` | Pitch deck (EN) |

## Design System

Uses **Midnight Terminal** theme:

```css
--bg: #0a0b0e;
--accent-primary: #00d4aa;   /* teal */
--accent-secondary: #ff6b35; /* orange */
--font-mono: 'Space Mono';
--font-sans: 'DM Sans';
```

Features:
- Dark glassmorphism cards
- Noise overlay texture
- Scroll fade-in animations
- Mobile-first responsive

## Ad Landing Conversion Checklist

The `ad-landing.html` is optimized for paid traffic:

- [x] Urgency bar with countdown timer
- [x] Hero with clear value proposition
- [x] Social proof (user count, testimonials)
- [x] Single pricing focus (no decision paralysis)
- [x] FAQ for objection handling
- [x] Mobile-first design
- [x] Fast load time
- [x] Clear CTA above fold

## A/B Test Ideas

From `strategy.html` war room:

1. **Hero headline**: "Perdez du poids" vs "Atteignez vos objectifs"
2. **Pricing display**: Single plan vs comparison
3. **Social proof**: Numbers vs testimonials
4. **CTA color**: Teal vs Orange
5. **Urgency**: With countdown vs without

## Quick Deploy

```bash
cd ~/CLAUDE_AA/Projects/cmm-branding-kit
vercel --yes --prod
```
