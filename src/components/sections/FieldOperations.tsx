import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { siteImages } from "@/data/siteImages";
import { Truck, Clock, FileCheck } from "lucide-react";

const blocks = [
  {
    Icon: Truck,
    title: "Equipment-ready transport",
    description:
      "Hotshot movement for machines, attachments, tools, trailers, and field-support assets.",
  },
  {
    Icon: Clock,
    title: "Jobsite timing",
    description:
      "Pickup windows, delivery constraints, site access, and communication handled before they become problems.",
  },
  {
    Icon: FileCheck,
    title: "Closeout discipline",
    description:
      "Delivery confirmation, documentation, POD handling, and post-mission follow-up built into the workflow.",
  },
];

export default function FieldOperations() {
  return (
    <section id="field-operations" className="section-shell section-dark section-split overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src={siteImages.fieldOperations}
          alt=""
          fill
          className="object-cover object-center opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.92)_14%,rgba(2,8,23,0.82)_58%,rgba(2,8,23,0.92)_100%)]" />
      </div>
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="FIELD OPERATIONS"
          title="Field-ready logistics for equipment-driven work."
          description="A delayed attachment, machine, trailer, or support asset can hold up the entire crew. Bluport focuses on the details that keep jobsites moving."
        />
        <div className="space-y-5">
          <div className="grid gap-4 md:grid-cols-3">
              {blocks.map(({ Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-[var(--border)] bg-[rgba(15,23,42,0.62)] p-6 transition-colors hover:border-[rgba(14,165,233,0.35)]"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[rgba(14,165,233,0.07)]">
                    <Icon size={18} className="text-[var(--cyan)]" strokeWidth={1.7} />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[rgba(226,232,240,0.86)]">{description}</p>
                </article>
              ))}
            </div>

          <div className="glass-card rounded-2xl p-5 md:p-6">
            <p className="technical-label mb-4 text-[var(--foreground)]">OPERATIONAL SPECIFICATIONS</p>
            <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {[
                { label: "Asset class", value: "Equipment / Attachments / Field Support" },
                { label: "Trailer type", value: "40' Power Tilt" },
                { label: "Operating base", value: "Houston, Texas" },
                { label: "Dispatch model", value: "Rapid Response / Scheduled Capacity" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-lg border border-[rgba(148,163,184,0.2)] bg-[rgba(2,8,23,0.32)] p-3">
                  <dt className="technical-label text-[0.62rem]">{label}</dt>
                  <dd className="mt-1 text-sm font-medium text-[var(--foreground)]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
