import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

const quotes = [
  { coach: "Coach Max", quote: ["Day 1. No excuses.", "Let's go."], color: "#F47D31" },
  { coach: "Zen", quote: ["Show up today.", "That's all."], color: "#b388ff" },
  { coach: "Mama Rosa", quote: ["I believe in you.", "Don't let me down."], color: "#ff6b9d" },
  { coach: "Dr. Luna", quote: ["Small wins", "compound."], color: "#00d4aa" },
  { coach: "Coach Max", quote: ["5 days in.", "You're not quitting now."], color: "#F47D31" },
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

const bottomTexts = [
  "Your lockscreen is your commitment.",
  "Every unlock is a reminder.",
  "This wallpaper = your streak.",
  "You chose this. Own it.",
  "The screen changes. So do you.",
  "Unlock your phone. Unlock your potential.",
  "Day by day, wallpaper by wallpaper."
];

// satori element helper (no JSX needed)
function h(type, style, ...children) {
  const flat = children.length === 1 ? children[0] : children;
  return { type, props: { style: { display: 'flex', ...style }, children: flat } };
}

export default async function handler(req) {
  const url = new URL(req.url);
  let day = parseInt(url.searchParams.get('day') || '0');
  const start = url.searchParams.get('start');
  const device = url.searchParams.get('device') || '1320x2868';
  const parts = device.split('x').map(Number);
  const width = parts[0] || 1320;
  const height = parts[1] || 2868;

  if (start && !day) {
    const startDate = new Date(start + 'T00:00:00');
    const now = new Date();
    const diff = Math.floor((now.getTime() - startDate.getTime()) / 86400000) + 1;
    day = Math.max(1, ((diff - 1) % 21) + 1);
  }
  if (!day || day < 1) day = 1;
  if (day > 21) day = ((day - 1) % 21) + 1;

  const q = quotes[day - 1];
  const progress = Math.round((day / 21) * 100);
  const s = width / 1170;
  const isMilestone = milestones.has(day);

  const fontData = await fetch(
    'https://github.com/google/fonts/raw/main/ofl/sora/Sora%5Bwght%5D.ttf'
  ).then(r => r.arrayBuffer());

  const quoteLines = q.quote;
  const childElements = [];

  // branding
  childElements.push(
    h('div', {
      marginTop: Math.round(height * 0.1),
      color: 'rgba(255,255,255,0.25)',
      fontSize: Math.round(28 * s),
      fontFamily: 'Sora',
    }, 'Call Me Maybe')
  );

  // DAY label
  childElements.push(
    h('div', {
      color: 'rgba(255,255,255,0.4)',
      fontSize: Math.round(36 * s),
      fontWeight: 700,
      letterSpacing: Math.round(12 * s),
      marginTop: Math.round(height * 0.06),
      fontFamily: 'Sora',
    }, 'D A Y')
  );

  // day number
  childElements.push(
    h('div', {
      color: q.color,
      fontSize: Math.round(220 * s),
      fontWeight: 900,
      lineHeight: 1,
      marginTop: Math.round(15 * s),
      fontFamily: 'Sora',
    }, String(day).padStart(2, '0'))
  );

  // progress bar
  childElements.push(
    h('div', {
      width: Math.round(width * 0.6),
      height: Math.round(8 * s),
      background: 'rgba(255,255,255,0.08)',
      borderRadius: Math.round(4 * s),
      marginTop: Math.round(25 * s),
      overflow: 'hidden',
    },
      h('div', {
        width: `${progress}%`,
        height: '100%',
        background: q.color,
        borderRadius: Math.round(4 * s),
      })
    )
  );

  // progress label
  childElements.push(
    h('div', {
      color: 'rgba(255,255,255,0.3)',
      fontSize: Math.round(22 * s),
      fontWeight: 600,
      marginTop: Math.round(12 * s),
      fontFamily: 'Sora',
    }, `${day} / 21`)
  );

  // fire emoji for milestones
  if (isMilestone) {
    childElements.push(
      h('div', {
        fontSize: Math.round(50 * s),
        marginTop: Math.round(15 * s),
      }, '\u{1F525}')
    );
  }

  // quote line 1
  childElements.push(
    h('div', {
      color: 'rgba(255,255,255,0.85)',
      fontSize: Math.round(48 * s),
      fontWeight: 700,
      textAlign: 'center',
      marginTop: Math.round(isMilestone ? 25 * s : 55 * s),
      fontFamily: 'Sora',
    }, quoteLines[0])
  );

  // quote line 2
  if (quoteLines[1]) {
    childElements.push(
      h('div', {
        color: 'rgba(255,255,255,0.85)',
        fontSize: Math.round(48 * s),
        fontWeight: 700,
        textAlign: 'center',
        marginTop: Math.round(8 * s),
        fontFamily: 'Sora',
      }, quoteLines[1])
    );
  }

  // coach name
  childElements.push(
    h('div', {
      color: q.color,
      opacity: 0.7,
      fontSize: Math.round(26 * s),
      fontWeight: 600,
      marginTop: Math.round(25 * s),
      fontFamily: 'Sora',
    }, `\u2014 ${q.coach}`)
  );

  // bottom motivation (absolute)
  childElements.push(
    h('div', {
      position: 'absolute',
      bottom: Math.round(height * 0.14),
      color: 'rgba(255,255,255,0.2)',
      fontSize: Math.round(22 * s),
      fontFamily: 'Sora',
    }, bottomTexts[day % bottomTexts.length])
  );

  // hashtag (absolute)
  childElements.push(
    h('div', {
      position: 'absolute',
      bottom: Math.round(height * 0.08),
      color: 'rgba(255,255,255,0.12)',
      fontSize: Math.round(20 * s),
      fontWeight: 600,
      fontFamily: 'Sora',
    }, '#CallMeMaybe21')
  );

  const element = {
    type: 'div',
    props: {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'linear-gradient(180deg, #0a0b0e 0%, #0f1118 40%, #0a0b0e 100%)',
        fontFamily: 'Sora',
        position: 'relative',
      },
      children: childElements,
    },
  };

  return new ImageResponse(element, {
    width,
    height,
    fonts: [
      { name: 'Sora', data: fontData, style: 'normal', weight: 400 },
      { name: 'Sora', data: fontData, style: 'normal', weight: 700 },
      { name: 'Sora', data: fontData, style: 'normal', weight: 900 },
    ],
    headers: {
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
