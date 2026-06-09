import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <section className="section-shell border-b-0">
      <Container>
        <div className="glass-card bg-grid signal-line rounded-2xl p-8 md:p-10">
          <p className="eyebrow">REQUEST CAPACITY</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
            Need equipment moved on a critical timeline?
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
            Send the pickup, delivery, asset details, timing, and constraints. Bluport will help
            build the move plan.
          </p>
          <div className="soft-divider mt-6 grid gap-3 pt-5 text-sm md:grid-cols-2">
            <p className="text-[var(--muted)]">
              <span className="technical-label mr-2">Operations</span>
              <span className="text-[var(--foreground)]">support@bluport.us</span>
            </p>
            <p className="text-[var(--muted)]">
              <span className="technical-label mr-2">Response</span>
              <span className="text-[var(--foreground)]">24/7 mission intake</span>
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="#request-capacity">Request Capacity</Button>
            <Button href="#request-capacity" variant="secondary">
              Contact Operations
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}