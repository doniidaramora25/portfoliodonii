import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Doni Daramora — Portfolio",
  description:
    "Personal portfolio of Doni Daramora — Industrial Engineering student, creative problem solver, and technology enthusiast.",
  keywords: ["Doni Daramora", "Portfolio", "Industrial Engineering", "Creative Developer"],
  openGraph: {
    title: "Doni Daramora — Portfolio",
    description: "Ideas into impact. A personal portfolio by Doni Daramora.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${inter.variable} ${space.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
