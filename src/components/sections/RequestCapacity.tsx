import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function RequestCapacity() {
  return (
    <section id="request-capacity" className="border-b border-[rgba(148,163,184,0.14)] bg-[#f4f8ff] py-16 md:py-20">
      <Container>
        <div className="rounded-[1.8rem] border border-[rgba(47,116,189,0.25)] bg-white p-7 shadow-[0_4px_24px_rgba(47,116,189,0.1)] md:p-10">
          <p className="technical-label text-[var(--accent-strong)]">REQUEST CAPACITY</p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-[#031426]">
            Ready to move the next asset?
          </h2>
          <p className="mt-4 max-w-[60ch] text-base leading-8 text-[#34465a] md:text-lg">
            Send the asset, route, timing, and site constraints. Bluport operations will follow up.
          </p>
          <div className="mt-7">
            <Button href="/#request-capacity">Request Capacity</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}