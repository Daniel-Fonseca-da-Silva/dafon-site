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
  title: "Dafon - Innovative Solutions for Your Business",
  description: "Dafon delivers cutting-edge solutions and exceptional service. Discover how we can transform your business with our innovative approach and expert team led by CEO Daniel Fonseca da Silva.",
  keywords: ["Dafon", "business solutions", "innovation", "technology", "consulting", "Daniel Fonseca da Silva", "CEO", "São Paulo", "Buenos Aires", "Santiago", "Lisboa"],
  authors: [{ name: "Dafon" }],
  creator: "Dafon",
  publisher: "Dafon",
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
    title: "Dafon - Innovative Solutions for Your Business",
    description: "Dafon delivers cutting-edge solutions and exceptional service. Discover how we can transform your business with our innovative approach and expert team.",
    type: "website",
    locale: "en_GB",
    siteName: "Dafon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dafon - Innovative Solutions for Your Business",
    description: "Dafon delivers cutting-edge solutions and exceptional service.",
  },
  alternates: {
    canonical: "/",
  },
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
        {children}
      </body>
    </html>
  );
}
