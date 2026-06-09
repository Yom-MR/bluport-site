import RequestCapacityForm from "@/components/forms/RequestCapacityForm";
import Container from "@/components/ui/Container";

export default function RequestCapacity() {
  return (
    <section id="request-capacity" className="section-shell section-light">
      <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-4 lg:sticky lg:top-24">
          <p className="eyebrow">REQUEST CAPACITY</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
            Start a mission-critical move.
          </h2>
          <p className="text-base leading-relaxed text-[var(--muted)] md:text-lg">
            Send the asset, timeline, and constraints. Bluport will use the details to build the
            move plan and follow up with next steps.
          </p>
          <p className="text-sm text-[var(--muted)]">
            Include jobsite context, access constraints, and timeline priority so operations can
            plan the move correctly.
          </p>
        </div>

        <div className="rounded-3xl border border-[rgba(148,163,184,0.34)] bg-white p-2 shadow-[0_20px_50px_rgba(15,23,42,0.08)] md:p-3">
          <RequestCapacityForm />
        </div>
      </Container>
    </section>
  );
}