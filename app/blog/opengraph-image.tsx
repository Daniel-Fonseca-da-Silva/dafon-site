import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Dafon Project Stories";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function BlogIndexOGImage() {
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

        {/* Brand */}
        <div
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          Dafon · Blog
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: 28,
          }}
        >
          Project{" "}
          <span style={{ color: "#a855f7" }}>Stories</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 26,
            color: "rgba(255,255,255,0.6)",
            maxWidth: 780,
            lineHeight: 1.5,
          }}
        >
          Behind the scenes of building DafonCV and TechCuisine.
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            left: 80,
            fontSize: 20,
            color: "rgba(255,255,255,0.3)",
          }}
        >
          dafon.online/blog
        </div>
      </div>
    ),
    { ...size }
  );
}
