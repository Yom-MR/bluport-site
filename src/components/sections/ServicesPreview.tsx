import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/ui/Container";
import { siteImages } from "@/data/siteImages";
import { ArrowRight } from "lucide-react";

const serviceCards = [
  {
    title: "Equipment Transportation",
    description:
      "Hotshot and specialized movement for equipment, attachments, trailers, and field-support assets.",
    bestFor: "Rental equipment, machines, attachments, jobsite support",
    benefit: "Keeps crews moving and reduces idle time.",
  },
  {
    title: "Rapid Response Logistics",
    description:
      "Fast mobilization for urgent equipment moves, recovery support, outage support, and time-sensitive deployments.",
    bestFor: "Utilities, emergency crews, replacement equipment",
    benefit: "Helps protect critical timelines.",
  },
  {
    title: "Dedicated Capacity",
    description:
      "Reserved truck and trailer capacity for customers with recurring movement needs.",
    bestFor: "Rental fleets, recurring routes, project coverage",
    benefit: "Reduces dependence on spot-market uncertainty.",
  },
  {
    title: "Project Logistics",
    description:
      "Coordinated movement for multi-stop jobs, phased schedules, and constrained delivery windows.",
    bestFor: "Infrastructure, industrial work, data centers",
    benefit: "Gives complex moves a clear execution plan.",
  },
  {
    title: "Storage & Staging",
    description:
      "Controlled staging support to reduce jobsite congestion, timing failures, and idle crews.",
    bestFor: "Equipment yards, timed releases, phased jobs",
    benefit: "Improves site readiness.",
  },
  {
    title: "Logistics Consulting",
    description:
      "Operational planning support for equipment movement, communication standards, and dispatch workflows.",
    bestFor: "Growing fleets, new lanes, complex projects",
    benefit: "Builds more repeatable logistics execution.",
  },
];

export default function ServicesPreview() {
  return (
    <section id="services" className="section-shell section-light overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 hidden w-[36%] lg:block">
        <Image
          src={siteImages.equipmentTransport}
          alt=""
          fill
          className="object-cover object-center opacity-20"
          sizes="36vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,250,252,0.98)_4%,rgba(248,250,252,0.76)_52%,rgba(248,250,252,0.92)_100%)]" />
      </div>
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="CAPABILITIES"
          title="Services built for field execution."
          description="Bluport provides practical service coverage for equipment movement, urgent response, and recurring project support."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.07)]"
            >
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.08em] text-[var(--cyan)] uppercase">
                <ArrowRight size={14} />
                Service
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)]">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{service.description}</p>
              <div className="soft-divider mt-4 pt-3">
                <p className="text-xs font-semibold tracking-[0.08em] text-[var(--muted)] uppercase">Best for</p>
                <p className="mt-1 text-sm text-[var(--foreground)]">{service.bestFor}</p>
              </div>
              <div className="soft-divider mt-3 pt-3">
                <p className="text-xs font-semibold tracking-[0.08em] text-[var(--muted)] uppercase">Benefit</p>
                <p className="mt-1 text-sm text-[var(--foreground)]">{service.benefit}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}