import Container from "@/components/ui/Container";
import { Award, ClipboardCheck, FileCheck, MapPin, ShieldCheck, Truck } from "lucide-react";

const trustItems = [
  {
    title: "Veteran-owned",
    description: "Veteran-led operating discipline.",
    Icon: Award,
  },
  {
    title: "Houston-based",
    description: "Serving equipment-heavy operations across Texas and beyond.",
    Icon: MapPin,
  },
  {
    title: "Ford F-350 fleet",
    description: "Hotshot capability built around dependable truck platforms.",
    Icon: Truck,
  },
  {
    title: "40' power tilt trailers",
    description: "Built for equipment, attachments, and field-support assets.",
    Icon: ShieldCheck,
  },
  {
    title: "TWIC-certified personnel",
    description: "Ready for port and secure-facility requirements.",
    Icon: ClipboardCheck,
  },
  {
    title: "Insured commercial operations",
    description: "$1M auto, $250K cargo, and $2M general liability aggregate.",
    Icon: FileCheck,
  },
];

export default function TrustBar() {
  return (
    <section className="section-shell section-light py-10">
      <Container className="space-y-6">
        <header className="max-w-2xl">
          <p className="eyebrow">OPERATING CREDENTIALS</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--foreground)] md:text-3xl">
            Operating credentials
          </h2>
        </header>
        <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {trustItems.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-3 rounded-xl border border-[rgba(148,163,184,0.26)] bg-[linear-gradient(145deg,#ffffff,#f6f9fc)] px-4 py-4 shadow-[0_12px_24px_rgba(15,23,42,0.08)]"
            >
              <span className="mt-0.5 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-[rgba(14,165,233,0.24)] bg-[rgba(14,165,233,0.1)] text-[var(--blue)]">
                <item.Icon size={18} strokeWidth={1.9} />
              </span>
              <span>
                <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">{item.description}</p>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}