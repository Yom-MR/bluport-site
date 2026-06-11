import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { siteImages } from "@/data/siteImages";

const operationalProof = [
  {
    label: "Power tilt deck",
    value: "Ground-level loading — no ramp required for most equipment moves.",
  },
  {
    label: "Securement plan",
    value: "Chain and binder setup documented per load before the truck rolls.",
  },
  {
    label: "Site confirmation",
    value: "Gate details, contacts, and access conditions verified before dispatch.",
  },
  {
    label: "Closeout protocol",
    value: "POD signed at delivery; follow-up complete before the job closes.",
  },
] as const;

export default function FleetShowcase() {
  return (
    <section className="section-pad bg-[var(--navy-900)] text-white">
      <Container className="space-y-11">
        <div className="max-w-[74ch] space-y-4">
          <p className="eyebrow">PLATFORM OVERVIEW</p>
          <h2 className="section-title max-w-[16ch] text-white">
            Built around Ford F-350 hotshot capability.
          </h2>
          <p className="text-base leading-[1.65] text-[#c8d2dd]">
            Bluport&apos;s current fleet is built around Ford F-350 trucks and 40&apos; power tilt
            trailers for equipment, attachments, trailers, and field-support movement that needs a
            disciplined operating rhythm.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-[60%_40%]">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] border border-white/12 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <Image
              src={siteImages.fleetShowcase}
              alt="Bluport Ford F-350 with power tilt trailer"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 700px"
            />
          </div>

          <div className="rounded-[18px] border border-[rgba(200,210,221,0.2)] bg-[rgba(2,10,20,0.6)] p-6 md:p-7">
            <p className="technical-label">HOW IT WORKS IN THE FIELD</p>
            <ul className="mt-5 divide-y divide-[rgba(200,210,221,0.2)]">
              {operationalProof.map((row) => (
                <li key={row.label} className="py-4">
                  <p className="text-xs font-bold tracking-[0.12em] text-[var(--accent-light)] uppercase">{row.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#c8d2dd]">{row.value}</p>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href="/downloads/bluport-equipment-spec-sheet.txt" variant="secondary">
                Download equipment spec sheet
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
