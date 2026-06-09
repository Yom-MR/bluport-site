import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <section className="section-shell section-light border-b-0">
      <Container>
        <div className="rounded-2xl border border-[var(--border)] bg-[linear-gradient(140deg,#ffffff,#f4f8fc)] p-8 shadow-[0_20px_40px_rgba(15,23,42,0.08)] md:p-10">
          <p className="eyebrow">REQUEST CAPACITY</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
            Need equipment moved?
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
            Send the pickup, delivery, asset details, timing, and constraints. Bluport operations
            will review the request and follow up.
          </p>
          <div className="soft-divider mt-6 grid gap-3 pt-5 text-sm md:grid-cols-2">
            <p className="text-[var(--muted)]">
              <span className="technical-label mr-2">Operations</span>
              <span className="text-[var(--foreground)]">booking@bluport.us</span>
            </p>
            <p className="text-[var(--muted)]">
              <span className="technical-label mr-2">Response</span>
              <span className="text-[var(--foreground)]">Dispatch team follow-up</span>
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="#request-capacity">Request Capacity</Button>
            <Button href="/contact" variant="secondary">
              Contact Operations
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}