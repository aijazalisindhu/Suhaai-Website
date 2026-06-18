import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://suhaai.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Suhaai | Illuminating Futures. Empowering Girls.",
    template: "%s | Suhaai"
  },
  description:
    "Suhaai is a community-based educational initiative in Village 21 Dadh, Sakrand, Sindh providing free tuition, free transport, and learning support for village girls.",
  keywords: [
    "Suhaai",
    "girls education",
    "Village 21 Dadh",
    "Sakrand",
    "Sindh",
    "free tuition",
    "free transport"
  ],
  openGraph: {
    title: "Suhaai | Illuminating Futures. Empowering Girls.",
    description:
      "Free tuition, free transport, learning support, and opportunities for village girls in Village 21 Dadh, Sakrand.",
    url: siteUrl,
    siteName: "Suhaai",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Suhaai - Illuminating Futures. Empowering Girls."
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Suhaai | Illuminating Futures. Empowering Girls.",
    description:
      "Free tuition, free transport, learning support, and opportunities for village girls in Village 21 Dadh, Sakrand.",
    images: ["/og-image.png"]
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/images/logo.webp", type: "image/webp" }
    ],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
    apple: [
      { url: "/apple-icon.png", type: "image/png", sizes: "180x180" }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
