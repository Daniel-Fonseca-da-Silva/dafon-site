import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

if (!siteUrl) {
  throw new Error('NEXT_PUBLIC_SITE_URL environment variable is required');
}
const siteName = "Dafon";
const defaultTitle = "Dafon - Innovative Solutions for Your Business";
const defaultDescription = "Dafon delivers cutting-edge solutions and exceptional service. Discover how we can transform your business with our innovative approach and expert team led by CEO Daniel Fonseca da Silva.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "Dafon",
    "business solutions",
    "innovation",
    "technology",
    "consulting",
    "Daniel Fonseca da Silva",
    "CEO",
    "São Paulo",
    "Canada",
    "Toronto",
    "Lisboa",
    "Portugal",
    "Brazil",
    "Chile",
    "Argentina",
    "software development",
    "SaaS",
    "API development",
    "Golang",
    "Next.js",
    "Java",
  ],
  authors: [{ name: "Dafon", url: siteUrl }],
  creator: "Dafon",
  publisher: "Dafon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: `${siteUrl}/company/daniel-fonseca-da-silva-ceo.jpg`,
        width: 1200,
        height: 630,
        alt: "Daniel Fonseca da Silva - CEO of Dafon",
      },
      {
        url: `${siteUrl}/logo-white.png`,
        width: 1200,
        height: 630,
        alt: "Dafon Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [`${siteUrl}/company/daniel-fonseca-da-silva-ceo.jpg`],
    creator: "@dafon",
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "any", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
