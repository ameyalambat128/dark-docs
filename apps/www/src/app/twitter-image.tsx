import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Dark Docs 2.0 - Transform Google Docs with Dark Mode";
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
          background: "linear-gradient(135deg, #111010 0%, #1a1a1a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          position: "relative",
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)
            `,
          }}
        />

        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          {/* Icon */}
          <div
            style={{
              width: "100px",
              height: "100px",
              background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "40px",
              fontSize: "40px",
              fontWeight: "bold",
              color: "white",
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
            }}
          >
            DD
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "white",
              margin: "0 0 32px 0",
              lineHeight: 1.1,
              maxWidth: "1000px",
            }}
          >
            Dark Docs 2.0
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "36px",
              color: "#9ca3af",
              margin: "0 0 40px 0",
              maxWidth: "900px",
              lineHeight: 1.3,
            }}
          >
            Transform Google Docs with Beautiful Dark Mode
          </p>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "40px",
              fontSize: "24px",
              color: "#d1d5db",
              marginBottom: "40px",
            }}
          >
            <span>⭐ 4.8★ Rating</span>
            <span>👥 1000+ Users</span>
            <span>🌐 All Browsers</span>
          </div>

          {/* CTA */}
          <div
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
              padding: "16px 32px",
              borderRadius: "12px",
              fontSize: "24px",
              fontWeight: "600",
              color: "white",
            }}
          >
            Get Free Extension
          </div>
        </div>

        {/* Bottom Info */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "40px",
            fontSize: "20px",
            color: "#6b7280",
          }}
        >
          @ameyalambat
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "40px",
            fontSize: "20px",
            color: "#6b7280",
          }}
        >
          darkdocs.ameyalambat.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
