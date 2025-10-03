"use client";

export default function CitySchema({ city }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    name: "Apex Lawn Company",
    url: `https://apexlawncompany.com/lawncare/${city}`,
    telephone: "+1 919-939-4665",
    address: {
      "@type": "PostalAddress",
      streetAddress: "501 W Williams St Box 1012",
      addressLocality: "Apex",
      addressRegion: "NC",
      postalCode: "27502",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: city,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "123",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
