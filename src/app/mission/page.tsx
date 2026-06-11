import type { Metadata } from "next";
import { ClipboardCheck, MessageSquareText, Route, ShieldCheck, Timer } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import EditorialSection from "@/components/ui/EditorialSection";
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

const downtimeImpacts = [
  {
    title: "Rental fleets",
    body: "Late repositioning creates idle assets and delayed revenue for customers waiting on equipment.",
  },
  {
    title: "Utilities",
    body: "When a response move slips, restoration crews lose time that should have gone to the field.",
  },
  {
    title: "Manufacturing",
    body: "Shutdown windows are expensive; a missed handoff can push work into the next slot.",
  },
] as const;

export default function MissionPage() {
  return (
    <>
      <PageHero
        eyebrow="MISSION"
        title="Veteran-led logistics for critical field work."
        description="Bluport exists to protect the mission behind the move: crews waiting on equipment, rental fleets serving customers, utilities restoring service, and projects working against time."
        image={siteImages.missionHero}
        imageAlt="Field planning and coordination for equipment logistics"
        imagePosition="object-[center_58%]"
        variant="dark"
      />

      <EditorialSection
        eyebrow="THE COST OF DOWNTIME"
        title="Schedule protection and operational discipline."
        description="Bluport exists because the cost of a late asset is rarely just transportation. It is lost time, missed work, and a crew waiting for the next step."
        variant="light"
        layout="stack"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {downtimeImpacts.map((impact) => (
            <article key={impact.title} className="rounded-[1.5rem] border border-[rgba(148,163,184,0.22)] bg-white p-5">
              <p className="text-lg font-semibold tracking-[-0.03em] text-slate-950">{impact.title}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{impact.body}</p>
            </article>
          ))}
        </div>
      </EditorialSection>

      <section className="border-b border-[rgba(148,163,184,0.18)] bg-[#071829] py-16 text-white md:py-20">
        <Container>
          <p className="technical-label">OPERATING STANDARD</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {operatingStandard.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[rgba(148,163,184,0.18)] bg-[rgba(255,255,255,0.04)] p-5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(47,116,189,0.14)] text-[var(--accent-light)]">
                  <item.icon size={18} aria-hidden />
                </span>
                <p className="mt-4 text-lg font-semibold tracking-[-0.03em] text-white">{item.title}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <EditorialSection
        eyebrow="NON-NEGOTIABLES"
        title="What Bluport refuses to ignore."
        description="When these details are missed, delays and uncertainty follow."
        variant="light"
        layout="stack"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {nonNegotiables.map((item) => (
            <article key={item} className="rounded-2xl border border-[rgba(148,163,184,0.24)] bg-white/85 p-5">
              <p className="flex items-start gap-3 text-base leading-7 text-slate-700 md:text-lg">
                <ShieldCheck size={18} aria-hidden className="mt-1 shrink-0 text-[var(--accent-strong)]" />
                <span>
                  {item === "Site access details" && "Site access details - gate entry, yard instructions, and unloading conditions."}
                  {item === "Equipment dimensions and weight" && "Equipment dimensions and weight - trailer fit, clearance, and handling assumptions."}
                  {item === "Securement requirements" && "Securement requirements - tie-down method, handling sensitivity, and transit risk."}
                  {item === "Delivery window constraints" && "Delivery window constraints - timing expectations aligned before dispatch."}
                  {item === "Contact and handoff details" && "Contact and handoff details - who receives, who signs, and who confirms completion."}
                  {item === "Documentation after delivery" && "Documentation after delivery - POD, follow-up, and closeout records."}
                </span>
              </p>
            </article>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection
        eyebrow="REQUEST CAPACITY"
        title="When the move matters, the process matters."
        description="Bring Bluport in when the move needs to support the work around it, not just reach the destination."
        variant="light"
        layout="stack"
        className="border-b-0"
      >
        <Button href="/#request-capacity">Request Capacity</Button>
      </EditorialSection>
    </>
  );
}
