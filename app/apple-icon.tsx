import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 180,
  height: 180
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#F4B942",
          borderRadius: "40px",
          color: "#12355B",
          display: "flex",
          fontSize: 96,
          fontWeight: 900,
          height: "180px",
          justifyContent: "center",
          width: "180px"
        }}
      >
        S
      </div>
    ),
    {
      ...size
    }
  );
}
