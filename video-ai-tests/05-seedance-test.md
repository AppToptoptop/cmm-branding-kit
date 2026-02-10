# Seedance 2.0 — Test Guide

**Type** : Multi-shot cinematic video + audio
**Prix** : API (lancement 24 février 2026)
**URL** : https://seedance.ai / https://seed.bytedance.com
**Avantage** : Multi-shot, audio sync natif, 2 minutes max

---

## ⏳ Status : En attente API (24 février)

L'API publique n'est pas encore disponible. Tester via :
- Jimeng AI (accès limité)
- Imagine.Art (intégration prévue fin février)
- Attendre API officielle

---

## Use Cases CMM (quand dispo)

1. **Mini-films** — narration multi-scènes avec transitions
2. **Publicités TikTok** — 30-60 sec avec musique intégrée
3. **Témoignages cinématiques** — qualité supérieure

---

## Test 1 : CMM Story (Multi-shot)

### Prompt

```
Scene 1 (3s): Close-up of a woman's face, tired, looking at ignored phone notifications. Cold blue lighting.

Scene 2 (3s): Same woman, different day. Phone rings. She hesitates, then picks up. Transition to warmer lighting.

Scene 3 (4s): She's on the call, walking in her kitchen, smiling. Morning golden light. We hear a warm AI voice asking "How did yesterday go?"

Scene 4 (3s): Time skip. She steps on a scale, sees result, celebrates. Phone in hand showing streak "Day 30".

Scene 5 (2s): End card with text "Call Me Maybe" and tagline.

Music: Uplifting indie acoustic, builds through scenes.
```

---

## Test 2 : Transformation Ad (30 sec)

### Prompt

```
Multi-shot commercial for an AI coaching app:

Scene 1: Woman ignoring phone notifications (blue, cold)
Scene 2: Phone call screen showing "Your Coach Calling"
Scene 3: Woman answering, listening, nodding
Scene 4: Montage of healthy habits (walking, cooking, sleeping well)
Scene 5: Before/after comparison, subtle
Scene 6: CTA "Start your journey - Call Me Maybe"

Cinematic, warm progression, French audio narration, upbeat background music.
```

---

## Test 3 : UGC-Style Testimonial

### Prompt

```
Authentic testimonial video, 20 seconds:

Scene 1: Woman in her apartment, talking to camera. French speech: "J'ai tout essayé..."
Scene 2: B-roll of phone ringing, she answers
Scene 3: Back to her face, more energized: "Maintenant, chaque matin..."
Scene 4: Quick montage of her routine improvements
Scene 5: Close-up smile, holds up phone showing app

Natural lighting, UGC aesthetic, authentic feel. French with French subtitles.
```

---

## Seedance 2.0 Features clés

| Feature | Description |
|---------|-------------|
| Multi-shot | Plusieurs scènes cohérentes en une génération |
| Audio sync | Musique + voix générées avec la vidéo |
| Lip sync | 8+ langues avec sync parfait |
| 2K output | Résolution cinéma |
| Character consistency | Même personnage à travers les scènes |

---

## API Structure (anticipée)

```javascript
// POST https://api.seedance.ai/v2/generate

{
  "prompt": "Multi-shot story...",
  "scenes": [
    {"duration": 3, "description": "Scene 1..."},
    {"duration": 4, "description": "Scene 2..."}
  ],
  "audio": {
    "music_style": "uplifting indie",
    "voice": {
      "language": "fr-FR",
      "narration": "Script here..."
    }
  },
  "output": {
    "resolution": "1080p",
    "aspect_ratio": "9:16"
  }
}
```

---

## Checklist (quand API dispo)

- [ ] S'inscrire pour accès API
- [ ] Obtenir clé API
- [ ] Tester prompt simple
- [ ] Tester multi-shot story
- [ ] Comparer avec Runway + HeyGen combo
- [ ] Évaluer coût par vidéo

---

## Comparaison anticipée

| Critère | Seedance 2.0 | Runway + HeyGen |
|---------|--------------|-----------------|
| Multi-shot | Natif | Manuel (montage) |
| Audio | Intégré | Séparé |
| Setup | 1 prompt | 2+ outils |
| Coût | TBD | ~$36/mo combo |
| Complexité | Simple | Modéré |

---

## Reminder

📅 **24 février 2026** : Vérifier disponibilité API Seedance

```bash
# Ajouter au calendrier
echo "24 février : Check Seedance API" >> ~/CLAUDE_AA/TODO.md
```
