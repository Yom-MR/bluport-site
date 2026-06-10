import Container from "@/components/ui/Container";

const principles = [
  "Plan before dispatch.",
  "Communicate before customers ask.",
  "Move with field context.",
  "Close out with documentation.",
];

export default function OperatingPromise() {
  return (
    <section className="bg-[#f4f7fb] py-24 text-[#031424] md:py-28">
      <Container className="space-y-10">
        <div className="max-w-4xl space-y-5">
          <h2 className="text-balance text-3xl leading-tight font-semibold tracking-[-0.03em] md:text-5xl">
            Execution quality is the product.
          </h2>
          <p className="text-base leading-relaxed text-[#6b7c8f] md:text-lg">
            Every move is planned around site access, timing, securement, communication, and
            closeout - because customers need confidence before the truck arrives.
          </p>
        </div>

        <ul className="grid gap-4 border-t border-[rgba(107,124,143,0.26)] pt-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <li key={principle} className="text-lg leading-snug font-semibold tracking-tight md:text-xl">
              {principle}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
