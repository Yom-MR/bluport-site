import type { Metadata } from "next";
import { ClipboardList, Mail, MapPin, Phone, Radio } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/ui/Reveal";
import { siteImages } from "@/data/siteImages";
import {
  BLUPORT_BASE_DISPLAY,
  BLUPORT_PHONE_DISPLAY,
  BLUPORT_PHONE_E164,
  CONTACT_CHANNEL_LIST,
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
        imageAlt="Dispatch planning and route coordination context"
        imagePosition="object-[center_52%]"
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
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(242,105,28,0.14)] text-[var(--accent-light)]">
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

            <div className="grid gap-x-8 gap-y-px overflow-hidden rounded-[1.75rem] border border-[rgba(180,194,209,0.16)] bg-[rgba(255,255,255,0.03)] sm:grid-cols-2">
              {CONTACT_CHANNEL_LIST.map((channel, index) => (
                <Reveal
                  key={channel.email}
                  delay={index * 50}
                  className="flex flex-col gap-2 border-b border-[rgba(180,194,209,0.12)] p-6 sm:[&:nth-last-child(-n+1)]:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"
                >
                  <p className="flex items-center gap-2.5 text-base font-semibold tracking-[-0.02em]">
                    <Mail size={17} aria-hidden className="text-[var(--accent)]" />
                    <a
                      href={`mailto:${channel.email}`}
                      className="underline-offset-2 transition-colors hover:text-[var(--accent-light)] hover:underline"
                    >
                      {channel.email}
                    </a>
                  </p>
                  <p className="text-sm leading-7 text-[var(--steel-300)]">{channel.purpose}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Contact prep */}
      <section className="section-pad bg-[var(--navy-950)] text-white">
        <Container>
          <Reveal className="max-w-[760px] space-y-5">
            <p className="technical-label">CONTACT PREP</p>
            <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance">
              Before you contact us, helpful details include:
            </h2>
            <p className="max-w-[58ch] text-base leading-8 text-[var(--steel-300)] md:text-lg">
              Providing these details upfront helps operations scope the move accurately and respond
              faster.
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {prepDetails.map((item, index) => (
              <Reveal
                as="li"
                key={item}
                delay={index * 50}
                className="flex items-start gap-3 rounded-2xl border border-[rgba(180,194,209,0.14)] bg-[rgba(255,255,255,0.03)] p-5"
              >
                <ClipboardList size={18} aria-hidden className="mt-0.5 shrink-0 text-[var(--accent)]" />
                <span className="text-sm leading-7 text-[var(--steel-200)] md:text-base">{item}</span>
              </Reveal>
            ))}
          </ul>
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
