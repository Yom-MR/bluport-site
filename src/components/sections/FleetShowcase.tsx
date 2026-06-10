import Image from "next/image";
import Container from "@/components/ui/Container";
import { siteImages } from "@/data/siteImages";

const fleetRows = [
  {
    label: "Truck platform",
    value: "Ford F-350",
  },
  {
    label: "Trailer capability",
    value: "40' power tilt",
  },
  {
    label: "Operating base",
    value: "Houston, Texas",
  },
  {
    label: "Personnel readiness",
    value: "TWIC-certified personnel",
  },
  {
    label: "Coverage",
    value: "$1M auto / $250K cargo / $2M GL aggregate",
  },
  {
    label: "Workflow",
    value: "intake, dispatch coordination, POD closeout",
  },
] as const;

export default function FleetShowcase() {
  return (
    <section className="section-pad bg-[#031426] text-white">
      <Container className="space-y-11">
        <div className="max-w-[74ch] space-y-4">
          <p className="eyebrow">FLEET + TRAILER</p>
          <h2 className="section-title max-w-[16ch] text-white">
            Built around Ford F-350 hotshot capability.
          </h2>
          <p className="text-base leading-[1.65] text-[#c8d2dd]">
            Bluport&apos;s current fleet is built around Ford F-350 trucks and 40&apos; power tilt
            trailers - a practical platform for equipment, attachments, trailers, and field-support
            movement.
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
            <ul className="divide-y divide-[rgba(200,210,221,0.2)]">
              {fleetRows.map((row) => (
                <li key={row.label} className="flex items-start gap-3 py-3.5 text-sm tracking-[0.02em] text-[#eef3f8]">
                  <div>
                    <p className="text-xs font-bold tracking-[0.12em] text-[#8ecde2] uppercase">{row.label}</p>
                    <p className="mt-1 font-medium text-[#eef3f8]">{row.value}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-[rgba(200,210,221,0.2)] pt-5 text-sm text-[#c8d2dd]">
              Current platform: ground hotshot and equipment movement.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
