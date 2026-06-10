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

export default function MissionPage() {
  return (
    <>
      <PageHero
        eyebrow="MISSION"
        title="Veteran-led logistics for critical assets."
        description="Bluport is built for equipment-heavy work where timing, communication, and closeout discipline matter as much as the truck."
        image={siteImages.missionHero}
        imagePosition="object-[center_58%]"
        variant="dark"
      />

      <EditorialSection
        eyebrow="OPERATING BELIEF"
        title="Schedule protection is part of the move."
        description="Transportation is not just asset movement. It is schedule protection, field coordination, and accountability from request to closeout."
        variant="light"
        layout="stack"
      >
        <p className="max-w-[68ch] text-base leading-8 text-slate-700 md:text-lg">
          Bluport plans around site access, asset fit, securement, timing windows, communication,
          and closeout so the move supports the field operation instead of becoming another source
          of friction.
        </p>
      </EditorialSection>

      <section className="border-b border-[rgba(148,163,184,0.18)] bg-[#071829] py-16 text-white md:py-20">
        <Container>
          <p className="technical-label text-[var(--cyan)]">OPERATING STANDARD</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {operatingStandard.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[rgba(148,163,184,0.18)] bg-[rgba(255,255,255,0.04)] p-5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(76,201,240,0.14)] text-[var(--cyan)]">
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
