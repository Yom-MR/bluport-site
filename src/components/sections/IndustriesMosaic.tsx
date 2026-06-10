import Image from "next/image";
import Container from "@/components/ui/Container";
import { siteImages } from "@/data/siteImages";

const industryTiles = [
  {
    title: "Construction & Equipment Rental",
    description:
      "Keep rental fleets, attachments, and machines aligned with jobsite timing and customer demand.",
    image: siteImages.industriesConstruction,
    alt: "Construction and equipment rental fleet",
    className: "lg:col-span-7",
  },
  {
    title: "Utilities & Infrastructure",
    description:
      "Support outage-sensitive work where equipment delays can stall crews, restoration timelines, and infrastructure schedules.",
    image: siteImages.industriesUtilities,
    alt: "Utilities and infrastructure power lines",
    className: "lg:col-span-5",
  },
  {
    title: "Industrial & Critical Facilities",
    description:
      "Move support assets around shutdowns, production windows, vendor coordination, and controlled-access sites.",
    image: siteImages.industriesIndustrial,
    alt: "Industrial and critical facilities",
    className: "lg:col-span-5",
  },
  {
    title: "Data Center Construction",
    description:
      "Support scheduled equipment movement for uptime-driven infrastructure builds, generators, site equipment, and critical-path work.",
    image: siteImages.industriesDataCenter,
    alt: "Data center construction",
    className: "lg:col-span-7",
  },
] as const;

export default function IndustriesMosaic() {
  return (
    <section className="section-pad bg-[#020a14] text-white">
      <Container className="space-y-14">
        <div className="max-w-[74ch] space-y-5">
          <p className="eyebrow">INDUSTRIES</p>
          <h2 className="section-title max-w-[15ch] text-white">
            Built for operations where downtime is expensive.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-[#c8d2dd]">
            Bluport supports project managers, rental fleets, field teams, and infrastructure
            operators who need equipment in place when work is ready.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-12">
          {industryTiles.map((tile) => (
            <article
              key={tile.title}
              className={`relative h-[300px] overflow-hidden rounded-[28px] border border-white/10 lg:h-[360px] ${tile.className}`}
            >
              <Image
                src={tile.image}
                alt={tile.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,10,20,0.16)_0%,rgba(2,10,20,0.44)_56%,rgba(2,10,20,0.78)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <h3 className="text-[1.56rem] font-bold leading-tight tracking-[-0.03em] text-white">{tile.title}</h3>
                <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-[#d1dde9] md:text-base">
                  {tile.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="border-t border-[rgba(200,210,221,0.24)] pt-7 text-base leading-relaxed text-[#c7d3df]">
          Additional support includes aerospace, defense, government response, emergency movement,
          and project logistics where disciplined execution and documentation matter.
        </p>
      </Container>
    </section>
  );
}
