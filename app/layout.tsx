import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-headline",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-label",
});

export const metadata: Metadata = {
  title: "Abeseg | Portfolio",
  description:
    "Web developer based in Sri Lanka — projects, skills and contact",
  keywords: ["Abeseg", "portfolio", "web developer", "frontend", "Sri Lanka"],
  authors: [{ name: "Abeseg" }],
  metadataBase: new URL("https://abeseg.me"),

  // Open Graph — shows preview on Google, LinkedIn, WhatsApp
  openGraph: {
    title: "Abeseg | Portfolio",
    description: "Web developer based in Sri Lanka",
    url: "https://abeseg.me",
    siteName: "Abeseg Portfolio",
    images: [
      {
        url: "/preview.png", // add a 1200x630px screenshot of your site
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  // Twitter/X card
  twitter: {
    card: "summary_large_image",
    title: "Abeseg | Portfolio",
    description: "Web developer based in Sri Lanka",
    images: ["/preview.png"],
  },

  // Google verification
  verification: {
    google: "ZMXc8nWdgSPKJQzpNOzC5KK_XxTT93Zansl...",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} ${inter.variable} ${geistMono.variable} bg-background text-on-background`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
