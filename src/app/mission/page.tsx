import type { Metadata } from "next";
import Image from "next/image";
import {
  CheckCircle2,
  Compass,
  HardHat,
  PhoneIncoming,
  Radio,
  Route,
  Send,
  ShieldCheck,
  Target,
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
        imageAlt="Bluport veteran logistics operator reviewing a move plan beside a Ford Super Duty and loaded gooseneck trailer at golden hour"
        imagePosition="object-[center_35%]"
        variant="dark"
      />

      {/* Operating model — communication & execution flow */}
      <section className="relative overflow-hidden bg-white py-20 text-slate-950 md:py-28">
        {/* gradient transition blending the dark hero into the light section */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,var(--navy-950)_0%,transparent_100%)]"
          aria-hidden
        />
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

      {/* Mission statement + portrait */}
      <section className="relative overflow-hidden bg-[var(--navy-950)] py-20 text-white md:py-28">
        <div className="absolute inset-0 blueprint-grid opacity-[0.14]" aria-hidden />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
            <Reveal className="space-y-7">
              <div className="space-y-6">
                <p className="eyebrow">WHO WE ARE</p>
                <h2 className="text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1] tracking-[-0.05em] text-balance">
                  Built by veterans to run the moves others treat as routine.
                </h2>
                <p className="text-base leading-8 text-[var(--steel-300)] md:text-lg">
                  Bluport brings military planning, accountability, and after-action rigor to
                  field logistics. The way we operate is not a marketing line — it is the standard
                  our team carried in uniform, applied to every load we move.
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

      {/* CTA */}
      <section className="bg-[var(--navy-950)] py-20 text-white md:py-28">
        <Container>
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-sky-200 bg-[linear-gradient(135deg,#ffffff,#eef4fb_60%)] p-8 shadow-[0_30px_80px_rgba(5,11,22,0.45)] md:p-14">
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(47,116,189,0.12),transparent_70%)]"
              aria-hidden
            />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-[620px] space-y-4">
                <p className="technical-label text-sky-700">REQUEST CAPACITY</p>
                <h2 className="text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1] tracking-[-0.04em] text-balance text-slate-950">
                  When the move matters, the process matters.
                </h2>
                <p className="text-sm leading-8 text-slate-600 md:text-base">
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
