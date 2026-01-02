import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dafon.com";
const siteName = "Dafon";
const defaultTitle = "Dafon - Innovative Solutions for Your Business";
const defaultDescription =
  "Dafon delivers cutting-edge solutions and exceptional service. Discover how we can transform your business with our innovative approach and expert team led by CEO Daniel Fonseca da Silva.";

// Comprehensive keywords covering all aspects of the system
export const siteKeywords = [
  // Company & Brand
  "Dafon",
  "Dafon Sistemas",
  "Dafon Systems",
  "Dafon company",
  "Dafon business solutions",
  "Dafon innovative solutions",
  "Dafon technology solutions",
  "Dafon software solutions",
  "Dafon digital transformation",
  "Dafon business consulting",
  "Dafon IT consulting",
  "Dafon technology consulting",
  "Dafon strategic consulting",
  "Dafon innovation consulting",
  "Dafon enterprise solutions",
  "Dafon custom software development",
  "Dafon software development services",
  "Dafon web development",
  "Dafon application development",
  "Dafon mobile development",
  "Dafon API development",
  "Dafon SaaS development",
  "Dafon cloud solutions",
  "Dafon process optimization",
  "Dafon automation solutions",
  "Dafon digital solutions",
  "Dafon business transformation", 

  // Leadership
  "Daniel Fonseca da Silva",
  "Daniel Fonseca",
  "Daniel Fonseca da Silva CEO",
  "Daniel Fonseca da Silva Dafon CEO",
  "Daniel Fonseca da Silva Dafon",
  "Daniel Fonseca da Silva Dafon Systems",
  "Daniel Fonseca da Silva Dafon Sistemas",
  "Daniel Fonseca da Silva Dafon Business Solutions",
  "Daniel Fonseca da Silva Dafon Innovative Solutions",
  "Daniel Fonseca da Silva Dafon Technology Solutions",
  "Daniel Fonseca da Silva Dafon Software Solutions",
  "CEO Dafon",
  "Dafon CEO",

  // Services & Solutions
  "business solutions",
  "innovative solutions",
  "technology solutions",
  "software solutions",
  "digital transformation",
  "business consulting",
  "IT consulting",
  "technology consulting",
  "strategic consulting",
  "innovation consulting",
  "enterprise solutions",
  "custom software development",
  "software development services",
  "web development",
  "application development",
  "mobile development",
  "API development",
  "SaaS development",
  "cloud solutions",
  "digital solutions",
  "business transformation",
  "process optimization",
  "automation solutions",

  // Technologies & Stack
  "Golang",
  "Go programming",
  "Next.js",
  "Next.js development",
  "React",
  "React.js",
  "TypeScript",
  "JavaScript",
  "Java",
  "Python",
  "Python development",
  "API development",
  "REST API",
  "GraphQL",
  "microservices",
  "full stack development",
  "frontend development",
  "backend development",
  "full stack",
  "modern web development",

  // Products & Projects
  "Dafoncv",
  "Dafon CV",
  "AI CV creator",
  "AI resume builder",
  "CV creation platform",
  "resume builder",
  "PDF Extractor",
  "Dafon PDF Extractor",
  "PDF data extraction",
  "PDF processing API",
  "document processing",
  "data extraction",

  // Industries & Sectors
  "technology",
  "innovation",
  "software",
  "SaaS",
  "Software as a Service",
  "enterprise software",
  "business software",
  "tech solutions",
  "digital innovation",
  "tech consulting",

  // Locations - Cities
  "São Paulo",
  "Sao Paulo",
  "Toronto",
  "Lisboa",
  "Lisbon",
  "Asunción",

  // Locations - Countries
  "Brazil",
  "Brasil",
  "Canada",
  "Portugal",
  "Paraguay",

  // Locations - Regions
  "South America",
  "North America",
  "Europe",
  "Latin America",
  "Americas",

  // Business Terms
  "startup",
  "scale-up",
  "enterprise",
  "SMB",
  "small business",
  "medium business",
  "large enterprise",
  "B2B",
  "B2C",

  // Skills & Expertise
  "software engineering",
  "system architecture",
  "cloud architecture",
  "agile development",
  "scrum",
  "devops",
  "CI/CD",
  "quality assurance",
  "testing",
  "code review",
  "best practices",
  "clean code",
  "SOLID principles",

  // Market & Audience
  "European market",
  "Portuguese market",
  "Brazilian market",
  "Canadian market",
  "international business",
  "global presence",
  "multinational",
  "cross-border",

  // Additional Keywords
  "professional services",
  "expert team",
  "qualified professionals",
  "cutting-edge technology",
  "state-of-the-art",
  "modern technology",
  "latest technology",
  "innovation",
  "excellence",
  "quality",
  "reliability",
  "trust",
  "partnership",
  "collaboration",
  "client success",
  "customer satisfaction",
];

/**
 * Generate comprehensive metadata for the site
 * @param options - Optional metadata overrides
 * @returns Complete Metadata object
 */
export function generateMetadata(options?: {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
}): Metadata {
  const title = options?.title || defaultTitle;
  const description = options?.description || defaultDescription;
  const keywords = options?.keywords
    ? [...siteKeywords, ...options.keywords]
    : siteKeywords;
  const image = options?.image || `${siteUrl}/company/daniel-fonseca-da-silva-ceo.jpg`;
  const url = options?.url || siteUrl;
  const type = options?.type || "website";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: `%s | ${siteName}`,
    },
    description,
    keywords: keywords.join(", "),
    authors: [{ name: siteName, url: siteUrl }],
    creator: siteName,
    publisher: siteName,
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
      type,
      locale: "en_GB",
      url,
      siteName,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteName} - ${title}`,
        },
        {
          url: `${siteUrl}/logo-white.png`,
          width: 1200,
          height: 630,
          alt: `${siteName} Logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@dafon",
      site: "@dafon",
    },
    alternates: {
      canonical: url,
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
    other: {
      "theme-color": "#a855f7",
      "color-scheme": "dark",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "black-translucent",
      "format-detection": "telephone=no",
    },
  };
}

/**
 * Get default site metadata
 */
export const defaultMetadata = generateMetadata();

