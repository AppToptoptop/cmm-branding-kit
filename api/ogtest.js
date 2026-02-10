import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

export default function handler() {
  return new ImageResponse(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          background: 'black',
          color: 'white',
          width: '100%',
          height: '100%',
          fontSize: 48,
          alignItems: 'center',
          justifyContent: 'center',
        },
        children: 'Hello CMM',
      },
    },
    { width: 400, height: 300 }
  );
}
