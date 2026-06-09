import Image from "next/image";
import Container from "@/components/ui/Container";

const imageTiles = [
  {
    title: "Construction & Equipment Rental",
    body: "Rental fleet continuity and jobsite readiness.",
    focus: "Support focus: staged equipment availability",
    image: "/images/loads/IMG_0364.JPEG",
    className: "md:col-span-2 md:row-span-2 min-h-[350px]",
  },
  {
    title: "Utilities & Infrastructure",
    body: "Outage response and infrastructure support.",
    focus: "Support focus: field response timing",
    image: "/images/industries/industry-utilities-infrastructure.jpg",
    className: "min-h-[220px]",
  },
  {
    title: "Industrial & Manufacturing",
    body: "Reducing downtime for production support.",
    focus: "Support focus: continuity under schedule pressure",
    image: "/images/jobsites/industry-industrial-manufacturing.jpg",
    className: "min-h-[220px]",
  },
  {
    title: "Data Center Construction",
    body: "Scheduled support for uptime-driven builds.",
    focus: "Support focus: sequence-aware delivery",
    image: "/images/jobsites/industry-data-center.jpg",
    className: "md:col-span-2 min-h-[220px]",
  },
];

const technicalTiles = [
  {
    title: "Aerospace & Defense",
    body: "Disciplined execution for sensitive cargo and mission-focused operations.",
    focus: "Support focus: controlled handling",
  },
  {
    title: "Government & Emergency Response",
    body: "Reliable support for urgent response environments and public missions.",
    focus: "Support focus: response reliability",
  },
];

export default function HomeIndustries() {
  return (
    <section id="industries" className="section-shell section-light">
      <Container className="space-y-8">
        <header className="max-w-4xl space-y-4">
          <p className="eyebrow">INDUSTRIES</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
            Built for operations where downtime is expensive.
          </h2>
          <p className="text-base leading-relaxed text-[var(--muted)] md:text-lg">
            Bluport supports field teams, project managers, rental fleets, and infrastructure
            operators who need equipment in place when the work is ready.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-4">
          {imageTiles.map((tile) => (
            <article
              key={tile.title}
              className={`relative overflow-hidden rounded-3xl border border-[rgba(148,163,184,0.28)] ${tile.className}`}
            >
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,23,0.15),rgba(2,8,23,0.78))]" />
              <div className="relative z-10 flex h-full flex-col justify-end p-5 md:p-6">
                <h3 className="text-xl font-semibold text-white md:text-2xl">{tile.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[rgba(226,232,240,0.92)] md:text-base">
                  {tile.body}
                </p>
                <p className="mt-3 text-xs font-semibold tracking-[0.09em] text-[var(--cyan)] uppercase">
                  {tile.focus}
                </p>
              </div>
            </article>
          ))}

          {technicalTiles.map((tile) => (
            <article
              key={tile.title}
              className="relative min-h-[220px] overflow-hidden rounded-3xl border border-[rgba(148,163,184,0.3)] bg-[linear-gradient(145deg,#0d1728,#1a2b45)] p-6"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(34,211,238,0.12)_100%)]" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <p className="technical-label text-[rgba(148,163,184,0.9)]">Technical Coverage</p>
                  <h3 className="mt-3 text-xl font-semibold text-[var(--foreground)] md:text-2xl">
                    {tile.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[rgba(226,232,240,0.84)] md:text-base">
                    {tile.body}
                  </p>
                </div>
                <p className="mt-4 text-xs font-semibold tracking-[0.09em] text-[var(--cyan)] uppercase">
                  {tile.focus}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
