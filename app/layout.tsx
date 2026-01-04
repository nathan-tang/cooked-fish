import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "cooked.fish - Your Comprehensive Guide to Cooked Fish Recipes",
    template: "%s | cooked.fish",
  },
  description:
    "The future of fish recipes online. Find recipes for any fish - from salmon to sardines, barramundi to branzino. Search by fish type, cooking method, or cuisine.",
  keywords: [
    "fish recipes",
    "cooked fish",
    "seafood recipes",
    "salmon recipes",
    "tuna recipes",
    "grilled fish",
    "baked fish",
    "fish cooking",
  ],
  authors: [{ name: "cooked.fish" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cooked.fish",
    siteName: "cooked.fish",
    title: "cooked.fish - Your Comprehensive Guide to Cooked Fish Recipes",
    description:
      "The future of fish recipes online. Find recipes for any fish - from salmon to sardines, barramundi to branzino.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "cooked.fish",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "cooked.fish - Your Comprehensive Guide to Cooked Fish Recipes",
    description:
      "The future of fish recipes online. Find recipes for any fish.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
