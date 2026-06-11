import {
  Boxes,
  ClipboardCheck,
  Layers,
  MapPin,
  PackageCheck,
  Truck,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { siteImages } from "@/data/siteImages";

const capabilityItems = [
  { icon: Wrench, label: "Equipment", note: "Machines, skids, and powered units" },
  { icon: Layers, label: "Attachments", note: "Buckets, booms, and implements" },
  { icon: Truck, label: "Trailers", note: "Gooseneck, tilt, and flat decks" },
  { icon: Boxes, label: "Utility assets", note: "Poles, pipe, and field material" },
  { icon: PackageCheck, label: "Field-support materials", note: "Crew and jobsite supply" },
  { icon: ClipboardCheck, label: "Project-critical freight", note: "Schedule-driven loads" },
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
          {/* Image card with overlaid proof */}
          <Reveal className="group relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)] lg:min-h-[560px]">
            <Image
              src={siteImages.equipmentRealLoad}
              alt="Bluport truck hauling a loaded gooseneck trailer at a Texas yard"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              sizes="(max-width: 1024px) 100vw, 52vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,22,0.18)_0%,rgba(5,11,22,0.55)_52%,rgba(5,11,22,0.94)_100%)]" />

            <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[rgba(5,11,22,0.55)] px-3.5 py-1.5 backdrop-blur-md">
              <MapPin size={14} aria-hidden className="text-[var(--accent-light)]" />
              <span className="text-xs font-semibold tracking-[0.06em] text-[#e7eef6]">
                Houston, TX &amp; Gulf Coast
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                Equipment-heavy moves with field consequences.
              </h3>
              <div className="mt-6 grid grid-cols-3 gap-4 border-t border-white/15 pt-6">
                {[
                  { value: "Same-day", label: "Dispatch capability" },
                  { value: "1:1", label: "Load-level planning" },
                  { value: "100%", label: "POD on delivery" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold tracking-[-0.04em] text-white md:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-[var(--steel-300)]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* What Bluport moves */}
          <Reveal delay={110} className="flex flex-col rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-7 md:p-9">
            <p className="technical-label">WHAT BLUPORT MOVES</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
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
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-12">
            <h3 className="max-w-[18ch] text-[clamp(1.6rem,2.6vw,2.2rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-balance">
              Built around the details that delay jobs.
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {constraintRows.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[rgba(5,11,22,0.4)] p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-[var(--accent-light)]">{item.step}</span>
                    <span className="text-lg font-semibold tracking-[-0.02em] text-white">
                      {item.title}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--steel-300)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
