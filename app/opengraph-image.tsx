import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Dafon AI Software Development & Website Creation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function HomepageOGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "linear-gradient(135deg, #0d0b1a 0%, #1a0f2e 50%, #0f1626 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Purple accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #9333ea, #a855f7, #9333ea)",
          }}
        />

        {/* Brand name */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          DAFON
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.15,
            marginBottom: 28,
            maxWidth: 900,
          }}
        >
          AI Software Development &{" "}
          <span style={{ color: "#a855f7" }}>Website Creation</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            color: "rgba(255,255,255,0.65)",
            maxWidth: 820,
            lineHeight: 1.5,
          }}
        >
          From idea to production — web apps, SaaS platforms, and enterprise systems.
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            left: 80,
            fontSize: 20,
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.05em",
          }}
        >
          dafon.online
        </div>
      </div>
    ),
    { ...size }
  );
}
