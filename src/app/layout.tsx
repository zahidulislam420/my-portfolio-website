import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { profile, socials } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Base URL for absolute Open Graph / metadata links.
 * Set NEXT_PUBLIC_SITE_URL to the production domain before deploying
 * (for example https://your-domain.vercel.app) — it falls back to the
 * local dev server so nothing breaks while developing.
 */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const siteDescription =
  "Portfolio of MD Zahidul Islam, Full Stack Developer in Dhaka, Bangladesh — building modern, responsive and user-friendly web applications with React, Next.js, TypeScript and Tailwind CSS.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.fullName} — ${profile.designation}`,
    template: `%s | ${profile.fullName}`,
  },
  description: siteDescription,
  keywords: [
    profile.fullName,
    profile.designation,
    "Full Stack Developer",
    "Dhaka",
    "Bangladesh",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: profile.fullName, url: socials.github }],
  creator: profile.fullName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: `${profile.fullName} — ${profile.designation}`,
    title: `${profile.fullName} — ${profile.designation}`,
    description: siteDescription,
    images: [
      {
        url: profile.photo.src,
        width: 800,
        height: 800,
        alt: profile.photo.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.fullName} — ${profile.designation}`,
    description: siteDescription,
    images: [profile.photo.src],
    creator: "@ZahidulIsl19509",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:border focus:border-accent focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:text-txt"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
