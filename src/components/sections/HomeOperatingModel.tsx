import Container from "@/components/ui/Container";

const steps = [
  {
    title: "Intake",
    body: "Asset, timing, locations, constraints, and urgency.",
  },
  {
    title: "Plan",
    body: "Truck, trailer, route, securement, and communication expectations.",
  },
  {
    title: "Move",
    body: "Dispatch, updates, issue management, and field-aware execution.",
  },
  {
    title: "Closeout",
    body: "Delivery confirmation, POD, documentation, and follow-up.",
  },
];

export default function HomeOperatingModel() {
  return (
    <section className="section-shell section-dark overflow-hidden">
      <Container className="space-y-8">
        <header className="max-w-3xl space-y-4">
          <p className="eyebrow">OPERATING MODEL</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
            How the move gets handled.
          </h2>
        </header>

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-[0.9rem] top-0 bottom-0 w-px bg-[linear-gradient(180deg,rgba(34,211,238,0.42),rgba(148,163,184,0.08))] md:left-0 md:right-0 md:top-4 md:bottom-auto md:h-px md:w-auto md:bg-[linear-gradient(90deg,rgba(34,211,238,0.42),rgba(148,163,184,0.08))]"
          />
          <ol className="grid gap-7 md:grid-cols-4 md:gap-6">
            {steps.map((step, index) => (
              <li key={step.title} className="relative pl-10 md:pl-0 md:pt-10">
                <span className="absolute left-[0.35rem] top-[0.1rem] inline-flex h-5 w-5 items-center justify-center rounded-full border border-[rgba(34,211,238,0.45)] bg-[rgba(2,8,23,0.98)] text-[10px] font-semibold text-[var(--cyan)] md:left-0 md:top-0 md:h-8 md:w-8 md:text-xs">
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold text-[var(--foreground)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)] md:text-base">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
