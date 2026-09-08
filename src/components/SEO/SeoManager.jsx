import { useEffect } from "react";

const siteUrl = "https://tanugym.in";

const seoConfig = {
  title: "TANU GYM | Luxury. Strength. Discipline.",
  description:
    "TANU GYM is a modern gym in Mullana, Ambala offering strength training, cardio, yoga, personal training, and fitness coaching to help you build a stronger, healthier lifestyle.",
  keywords:
    "TANU GYM, gym in Mullana, gym in Ambala, fitness center Haryana, personal training, strength training, cardio classes, yoga classes, local gym near me",
  author: "TANU GYM",
  ogTitle: "TANU GYM | Gym & Fitness Center in Mullana, Ambala",
  ogDescription:
    "Join TANU GYM for expert coaching, modern equipment, personalized fitness plans, and motivating gym experiences in Mullana, Ambala.",
  twitterTitle: "TANU GYM | Gym & Fitness Center in Mullana, Ambala",
  twitterDescription:
    "Train smarter with TANU GYM through strength training, cardio, yoga, and personal coaching in Mullana, Ambala.",
  phone: "+91 8950855815",
  email: "tanugym555@gmail.com",
  address: {
    streetAddress: "Mullana",
    addressLocality: "Ambala",
    addressRegion: "Haryana",
    postalCode: "133203",
    addressCountry: "IN",
  },
  openingHours: ["Mo-Sa 05:00-09:00", "Mo-Sa 16:00-21:00"],
  priceRange: "INR 1500 - INR 10000",
};

const ensureTag = (selector, createTag) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = createTag();
    document.head.appendChild(element);
  }

  return element;
};

const setMetaContent = (selector, attributes, content) => {
  const element = ensureTag(selector, () => {
    const meta = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => {
      meta.setAttribute(key, value);
    });
    return meta;
  });

  element.setAttribute("content", content);
};

function SeoManager() {
  useEffect(() => {
    const canonicalUrl = `${siteUrl}/`;
    const imageUrl = `${siteUrl}/logo.png`;

    document.documentElement.lang = "en-IN";
    document.title = seoConfig.title;

    setMetaContent(
      'meta[name="description"]',
      { name: "description" },
      seoConfig.description
    );
    setMetaContent(
      'meta[name="keywords"]',
      { name: "keywords" },
      seoConfig.keywords
    );
    setMetaContent('meta[name="author"]', { name: "author" }, seoConfig.author);
    setMetaContent(
      'meta[name="robots"]',
      { name: "robots" },
      "index, follow, max-image-preview:large"
    );
    setMetaContent(
      'meta[name="googlebot"]',
      { name: "googlebot" },
      "index, follow, max-image-preview:large"
    );
    setMetaContent('meta[property="og:type"]', { property: "og:type" }, "website");
    setMetaContent(
      'meta[property="og:site_name"]',
      { property: "og:site_name" },
      "TANU GYM"
    );
    setMetaContent(
      'meta[property="og:title"]',
      { property: "og:title" },
      seoConfig.ogTitle
    );
    setMetaContent(
      'meta[property="og:description"]',
      { property: "og:description" },
      seoConfig.ogDescription
    );
    setMetaContent(
      'meta[property="og:url"]',
      { property: "og:url" },
      canonicalUrl
    );
    setMetaContent(
      'meta[property="og:image"]',
      { property: "og:image" },
      imageUrl
    );
    setMetaContent(
      'meta[property="og:image:alt"]',
      { property: "og:image:alt" },
      "TANU GYM gym logo"
    );
    setMetaContent(
      'meta[property="og:locale"]',
      { property: "og:locale" },
      "en_IN"
    );
    setMetaContent(
      'meta[name="twitter:card"]',
      { name: "twitter:card" },
      "summary_large_image"
    );
    setMetaContent(
      'meta[name="twitter:title"]',
      { name: "twitter:title" },
      seoConfig.twitterTitle
    );
    setMetaContent(
      'meta[name="twitter:description"]',
      { name: "twitter:description" },
      seoConfig.twitterDescription
    );
    setMetaContent(
      'meta[name="twitter:image"]',
      { name: "twitter:image" },
      imageUrl
    );
    setMetaContent(
      'meta[name="twitter:image:alt"]',
      { name: "twitter:image:alt" },
      "TANU GYM gym logo"
    );

    const canonical = ensureTag('link[rel="canonical"]', () => {
      const link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      return link;
    });
    canonical.setAttribute("href", canonicalUrl);

    const structuredData = [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "TANU GYM",
        url: canonicalUrl,
        description: seoConfig.description,
      },
      {
        "@context": "https://schema.org",
        "@type": "ExerciseGym",
        "@id": `${canonicalUrl}#tanugym`,
        name: "TANU GYM",
        image: imageUrl,
        url: canonicalUrl,
        telephone: seoConfig.phone,
        email: seoConfig.email,
        priceRange: seoConfig.priceRange,
        description: seoConfig.description,
        address: {
          "@type": "PostalAddress",
          ...seoConfig.address,
        },
        openingHours: seoConfig.openingHours,
        areaServed: ["Mullana", "Ambala", "Haryana"],
      },
    ];

    const ldJson = ensureTag('script[data-seo="structured-data"]', () => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seo = "structured-data";
      return script;
    });
    ldJson.textContent = JSON.stringify(structuredData);
  }, []);

  return null;
}

export default SeoManager;
