const faviconSvg = `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="32" fill="#F4B942"/><text x="32" y="41" text-anchor="middle" font-family="Arial, sans-serif" font-size="32" font-weight="900" fill="#12355B">S</text></svg>`;

export function GET() {
  return new Response(faviconSvg, {
    headers: {
      "Cache-Control": "public, max-age=0, must-revalidate",
      "Content-Type": "image/svg+xml"
    }
  });
}
