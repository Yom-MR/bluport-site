import type { Metadata } from "next";
import Image from "next/image";
import {
  ClipboardCheck,
  Compass,
  MessageSquareText,
  Route,
  ShieldCheck,
  Target,
  Timer,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/ui/Reveal";
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
  {
    title: "Plan the move",
    icon: Route,
    body: "Access, asset fit, and timing confirmed before a truck is ever dispatched.",
  },
  {
    title: "Protect the schedule",
    icon: Timer,
    body: "The delivery window drives the plan — not the other way around.",
  },
  {
    title: "Communicate clearly",
    icon: MessageSquareText,
    body: "Concise, jobsite-aware updates so no one has to chase the asset.",
  },
  {
    title: "Close the loop",
    icon: ClipboardCheck,
    body: "POD signed, handoff confirmed, and follow-up complete before the job closes.",
  },
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

const nonNegotiables = [
  {
    label: "Site access details",
    detail: "Gate entry, yard instructions, and unloading conditions.",
  },
  {
    label: "Equipment dimensions and weight",
    detail: "Trailer fit, clearance, and handling assumptions.",
  },
  {
    label: "Securement requirements",
    detail: "Tie-down method, handling sensitivity, and transit risk.",
  },
  {
    label: "Delivery window constraints",
    detail: "Timing expectations aligned before dispatch.",
  },
  {
    label: "Contact and handoff details",
    detail: "Who receives, who signs, and who confirms completion.",
  },
  {
    label: "Documentation after delivery",
    detail: "POD, follow-up, and closeout records.",
  },
] as const;

const values = [
  {
    icon: ShieldCheck,
    title: "Discipline over improvisation",
    body: "Every move runs on a plan. We confirm the details first so the field never absorbs our surprises.",
  },
  {
    icon: Target,
    title: "The mission behind the move",
    body: "We are not hauling for the sake of it. We are protecting the work a crew, plant, or restoration team depends on.",
  },
  {
    icon: Compass,
    title: "Accountability, start to finish",
    body: "From request to closeout, one standard holds. If we own the move, we own the outcome.",
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
        imageAlt="Veteran logistics operator beside a loaded hotshot trailer at golden hour with an American flag in the background"
        imagePosition="object-[center_35%]"
        variant="dark"
      />

      {/* Mission statement + portrait */}
      <section className="relative overflow-hidden bg-[var(--navy-950)] py-20 text-white md:py-28">
        <div className="absolute inset-0 blueprint-grid opacity-[0.14]" aria-hidden />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
            <Reveal className="space-y-7">
              <div className="space-y-6">
                <p className="eyebrow">WHY WE EXIST</p>
                <h2 className="text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1] tracking-[-0.05em] text-balance">
                  The cost of a late asset is rarely just transportation.
                </h2>
                <p className="text-base leading-8 text-[var(--steel-300)] md:text-lg">
                  It is lost time, missed work, and a crew waiting on the next step. Bluport was built
                  by veterans to bring planning, accountability, and after-action rigor to the moves
                  that other carriers treat as routine — because in the field, they never are.
                </p>
              </div>
              <ul className="divide-y divide-white/10 border-t border-white/10">
                {values.map((value) => (
                  <li key={value.title} className="flex items-start gap-4 py-5">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[rgba(47,116,189,0.14)] text-[var(--accent-light)]">
                      <value.icon size={20} aria-hidden />
                    </span>
                    <div>
                      <p className="text-base font-semibold tracking-[-0.02em] text-white">
                        {value.title}
                      </p>
                      <p className="mt-1 text-sm leading-7 text-[var(--steel-400)]">{value.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120} className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/12 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
              <Image
                src={siteImages.fieldOperations}
                alt="Bluport crew securing equipment on a flatbed trailer in the field"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,22,0.2)_0%,rgba(5,11,22,0.5)_60%,rgba(5,11,22,0.92)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                <p className="technical-label text-[var(--accent-light)]">VETERAN-OWNED &amp; OPERATED</p>
                <p className="mt-3 text-xl font-semibold leading-snug tracking-[-0.02em] text-white md:text-2xl">
                  Staffed by a team that is 82% military — veterans, active duty, spouses, and family.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* The cost of downtime */}
      <section className="bg-[var(--navy-900)] py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <Reveal className="space-y-4 lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow">THE COST OF DOWNTIME</p>
              <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance">
                Schedule protection is the whole point.
              </h2>
              <p className="max-w-[46ch] text-base leading-8 text-[var(--steel-300)] md:text-lg">
                Different sectors feel a late move differently — but the pattern is the same: idle
                assets, lost hours, and a team stuck waiting. We plan around that reality.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <ul className="divide-y divide-white/10 border-y border-white/10">
                {downtimeImpacts.map((impact, index) => (
                  <li key={impact.title} className="flex items-start gap-6 py-6">
                    <span className="font-mono text-sm text-[var(--accent-light)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-lg font-semibold tracking-[-0.02em] text-white">
                        {impact.title}
                      </p>
                      <p className="mt-1.5 text-sm leading-7 text-[var(--steel-300)]">{impact.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Operating standard */}
      <section className="bg-[var(--navy-950)] py-20 text-white md:py-28">
        <Container className="space-y-12">
          <Reveal className="max-w-[720px] space-y-4">
            <p className="eyebrow">OPERATING STANDARD</p>
            <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance">
              Four moves we make on every job.
            </h2>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
            {operatingStandard.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 70}
                className="bg-[var(--navy-900)] p-7 transition-colors hover:bg-[var(--navy-850)]"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(47,116,189,0.14)] text-[var(--accent-light)]">
                    <item.icon size={20} aria-hidden />
                  </span>
                  <span className="font-mono text-sm text-[var(--steel-400)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-5 text-lg font-semibold tracking-[-0.03em] text-white">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--steel-300)]">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Non-negotiables */}
      <section className="bg-[var(--navy-900)] py-20 text-white md:py-28">
        <Container className="space-y-12">
          <Reveal className="max-w-[720px] space-y-4">
            <p className="eyebrow">NON-NEGOTIABLES</p>
            <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance">
              What Bluport refuses to ignore.
            </h2>
            <p className="max-w-[58ch] text-base leading-8 text-[var(--steel-300)] md:text-lg">
              When these details are missed, delays and uncertainty follow. So we confirm every one
              of them before the truck rolls.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <ul className="grid gap-x-12 gap-y-1 sm:grid-cols-2">
              {nonNegotiables.map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-3.5 border-b border-white/10 py-5"
                >
                  <ShieldCheck size={18} aria-hidden className="mt-0.5 shrink-0 text-[var(--accent-light)]" />
                  <div>
                    <p className="text-base font-semibold tracking-[-0.01em] text-white">{item.label}</p>
                    <p className="mt-1 text-sm leading-7 text-[var(--steel-400)]">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[var(--navy-950)] py-20 text-white md:py-28">
        <Container>
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(47,116,189,0.12),rgba(255,255,255,0.02)_55%)] p-8 md:p-14">
            <div className="absolute inset-0 blueprint-grid opacity-30" aria-hidden />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-[620px] space-y-4">
                <p className="technical-label">REQUEST CAPACITY</p>
                <h2 className="text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1] tracking-[-0.04em] text-balance">
                  When the move matters, the process matters.
                </h2>
                <p className="text-sm leading-8 text-[var(--steel-300)] md:text-base">
                  Bring Bluport in when the move needs to support the work around it — not just reach
                  the destination.
                </p>
              </div>
              <Button href="/#request-capacity">Request Capacity</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
