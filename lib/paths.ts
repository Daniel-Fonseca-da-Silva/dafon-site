/**
 * Paths configuration for the Dafon website
 * Centralized management of all routes and paths
 */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dafon.com";

export interface SitePath {
  path: string;
  url: string;
  title: string;
  description?: string;
  priority: number;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  lastModified?: Date;
  section?: string;
}

/**
 * Main page sections (anchor links)
 */
export const pageSections: SitePath[] = [
  {
    path: "/",
    url: siteUrl,
    title: "Dafon - Innovative Solutions for Your Business",
    description: "Welcome to Dafon. We deliver innovative solutions and exceptional service to transform your business.",
    priority: 1.0,
    changeFrequency: "weekly",
    section: "home",
  },
  {
    path: "/#about",
    url: `${siteUrl}/#about`,
    title: "About Dafon",
    description: "Learn about Dafon, our forward-thinking company dedicated to excellence and innovation.",
    priority: 0.9,
    changeFrequency: "monthly",
    section: "about",
  },
  {
    path: "/#locations",
    url: `${siteUrl}/#locations`,
    title: "Our Locations",
    description: "Serving clients across multiple continents with a global presence in São Paulo, Lisboa, and more.",
    priority: 0.8,
    changeFrequency: "monthly",
    section: "locations",
  },
  {
    path: "/#partners",
    url: `${siteUrl}/#partners`,
    title: "Our Partners",
    description: "Strategic partners in different countries working together to deliver excellence.",
    priority: 0.8,
    changeFrequency: "monthly",
    section: "partners",
  },
  {
    path: "/#projects",
    url: `${siteUrl}/#projects`,
    title: "Our Projects",
    description: "Explore our recent work and innovative solutions including Dafoncv and PDF Extractor.",
    priority: 0.9,
    changeFrequency: "weekly",
    section: "projects",
  },
  {
    path: "/#contact",
    url: `${siteUrl}/#contact`,
    title: "Contact Us",
    description: "Get in touch with Dafon. Have a project in mind? Let's discuss how we can help transform your business.",
    priority: 0.8,
    changeFrequency: "monthly",
    section: "contact",
  },
];

/**
 * Project paths
 */
export const projectPaths: SitePath[] = [
  {
    path: "/projects/dafoncv",
    url: `${siteUrl}/#projects`,
    title: "Dafoncv - AI-powered CV Creation Platform",
    description: "Innovative SaaS platform developed in Portugal by Dafon, built with Golang and Next.js. Create professional CVs with AI assistance.",
    priority: 0.9,
    changeFrequency: "weekly",
    section: "projects",
  },
  {
    path: "/projects/pdf-extractor",
    url: `${siteUrl}/#projects`,
    title: "Dafon PDF Extractor - PDF Data Extraction API",
    description: "Comprehensive API built with Python to extract and identify company names, NIFs, and business data from PDF documents.",
    priority: 0.9,
    changeFrequency: "weekly",
    section: "projects",
  },
];

/**
 * Location paths
 */
export const locationPaths: SitePath[] = [
  {
    path: "/locations/sao-paulo",
    url: `${siteUrl}/#locations`,
    title: "Dafon São Paulo, Brazil",
    description: "Dafon office location in São Paulo, Brazil. Serving clients across South America.",
    priority: 0.7,
    changeFrequency: "monthly",
    section: "locations",
  },
  {
    path: "/locations/lisboa",
    url: `${siteUrl}/#locations`,
    title: "Dafon Lisboa, Portugal",
    description: "Dafon office location in Lisboa, Portugal. Serving clients across Europe.",
    priority: 0.7,
    changeFrequency: "monthly",
    section: "locations",
  },
  {
    path: "/locations/toronto",
    url: `${siteUrl}/#locations`,
    title: "Dafon Toronto, Canada",
    description: "Dafon presence in Toronto, Canada. Serving clients across North America.",
    priority: 0.7,
    changeFrequency: "monthly",
    section: "locations",
  },
  {
    path: "/locations/asuncion",
    url: `${siteUrl}/#locations`,
    title: "Dafon Asunción, Paraguay",
    description: "Dafon presence in Asunción, Paraguay. Serving clients in Latin America.",
    priority: 0.7,
    changeFrequency: "monthly",
    section: "locations",
  },
];

/**
 * API paths
 */
export const apiPaths: SitePath[] = [
  {
    path: "/api/send",
    url: `${siteUrl}/api/send`,
    title: "Contact API",
    description: "API endpoint for sending contact form messages.",
    priority: 0.3,
    changeFrequency: "never",
    section: "api",
  },
];

/**
 * Get all paths
 */
export function getAllPaths(): SitePath[] {
  return [
    ...pageSections,
    ...projectPaths,
    ...locationPaths,
    // Note: API paths are typically not included in sitemaps
  ];
}

/**
 * Get paths by section
 */
export function getPathsBySection(section: string): SitePath[] {
  return getAllPaths().filter((path) => path.section === section);
}

/**
 * Get path by URL
 */
export function getPathByUrl(url: string): SitePath | undefined {
  return getAllPaths().find((path) => path.url === url || path.path === url);
}

/**
 * Get sitemap-ready paths (excludes API and low-priority paths)
 */
export function getSitemapPaths(): SitePath[] {
  return getAllPaths().filter(
    (path) => !path.path.startsWith("/api/") && path.priority >= 0.5
  );
}

/**
 * Generate paths with dynamic data
 * This can be extended to fetch from database or CMS
 */
export async function generateDynamicPaths(): Promise<SitePath[]> {
  // For now, return static paths
  // In the future, this can fetch from database, CMS, or external APIs
  return getAllPaths();
}

