import Script from "next/script";
import { seoConfig } from "@/lib/seo";

const getSiteUrl = (): string => {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  if (!url) {
    throw new Error("NEXT_PUBLIC_SITE_URL environment variable is required");
  }
  return url;
};

const getHomepageStructuredData = () => {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Dafon",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo-white.png`,
          width: 1200,
          height: 400,
        },
        description: seoConfig.defaultDescription,
        foundingDate: "2020",
        founder: {
          "@type": "Person",
          "@id": `${siteUrl}/#person`,
          name: "Daniel Fonseca da Silva",
          jobTitle: "Chief Executive Officer",
        },
        address: [
          {
            "@type": "PostalAddress",
            addressLocality: "São Paulo",
            addressCountry: "BR",
          },
          {
            "@type": "PostalAddress",
            addressLocality: "Lisboa",
            addressCountry: "PT",
          },
          {
            "@type": "PostalAddress",
            addressLocality: "Rio de Janeiro",
            addressCountry: "BR",
          },
          {
            "@type": "PostalAddress",
            addressLocality: "Toronto",
            addressCountry: "CA",
          },
          {
            "@type": "PostalAddress",
            addressLocality: "Tallinn",
            addressCountry: "EE",
          },
        ],
        sameAs: [
          seoConfig.socialUrls.github,
          seoConfig.socialUrls.linkedin,
          seoConfig.socialUrls.facebook,
          seoConfig.ecosystemUrls.dafoncv,
          seoConfig.ecosystemUrls.techcuisine,
          seoConfig.ecosystemUrls.danielFonseca,
        ],
        knowsAbout: [
          "Software Development",
          "SaaS Development",
          "AI CV Creation",
          "System Architecture",
          "Cloud Computing",
          "Golang",
          "Next.js",
          "Python",
          "Java",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Dafon Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Dafoncv - AI CV Creator",
                url: "https://www.dafoncv.online",
                description: "Create your perfect CV with AI. Transform your professional experience into unique and personalized CVs.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Software Development Services",
                description: "Custom software development, API development, and SaaS solutions.",
              },
            },
          ],
        },
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Daniel Fonseca da Silva",
        jobTitle: "Chief Executive Officer",
        url: seoConfig.ecosystemUrls.danielFonseca,
        worksFor: {
          "@id": `${siteUrl}/#organization`,
        },
        sameAs: [
          seoConfig.ecosystemUrls.danielFonseca,
          seoConfig.socialUrls.github,
        ],
        image: {
          "@type": "ImageObject",
          url: `${siteUrl}/company/daniel-fonseca-da-silva-ceo.jpg`,
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}/#dafoncv`,
        name: "Dafoncv",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
        },
        url: "https://www.dafoncv.online",
        description: "AI-powered CV creation platform. Create your perfect CV with artificial intelligence. Transform your professional experience into unique and personalized CVs adapted to each job.",
        featureList: [
          "AI-powered CV creation",
          "Personalized CVs",
          "Job-specific adaptation",
          "Professional templates",
          "ATS-friendly format",
          "Real-time analysis",
        ],
        creator: {
          "@id": `${siteUrl}/#organization`,
        },
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        softwareVersion: "1.0",
        releaseNotes: "Innovative SaaS platform for CV creation with AI assistance.",
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Dafon",
        description: seoConfig.defaultDescription,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "en-GB",
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: seoConfig.defaultTitle,
        description: seoConfig.defaultDescription,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#organization`,
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        name: "Dafon Software Development",
        url: siteUrl,
        provider: {
          "@id": `${siteUrl}/#organization`,
        },
        serviceType: [
          "Website Creation",
          "AI Application Development",
          "Custom Software Development",
          "SaaS Development",
        ],
        areaServed: [
          { "@type": "Country", name: "Brazil" },
          { "@type": "Country", name: "Portugal" },
          { "@type": "Country", name: "Canada" },
          { "@type": "Country", name: "Estonia" },
          { "@type": "Place", name: "Global" },
        ],
        description: seoConfig.defaultDescription,
      },
      {
        "@type": "ItemList",
        "@id": `${siteUrl}/#products`,
        name: "Dafon Products",
        description: "AI-powered SaaS products built and maintained by Dafon.",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "SoftwareApplication",
              "@id": `${seoConfig.ecosystemUrls.dafoncv}/#app`,
              name: "DafonCV",
              url: seoConfig.ecosystemUrls.dafoncv,
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "AI-powered resume platform that analyses CVs against job descriptions, improves ATS match scores, and standardises candidate profiles for consulting firms.",
              creator: {
                "@id": `${siteUrl}/#organization`,
              },
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "SoftwareApplication",
              "@id": `${seoConfig.ecosystemUrls.techcuisine}/#app`,
              name: "TechCuisine",
              url: seoConfig.ecosystemUrls.techcuisine,
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "AI-powered food cost and recipe management platform for restaurants and professional kitchens, with menu engineering, yield tracking, and supplier price automation.",
              creator: {
                "@id": `${siteUrl}/#organization`,
              },
            },
          },
        ],
      },
    ],
  };
};

export const HomepageStructuredData = () => {
  const data = getHomepageStructuredData();
  return (
    <Script
      id="homepage-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

// Keep named export for any legacy imports
export { HomepageStructuredData as StructuredData };
