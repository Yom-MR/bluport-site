import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function RequestCapacity() {
  return (
    <section id="request-capacity" className="border-b border-[rgba(148,163,184,0.16)] bg-[#081c2f] py-16 text-white md:py-20">
      <Container>
        <div className="rounded-[1.8rem] border border-[rgba(148,163,184,0.22)] bg-[rgba(255,255,255,0.04)] p-7 md:p-10">
          <p className="technical-label text-[var(--cyan)]">REQUEST CAPACITY</p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-white">
            Ready to move the next asset?
          </h2>
          <p className="mt-4 max-w-[60ch] text-base leading-8 text-[rgba(203,213,225,0.86)] md:text-lg">
            Send the details and Bluport operations will follow up.
          </p>
          <div className="mt-7">
            <Button href="/#request-capacity">Request Capacity</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}