import Image from "next/image";
import Container from "@/components/ui/Container";
import { siteImages } from "@/data/siteImages";

const industryTiles = [
  {
    title: "Construction & Equipment Rental",
    image: siteImages.industriesConstruction,
    alt: "Construction and equipment rental fleet",
    className: "lg:col-span-7",
  },
  {
    title: "Utilities & Infrastructure",
    image: siteImages.industriesUtilities,
    alt: "Utilities and infrastructure power lines",
    className: "lg:col-span-5",
  },
  {
    title: "Industrial & Critical Facilities",
    image: siteImages.industriesIndustrial,
    alt: "Industrial and critical facilities",
    className: "lg:col-span-5",
  },
  {
    title: "Data Center Construction",
    image: siteImages.industriesDataCenter,
    alt: "Data center construction",
    className: "lg:col-span-7",
  },
] as const;

export default function IndustriesMosaic() {
  return (
    <section className="section-pad bg-[#020a14] text-white">
      <Container className="space-y-12">
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

        <div className="grid gap-6 lg:grid-cols-12">
          {industryTiles.map((tile) => (
            <article
              key={tile.title}
              className={`relative h-[280px] overflow-hidden rounded-[26px] border border-white/8 lg:h-[330px] ${tile.className}`}
            >
              <Image
                src={tile.image}
                alt={tile.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,10,20,0.12)_0%,rgba(2,10,20,0.62)_82%,rgba(2,10,20,0.8)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <h3 className="text-[1.45rem] font-bold leading-tight tracking-[-0.03em] text-white">{tile.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <p className="border-t border-[rgba(200,210,221,0.2)] pt-6 text-sm leading-relaxed text-[#b8c5d3]">
          Additional support includes aerospace, defense, government response, emergency movement,
          and project logistics.
        </p>
      </Container>
    </section>
  );
}
