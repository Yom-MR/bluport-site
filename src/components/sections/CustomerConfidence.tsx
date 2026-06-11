import Container from "@/components/ui/Container";
import { TRUST_BAR_ITEMS } from "@/lib/constants";

const confidenceStatements = [
  "Veteran-owned and veteran-led operating discipline.",
  "TWIC-ready personnel for secure and port-adjacent work.",
  "Insurance and compliance standards built into the process.",
  "Communication standards that reduce customer follow-up.",
] as const;

export default function CustomerConfidence() {
  return (
    <section className="section-pad bg-[var(--navy-950)] text-white">
      <Container className="space-y-12">
        <div className="max-w-[72ch] space-y-4">
          <p className="eyebrow">CUSTOMER CONFIDENCE</p>
          <h2 className="section-title max-w-[16ch] text-white">Trust signals that reduce friction before the move starts.</h2>
          <p className="text-base leading-[1.7] text-[#c8d2dd] md:text-lg">
            Customers need to know who they are working with, how the move will be handled, and
            how communication will work. Bluport puts the operating signals up front.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {confidenceStatements.map((statement) => (
            <article key={statement} className="rounded-[1.5rem] border border-[rgba(200,210,221,0.16)] bg-[rgba(255,255,255,0.04)] p-5">
              <p className="text-sm leading-7 text-[#e6edf4]">{statement}</p>
            </article>
          ))}
        </div>

        <div className="grid gap-3 md:grid-cols-5">
          {TRUST_BAR_ITEMS.map((item) => (
            <div key={item} className="rounded-xl border border-[rgba(200,210,221,0.14)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm font-semibold tracking-[0.04em] text-[#dce6ee]">
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
