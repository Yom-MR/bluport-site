import type { Metadata } from "next";
import { ClipboardList, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import LoadPlanDiagram from "@/components/sections/LoadPlanDiagram";
import ContactMessageBox from "@/components/sections/ContactMessageBox";
import Reveal from "@/components/ui/Reveal";
import { siteImages } from "@/data/siteImages";
import { BLUPORT_PHONE_DISPLAY, BLUPORT_PHONE_E164 } from "@/lib/contact";

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

      {/* Contact prep — load plan */}
      <section className="relative section-pad bg-[#eef2f8] text-slate-950">
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <Reveal className="space-y-6">
              <p className="technical-label text-sky-700">CONTACT PREP</p>
              <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance text-slate-950">
                Every detail comes together to form the load plan.
              </h2>
              <p className="max-w-[52ch] text-base leading-8 text-slate-600 md:text-lg">
                The more of these you can share upfront, the faster operations scopes the move and
                builds an accurate load plan before the truck rolls.
              </p>
              <div className="flex items-start gap-3 rounded-2xl border border-sky-200 bg-white px-5 py-4 shadow-[0_1px_3px_rgba(15,23,42,0.06)]">
                <ClipboardList size={20} aria-hidden className="mt-0.5 shrink-0 text-sky-600" />
                <p className="text-sm leading-7 text-slate-700">
                  Don&apos;t have every detail yet? Send a message below — operations will help you
                  scope it.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <LoadPlanDiagram />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Send a message */}
      <section className="section-pad bg-white text-slate-950">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-16">
            <Reveal className="space-y-5 lg:sticky lg:top-28">
              <p className="technical-label text-sky-700">DIRECT LINE</p>
              <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance text-slate-950">
                Reach the desk that can actually move it.
              </h2>
              <p className="max-w-[52ch] text-base leading-8 text-slate-600 md:text-lg">
                Pick a department and your note lands with the people who own that work — booking,
                billing, compliance, or recruiting. No shared inbox, no forwarding chain, no waiting
                on someone to pass it along.
              </p>
              <p className="flex items-center gap-2 text-sm text-slate-600">
                <Phone size={16} aria-hidden className="text-sky-600" />
                Prefer to call?{" "}
                <a
                  href={`tel:${BLUPORT_PHONE_E164}`}
                  className="font-semibold text-slate-900 transition-colors hover:text-sky-700"
                >
                  {BLUPORT_PHONE_DISPLAY}
                </a>
              </p>
            </Reveal>

            <Reveal delay={120}>
              <ContactMessageBox />
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
