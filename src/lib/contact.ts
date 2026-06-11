export const CONTACT_CHANNELS = {
  booking: {
    email: "booking@bluport.us",
    purpose: "Freight booking, capacity requests, and move intake",
  },
  support: {
    email: "support@bluport.us",
    purpose: "Customer support and general follow-up",
  },
  billing: {
    email: "billing@bluport.us",
    purpose: "Invoices, payments, and billing questions",
  },
  vendors: {
    email: "vendors@bluport.us",
    purpose: "Vendor, carrier, supplier, and partner inquiries",
  },
  compliance: {
    email: "compliance@bluport.us",
    purpose: "Insurance, onboarding, and safety/compliance documents",
  },
  hr: {
    email: "hr@bluport.us",
    purpose: "Recruiting, careers, and driver/operator inquiries",
  },
} as const;

export const BLUPORT_PHONE_DISPLAY = "832-627-7059";
export const BLUPORT_PHONE_E164 = "+1-832-627-7059";
export const BLUPORT_BASE_DISPLAY = "Houston, TX";

export const CONTACT_CHANNEL_LIST = [
  CONTACT_CHANNELS.booking,
  CONTACT_CHANNELS.support,
  CONTACT_CHANNELS.billing,
  CONTACT_CHANNELS.vendors,
  CONTACT_CHANNELS.compliance,
  CONTACT_CHANNELS.hr,
] as const;