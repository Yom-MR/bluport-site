import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/ui/Container";
import { industries } from "@/data/industries";
import { siteImages } from "@/data/siteImages";

const industryImages: Record<string, string> = {
  "Construction & Equipment Rental": siteImages.constructionRental,
  "Utilities & Infrastructure": siteImages.utilitiesInfrastructure,
  "Industrial & Manufacturing": siteImages.industrialManufacturing,
};

export default function IndustriesPreview() {
  return (
    <section id="industries" className="section-shell section-light">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="INDUSTRIES"
          title="Industry coverage built around real-world operations."
          description="Bluport supports construction, utilities, and industrial projects with responsive equipment movement and disciplined field execution."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => {
            return (
              <article
                key={industry.title}
                className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-6 shadow-[0_10px_26px_rgba(15,23,42,0.07)] transition-colors hover:border-[rgba(34,211,238,0.4)]"
              >
                {industryImages[industry.title] ? (
                  <>
                    <Image
                      src={industryImages[industry.title]}
                      alt={`Representative ${industry.title.toLowerCase()} environment`}
                      width={1200}
                      height={720}
                      className="h-44 w-full rounded-xl object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </>
                ) : (
                  <div className="rounded-xl border border-[rgba(148,163,184,0.25)] bg-[linear-gradient(145deg,#0f172a,#1e293b)] p-4">
                    <p className="technical-label text-[var(--cyan)]">Technical Coverage</p>
                    <p className="mt-2 text-sm text-[rgba(226,232,240,0.82)]">Ground support focused execution model.</p>
                  </div>
                )}
                <div className="relative z-10 mt-4">
                <p className="technical-label text-[var(--cyan)]">Signal: {industry.signal}</p>
                <h3 className="mt-3 text-xl font-semibold text-[var(--foreground)] md:text-2xl">{industry.title}</h3>
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-[var(--muted)] md:text-base">{industry.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}