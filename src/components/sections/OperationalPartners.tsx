import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const systems = [
  { name: "RTS", detail: "Factoring support" },
  { name: "HOS247", detail: "ELD compliance" },
  { name: "WEX", detail: "Fuel card program" },
  { name: "Progressive", detail: "Commercial insurance" },
  { name: "Ford F-350", detail: "Primary fleet platform" },
  { name: "TWIC", detail: "Port and secure facility readiness" },
];

export default function OperationalPartners() {
  return (
    <section className="section-shell section-light section-kicker">
      <Container className="space-y-8">
        <SectionHeader
          eyebrow="OPERATIONAL PARTNERS & SYSTEMS"
          title="Built with industry-standard operating support."
          description="Bluport's operations are supported by trusted systems for factoring, ELD compliance, fuel management, insurance, and field documentation."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {systems.map((system) => (
            <article key={system.name} className="rounded-xl border border-[var(--border)] bg-white p-5 shadow-[0_8px_26px_rgba(15,23,42,0.07)]">
              <p className="text-sm font-semibold tracking-wide text-[var(--foreground)]">{system.name}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{system.detail}</p>
            </article>
          ))}
        </div>
        <p className="text-xs text-[var(--muted)]">
          Names are referenced for operational context only and do not imply endorsement or sponsorship.
        </p>
      </Container>
    </section>
  );
}
