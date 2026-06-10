import Container from "@/components/ui/Container";

const missionPoints = [
  {
    title: "Pre-plan the move",
    description: "Asset details, access, timing, and handoff expectations are clarified before dispatch.",
  },
  {
    title: "Protect the crew day",
    description: "Late equipment creates idle labor and schedule drift. Bluport moves to prevent that downstream cost.",
  },
  {
    title: "Communicate with field context",
    description: "Updates are built around jobsites, rental turns, utility work, and industrial operating reality.",
  },
] as const;

export default function MissionStrip() {
  return (
    <section className="section-pad bg-[#f4f7fb] text-[#031426]">
      <Container className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)] lg:items-start">
        <div className="space-y-5">
          <p className="eyebrow">WHY BLUPORT EXISTS</p>
          <h2 className="section-title max-w-[14ch]">Field logistics for equipment-driven work.</h2>
          <p className="max-w-[65ch] text-[1.06rem] leading-[1.72] text-[#34465a]">
            A delayed machine, attachment, trailer, or field-support asset can hold up an entire
            crew. Bluport prevents those delays with pre-planning, clean communication, and
            execution tied to field conditions.
          </p>
        </div>

        <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-1">
          {missionPoints.map((item) => (
            <li key={item.title} className="border-b border-[rgba(52,70,90,0.18)] pb-5 last:border-b-0 last:pb-0">
              <p className="mt-3 text-base font-semibold tracking-[-0.015em] text-[#031426]">{item.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-[#4d5f74]">{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
