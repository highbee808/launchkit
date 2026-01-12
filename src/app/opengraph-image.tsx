import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "LaunchKit - Legal docs that don't kill the vibe";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#121212",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(29, 185, 84, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(29, 185, 84, 0.1) 0%, transparent 50%)",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 16,
              backgroundColor: "#1DB954",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 20,
            }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
          </div>
          <span
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            LaunchKit
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "white",
              marginBottom: 8,
            }}
          >
            Legal docs that don&apos;t
          </span>
          <span
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#1DB954",
            }}
          >
            kill the vibe.
          </span>
        </div>

        {/* Subtitle */}
        <span
          style={{
            fontSize: 24,
            color: "#a1a1aa",
            marginTop: 32,
          }}
        >
          Privacy policies, terms of service & more in seconds
        </span>

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginTop: 48,
            padding: "12px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: "#1DB954",
            }}
          />
          <span
            style={{
              fontSize: 18,
              color: "#a1a1aa",
            }}
          >
            Free to use • No signup required
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
