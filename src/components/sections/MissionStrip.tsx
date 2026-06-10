import Container from "@/components/ui/Container";

const missionItems = [
  "Veteran-owned",
  "Houston-based",
  "TWIC-certified personnel",
  "Insured commercial operations",
] as const;

export default function MissionStrip() {
  return (
    <section className="section-pad bg-[#eef3f8] text-[#031426]">
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div className="space-y-4">
          <h2 className="section-title max-w-[16ch]">Field logistics for equipment-driven work.</h2>
          <p className="max-w-[66ch] text-base leading-[1.65] text-[#34465a]">
            A delayed machine, attachment, trailer, or field-support asset can hold up an entire
            crew. Bluport focuses on the moves that keep field operations active.
          </p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 lg:justify-items-end">
          {missionItems.map((item) => (
            <li
              key={item}
              className="inline-flex w-full items-center gap-3 border-b border-[rgba(52,70,90,0.18)] pb-3 text-sm font-semibold tracking-[0.03em] text-[#031426] lg:w-[305px]"
            >
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#1fb6e8]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
