import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Pentapalli Harishik · Software Engineer";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#020617",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#34d399" }}>
          harishik@portfolio:~$ whoami
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: "-2px",
          }}
        >
          Pentapalli Harishik
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 40,
            color: "#94a3b8",
          }}
        >
          Software engineer · I build and ship complete products.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 56,
            alignItems: "center",
            gap: 16,
            fontSize: 30,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 18,
              height: 18,
              borderRadius: 9,
              backgroundColor: "#34d399",
            }}
          />
          <div style={{ display: "flex", color: "#e2e8f0" }}>harishik.com</div>
        </div>
      </div>
    ),
    size
  );
}
