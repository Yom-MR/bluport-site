import Link from "next/link";
import { ArrowRight, ClipboardList, Map, PackageCheck, Radio, Truck } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const phases = [
  {
    icon: ClipboardList,
    stage: "Request",
    detail: "Capture the move, the timing, and the site constraints before the truck rolls.",
  },
  {
    icon: Map,
    stage: "Plan",
    detail: "Match trailer, securement, route, and contacts to the actual load profile.",
  },
  {
    icon: Radio,
    stage: "Dispatch",
    detail: "Launch with proactive communication so field teams know what is happening.",
  },
  {
    icon: Truck,
    stage: "Deliver",
    detail: "Place the asset where the crew can keep working without a second delay.",
  },
  {
    icon: PackageCheck,
    stage: "Closeout",
    detail: "Confirm handoff, handle POD, and finish the record cleanly.",
  },
] as const;

export default function ExecutionTimeline() {
  return (
    <section className="section-pad bg-[var(--navy-900)] text-white">
      <Container className="space-y-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[62ch] space-y-4">
            <p className="eyebrow">EXECUTION MODEL</p>
            <h2 className="section-title max-w-[18ch] text-white">
              One disciplined flow from request to closeout.
            </h2>
            <p className="text-base leading-[1.7] text-[#c8d2dd] md:text-lg">
              Bluport keeps the process visible so customers understand the move at each stage
              instead of chasing updates after the fact.
            </p>
          </div>
          <Link
            href="/mission"
            className="group inline-flex items-center gap-2 self-start rounded-xl border border-[rgba(200,210,221,0.3)] px-5 py-3 text-xs font-semibold tracking-[0.12em] text-white uppercase transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-light)] lg:self-auto"
          >
            See the full mission model
            <ArrowRight size={15} aria-hidden className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="relative">
          {/* Connecting rail */}
          <div
            className="absolute left-0 right-0 top-[34px] hidden h-px bg-[linear-gradient(90deg,transparent,rgba(242,105,28,0.55)_12%,rgba(242,105,28,0.55)_88%,transparent)] lg:block"
            aria-hidden
          />
          <ol className="grid gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <Reveal as="li" key={phase.stage} delay={index * 110} className="relative">
                  <div className="relative mb-6 flex items-center gap-4 lg:block">
                    <span className="relative z-10 inline-flex h-[68px] w-[68px] items-center justify-center rounded-2xl border border-[rgba(242,105,28,0.4)] bg-[var(--navy-950)] text-[var(--accent-light)] shadow-[0_12px_30px_rgba(0,0,0,0.45)]">
                      <Icon size={26} aria-hidden />
                    </span>
                    <span className="font-mono text-xs font-bold tracking-[0.16em] text-[#7d92a8] lg:absolute lg:right-2 lg:top-2">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">{phase.stage}</h3>
                  <p className="mt-2.5 text-sm leading-7 text-[#9fb1c4]">{phase.detail}</p>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
