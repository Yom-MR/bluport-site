import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Briefcase,
  ClipboardCheck,
  Compass,
  Gauge,
  HeartHandshake,
  MapPin,
  Radio,
  ShieldCheck,
  Star,
  Target,
  Users,
  Wrench,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/ui/Reveal";
import { siteImages } from "@/data/siteImages";
import { CONTACT_CHANNELS } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Mission after service starts here. Bluport Logistics is a veteran-owned company built for veterans, transitioning service members, and military spouses. Explore driver, dispatch, and operations roles in Texas and the Gulf Coast.",
  keywords: [
    "veteran jobs logistics",
    "military spouse careers",
    "transitioning service member careers",
    "veteran-owned logistics employer",
    "driver jobs Houston veterans",
  ],
};

const hiringTracks = [
  {
    icon: ShieldCheck,
    tag: "Primary",
    title: "Military community",
    description:
      "Veterans, transitioning service members, reservists, guardsmen, and military spouses. This is where most of our hiring happens, and where your service experience maps directly to the work.",
    cta: "See the military track",
    href: "#military",
    image: siteImages.careersTrackMilitary,
    imageAlt: "U.S. Army veteran in OCP camouflage uniform standing at a Bluport logistics yard",
  },
  {
    icon: Briefcase,
    tag: "Selective",
    title: "Civilian professionals",
    description:
      "We also bring on a smaller number of exceptional civilian professionals. If you operate with discipline, accountability, and clear communication, there is a genuine path here for you as well.",
    cta: "See the civilian track",
    href: "#civilian",
    image: siteImages.careersTrackCivilian,
    imageAlt: "Civilian logistics professional in a high-visibility safety vest standing at an industrial truck yard",
  },
] as const;

const civilianTraits = [
  {
    icon: Gauge,
    title: "Bias for ownership",
    description: "You take a move from request to closeout without needing to be chased.",
  },
  {
    icon: Radio,
    title: "Clear communicator",
    description: "Concise, accurate updates — to customers, dispatch, and the field.",
  },
  {
    icon: ShieldCheck,
    title: "Safety-first habits",
    description: "Securement, compliance, and access discipline are non-negotiable for you.",
  },
  {
    icon: Star,
    title: "Track record",
    description: "Demonstrated reliability and performance in demanding, deadline-driven work.",
  },
] as const;

const whyVeteransThrive = [
  {
    icon: ShieldCheck,
    title: "A standard you already know",
    description:
      "Safety, accountability, and disciplined execution are not buzzwords here. They are how every move gets planned, dispatched, and closed out.",
  },
  {
    icon: Radio,
    title: "Clear communication, every move",
    description:
      "Concise updates, confirmed handoffs, and no guessing. The communication cadence will feel familiar from day one.",
  },
  {
    icon: Target,
    title: "Mission behind the work",
    description:
      "You are not hauling freight for the sake of it. You are protecting the schedule a crew, a plant, or a restoration team depends on.",
  },
  {
    icon: Users,
    title: "Led by people who served",
    description:
      "Veteran ownership means leadership understands the transition, respects the experience, and builds around it.",
  },
];

const skillsThatTransfer = [
  {
    icon: ClipboardCheck,
    military: "Mission planning & briefs",
    civilian: "Move planning, route prep, and pre-dispatch coordination.",
  },
  {
    icon: Wrench,
    military: "Equipment & maintenance discipline",
    civilian: "Securement standards, load checks, and asset readiness.",
  },
  {
    icon: Radio,
    military: "Comms & reporting",
    civilian: "Dispatch updates, customer communication, and closeout.",
  },
  {
    icon: Compass,
    military: "Logistics & convoy operations",
    civilian: "Field-aware execution across Texas and Gulf Coast corridors.",
  },
  {
    icon: ShieldCheck,
    military: "Safety & risk management",
    civilian: "Compliance, transit risk, and jobsite access discipline.",
  },
  {
    icon: Award,
    military: "Leadership & accountability",
    civilian: "Crew coordination, fleet support, and operations leadership.",
  },
];

const hrEmail = CONTACT_CHANNELS.hr.email;

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="CAREERS · VETERAN-OWNED"
        title="Built by veterans. Open to operators who hold the standard."
        description="Bluport is a veteran-owned logistics company. We hire heavily from the military community — veterans, transitioning service members, reservists, guardsmen, and military spouses — and we also bring on high-caliber civilian professionals who operate with the same discipline."
        image={siteImages.careersHero}
        imageAlt="Split composition showing a U.S. soldier in uniform on one side and the same person in civilian Bluport logistics gear on the other"
        imagePosition="object-[center_30%]"
        variant="dark"
      />

      {/* Two hiring tracks */}
      <section className="section-pad bg-[var(--navy-950)] text-white">
        <Container>
          <Reveal className="max-w-[760px] space-y-5">
            <p className="technical-label">TWO WAYS IN</p>
            <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance">
              One standard. Two paths to the team.
            </h2>
            <p className="max-w-[60ch] text-base leading-8 text-[var(--steel-300)] md:text-lg">
              The bar is the same for everyone: plan the move, communicate clearly, and close it out
              clean. How you got that bar — in uniform or in industry — is where the two tracks differ.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {hiringTracks.map((track, index) => (
              <Reveal
                key={track.title}
                delay={index * 90}
                className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[1.75rem] border border-[rgba(180,194,209,0.16)]"
              >
                <Image
                  src={track.image}
                  alt={track.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,22,0.25)_0%,rgba(5,11,22,0.55)_50%,rgba(5,11,22,0.95)_100%)]" />
                <div className="relative p-8 md:p-10">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(47,116,189,0.22)] text-[var(--accent-light)] backdrop-blur-sm">
                      <track.icon size={22} aria-hidden />
                    </span>
                    <span className="rounded-full border border-white/25 bg-[rgba(5,11,22,0.45)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#e5eef6] backdrop-blur-sm">
                      {track.tag}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                    {track.title}
                  </h3>
                  <p className="mt-3 max-w-[46ch] text-sm leading-8 text-[#cdd8e3] md:text-base">
                    {track.description}
                  </p>
                  <a
                    href={track.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-light)] transition-colors hover:text-white"
                  >
                    {track.cta}
                    <ArrowRight size={16} aria-hidden />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why veterans thrive */}
      <section id="military" className="section-pad bg-[var(--navy-900)] text-white scroll-mt-24">
        <Container>
          <Reveal className="max-w-[760px] space-y-5">
            <p className="technical-label text-[var(--accent-light)]">MILITARY TRACK</p>
            <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance">
              The discipline that made you effective in uniform is the discipline this work runs on.
            </h2>
            <p className="max-w-[58ch] text-base leading-8 text-[var(--steel-300)] md:text-lg">
              Field logistics rewards planning, communication, and accountability. Veterans walk in
              already fluent in all three.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-x-12 gap-y-2 md:grid-cols-2">
            {whyVeteransThrive.map((item) => (
              <Reveal
                key={item.title}
                className="flex items-start gap-4 border-b border-[rgba(180,194,209,0.14)] py-6"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[rgba(47,116,189,0.14)] text-[var(--accent-light)]">
                  <item.icon size={20} aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.03em]">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-7 text-[var(--steel-300)] md:text-base">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Military skills that transfer */}
      <section className="relative isolate overflow-hidden bg-[#eef2f8] py-20 text-slate-950 md:py-28">
        <div
          className="absolute -right-24 top-0 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(47,116,189,0.08),transparent_70%)]"
          aria-hidden
        />
        <Container className="relative">
          <Reveal className="max-w-[760px] space-y-5">
            <p className="technical-label text-sky-700">MILITARY SKILLS THAT TRANSFER</p>
            <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance text-slate-950">
              Your MOS already maps to this work.
            </h2>
            <p className="max-w-[58ch] text-base leading-8 text-slate-600 md:text-lg">
              You do not need a logistics background to belong here. The skills you built in service
              translate directly to how Bluport plans, executes, and closes out every move.
            </p>
          </Reveal>

          <Reveal delay={90} className="mt-12 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_22px_55px_rgba(15,23,42,0.08)]">
            <div className="hidden grid-cols-[1fr_auto_1.2fr] items-center gap-4 border-b border-slate-200 bg-slate-50 px-6 py-4 sm:grid md:px-8">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
                In service
              </p>
              <span aria-hidden />
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-sky-700">
                At Bluport
              </p>
            </div>
            <ul className="divide-y divide-slate-200">
              {skillsThatTransfer.map((item) => (
                <li
                  key={item.military}
                  className="grid gap-3 px-6 py-5 transition-colors hover:bg-slate-50 sm:grid-cols-[1fr_auto_1.2fr] sm:items-center sm:gap-4 md:px-8"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                      <item.icon size={18} aria-hidden />
                    </span>
                    <p className="text-sm font-semibold tracking-[-0.01em] text-slate-950 md:text-base">
                      {item.military}
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    aria-hidden
                    className="ml-[3.25rem] rotate-90 text-sky-600 sm:ml-0 sm:rotate-0"
                  />
                  <p className="ml-[3.25rem] text-sm leading-7 text-slate-600 sm:ml-0">
                    {item.civilian}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Spouses + transitioning service members */}
      <section className="section-pad bg-[var(--navy-900)] text-white">
        <Container>
          <div className="grid gap-4 lg:grid-cols-2">
            <Reveal className="flex flex-col rounded-[1.75rem] border border-[rgba(180,194,209,0.16)] bg-[rgba(255,255,255,0.03)] p-8 md:p-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(47,116,189,0.14)] text-[var(--accent-light)]">
                <HeartHandshake size={22} aria-hidden />
              </span>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                Military spouse opportunities
              </h3>
              <p className="mt-4 text-sm leading-8 text-[var(--steel-300)] md:text-base">
                Frequent moves should not cost you a career. Bluport builds roles with portability and
                flexibility in mind, from dispatch and coordination to operations support, so military
                spouses can keep building professionally wherever orders take the family.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[var(--steel-200)] md:text-base">
                {[
                  "Roles that value reliability over rigid location",
                  "Remote-friendly coordination and support paths",
                  "Experience that carries to the next duty station",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <ShieldCheck size={18} aria-hidden className="mt-1 shrink-0 text-[var(--accent)]" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal
              delay={90}
              className="flex flex-col rounded-[1.75rem] border border-[rgba(180,194,209,0.16)] bg-[rgba(255,255,255,0.03)] p-8 md:p-10"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(61,130,196,0.16)] text-[var(--blue-300)]">
                <Compass size={22} aria-hidden />
              </span>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                Transitioning service members
              </h3>
              <p className="mt-4 text-sm leading-8 text-[var(--steel-300)] md:text-base">
                Still in uniform and planning your next step? Start the conversation early. We will help
                you map your experience to a Bluport role and line up the transition so your first day
                out is not your first day figuring it out.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[var(--steel-200)] md:text-base">
                {[
                  "Skill translation from MOS to role",
                  "Early-conversation planning before separation",
                  "SkillBridge and transition program friendly",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <ShieldCheck size={18} aria-hidden className="mt-1 shrink-0 text-[var(--blue-300)]" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Civilian track */}
      <section id="civilian" className="section-pad bg-[#eef2f8] text-slate-950 scroll-mt-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
            <Reveal className="space-y-6">
              <p className="technical-label text-sky-700">CIVILIAN TRACK</p>
              <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance text-slate-950">
                Not a veteran? You can still earn a seat.
              </h2>
              <p className="max-w-[58ch] text-base leading-8 text-slate-600 md:text-lg">
                The majority of our hiring comes from the military community, but we also bring on a
                smaller number of exceptional civilian professionals every year. If you operate with
                discipline, communicate clearly, and take ownership of outcomes, the door is open.
              </p>
              <div className="rounded-2xl border border-sky-200 bg-sky-50 px-5 py-4">
                <p className="text-sm font-semibold leading-snug text-slate-700">
                  Civilian hires are selective and merit-based. We hire for standard and fit, not to
                  fill seats — so strong candidates always get a real look.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100} className="space-y-4">
              <p className="technical-label text-sky-700">WHAT WE LOOK FOR</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {civilianTraits.map((trait) => (
                  <div
                    key={trait.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_3px_rgba(15,23,42,0.06)] transition-colors hover:border-sky-300"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                      <trait.icon size={18} aria-hidden />
                    </span>
                    <p className="mt-4 text-base font-semibold tracking-[-0.02em] text-slate-950">{trait.title}</p>
                    <p className="mt-1.5 text-sm leading-7 text-slate-600">{trait.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Team banner — military initiative */}
      <section className="relative isolate overflow-hidden bg-[var(--navy-950)] py-24 text-white md:py-32">
        <div className="absolute inset-0 blueprint-grid opacity-[0.14]" aria-hidden />
        <div
          className="absolute -left-24 top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(47,116,189,0.16),transparent_70%)]"
          aria-hidden
        />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
            <Reveal className="space-y-6">
              <p className="technical-label text-[var(--accent-light)]">A TEAM THAT SERVED</p>
              <h2 className="text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1] tracking-[-0.05em] text-balance">
                Built by people who held the line. Now we hold the standard.
              </h2>
              <p className="max-w-[58ch] text-base leading-8 text-[#dce6ee] md:text-lg">
                Bluport is staffed by a team that is over 82% military — veterans, active duty,
                spouses, and family. We hire from the community we come from because that discipline is
                exactly what this work demands.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { value: "82%", label: "Military-staffed team" },
                  { value: "Veteran-owned", label: "Leadership that served" },
                  { value: "Spouse & family", label: "Hiring built for the community" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/12 bg-[rgba(255,255,255,0.03)] px-5 py-4"
                  >
                    <p className="text-xl font-bold tracking-[-0.03em] text-white">{stat.value}</p>
                    <p className="mt-1 text-[0.78rem] font-medium uppercase tracking-[0.1em] text-[var(--steel-300)]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal
              delay={120}
              className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/12 shadow-[0_30px_80px_rgba(0,0,0,0.5)] sm:aspect-[4/3] lg:aspect-[4/5]"
            >
              <Image
                src={siteImages.careersTeam}
                alt="A diverse Bluport crew coordinating a dispatch plan beside a hotshot truck and trailer"
                fill
                className="object-cover object-[center_35%]"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(5,11,22,0.65)_100%)]" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-pad bg-[var(--navy-950)] text-white">
        <Container>
          <Reveal className="flex flex-col items-start gap-6 rounded-[2rem] border border-[rgba(180,194,209,0.16)] bg-[rgba(255,255,255,0.03)] p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div className="max-w-[620px] space-y-4">
              <p className="technical-label">START THE CONVERSATION</p>
              <h2 className="text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1] tracking-[-0.04em] text-balance">
                Ready to put your experience back to work?
              </h2>
              <p className="text-sm leading-8 text-[var(--steel-300)] md:text-base">
                Reach out to our team. Tell us where you served, what you did, and what you want next.
                We will take it from there.
              </p>
              <p className="flex items-center gap-2 text-sm text-[var(--steel-400)]">
                <MapPin size={16} aria-hidden className="text-[var(--accent)]" />
                Houston, TX · Texas &amp; Gulf Coast
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Button href={`mailto:${hrEmail}`}>Contact recruiting</Button>
              <Button href="/#request-capacity" variant="secondary">
                Request capacity
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
