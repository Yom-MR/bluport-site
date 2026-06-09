import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/ui/Container";
import { services } from "@/data/services";
import { siteImages } from "@/data/siteImages";
import { Radar, Shield, Truck, Route, Warehouse, BriefcaseBusiness } from "lucide-react";

const serviceIcons = [Truck, Radar, Shield, Route, Warehouse, BriefcaseBusiness];

export default function ServicesPreview() {
  const featuredService = services[0];
  const remainingServices = services.slice(1);

  return (
    <section id="services" className="section-shell">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="CAPABILITIES"
          title="Built for high-stakes movement."
          description="Bluport supports the equipment, people, and infrastructure behind critical operations."
        />
        <article className="glass-card relative overflow-hidden rounded-2xl p-6 md:p-7">
          <Image
            src={siteImages.equipmentTransport}
            alt="Representative securement detail for equipment transport"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(2,8,23,0.9)_12%,rgba(2,8,23,0.6)_58%,rgba(2,8,23,0.78)_100%)]" />
          <div className="relative z-10 max-w-2xl">
            <span className="technical-label rounded-full border border-[rgba(34,211,238,0.3)] bg-[rgba(2,8,23,0.55)] px-3 py-1.5 text-[var(--cyan)]">
              {featuredService.tag}
            </span>
            <h3 className="mt-4 text-2xl font-semibold text-[var(--foreground)] md:text-3xl">{featuredService.title}</h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[rgba(226,232,240,0.9)] md:text-base">
              {featuredService.description}
            </p>
            <div className="soft-divider mt-5 max-w-xl pt-4">
              <p className="technical-label text-[var(--foreground)]">Use Case</p>
              <p className="mt-2 text-sm text-[var(--foreground)]">{featuredService.useCase}</p>
            </div>
          </div>
        </article>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {remainingServices.map((service, index) => {
            const Icon = serviceIcons[index + 1] ?? Truck;

            return (
              <article
                key={service.title}
                className="glass-card group rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(14,165,233,0.4)]"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] bg-[rgba(14,165,233,0.08)]">
                    <Icon size={16} className="text-[var(--cyan)]" strokeWidth={1.9} />
                  </div>
                  <span className="technical-label rounded-full border border-[rgba(14,165,233,0.24)] bg-[rgba(14,165,233,0.08)] px-2.5 py-1 text-[var(--cyan)]">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{service.title}</h3>
                <p className="mt-3 min-h-20 text-sm leading-relaxed text-[var(--muted)]">{service.description}</p>
                <div className="soft-divider mt-5 pt-4">
                  <p className="technical-label">Use Case</p>
                  <p className="mt-2 text-sm text-[var(--foreground)]">{service.useCase}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}