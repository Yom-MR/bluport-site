import RequestCapacityForm from "@/components/forms/RequestCapacityForm";
import Container from "@/components/ui/Container";

export default function RequestCapacity() {
  return (
    <section id="request-capacity" className="section-shell bg-[rgba(6,26,51,0.15)]">
      <Container className="space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">REQUEST CAPACITY</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
            Start a mission-critical move.
          </h2>
          <p className="text-base leading-relaxed text-[var(--muted)] md:text-lg">
            Send the asset, timeline, and constraints. Bluport will use the details to build the
            move plan and follow up with next steps.
          </p>
        </div>
        <div className="panel-border rounded-2xl bg-[rgba(2,8,23,0.35)] p-2 md:p-3">
          <RequestCapacityForm />
        </div>
      </Container>
    </section>
  );
}