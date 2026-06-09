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
      "Hotshot and specialized transport for equipment, attachments, tools, and project-critical assets.",
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
    <section id="field-operations" className="section-shell bg-[rgba(6,26,51,0.18)]">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="FIELD OPERATIONS"
          title="Built for the work that happens before the job can start."
          description="A delayed machine, trailer, attachment, or support asset can hold up an entire crew. Bluport focuses on the operational details that keep field teams moving."
        />
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {blocks.map(({ Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-[var(--border)] bg-[linear-gradient(145deg,rgba(6,26,51,0.55),rgba(15,23,42,0.4))] p-6 transition-colors hover:border-[rgba(14,165,233,0.35)]"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[rgba(14,165,233,0.07)]">
                    <Icon size={18} className="text-[var(--cyan)]" strokeWidth={1.7} />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{description}</p>
                </article>
              ))}
            </div>

            {/* Operational Proof — field spec card */}
            <div className="glass-card rounded-2xl p-5 md:p-6">
              <p className="technical-label mb-4 text-[var(--foreground)]">OPERATIONAL SPECIFICATIONS</p>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: "Asset Class", value: "Equipment / Attachments / Field Support" },
                  { label: "Trailer Type", value: "40\u2019 Power Tilt" },
                  { label: "Operating Base", value: "Houston, Texas" },
                  { label: "Dispatch Model", value: "Rapid Response / Scheduled Capacity" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex flex-col gap-1 border-l border-[rgba(34,211,238,0.14)] pl-3">
                    <dt className="technical-label text-[0.62rem]">{label}</dt>
                    <dd className="text-sm font-medium text-[var(--foreground)]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <aside className="glass-card relative min-h-[420px] overflow-hidden rounded-2xl">
            <Image
              src={siteImages.fieldOperations}
              alt="Representative field transport scene"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,23,0.15)_0%,rgba(2,8,23,0.45)_55%,rgba(2,8,23,0.88)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
              <div className="flex flex-wrap gap-2">
                {[
                  "FIELD READY",
                  "SECUREMENT",
                  "DISPATCH COORDINATED",
                ].map((label) => (
                  <span
                    key={label}
                    className="technical-label rounded-full border border-[rgba(34,211,238,0.28)] bg-[rgba(2,8,23,0.65)] px-3 py-1.5 text-[var(--foreground)]"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
