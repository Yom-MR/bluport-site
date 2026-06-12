import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
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
    anchor: "equipment-transportation",
    title: "Equipment Transportation",
    summary:
      "Hotshot movement for machines, attachments, trailers, and jobsite assets where timing, securement, and site access matter.",
    solves: "Prevents equipment misalignment that stalls crews and creates schedule drift.",
    bestFit: "Equipment repositioning, customer delivery windows, and rental fleet transitions.",
    benefit: "Trailer fit, securement planning, and communication are aligned before the move starts.",
  },
  {
    anchor: "rapid-response-logistics",
    title: "Rapid Response Logistics",
    summary:
      "Support for urgent moves, replacement equipment, outage-related movement, and schedule recovery when delays create operational cost.",
    solves: "Closes urgent movement gaps when delays threaten restoration, uptime, or crew productivity.",
    bestFit: "Outage support, emergency replacement assets, and timeline recovery moves.",
    benefit: "Faster move planning with field-aware communication under compressed timelines.",
  },
  {
    anchor: "dedicated-capacity",
    title: "Dedicated Capacity",
    summary:
      "Reserved truck and trailer support for recurring routes, rental fleet coverage, and customers who need more predictability than spot-market availability.",
    solves: "Reduces sourcing uncertainty for teams that cannot run operations around spot-market swings.",
    bestFit: "Recurring lanes, scheduled project work, and repeat rental fleet commitments.",
    benefit: "Higher planning confidence with steadier dispatch control and clearer expectations.",
  },
  {
    anchor: "project-logistics",
    title: "Project Logistics",
    summary:
      "Coordinated movement for phased schedules, hard delivery windows, multi-stop work, and equipment sequencing across active jobs.",
    solves: "Prevents sequencing misses that disrupt project handoffs and downstream trades.",
    bestFit: "Infrastructure, industrial, and data center programs with hard dependencies.",
    benefit: "Improved schedule protection through move planning tied to project context.",
  },
  {
    anchor: "storage-staging",
    title: "Storage & Staging",
    summary:
      "Support for timed releases, yard transitions, and site-readiness coordination when equipment cannot arrive too early or too late.",
    solves: "Avoids congestion and idle assets caused by poorly timed deliveries.",
    bestFit: "Staging transitions, site-readiness dependencies, and controlled delivery windows.",
    benefit: "Cleaner handoffs between storage, dispatch, and field teams.",
  },
  {
    anchor: "logistics-consulting",
    title: "Logistics Consulting",
    summary:
      "Practical planning for movement workflows, communication cadence, lane setup, and dispatch standards as operations grow.",
    solves: "Closes process gaps that cause repeat friction in planning and execution.",
    bestFit: "Teams standardizing movement workflows or scaling logistics operations.",
    benefit: "Better operating discipline before complexity turns into avoidable cost.",
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

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="SERVICES"
        title="Specialized logistics for equipment-driven operations."
        description="Bluport supports the movement that keeps field teams productive: equipment transport, urgent repositioning, dedicated capacity, project logistics, staging, and operational planning."
        image={siteImages.servicesHero}
        imageAlt="Trailer loading and securement readiness in an industrial yard"
        imagePosition="object-[center_62%]"
        variant="dark"
      >
        <div className="flex flex-wrap gap-2">
          {serviceRows.map((service) => (
            <a
              key={service.anchor}
              href={`#${service.anchor}`}
              className="rounded-full border border-[rgba(200,210,221,0.2)] bg-[rgba(255,255,255,0.05)] px-3 py-2 text-[11px] font-semibold tracking-[0.12em] text-[#e5eef6] uppercase transition-colors hover:border-[var(--cyan)] hover:text-[var(--cyan)]"
            >
              {service.title}
            </a>
          ))}
        </div>
      </PageHero>

      <EditorialSection
        eyebrow="SERVICE LINES"
        title="Built to support real field operations."
        description="Bluport service lines are designed around timing, securement, customer communication, and the realities of live field work."
        variant="light"
        layout="stack"
      >
        <div className="overflow-hidden rounded-[2rem] border border-[rgba(148,163,184,0.22)] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] divide-y divide-[rgba(148,163,184,0.18)]">
          {serviceRows.map((service, index) => (
            <details key={service.title} id={service.anchor} className="group px-6 py-6 md:px-8 md:py-7">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 lg:gap-10">
                <div className="grid w-full gap-2 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)] lg:gap-8">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-sky-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950 md:text-2xl">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-7 text-slate-600 md:text-base">{service.summary}</p>
                </div>
                <ChevronDown
                  size={20}
                  aria-hidden
                  className="mt-1 shrink-0 text-sky-700 transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <div className="mt-5 grid gap-4 border-t border-[rgba(148,163,184,0.2)] pt-5 text-sm leading-7 text-slate-700 md:grid-cols-3 md:text-[0.95rem] lg:pl-[calc(260px+2rem)]">
                <p>
                  <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-sky-700">
                    What it solves
                  </span>
                  <span className="mt-1 block">{service.solves}</span>
                </p>
                <p>
                  <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-sky-700">
                    Best fit
                  </span>
                  <span className="mt-1 block">{service.bestFit}</span>
                </p>
                <p>
                  <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-sky-700">
                    Operational benefit
                  </span>
                  <span className="mt-1 block">{service.benefit}</span>
                </p>
              </div>
              <div className="mt-5 lg:pl-[calc(260px+2rem)]">
                <Button href="/#request-capacity" className="text-[11px] tracking-[0.12em] uppercase">
                  Request Quote
                </Button>
              </div>
            </details>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection
        eyebrow="EXECUTION RHYTHM"
        title="How Bluport executes."
        description="Execution stays simple on purpose: understand the move, plan around constraints, dispatch clearly, and close the loop with documentation."
        variant="dark"
        layout="split"
      >
        <FeatureRows items={supportSteps} variant="dark" />
      </EditorialSection>

      <EditorialSection
        eyebrow="REQUEST CAPACITY"
        title="Need a move planned?"
        description="Better request details create better moves. Bluport operations can scope faster when asset, route, timing, and constraints are clear upfront."
        variant="light"
        layout="stack"
        className="border-b-0"
      >
        <Button href="/#request-capacity">Request Capacity</Button>
      </EditorialSection>
    </>
  );
}
