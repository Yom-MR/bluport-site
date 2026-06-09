import Container from "@/components/ui/Container";

const services = [
  "Equipment Transportation - Hotshot and specialized movement for machines, attachments, trailers, and field assets.",
  "Rapid Response Logistics - Fast mobilization for schedule threats, outage support, and urgent repositioning.",
  "Dedicated Capacity - Reserved truck and trailer support for recurring routes and predictable execution.",
  "Project Logistics - Coordinated movement for phased jobs, hard windows, and multi-stop timelines.",
  "Storage & Staging - Controlled support for timed releases, yard transitions, and site readiness.",
  "Logistics Consulting - Practical planning for movement workflows, communication, and dispatch rhythm.",
];

export default function ServicesEditorial() {
  return (
    <section id="services" className="section-shell section-light">
      <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="max-w-xl space-y-5">
          <p className="eyebrow">SERVICES</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
            Services built for field execution.
          </h2>
          <p className="text-base leading-relaxed text-[var(--muted)] md:text-lg">
            Bluport supports the work that happens before a job can start, after a schedule
            changes, and when equipment needs to be repositioned fast.
          </p>
        </div>

        <ol className="divide-y divide-[rgba(148,163,184,0.24)] border-y border-[rgba(148,163,184,0.24)]">
          {services.map((service, index) => {
            const [title, body] = service.split(" - ");
            return (
              <li key={title} className="grid gap-3 py-4 sm:grid-cols-[auto_1fr] sm:gap-4">
                <span className="text-xs font-semibold tracking-[0.16em] text-[var(--blue)] uppercase">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)] md:text-base">{body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
