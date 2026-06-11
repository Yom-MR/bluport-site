import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { siteImages } from "@/data/siteImages";

const industryTiles = [
  {
    title: "Construction & Equipment Rental",
    description:
      "Keep rental fleets, attachments, and machines aligned with jobsite timing and customer demand.",
    image: siteImages.industriesConstruction,
    alt: "Construction and equipment rental fleet",
    className: "lg:col-span-7",
    href: "/industries/construction-equipment-rental",
  },
  {
    title: "Utilities & Infrastructure",
    description:
      "Support outage-sensitive work where equipment delays can stall crews, restoration timelines, and infrastructure schedules.",
    image: siteImages.industriesUtilities,
    alt: "Utilities and infrastructure power lines",
    className: "lg:col-span-5",
    href: "/industries/utilities-infrastructure",
  },
  {
    title: "Industrial & Critical Facilities",
    description:
      "Move support assets around shutdowns, production windows, vendor coordination, and controlled-access sites.",
    image: siteImages.industriesIndustrial,
    alt: "Industrial and critical facilities",
    className: "lg:col-span-5",
    href: "/industries/industrial-manufacturing",
  },
  {
    title: "Data Center Construction",
    description:
      "Support scheduled equipment movement for uptime-driven infrastructure builds, generators, site equipment, and critical-path work.",
    image: siteImages.industriesDataCenter,
    alt: "Data center construction",
    className: "lg:col-span-7",
    href: "/industries/data-center-construction",
  },
] as const;

export default function IndustriesMosaic() {
  return (
    <section className="section-pad bg-[var(--navy-950)] text-white">
      <Container className="space-y-14">
        <Reveal className="max-w-[74ch] space-y-5">
          <p className="eyebrow">INDUSTRIES</p>
          <h2 className="section-title max-w-[15ch] text-white">
            Built for operations where downtime is expensive.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-[#c8d2dd]">
            Bluport supports project managers, rental fleets, field teams, and infrastructure
            operators who need equipment in place when work is ready.
          </p>
        </Reveal>

        <div className="grid gap-7 lg:grid-cols-12">
          {industryTiles.map((tile, index) => (
            <Reveal
              key={tile.title}
              delay={index * 90}
              className={tile.className}
            >
              <Link
                href={tile.href}
                className="group relative block h-[300px] overflow-hidden rounded-[28px] border border-white/10 lg:h-[360px]"
              >
                <Image
                  src={tile.image}
                  alt={tile.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,10,20,0.16)_0%,rgba(2,10,20,0.44)_56%,rgba(2,10,20,0.82)_100%)] transition-opacity duration-500 group-hover:opacity-95" />
                <span className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-[rgba(2,10,20,0.4)] text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:border-[var(--accent)]">
                  <ArrowUpRight size={18} aria-hidden />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <span className="mb-3 inline-block h-0.5 w-10 bg-[var(--accent)] transition-all duration-300 group-hover:w-16" aria-hidden />
                  <h3 className="text-[1.56rem] font-bold leading-tight tracking-[-0.03em] text-white">{tile.title}</h3>
                  <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-[#d1dde9] md:text-base">
                    {tile.description}
                  </p>
                </div>
              </Link>
            </Reveal>
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
