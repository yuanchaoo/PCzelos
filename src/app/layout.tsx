import "./globals.css";
import type { Metadata } from "next";
import { Afacad, Inter, Manrope, Space_Grotesk } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space"
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const afacad = Afacad({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-afacad"
});

export const metadata: Metadata = {
  title: "ZelosTech | Autonomous Logistics",
  description: "A global leader in autonomous driving technology."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="zh-CN"
      className={`${manrope.variable} ${spaceGrotesk.variable} ${inter.variable} ${afacad.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
