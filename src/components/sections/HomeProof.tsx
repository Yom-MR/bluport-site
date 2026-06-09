import { Award, ClipboardCheck, MapPin, ShieldCheck, Truck, WalletCards } from "lucide-react";
import Container from "@/components/ui/Container";

const proofPoints = [
  { label: "Veteran-owned", detail: "Veteran-led operating discipline.", Icon: Award },
  { label: "Houston-based", detail: "Texas and regional field support.", Icon: MapPin },
  { label: "Ford F-350 fleet", detail: "Built for hotshot movement.", Icon: Truck },
  { label: "40' power tilt trailers", detail: "Ready for equipment and attachments.", Icon: ShieldCheck },
  { label: "TWIC-certified personnel", detail: "Prepared for secure facilities.", Icon: ClipboardCheck },
  { label: "Insured commercial operations", detail: "$1M auto, $250K cargo, $2M GL aggregate.", Icon: WalletCards },
];

export default function HomeProof() {
  return (
    <section className="section-shell section-light !py-8 md:!py-10">
      <Container>
        <ul className="grid gap-x-6 gap-y-5 border-y border-[rgba(148,163,184,0.3)] py-6 md:grid-cols-2 xl:grid-cols-6">
          {proofPoints.map((point) => (
            <li key={point.label} className="space-y-2">
              <p className="flex items-center gap-2.5 text-sm font-semibold text-[var(--foreground)]">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(14,165,233,0.25)] bg-[rgba(14,165,233,0.08)] text-[var(--blue)]">
                  <point.Icon size={15} strokeWidth={1.9} />
                </span>
                {point.label}
              </p>
              <p className="hidden text-xs leading-relaxed text-[var(--muted)] md:block">{point.detail}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
