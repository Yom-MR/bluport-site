import {
  Boxes,
  Building2,
  Cpu,
  Factory,
  MapPin,
  PackageCheck,
  Radio,
  Truck,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import CoverageMap from "@/components/sections/CoverageMap";

const capabilityItems = [
  {
    icon: Truck,
    label: "Construction & rental fleets",
    note: "Excavators, skid steers, attachments, light towers, and generators between yards and jobsites.",
  },
  {
    icon: Radio,
    label: "Utilities & infrastructure",
    note: "Transformers, switchgear, cable reels, poles, and crew support for outage-sensitive work.",
  },
  {
    icon: Cpu,
    label: "Data center equipment",
    note: "Backup generators, switchgear lineups, and cooling units delivered to the build sequence.",
  },
  {
    icon: Factory,
    label: "Industrial & manufacturing",
    note: "Motors, pumps, tooling, and turnaround assets staged to the shutdown window.",
  },
  {
    icon: Boxes,
    label: "Containers & project freight",
    note: "Shipping containers, prefab assemblies, and schedule-driven loads on gooseneck decks.",
  },
  {
    icon: Building2,
    label: "Government & response assets",
    note: "Mobile power, deployable equipment, and staging gear for time-critical public missions.",
  },
] as const;

const constraintRows = [
  {
    step: "01",
    title: "Access",
    body: "Gate instructions, site contacts, yard details, and loading constraints are confirmed before dispatch.",
  },
  {
    step: "02",
    title: "Asset fit",
    body: "Asset type, dimensions, weight, and trailer requirements shape the movement plan.",
  },
  {
    step: "03",
    title: "Timing",
    body: "Pickup windows, delivery windows, and schedule pressure are aligned before the truck rolls.",
  },
  {
    step: "04",
    title: "Closeout",
    body: "Delivery confirmation, POD handling, and follow-up keep the operation accountable.",
  },
] as const;

export default function CapabilitySplit() {
  return (
    <section className="relative overflow-hidden bg-[var(--navy-950)] py-20 text-white md:py-28">
      <div className="absolute inset-0 blueprint-grid opacity-[0.18]" aria-hidden />
      <div
        className="absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(47,116,189,0.16),transparent_70%)]"
        aria-hidden
      />
      <Container className="relative space-y-14">
        <Reveal className="max-w-[760px] space-y-5">
          <p className="eyebrow">CAPABILITY</p>
          <h2 className="text-[clamp(2.1rem,4.6vw,3.5rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance">
            Practical movement for time-sensitive assets.
          </h2>
          <p className="max-w-[60ch] text-base leading-8 text-[var(--steel-300)] md:text-lg">
            Bluport is built for equipment-heavy moves with field consequences, where the asset, the
            access, and the schedule all have to line up before a truck ever leaves the yard.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8">
          {/* Coverage map card */}
          <Reveal className="flex flex-col rounded-[2rem] border border-white/10 bg-[rgba(5,11,22,0.55)] p-7 md:p-9">
            <div className="flex items-center gap-2.5">
              <MapPin size={18} aria-hidden className="text-[var(--accent-light)]" />
              <p className="technical-label">SERVICE COVERAGE</p>
            </div>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white md:text-[1.7rem]">
              Houston-based. Built for the lanes the work actually runs on.
            </h3>
            <p className="mt-3 max-w-[48ch] text-sm leading-7 text-[var(--steel-300)]">
              Primary lanes run across Texas, extended coverage spans the Gulf Coast, and project
              freight reaches nationwide when the move calls for it.
            </p>
            <div className="mt-7 flex-1">
              <CoverageMap layout="panel" />
            </div>
          </Reveal>

          {/* What Bluport moves */}
          <Reveal delay={110} className="flex flex-col rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-7 md:p-9">
            <div className="flex items-center gap-2.5">
              <PackageCheck size={18} aria-hidden className="text-[var(--accent-light)]" />
              <p className="technical-label">WHAT BLUPORT MOVES</p>
            </div>
            <p className="mt-3 max-w-[52ch] text-sm leading-7 text-[var(--steel-300)]">
              Equipment-heavy freight for the sectors we serve — matched to the right trailer,
              securement, and delivery window before dispatch.
            </p>
            <div className="mt-6 grid flex-1 auto-rows-fr gap-3">
              {capabilityItems.map((item) => (
                <div
                  key={item.label}
                  className="group flex items-start gap-3.5 rounded-2xl border border-white/8 bg-[rgba(255,255,255,0.02)] p-4 transition-colors hover:border-[rgba(47,116,189,0.5)]"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(47,116,189,0.16)] text-[var(--accent-light)] transition-colors group-hover:bg-[rgba(47,116,189,0.28)]">
                    <item.icon size={18} aria-hidden />
                  </span>
                  <div>
                    <p className="text-[1.02rem] font-semibold tracking-[-0.01em] text-white">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-[0.82rem] leading-snug text-[var(--steel-400)]">
                      {item.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Constraint workflow */}
        <Reveal delay={80} className="rounded-[2rem] border border-white/10 bg-[linear-gradient(140deg,rgba(47,116,189,0.08),rgba(255,255,255,0.02)_55%)] p-7 md:p-10">
          <div className="flex flex-col gap-3 border-b border-white/10 pb-7 md:flex-row md:items-end md:justify-between">
            <h3 className="max-w-[20ch] text-[clamp(1.6rem,2.6vw,2.2rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-balance">
              Built around the details that delay jobs.
            </h3>
            <p className="technical-label shrink-0">FROM REQUEST TO CLOSEOUT</p>
          </div>
          <div className="mt-7 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
            {constraintRows.map((item) => (
              <div
                key={item.title}
                className="bg-[rgba(5,11,22,0.55)] p-6 transition-colors hover:bg-[rgba(47,116,189,0.1)]"
              >
                <span className="font-mono text-sm text-[var(--accent-light)]">{item.step}</span>
                <p className="mt-3 text-lg font-semibold tracking-[-0.02em] text-white">
                  {item.title}
                </p>
                <p className="mt-2.5 text-sm leading-relaxed text-[var(--steel-300)]">{item.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
