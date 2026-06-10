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
    title: "Communication",
    description: "People who treat clear updates as part of the work, not optional admin.",
  },
  {
    title: "Discipline",
    description: "People who care about planning details, execution quality, and reliable closeout.",
  },
  {
    title: "Field awareness",
    description: "People who understand jobsite realities and adjust execution around real constraints.",
  },
  {
    title: "Customer outcomes",
    description: "People who connect every move to project continuity and customer confidence.",
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
        image={siteImages.careersHero}
        imagePosition="object-[center_48%]"
        variant="dark"
      />

      <EditorialSection
        eyebrow="WHO FITS BLUPORT"
        title="Who fits Bluport."
        description="Bluport is looking for people who value communication, discipline, field awareness, accountability, and customer outcomes."
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
        eyebrow="ROLES WE EXPECT TO GROW"
        title="Roles that shape the Bluport operating model."
        description="Drivers, owner operators, dispatch, and operations leadership roles are central to how Bluport is building long-term capability."
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
        description="Veterans bring discipline, leadership, resilience, and accountability - traits that transfer directly into field logistics and customer communication."
        variant="light"
        layout="stack"
        className="border-b-0"
      >
        <div className="space-y-6">
          <p className="max-w-[66ch] text-base leading-8 text-slate-700 md:text-lg">
            Bluport is building an operating culture that values professionalism in the field,
            clear customer communication, and follow-through after the move is done.
          </p>
          <Button href="/contact">Contact Operations</Button>
        </div>
      </EditorialSection>
    </>
  );
}
