import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import EditorialSection from "@/components/ui/EditorialSection";
import FeatureRows from "@/components/ui/FeatureRows";
import { siteImages } from "@/data/siteImages";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Discover career opportunities at Bluport Logistics for drivers, owner operators, dispatchers, coordinators, brokers, and operations leaders in a veteran-friendly culture.",
  keywords: [
    "logistics careers",
    "driver jobs Houston",
    "dispatcher logistics careers",
    "veteran-friendly logistics employer",
  ],
};

const whyWork = [
  {
    title: "Purpose-driven work",
    description: "Support moves that directly affect crews, projects, and critical field timelines.",
  },
  {
    title: "Veteran-friendly culture",
    description: "A team built around accountability, clarity, and mission-focused execution.",
  },
  {
    title: "Operational discipline",
    description: "Structured workflows, communication standards, and process ownership at every level.",
  },
  {
    title: "Growth mindset",
    description: "Build capability through training, field exposure, and leadership development.",
  },
];

const roles = [
  {
    title: "CDL / Non-CDL Drivers",
    description: "Drivers who value disciplined communication, securement standards, and reliable field execution.",
  },
  {
    title: "Owner Operators",
    description: "Independent operators who want consistent coordination, strong customer expectations, and operational professionalism.",
  },
  {
    title: "Dispatchers",
    description: "People who can translate move requirements into clean communication and decisive execution support.",
  },
  {
    title: "Operations Coordinators",
    description: "Team members who keep intake, planning, documentation, and closeout aligned under real deadlines.",
  },
  {
    title: "Logistics Brokers",
    description: "Operators who understand customer pressure, lane risk, and the importance of execution quality over noise.",
  },
  {
    title: "Fleet / Driver Managers",
    description: "Leaders who can reinforce readiness, accountability, and driver support across the operating model.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="CAREERS"
        title="Build a logistics career with mission behind it."
        description="Bluport is building a veteran-focused logistics company for drivers, dispatchers, operators, and leaders who want their work to matter."
        image={siteImages.industrialManufacturing}
        variant="dark"
      />

      <EditorialSection
        eyebrow="WHY BLUPORT"
        title="A team built for mission outcomes."
        description="Bluport is building a culture around clarity, accountability, and outcomes that matter in the field."
        variant="light"
        layout="stack"
      >
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {whyWork.map((item) => (
            <article key={item.title} className="border-t border-[rgba(148,163,184,0.28)] pt-5">
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">{item.description}</p>
            </article>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection
        eyebrow="OPENING PROFILE"
        title="Core positions in the Bluport operating model."
        description="The roles below shape driver support, field execution, and customer confidence across every move."
        variant="dark"
        layout="split"
      >
        <FeatureRows
          items={roles.map((role, index) => ({
            label: String(index + 1).padStart(2, "0"),
            title: role.title,
            description: role.description,
          }))}
          variant="dark"
        />
      </EditorialSection>

      <EditorialSection
        eyebrow="VETERAN PATHWAY"
        title="Veterans bring what logistics needs."
        description="Bluport values discipline, leadership, accountability, and resilience - traits that transfer directly into field logistics, customer communication, and operational execution."
        variant="light"
        layout="split"
        className="border-b-0"
      >
        <div className="flex items-start lg:justify-end">
          <Button href="/contact">Contact Operations</Button>
        </div>
      </EditorialSection>
    </>
  );
}
