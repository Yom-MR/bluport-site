import {
  ArrowUpRight,
  ClipboardCheck,
  FileCheck2,
  Layers,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { siteImages } from "@/data/siteImages";

const operationalProof = [
  {
    icon: Layers,
    label: "Power tilt deck",
    value: "Ground-level loading — no ramp required for most equipment moves.",
  },
  {
    icon: ShieldCheck,
    label: "Securement plan",
    value: "Chain and binder setup documented per load before the truck rolls.",
  },
  {
    icon: MapPin,
    label: "Site confirmation",
    value: "Gate details, contacts, and access conditions verified before dispatch.",
  },
  {
    icon: FileCheck2,
    label: "Closeout protocol",
    value: "POD signed at delivery; follow-up complete before the job closes.",
  },
] as const;

const platformSpecs = [
  { label: "Primary truck", value: "Ford F-350" },
  { label: "Trailer", value: "40' power tilt" },
  { label: "Base", value: "Houston, TX" },
] as const;

export default function FleetShowcase() {
  return (
    <section className="relative overflow-hidden bg-[var(--navy-900)] py-20 text-white md:py-28">
      <div
        className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(47,116,189,0.14),transparent_70%)]"
        aria-hidden
      />
      <Container className="relative space-y-12">
        <Reveal className="max-w-[720px] space-y-4">
          <p className="eyebrow">PLATFORM OVERVIEW</p>
          <h2 className="text-[clamp(2.1rem,4.6vw,3.5rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance text-white">
            A focused fleet, run with one operating standard.
          </h2>
          <p className="text-base leading-[1.65] text-[#c8d2dd]">
            Equipment, attachments, trailers, and field-support loads move on a tight, repeatable
            rhythm — ground-level loading, documented securement, and confirmed handoffs on every
            job. A focused platform, run with discipline customers actually feel.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-7">
          <Reveal className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/12 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
            <Image
              src={siteImages.fleetShowcase}
              alt="Bluport Ford F-350 hitched to a gooseneck flatbed trailer hauling a shipping container at a Texas yard"
              fill
              className="object-cover object-[center_60%] transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,22,0.1)_0%,rgba(5,11,22,0.2)_60%,rgba(5,11,22,0.85)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-7 md:p-9">
              <div>
                <p className="technical-label text-[var(--accent-light)]">FIELD-READY PLATFORM</p>
                <p className="mt-2 max-w-[26ch] text-xl font-semibold tracking-[-0.02em] md:text-2xl">
                  One disciplined operating rhythm, every move.
                </p>
              </div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-[rgba(5,11,22,0.5)] text-[var(--accent-light)] backdrop-blur-md">
                <ArrowUpRight size={22} aria-hidden />
              </span>
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col rounded-[2rem] border border-white/12 bg-[rgba(2,10,20,0.6)] p-7 md:p-8">
            <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/8">
              {platformSpecs.map((spec) => (
                <div key={spec.label} className="bg-[rgba(5,11,22,0.6)] p-4 text-center">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[var(--steel-400)]">
                    {spec.label}
                  </p>
                  <p className="mt-1.5 text-[0.95rem] font-bold leading-tight tracking-[-0.02em] text-white">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex items-center gap-2.5">
              <ClipboardCheck size={18} aria-hidden className="text-[var(--accent-light)]" />
              <p className="technical-label">HOW IT WORKS IN THE FIELD</p>
            </div>
            <ul className="mt-6 flex-1 space-y-3">
              {operationalProof.map((row) => (
                <li
                  key={row.label}
                  className="flex items-start gap-4 rounded-2xl border border-white/8 bg-[rgba(255,255,255,0.02)] p-4 transition-colors hover:border-[rgba(47,116,189,0.5)]"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(47,116,189,0.16)] text-[var(--accent-light)]">
                    <row.icon size={18} aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.1em] text-[var(--accent-light)]">
                      {row.label}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#c8d2dd]">{row.value}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href="/downloads/bluport-equipment-spec-sheet.txt" variant="secondary">
                Download equipment spec sheet
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
