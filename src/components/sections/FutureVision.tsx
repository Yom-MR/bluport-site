import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const modes = [
  {
    title: "Ground",
    status: "Active",
    description: "Hotshot, specialized equipment transport, field logistics, and dedicated capacity.",
  },
  {
    title: "Brokerage",
    status: "Near-term",
    description: "Expanded lane flexibility through coordinated partner capacity.",
  },
  {
    title: "Ocean",
    status: "Future",
    description: "Project cargo support for broader multimodal planning.",
  },
  {
    title: "Air",
    status: "Future",
    description: "Time-critical support options for high-priority movements.",
  },
  {
    title: "Aerospace Support",
    status: "Future",
    description: "Long-range support model for aerospace-adjacent logistics operations.",
  },
];

export default function FutureVision() {
  return (
    <section id="careers" className="section-shell section-light py-12">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="FUTURE VISION"
          title="Ground-first today. Multimodal tomorrow."
          description="Bluport is focused first on specialized ground logistics and equipment movement, with a long-term vision to support broader mission-critical freight across additional modes."
        />
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {modes.map((mode) => (
            <article
              key={mode.title}
              className={`rounded-2xl border p-6 ${
                mode.status === "Active"
                  ? "border-[rgba(34,211,238,0.35)] bg-[linear-gradient(150deg,rgba(14,165,233,0.14),rgba(255,255,255,0.96))]"
                  : mode.status === "Near-term"
                    ? "border-[rgba(59,130,246,0.35)] bg-[rgba(239,246,255,0.96)]"
                    : "border-[var(--border)] bg-white"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{mode.title}</h3>
                <span
                  className={`rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] uppercase ${
                    mode.status === "Active"
                      ? "bg-[rgba(34,197,94,0.12)] text-[var(--green)]"
                      : mode.status === "Near-term"
                        ? "bg-[rgba(59,130,246,0.12)] text-[#1d4ed8]"
                      : "bg-[rgba(148,163,184,0.12)] text-[var(--muted)]"
                  }`}
                >
                  {mode.status}
                </span>
              </div>
              <p className="mt-3 text-sm text-[var(--muted)]">{mode.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}