# HeyGen — Test Guide

**Type** : AI Avatar Videos
**Prix** : $24/mo (Creator plan)
**URL** : https://app.heygen.com
**Skill installé** : `~/.claude/skills/heygen`

---

## Use Cases CMM

1. **Témoignages UGC** — avatars qui racontent leur transformation
2. **Démo produit** — montrer l'appel en action
3. **Contenu multilingue** — dubbing pour expansion internationale

---

## Test 1 : Témoignage utilisatrice

### Script

```
Salut ! Je m'appelle Sophie.

Il y a 3 mois, j'en avais marre des apps de régime. Les notifications ? Je les ignorais toutes.

Puis j'ai découvert Call Me Maybe. Chaque matin à 7h30, mon téléphone sonne. C'est mon coach IA.

3 minutes pour faire le point. "Comment tu te sens ? Hier c'était comment ? Aujourd'hui on fait quoi ?"

Simple. Mais ça change tout.

Résultat ? Moins 6 kilos. Et surtout, j'ai enfin l'impression que quelqu'un m'attend.

Teste gratuitement, le lien est en bio.
```

### Paramètres recommandés

| Paramètre | Valeur |
|-----------|--------|
| Avatar | Femme française, 30-35 ans, casual |
| Voix | Française naturelle, pas robotique |
| Background | Home setting / salon lumineux |
| Durée | ~45 secondes |
| Ratio | 9:16 (vertical pour TikTok/Reels) |

### API Request (via skill)

```bash
# Utiliser le skill HeyGen installé
# POST /v1/video_agent/generate

{
  "prompt": "Create a 45-second testimonial video in French. A woman named Sophie in her 30s, casual home setting, speaks directly to camera about how Call Me Maybe helped her lose 6kg. Warm, authentic tone. End with call-to-action.",
  "voice_locale": "fr-FR",
  "aspect_ratio": "9:16"
}
```

---

## Test 2 : Explication produit

### Script

```
Tu connais le problème avec les apps de régime ?

Tu les télécharges, motivée. Et 3 jours plus tard... tu les ignores.

Call Me Maybe, c'est différent.

On t'APPELLE. Vraiment. Chaque matin.

Un coach IA qui te demande comment tu vas, ce que t'as mangé hier, ce que tu prévois aujourd'hui.

3 minutes. Pas de jugement. Juste de l'accountability.

Parce qu'une notification, tu la swipes. Mais un appel... tu décroches.

Essaie gratuitement pendant 7 jours.
```

### Paramètres

| Paramètre | Valeur |
|-----------|--------|
| Avatar | Femme dynamique, 25-30 ans |
| Voix | Énergique mais pas surjouée |
| Background | Neutre ou gradient |
| Durée | ~35 secondes |
| Ratio | 9:16 |

---

## Test 3 : Version homme (audience secondaire)

### Script

```
J'étais sceptique au début.

Un coach IA qui m'appelle ? Ça va être bizarre.

En fait, non. C'est comme un pote qui te check chaque matin.

"Salut Thomas, bien dormi ? L'entraînement hier, ça a donné quoi ? Et pour aujourd'hui ?"

Simple, direct, pas de bullshit.

6 semaines, moins 8 kilos, et surtout une routine qui tient.

Le lien est en bio si tu veux tester.
```

---

## Checklist de test

- [ ] Créer compte HeyGen (free trial ou Creator $24)
- [ ] Tester Video Agent avec prompt #1
- [ ] Tester génération manuelle avec script exact
- [ ] Comparer qualité avatar FR vs EN
- [ ] Mesurer temps de génération
- [ ] Télécharger les vidéos générées
- [ ] Évaluer qualité lip-sync en français

---

## Résultats

| Test | Durée génération | Qualité /5 | Lip-sync /5 | Notes |
|------|------------------|------------|-------------|-------|
| Témoignage | | | | |
| Explication | | | | |
| Version homme | | | | |

---

## Fichiers générés

Sauvegarder dans : `~/CLAUDE_AA/Projects/cmm-branding-kit/video-ai-tests/outputs/heygen/`
