import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
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
    summary:
      "Hotshot movement for machines, attachments, trailers, and jobsite assets where timing, securement, and site access matter.",
    solves: "Prevents equipment misalignment that stalls crews and creates schedule drift.",
    bestFit: "Equipment repositioning, customer delivery windows, and rental fleet transitions.",
    benefit: "Trailer fit, securement planning, and communication are aligned before the move starts.",
  },
  {
    title: "Rapid Response Logistics",
    summary:
      "Support for urgent moves, replacement equipment, outage-related movement, and schedule recovery when delays create operational cost.",
    solves: "Closes urgent movement gaps when delays threaten restoration, uptime, or crew productivity.",
    bestFit: "Outage support, emergency replacement assets, and timeline recovery moves.",
    benefit: "Faster move planning with field-aware communication under compressed timelines.",
  },
  {
    title: "Dedicated Capacity",
    summary:
      "Reserved truck and trailer support for recurring routes, rental fleet coverage, and customers who need more predictability than spot-market availability.",
    solves: "Reduces sourcing uncertainty for teams that cannot run operations around spot-market swings.",
    bestFit: "Recurring lanes, scheduled project work, and repeat rental fleet commitments.",
    benefit: "Higher planning confidence with steadier dispatch control and clearer expectations.",
  },
  {
    title: "Project Logistics",
    summary:
      "Coordinated movement for phased schedules, hard delivery windows, multi-stop work, and equipment sequencing across active jobs.",
    solves: "Prevents sequencing misses that disrupt project handoffs and downstream trades.",
    bestFit: "Infrastructure, industrial, and data center programs with hard dependencies.",
    benefit: "Improved schedule protection through move planning tied to project context.",
  },
  {
    title: "Storage & Staging",
    summary:
      "Support for timed releases, yard transitions, and site-readiness coordination when equipment cannot arrive too early or too late.",
    solves: "Avoids congestion and idle assets caused by poorly timed deliveries.",
    bestFit: "Staging transitions, site-readiness dependencies, and controlled delivery windows.",
    benefit: "Cleaner handoffs between storage, dispatch, and field teams.",
  },
  {
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

const readinessChecklist = [
  "Pickup location and access",
  "Delivery location and access",
  "Asset type",
  "Dimensions and estimated weight",
  "Requested pickup and delivery dates",
  "Loading or securement constraints",
  "Onsite contact information",
] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="SERVICES"
        title="Specialized logistics for equipment-driven operations."
        description="Bluport supports the movement that keeps field teams productive: equipment transport, urgent repositioning, dedicated capacity, project logistics, staging, and operational planning."
        image={siteImages.servicesHero}
        imagePosition="object-[center_62%]"
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
            <details key={service.title} className="group px-6 py-7 md:px-8 md:py-8">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 lg:gap-10">
                <div className="grid w-full gap-4 lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)]">
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-7 text-slate-600 md:text-base">{service.summary}</p>
                </div>
                <span className="mt-2 shrink-0 text-xs font-bold tracking-[0.14em] text-sky-700 transition-transform group-open:translate-x-1">
                  OPEN
                </span>
              </summary>
              <div className="mt-4 grid gap-3 rounded-xl border border-[rgba(148,163,184,0.24)] bg-[rgba(248,252,255,0.9)] p-4 text-sm leading-7 text-slate-700 md:grid-cols-3 md:text-base">
                <p>
                  <span className="font-semibold text-slate-900">What it solves:</span> {service.solves}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Best fit:</span> {service.bestFit}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Operational benefit:</span> {service.benefit}
                </p>
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
        eyebrow="REQUEST READINESS"
        title="Request readiness checklist."
        description="The more complete the request details are upfront, the faster operations can scope the move accurately."
        variant="light"
        layout="stack"
      >
        <div className="rounded-[1.7rem] border border-[rgba(148,163,184,0.24)] bg-white/80 p-5 md:p-6">
          <ul className="grid gap-3 md:grid-cols-2">
            {readinessChecklist.map((item) => (
              <li key={item} className="flex items-start gap-2.5 border-t border-[rgba(148,163,184,0.24)] pt-3 text-sm text-slate-700 md:text-base">
                <CheckCircle2 size={16} aria-hidden className="mt-1 shrink-0 text-sky-700" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
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
