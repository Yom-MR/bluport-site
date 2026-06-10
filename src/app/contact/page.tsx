import type { Metadata } from "next";
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
  { label: "Operations", value: "booking@bluport.us" },
  { label: "Phone", value: "832-627-7059" },
  { label: "Base", value: "Houston, Texas" },
  { label: "Response", value: "24/7 mission intake" },
];

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
        layout="split"
      >
        <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">
          {contactItems.map((item) => (
            <article key={item.label} className="border-t border-[rgba(148,163,184,0.28)] pt-4">
              <p className="technical-label text-sky-700">{item.label}</p>
              <p className="mt-3 text-lg font-medium text-slate-900">{item.value}</p>
            </article>
          ))}
        </div>
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
          <p className="text-sm leading-7 text-[rgba(203,213,225,0.76)]">
            Request details are routed securely to Bluport operations.
          </p>
        </div>
      </EditorialSection>
    </>
  );
}
