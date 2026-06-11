import Link from "next/link";
import Container from "@/components/ui/Container";

const services = [
  {
    number: "01",
    title: "Equipment Transportation",
    body: "Machines, attachments, trailers, and jobsite assets.",
    reveal: "Built for teams that cannot absorb late or unsecured equipment handoffs.",
  },
  {
    number: "02",
    title: "Rapid Response Logistics",
    body: "Urgent moves, replacement equipment, outage support, and schedule recovery.",
    reveal: "Supports high-urgency moves when downtime cost is already compounding.",
  },
  {
    number: "03",
    title: "Dedicated Capacity",
    body: "Recurring routes, rental fleet support, and project coverage.",
    reveal: "Gives operations predictable truck and trailer access for recurring demand.",
  },
  {
    number: "04",
    title: "Project Logistics",
    body: "Phased work, hard windows, and multi-stop timelines.",
    reveal: "Helps protect project sequencing across constrained delivery dependencies.",
  },
  {
    number: "05",
    title: "Storage & Staging",
    body: "Timed releases, yard transitions, and site-readiness support.",
    reveal: "Coordinates release timing so assets arrive when sites are truly ready.",
  },
  {
    number: "06",
    title: "Logistics Consulting",
    body: "Movement workflows, communication cadence, and dispatch standards.",
    reveal: "Improves planning discipline before repeated process friction becomes cost.",
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
            Bluport supports equipment-heavy teams that need clear communication and disciplined
            movement execution.
          </p>
          <Link
            href="/services"
            className="inline-flex rounded-lg border border-[rgba(111,127,145,0.34)] px-5 py-2.5 text-xs font-semibold tracking-[0.12em] text-[#17324a] uppercase transition-colors hover:border-[#1fb6e8] hover:text-[#0f4b6b]"
          >
            View Detailed Services
          </Link>
        </div>

        <ol className="divide-y divide-[rgba(111,127,145,0.3)] border-y border-[rgba(111,127,145,0.3)]">
          {services.map((service) => (
            <li
              key={service.title}
              className="group grid gap-4 py-6 transition-colors duration-200 hover:bg-[rgba(238,243,248,0.75)] md:grid-cols-[70px_1fr] md:items-start md:py-7"
            >
              <span className="text-sm font-bold tracking-[0.12em] text-[#1fb6e8]">{service.number}</span>
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#031426]">
                  {service.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[#34465a]">{service.body}</p>
                <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-[#4d5f74] opacity-0 transition-all duration-200 group-hover:max-h-14 group-hover:opacity-100">
                  {service.reveal}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
