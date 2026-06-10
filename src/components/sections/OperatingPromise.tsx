import Container from "@/components/ui/Container";

const principles = [
  {
    title: "Plan before dispatch",
    body: "Asset details, site constraints, trailer fit, timing, and contact points are clarified upfront.",
  },
  {
    title: "Communicate before customers ask",
    body: "Updates should reduce uncertainty, not create another follow-up task.",
  },
  {
    title: "Move with field context",
    body: "Jobsite realities, yard access, and delivery windows shape the plan.",
  },
  {
    title: "Close out with documentation",
    body: "Delivery confirmation, POD handling, and follow-up complete the move.",
  },
] as const;

export default function OperatingPromise() {
  return (
    <section className="section-pad bg-[#f1f6fb] pt-[152px] text-[#031426] md:pt-[168px]">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
        <div className="max-w-[74ch] space-y-5">
          <h2 className="section-title max-w-[15ch] text-[#031426]">
            Execution quality is the product.
          </h2>
          <p className="text-base leading-[1.65] text-[#34465a] md:text-lg">
            The truck matters, but the operating rhythm matters more. Bluport plans around site
            access, timing, securement, communication, and closeout so customers know what is
            happening before they have to ask.
          </p>
        </div>

        <ul className="divide-y divide-[rgba(111,127,145,0.3)] border-y border-[rgba(111,127,145,0.3)]">
          {principles.map((principle) => (
            <li key={principle.title} className="py-5">
              <p className="text-lg leading-snug font-semibold tracking-[-0.02em] text-[#031426] md:text-xl">
                {principle.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#4d5f74] md:text-base">{principle.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
