import Image from "next/image";
import Container from "@/components/ui/Container";

const tiles = [
  {
    title: "Construction & Equipment Rental",
    image: "/images/loads/IMG_0426.JPEG",
    description: "Equipment movement support that protects rental fleet continuity and jobsite readiness.",
  },
  {
    title: "Utilities & Infrastructure",
    image: "/images/jobsites/industry-utilities-infrastructure.jpg",
    description: "Field-aligned movement support for utility infrastructure schedules and outage-sensitive work.",
  },
  {
    title: "Industrial & Manufacturing",
    image: "/images/jobsites/industry-industrial-manufacturing.jpg",
    description: "Timely equipment positioning that helps reduce production disruption risk.",
  },
  {
    title: "Data Center & Critical Infrastructure",
    image: "/images/jobsites/industry-data-center.jpg",
    description: "Schedule-aware support for uptime-driven construction and critical infrastructure execution.",
  },
];

export default function IndustryMosaic() {
  return (
    <section className="bg-[#020711] py-24 text-[#f4f7fb] md:py-28">
      <Container className="space-y-10">
        <header className="max-w-4xl space-y-4">
          <h2 className="text-balance text-3xl leading-tight font-semibold tracking-[-0.03em] md:text-5xl">
            Built for the environments where downtime is expensive.
          </h2>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {tiles.map((tile) => (
            <article key={tile.title} className="relative min-h-[280px] overflow-hidden rounded-[1.75rem]">
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,7,17,0.2),rgba(2,7,17,0.78))]" />
              <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-8">
                <h3 className="text-2xl font-semibold tracking-tight">{tile.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[rgba(244,247,251,0.84)] md:text-base">
                  {tile.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="text-sm text-[rgba(148,163,184,0.9)] md:text-base">
          Additional support: aerospace, defense, government response, emergency movement, and
          project logistics.
        </p>
      </Container>
    </section>
  );
}
