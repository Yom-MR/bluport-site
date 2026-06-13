import type { Metadata } from "next";
import Image from "next/image";
import {
  CheckCircle2,
  ClipboardCheck,
  Compass,
  Factory,
  HardHat,
  MessageSquareText,
  PhoneIncoming,
  Radio,
  Route,
  Send,
  ShieldCheck,
  Target,
  Timer,
  Truck,
  Zap,
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

const operatingModel = [
  {
    icon: PhoneIncoming,
    title: "Intake",
    body: "Asset, route, window, and site constraints captured in one structured request.",
  },
  {
    icon: Route,
    title: "Planning",
    body: "Trailer fit, securement, access, and timing engineered before anything moves.",
  },
  {
    icon: Send,
    title: "Dispatch",
    body: "The right truck and operator assigned to the plan and released to the lane.",
  },
  {
    icon: HardHat,
    title: "Field execution",
    body: "Jobsite-aware delivery with proactive updates from pickup to gate.",
  },
  {
    icon: CheckCircle2,
    title: "Closeout",
    body: "POD signed, handoff confirmed, and follow-up complete before the job closes.",
  },
] as const;

const downtimeImpacts = [
  {
    icon: Truck,
    title: "Rental fleets",
    body: "Late repositioning creates idle assets and delayed revenue for customers waiting on equipment.",
  },
  {
    icon: Zap,
    title: "Utilities",
    body: "When a response move slips, restoration crews lose time that should have gone to the field.",
  },
  {
    icon: Factory,
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
        eyebrow="MISSION · HOW WE OPERATE"
        title="We prevent downtime through disciplined execution."
        description="Bluport is built around a single operating principle: plan precisely, communicate clearly, and execute on time — so crews, fleets, utilities, and projects never sit waiting on a truck."
        image={siteImages.missionHero}
        imageAlt="Bluport operations team reviewing a route plan and dispatch board in a logistics command center"
        imagePosition="object-[center_40%]"
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
                src={siteImages.missionPortrait}
                alt="Bluport veteran operator standing beside a gooseneck trailer loaded with secured equipment at blue hour"
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
      <section className="relative overflow-hidden bg-[var(--navy-900)] py-20 text-white md:py-28">
        <div className="absolute inset-0 blueprint-grid opacity-[0.12]" aria-hidden />
        <div
          className="absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(229,127,67,0.1),transparent_70%)]"
          aria-hidden
        />
        <Container className="relative space-y-14">
          <Reveal className="mx-auto max-w-[680px] space-y-4 text-center">
            <p className="eyebrow text-[#e8a87c]">THE COST OF DOWNTIME</p>
            <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance">
              Schedule protection is the whole point.
            </h2>
            <p className="mx-auto max-w-[56ch] text-base leading-8 text-[var(--steel-300)] md:text-lg">
              Different sectors feel a late move differently — but the pattern is the same: idle
              assets, lost hours, and a team stuck waiting. We plan around that reality.
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {downtimeImpacts.map((impact, index) => (
              <Reveal
                key={impact.title}
                delay={index * 90}
                className="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-8 transition-colors hover:border-[rgba(229,127,67,0.45)] hover:bg-[rgba(255,255,255,0.05)]"
              >
                <span
                  className="pointer-events-none absolute -right-6 -top-8 font-mono text-[6rem] font-bold leading-none text-white/[0.04] transition-colors group-hover:text-[rgba(229,127,67,0.1)]"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(229,127,67,0.12)] text-[#e8a87c] transition-colors group-hover:bg-[rgba(229,127,67,0.18)]">
                  <impact.icon size={24} aria-hidden />
                </span>
                <p className="relative mt-6 text-xl font-semibold tracking-[-0.03em] text-white">
                  {impact.title}
                </p>
                <p className="relative mt-2.5 text-sm leading-7 text-[var(--steel-300)] md:text-base">
                  {impact.body}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mx-auto max-w-[760px]">
            <div className="flex items-center gap-4 rounded-2xl border-l-2 border-[#e57f43] bg-[rgba(229,127,67,0.08)] px-6 py-5">
              <p className="text-sm leading-7 text-[#f1d4bf] md:text-base">
                Every move we run is built to keep your people working — not waiting on a truck.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Operating model — communication & execution flow */}
      <section className="relative overflow-hidden bg-white py-20 text-slate-950 md:py-28">
        <Container className="relative">
          <Reveal className="mx-auto max-w-[680px] space-y-4 text-center">
            <p className="eyebrow justify-center text-sky-700">THE OPERATING MODEL</p>
            <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance text-slate-950">
              One flow, run the same way every time.
            </h2>
            <p className="mx-auto max-w-[58ch] text-base leading-8 text-slate-600 md:text-lg">
              Every Bluport move follows the same disciplined sequence — a closed loop from the first
              call to a signed proof of delivery, with communication running across each stage.
            </p>
          </Reveal>

          <div className="relative mt-16">
            {/* connecting rail (desktop) */}
            <span
              className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-[linear-gradient(90deg,transparent,rgba(47,116,189,0.35)_12%,rgba(47,116,189,0.35)_88%,transparent)] md:block"
              aria-hidden
            />
            <ol className="grid gap-y-10 md:grid-cols-5 md:gap-x-6">
              {operatingModel.map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <Reveal
                    as="li"
                    key={stage.title}
                    delay={index * 80}
                    className="relative flex flex-col items-center text-center md:px-2"
                  >
                    <span className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-200 bg-white text-sky-700 shadow-[0_10px_30px_rgba(15,23,42,0.1)]">
                      <Icon size={22} aria-hidden />
                    </span>
                    <span className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-sky-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-1.5 text-lg font-semibold tracking-[-0.02em] text-slate-950">
                      {stage.title}
                    </p>
                    <p className="mt-2 max-w-[26ch] text-sm leading-7 text-slate-600">{stage.body}</p>
                  </Reveal>
                );
              })}
            </ol>
          </div>

          <Reveal delay={120} className="mt-14">
            <div className="flex flex-col items-start gap-4 rounded-2xl border border-sky-200 bg-sky-50 px-6 py-5 sm:flex-row sm:items-center md:px-8">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-700 text-white">
                <Radio size={20} aria-hidden />
              </span>
              <p className="text-sm leading-7 text-slate-700 md:text-base">
                <span className="font-semibold text-slate-950">Communication is the connective tissue.</span>{" "}
                Proactive, jobsite-aware updates run across every stage — so the customer never has to
                chase status on the asset.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Operating standard */}
      <section className="relative overflow-hidden bg-[var(--navy-950)] py-20 text-white md:py-28">
        <div className="absolute inset-0 blueprint-grid opacity-[0.08]" aria-hidden />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
            <Reveal className="space-y-4 lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow">OPERATING STANDARD</p>
              <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance">
                Four moves we make on every job.
              </h2>
              <p className="max-w-[44ch] text-base leading-8 text-[var(--steel-300)] md:text-lg">
                The same disciplined sequence runs behind every load, from the first call to the
                signed proof of delivery.
              </p>
            </Reveal>

            <ol className="relative">
              <span
                className="absolute bottom-6 left-[1.4rem] top-6 w-px bg-[linear-gradient(180deg,rgba(91,159,216,0.5),rgba(91,159,216,0.08))]"
                aria-hidden
              />
              {operatingStandard.map((item, index) => (
                <Reveal
                  as="li"
                  key={item.title}
                  delay={index * 80}
                  className="relative flex gap-6 pb-10 last:pb-0"
                >
                  <span className="relative z-10 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[rgba(91,159,216,0.4)] bg-[var(--navy-950)] text-[var(--accent-light)]">
                    <item.icon size={20} aria-hidden />
                  </span>
                  <div className="pt-1">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--steel-400)]">
                      Step {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-1.5 text-lg font-semibold tracking-[-0.03em] text-white">
                      {item.title}
                    </p>
                    <p className="mt-2 max-w-[42ch] text-sm leading-7 text-[var(--steel-300)]">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Non-negotiables — light section for visual rhythm */}
      <section className="bg-white py-20 text-slate-950 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-16">
            <Reveal className="space-y-5 lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow text-sky-700">NON-NEGOTIABLES</p>
              <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance text-slate-950">
                The details we refuse to leave to chance.
              </h2>
              <p className="max-w-[48ch] text-base leading-8 text-slate-600 md:text-lg">
                When any one of these is missed, delays and uncertainty follow close behind. So we
                confirm every one of them before the truck rolls.
              </p>
              <div className="mt-2 inline-flex items-center gap-3 rounded-2xl border border-sky-200 bg-sky-50 px-5 py-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-700 text-white">
                  <ClipboardCheck size={20} aria-hidden />
                </span>
                <p className="text-sm font-semibold leading-snug tracking-[-0.01em] text-slate-800">
                  Confirmed up front — not discovered at the gate.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <ul className="grid gap-4 sm:grid-cols-2">
                {nonNegotiables.map((item, index) => (
                  <li
                    key={item.label}
                    className="group relative flex flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50/70 p-6 transition-colors hover:border-sky-300 hover:bg-white"
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                        <ShieldCheck size={18} aria-hidden />
                      </span>
                      <span className="font-mono text-sm font-bold text-slate-300 transition-colors group-hover:text-sky-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-2 text-base font-semibold tracking-[-0.01em] text-slate-950">
                      {item.label}
                    </p>
                    <p className="text-sm leading-7 text-slate-500">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
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
