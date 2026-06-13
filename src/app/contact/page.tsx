import type { Metadata } from "next";
import { ClipboardList, MapPin, Phone, Radio } from "lucide-react";
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
      <section className="relative section-pad bg-[var(--navy-900)] text-white">
        {/* gradient transition blending the dark hero into the operations section */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,var(--navy-950)_0%,transparent_100%)]"
          aria-hidden
        />
        <Container className="relative">
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

          <div className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <Reveal className="flex flex-col gap-6 rounded-[1.75rem] border border-[rgba(180,194,209,0.16)] bg-[rgba(255,255,255,0.03)] p-8">
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

      {/* Contact prep */}
      <section className="section-pad bg-[#eef2f8] text-slate-950">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <Reveal className="space-y-6 lg:sticky lg:top-28">
              <p className="technical-label text-sky-700">CONTACT PREP</p>
              <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance text-slate-950">
                Have these ready and we move faster.
              </h2>
              <p className="max-w-[52ch] text-base leading-8 text-slate-600 md:text-lg">
                Providing these details upfront helps operations scope the move accurately and
                respond faster.
              </p>
              <div className="flex items-start gap-3 rounded-2xl border border-sky-200 bg-white px-5 py-4 shadow-[0_1px_3px_rgba(15,23,42,0.06)]">
                <ClipboardList size={20} aria-hidden className="mt-0.5 shrink-0 text-sky-600" />
                <p className="text-sm leading-7 text-slate-700">
                  No detail yet? Call anyway — operations will help you scope it on the spot.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {prepDetails.map((item, index) => (
                  <li
                    key={item}
                    className="group flex items-start gap-3.5 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_3px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.1)]"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-100 font-mono text-sm font-bold text-sky-700 transition-colors group-hover:bg-sky-700 group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="pt-1 text-[0.95rem] font-medium leading-6 text-slate-800">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
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
