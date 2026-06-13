import { CalendarClock, Medal, Users, UserRoundCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const kpis = [
  {
    value: "82%",
    label: "Military-staffed team",
    detail: "Veterans, active duty, spouses, and family",
  },
  {
    value: "100%",
    label: "POD on delivery",
    detail: "Documented proof at every handoff",
  },
  {
    value: "Same-day",
    label: "Dispatch capability",
    detail: "When the schedule can't wait",
  },
  {
    value: "1:1",
    label: "Load-level planning",
    detail: "Every move planned before dispatch",
  },
] as const;

const pillars = [
  {
    icon: Medal,
    title: "Veteran-owned leadership",
    body: "Veteran leadership influences how Bluport plans, communicates, executes, and follows through. Operational discipline is embedded into every shipment.",
  },
  {
    icon: UserRoundCheck,
    title: "Dedicated account representatives",
    body: "Customers receive a dedicated point of contact who understands their operation, scheduling priorities, and equipment requirements.",
  },
  {
    icon: Users,
    title: "Industry liaisons",
    body: "Personnel familiar with specific industries and operational environments — construction, equipment rental, utilities, industrial operations, data centers, and government support.",
  },
  {
    icon: CalendarClock,
    title: "Schedule protection focus",
    body: "Customers do not buy transportation. They buy uptime. Bluport exists to keep equipment where it needs to be so projects stay on schedule.",
  },
] as const;

export default function CustomerConfidence() {
  return (
    <section className="relative overflow-hidden bg-[var(--navy-950)] py-20 text-white md:py-28">
      <div className="absolute inset-0 blueprint-grid opacity-[0.08]" aria-hidden />
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(47,116,189,0.16),transparent_70%)]"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.78fr)] lg:items-end lg:gap-16">
          <Reveal className="max-w-[640px] space-y-5">
            <p className="eyebrow">WHY CUSTOMERS TRUST BLUPORT</p>
            <h2 className="section-title text-balance text-white">
              Why Bluport instead of another carrier.
            </h2>
            <p className="max-w-[60ch] text-base leading-[1.7] text-[#c8d2dd] md:text-lg">
              The difference is not the truck — it is the operation behind it. Veteran-led discipline,
              dedicated points of contact, and a relentless focus on uptime are built into how every
              move gets planned and run.
            </p>
          </Reveal>

          {/* KPI readouts — quick operational proof, no card chrome */}
          <Reveal
            delay={100}
            className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-white/10 pt-8 lg:border-t-0 lg:pt-0"
          >
            {kpis.map((kpi) => (
              <div key={kpi.label} className="border-l-2 border-[rgba(47,116,189,0.5)] pl-4">
                <p className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-none tracking-[-0.04em] text-white">
                  {kpi.value}
                </p>
                <p className="mt-2.5 text-[0.82rem] font-semibold tracking-[-0.01em] text-[var(--accent-light)]">
                  {kpi.label}
                </p>
                <p className="mt-1 text-[0.74rem] leading-snug text-[var(--steel-400)]">
                  {kpi.detail}
                </p>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Four pillars — connected dashboard panel, not floating cards */}
        <Reveal delay={120} className="mt-14">
          <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.02)] shadow-[0_40px_90px_rgba(2,8,18,0.45)] sm:grid-cols-2">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isLeftColumn = index % 2 === 0;
              const isTopRow = index < 2;
              return (
                <div
                  key={pillar.title}
                  className={[
                    "group relative flex flex-col gap-5 p-8 transition-colors duration-300 hover:bg-[rgba(47,116,189,0.07)] md:p-10",
                    "border-white/10",
                    isTopRow ? "border-b" : "",
                    isLeftColumn ? "sm:border-r" : "",
                    !isTopRow ? "border-t sm:border-t-0" : "",
                  ].join(" ")}
                >
                  <span
                    className="pointer-events-none absolute right-7 top-7 font-mono text-sm font-semibold text-white/15 transition-colors group-hover:text-[var(--accent-light)]"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(47,116,189,0.14)] text-[var(--accent-light)] ring-1 ring-inset ring-white/10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:bg-[rgba(47,116,189,0.22)]">
                    <Icon size={24} aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-white md:text-[1.4rem]">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 max-w-[46ch] text-sm leading-7 text-[#9fb1c4] md:text-[0.95rem]">
                      {pillar.body}
                    </p>
                  </div>
                  <span
                    className="mt-auto h-px w-12 bg-[var(--accent-light)] opacity-40 transition-all duration-300 group-hover:w-20 group-hover:opacity-100"
                    aria-hidden
                  />
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
