import ogImage from "../../public/og.png";

export const runtime = "edge";

export const alt = "Dark Docs 2.0 - The Dark Theme Google Forgot";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return ogImage;
}
