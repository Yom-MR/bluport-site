import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import EditorialSection from "@/components/ui/EditorialSection";
import FeatureRows from "@/components/ui/FeatureRows";
import { siteImages } from "@/data/siteImages";

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

const serviceRows = [
  {
    title: "Equipment Transportation",
    description:
      "Planned movement of machines, attachments, trailers, and rental equipment with securement and timing matched to the field requirement.",
    bestFor: "Best for equipment repositioning, customer delivery, and schedule-sensitive site moves.",
    benefit: "Benefit: reliable movement with communication and securement discipline built in.",
  },
  {
    title: "Rapid Response Logistics",
    description:
      "Fast mobilization support for outages, urgent field events, and operations where missed timing multiplies cost quickly.",
    bestFor: "Best for urgent jobsite delivery, restoration work, and time-critical support requests.",
    benefit: "Benefit: shorter reaction time with a readiness posture customers can depend on.",
  },
  {
    title: "Dedicated Capacity",
    description:
      "Committed truck and trailer coverage for customers who need consistent execution instead of spot-market variability.",
    bestFor: "Best for recurring routes, rental fleet support, and sustained project demand.",
    benefit: "Benefit: dependable capacity aligned to operating rhythm, not last-minute scrambling.",
  },
  {
    title: "Project Logistics",
    description:
      "Coordinated movement for phased schedules, hard windows, multi-stop work, and field sequencing that requires control.",
    bestFor: "Best for infrastructure, industrial, and data center project movement.",
    benefit: "Benefit: fewer misses between planning assumptions and field execution.",
  },
  {
    title: "Storage & Staging",
    description:
      "Controlled staging support to keep equipment ready without overwhelming the jobsite or forcing early delivery friction.",
    bestFor: "Best for timed releases, overflow support, and site-readiness coordination.",
    benefit: "Benefit: cleaner handoffs and better alignment between asset readiness and field demand.",
  },
  {
    title: "Logistics Consulting",
    description:
      "Operational guidance for customers refining movement strategy, communication cadence, and logistics execution standards.",
    bestFor: "Best for teams tightening dispatch workflows or improving movement planning at scale.",
    benefit: "Benefit: more disciplined logistics decisions before the move ever begins.",
  },
];

const supportSteps = [
  {
    label: "01",
    title: "Intake",
    description: "Capture the asset, timing, access conditions, and operating constraints before planning starts.",
  },
  {
    label: "02",
    title: "Plan",
    description: "Match trailer, securement, timing, route, and communication to the actual move profile.",
  },
  {
    label: "03",
    title: "Dispatch",
    description: "Coordinate execution with field-aware updates and decision-making that protects the window.",
  },
  {
    label: "04",
    title: "Closeout",
    description: "Confirm delivery, close documentation, and complete the final customer handoff cleanly.",
  },
];

const useCases = [
  "Rental fleet support",
  "Urgent jobsite delivery",
  "Utility and infrastructure response",
  "Multi-stop project movement",
  "Dedicated capacity needs",
  "Equipment repositioning",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="SERVICES"
        title="Specialized logistics for high-stakes movement."
        description="From equipment transport to rapid response and project logistics, Bluport supports customers who cannot afford missed windows or poor communication."
        image={siteImages.equipmentTransport}
        variant="dark"
      />

      <EditorialSection
        eyebrow="SERVICE LINES"
        title="Built to support real field operations."
        description="Bluport service lines are designed around timing, securement, customer communication, and the realities of live field work."
        variant="light"
        layout="stack"
      >
        <div className="divide-y divide-[rgba(148,163,184,0.22)] rounded-[2rem] border border-[rgba(148,163,184,0.16)] bg-white/75">
          {serviceRows.map((service) => (
            <article key={service.title} className="grid gap-4 px-6 py-7 md:px-8 md:py-8 lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)] lg:gap-10">
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                {service.title}
              </h3>
              <div className="space-y-3 text-sm leading-7 text-slate-600 md:text-base">
                <p>{service.description}</p>
                <p>{service.bestFor}</p>
                <p>{service.benefit}</p>
              </div>
            </article>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection
        eyebrow="EXECUTION RHYTHM"
        title="Operational rhythm from request to closeout."
        description="Every move follows a repeatable sequence designed for clarity, readiness, and execution control."
        variant="dark"
        layout="split"
      >
        <FeatureRows items={supportSteps} variant="dark" />
      </EditorialSection>

      <EditorialSection
        eyebrow="IDEAL USE CASES"
        title="Ideal use cases."
        description="Where Bluport creates the most operational value for customers managing real field pressure."
        variant="light"
        layout="split"
        className="border-b-0"
      >
        <div className="space-y-10">
          <div className="grid gap-x-8 gap-y-4 md:grid-cols-2">
            {useCases.map((item) => (
              <div key={item} className="border-t border-[rgba(148,163,184,0.3)] pt-4">
                <p className="text-base font-medium text-slate-800 md:text-lg">{item}</p>
              </div>
            ))}
          </div>
          <Button href="/#request-capacity">Request Capacity</Button>
        </div>
      </EditorialSection>
    </>
  );
}
