import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

const quotes = [
  { coach: "Coach Max", quote: "Day 1. No excuses.\nLet's go.", color: "#F47D31" },
  { coach: "Zen", quote: "Show up today.\nThat's all.", color: "#b388ff" },
  { coach: "Mama Rosa", quote: "I believe in you.\nDon't let me down.", color: "#ff6b9d" },
  { coach: "Dr. Luna", quote: "Small wins\ncompound.", color: "#00d4aa" },
  { coach: "Coach Max", quote: "5 days in.\nYou're not quitting now.", color: "#F47D31" },
  { coach: "Zen", quote: "Consistency\nis the strategy.", color: "#b388ff" },
  { coach: "Mama Rosa", quote: "One week!\nI'm so proud.", color: "#ff6b9d" },
  { coach: "Dr. Luna", quote: "Your habits are\nrewiring your brain.", color: "#00d4aa" },
  { coach: "Coach Max", quote: "Push harder.\nYou can take it.", color: "#F47D31" },
  { coach: "Zen", quote: "10 days.\nYou are the proof.", color: "#b388ff" },
  { coach: "Mama Rosa", quote: "Keep going amore.\nAlmost halfway.", color: "#ff6b9d" },
  { coach: "Dr. Luna", quote: "Dopamine from\ndiscipline hits different.", color: "#00d4aa" },
  { coach: "Coach Max", quote: "You're a machine.\n13 and counting.", color: "#F47D31" },
  { coach: "Zen", quote: "Two weeks.\nThis is who you are.", color: "#b388ff" },
  { coach: "Mama Rosa", quote: "14 days!\nMamma mia.", color: "#ff6b9d" },
  { coach: "Dr. Luna", quote: "Neural pathways\nare forming.", color: "#00d4aa" },
  { coach: "Coach Max", quote: "Week 3 unlocked.\nBeast mode.", color: "#F47D31" },
  { coach: "Zen", quote: "The streak is you.\nYou are the streak.", color: "#b388ff" },
  { coach: "Mama Rosa", quote: "3 more days.\nDon't you dare stop.", color: "#ff6b9d" },
  { coach: "Dr. Luna", quote: "20 days.\n95% don't make it here.", color: "#00d4aa" },
  { coach: "ALL COACHES", quote: "DAY 21.\nYOU DID IT.", color: "#D4A853" }
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

export default async function handler(req) {
  const url = new URL(req.url);
  let day = parseInt(url.searchParams.get('day') || '0');
  const start = url.searchParams.get('start');
  const device = url.searchParams.get('device') || '1320x2868';
  const parts = device.split('x').map(Number);
  const width = parts[0] || 1320;
  const height = parts[1] || 2868;

  // auto-calculate day from start date
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

  // fetch Sora variable font from Google Fonts repo
  const fontData = await fetch(
    'https://github.com/google/fonts/raw/main/ofl/sora/Sora%5Bwght%5D.ttf'
  ).then(r => r.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'linear-gradient(180deg, #0a0b0e 0%, #0f1118 40%, #0a0b0e 100%)',
          fontFamily: 'Sora',
          position: 'relative',
        }}
      >
        {/* branding */}
        <div
          style={{
            marginTop: Math.round(height * 0.1),
            color: 'rgba(255,255,255,0.25)',
            fontSize: Math.round(28 * s),
            display: 'flex',
          }}
        >
          Call Me Maybe
        </div>

        {/* DAY label */}
        <div
          style={{
            color: 'rgba(255,255,255,0.4)',
            fontSize: Math.round(36 * s),
            fontWeight: 700,
            letterSpacing: Math.round(12 * s),
            marginTop: Math.round(height * 0.06),
            display: 'flex',
          }}
        >
          D A Y
        </div>

        {/* day number */}
        <div
          style={{
            color: q.color,
            fontSize: Math.round(220 * s),
            fontWeight: 900,
            lineHeight: 1,
            marginTop: Math.round(15 * s),
            display: 'flex',
          }}
        >
          {String(day).padStart(2, '0')}
        </div>

        {/* progress bar */}
        <div
          style={{
            display: 'flex',
            width: Math.round(width * 0.6),
            height: Math.round(8 * s),
            background: 'rgba(255,255,255,0.08)',
            borderRadius: Math.round(4 * s),
            marginTop: Math.round(25 * s),
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              background: q.color,
              borderRadius: Math.round(4 * s),
              display: 'flex',
            }}
          />
        </div>

        {/* progress label */}
        <div
          style={{
            color: 'rgba(255,255,255,0.3)',
            fontSize: Math.round(22 * s),
            fontWeight: 600,
            marginTop: Math.round(12 * s),
            display: 'flex',
          }}
        >
          {day} / 21
        </div>

        {/* fire for milestones */}
        {isMilestone && (
          <div
            style={{
              fontSize: Math.round(50 * s),
              marginTop: Math.round(15 * s),
              display: 'flex',
            }}
          >
            🔥
          </div>
        )}

        {/* quote line 1 */}
        <div
          style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: Math.round(48 * s),
            fontWeight: 700,
            textAlign: 'center',
            marginTop: Math.round(isMilestone ? 25 * s : 55 * s),
            display: 'flex',
          }}
        >
          {q.quote.split('\n')[0]}
        </div>

        {/* quote line 2 */}
        {q.quote.split('\n')[1] && (
          <div
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: Math.round(48 * s),
              fontWeight: 700,
              textAlign: 'center',
              marginTop: Math.round(8 * s),
              display: 'flex',
            }}
          >
            {q.quote.split('\n')[1]}
          </div>
        )}

        {/* coach name */}
        <div
          style={{
            color: q.color,
            opacity: 0.7,
            fontSize: Math.round(26 * s),
            fontWeight: 600,
            marginTop: Math.round(25 * s),
            display: 'flex',
          }}
        >
          — {q.coach}
        </div>

        {/* bottom motivation */}
        <div
          style={{
            position: 'absolute',
            bottom: Math.round(height * 0.14),
            color: 'rgba(255,255,255,0.2)',
            fontSize: Math.round(22 * s),
            display: 'flex',
          }}
        >
          {bottomTexts[day % bottomTexts.length]}
        </div>

        {/* hashtag */}
        <div
          style={{
            position: 'absolute',
            bottom: Math.round(height * 0.08),
            color: 'rgba(255,255,255,0.12)',
            fontSize: Math.round(20 * s),
            fontWeight: 600,
            display: 'flex',
          }}
        >
          #CallMeMaybe21
        </div>
      </div>
    ),
    {
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
    }
  );
}
