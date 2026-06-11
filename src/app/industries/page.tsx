import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import EditorialSection from "@/components/ui/EditorialSection";
import { INDUSTRY_ENTRIES } from "@/data/industries";
import { siteImages } from "@/data/siteImages";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "See the industries Bluport supports, including construction and equipment rental, utilities and infrastructure, data center construction, industrial operations, and emergency response.",
  keywords: [
    "construction logistics",
    "equipment rental transport",
    "utility infrastructure logistics",
    "industrial logistics support",
  ],
};

const coverageNotes = [
  "Texas-first service area with Gulf Coast reach",
  "Primary support for Houston, Dallas, Austin, San Antonio, and regional corridors",
  "Field-aware execution for project sites, yards, plants, and response locations",
] as const;

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="INDUSTRIES"
        title="Industries we serve."
        description="Bluport supports sectors where equipment timing affects crews, production, restoration, and project delivery."
        image={siteImages.industriesHero}
        imageAlt="Critical infrastructure and industrial operations environment"
        imagePosition="object-[center_50%]"
        variant="dark"
      />

      <EditorialSection
        eyebrow="INDUSTRY FIT"
        title="Click into the sector that matches your operation."
        description="Each page shows the friction points, the Bluport response, and the operating results the sector cares about most."
        variant="light"
        layout="stack"
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {INDUSTRY_ENTRIES.map((item) => (
            <Link key={item.slug} href={`/industries/${item.slug}`} className="group rounded-[1.7rem] border border-[rgba(148,163,184,0.22)] bg-white/90 p-6 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(3,20,38,0.08)]">
              <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-[1.2rem]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1280px) 28vw, (min-width: 768px) 44vw, 100vw"
                  />
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950 transition-colors group-hover:text-sky-700">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">{item.summary}</p>
            </Link>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection
        eyebrow="SERVICE COVERAGE"
        title="Texas and Gulf Coast coverage built for field operations."
        description="Bluport moves across the corridors where projects are actually happening, with dispatch tuned to timing and access rather than generic lanes."
        variant="dark"
        layout="split"
      >
        <div className="space-y-5">
          {coverageNotes.map((item) => (
            <div key={item} className="rounded-2xl border border-[rgba(200,210,221,0.14)] bg-[rgba(255,255,255,0.04)] px-5 py-4 text-[#e6edf4]">
              {item}
            </div>
          ))}
        </div>
        <div className="rounded-[1.6rem] border border-[rgba(200,210,221,0.14)] bg-[linear-gradient(160deg,rgba(76,201,240,0.14),rgba(255,255,255,0.04))] p-6">
          <p className="technical-label text-[var(--cyan)]">WHY IT MATTERS</p>
          <p className="mt-3 text-base leading-8 text-[#dce6ee]">
            The right lane is only useful if the truck arrives with the asset, the contacts, and the schedule window all aligned.
          </p>
        </div>
      </EditorialSection>

      <EditorialSection
        eyebrow="REQUEST CAPACITY"
        title="Tell us what the operation needs to move."
        description="Share the asset, the site, and the window. Bluport scopes the move around your sector's constraints and confirms a plan before dispatch."
        variant="light"
        layout="stack"
        className="border-b-0"
      >
        <div className="flex justify-start">
          <Button href="/#request-capacity">Request Capacity</Button>
        </div>
      </EditorialSection>
    </>
  );
}
