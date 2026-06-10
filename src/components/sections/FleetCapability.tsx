import Image from "next/image";
import Container from "@/components/ui/Container";

const specs = [
  "Ford F-350 platform",
  "40' power tilt trailer capability",
  "Equipment and attachment transport",
  "Houston-based dispatch",
  "Scheduled and rapid-response support",
  "POD and closeout follow-up",
];

export default function FleetCapability() {
  return (
    <section className="bg-[#031424] py-24 md:py-28">
      <Container className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
        <article className="relative min-h-[460px] overflow-hidden rounded-[2rem]">
          <Image
            src="/images/loads/IMG_5849.PNG"
            alt="Bluport Ford F-350 connected to trailer for equipment movement"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 52vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,7,17,0.08),rgba(2,7,17,0.62))]" />
        </article>

        <div className="space-y-6 text-[#f4f7fb]">
          <h2 className="text-balance text-3xl leading-tight font-semibold tracking-[-0.03em] md:text-5xl">
            Built around Ford F-350 hotshot capability.
          </h2>
          <p className="text-base leading-relaxed text-[rgba(244,247,251,0.78)] md:text-lg">
            Bluport&apos;s current fleet is built around Ford F-350 trucks and 40&apos; power tilt
            trailers - a practical platform for equipment, attachments, trailers, and
            field-support movement.
          </p>

          <ul className="divide-y divide-[rgba(148,163,184,0.24)] border-y border-[rgba(148,163,184,0.24)]">
            {specs.map((spec) => (
              <li key={spec} className="py-3 text-sm font-medium tracking-[0.01em] text-[rgba(244,247,251,0.9)] md:text-base">
                {spec}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
