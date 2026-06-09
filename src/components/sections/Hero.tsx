import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const missionRows = [
  { label: "Tilt Trailer Load", status: "Scheduled", dot: "bg-[var(--blue)]" },
  { label: "Utility Equipment", status: "In Transit", dot: "bg-[var(--cyan)]" },
  { label: "Emergency Move", status: "Ready", dot: "bg-[var(--green)]" },
];

const readinessTags = ["24/7 Dispatch", "Equipment Transport", "Critical Timelines"];
const routeNodes = ["YARD", "JOB", "SITE", "POD"];
const operationsStack = ["Dispatch", "Securement", "Tracking", "POD"];

export default function Hero() {
  return (
    <section id="mission" className="section-shell hero-glow overflow-hidden">
      <div aria-hidden className="absolute inset-0 z-0">
        <Image
          src="/images/backgrounds/hero-equipment-transport.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,23,0.9)_0%,rgba(2,8,23,0.62)_48%,rgba(2,8,23,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,23,0.18)_0%,rgba(2,8,23,0)_48%,rgba(2,8,23,0.92)_100%)]" />
        <div className="absolute right-[-8%] top-[-10%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.22),transparent_68%)] blur-xl" />
      </div>
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.95fr] lg:gap-10">
          <div className="relative z-10 max-w-3xl space-y-7 pt-2">
            <p className="eyebrow">VETERAN-OWNED LOGISTICS FOR CRITICAL ASSETS</p>
            <h1 className="text-balance text-[2.85rem] leading-[0.96] font-semibold tracking-[-0.04em] md:text-[4.75rem]">
              Move the equipment. <span className="text-gradient">Protect the mission.</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              Bluport provides specialized equipment transport, rapid-response capacity, and
              field-ready logistics support for construction, equipment rental, utilities,
              infrastructure, and industrial operations.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="#request-capacity" variant="primary">
                Request Capacity
              </Button>
              <Button href="#services" variant="secondary">
                Explore Capabilities
              </Button>
            </div>
            <p className="text-sm text-[var(--muted)]">
              Built for urgent equipment moves, hard delivery windows, and jobsite-critical execution.
            </p>
            <div className="flex flex-wrap gap-2">
              {readinessTags.map((tag) => (
                <span
                  key={tag}
                  className="panel-border technical-label rounded-full bg-[rgba(15,23,42,0.5)] px-3 py-2 text-[var(--foreground)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <aside className="glass-card bg-grid orbital-glow signal-line relative min-w-0 overflow-hidden rounded-[1.4rem] p-5 md:p-6">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="technical-label text-[var(--foreground)]">BLUPORT MISSION CONTROL</p>
                <p className="mt-1 text-xs text-[var(--muted)]">Field logistics telemetry</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[rgba(34,197,94,0.08)] px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-[var(--green)] uppercase">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--green)]" />
                STATUS: LIVE
              </span>
            </div>

            <div className="panel-border rounded-xl bg-[rgba(6,26,51,0.45)] p-4">
              <div className="flex items-center justify-between gap-2">
                <p className="technical-label">Route Grid</p>
                <p className="text-[10px] text-[var(--muted)] uppercase tracking-[0.14em]">Ground Corridor</p>
              </div>
              <div className="relative mt-4 h-14">
                <span className="absolute top-5 left-[8%] right-[8%] h-px bg-[rgba(148,163,184,0.35)]" />
                {routeNodes.map((node, index) => (
                  <div
                    key={node}
                    className="absolute top-0 flex -translate-x-1/2 flex-col items-center gap-2"
                    style={{ left: `${8 + index * 28}%` }}
                  >
                    <span className={`h-2.5 w-2.5 rounded-full ${index === 3 ? "bg-[var(--green)]" : "bg-[var(--cyan)]"}`} />
                    <span className="technical-label text-[10px] text-[var(--foreground)]">{node}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {missionRows.map((row) => (
                <div
                  key={row.label}
                  className="panel-border flex items-center justify-between rounded-lg bg-[rgba(15,23,42,0.5)] px-3 py-2.5"
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`h-2 w-2 rounded-full ${row.dot}`} />
                    <span className="text-sm text-[var(--foreground)]">{row.label}</span>
                  </div>
                  <span className="text-xs tracking-wide text-[var(--muted)] uppercase">{row.status}</span>
                </div>
              ))}
            </div>

            <div className="soft-divider mt-5 pt-4">
              <p className="technical-label">Operations Stack</p>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs xs:grid-cols-2 sm:grid-cols-4">
                {operationsStack.map((item) => (
                  <div key={item} className="panel-border rounded-lg bg-[rgba(15,23,42,0.45)] px-3 py-2.5 text-center text-[var(--foreground)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}