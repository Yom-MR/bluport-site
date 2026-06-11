import {
  BLUPORT_BASE_DISPLAY,
  BLUPORT_PHONE_E164,
  CONTACT_CHANNELS,
} from "@/lib/contact";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bluport Logistics",
    url: "https://bluport.us",
    email: CONTACT_CHANNELS.booking.email,
    telephone: BLUPORT_PHONE_E164,
    address: {
      "@type": "PostalAddress",
      addressLocality: BLUPORT_BASE_DISPLAY,
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
