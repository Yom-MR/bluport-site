import Container from "@/components/ui/Container";

const credentials = [
  {
    title: "Veteran-owned",
    description: "Field-driven execution with accountability from dispatch to drop.",
    icon: (
      <path d="M12 3l2.7 5.48L21 9.4l-4.5 4.38 1.07 6.22L12 17.16 6.43 20l1.07-6.22L3 9.4l6.3-.92L12 3z" />
    ),
  },
  {
    title: "Houston-based",
    description: "Regional familiarity aligned with Gulf Coast schedules and access windows.",
    icon: (
      <path d="M12 21s7-5.38 7-11a7 7 0 10-14 0c0 5.62 7 11 7 11zm0-8.1a2.9 2.9 0 100-5.8 2.9 2.9 0 000 5.8z" />
    ),
  },
  {
    title: "TWIC-certified personnel",
    description: "Credentialed access for restricted and port-adjacent operating sites.",
    icon: (
      <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm4 2v2h8V8H8zm0 4v4h5v-4H8z" />
    ),
  },
  {
    title: "Insured commercial operations",
    description: "Coverage aligned with commercial movement and professional risk controls.",
    icon: <path d="M12 3l7 3v5c0 5-3.2 8.5-7 10-3.8-1.5-7-5-7-10V6l7-3zm0 6v7m-3-4h6" />,
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
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(31,182,232,0.14)] text-[#0a4f6b]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  {item.icon}
                </svg>
              </span>
              <p className="mt-3 text-base font-semibold tracking-[-0.015em] text-[#031426]">{item.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-[#4d5f74]">{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
