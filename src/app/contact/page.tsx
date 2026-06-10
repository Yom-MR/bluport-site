import type { Metadata } from "next";
import { CheckCircle2, Mail, MapPin, Phone, Timer, UserRoundCheck } from "lucide-react";
import RequestCapacityForm from "@/components/forms/RequestCapacityForm";
import PageHero from "@/components/sections/PageHero";
import EditorialSection from "@/components/ui/EditorialSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Bluport Logistics operations for urgent equipment movement, dedicated capacity, project logistics support, and mission-critical field transport planning.",
  keywords: [
    "contact Bluport logistics",
    "Houston logistics contact",
    "request equipment transport quote",
    "mission-critical logistics intake",
  ],
};

const contactItems = [
  { label: "Operations", value: "booking@bluport.us", icon: Mail },
  { label: "Phone", value: "832-627-7059", icon: Phone },
  { label: "Base", value: "Houston, Texas", icon: MapPin },
  { label: "Response", value: "24/7 mission intake", icon: Timer },
];

const prepDetails = [
  "Pickup and delivery locations",
  "Requested pickup/delivery dates",
  "Asset type",
  "Dimensions/weight",
  "Site access constraints",
  "Urgency level",
  "Preferred contact method",
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title="Talk to Bluport operations."
        description="For urgent equipment movement, dedicated capacity, project support, or partnership inquiries, contact Bluport and we will follow up."
        variant="light"
      />

      <EditorialSection
        eyebrow="OPERATIONS CONTACT"
        title="Command channel details."
        description="Use these points of contact for urgent intake, scheduling discussions, and operating coordination."
        variant="light"
        layout="stack"
      >
        <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <article className="rounded-[1.8rem] border border-[rgba(148,163,184,0.28)] bg-white/90 p-6">
            <p className="technical-label text-sky-700">OPERATIONAL CONTACT</p>
            <div className="mt-4 space-y-3">
              <p className="text-lg font-semibold text-slate-900">booking@bluport.us</p>
              <p className="text-lg font-semibold text-slate-900">832-627-7059</p>
              <p className="text-base text-slate-700">Houston, Texas</p>
              <p className="text-sm leading-7 text-slate-600">Mission intake and move planning</p>
            </div>
          </article>

          <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">
            {contactItems.map((item) => (
              <article key={item.label} className="border-t border-[rgba(148,163,184,0.28)] pt-4">
                <p className="technical-label text-sky-700">{item.label}</p>
                <p className="mt-3 flex items-center gap-2.5 text-lg font-medium text-slate-900">
                  <item.icon size={17} aria-hidden className="text-sky-700" />
                  <span>{item.value}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </EditorialSection>

      <EditorialSection
        eyebrow="CONTACT PREP"
        title="Before you contact us, helpful details include:"
        description="Providing these details upfront helps operations scope the move accurately and respond faster."
        variant="light"
        layout="stack"
      >
        <ul className="grid gap-3 rounded-[1.7rem] border border-[rgba(148,163,184,0.24)] bg-white/85 p-5 md:grid-cols-2 md:p-6">
          {prepDetails.map((item) => (
            <li key={item} className="flex items-start gap-2.5 border-t border-[rgba(148,163,184,0.2)] pt-3 text-sm leading-7 text-slate-700 md:text-base">
              <UserRoundCheck size={16} aria-hidden className="mt-1 shrink-0 text-sky-700" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </EditorialSection>

      <EditorialSection
        eyebrow="REQUEST CAPACITY"
        title="Submit move details."
        description="Provide pickup, delivery, asset details, and constraints for operations review."
        variant="dark"
        layout="stack"
        className="border-b-0"
      >
        <div className="space-y-6">
          <div className="rounded-[2rem] border border-[rgba(148,163,184,0.16)] bg-[rgba(255,255,255,0.04)] p-2 md:p-3">
            <RequestCapacityForm />
          </div>
          <p className="flex items-start gap-2.5 text-sm leading-7 text-[rgba(203,213,225,0.76)]">
            <CheckCircle2 size={16} aria-hidden className="mt-1 shrink-0 text-[#67d4f4]" />
            <span>
              Request details are routed securely to Bluport operations.
            </span>
          </p>
        </div>
      </EditorialSection>
    </>
  );
}
