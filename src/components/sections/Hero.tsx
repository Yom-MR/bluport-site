import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section id="mission" className="section-shell section-dark overflow-hidden !pt-14 md:!pt-18">
      <Container className="grid items-end gap-10 lg:grid-cols-[0.98fr_1.02fr]">
        <div className="space-y-7 pb-2">
          <p className="eyebrow">VETERAN-OWNED HOTSHOT LOGISTICS</p>
          <h1 className="text-balance text-[2.9rem] leading-[0.92] font-semibold tracking-[-0.035em] text-[var(--foreground)] md:text-[5.6rem]">
            Move the equipment. Keep the job moving.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-[rgba(226,232,240,0.9)] md:text-lg">
            Bluport moves equipment, attachments, trailers, and field-support assets for rental
            fleets, jobsites, utilities, infrastructure, and industrial operations.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/#request-capacity">Request Capacity</Button>
            <Button href="/services" variant="secondary">
              View Services
            </Button>
          </div>
          <p className="text-sm leading-relaxed text-[rgba(148,163,184,0.94)] md:text-base">
            Houston-based. Ford F-350 hotshot fleet. 40&apos; power tilt capability.
          </p>
        </div>

        <article className="relative min-h-[390px] overflow-hidden rounded-[2rem] border border-[rgba(148,163,184,0.22)] bg-[rgba(2,8,23,0.4)] shadow-[0_30px_80px_rgba(2,8,23,0.45)]">
          <Image
            src="/images/loads/IMG_0426.JPEG"
            alt="Bluport trailer loaded with jobsite equipment"
            fill
            priority
            className="object-cover object-[56%_55%]"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,23,0.12),rgba(2,8,23,0.72))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_0%,rgba(34,211,238,0.18),transparent_42%)]" />
        </article>
      </Container>
    </section>
  );
}