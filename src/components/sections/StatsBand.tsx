import { Activity, MapPin, ShieldCheck, Truck } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const metrics = [
  {
    icon: MapPin,
    value: "TX + Gulf Coast",
    label: "Primary operating lanes",
  },
  {
    icon: Truck,
    value: "40' Power Tilt",
    label: "Ground-level loading",
  },
  {
    icon: Activity,
    value: "Request → Closeout",
    label: "Tracked at every stage",
  },
  {
    icon: ShieldCheck,
    value: "TWIC + Veteran-Led",
    label: "Secure-site ready crews",
  },
] as const;

export default function StatsBand() {
  return (
    <section className="relative border-b border-[rgba(200,210,221,0.12)] bg-[var(--navy-950)] text-white">
      <div className="absolute inset-0 blueprint-grid opacity-20" aria-hidden />
      <Container className="relative">
        <ul className="flex items-center justify-between gap-2 py-5 sm:gap-5 lg:gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Reveal
                as="li"
                key={metric.value}
                delay={index * 70}
                className="flex shrink-0 items-center gap-2 sm:gap-2.5"
              >
                <Icon size={16} aria-hidden className="shrink-0 text-[var(--accent-light)]" />
                <span className="whitespace-nowrap text-xs font-semibold tracking-[-0.01em] text-white sm:text-sm">
                  {metric.value}
                </span>
                <span className="hidden whitespace-nowrap text-[0.78rem] text-[var(--steel-400)] lg:inline">
                  · {metric.label}
                </span>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
