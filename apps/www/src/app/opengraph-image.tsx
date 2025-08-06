import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Dark Docs 2.0 - The Dark Theme Google Forgot";
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
        {/* Background Grid Pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            opacity: 0.3,
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
          {/* Logo/Icon */}
          <div
            style={{
              width: "80px",
              height: "80px",
              background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "32px",
              fontSize: "32px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            DD
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              color: "white",
              margin: "0 0 24px 0",
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            Dark Docs 2.0
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "32px",
              color: "#9ca3af",
              margin: "0 0 32px 0",
              maxWidth: "800px",
              lineHeight: 1.3,
            }}
          >
            The Dark Theme Google Forgot
          </p>

          {/* Features */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              fontSize: "20px",
              color: "#d1d5db",
            }}
          >
            <span>🌙 Dark Mode</span>
            <span>👁️ Eye Strain Relief</span>
            <span>⚡ Free Extension</span>
          </div>
        </div>

        {/* Bottom Branding */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "40px",
            fontSize: "24px",
            color: "#6b7280",
            fontWeight: "500",
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
