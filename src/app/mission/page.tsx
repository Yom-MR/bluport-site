import type { Metadata } from "next";
import { ClipboardCheck, MessageSquareText, Route, ShieldCheck, Timer, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
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

const operatingStandard = [
  { title: "Plan the move", icon: Route },
  { title: "Protect the schedule", icon: Timer },
  { title: "Communicate clearly", icon: MessageSquareText },
  { title: "Close the loop", icon: ClipboardCheck },
] as const;

const nonNegotiables = [
  "Site access details",
  "Equipment dimensions and weight",
  "Securement requirements",
  "Delivery window constraints",
  "Contact and handoff details",
  "Documentation after delivery",
] as const;

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

      <section className="border-b border-[rgba(148,163,184,0.18)] bg-[#f8fbff] py-8 md:py-10">
        <Container>
          <div className="rounded-[1.8rem] border border-[rgba(148,163,184,0.26)] bg-white/90 p-5 md:p-7">
            <p className="technical-label text-sky-700">BLUPORT OPERATING STANDARD</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {operatingStandard.map((item) => (
                <div key={item.title} className="flex items-center gap-3 border-t border-[rgba(148,163,184,0.25)] pt-3 md:border-t-0 md:pt-0">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(31,182,232,0.16)] text-[#0e5878]">
                    <item.icon size={17} aria-hidden />
                  </span>
                  <p className="text-base font-semibold tracking-[-0.02em] text-slate-900">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

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
        eyebrow="NON-NEGOTIABLES"
        title="What Bluport refuses to ignore."
        description="Reliable movement depends on details that are often skipped in rushed dispatch environments."
        variant="light"
        layout="stack"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {nonNegotiables.map((item) => (
            <article key={item} className="rounded-2xl border border-[rgba(148,163,184,0.24)] bg-white/85 p-5">
              <p className="flex items-start gap-3 text-base leading-7 text-slate-700 md:text-lg">
                <ShieldCheck size={18} aria-hidden className="mt-1 shrink-0 text-sky-700" />
                <span>{item}</span>
              </p>
            </article>
          ))}
        </div>
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
          <Button href="/#request-capacity">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={16} aria-hidden />
              Request Capacity
            </span>
          </Button>
        </div>
      </EditorialSection>
    </>
  );
}
