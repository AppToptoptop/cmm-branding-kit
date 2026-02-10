import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

function el(type, style, ...children) {
  return { type, props: { style: { display: 'flex', ...style }, children: children.length === 1 ? children[0] : children } };
}

export default function handler() {
  const kids = [
    el('div', { color: 'rgba(255,255,255,0.4)', fontSize: 24, fontWeight: 700, marginTop: 30 }, 'D A Y'),
    el('div', { color: '#F47D31', fontSize: 120, fontWeight: 900, lineHeight: 1, marginTop: 10 }, '01'),
    el('div', { color: 'rgba(255,255,255,0.85)', fontSize: 32, fontWeight: 700, marginTop: 40 }, "Day 1. No excuses."),
    el('div', { color: '#F47D31', opacity: 0.7, fontSize: 18, fontWeight: 600, marginTop: 15 }, '— Coach Max'),
  ];

  const root = {
    type: 'div',
    props: {
      style: {
        width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        background: 'linear-gradient(180deg, #0a0b0e 0%, #0f1118 40%, #0a0b0e 100%)',
        position: 'relative',
      },
      children: kids,
    },
  };

  return new ImageResponse(root, { width: 400, height: 800 });
}
