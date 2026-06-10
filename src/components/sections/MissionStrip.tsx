import Container from "@/components/ui/Container";

const credentials = [
  {
    title: "Veteran-owned",
    description: "Discipline and mission focus shape the operating model.",
  },
  {
    title: "Houston-based",
    description: "Built around Gulf Coast field operations and regional equipment movement.",
  },
  {
    title: "TWIC-certified personnel",
    description: "Prepared for controlled-access, port, and industrial operating sites.",
  },
  {
    title: "Insured commercial operations",
    description: "$1M auto, $250K cargo, and $2M general liability aggregate.",
  },
] as const;

export default function MissionStrip() {
  return (
    <section className="section-pad bg-[#f4f7fb] text-[#031426]">
      <Container className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)] lg:items-start">
        <div className="space-y-5">
          <h2 className="section-title max-w-[14ch]">Field logistics for equipment-driven work.</h2>
          <p className="max-w-[65ch] text-[1.06rem] leading-[1.72] text-[#34465a]">
            A delayed machine, attachment, trailer, or field-support asset can hold up an entire
            crew. Bluport focuses on the moves that keep field operations active.
          </p>
        </div>

        <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {credentials.map((item) => (
            <li key={item.title} className="border-b border-[rgba(52,70,90,0.18)] pb-5">
              <p className="mt-3 text-base font-semibold tracking-[-0.015em] text-[#031426]">{item.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-[#4d5f74]">{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
