import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Cpu,
  Factory,
  MapPin,
  Radio,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import CoverageMap from "@/components/sections/CoverageMap";
import Reveal from "@/components/ui/Reveal";
import { INDUSTRY_ENTRIES } from "@/data/industries";
import { siteImages } from "@/data/siteImages";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "See the industries Bluport supports, including construction and equipment rental, utilities and infrastructure, data center construction, industrial operations, and emergency response.",
  keywords: [
    "construction logistics",
    "equipment rental transport",
    "utility infrastructure logistics",
    "industrial logistics support",
  ],
};

const industryIcons: Record<string, typeof Truck> = {
  "construction-equipment-rental": Truck,
  "utilities-infrastructure": Radio,
  "data-center-construction": Cpu,
  "industrial-manufacturing": Factory,
  "aerospace-defense": ShieldCheck,
  "government-emergency-response": Building2,
};

const coverageNotes = [
  "Texas-first service area with Gulf Coast reach",
  "Primary support for Houston, Dallas, Austin, San Antonio, and regional corridors",
  "Field-aware execution for project sites, yards, plants, and response locations",
] as const;

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="INDUSTRIES"
        title="Industries we serve."
        description="Bluport supports sectors where equipment timing affects crews, production, restoration, and project delivery."
        image={siteImages.industriesHero}
        imageAlt="Critical infrastructure and industrial operations environment"
        imagePosition="object-[center_64%]"
        variant="dark"
      />

      {/* Industry cards */}
      <section className="relative overflow-hidden bg-[#eef2f8] py-20 text-slate-950 md:py-28">
        {/* faint industrial blueprint texture correlating to the sectors served */}
        <Image
          src={siteImages.industriesFitTexture}
          alt=""
          aria-hidden
          fill
          className="pointer-events-none object-cover opacity-[0.1] [mask-image:linear-gradient(180deg,transparent,black_18%,black_88%,transparent)]"
          sizes="100vw"
        />
        {/* gradient transition blending the dark hero into the light section */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,var(--navy-950)_0%,transparent_100%)]"
          aria-hidden
        />
        <Container className="relative space-y-12">
          <Reveal className="max-w-[720px] space-y-4">
            <p className="eyebrow text-sky-700">INDUSTRY FIT</p>
            <h2 className="text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance text-slate-950">
              Click into the sector that matches your operation.
            </h2>
            <p className="text-base leading-8 text-slate-600 md:text-lg">
              Each page shows the friction points, the Bluport response, and the operating results
              the sector cares about most.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {INDUSTRY_ENTRIES.map((item, index) => {
              const Icon = industryIcons[item.slug] ?? Truck;
              return (
                <Reveal key={item.slug} delay={index * 70}>
                  <Link
                    href={`/industries/${item.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[var(--navy-950)] shadow-[0_10px_30px_rgba(15,23,42,0.1)] ring-1 ring-transparent transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(47,116,189,0.6)] hover:shadow-[0_32px_70px_rgba(15,23,42,0.28)] hover:ring-[rgba(47,116,189,0.45)]"
                  >
                    {/* Top: industry image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.07]"
                        sizes="(min-width: 1280px) 28vw, (min-width: 768px) 44vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,22,0.05)_0%,rgba(5,11,22,0.25)_60%,rgba(5,11,22,0.7)_100%)]" />
                      <span className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-[rgba(5,11,22,0.55)] text-[var(--accent-light)] backdrop-blur-md transition-colors group-hover:bg-[rgba(47,116,189,0.45)]">
                        <Icon size={20} aria-hidden />
                      </span>
                      <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-[rgba(5,11,22,0.55)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#e7eef6] backdrop-blur-md">
                        {item.statValue}
                      </span>
                    </div>

                    {/* Bottom: dark navy overlay panel */}
                    <div className="relative flex flex-1 flex-col border-t border-white/10 p-6">
                      <span
                        className="absolute inset-x-0 top-0 h-px scale-x-0 bg-[var(--accent-light)] opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-80"
                        aria-hidden
                      />
                      <h3 className="text-xl font-semibold tracking-[-0.03em] text-white transition-colors group-hover:text-[var(--accent-light)] md:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-7 text-[var(--steel-300)]">
                        {item.summary}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-light)]">
                        View sector
                        <ArrowRight
                          size={16}
                          aria-hidden
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Coverage */}
      <section className="relative overflow-hidden bg-[var(--navy-950)] py-20 text-white md:py-28">
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <Reveal className="space-y-5">
              <p className="eyebrow">SERVICE COVERAGE</p>
              <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1] tracking-[-0.05em] text-balance">
                Texas and Gulf Coast coverage built for field operations.
              </h2>
              <p className="max-w-[52ch] text-base leading-8 text-[var(--steel-300)] md:text-lg">
                Bluport runs the corridors where projects are actually happening, with dispatch tuned
                to timing and site access rather than generic, one-size-fits-all lanes.
              </p>
              <ul className="space-y-3 pt-1">
                {coverageNotes.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <MapPin
                      size={18}
                      aria-hidden
                      className="mt-1 shrink-0 text-[var(--accent-light)]"
                    />
                    <p className="text-[0.98rem] leading-7 text-[#dce6ee]">{item}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <CoverageMap layout="panel" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[var(--navy-900)] py-20 text-white md:py-24">
        <Container>
          <Reveal className="flex flex-col items-start gap-6 rounded-[2rem] border border-white/12 bg-[linear-gradient(135deg,rgba(47,116,189,0.12),rgba(255,255,255,0.02)_60%)] p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div className="max-w-[640px] space-y-4">
              <p className="technical-label">REQUEST CAPACITY</p>
              <h2 className="text-[clamp(1.8rem,3.6vw,2.8rem)] font-semibold leading-[1] tracking-[-0.04em] text-balance">
                Tell us what the operation needs to move.
              </h2>
              <p className="text-sm leading-8 text-[var(--steel-300)] md:text-base">
                Share the asset, the site, and the window. Bluport scopes the move around your
                sector&apos;s constraints and confirms a plan before dispatch.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Button href="/#request-capacity" withArrow>
                Request capacity
              </Button>
              <Button href="/contact" variant="secondary">
                Speak with operations
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
