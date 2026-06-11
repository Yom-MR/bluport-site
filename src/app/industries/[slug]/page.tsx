import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Gauge,
  PackageCheck,
  PhoneCall,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/ui/Reveal";
import { getIndustryBySlug, INDUSTRY_ENTRIES } from "@/data/industries";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return INDUSTRY_ENTRIES.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) {
    return { title: "Industry" };
  }

  return {
    title: industry.title,
    description: industry.summary,
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const otherIndustries = INDUSTRY_ENTRIES.filter((entry) => entry.slug !== industry.slug).slice(0, 3);

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
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/#request-capacity" withArrow>
            Request capacity
          </Button>
          <Button href="/contact" variant="secondary">
            Speak with operations
          </Button>
        </div>
      </PageHero>

      {/* Overview + what we move */}
      <section className="bg-[var(--navy-950)] py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
            <Reveal className="space-y-5">
              <p className="eyebrow">OVERVIEW</p>
              <h2 className="text-[clamp(1.9rem,3.8vw,2.8rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-balance">
                Logistics built around how this sector actually works.
              </h2>
              <p className="text-base leading-8 text-[var(--steel-300)] md:text-lg">
                {industry.intro}
              </p>
            </Reveal>

            <Reveal delay={120} className="rounded-[1.75rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-7 md:p-9">
              <div className="flex items-center gap-2.5">
                <PackageCheck size={18} aria-hidden className="text-[var(--accent-light)]" />
                <p className="technical-label">WHAT WE MOVE</p>
              </div>
              <ul className="mt-6 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
                {industry.cargoTypes.map((cargo) => (
                  <li key={cargo} className="flex items-start gap-2.5 text-sm leading-6 text-[#dce6ee]">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-light)]"
                      aria-hidden
                    />
                    <span>{cargo}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Friction + headline stat */}
      <section className="relative overflow-hidden bg-[var(--navy-900)] py-20 text-white md:py-28">
        <div className="absolute inset-0 blueprint-grid opacity-[0.16]" aria-hidden />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <Reveal className="space-y-6">
              <p className="eyebrow">THE FRICTION</p>
              <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1] tracking-[-0.05em] text-balance">
                What slows this sector down.
              </h2>
              <div className="rounded-[1.75rem] border border-white/12 bg-[linear-gradient(150deg,rgba(47,116,189,0.14),rgba(255,255,255,0.02))] p-7">
                <div className="flex items-center gap-2.5">
                  <Gauge size={18} aria-hidden className="text-[var(--accent-light)]" />
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--steel-400)]">
                    {industry.statLabel}
                  </p>
                </div>
                <p className="mt-3 text-3xl font-bold tracking-[-0.03em] text-white md:text-4xl">
                  {industry.statValue}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--steel-300)]">
                  Bluport builds around the operational friction that matters most in this sector.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120} className="grid gap-4 sm:grid-cols-1">
              {industry.painPoints.map((point, index) => (
                <div
                  key={point.title}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.03)] p-6"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[rgba(229,127,67,0.12)] text-[#e8a87c]">
                    <AlertTriangle size={20} aria-hidden />
                  </span>
                  <div>
                    <p className="font-mono text-xs text-[var(--steel-400)]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-1 text-lg font-semibold leading-snug tracking-[-0.02em] text-white">
                      {point.title}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--steel-300)]">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Solution + workflow */}
      <section className="relative overflow-hidden bg-[var(--navy-950)] py-20 text-white md:py-28">
        <Container className="relative space-y-12">
          <Reveal className="max-w-[700px] space-y-4">
            <p className="eyebrow">THE BLUPORT RESPONSE</p>
            <h2 className="text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance">
              How Bluport supports the move.
            </h2>
            <p className="text-base leading-8 text-[var(--steel-300)] md:text-lg">
              Clear planning, dispatch, and closeout keep the work moving instead of creating a new
              bottleneck.
            </p>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10">
            <Reveal className="space-y-3">
              {industry.solutions.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.03)] p-5"
                >
                  <CheckCircle2
                    size={20}
                    aria-hidden
                    className="mt-0.5 shrink-0 text-[var(--accent-light)]"
                  />
                  <div>
                    <p className="text-[1.02rem] font-semibold leading-6 tracking-[-0.01em] text-white">
                      {item.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-7 text-[#c8d2dd]">{item.description}</p>
                  </div>
                </div>
              ))}
            </Reveal>

            {/* Workflow timeline */}
            <Reveal delay={120} className="relative rounded-[1.75rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-7 md:p-9">
              <p className="technical-label">OPERATING WORKFLOW</p>
              <ol className="mt-7 space-y-0">
                {industry.workflow.map((step, index) => {
                  const isLast = index === industry.workflow.length - 1;
                  return (
                    <li key={step.stage} className="relative flex gap-5 pb-7 last:pb-0">
                      {!isLast ? (
                        <span
                          className="absolute left-[19px] top-10 bottom-0 w-px bg-[rgba(91,159,216,0.25)]"
                          aria-hidden
                        />
                      ) : null}
                      <span className="relative z-10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(91,159,216,0.4)] bg-[var(--navy-900)] font-mono text-sm font-semibold text-[var(--accent-light)]">
                        {index + 1}
                      </span>
                      <div className="pt-1.5">
                        <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--accent-light)]">
                          {step.stage}
                        </p>
                        <p className="mt-1.5 text-sm leading-7 text-[#dce6ee]">{step.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="relative overflow-hidden bg-[var(--navy-900)] py-20 text-white md:py-28">
        <div
          className="absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(47,116,189,0.16),transparent_70%)]"
          aria-hidden
        />
        <Container className="relative space-y-12">
          <Reveal className="max-w-[700px] space-y-4">
            <p className="eyebrow">THE RESULT</p>
            <h2 className="text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance">
              Operational results customers can feel.
            </h2>
            <p className="text-base leading-8 text-[var(--steel-300)] md:text-lg">
              These outcomes tie back to schedule integrity, visibility, and reduced downtime.
            </p>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {industry.benefits.map((benefit, index) => (
              <Reveal
                key={benefit.title}
                delay={index * 80}
                className="rounded-[1.5rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-7"
              >
                <p className="font-mono text-sm text-[var(--accent-light)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 text-lg font-semibold leading-snug tracking-[-0.02em] text-white">
                  {benefit.title}
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--steel-300)]">
                  {benefit.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Related industries */}
      <section className="bg-[var(--navy-950)] py-20 text-white md:py-24">
        <Container className="space-y-10">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-3">
              <p className="eyebrow">MORE SECTORS</p>
              <h2 className="text-[clamp(1.7rem,3.4vw,2.5rem)] font-semibold leading-[1] tracking-[-0.04em]">
                Explore other industries.
              </h2>
            </div>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-light)] transition-colors hover:text-white"
            >
              View all industries
              <ArrowRight size={16} aria-hidden />
            </Link>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {otherIndustries.map((entry) => (
              <Reveal key={entry.slug}>
                <Link
                  href={`/industries/${entry.slug}`}
                  className="group block overflow-hidden rounded-[1.5rem] border border-white/10 bg-[rgba(255,255,255,0.03)] transition-all hover:-translate-y-1 hover:border-[rgba(47,116,189,0.5)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={entry.image}
                      alt={entry.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                      sizes="(min-width: 768px) 30vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(5,11,22,0.7)_100%)]" />
                  </div>
                  <div className="flex items-center justify-between gap-3 p-6">
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-white transition-colors group-hover:text-[var(--accent-light)]">
                      {entry.title}
                    </h3>
                    <ArrowRight
                      size={18}
                      aria-hidden
                      className="shrink-0 text-[var(--steel-400)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--accent-light)]"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[var(--navy-900)] py-20 text-white md:py-24">
        <Container>
          <Reveal className="flex flex-col items-start gap-6 rounded-[2rem] border border-white/12 bg-[linear-gradient(135deg,rgba(47,116,189,0.12),rgba(255,255,255,0.02)_60%)] p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div className="max-w-[620px] space-y-4">
              <p className="technical-label">REQUEST CAPACITY</p>
              <h2 className="text-[clamp(1.8rem,3.6vw,2.8rem)] font-semibold leading-[1] tracking-[-0.04em] text-balance">
                Request capacity for {industry.title}.
              </h2>
              <p className="text-sm leading-8 text-[var(--steel-300)] md:text-base">
                Bring Bluport into the move when the project needs dependable execution and clean
                communication.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Button href="/#request-capacity" withArrow>
                Request capacity
              </Button>
              <Button href="/contact" variant="secondary">
                <span className="inline-flex items-center gap-2">
                  <PhoneCall size={16} aria-hidden />
                  Speak with an expert
                </span>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
