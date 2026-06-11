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
    label: "Ground-level equipment loading",
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
    <section className="relative border-y border-[rgba(200,210,221,0.12)] bg-[var(--navy-950)] text-white">
      <div className="absolute inset-0 blueprint-grid opacity-40" aria-hidden />
      <Container className="relative">
        <ul className="grid grid-cols-1 divide-y divide-[rgba(200,210,221,0.12)] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Reveal
                as="li"
                key={metric.value}
                delay={index * 90}
                className="flex items-start gap-4 py-8 sm:px-7 lg:border-l lg:border-[rgba(200,210,221,0.12)] lg:first:border-l-0"
              >
                <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[rgba(47,116,189,0.14)] text-[var(--accent-light)]">
                  <Icon size={20} aria-hidden />
                </span>
                <span>
                  <span className="block text-xl font-bold tracking-[-0.03em] text-white md:text-2xl">
                    {metric.value}
                  </span>
                  <span className="mt-1 block text-sm leading-snug text-[#9fb1c4]">{metric.label}</span>
                </span>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
