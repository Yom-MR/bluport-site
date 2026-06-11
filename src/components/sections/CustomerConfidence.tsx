import Link from "next/link";
import { ArrowUpRight, BadgeCheck, MessageSquare, ShieldCheck, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const differentiators = [
  {
    icon: Star,
    title: "Veteran-owned operating discipline",
    body: "Mission planning, accountability, and after-action rigor applied to every move.",
  },
  {
    icon: ShieldCheck,
    title: "TWIC-ready, secure-site crews",
    body: "Cleared personnel for port-adjacent, industrial, and controlled-access work.",
  },
  {
    icon: BadgeCheck,
    title: "Insurance & compliance built in",
    body: "Coverage and securement standards are part of the process, not an afterthought.",
  },
  {
    icon: MessageSquare,
    title: "Communication that cuts follow-up",
    body: "Proactive jobsite-aware updates so you stop chasing status on the asset.",
  },
] as const;

export default function CustomerConfidence() {
  return (
    <section className="section-pad bg-[var(--navy-950)] text-white">
      <Container className="grid gap-12 lg:grid-cols-[40%_60%] lg:items-start lg:gap-16">
        <Reveal className="space-y-6 lg:sticky lg:top-28">
          <p className="eyebrow">WHY CUSTOMERS TRUST BLUPORT</p>
          <h2 className="section-title max-w-[15ch] text-white">
            Confidence before the truck rolls.
          </h2>
          <p className="text-base leading-[1.7] text-[#c8d2dd] md:text-lg">
            Equipment-dependent teams need to know who is handling the move and how it will be
            communicated. Bluport puts the operating signals up front so the decision is easy.
          </p>
          <Link
            href="/#request-capacity"
            className="group inline-flex items-center gap-2 text-sm font-semibold tracking-[0.04em] text-[var(--accent-light)] transition-colors hover:text-white"
          >
            Request capacity for your next move
            <ArrowUpRight size={17} aria-hidden className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-[rgba(200,210,221,0.16)] bg-[rgba(200,210,221,0.12)] sm:grid-cols-2">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delay={index * 90}
                className="group bg-[var(--navy-900)] p-7 transition-colors hover:bg-[var(--navy-850)] md:p-8"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(242,105,28,0.14)] text-[var(--accent-light)] transition-transform group-hover:-translate-y-0.5">
                  <Icon size={22} aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-white">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-7 text-[#9fb1c4]">{item.body}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
