import { ImageResponse } from 'next/og'

export const size = {
  width: 512,
  height: 512,
}
export const contentType = 'image/png'

export default function Icon() {
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
          borderRadius: 96,
        }}
      >
        <span
          style={{
            fontSize: 280,
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
            color: '#22c55e',
            marginTop: -20,
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
