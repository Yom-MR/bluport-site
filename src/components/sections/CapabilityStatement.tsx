import { CircleCheck, Gauge, Timer, Truck } from "lucide-react";
import Container from "@/components/ui/Container";

const capabilities = [
  { label: "Equipment transport", Icon: Truck },
  { label: "Rapid response moves", Icon: Timer },
  { label: "Scheduled capacity", Icon: Gauge },
  { label: "Field-ready closeout", Icon: CircleCheck },
];

export default function CapabilityStatement() {
  return (
    <section className="section-shell section-light">
      <Container className="space-y-10">
        <div className="max-w-4xl space-y-5">
          <p className="eyebrow">CAPABILITY</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
            Field logistics for equipment-driven work.
          </h2>
          <p className="text-base leading-relaxed text-[var(--muted)] md:text-lg">
            A delayed machine, attachment, trailer, or field asset can hold up an entire crew.
            Bluport helps move the equipment behind active jobs, rental operations,
            infrastructure work, and time-sensitive field support.
          </p>
        </div>

        <ul className="grid gap-4 border-y border-[rgba(148,163,184,0.28)] py-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <li key={item.label} className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(14,165,233,0.28)] bg-[rgba(14,165,233,0.08)] text-[var(--blue)]">
                <item.Icon size={17} strokeWidth={1.9} />
              </span>
              <span className="text-sm font-semibold text-[var(--foreground)] md:text-base">{item.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
