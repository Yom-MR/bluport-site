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
        <Reveal className="max-w-[760px] space-y-5">
          <p className="eyebrow">WHY CUSTOMERS TRUST BLUPORT</p>
          <h2 className="section-title text-balance text-white">
            Confidence before the truck rolls.
          </h2>
          <p className="max-w-[60ch] text-base leading-[1.7] text-[#c8d2dd] md:text-lg">
            Equipment-dependent teams need to know who is handling the move and how it will be
            communicated. Our crews are built from the military community — and the data backs it up:
            veterans are statistically safer, more efficient operators across the roles this work
            demands.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
          {/* KPI readouts — clean numerals, no card chrome */}
          <Reveal className="grid grid-cols-2 gap-x-8 gap-y-10">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="border-l-2 border-[rgba(47,116,189,0.5)] pl-5">
                <p className="text-[clamp(2.2rem,4vw,3.1rem)] font-bold leading-none tracking-[-0.04em] text-white">
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
          </Reveal>

          {/* Differentiators — divided list, not boxes */}
          <Reveal delay={100} className="flex flex-col">
            <div className="flex items-center justify-between gap-4">
              <p className="technical-label">WHAT SETS THE STANDARD</p>
              <button
                type="button"
                data-request-capacity="true"
                className="group hidden items-center gap-1.5 text-sm font-semibold tracking-[0.04em] text-[var(--accent-light)] transition-colors hover:text-white sm:inline-flex"
              >
                Request capacity
                <ArrowUpRight
                  size={16}
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </div>
            <ul className="mt-4 divide-y divide-white/10 border-t border-white/10">
              {differentiators.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.title} className="group flex items-start gap-4 py-5">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[rgba(47,116,189,0.14)] text-[var(--accent-light)] transition-transform group-hover:-translate-y-0.5">
                      <Icon size={20} aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-[1.02rem] font-semibold leading-snug tracking-[-0.02em] text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-7 text-[#9fb1c4]">{item.body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
