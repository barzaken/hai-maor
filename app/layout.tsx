import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://haimaor.co.il"),
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
    images: [
      {
        url: "/img/hai-maor-speaks.jpg",
        width: 1200,
        height: 630,
        alt: "חי מאור - במה עסקית",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "חי מאור - במה עסקית",
    description:
      "ליווי אישי וסדנאות לעמידה מול קהל ומצלמה, פרזנטציה עסקית והנעה לפעולה.",
    images: ["/img/hai-maor-speaks.jpg"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "חי מאור - במה עסקית",
  "image": "https://haimaor.co.il/img/hai-maor-speaks.jpg",
  "@id": "https://haimaor.co.il",
  "url": "https://haimaor.co.il",
  "telephone": "+972-50-0000000",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Israel",
    "addressCountry": "IL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 32.0853,
    "longitude": 34.7818
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Sunday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/haimaor",
    "https://www.linkedin.com/in/haimaor"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="dark">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
