import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1a1a1a 0%, #121212 100%)',
          borderRadius: 32,
        }}
      >
        <span
          style={{
            fontSize: 100,
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
            color: '#22c55e',
            marginTop: -8,
          }}
        >
          L
        </span>
      </div>
    ),
    {
      ...size,
    }
  )
}
