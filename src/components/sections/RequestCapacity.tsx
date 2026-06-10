import RequestCapacityForm from "@/components/forms/RequestCapacityForm";
import Container from "@/components/ui/Container";

export default function RequestCapacity() {
  return (
    <section id="request-capacity" className="bg-[#f4f7fb] py-24 text-[#031424] md:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-5 lg:sticky lg:top-24">
          <p className="eyebrow">REQUEST CAPACITY</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-[#031424] md:text-5xl">
            Start a mission-critical move.
          </h2>
          <p className="text-base leading-relaxed text-[#6b7c8f] md:text-lg">
            Send the asset, timeline, and constraints. Bluport will use the details to build the
            move plan and follow up with next steps.
          </p>

          <div className="space-y-2 border-t border-[rgba(107,124,143,0.28)] pt-4">
            <p className="technical-label">What happens next</p>
            <ol className="space-y-2 text-sm leading-relaxed text-[#6b7c8f] md:text-base">
              <li>1. Submit pickup, delivery, and asset details.</li>
              <li>2. Bluport reviews timing, constraints, and capacity.</li>
              <li>3. Operations follows up with next steps.</li>
            </ol>
          </div>
        </div>

        <div className="rounded-3xl border border-[rgba(107,124,143,0.26)] bg-white p-2 shadow-[0_24px_52px_rgba(2,7,17,0.08)] md:p-3">
          <RequestCapacityForm />
        </div>
      </Container>
    </section>
  );
}