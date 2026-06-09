import Container from "@/components/ui/Container";

const trustItems = [
  "Veteran-owned",
  "Houston-based",
  "Ford F-350 fleet",
  "40' power tilt trailers",
  "TWIC-certified personnel",
  "$1M auto / $250K cargo coverage",
  "$2M general liability aggregate",
];

export default function TrustBar() {
  return (
    <section className="section-shell section-light py-10">
      <Container className="space-y-6">
        <header className="max-w-2xl">
          <p className="eyebrow">OPERATING CREDENTIALS</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--foreground)] md:text-3xl">
            Operating credentials
          </h2>
        </header>
        <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {trustItems.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm font-semibold text-[var(--foreground)] shadow-[0_8px_20px_rgba(15,23,42,0.07)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}