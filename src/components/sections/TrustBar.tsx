import Container from "@/components/ui/Container";
import { TRUST_BAR_ITEMS } from "@/lib/constants";
import { Radio, ShieldCheck, Truck, Zap, CircleDot } from "lucide-react";

const trustIcons = [ShieldCheck, Zap, Truck, Radio, CircleDot];

export default function TrustBar() {
  return (
    <section className="signal-line border-b border-[var(--border)] bg-[rgba(6,26,51,0.46)] py-4">
      <Container className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <p className="technical-label text-[var(--foreground)]">OPERATIONAL SIGNALS</p>
        <ul className="flex flex-wrap items-center gap-3 lg:justify-end">
          {TRUST_BAR_ITEMS.map((item, index) => {
            const Icon = trustIcons[index] ?? CircleDot;

            return (
              <li
                key={item}
                className="glass-card inline-flex min-h-10 items-center gap-2 rounded-full px-3 py-2 text-[11px] font-medium tracking-[0.1em] text-[var(--muted)] uppercase"
              >
                <Icon size={14} className="text-[var(--cyan)]" strokeWidth={1.8} />
                {item}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}