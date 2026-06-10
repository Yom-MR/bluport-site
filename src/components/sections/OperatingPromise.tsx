import Container from "@/components/ui/Container";

const principles = [
  "Plan before dispatch",
  "Communicate before customers ask",
  "Move with field context",
  "Close out with documentation",
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
            Every move is planned around site access, timing, securement, communication, and
            closeout - because customers need confidence before the truck arrives.
          </p>
        </div>

        <ul className="divide-y divide-[rgba(111,127,145,0.3)] border-y border-[rgba(111,127,145,0.3)]">
          {principles.map((principle) => (
            <li key={principle} className="py-4 text-lg leading-snug font-semibold tracking-[-0.02em] text-[#031426] md:text-xl">
              {principle}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
