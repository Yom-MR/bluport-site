import RequestCapacityForm from "@/components/forms/RequestCapacityForm";
import Container from "@/components/ui/Container";

export default function RequestCapacity() {
  return (
    <section id="request-capacity" className="section-pad bg-[#031426] text-white">
      <Container className="grid gap-10 lg:grid-cols-[34%_66%] lg:items-start">
        <div className="space-y-5 lg:sticky lg:top-24">
          <p className="eyebrow">REQUEST CAPACITY</p>
          <h2 className="section-title max-w-[14ch] text-white">
            Start a mission-critical move.
          </h2>
          <p className="text-base leading-[1.65] text-[#c8d2dd] md:text-lg">
            Send the asset, timeline, and constraints. Bluport will use the details to build the
            move plan and follow up with next steps.
          </p>

          <div className="space-y-2 border-t border-[rgba(200,210,221,0.3)] pt-4">
            <p className="technical-label text-[#4cc9f0]">What happens next</p>
            <ol className="space-y-2 text-sm leading-relaxed text-[#c8d2dd] md:text-base">
              <li>1. Submit pickup, delivery, and asset details.</li>
              <li>2. Bluport reviews timing, constraints, and capacity.</li>
              <li>3. Operations follows up with next steps.</li>
            </ol>
          </div>
        </div>

        <div className="rounded-[18px] border border-[rgba(200,210,221,0.26)] bg-white p-2 shadow-[0_30px_80px_rgba(0,0,0,0.3)] md:p-3">
          <RequestCapacityForm />
        </div>
      </Container>
    </section>
  );
}