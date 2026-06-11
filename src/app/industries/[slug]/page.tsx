import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import EditorialSection from "@/components/ui/EditorialSection";
import { getIndustryBySlug, INDUSTRY_ENTRIES } from "@/data/industries";

type IndustryPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return INDUSTRY_ENTRIES.map((industry) => ({ slug: industry.slug }));
}

export function generateMetadata({ params }: IndustryPageProps): Metadata {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) {
    return { title: "Industry" };
  }

  return {
    title: industry.title,
    description: industry.summary,
  };
}

export default function IndustryPage({ params }: IndustryPageProps) {
  const industry = getIndustryBySlug(params.slug);

  if (!industry) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="INDUSTRIES"
        title={industry.title}
        description={industry.summary}
        image={industry.image}
        imageAlt={industry.alt}
        imagePosition="object-center"
        variant="dark"
      />

      <EditorialSection
        eyebrow="INDUSTRY STAT"
        title={`${industry.statLabel}: ${industry.statValue}`}
        description="Bluport builds around the operational friction that matters most in this sector."
        variant="light"
        layout="stack"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {industry.painPoints.map((point) => (
            <article key={point} className="rounded-[1.5rem] border border-[rgba(148,163,184,0.22)] bg-white p-5">
              <p className="text-sm leading-7 text-slate-700">{point}</p>
            </article>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection
        eyebrow="BLUPORT SOLUTION"
        title="How Bluport supports the move."
        description="Clear planning, dispatch, and closeout keep the work moving instead of creating a new bottleneck."
        variant="dark"
        layout="split"
      >
        <div className="space-y-4">
          {industry.solutions.map((item) => (
            <div key={item} className="rounded-2xl border border-[rgba(200,210,221,0.14)] bg-[rgba(255,255,255,0.04)] p-5 text-[#e5eef6]">
              {item}
            </div>
          ))}
        </div>
        <div className="rounded-[1.6rem] border border-[rgba(200,210,221,0.14)] bg-[rgba(255,255,255,0.05)] p-5">
          <p className="technical-label text-[var(--cyan)]">WORKFLOW</p>
          <ol className="mt-4 space-y-4">
            {industry.workflow.map((step) => (
              <li key={step.stage} className="border-t border-[rgba(200,210,221,0.12)] pt-4">
                <p className="text-sm font-semibold tracking-[0.12em] text-[var(--cyan)] uppercase">{step.stage}</p>
                <p className="mt-1 text-sm leading-7 text-[#dce6ee]">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </EditorialSection>

      <EditorialSection
        eyebrow="BENEFITS"
        title="Operational results customers can feel."
        description="These outcomes tie back to schedule integrity, visibility, and reduced downtime."
        variant="light"
        layout="stack"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {industry.benefits.map((benefit) => (
            <article key={benefit} className="rounded-[1.5rem] border border-[rgba(148,163,184,0.2)] bg-white p-5">
              <p className="text-base leading-7 text-slate-700 md:text-lg">{benefit}</p>
            </article>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection
        eyebrow="REQUEST CAPACITY"
        title={`Request capacity for ${industry.title}.`}
        description="Bring Bluport into the move when the project needs dependable execution and clean communication."
        variant="light"
        layout="stack"
        className="border-b-0"
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/#request-capacity">Request Capacity</Button>
          <Button href="/contact" variant="secondary">Speak with an expert</Button>
        </div>
      </EditorialSection>
    </>
  );
}
