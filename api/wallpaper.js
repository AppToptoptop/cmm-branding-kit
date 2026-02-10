import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

const quotes = [
  { coach: "Coach Max", quote: ["Day 1. No excuses.", "Let's go."], color: "#F47D31" },
  { coach: "Zen", quote: ["Show up today.", "That's all."], color: "#b388ff" },
  { coach: "Mama Rosa", quote: ["I believe in you.", "Don't let me down."], color: "#ff6b9d" },
  { coach: "Dr. Luna", quote: ["Small wins", "compound."], color: "#00d4aa" },
  { coach: "Coach Max", quote: ["5 days in.", "Not quitting now."], color: "#F47D31" },
  { coach: "Zen", quote: ["Consistency", "is the strategy."], color: "#b388ff" },
  { coach: "Mama Rosa", quote: ["One week!", "I'm so proud."], color: "#ff6b9d" },
  { coach: "Dr. Luna", quote: ["Your habits are", "rewiring your brain."], color: "#00d4aa" },
  { coach: "Coach Max", quote: ["Push harder.", "You can take it."], color: "#F47D31" },
  { coach: "Zen", quote: ["10 days.", "You are the proof."], color: "#b388ff" },
  { coach: "Mama Rosa", quote: ["Keep going amore.", "Almost halfway."], color: "#ff6b9d" },
  { coach: "Dr. Luna", quote: ["Dopamine from", "discipline hits different."], color: "#00d4aa" },
  { coach: "Coach Max", quote: ["You're a machine.", "13 and counting."], color: "#F47D31" },
  { coach: "Zen", quote: ["Two weeks.", "This is who you are."], color: "#b388ff" },
  { coach: "Mama Rosa", quote: ["14 days!", "Mamma mia."], color: "#ff6b9d" },
  { coach: "Dr. Luna", quote: ["Neural pathways", "are forming."], color: "#00d4aa" },
  { coach: "Coach Max", quote: ["Week 3 unlocked.", "Beast mode."], color: "#F47D31" },
  { coach: "Zen", quote: ["The streak is you.", "You are the streak."], color: "#b388ff" },
  { coach: "Mama Rosa", quote: ["3 more days.", "Don't you dare stop."], color: "#ff6b9d" },
  { coach: "Dr. Luna", quote: ["20 days.", "95% don't make it here."], color: "#00d4aa" },
  { coach: "ALL COACHES", quote: ["DAY 21.", "YOU DID IT."], color: "#D4A853" }
];

const milestones = new Set([1, 3, 7, 10, 14, 21]);

function el(type, style, ...children) {
  return { type, props: { style: { display: 'flex', ...style }, children: children.length === 1 ? children[0] : children } };
}

export default function handler(req) {
  const url = new URL(req.url);
  let day = parseInt(url.searchParams.get('day') || '0');
  const start = url.searchParams.get('start');
  const device = url.searchParams.get('device') || '1170x2532';
  const [width, height] = (device.match(/^(\d+)x(\d+)$/) || [, '1170', '2532']).slice(1).map(Number);

  if (start && !day) {
    const diff = Math.floor((Date.now() - new Date(start + 'T00:00:00').getTime()) / 86400000) + 1;
    day = Math.max(1, ((diff - 1) % 21) + 1);
  }
  if (!day || day < 1) day = 1;
  if (day > 21) day = ((day - 1) % 21) + 1;

  const q = quotes[day - 1];
  const pct = Math.round((day / 21) * 100);
  const s = width / 1170;
  const fire = milestones.has(day);

  const kids = [
    // branding
    el('div', { marginTop: Math.round(height * 0.1), color: 'rgba(255,255,255,0.25)', fontSize: Math.round(28 * s) }, 'Call Me Maybe'),
    // DAY label
    el('div', { color: 'rgba(255,255,255,0.4)', fontSize: Math.round(36 * s), fontWeight: 700, letterSpacing: Math.round(12 * s), marginTop: Math.round(height * 0.06) }, 'D A Y'),
    // number
    el('div', { color: q.color, fontSize: Math.round(220 * s), fontWeight: 900, lineHeight: 1, marginTop: Math.round(15 * s) }, String(day).padStart(2, '0')),
    // progress bar
    el('div', { width: Math.round(width * 0.6), height: Math.round(Math.max(4, 8 * s)), background: 'rgba(255,255,255,0.08)', borderRadius: 4, marginTop: Math.round(25 * s), overflow: 'hidden' },
      el('div', { width: `${pct}%`, height: '100%', background: q.color, borderRadius: 4 })
    ),
    // progress text
    el('div', { color: 'rgba(255,255,255,0.3)', fontSize: Math.round(22 * s), fontWeight: 600, marginTop: Math.round(12 * s) }, `${day} / 21`),
  ];

  // milestone marker (text instead of emoji)
  if (fire) {
    kids.push(el('div', { color: q.color, fontSize: Math.round(40 * s), marginTop: Math.round(15 * s) }, 'MILESTONE'));
  }

  // quote lines
  kids.push(el('div', { color: 'rgba(255,255,255,0.85)', fontSize: Math.round(48 * s), fontWeight: 700, marginTop: Math.round(fire ? 25 * s : 55 * s), textAlign: 'center' }, q.quote[0]));
  if (q.quote[1]) {
    kids.push(el('div', { color: 'rgba(255,255,255,0.85)', fontSize: Math.round(48 * s), fontWeight: 700, marginTop: Math.round(8 * s), textAlign: 'center' }, q.quote[1]));
  }

  // coach
  kids.push(el('div', { color: q.color, fontSize: Math.round(26 * s), fontWeight: 600, marginTop: Math.round(25 * s) }, `— ${q.coach}`));

  // hashtag (no position absolute - just push to bottom with marginTop auto)
  kids.push(el('div', { marginTop: 'auto', marginBottom: Math.round(height * 0.08), color: 'rgba(255,255,255,0.12)', fontSize: Math.round(20 * s), fontWeight: 600 }, '#CallMeMaybe21'));

  const root = {
    type: 'div',
    props: {
      style: {
        width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        background: 'linear-gradient(180deg, #0a0b0e 0%, #0f1118 40%, #0a0b0e 100%)',
      },
      children: kids,
    },
  };

  return new ImageResponse(root, {
    width,
    height,
    headers: { 'Cache-Control': 'public, max-age=86400, s-maxage=86400' },
  });
}
