import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo";
import { HomepageStructuredData } from "@/components/StructuredData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;

export const metadata: Metadata = {
  title: seoConfig.defaultTitle,
  description: seoConfig.defaultDescription,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomepageStructuredData />
      {children}
    </>
  );
}
