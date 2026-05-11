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
  title: "Ramanidas Abeseg | Portfolio",
  description:
    "Undergraduate software engineer passionate about AI and web development.",
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
