import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/ui/Container";
import { industries } from "@/data/industries";
import { siteImages } from "@/data/siteImages";

const industryImages: Record<string, string> = {
  "Construction & Equipment Rental": siteImages.constructionRental,
  "Utilities & Infrastructure": siteImages.utilitiesInfrastructure,
  "Data Center Construction": siteImages.dataCenterConstruction,
  "Industrial & Manufacturing": siteImages.industrialManufacturing,
};

const supportFocus: Record<string, string> = {
  "Construction & Equipment Rental": "Yard-to-jobsite machine flow",
  "Utilities & Infrastructure": "Outage and restoration support movement",
  "Data Center Construction": "Schedule-protected equipment support",
  "Industrial & Manufacturing": "Production continuity logistics",
  "Aerospace & Defense": "Controlled ground logistics execution",
  "Government & Emergency Response": "Urgent field deployment support",
};

export default function IndustriesPreview() {
  return (
    <section id="industries" className="section-shell section-dark">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="INDUSTRIES"
          title="Industry coverage for equipment-heavy operations."
          description="Bluport supports construction, utilities, data center, and industrial work with practical field logistics built around schedule integrity."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => {
            const hasImage = Boolean(industryImages[industry.title]);

            return (
              <article
                key={industry.title}
                className="relative min-h-[290px] overflow-hidden rounded-2xl border border-[var(--border)] bg-[rgba(15,23,42,0.6)] p-6 transition-colors hover:border-[rgba(34,211,238,0.4)]"
              >
                {hasImage ? (
                  <>
                    <Image
                      src={industryImages[industry.title]}
                      alt={`Representative ${industry.title.toLowerCase()} environment`}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,23,0.38)_0%,rgba(2,8,23,0.86)_78%)]" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-[linear-gradient(145deg,#0b1223,#1b2a43)]" />
                )}

                {!hasImage ? (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(14,165,233,0.18),transparent_40%)]" />
                ) : null}

                <div className="relative z-10 flex h-full flex-col justify-end">
                  {!hasImage ? (
                    <p className="technical-label text-[var(--cyan)]">Technical Coverage</p>
                  ) : null}
                  <h3 className="mt-2 text-xl font-semibold text-white md:text-2xl">{industry.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[rgba(226,232,240,0.88)] md:text-base">{industry.description}</p>
                  <div className="soft-divider mt-4 pt-3">
                    <p className="text-xs font-semibold tracking-[0.08em] text-[var(--cyan)] uppercase">Support focus</p>
                    <p className="mt-1 text-sm text-[rgba(226,232,240,0.9)]">{supportFocus[industry.title]}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}