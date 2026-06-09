import Container from "@/components/ui/Container";

const steps = ["Intake", "Plan", "Move", "Closeout"];

export default function OperatingStandard() {
  return (
    <section className="section-shell section-dark overflow-hidden">
      <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="max-w-xl space-y-5">
          <p className="eyebrow">OPERATING STANDARD</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
            Execution is the operating standard.
          </h2>
          <p className="text-base leading-relaxed text-[var(--muted)] md:text-lg">
            Every move is planned around site access, timing, securement, communication, and
            closeout - because the load is only one part of the mission.
          </p>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2">
          {steps.map((step, index) => (
            <li
              key={step}
              className="flex items-center gap-3 border-t border-[rgba(148,163,184,0.24)] py-4"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(34,211,238,0.4)] bg-[rgba(14,165,233,0.12)] text-xs font-semibold text-[var(--cyan)]">
                {index + 1}
              </span>
              <span className="text-lg font-medium text-[var(--foreground)]">{step}</span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
