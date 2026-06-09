import Image from "next/image";
import Container from "@/components/ui/Container";

const featurePanels = [
  {
    title: "Construction & Equipment Rental",
    body: "Keep rental fleet continuity and jobsite readiness aligned with real field timing.",
    image: "/images/loads/IMG_0364.JPEG",
  },
  {
    title: "Utilities & Infrastructure",
    body: "Support outage-sensitive infrastructure work where delayed equipment impacts crews immediately.",
    image: "/images/industries/industry-utilities-infrastructure.jpg",
  },
];

const supporting = [
  {
    title: "Industrial & Manufacturing",
    body: "Movement support aimed at reducing production downtime risk.",
    image: "/images/jobsites/industry-industrial-manufacturing.jpg",
  },
  {
    title: "Data Center Construction",
    body: "Schedule-aware support for uptime-driven infrastructure builds.",
    image: "/images/jobsites/industry-data-center.jpg",
  },
  {
    title: "Aerospace & Defense",
    body: "Disciplined coordination for sensitive cargo and mission-focused operations.",
    technical: true,
  },
  {
    title: "Government & Emergency Response",
    body: "Reliable support for urgent response environments and public missions.",
    technical: true,
  },
];

export default function IndustriesEditorial() {
  return (
    <section id="industries" className="section-shell section-light">
      <Container className="space-y-8">
        <header className="max-w-4xl space-y-4">
          <p className="eyebrow">INDUSTRIES</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
            Industry support built for critical schedules.
          </h2>
        </header>

        <div className="grid gap-4 lg:grid-cols-2">
          {featurePanels.map((panel) => (
            <article
              key={panel.title}
              className="relative min-h-[280px] overflow-hidden rounded-[1.8rem] border border-[rgba(148,163,184,0.28)]"
            >
              <Image
                src={panel.image}
                alt={panel.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,23,0.16),rgba(2,8,23,0.76))]" />
              <div className="relative z-10 flex h-full flex-col justify-end p-6">
                <h3 className="text-2xl font-semibold text-white">{panel.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[rgba(226,232,240,0.92)] md:text-base">
                  {panel.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {supporting.map((item) => (
            <article
              key={item.title}
              className={`relative overflow-hidden rounded-2xl border border-[rgba(148,163,184,0.26)] p-5 ${item.technical ? "bg-[linear-gradient(145deg,#0f1a2b,#1b2a43)]" : "bg-[rgba(255,255,255,0.92)]"}`}
            >
              {!item.technical && item.image ? (
                <>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,23,0.25),rgba(2,8,23,0.82))]" />
                </>
              ) : (
                <div className="absolute inset-0 bg-[linear-gradient(140deg,transparent,rgba(34,211,238,0.12))]" />
              )}
              <div className="relative z-10">
                <h3 className={`text-xl font-semibold ${item.technical ? "text-[var(--foreground)]" : "text-white"}`}>
                  {item.title}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${item.technical ? "text-[rgba(226,232,240,0.86)]" : "text-[rgba(226,232,240,0.92)]"}`}>
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
