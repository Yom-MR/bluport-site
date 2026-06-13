import type { Metadata } from "next";
import Image from "next/image";
import { ClipboardList, MapPin, Phone, Radio, UserRoundCheck, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import ContactChannels from "@/components/sections/ContactChannels";
import Reveal from "@/components/ui/Reveal";
import { siteImages } from "@/data/siteImages";
import {
  BLUPORT_BASE_DISPLAY,
  BLUPORT_PHONE_DISPLAY,
  BLUPORT_PHONE_E164,
} from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Bluport Logistics operations for urgent equipment movement, dedicated capacity, project logistics support, and mission-critical field transport planning.",
  keywords: [
    "contact Bluport logistics",
    "Houston logistics contact",
    "request equipment transport quote",
    "mission-critical logistics intake",
  ],
};

const industryLiaisons = [
  "Construction",
  "Equipment Rental",
  "Utilities",
  "Industrial",
  "Data Centers",
  "Government",
] as const;

const prepDetails = [
  "Pickup and delivery locations",
  "Requested pickup/delivery dates",
  "Asset type",
  "Dimensions/weight",
  "Site access constraints",
  "Urgency level",
  "Preferred contact method",
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title="Talk to Bluport operations."
        description="Use the right channel for the request so Bluport can route it quickly and keep your move on schedule."
        image={siteImages.contactHero}
        imageAlt="Bluport dispatcher coordinating routes and schedules in an operations room"
        imagePosition="object-[center_35%]"
        variant="dark"
      />

      {/* Command channels */}
      <section className="section-pad bg-[var(--navy-900)] text-white">
        <Container>
          <Reveal className="max-w-[760px] space-y-5">
            <p className="technical-label">OPERATIONS CONTACT</p>
            <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance">
              Command channel details.
            </h2>
            <p className="max-w-[58ch] text-base leading-8 text-[var(--steel-300)] md:text-lg">
              Use these points of contact for urgent intake, scheduling discussions, and operating
              coordination.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <Reveal className="flex flex-col gap-6 rounded-[1.75rem] border border-[rgba(180,194,209,0.16)] bg-[rgba(255,255,255,0.03)] p-8 md:p-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(47,116,189,0.14)] text-[var(--accent-light)]">
                <Radio size={22} aria-hidden />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent-light)]">
                  Operational contact
                </p>
                <a
                  href={`tel:${BLUPORT_PHONE_E164}`}
                  className="mt-3 flex items-center gap-2.5 text-2xl font-semibold tracking-[-0.03em] transition-colors hover:text-[var(--accent-light)]"
                >
                  <Phone size={20} aria-hidden className="text-[var(--accent)]" />
                  {BLUPORT_PHONE_DISPLAY}
                </a>
                <p className="mt-4 flex items-center gap-2.5 text-base text-[var(--steel-200)]">
                  <MapPin size={18} aria-hidden className="text-[var(--accent)]" />
                  {BLUPORT_BASE_DISPLAY}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--steel-400)]">
                  Mission intake and move planning
                </p>
              </div>
            </Reveal>

            <Reveal delay={60}>
              <ContactChannels />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Dedicated support structure */}
      <section className="relative overflow-hidden bg-[var(--navy-950)] py-20 text-white md:py-28">
        <div className="absolute inset-0 blueprint-grid opacity-[0.08]" aria-hidden />
        <div
          className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(47,116,189,0.16),transparent_70%)]"
          aria-hidden
        />
        <Container className="relative">
          <Reveal className="max-w-[720px] space-y-5">
            <p className="technical-label text-[var(--accent-light)]">DEDICATED SUPPORT STRUCTURE</p>
            <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance">
              Support built around your operation — not a ticket queue.
            </h2>
            <p className="max-w-[58ch] text-base leading-8 text-[var(--steel-300)] md:text-lg">
              Active customers work with people who know their operation. Two roles keep
              communication aligned with how you actually run.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <Reveal className="group flex flex-col rounded-[1.75rem] border border-[rgba(180,194,209,0.16)] bg-[rgba(255,255,255,0.03)] p-8 transition-colors hover:border-[rgba(47,116,189,0.5)] md:p-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(47,116,189,0.14)] text-[var(--accent-light)] ring-1 ring-inset ring-white/10">
                <UserRoundCheck size={22} aria-hidden />
              </span>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] md:text-[1.7rem]">
                Dedicated account representatives
              </h3>
              <p className="mt-4 text-sm leading-8 text-[var(--steel-300)] md:text-base">
                Every active customer receives a dedicated point of contact who understands their
                operation, priorities, and scheduling requirements — so coordination is fast and
                nothing gets lost in translation.
              </p>
            </Reveal>

            <Reveal
              delay={90}
              className="group flex flex-col rounded-[1.75rem] border border-[rgba(180,194,209,0.16)] bg-[rgba(255,255,255,0.03)] p-8 transition-colors hover:border-[rgba(47,116,189,0.5)] md:p-10"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(61,130,196,0.16)] text-[var(--blue-300)] ring-1 ring-inset ring-white/10">
                <Users size={22} aria-hidden />
              </span>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] md:text-[1.7rem]">
                Industry liaisons
              </h3>
              <p className="mt-4 text-sm leading-8 text-[var(--steel-300)] md:text-base">
                Bluport assigns personnel familiar with your industry so communication is aligned with
                your operational environment.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {industryLiaisons.map((sector) => (
                  <li
                    key={sector}
                    className="rounded-full border border-white/12 bg-[rgba(255,255,255,0.04)] px-3.5 py-1.5 text-xs font-semibold tracking-[0.02em] text-[#cdd8e3]"
                  >
                    {sector}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Contact prep */}
      <section className="section-pad bg-[#eef2f8] text-slate-950">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal className="space-y-8">
              <div className="space-y-5">
                <p className="technical-label text-sky-700">CONTACT PREP</p>
                <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance text-slate-950">
                  Before you contact us, helpful details include:
                </h2>
                <p className="max-w-[52ch] text-base leading-8 text-slate-600 md:text-lg">
                  Providing these details upfront helps operations scope the move accurately and
                  respond faster.
                </p>
              </div>
              <ul className="space-y-3.5 border-t border-slate-200 pt-6">
                {prepDetails.map((item, index) => (
                  <Reveal
                    as="li"
                    key={item}
                    delay={index * 40}
                    className="flex items-center gap-3 text-base text-slate-700"
                  >
                    <ClipboardList size={17} aria-hidden className="shrink-0 text-sky-600" />
                    <span className="leading-7">{item}</span>
                  </Reveal>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120} className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-slate-200 shadow-[0_30px_80px_rgba(15,23,42,0.18)] lg:sticky lg:top-28">
              <Image
                src={siteImages.contactReady}
                alt="A loaded Bluport F-350 and gooseneck trailer staged and ready to depart"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(5,11,22,0.85)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                <p className="technical-label text-[var(--accent-light)]">STAGED &amp; CONFIRMED</p>
                <p className="mt-2 max-w-[24ch] text-xl font-semibold tracking-[-0.02em] md:text-2xl">
                  Give us the details and we plan the move before the truck rolls.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-pad bg-[var(--navy-900)] text-white">
        <Container>
          <Reveal className="flex flex-col items-start gap-6 rounded-[2rem] border border-[rgba(180,194,209,0.16)] bg-[rgba(255,255,255,0.03)] p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div className="max-w-[620px] space-y-4">
              <p className="technical-label">REQUEST CAPACITY</p>
              <h2 className="text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1] tracking-[-0.04em] text-balance">
                Need to submit move details?
              </h2>
              <p className="text-sm leading-8 text-[var(--steel-300)] md:text-base">
                Open the capacity request form and include asset, route, timing, and site constraints
                for faster intake.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Button href="/#request-capacity" withArrow>
                Request capacity
              </Button>
              <Button href={`tel:${BLUPORT_PHONE_E164}`} variant="secondary">
                Call operations
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
