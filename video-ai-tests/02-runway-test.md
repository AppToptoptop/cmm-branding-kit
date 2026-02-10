# Runway Gen-3 — Test Guide

**Type** : Text/Image to Video
**Prix** : $12/mo (Standard) / $28/mo (Pro)
**URL** : https://runwayml.com
**Skill installé** : `~/.claude/skills/remotion` (pour post-prod)

---

## Use Cases CMM

1. **B-roll cinématique** — scènes de téléphone, réveil, transformation
2. **Transitions** — effets visuels entre scènes
3. **Ambiance** — lumière matinale, lifestyle shots

---

## Test 1 : Phone Call Scene

### Prompt

```
A smartphone on a wooden nightstand at 6:30 AM. Soft golden morning light streams through sheer white curtains. The phone screen illuminates showing an incoming call with "Your AI Coach" text. Gentle vibration. Cinematic quality, shallow depth of field, warm color grading. Camera slowly pushes in on the phone.
```

### Paramètres

| Paramètre | Valeur |
|-----------|--------|
| Duration | 4 seconds |
| Resolution | 1080p |
| Aspect ratio | 16:9 ou 9:16 |
| Motion | Slow camera push |

---

## Test 2 : Morning Transformation

### Prompt

```
A woman wakes up in a cozy bedroom, reaches for her phone on the nightstand. Morning golden hour light. She smiles as she sees the incoming call. Cinematic, lifestyle photography style, warm tones. 4K quality.
```

### Paramètres

| Paramètre | Valeur |
|-----------|--------|
| Duration | 5 seconds |
| Style | Lifestyle/commercial |
| Motion | Natural movement |

---

## Test 3 : Before/After Split

### Prompt

```
Split screen comparison. Left: tired woman ignoring phone notifications, blue cold lighting, messy room. Right: same woman energetically answering phone call, warm golden lighting, organized space. Smooth morph transition between both sides.
```

---

## Test 4 : Abstract Motivation

### Prompt

```
Abstract visualization of accountability: invisible threads of light connecting a person to a glowing phone. Ethereal, inspiring mood. Particles of light flowing between human and device. Dark background with teal and gold accents.
```

---

## Mode Image-to-Video

Uploader une image de base et animer :

1. Screenshot de l'UI Call Me Maybe → animer les éléments
2. Photo de téléphone sur table → faire vibrer/illuminer
3. Portrait statique → ajouter mouvement subtil

---

## Checklist de test

- [ ] Créer compte Runway (free credits ou $12/mo)
- [ ] Tester Gen-3 Alpha Turbo (plus rapide)
- [ ] Tester Gen-3 Alpha (meilleure qualité)
- [ ] Générer les 4 prompts
- [ ] Comparer durées de génération
- [ ] Télécharger en 1080p et 4K
- [ ] Évaluer cohérence du mouvement

---

## Résultats

| Test | Temps | Qualité /5 | Mouvement /5 | Crédits utilisés |
|------|-------|------------|--------------|------------------|
| Phone Call | | | | |
| Transformation | | | | |
| Split Screen | | | | |
| Abstract | | | | |

---

## Tips Runway

- **Gen-3 Alpha Turbo** : Plus rapide, moins cher, qualité légèrement inférieure
- **Gen-3 Alpha** : Meilleure qualité, plus lent, plus cher
- **Extend** : Prolonger une vidéo existante
- **Interpolate** : Créer des transitions entre 2 images

---

## Fichiers générés

Sauvegarder dans : `~/CLAUDE_AA/Projects/cmm-branding-kit/video-ai-tests/outputs/runway/`
