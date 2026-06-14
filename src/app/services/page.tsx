import type { Metadata } from "next";
import Image from "next/image";
import {
  Layers3,
  Lightbulb,
  PackageCheck,
  Truck,
  Warehouse,
  Zap,
} from "lucide-react";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import EditorialSection from "@/components/ui/EditorialSection";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { siteImages } from "@/data/siteImages";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Bluport Logistics services including equipment transportation, rapid response logistics, dedicated capacity, project logistics, storage and staging, and consulting support.",
  keywords: [
    "equipment transportation services",
    "rapid response logistics",
    "dedicated capacity logistics",
    "project logistics support",
  ],
};

const serviceRows = [
  {
    anchor: "equipment-transportation",
    icon: Truck,
    title: "Equipment Transportation",
    summary:
      "Hotshot movement for machines, attachments, trailers, and jobsite assets where timing, securement, and site access matter.",
    solves: "Prevents equipment misalignment that stalls crews and creates schedule drift.",
    bestFit: "Equipment repositioning, customer delivery windows, and rental fleet transitions.",
    benefit: "Trailer fit, securement planning, and communication are aligned before the move starts.",
  },
  {
    anchor: "rapid-response-logistics",
    icon: Zap,
    title: "Rapid Response Logistics",
    summary:
      "Support for urgent moves, replacement equipment, outage-related movement, and schedule recovery when delays create operational cost.",
    solves: "Closes urgent movement gaps when delays threaten restoration, uptime, or crew productivity.",
    bestFit: "Outage support, emergency replacement assets, and timeline recovery moves.",
    benefit: "Faster move planning with field-aware communication under compressed timelines.",
  },
  {
    anchor: "dedicated-capacity",
    icon: PackageCheck,
    title: "Dedicated Capacity",
    summary:
      "Reserved truck and trailer support for recurring routes, rental fleet coverage, and customers who need more predictability than spot-market availability.",
    solves: "Reduces sourcing uncertainty for teams that cannot run operations around spot-market swings.",
    bestFit: "Recurring lanes, scheduled project work, and repeat rental fleet commitments.",
    benefit: "Higher planning confidence with steadier dispatch control and clearer expectations.",
  },
  {
    anchor: "project-logistics",
    icon: Layers3,
    title: "Project Logistics",
    summary:
      "Coordinated movement for phased schedules, hard delivery windows, multi-stop work, and equipment sequencing across active jobs.",
    solves: "Prevents sequencing misses that disrupt project handoffs and downstream trades.",
    bestFit: "Infrastructure, industrial, and data center programs with hard dependencies.",
    benefit: "Improved schedule protection through move planning tied to project context.",
  },
  {
    anchor: "storage-staging",
    icon: Warehouse,
    title: "Storage & Staging",
    summary:
      "Support for timed releases, yard transitions, and site-readiness coordination when equipment cannot arrive too early or too late.",
    solves: "Avoids congestion and idle assets caused by poorly timed deliveries.",
    bestFit: "Staging transitions, site-readiness dependencies, and controlled delivery windows.",
    benefit: "Cleaner handoffs between storage, dispatch, and field teams.",
  },
  {
    anchor: "logistics-consulting",
    icon: Lightbulb,
    title: "Logistics Consulting",
    summary:
      "Practical planning for movement workflows, communication cadence, lane setup, and dispatch standards as operations grow.",
    solves: "Closes process gaps that cause repeat friction in planning and execution.",
    bestFit: "Teams standardizing movement workflows or scaling logistics operations.",
    benefit: "Better operating discipline before complexity turns into avoidable cost.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="SERVICES"
        title="Specialized logistics for equipment-driven operations."
        description="Bluport supports the movement that keeps field teams productive: equipment transport, urgent repositioning, dedicated capacity, project logistics, staging, and operational planning."
        image={siteImages.servicesHero}
        imageAlt="Trailer loading and securement readiness in an industrial yard"
        imagePosition="object-[center_62%]"
        variant="dark"
      >
        <div className="flex flex-wrap gap-2">
          {serviceRows.map((service) => (
            <a
              key={service.anchor}
              href={`#${service.anchor}`}
              className="rounded-full border border-[rgba(200,210,221,0.2)] bg-[rgba(255,255,255,0.05)] px-3 py-2 text-[11px] font-semibold tracking-[0.12em] text-[#e5eef6] uppercase transition-colors hover:border-[var(--cyan)] hover:text-[var(--cyan)]"
            >
              {service.title}
            </a>
          ))}
        </div>
      </PageHero>

      <section className="relative overflow-hidden border-b border-slate-200 bg-[#f4f7fb] py-20 text-slate-950 md:py-24">
        {/* faint field-operations texture */}
        <Image
          src={siteImages.capabilityTexture}
          alt=""
          aria-hidden
          fill
          className="pointer-events-none object-cover opacity-[0.12] [mask-image:linear-gradient(180deg,transparent,black_25%,black_85%,transparent)]"
          sizes="100vw"
        />
        <div
          className="absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(47,116,189,0.08),transparent_70%)]"
          aria-hidden
        />
        <Container className="relative space-y-12">
          <Reveal className="max-w-[760px] space-y-5">
            <p className="technical-label text-sky-700">SERVICE LINES</p>
            <h2 className="text-[clamp(2.1rem,4.4vw,3.5rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-balance text-slate-950">
              Built to support real field operations.
            </h2>
            <p className="max-w-[58ch] text-base leading-8 text-slate-600 md:text-lg">
              Bluport service lines are designed around timing, securement, customer communication,
              and the realities of live field work.
            </p>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {serviceRows.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal
                  key={service.title}
                  id={service.anchor}
                  delay={(index % 3) * 90}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[var(--navy-900)] p-6 text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(91,159,216,0.5)] hover:shadow-[0_28px_70px_rgba(15,23,42,0.3)] scroll-mt-24"
                >
                  <span
                    className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,var(--accent),rgba(47,116,189,0.15))]"
                    aria-hidden
                  />
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(91,159,216,0.16)] text-[var(--accent-light)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-white">
                      <Icon size={20} aria-hidden />
                    </span>
                    <span className="font-mono text-xs text-[var(--steel-400)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-7 text-[var(--steel-300)]">
                    {service.summary}
                  </p>

                  <dl className="mt-5 flex-1 space-y-3 border-t border-white/10 pt-5">
                    {[
                      { k: "Solves", v: service.solves },
                      { k: "Best fit", v: service.bestFit },
                      { k: "Benefit", v: service.benefit },
                    ].map((row) => (
                      <div key={row.k} className="flex gap-3">
                        <dt className="w-16 shrink-0 pt-0.5 text-[0.64rem] font-semibold uppercase tracking-[0.1em] text-[var(--accent-light)]">
                          {row.k}
                        </dt>
                        <dd className="text-[0.82rem] leading-6 text-[var(--steel-300)]">{row.v}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-6">
                    <Button
                      href="/#request-capacity"
                      variant="primary"
                      className="w-full text-[11px] tracking-[0.12em]"
                    >
                      Request Quote
                    </Button>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <EditorialSection
        eyebrow="REQUEST CAPACITY"
        title="Need a move planned?"
        description="Better request details create better moves. Bluport operations can scope faster when asset, route, timing, and constraints are clear upfront."
        variant="light"
        layout="stack"
        className="border-b-0"
      >
        <Button href="/#request-capacity">Request Capacity</Button>
      </EditorialSection>
    </>
  );
}
