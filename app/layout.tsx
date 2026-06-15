import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "STILL — Humans Between Frames",
  description:
    "In a world optimized for speed and endless scrolling, STILL invites people to pause. A reflective editorial experience about observing people more intentionally.",
  keywords: ["photography", "storytelling", "reflection", "editorial", "human observation"],
  openGraph: {
    title: "STILL — Humans Between Frames",
    description: "We scroll past people every day. This space asks you to pause.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
