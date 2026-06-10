import Container from "@/components/ui/Container";

const columns = [
  {
    title: "Equipment movement",
    body: "Hotshot transport for machines, attachments, trailers, and field-support assets.",
  },
  {
    title: "Responsive capacity",
    body: "Scheduled and rapid-response support when timing changes or replacement equipment is needed.",
  },
  {
    title: "Closeout discipline",
    body: "Delivery confirmation, POD handling, and follow-up built into the move.",
  },
];

export default function IntroStatement() {
  return (
    <section className="bg-[#f4f7fb] py-24 text-[#031424] md:py-28">
      <Container className="space-y-14">
        <div className="mx-auto max-w-4xl space-y-5 text-center">
          <h2 className="text-balance text-4xl leading-tight font-semibold tracking-[-0.03em] md:text-6xl">
            Field logistics for equipment-driven work.
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#6b7c8f] md:text-xl">
            When a machine, attachment, trailer, or field-support asset is late, crews wait and
            schedules slip. Bluport focuses on the moves that keep jobsites, rental fleets, and
            infrastructure operations active.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {columns.map((column) => (
            <article key={column.title} className="space-y-3 border-t border-[rgba(107,124,143,0.28)] pt-4">
              <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{column.title}</h3>
              <p className="text-sm leading-relaxed text-[#6b7c8f] md:text-base">{column.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
