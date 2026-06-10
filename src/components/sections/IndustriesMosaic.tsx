import Image from "next/image";
import Container from "@/components/ui/Container";
import { siteImages } from "@/data/siteImages";

const industryLanes = [
  {
    title: "Data Center Construction",
    body: "Position equipment and support assets around strict power-up and commissioning windows.",
    focus: "Support focus: timed site-readiness logistics",
  },
  {
    title: "Aerospace & Defense",
    body: "Coordinate movement around controlled-access schedules and high-accountability workflows.",
    focus: "Support focus: controlled chain-of-custody movement",
  },
  {
    title: "Government & Emergency Response",
    body: "Deliver field-support assets quickly when infrastructure disruptions compress timelines.",
    focus: "Support focus: rapid mobilization support",
  },
] as const;

export default function IndustriesMosaic() {
  return (
    <section className="section-pad bg-[#020a14] text-white">
      <Container className="space-y-10">
        <div className="max-w-[74ch] space-y-4">
          <p className="eyebrow">INDUSTRIES</p>
          <h2 className="section-title max-w-[18ch] text-white">
            Built for operations where downtime is expensive.
          </h2>
          <p className="text-base leading-[1.65] text-[#c8d2dd]">
            Bluport supports project managers, rental fleets, field teams, and infrastructure
            operators who need equipment in place when work is ready.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <article className="relative h-[460px] overflow-hidden rounded-[28px] border border-white/10 lg:h-[520px]">
            <Image
              src={siteImages.industriesConstruction}
              alt="Construction and equipment rental fleet"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(2,10,20,0.72)] via-[rgba(2,10,20,0.2)] to-transparent" />
            <div className="absolute bottom-0 p-6 md:p-7">
              <h3 className="text-2xl font-bold tracking-[-0.03em]">Construction &amp; Equipment Rental</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#eef3f8]">
                Keep rental fleet continuity and jobsite readiness aligned with field timing.
              </p>
            </div>
          </article>

          <div className="grid gap-5">
            <article className="relative h-[220px] overflow-hidden rounded-[18px] border border-white/10 lg:h-[250px]">
              <Image
                src={siteImages.industriesUtilities}
                alt="Utilities and infrastructure power lines"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(2,10,20,0.72)] to-[rgba(2,10,20,0.35)]" />
              <div className="absolute inset-0 p-6">
                <h3 className="text-xl font-bold tracking-[-0.03em]">Utilities &amp; Infrastructure</h3>
                <p className="mt-2 max-w-[48ch] text-sm leading-relaxed text-[#eef3f8]">
                  Support outage-sensitive infrastructure work where delayed equipment impacts crews
                  immediately.
                </p>
              </div>
            </article>

            <article className="relative h-[220px] overflow-hidden rounded-[18px] border border-white/10 lg:h-[250px]">
              <Image
                src={siteImages.industriesIndustrial}
                alt="Industrial and critical facilities"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(2,10,20,0.72)] to-[rgba(2,10,20,0.35)]" />
              <div className="absolute inset-0 p-6">
                <h3 className="text-xl font-bold tracking-[-0.03em]">Industrial &amp; Critical Facilities</h3>
                <p className="mt-2 max-w-[48ch] text-sm leading-relaxed text-[#eef3f8]">
                  Move support assets around schedules, shutdowns, and uptime-driven work.
                </p>
              </div>
            </article>
          </div>
        </div>

        <div className="grid gap-4 border-t border-[rgba(200,210,221,0.2)] pt-6 md:grid-cols-3 md:gap-7">
          {industryLanes.map((lane) => (
            <article key={lane.title} className="space-y-2 border-b border-[rgba(200,210,221,0.15)] pb-4 md:border-b-0 md:pb-0">
              <h4 className="text-lg font-semibold tracking-[-0.02em]">{lane.title}</h4>
              <p className="text-sm leading-relaxed text-[#c8d2dd]">{lane.body}</p>
              <p className="text-xs font-semibold tracking-[0.08em] text-[#4cc9f0] uppercase">{lane.focus}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
