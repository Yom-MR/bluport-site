import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import EditorialSection from "@/components/ui/EditorialSection";
import FeatureRows from "@/components/ui/FeatureRows";
import { siteImages } from "@/data/siteImages";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "Learn Bluport Logistics mission: veteran-led execution and operating values for mission-critical equipment movement, field support assets, and time-sensitive project operations.",
  keywords: [
    "Bluport mission",
    "veteran-led logistics",
    "mission-critical equipment movement",
    "field operations logistics",
  ],
};

const missionColumns = [
  {
    title: "Mission first",
    description:
      "Bluport is built around the belief that transportation is more than showing up with a truck. Every move supports uptime, schedule protection, and the people depending on that asset to arrive ready.",
  },
  {
    title: "Field-aware planning",
    description:
      "Route conditions, site access, securement, customer communication, and timing constraints are considered together so the plan reflects real operating conditions instead of assumptions.",
  },
  {
    title: "Closeout discipline",
    description:
      "The move is not complete until delivery is confirmed, documentation is closed, and the customer has the follow-up needed to keep the next step moving without friction.",
  },
];

const operatingSteps = [
  {
    label: "01",
    title: "Intake",
    description:
      "Understand the asset, timing, route, site access, and constraints before a truck is assigned.",
  },
  {
    label: "02",
    title: "Plan",
    description:
      "Align truck, trailer, securement, communication, and contingency options around the actual move.",
  },
  {
    label: "03",
    title: "Move",
    description:
      "Execute with dispatch visibility, field-aware decisions, and communication that does not need chasing.",
  },
  {
    label: "04",
    title: "Closeout",
    description:
      "Confirm delivery, documentation, POD, and follow-up so the customer has a clean operational finish.",
  },
];

export default function MissionPage() {
  return (
    <>
      <PageHero
        eyebrow="MISSION"
        title="Veteran-led logistics for critical assets."
        description="Bluport exists to move the equipment, materials, and field-support assets that keep projects, crews, and infrastructure moving."
        image={siteImages.fieldOperations}
        variant="dark"
      />

      <EditorialSection
        eyebrow="OPERATING MODEL"
        title="Operational discipline from request to closeout."
        description="Bluport is built around the belief that transportation is more than showing up with a truck. Every move depends on clear planning, field-aware communication, securement discipline, and reliable closeout."
        variant="light"
        layout="stack"
      >
        <div className="grid gap-8 md:grid-cols-3">
          {missionColumns.map((column) => (
            <article
              key={column.title}
              className="border-t border-[rgba(148,163,184,0.3)] pt-6"
            >
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                {column.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                {column.description}
              </p>
            </article>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection
        eyebrow="MOVE RHYTHM"
        title="How Bluport runs every move."
        variant="dark"
        layout="split"
      >
        <FeatureRows items={operatingSteps} variant="dark" />
      </EditorialSection>

      <EditorialSection
        eyebrow="REQUEST CAPACITY"
        title="When the move matters, the process matters."
        description="Bluport is designed for projects and field operations that need disciplined execution, not generic freight handling."
        variant="light"
        layout="split"
        className="border-b-0"
      >
        <div className="flex items-start lg:justify-end">
          <Button href="/#request-capacity">Request Capacity</Button>
        </div>
      </EditorialSection>
    </>
  );
}
