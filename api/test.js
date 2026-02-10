export const config = { runtime: 'edge' };

export default function handler() {
  return new Response('Edge function works!', {
    headers: { 'Content-Type': 'text/plain' },
  });
}
