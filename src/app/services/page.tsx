import type { Metadata } from "next";
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
import FeatureRows from "@/components/ui/FeatureRows";
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

const supportSteps = [
  {
    label: "01",
    title: "Intake",
    description: "Capture the asset, timing, access conditions, and operating constraints before planning starts.",
  },
  {
    label: "02",
    title: "Plan",
    description: "Match trailer, securement, timing, route, and communication to the actual move profile.",
  },
  {
    label: "03",
    title: "Dispatch",
    description: "Coordinate execution with field-aware updates and decision-making that protects the window.",
  },
  {
    label: "04",
    title: "Closeout",
    description: "Confirm delivery, close documentation, and complete the final customer handoff cleanly.",
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

      <section className="border-b border-[rgba(200,210,221,0.08)] bg-[var(--navy-950)] py-20 text-white md:py-24">
        <Container className="space-y-12">
          <Reveal className="max-w-[760px] space-y-5">
            <p className="technical-label">SERVICE LINES</p>
            <h2 className="text-[clamp(2.1rem,4.4vw,3.5rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-balance">
              Built to support real field operations.
            </h2>
            <p className="max-w-[58ch] text-base leading-8 text-[var(--steel-300)] md:text-lg">
              Bluport service lines are designed around timing, securement, customer communication,
              and the realities of live field work.
            </p>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-2">
            {serviceRows.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal
                  key={service.title}
                  id={service.anchor}
                  delay={(index % 2) * 90}
                  className="group flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-7 transition-all hover:-translate-y-1 hover:border-[rgba(47,116,189,0.5)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)] md:p-9 scroll-mt-24"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(47,116,189,0.16)] text-[var(--accent-light)] transition-colors group-hover:bg-[rgba(47,116,189,0.28)]">
                      <Icon size={22} aria-hidden />
                    </span>
                    <span className="font-mono text-sm text-[var(--steel-500)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--steel-300)] md:text-base">
                    {service.summary}
                  </p>

                  <dl className="mt-6 grid flex-1 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8">
                    {[
                      { k: "What it solves", v: service.solves },
                      { k: "Best fit", v: service.bestFit },
                      { k: "Operational benefit", v: service.benefit },
                    ].map((row) => (
                      <div key={row.k} className="bg-[rgba(5,11,22,0.55)] px-5 py-4">
                        <dt className="text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent-light)]">
                          {row.k}
                        </dt>
                        <dd className="mt-1 text-sm leading-7 text-[#dce6ee]">{row.v}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-6">
                    <Button
                      href="/#request-capacity"
                      variant="secondary"
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
        eyebrow="EXECUTION RHYTHM"
        title="How Bluport executes."
        description="Execution stays simple on purpose: understand the move, plan around constraints, dispatch clearly, and close the loop with documentation."
        variant="dark"
        layout="split"
      >
        <FeatureRows items={supportSteps} variant="dark" />
      </EditorialSection>

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
