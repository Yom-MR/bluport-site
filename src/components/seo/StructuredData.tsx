export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bluport Logistics",
    url: "https://bluport.us",
    email: "support@bluport.us",
    telephone: "+1-832-627-7059",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Houston",
      addressRegion: "Texas",
      addressCountry: "United States",
    },
    description:
      "Veteran-owned mission-critical logistics company specializing in equipment transport, rapid-response capacity, and field-ready logistics support.",
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
