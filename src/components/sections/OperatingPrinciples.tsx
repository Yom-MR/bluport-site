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
    <section className="section-shell section-dark">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="OPERATING PRINCIPLES"
          title="Execution is the product."
          description="Bluport's advantage is not just the truck. It is the operating discipline behind every move."
        />
        <div className="relative grid gap-5 md:grid-cols-4">
          <div className="absolute top-4 left-6 right-6 hidden h-px bg-[linear-gradient(90deg,rgba(34,211,238,0.15),rgba(148,163,184,0.22),rgba(34,211,238,0.15))] md:block" />
          {steps.map((item) => (
            <article key={item.step} className="relative rounded-xl border border-[var(--border)] bg-[rgba(15,23,42,0.45)] p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(34,211,238,0.25)] bg-[rgba(14,165,233,0.1)] text-xs font-semibold text-[var(--foreground)]">
                  {item.step}
                </span>
                <div className="h-px flex-1 bg-[rgba(148,163,184,0.18)] md:hidden" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}