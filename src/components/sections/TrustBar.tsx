import Container from "@/components/ui/Container";

const trustItems = [
  "Veteran-owned",
  "Houston-based",
  "Ford F-350 fleet",
  "40' power tilt trailers",
  "TWIC-certified personnel",
  "Insured commercial operations",
];

export default function TrustBar() {
  return (
    <section className="section-shell section-light py-6">
      <Container>
        <ul className="credibility-strip flex flex-wrap items-center gap-2.5 lg:flex-nowrap lg:gap-3">
          {trustItems.map((item) => (
            <li
              key={item}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--border)] bg-white px-4 py-2 text-center text-[11px] font-semibold tracking-[0.08em] text-[var(--foreground)] uppercase shadow-[0_8px_20px_rgba(15,23,42,0.07)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}