import Image from "next/image";
import Container from "@/components/ui/Container";

const specs = [
  "Ford F-350 platform",
  "40' power tilt trailer",
  "Equipment and attachment movement",
  "Houston-based dispatch",
  "Scheduled and rapid-response support",
  "POD and closeout follow-up",
];

export default function FleetFeature() {
  return (
    <section className="section-shell section-dark overflow-hidden">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <article className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[rgba(148,163,184,0.22)] shadow-[0_24px_70px_rgba(2,8,23,0.42)]">
          <Image
            src="/images/loads/IMG_5849.PNG"
            alt="Bluport Ford F-350 and trailer setup"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,23,0.08),rgba(2,8,23,0.64))]" />
        </article>

        <div className="space-y-6">
          <p className="eyebrow">FLEET + EQUIPMENT</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
            Built around Ford F-350 hotshot capability.
          </h2>
          <p className="text-base leading-relaxed text-[var(--muted)] md:text-lg">
            Bluport&apos;s current fleet is built for responsive equipment movement using Ford F-350
            trucks and 40&apos; power tilt trailers - a practical setup for attachments, rental
            equipment, trailers, and field-support assets.
          </p>

          <ul className="divide-y divide-[rgba(148,163,184,0.24)] border-y border-[rgba(148,163,184,0.24)]">
            {specs.map((spec) => (
              <li key={spec} className="py-3 text-sm font-medium tracking-[0.01em] text-[var(--foreground)] md:text-base">
                {spec}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
