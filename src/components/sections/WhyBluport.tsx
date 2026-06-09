import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const pillars = [
  {
    title: "Mission First",
    description: "We prioritize the outcome behind every shipment, not just the load itself.",
  },
  {
    title: "Veteran-Led Precision",
    description: "Military discipline shapes how we communicate, plan, and execute.",
  },
  {
    title: "Operational Visibility",
    description: "Customers should know what is happening before they have to ask.",
  },
  {
    title: "Built for Critical Timelines",
    description: "We support projects where missed windows create real operational cost.",
  },
];

export default function WhyBluport() {
  return (
    <section className="section-shell section-dark">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="WHY BLUPORT"
          title="Operational discipline, not transportation theater."
          description="Bluport is built around execution, accountability, and communication - the things that matter when a shipment affects a job site, a utility crew, or a critical project timeline."
        />
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-2xl border border-[var(--border)] bg-[rgba(15,23,42,0.45)] p-7">
            <p className="technical-label text-[var(--cyan)]">Editorial Position</p>
            <h3 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
              Built for customers who care about execution quality, not just rate sheets.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
              Every move is planned around operational context: pickup constraints, delivery windows,
              site access, securement standards, and communication cadence that operations teams can trust.
            </p>
          </article>
          <div className="grid gap-3 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-xl border border-[var(--border)] bg-[rgba(15,23,42,0.5)] p-5">
                <h3 className="text-base font-semibold text-[var(--foreground)]">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}