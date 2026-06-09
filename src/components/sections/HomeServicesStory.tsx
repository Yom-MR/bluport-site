import Container from "@/components/ui/Container";

const services = [
  {
    title: "Equipment Transportation",
    description:
      "Hotshot and specialized movement for machines, attachments, trailers, and jobsite assets.",
  },
  {
    title: "Rapid Response Logistics",
    description:
      "Fast mobilization for urgent moves, outage support, recovery operations, and replacement equipment.",
  },
  {
    title: "Dedicated Capacity",
    description:
      "Reserved truck and trailer coverage for recurring routes, rental fleet support, and project coverage.",
  },
  {
    title: "Project Logistics",
    description:
      "Coordinated movement for multi-stop jobs, phased schedules, and constrained delivery windows.",
  },
  {
    title: "Storage & Staging",
    description:
      "Support for timed releases, equipment yards, and jobsite congestion reduction.",
  },
  {
    title: "Logistics Consulting",
    description:
      "Planning support for movement workflows, communication standards, and dispatch rhythm.",
  },
];

export default function HomeServicesStory() {
  return (
    <section id="services" className="section-shell section-light">
      <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <header className="max-w-2xl space-y-5">
          <p className="eyebrow">SERVICE STORY</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
            Practical logistics for equipment-driven work.
          </h2>
          <p className="text-base leading-relaxed text-[var(--muted)] md:text-lg">
            Bluport supports the moves that keep field teams productive - urgent equipment
            transport, scheduled capacity, project movement, and jobsite-ready coordination.
          </p>
        </header>

        <ol className="divide-y divide-[rgba(148,163,184,0.26)] border-y border-[rgba(148,163,184,0.26)]">
          {services.map((service, index) => (
            <li key={service.title} className="grid gap-3 py-5 sm:grid-cols-[auto_1fr] sm:gap-4">
              <span className="text-xs font-semibold tracking-[0.16em] text-[var(--blue)] uppercase">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
