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
    <section className="section-shell">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="WHY BLUPORT"
          title="Operational discipline, not transportation theater."
          description="Bluport is built around execution, accountability, and communication - the things that matter when a shipment affects a job site, a utility crew, or a critical project timeline."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-[var(--foreground)]">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{pillar.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}