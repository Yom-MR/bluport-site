import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Bluport Logistics services including equipment transportation, rapid response logistics, dedicated capacity, project logistics, storage and staging, and consulting support.",
  keywords: [
    "equipment transportation services",
    "rapid response logistics",
    "dedicated capacity logistics",
    "project logistics support",
  ],
};

const supportSteps = ["Intake", "Plan", "Dispatch", "Closeout"];

const useCases = [
  "Equipment rental fleet support",
  "Urgent jobsite delivery",
  "Utility and infrastructure response",
  "Multi-stop project movement",
  "Dedicated capacity needs",
];

export default function ServicesPage() {
  return (
    <>
      <section className="section-shell hero-glow">
        <Container>
          <SectionHeader
            eyebrow="CAPABILITIES"
            title="Specialized logistics for high-stakes movement."
            description="From equipment transport to rapid response and project logistics, Bluport supports customers who cannot afford missed windows or poor communication."
          />
        </Container>
      </section>

      <section className="section-shell" id="services-grid">
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="SERVICES GRID"
            title="Built to support real field operations."
            description="Service modules aligned to mission timelines, securement standards, and customer communication."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="glass-card rounded-2xl p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">{service.title}</h3>
                  <span className="technical-label rounded-full border border-[rgba(14,165,233,0.24)] bg-[rgba(14,165,233,0.08)] px-2.5 py-1 text-[var(--cyan)]">
                    {service.tag}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{service.description}</p>
                <div className="soft-divider mt-5 pt-4">
                  <p className="technical-label">Use Case</p>
                  <p className="mt-2 text-sm text-[var(--foreground)]">{service.useCase}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell bg-[rgba(6,26,51,0.14)]">
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="HOW BLUPORT SUPPORTS THE MOVE"
            title="Operational rhythm from request to closeout."
            description="Each move follows a repeatable process built for clarity, readiness, and execution control."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {supportSteps.map((step, index) => (
              <article key={step} className="glass-card rounded-2xl p-6">
                <p className="technical-label text-[var(--cyan)]">STEP {String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-xl font-semibold text-[var(--foreground)]">{step}</h3>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="IDEAL USE CASES"
            title="Where Bluport creates the most operational value."
            description="Common mission profiles where timing, communication, and equipment readiness drive project outcomes."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {useCases.map((item) => (
              <article key={item} className="glass-card rounded-2xl p-6">
                <p className="text-base font-medium text-[var(--foreground)]">{item}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell border-b-0">
        <Container>
          <div className="glass-card bg-grid rounded-2xl p-8 md:p-10">
            <p className="eyebrow">REQUEST CAPACITY</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
              Need a move planned?
            </h2>
            <div className="mt-6">
              <Button href="/#request-capacity">Request Capacity</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
