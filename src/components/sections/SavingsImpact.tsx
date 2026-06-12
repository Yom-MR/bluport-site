import { Clock, DollarSign, Factory, Zap } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const impacts = [
  {
    icon: DollarSign,
    stat: "$260K",
    unit: "/ hour",
    sector: "Industrial & manufacturing",
    body: "Unplanned downtime in process manufacturing is widely estimated to run into the hundreds of thousands per hour. A late support move can put an entire turnaround window at risk.",
  },
  {
    icon: Zap,
    stat: "$150K+",
    unit: "/ event",
    sector: "Utilities & infrastructure",
    body: "Missed outage windows push restoration into overtime and penalty exposure. Sequenced delivery keeps high-priority assets landing first.",
  },
  {
    icon: Factory,
    stat: "Lost rental days",
    unit: "per delay",
    sector: "Construction & rental",
    body: "Every machine sitting in the wrong yard is a billable day gone and a crew on standby. On-time repositioning protects fleet utilization.",
  },
  {
    icon: Clock,
    stat: "5–9%",
    unit: "of capacity",
    sector: "Data center builds",
    body: "Critical-path slips ripple across every trade. Delivering to the build sequence protects the schedule the whole project runs on.",
  },
] as const;

export default function SavingsImpact() {
  return (
    <section className="relative overflow-hidden bg-[var(--navy-900)] py-20 text-white md:py-28">
      <div className="absolute inset-0 blueprint-grid opacity-[0.12]" aria-hidden />
      <Container className="relative">
        <Reveal className="ml-auto max-w-[760px] space-y-5 text-right">
          <p className="eyebrow justify-end">THE COST OF A LATE MOVE</p>
          <h2 className="text-[clamp(2.1rem,4.6vw,3.4rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance">
            Downtime is the expensive part — not the freight.
          </h2>
          <p className="ml-auto max-w-[60ch] text-base leading-8 text-[var(--steel-300)] md:text-lg">
            Across the sectors we serve, the real cost of a delayed asset shows up downstream: idle
            crews, blown windows, and lost production. The figures below are industry estimates that
            frame what disciplined logistics protects.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impacts.map((item, index) => (
            <Reveal
              key={item.sector}
              delay={index * 80}
              className="flex flex-col rounded-[1.5rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 transition-colors hover:border-[rgba(47,116,189,0.5)]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(47,116,189,0.16)] text-[var(--accent-light)]">
                <item.icon size={20} aria-hidden />
              </span>
              <p className="mt-6 text-[clamp(1.9rem,3vw,2.5rem)] font-bold leading-none tracking-[-0.04em] text-white">
                {item.stat}
                <span className="ml-1 text-sm font-semibold text-[var(--steel-400)]">
                  {item.unit}
                </span>
              </p>
              <p className="mt-3 text-sm font-semibold tracking-[-0.01em] text-[var(--accent-light)]">
                {item.sector}
              </p>
              <p className="mt-2 text-[0.84rem] leading-7 text-[var(--steel-300)]">{item.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 text-right text-xs leading-6 text-[var(--steel-500)]">
            Figures are general industry estimates for illustrative purposes and vary by operation.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
