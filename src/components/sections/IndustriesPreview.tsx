import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/ui/Container";
import { industries } from "@/data/industries";

const industryImages: Record<string, string> = {
  "Construction & Equipment Rental": "/images/jobsites/construction-equipment-yard.jpg",
  "Utilities & Infrastructure": "/images/backgrounds/infrastructure-night.jpg",
  "Industrial & Manufacturing": "/images/jobsites/industrial-jobsite.jpg",
};

export default function IndustriesPreview() {
  return (
    <section id="industries" className="section-shell bg-grid">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="INDUSTRIES"
          title="Where downtime is not an option."
          description="From rental equipment to infrastructure and emerging aerospace operations, Bluport supports teams that cannot afford delays."
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
              <article
                key={industry.title}
                className={`glass-card relative overflow-hidden rounded-2xl p-6 transition-colors hover:border-[rgba(34,211,238,0.4)] ${spanClass} ${index === 0 ? "orbital-glow" : ""}`}
              >
                {industryImages[industry.title] ? (
                  <>
                    <Image
                      src={industryImages[industry.title]}
                      alt={`Representative ${industry.title.toLowerCase()} environment`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 45vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,23,0.18)_0%,rgba(2,8,23,0.72)_55%,rgba(2,8,23,0.9)_100%)]" />
                  </>
                ) : null}
                <div className="relative z-10">
                <p className="technical-label text-[var(--cyan)]">Signal: {industry.signal}</p>
                <h3 className="mt-3 text-xl font-semibold text-[var(--foreground)] md:text-2xl">{industry.title}</h3>
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-[var(--muted)] md:text-base">{industry.description}</p>
                {index === 0 ? (
                  <div className="soft-divider mt-6 pt-4">
                    <p className="technical-label">Priority</p>
                    <p className="mt-2 text-sm text-[var(--foreground)]">Coordinated equipment flow for active field operations and time-sensitive handoffs.</p>
                  </div>
                ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}