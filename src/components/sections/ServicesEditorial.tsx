import Container from "@/components/ui/Container";

const services = [
  {
    number: "01",
    title: "Equipment Transportation",
    body: "Hotshot and specialized movement for machines, attachments, trailers, and jobsite assets.",
  },
  {
    number: "02",
    title: "Rapid Response Logistics",
    body: "Fast support for urgent moves, outage response, recovery operations, and replacement equipment.",
  },
  {
    number: "03",
    title: "Dedicated Capacity",
    body: "Reserved truck and trailer coverage for recurring routes, rental fleet support, and project coverage.",
  },
  {
    number: "04",
    title: "Project Logistics",
    body: "Coordinated movement for phased jobs, hard windows, and multi-stop timelines.",
  },
  {
    number: "05",
    title: "Storage & Staging",
    body: "Timed releases, yard transitions, and site-readiness support.",
  },
  {
    number: "06",
    title: "Logistics Consulting",
    body: "Planning for movement workflows, communication standards, and dispatch rhythm.",
  },
] as const;

export default function ServicesEditorial() {
  return (
    <section id="services" className="section-pad bg-[#ffffff] pt-[152px] text-[#031426] md:pt-[168px]">
      <Container className="grid gap-10 lg:grid-cols-[40%_60%]">
        <div className="max-w-[46ch] space-y-7 lg:sticky lg:top-24 lg:self-start">
          <p className="eyebrow">SERVICES</p>
          <h2 className="section-title max-w-[14ch] text-[#031426]">
            Services built for field execution.
          </h2>
          <p className="text-base leading-[1.65] text-[#34465a]">
            Bluport supports the work that happens before a job can start, after a schedule
            changes, and when equipment needs to be repositioned fast.
          </p>
          <div className="max-w-[340px] border-t border-[rgba(111,127,145,0.35)] pt-4">
            <p className="text-xs font-bold tracking-[0.14em] text-[#1fb6e8] uppercase">Service Fit</p>
            <ul className="mt-3 divide-y divide-[rgba(111,127,145,0.28)]">
              <li className="py-2 text-sm leading-relaxed text-[#44586d]">Rental fleet support</li>
              <li className="py-2 text-sm leading-relaxed text-[#44586d]">Jobsite equipment movement</li>
              <li className="py-2 text-sm leading-relaxed text-[#44586d]">Utility and infrastructure response</li>
            </ul>
          </div>
        </div>

        <ol className="divide-y divide-[rgba(111,127,145,0.3)] border-y border-[rgba(111,127,145,0.3)]">
          {services.map((service) => (
            <li
              key={service.title}
              className="grid gap-4 py-6 transition-colors duration-200 hover:bg-[rgba(238,243,248,0.75)] md:grid-cols-[70px_1fr] md:items-start md:py-7"
            >
              <span className="text-sm font-bold tracking-[0.12em] text-[#1fb6e8]">{service.number}</span>
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#031426]">
                  {service.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[#34465a]">{service.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
