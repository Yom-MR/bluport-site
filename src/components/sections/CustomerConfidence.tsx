import Link from "next/link";
import { ArrowUpRight, BadgeCheck, MessageSquare, ShieldCheck, Star } from "lucide-react";
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

const differentiators = [
  {
    icon: Star,
    title: "Veteran-owned operating discipline",
    body: "Mission planning, accountability, and after-action rigor applied to every move.",
  },
  {
    icon: ShieldCheck,
    title: "TWIC-ready, secure-site crews",
    body: "Cleared personnel for port-adjacent, industrial, and controlled-access work.",
  },
  {
    icon: BadgeCheck,
    title: "Insurance & compliance built in",
    body: "Coverage and securement standards are part of the process, not an afterthought.",
  },
  {
    icon: MessageSquare,
    title: "Communication that cuts follow-up",
    body: "Proactive, jobsite-aware updates so you stop chasing status on the asset.",
  },
] as const;

export default function CustomerConfidence() {
  return (
    <section className="section-pad bg-[var(--navy-950)] text-white">
      <Container>
        <Reveal className="mx-auto max-w-[760px] space-y-5 text-center">
          <p className="eyebrow justify-center">WHY CUSTOMERS TRUST BLUPORT</p>
          <h2 className="section-title text-balance text-white">
            Confidence before the truck rolls.
          </h2>
          <p className="mx-auto max-w-[60ch] text-base leading-[1.7] text-[#c8d2dd] md:text-lg">
            Equipment-dependent teams need to know who is handling the move and how it will be
            communicated. Our crews are built from the military community — and the data backs it up:
            veterans are statistically safer, more efficient operators across the roles this work
            demands.
          </p>
        </Reveal>

        {/* Unified dashboard panel */}
        <Reveal
          delay={80}
          className="mt-12 overflow-hidden rounded-[1.75rem] border border-[rgba(200,210,221,0.16)] bg-[rgba(8,17,31,0.6)] shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
        >
          {/* Panel header */}
          <div className="flex items-center justify-between gap-4 border-b border-[rgba(200,210,221,0.14)] bg-[rgba(255,255,255,0.02)] px-6 py-4 md:px-8">
            <div className="flex items-center gap-2.5">
              <span className="flex gap-1.5" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[rgba(200,210,221,0.3)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[rgba(200,210,221,0.3)]" />
              </span>
              <p className="technical-label">OPERATING SNAPSHOT</p>
            </div>
            <Link
              href="/#request-capacity"
              className="group hidden items-center gap-1.5 text-sm font-semibold tracking-[0.04em] text-[var(--accent-light)] transition-colors hover:text-white sm:inline-flex"
            >
              Request capacity
              <ArrowUpRight
                size={16}
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* KPI readouts */}
          <div className="grid grid-cols-2 gap-px bg-[rgba(200,210,221,0.12)] lg:grid-cols-4">
            {kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="bg-[linear-gradient(160deg,rgba(47,116,189,0.1),rgba(8,17,31,0.6))] px-6 py-7 md:px-7"
              >
                <p className="text-[clamp(2rem,3.6vw,2.75rem)] font-bold leading-none tracking-[-0.04em] text-white">
                  {kpi.value}
                </p>
                <p className="mt-3 text-sm font-semibold tracking-[-0.01em] text-[var(--accent-light)]">
                  {kpi.label}
                </p>
                <p className="mt-1.5 text-[0.8rem] leading-snug text-[var(--steel-400)]">
                  {kpi.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Differentiator rows */}
          <div className="grid gap-px border-t border-[rgba(200,210,221,0.14)] bg-[rgba(200,210,221,0.1)] sm:grid-cols-2">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group flex items-start gap-4 bg-[var(--navy-950)] px-6 py-6 transition-colors hover:bg-[var(--navy-900)] md:px-8"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[rgba(47,116,189,0.14)] text-[var(--accent-light)] transition-transform group-hover:-translate-y-0.5">
                    <Icon size={20} aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-[1.02rem] font-semibold leading-snug tracking-[-0.02em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#9fb1c4]">{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
