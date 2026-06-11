import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import EditorialSection from "@/components/ui/EditorialSection";
import { siteImages } from "@/data/siteImages";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "See the industries Bluport supports, including construction and equipment rental, utilities and infrastructure, data center construction, industrial operations, and emergency response.",
  keywords: [
    "construction logistics",
    "equipment rental transport",
    "utility infrastructure logistics",
    "industrial logistics support",
  ],
};

const painPoints = [
  "Missed delivery windows",
  "Idle crews",
  "Replacement equipment delays",
  "Site access issues",
  "Poor communication",
  "Missing documentation",
];

const fitNotes = [
  "Communication cadence customers do not have to chase",
  "Readiness posture for urgent and scheduled missions",
  "Securement discipline aligned to equipment risk",
  "Dispatch control with field-aware execution decisions",
 ] as const;

const industryRows = [
  {
    name: "Construction & Equipment Rental",
    support: "Keep rental fleets, attachments, and machines aligned with jobsite timing and customer demand.",
    friction: "Late repositioning, missed returns, and crews waiting for equipment handoff.",
    focus: "Schedule continuity for active field and rental operations.",
    image: siteImages.industriesConstruction,
    alt: "Construction and equipment yard",
  },
  {
    name: "Utilities & Infrastructure",
    support: "Support outage-sensitive work where equipment delays can stall crews, restoration timelines, and infrastructure schedules.",
    friction: "Compressed restoration windows and access constraints at active sites.",
    focus: "Readiness and dispatch clarity under response pressure.",
    image: siteImages.industriesUtilities,
    alt: "Utility infrastructure network",
  },
  {
    name: "Industrial & Critical Facilities",
    support: "Move support assets around shutdowns, production windows, vendor coordination, and controlled-access sites.",
    friction: "Vendor timing conflicts and production windows that leave little margin.",
    focus: "Execution discipline around access, timing, and documentation.",
    image: siteImages.industriesIndustrial,
    alt: "Industrial facility environment",
  },
  {
    name: "Data Center Construction",
    support: "Support scheduled equipment movement for uptime-driven infrastructure builds, generators, site equipment, and critical-path work.",
    friction: "Critical-path dependencies where late movement affects multiple trades.",
    focus: "Planned sequencing tied to site and delivery windows.",
    image: siteImages.industriesDataCenter,
    alt: "Data center interior",
  },
  {
    name: "Aerospace & Defense",
    support: "Support mission-oriented ground movement that requires clear communication and controlled execution standards.",
    friction: "High accountability environments with little tolerance for handoff errors.",
    focus: "Securement discipline and clear operating communication.",
  },
  {
    name: "Government & Emergency Response",
    support: "Provide move support for urgent public missions and project operations where schedule integrity matters.",
    friction: "Escalating urgency, constrained access, and fragmented communication channels.",
    focus: "Structured intake, dispatch clarity, and clean closeout.",
  },
] as const;

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="INDUSTRIES"
        title="Built for sectors where downtime is expensive."
        description="Bluport supports customers operating around crews, equipment availability, restoration timelines, production schedules, and critical-path project work."
        image={siteImages.industriesHero}
        imageAlt="Critical infrastructure and industrial operations environment"
        imagePosition="object-[center_50%]"
        variant="dark"
      />

      <EditorialSection
        eyebrow="INDUSTRY FIT"
        title="Operational environments we support."
        description="Bluport supports environments where delays create crew downtime, schedule drift, and operational risk that spreads fast."
        variant="light"
        layout="stack"
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industryRows.map((item) => (
            <article key={item.name} className="rounded-[1.7rem] border border-[rgba(148,163,184,0.22)] bg-white/90 p-6">
              {"image" in item && item.image ? (
                <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-[1.2rem]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1280px) 28vw, (min-width: 768px) 44vw, 100vw"
                  />
                </div>
              ) : null}
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">{item.name}</h3>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700 md:text-base">
                <p>
                  <span className="font-semibold text-slate-900">What Bluport supports:</span> {item.support}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Common friction points:</span> {item.friction}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Support focus:</span> {item.focus}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 border-t border-[rgba(148,163,184,0.3)] pt-5 text-sm leading-7 text-slate-600 md:text-base">
          Additional support includes aerospace, defense, government response, emergency movement,
          and project logistics where disciplined execution and documentation matter.
        </p>
      </EditorialSection>

      <EditorialSection
        eyebrow="FIELD FRICTION"
        title="Operational friction that impacts field outcomes."
        description="These are the failures that compound quickly once a project, crew, or response team is already moving."
        variant="dark"
        layout="stack"
      >
        <div className="grid gap-x-10 gap-y-4 md:grid-cols-2 xl:grid-cols-3">
          {painPoints.map((point) => (
            <div key={point} className="border-t border-[rgba(148,163,184,0.2)] pt-5">
              <p className="text-lg font-medium tracking-[-0.02em] text-white">{point}</p>
            </div>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection
        eyebrow="WHY BLUPORT FITS"
        title="Operational fit for high-accountability environments."
        description="Bluport is built around disciplined movement, operational clarity, and closeout standards that hold up under pressure."
        variant="light"
        layout="split"
        className="border-b-0"
      >
        <div className="space-y-10">
          <div className="grid gap-5 md:grid-cols-2">
            {fitNotes.map((note) => (
              <article
                key={note}
                className="rounded-[1.75rem] border border-[rgba(148,163,184,0.2)] bg-white/80 p-6"
              >
                <p className="text-base leading-7 text-slate-700 md:text-lg">{note}</p>
              </article>
            ))}
          </div>
          <Button href="/#request-capacity">Request Capacity</Button>
        </div>
      </EditorialSection>
    </>
  );
}
