import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const modes = [
  {
    title: "Ground",
    status: "Active",
    description: "Hotshot, specialized equipment transport, field logistics, and dedicated capacity.",
  },
  {
    title: "Ocean",
    status: "Future",
    description: "International project cargo and global mission support.",
  },
  {
    title: "Air",
    status: "Future",
    description: "Expedited movement for time-critical assets and high-value shipments.",
  },
  {
    title: "Space",
    status: "Future",
    description: "Long-term support for aerospace, launch infrastructure, and recovery logistics.",
  },
];

export default function FutureVision() {
  return (
    <section id="careers" className="section-shell bg-[rgba(6,26,51,0.2)]">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="FUTURE VISION"
          title="Specialized ground logistics today. Global mission movement tomorrow."
          description="Bluport begins with urgent equipment movement and field logistics. The long-term vision is a mission-critical logistics network across ground, ocean, air, and eventually space."
        />
        <div className="grid gap-4 md:grid-cols-4">
          {modes.map((mode) => (
            <article
              key={mode.title}
              className={`rounded-2xl border p-6 ${
                mode.status === "Active"
                  ? "border-[rgba(34,211,238,0.35)] bg-[linear-gradient(150deg,rgba(14,165,233,0.2),rgba(6,26,51,0.55))] shadow-[0_12px_30px_rgba(14,165,233,0.12)]"
                  : "border-[var(--border)] bg-[rgba(15,23,42,0.45)]"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xl font-semibold text-[var(--foreground)]">{mode.title}</h3>
                <span
                  className={`rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] uppercase ${
                    mode.status === "Active"
                      ? "bg-[rgba(34,197,94,0.12)] text-[var(--green)]"
                      : "bg-[rgba(148,163,184,0.12)] text-[var(--muted)]"
                  }`}
                >
                  {mode.status}
                </span>
              </div>
              <p className="mt-4 text-sm text-[var(--muted)]">{mode.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}