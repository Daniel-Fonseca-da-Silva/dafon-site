import Script from "next/script";

const defaultDescription = "Dafon delivers cutting-edge solutions and exceptional service. Discover how we can transform your business with our innovative approach and expert team led by CEO Daniel Fonseca da Silva.";

const getSiteUrl = (): string => {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  if (!url) {
    throw new Error('NEXT_PUBLIC_SITE_URL environment variable is required');
  }
  return url;
};

const getStructuredData = () => {
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
        description: defaultDescription,
        foundingDate: "2020",
        founder: {
          "@type": "Person",
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
            addressLocality: "Toronto",
            addressCountry: "CA",
          },
          {
            "@type": "PostalAddress",
            addressLocality: "Asunción",
            addressCountry: "PY",
          },
        ],
        sameAs: [
          "https://github.com/Daniel-Fonseca-da-Silva",
          "https://www.dafoncv.online",
          "https://www.daniel-fonseca.online",
          "https://br.linkedin.com/company/dafon-sistemas",
          "https://www.facebook.com/dafonsistemas",
          "https://www.instagram.com/dafonsistema",
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
        alternateName: "Daniel Fonseca",
        jobTitle: ["Chief Executive Officer", "Chief Technology Officer", "System Architect", "Founder"],
        worksFor: {
          "@id": `${siteUrl}/#organization`,
        },
        url: "https://www.daniel-fonseca.online",
        sameAs: [
          "https://www.daniel-fonseca.online",
          "https://www.dafoncv.online",
          "https://github.com/Daniel-Fonseca-da-Silva",
          "https://br.linkedin.com/company/dafon-sistemas",
        ],
        knowsAbout: [
          "System Architecture",
          "Software Development",
          "Golang",
          "Python",
          "Java",
          "Next.js",
          "React",
          "TypeScript",
          "Cloud Computing",
          "Microservices",
          "DevOps",
          "AI Development",
          "SaaS Development",
        ],
        alumniOf: {
          "@type": "Organization",
          name: "Dafon",
        },
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
        description: defaultDescription,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "en-GB",
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "Dafon - Innovative Solutions for Your Business",
        description: defaultDescription,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#organization`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteUrl}/company/daniel-fonseca-da-silva-ceo.jpg`,
        },
      },
    ],
  };
};

export const StructuredData = () => {
  const structuredData = getStructuredData();
  
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

