import LenisProvider from "@/components/LenisProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "@/components/Siteheader";
import SiteFooter from "@/components/Sitefooter";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Canonical base URL. Keep in sync with app/sitemap.ts and app/robots.ts.
// Override per-environment with NEXT_PUBLIC_SITE_URL.
const BASE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.arcadelx.com"
).replace(/\/$/, "");

const SITE_DESCRIPTION =
  "ArcadeLX is a next-generation motion-sensing gaming kiosk that brings immersive, full-body gaming to malls, offices, schools and public spaces.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "ARCADELX — Limitless Gaming Xperience",
    template: "%s · ARCADELX",
  },
  description: SITE_DESCRIPTION,
  applicationName: "ARCADELX",
  keywords: [
    "ArcadeLX",
    "motion sensing gaming",
    "gaming kiosk",
    "arcade machine",
    "full-body gaming",
    "interactive arcade",
    "active gaming",
    "mall entertainment",
  ],
  authors: [{ name: "ARCADELX" }],
  creator: "ARCADELX",
  publisher: "ARCADELX",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "ARCADELX",
    title: "ARCADELX — Limitless Gaming Xperience",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/limitless-gaming-updated.png",
        width: 1672,
        height: 941,
        alt: "ARCADELX — Limitless Gaming Xperience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARCADELX — Limitless Gaming Xperience",
    description: SITE_DESCRIPTION,
    images: ["/limitless-gaming-updated.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/Final_Logo_Symbol_2048x2048.png",
        type: "image/png",
        sizes: "2048x2048",
      },
    ],
    apple: "/Final_Logo_Symbol_2048x2048.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <LenisProvider />

        <main className="flex-1">
          {children}
        </main>

        <SiteFooter/>
      </body>
    </html>
  );
}






