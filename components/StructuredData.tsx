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
        ],
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Daniel Fonseca da Silva",
        jobTitle: "Chief Executive Officer",
        worksFor: {
          "@id": `${siteUrl}/#organization`,
        },
        image: {
          "@type": "ImageObject",
          url: `${siteUrl}/company/daniel-fonseca-da-silva-ceo.jpg`,
        },
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

