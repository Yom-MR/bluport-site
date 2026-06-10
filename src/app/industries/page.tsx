import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import EditorialSection from "@/components/ui/EditorialSection";
import FeatureRows from "@/components/ui/FeatureRows";
import ImagePanel from "@/components/ui/ImagePanel";
import { industries } from "@/data/industries";
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

const painPoints = [
  "Missed delivery windows",
  "Idle crews",
  "Poor visibility",
  "Equipment unavailable when needed",
  "Site access constraints",
  "Documentation gaps",
];

const fitNotes = [
  "Communication cadence customers do not have to chase",
  "Readiness posture for urgent and scheduled missions",
  "Securement discipline aligned to equipment risk",
  "Dispatch control with field-aware execution decisions",
];

const industryRows = industries.map((industry) => ({
  label: industry.signal,
  title: industry.title,
  description: `${industry.description} Support focus: ${industry.signal.toLowerCase()}.`,
}));

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="INDUSTRIES"
        title="Built for teams where downtime is not an option."
        description="Bluport supports field teams, infrastructure crews, project managers, and rental fleets that depend on timely movement of critical assets."
        image={siteImages.utilitiesInfrastructure}
        variant="dark"
      />

      <EditorialSection
        eyebrow="INDUSTRY FIT"
        title="Operational environments we support."
        description="Bluport supports environments where delays create crew downtime, schedule drift, and operational risk that spreads fast."
        variant="light"
        layout="split"
      >
        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)]">
          <ImagePanel
            src={siteImages.industriesConstruction}
            alt="Construction and equipment rental environment"
            caption="Bluport supports crews and project teams that need assets to arrive ready, visible, and on schedule."
            tone="light"
          />
          <FeatureRows items={industryRows} variant="light" />
        </div>
      </EditorialSection>

      <EditorialSection
        eyebrow="FIELD FRICTION"
        title="What breaks field operations."
        description="These are the failures that compound quickly once a project, crew, or response team is already moving."
        variant="dark"
        layout="stack"
      >
        <div className="grid gap-x-10 gap-y-4 md:grid-cols-2 xl:grid-cols-3">
          {painPoints.map((point) => (
            <div key={point} className="border-t border-[rgba(148,163,184,0.2)] pt-5">
              <p className="text-lg font-medium tracking-[-0.02em] text-white">{point}</p>
            </div>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection
        eyebrow="WHY BLUPORT FITS"
        title="Operational fit for high-accountability environments."
        description="Bluport is built around disciplined movement, operational clarity, and closeout standards that hold up under pressure."
        variant="light"
        layout="split"
        className="border-b-0"
      >
        <div className="space-y-10">
          <div className="grid gap-5 md:grid-cols-2">
            {fitNotes.map((note) => (
              <article
                key={note}
                className="rounded-[1.75rem] border border-[rgba(148,163,184,0.2)] bg-white/80 p-6"
              >
                <p className="text-base leading-7 text-slate-700 md:text-lg">{note}</p>
              </article>
            ))}
          </div>
          <Button href="/#request-capacity">Request Capacity</Button>
        </div>
      </EditorialSection>
    </>
  );
}
