import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    step: "01",
    title: "Intake",
    description: "Confirm asset details, urgency, pickup/delivery windows, site constraints, and required documentation.",
  },
  {
    step: "02",
    title: "Plan",
    description: "Align truck, trailer, route, securement, communication rhythm, and contingency options.",
  },
  {
    step: "03",
    title: "Execute",
    description: "Move with proactive dispatch communication, live issue management, and field-aware decision-making.",
  },
  {
    step: "04",
    title: "Closeout",
    description: "Confirm delivery, collect POD, organize documentation, and complete post-mission follow-up.",
  },
];

export default function OperatingPrinciples() {
  return (
    <section className="section-shell">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="OPERATING PRINCIPLES"
          title="Execution is the product."
          description="Bluport's advantage is not just the truck. It is the operating discipline behind every move."
        />
        <div className="relative grid gap-4 md:grid-cols-4">
          <div className="absolute top-5 left-5 right-5 hidden h-px bg-[rgba(148,163,184,0.2)] md:block" />
          {steps.map((item) => (
            <article key={item.step} className="glass-card relative rounded-2xl p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(34,211,238,0.25)] bg-[rgba(14,165,233,0.08)] text-sm font-semibold text-[var(--foreground)]">
                  {item.step}
                </span>
                <div className="h-px flex-1 bg-[rgba(148,163,184,0.18)] md:hidden" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}