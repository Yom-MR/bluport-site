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
      <div className="absolute inset-0 blueprint-grid opacity-30" aria-hidden />
      <Container className="relative py-4">
        <ul className="grid grid-cols-2 gap-3 py-6 sm:gap-4 lg:grid-cols-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Reveal
                as="li"
                key={metric.value}
                delay={index * 80}
                className="group flex flex-col gap-3 rounded-2xl border border-[rgba(200,210,221,0.12)] bg-[rgba(255,255,255,0.02)] p-5 transition-colors hover:border-[rgba(47,116,189,0.45)] md:p-6"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(47,116,189,0.14)] text-[var(--accent-light)] transition-transform group-hover:-translate-y-0.5">
                  <Icon size={19} aria-hidden />
                </span>
                <div>
                  <span className="block text-lg font-bold leading-tight tracking-[-0.03em] text-white md:text-xl">
                    {metric.value}
                  </span>
                  <span className="mt-1.5 block text-[0.8rem] font-medium uppercase tracking-[0.1em] text-[var(--steel-400)]">
                    {metric.label}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
