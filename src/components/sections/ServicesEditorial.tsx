import { CheckCircle2, CircleGauge, Compass, ShieldCheck, Timer, Wrench } from "lucide-react";
import Container from "@/components/ui/Container";

const services = [
  {
    number: "01",
    title: "Equipment Transportation",
    body: "Hotshot movement for machines, attachments, trailers, and jobsite assets where timing, securement, and site access matter.",
    bestFor: "Equipment repositioning, rental fleet turns, and project-critical lane moves.",
    benefit: "Reduces downtime risk by matching trailer fit and securement to asset requirements.",
    icon: CircleGauge,
  },
  {
    number: "02",
    title: "Rapid Response Logistics",
    body: "Support for urgent moves, replacement equipment, outage-related movement, and schedule recovery when delays create operational cost.",
    bestFor: "Outage support, urgent replacement equipment, and timeline recovery.",
    benefit: "Improves schedule recovery by moving critical assets fast with clear communication.",
    icon: Timer,
  },
  {
    number: "03",
    title: "Dedicated Capacity",
    body: "Reserved truck and trailer support for recurring routes, rental fleet coverage, and customers who need more predictability than spot-market availability.",
    bestFor: "Recurring route commitments and sustained fleet support needs.",
    benefit: "Creates steadier movement planning and fewer last-minute sourcing disruptions.",
    icon: CheckCircle2,
  },
  {
    number: "04",
    title: "Project Logistics",
    body: "Coordinated movement for phased schedules, hard delivery windows, multi-stop work, and equipment sequencing across active jobs.",
    bestFor: "Infrastructure, industrial, and data center project sequencing.",
    benefit: "Improves execution control when multiple deliveries and dependencies must align.",
    icon: Compass,
  },
  {
    number: "05",
    title: "Storage & Staging",
    body: "Support for timed releases, yard transitions, and site-readiness coordination when equipment cannot arrive too early or too late.",
    bestFor: "Yard transitions and release timing around constrained jobsites.",
    benefit: "Protects site flow by matching arrival timing to real project readiness.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Logistics Consulting",
    body: "Practical planning for movement workflows, communication cadence, lane setup, and dispatch standards as operations grow.",
    bestFor: "Teams tightening operating standards and dispatch consistency.",
    benefit: "Strengthens decisions before execution pressure creates avoidable cost.",
    icon: Wrench,
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
              className="grid gap-4 py-6 transition-colors duration-200 hover:bg-[rgba(238,243,248,0.75)] focus-within:bg-[rgba(238,243,248,0.75)] md:grid-cols-[70px_1fr] md:items-start md:py-7"
            >
              <span className="text-sm font-bold tracking-[0.12em] text-[#1fb6e8]">{service.number}</span>
              <div>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <span>
                      <span className="inline-flex items-center gap-2">
                        <service.icon size={18} aria-hidden className="text-[#1fb6e8]" />
                        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#031426]">
                          {service.title}
                        </h3>
                      </span>
                      <p className="mt-2 text-base leading-relaxed text-[#34465a]">{service.body}</p>
                    </span>
                    <CheckCircle2
                      size={18}
                      aria-hidden
                      className="mt-2 shrink-0 text-[#1fb6e8] transition-transform group-open:rotate-90"
                    />
                  </summary>
                  <div className="mt-4 rounded-xl border border-[rgba(111,127,145,0.25)] bg-white/70 p-4 text-sm leading-relaxed text-[#334b61]">
                    <p>
                      <span className="font-semibold text-[#16354e]">Best for:</span> {service.bestFor}
                    </p>
                    <p className="mt-2">
                      <span className="font-semibold text-[#16354e]">Operational benefit:</span>{" "}
                      {service.benefit}
                    </p>
                  </div>
                </details>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
