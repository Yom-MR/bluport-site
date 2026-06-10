import Container from "@/components/ui/Container";

const services = [
  {
    title: "Equipment Transportation",
    body: "Movement for machines, attachments, trailers, and jobsite assets.",
  },
  {
    title: "Rapid Response Logistics",
    body: "Fast support for urgent moves, outage response, recovery operations, and replacement equipment.",
  },
  {
    title: "Dedicated Capacity",
    body: "Reserved truck and trailer coverage for recurring routes and project support.",
  },
  {
    title: "Project Logistics",
    body: "Coordinated movement for phased jobs, hard windows, and multi-stop timelines.",
  },
  {
    title: "Storage & Staging",
    body: "Timed releases, yard transitions, and site-readiness support.",
  },
  {
    title: "Logistics Consulting",
    body: "Practical planning for movement workflows, communication rhythm, and dispatch standards.",
  },
];

export default function ServicesPanel() {
  return (
    <section className="bg-[#f4f7fb] py-24 text-[#031424] md:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <h2 className="text-balance text-3xl leading-tight font-semibold tracking-[-0.03em] md:text-5xl">
            Services built for field execution.
          </h2>
          <p className="text-base leading-relaxed text-[#6b7c8f] md:text-lg">
            Bluport supports the work that happens before a job can start, after a schedule
            changes, and when equipment needs to be repositioned fast.
          </p>
        </div>

        <div className="rounded-[1.7rem] border border-[rgba(107,124,143,0.24)] bg-white/70 px-6 py-4 md:px-8 md:py-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="group border-b border-[rgba(107,124,143,0.2)] py-4 last:border-b-0"
            >
              <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-[#20c7e8] md:text-2xl">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6b7c8f] md:text-base">{service.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
