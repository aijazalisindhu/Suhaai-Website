import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 32,
  height: 32
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#F4B942",
          borderRadius: "999px",
          color: "#12355B",
          display: "flex",
          fontSize: 19,
          fontWeight: 900,
          height: "32px",
          justifyContent: "center",
          width: "32px"
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
