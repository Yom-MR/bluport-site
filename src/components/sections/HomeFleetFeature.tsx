import Image from "next/image";
import Container from "@/components/ui/Container";

const fleetSpecs = [
  "Ford F-350 platform",
  "40' power tilt trailer capability",
  "Equipment and attachment movement",
  "Houston-based dispatch",
  "Scheduled and rapid-response moves",
  "POD and closeout follow-up",
];

export default function HomeFleetFeature() {
  return (
    <section className="section-shell section-dark overflow-hidden">
      <Container className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <article className="relative min-h-[360px] overflow-hidden rounded-3xl border border-[rgba(148,163,184,0.2)]">
          <Image
            src="/images/loads/IMG_1406.JPEG"
            alt="Bluport Ford F-350 hotshot setup for equipment movement"
            fill
            className="object-cover object-left"
            sizes="(max-width: 1024px) 100vw, 54vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,23,0.04),rgba(2,8,23,0.68))]" />
        </article>

        <div className="space-y-6">
          <p className="eyebrow">FLEET CAPABILITY</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
            Built around hotshot equipment movement.
          </h2>
          <p className="text-base leading-relaxed text-[var(--muted)] md:text-lg">
            Bluport&apos;s current fleet is built for responsive equipment movement using Ford F-350
            trucks and 40&apos; power tilt trailers - a practical setup for attachments, rental
            equipment, trailers, and field-support assets.
          </p>

          <ul className="divide-y divide-[rgba(148,163,184,0.24)] border-y border-[rgba(148,163,184,0.24)]">
            {fleetSpecs.map((spec) => (
              <li key={spec} className="py-3 text-sm font-medium tracking-[0.02em] text-[var(--foreground)] md:text-base">
                {spec}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
