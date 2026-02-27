import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "חי מאור - במה עסקית",
    template: "%s | חי מאור - במה עסקית",
  },
  description:
    "במה עסקית עם חי מאור: ליווי אישי וסדנאות למנהלים, יזמים וצוותים לעמידה מול קהל ומצלמה, פרזנטציה עסקית מדויקת, סטוריטלינג והשפעה שמניעה לפעולה.",
  applicationName: "חי מאור - במה עסקית",
  keywords: [
    "חי מאור",
    "במה עסקית",
    "עמידה מול קהל",
    "עמידה מול מצלמה",
    "פרזנטציה עסקית",
    "סטוריטלינג עסקי",
    "ליווי למנהלים",
    "סדנאות לארגונים",
  ],
  openGraph: {
    title: "חי מאור - במה עסקית",
    description:
      "ליווי אישי וסדנאות למנהלים, יזמים וצוותים לעמידה מול קהל ומצלמה, חיזוק נוכחות, ביטחון והשפעה בהופעה עסקית.",
    locale: "he_IL",
    type: "website",
    siteName: "חי מאור - במה עסקית",
  },
  twitter: {
    card: "summary_large_image",
    title: "חי מאור - במה עסקית",
    description:
      "ליווי אישי וסדנאות לעמידה מול קהל ומצלמה, פרזנטציה עסקית והנעה לפעולה.",
  },
  category: "business",
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    title: "חי מאור - במה עסקית",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon1.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
