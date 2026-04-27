import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const siteBase =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.haimaor.co.il";
const defaultOgImage =
  "https://www.haimaor.co.il/img/hai-maor-speaks-2.jpeg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteBase),
  title: {
    default: "חי מאור – במה עסקית | ליווי וסדנאות לעמידה מול קהל ומצלמה",
    template: "%s | חי מאור – במה עסקית",
  },
  description:
    "חי מאור – במה עסקית: ליווי אישי וסדנאות למנהלים, יזמים וצוותים לעמידה מול קהל ומצלמה, פרזנטציה עסקית מדויקת, סטוריטלינג והשפעה שמניעה לפעולה.",
  applicationName: "חי מאור – במה עסקית",
  keywords: [
    "חי מאור",
    "חי מאור במה עסקית",
    "במה עסקית",
    "חי מאור- במה עסקית",
    "עמידה מול קהל",
    "עמידה מול מצלמה",
    "פרזנטציה עסקית",
    "סטוריטלינג עסקי",
    "ליווי למנהלים",
    "סדנאות לארגונים",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "חי מאור – במה עסקית | ליווי וסדנאות לעמידה מול קהל",
    description:
      "חי מאור – במה עסקית: ליווי אישי וסדנאות למנהלים, יזמים וצוותים לעמידה מול קהל ומצלמה, חיזוק נוכחות, ביטחון והשפעה בהופעה עסקית.",
    locale: "he_IL",
    type: "website",
    siteName: "חי מאור – במה עסקית",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "חי מאור – במה עסקית, מומחה לעמידה מול קהל ופרזנטציה עסקית",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "חי מאור – במה עסקית",
    description:
      "חי מאור – במה עסקית: ליווי וסדנאות לעמידה מול קהל ומצלמה, פרזנטציה עסקית והנעה לפעולה.",
    images: [defaultOgImage],
  },
  category: "business",
  manifest: "/manifest.json",
  appleWebApp: {
    title: "חי מאור – במה עסקית",
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
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteBase}/#website`,
      url: siteBase,
      name: "חי מאור – במה עסקית",
      alternateName: ["חי מאור", "במה עסקית", "חי מאור במה עסקית"],
      inLanguage: "he-IL",
      publisher: { "@id": `${siteBase}/#business` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteBase}/#business`,
      name: "חי מאור – במה עסקית",
      alternateName: ["חי מאור", "במה עסקית"],
      image: `${siteBase}/img/hai-maor-speaks-2.jpeg`,
      url: siteBase,
      description:
        "ליווי אישי וסדנאות למנהלים, יזמים וצוותים לעמידה מול קהל ומצלמה, פרזנטציה עסקית וסטוריטלינג.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IL",
      },
      areaServed: { "@type": "Country", name: "Israel" },
      sameAs: [
        "https://www.youtube.com/channel/UCR9XY7Lzx3xfzoNJpNcRdQQ",
        "https://www.facebook.com/hai.maor/",
        "https://www.instagram.com/hai_maor/",
      ],
    },
    {
      "@type": "Person",
      "@id": `${siteBase}/#person`,
      name: "חי מאור",
      url: siteBase,
      image: `${siteBase}/img/hero-nobg.png`,
      jobTitle: "מאמן ומלווה לעמידה מול קהל ופרזנטציה עסקית",
      worksFor: { "@id": `${siteBase}/#business` },
      sameAs: [
        "https://www.youtube.com/channel/UCR9XY7Lzx3xfzoNJpNcRdQQ",
        "https://www.facebook.com/hai.maor/",
        "https://www.instagram.com/hai_maor/",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="dark scroll-smooth">
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
        <Analytics />
      </body>
    </html>
  );
}
