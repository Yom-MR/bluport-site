import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
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
  "Communication cadence that operations teams can rely on.",
  "Readiness posture for urgent and scheduled missions.",
  "Securement discipline aligned to equipment risk.",
  "Dispatch control with field-aware execution decisions.",
];

export default function IndustriesPage() {
  return (
    <>
      <section className="section-shell hero-glow">
        <Container>
          <SectionHeader
            eyebrow="INDUSTRIES"
            title="Built for teams where downtime is not an option."
            description="Bluport supports field teams, operators, project managers, and infrastructure crews that depend on timely movement of critical assets."
          />
        </Container>
      </section>

      <section className="section-shell pt-0">
        <Container>
          <article className="glass-card relative min-h-[320px] overflow-hidden rounded-2xl p-6 md:min-h-[360px] md:p-8">
            <Image
              src={siteImages.utilitiesInfrastructure}
              alt="Representative infrastructure operations environment"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.88)_10%,rgba(2,8,23,0.46)_58%,rgba(2,8,23,0.78)_100%)]" />
            <div className="relative z-10 max-w-2xl">
              <p className="technical-label text-[var(--cyan)]">FIELD ENVIRONMENT VISUAL</p>
              <h3 className="mt-3 text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
                Built for operations where schedule integrity is mission critical.
              </h3>
            </div>
          </article>
        </Container>
      </section>

      <section className="section-shell bg-grid">
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="INDUSTRY COVERAGE"
            title="Operational environments we support."
            description="Bento layout showing where Bluport's mission-critical movement model is applied."
          />
          <div className="grid gap-4 md:grid-cols-6">
            {industries.map((industry, index) => {
              const spanClass =
                index === 0
                  ? "md:col-span-4 md:row-span-2"
                  : index === 1
                    ? "md:col-span-2"
                    : index === 2
                      ? "md:col-span-2"
                      : index === 3
                        ? "md:col-span-2"
                        : index === 4
                          ? "md:col-span-2"
                          : "md:col-span-3";

              return (
                <article key={industry.title} className={`glass-card rounded-2xl p-6 ${spanClass}`}>
                  <p className="technical-label text-[var(--cyan)]">Signal: {industry.signal}</p>
                  <h3 className="mt-3 text-xl font-semibold text-[var(--foreground)] md:text-2xl">{industry.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] md:text-base">{industry.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-shell bg-[rgba(6,26,51,0.14)]">
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="PAIN POINTS"
            title="What breaks field operations."
            description="Operational friction points that impact schedule reliability, crew utilization, and project risk."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {painPoints.map((point) => (
              <article key={point} className="glass-card rounded-2xl p-6">
                <p className="text-base font-medium text-[var(--foreground)]">{point}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="WHY BLUPORT FITS"
            title="Operational fit for high-accountability environments."
            description="Built around communication, readiness, securement discipline, dispatch control, and field execution."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {fitNotes.map((note) => (
              <article key={note} className="glass-card rounded-2xl p-6">
                <p className="text-sm leading-relaxed text-[var(--muted)]">{note}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell border-b-0">
        <Container>
          <div className="glass-card bg-grid rounded-2xl p-8 md:p-10">
            <p className="eyebrow">REQUEST CAPACITY</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
              Keep your field operation moving.
            </h2>
            <div className="mt-6">
              <Button href="/#request-capacity">Request Capacity</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
