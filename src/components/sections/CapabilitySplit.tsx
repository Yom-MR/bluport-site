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
    <section className="relative overflow-hidden bg-white py-20 text-slate-950 md:py-28">
      <Container className="relative space-y-14">
        <Reveal className="max-w-[760px] space-y-5">
          <p className="eyebrow text-sky-700">CAPABILITY</p>
          <h2 className="text-[clamp(2.1rem,4.6vw,3.5rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance text-slate-950">
            Practical movement for time-sensitive assets.
          </h2>
          <p className="max-w-[60ch] text-base leading-8 text-slate-600 md:text-lg">
            Bluport is built for equipment-heavy moves with real field consequences — where the
            asset, the site access, and the schedule all have to line up before a truck ever leaves
            the yard.
          </p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-12">
          {/* Coverage map — dark feature panel for depth against the white section */}
          <Reveal className="flex flex-col rounded-[2rem] bg-[var(--navy-950)] p-7 text-white shadow-[0_30px_70px_rgba(15,23,42,0.18)] md:p-9">
            <div className="flex items-center gap-2.5">
              <MapPin size={18} aria-hidden className="text-[var(--accent-light)]" />
              <p className="technical-label">SERVICE COVERAGE</p>
            </div>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white md:text-[1.7rem]">
              Texas terminals, built for the lanes the work actually runs on.
            </h3>
            <p className="mt-3 max-w-[48ch] text-sm leading-7 text-[var(--steel-300)]">
              We dispatch from our Houston headquarters and our Dallas terminal, run primary lanes
              throughout Texas, extend across the Gulf Coast, and reach nationwide when a move calls
              for it.
            </p>
            <div className="mt-7 flex-1">
              <CoverageMap layout="panel" />
            </div>
          </Reveal>

          {/* What Bluport moves — clean divided list, not nested cards */}
          <Reveal delay={110} className="lg:pt-2">
            <div className="flex items-center gap-2.5">
              <PackageCheck size={18} aria-hidden className="text-sky-700" />
              <p className="technical-label text-sky-700">WHAT BLUPORT MOVES</p>
            </div>
            <p className="mt-3 max-w-[52ch] text-base leading-7 text-slate-600">
              Equipment-heavy freight for the sectors we serve, matched to the right trailer,
              securement, and delivery window before dispatch.
            </p>
            <ul className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
              {capabilityItems.map((item) => (
                <li key={item.label} className="group flex items-start gap-4 py-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700 transition-colors group-hover:bg-sky-100">
                    <item.icon size={18} aria-hidden />
                  </span>
                  <div>
                    <p className="text-[1.02rem] font-semibold tracking-[-0.01em] text-slate-950">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-[0.85rem] leading-snug text-slate-500">{item.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Constraint workflow — light, inline sequence */}
        <Reveal delay={80} className="border-t border-slate-200 pt-12">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h3 className="max-w-[22ch] text-[clamp(1.6rem,2.6vw,2.2rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-balance text-slate-950">
              Built around the details that delay jobs.
            </h3>
            <p className="technical-label shrink-0 text-sky-700">FROM REQUEST TO CLOSEOUT</p>
          </div>
          <div className="mt-9 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {constraintRows.map((item) => (
              <div key={item.title} className="relative pl-5">
                <span className="absolute left-0 top-1 h-full w-px bg-sky-200" aria-hidden />
                <span className="font-mono text-sm text-sky-700">{item.step}</span>
                <p className="mt-2 text-lg font-semibold tracking-[-0.02em] text-slate-950">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
