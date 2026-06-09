import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function HomeHero() {
  return (
    <section id="mission" className="section-shell section-dark overflow-hidden !pt-16 md:!pt-20">
      <Container className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
        <div className="relative z-10 max-w-2xl space-y-7">
          <p className="eyebrow">VETERAN-OWNED HOTSHOT LOGISTICS</p>
          <h1 className="text-balance text-5xl leading-[0.95] font-semibold tracking-[-0.03em] text-[var(--foreground)] md:text-7xl">
            Move the equipment. Keep the job moving.
          </h1>
          <p className="text-base leading-relaxed text-[rgba(226,232,240,0.88)] md:text-lg">
            Bluport moves equipment, attachments, trailers, and field-support assets for rental
            fleets, jobsites, utilities, infrastructure, and industrial operations.
          </p>
          <p className="text-sm leading-relaxed text-[rgba(148,163,184,0.95)] md:text-base">
            Ford F-350 hotshot fleet. 40&apos; power tilt capability. Houston-based operations.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/#request-capacity">Request Capacity</Button>
            <Button href="/services" variant="secondary">
              View Services
            </Button>
          </div>
        </div>

        <div className="relative grid gap-4 sm:grid-cols-[1fr_0.55fr]">
          <article className="relative min-h-[420px] overflow-hidden rounded-3xl border border-[rgba(148,163,184,0.2)] bg-[rgba(2,8,23,0.55)]">
            <Image
              src="/images/loads/IMG_0914.JPEG"
              alt="Bluport Ford F-350 with trailer at a field operations yard"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 44vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,23,0.1),rgba(2,8,23,0.64))]" />
            <p className="absolute bottom-4 left-4 rounded-full border border-[rgba(148,163,184,0.3)] bg-[rgba(2,8,23,0.7)] px-4 py-1.5 text-xs font-medium tracking-[0.08em] text-[var(--foreground)] uppercase">
              Ford F-350 Hotshot Operations
            </p>
          </article>

          <article className="relative hidden min-h-[420px] overflow-hidden rounded-3xl border border-[rgba(148,163,184,0.18)] bg-[rgba(2,8,23,0.45)] sm:block">
            <Image
              src="/images/loads/IMG_0364.JPEG"
              alt="Bluport trailer equipment movement"
              fill
              className="object-cover object-left"
              sizes="(max-width: 1024px) 0vw, 20vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,23,0.1),rgba(2,8,23,0.74))]" />
          </article>
        </div>
      </Container>
    </section>
  );
}
