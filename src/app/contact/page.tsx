import type { Metadata } from "next";
import RequestCapacityForm from "@/components/forms/RequestCapacityForm";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

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
  { label: "Operations", value: "support@bluport.us" },
  { label: "Phone", value: "832-627-7059" },
  { label: "Base", value: "Houston, Texas" },
  { label: "Response", value: "24/7 mission intake" },
];

export default function ContactPage() {
  return (
    <>
      <section className="section-shell hero-glow">
        <Container>
          <SectionHeader
            eyebrow="CONTACT"
            title="Talk to Bluport operations."
            description="For urgent equipment movement, dedicated capacity, project support, or partnership inquiries, contact Bluport and we will follow up."
          />
        </Container>
      </section>

      <section className="section-shell">
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="OPERATIONS CONTACT"
            title="Command channel details"
            description="Use these points of contact for mission intake and operating coordination."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {contactItems.map((item) => (
              <article key={item.label} className="glass-card rounded-2xl p-6">
                <p className="technical-label text-[var(--cyan)]">{item.label}</p>
                <p className="mt-3 text-base font-medium text-[var(--foreground)]">{item.value}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell border-b-0">
        <Container className="space-y-6">
          <SectionHeader
            eyebrow="REQUEST CAPACITY"
            title="Submit move details"
            description="Provide pickup, delivery, asset details, and constraints for operations review."
          />
          <div className="panel-border rounded-2xl bg-[rgba(2,8,23,0.35)] p-2 md:p-3">
            <RequestCapacityForm />
          </div>
          <p className="text-xs leading-relaxed text-[rgba(148,163,184,0.72)]">
            For production launch, connect this form to HubSpot, Zoho, Resend, or a custom API endpoint.
          </p>
        </Container>
      </section>
    </>
  );
}
