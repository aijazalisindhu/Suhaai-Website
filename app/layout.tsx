import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
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
    type: "website"
  },
  icons: {
    icon: "/favicon.ico",
    apple: [
      { url: "/images/logo.png", type: "image/png" },
      { url: "/images/Logo.png", type: "image/png" },
      { url: "/apple-icon", type: "image/png" }
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
