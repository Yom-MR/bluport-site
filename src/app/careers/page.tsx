import type { Metadata } from "next";
import {
  Award,
  ClipboardCheck,
  Compass,
  HeartHandshake,
  MapPin,
  Quote,
  Radio,
  ShieldCheck,
  Target,
  Truck,
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

const openPaths = [
  {
    title: "CDL / Non-CDL Drivers",
    description:
      "Drivers who value securement standards, disciplined communication, and reliable field execution.",
  },
  {
    title: "Owner Operators",
    description:
      "Independent operators who want consistent coordination and professional customer expectations.",
  },
  {
    title: "Dispatchers",
    description:
      "People who translate move requirements into clean communication and decisive execution support.",
  },
  {
    title: "Operations Coordinators",
    description:
      "Team members who keep intake, planning, documentation, and closeout aligned under real deadlines.",
  },
  {
    title: "Logistics Brokers",
    description:
      "Operators who understand customer pressure, lane risk, and execution quality over noise.",
  },
  {
    title: "Fleet / Driver Managers",
    description:
      "Leaders who reinforce readiness, accountability, and driver support across the operating model.",
  },
];

const hrEmail = CONTACT_CHANNELS.hr.email;

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="CAREERS · VETERAN-OWNED"
        title="Mission after service starts here."
        description="Bluport is a veteran-owned logistics company built for the people who already operate to a standard: veterans, transitioning service members, reservists, guardsmen, and military spouses."
        image={siteImages.careersHero}
        imageAlt="Professional field operations environment for logistics careers"
        imagePosition="object-[center_48%]"
        variant="dark"
      />

      {/* Why veterans thrive */}
      <section className="section-pad bg-[var(--navy-900)] text-white">
        <Container>
          <Reveal className="max-w-[760px] space-y-5">
            <p className="technical-label">WHY VETERANS THRIVE AT BLUPORT</p>
            <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance">
              The discipline that made you effective in uniform is the discipline this work runs on.
            </h2>
            <p className="max-w-[58ch] text-base leading-8 text-[var(--steel-300)] md:text-lg">
              Field logistics rewards planning, communication, and accountability. Veterans walk in
              already fluent in all three.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {whyVeteransThrive.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 70}
                className="group rounded-[1.5rem] border border-[rgba(180,194,209,0.16)] bg-[rgba(255,255,255,0.03)] p-7 transition-colors hover:border-[var(--accent)]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(47,116,189,0.14)] text-[var(--accent-light)]">
                  <item.icon size={22} aria-hidden />
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--steel-300)] md:text-base">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Military skills that transfer */}
      <section className="section-pad bg-[var(--navy-950)] text-white">
        <Container>
          <Reveal className="max-w-[760px] space-y-5">
            <p className="technical-label">MILITARY SKILLS THAT TRANSFER</p>
            <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance">
              Your MOS already maps to this work.
            </h2>
            <p className="max-w-[58ch] text-base leading-8 text-[var(--steel-300)] md:text-lg">
              You do not need a logistics background to belong here. The skills you built in service
              translate directly to how Bluport operates.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skillsThatTransfer.map((item, index) => (
              <Reveal
                key={item.military}
                delay={index * 60}
                className="flex flex-col gap-4 rounded-2xl border border-[rgba(180,194,209,0.14)] bg-[rgba(255,255,255,0.03)] p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(61,130,196,0.16)] text-[var(--blue-300)]">
                  <item.icon size={20} aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent-light)]">
                    In service
                  </p>
                  <p className="mt-1 text-lg font-semibold tracking-[-0.03em]">{item.military}</p>
                </div>
                <div className="border-t border-[rgba(180,194,209,0.14)] pt-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--steel-400)]">
                    At Bluport
                  </p>
                  <p className="mt-1 text-sm leading-7 text-[var(--steel-300)]">{item.civilian}</p>
                </div>
              </Reveal>
            ))}
          </div>
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

      {/* Open paths */}
      <section className="section-pad bg-[var(--navy-950)] text-white">
        <Container>
          <Reveal className="max-w-[760px] space-y-5">
            <p className="technical-label">OPEN PATHS</p>
            <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance">
              Roles that shape the Bluport operating model.
            </h2>
            <p className="max-w-[58ch] text-base leading-8 text-[var(--steel-300)] md:text-lg">
              Driver, owner operator, dispatch, and operations leadership roles are central to how
              Bluport is building long-term capability across Texas and the Gulf Coast.
            </p>
          </Reveal>

          <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-[rgba(180,194,209,0.16)]">
            {openPaths.map((role, index) => (
              <Reveal
                key={role.title}
                delay={index * 50}
                className="grid gap-3 border-b border-[rgba(180,194,209,0.12)] bg-[rgba(255,255,255,0.02)] px-6 py-6 last:border-b-0 md:grid-cols-[64px_minmax(0,260px)_minmax(0,1fr)] md:items-center md:gap-8 md:px-8"
              >
                <span className="font-mono text-sm text-[var(--accent-light)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-3">
                  <Truck size={18} aria-hidden className="shrink-0 text-[var(--steel-400)]" />
                  <h3 className="text-lg font-semibold tracking-[-0.03em]">{role.title}</h3>
                </div>
                <p className="text-sm leading-7 text-[var(--steel-300)] md:text-base">
                  {role.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Success story placeholder */}
      <section className="section-pad bg-[var(--navy-900)] text-white">
        <Container>
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-[rgba(180,194,209,0.16)] bg-[linear-gradient(135deg,rgba(47,116,189,0.1),transparent_55%)] p-8 md:p-14">
            <div className="absolute inset-0 blueprint-grid opacity-40" aria-hidden />
            <div className="relative max-w-[720px]">
              <Quote size={40} aria-hidden className="text-[var(--accent)]" />
              <p className="mt-6 text-[clamp(1.4rem,2.6vw,2.1rem)] font-semibold leading-[1.25] tracking-[-0.03em] text-balance">
                &ldquo;Veteran success story coming soon. We are building a team of people who served
                and are proud to share their path from the military to the field.&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(255,255,255,0.06)] text-[var(--steel-300)]">
                  <Award size={20} aria-hidden />
                </span>
                <div>
                  <p className="font-semibold">Your story here</p>
                  <p className="text-sm text-[var(--steel-400)]">Veteran · Bluport operations</p>
                </div>
              </div>
            </div>
          </Reveal>
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
