import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "Learn Bluport Logistics mission: veteran-led execution and operating values for mission-critical equipment movement, field support assets, and time-sensitive project operations.",
  keywords: [
    "Bluport mission",
    "veteran-led logistics",
    "mission-critical equipment movement",
    "field operations logistics",
  ],
};

const values = [
  {
    title: "Accountability",
    description: "We own the move from intake through closeout, with clear responsibility at every step.",
  },
  {
    title: "Precision",
    description: "Routing, securement, timing, and site constraints are planned with operational rigor.",
  },
  {
    title: "Communication",
    description: "Customers receive direct updates, realistic timelines, and immediate escalation when conditions change.",
  },
  {
    title: "Readiness",
    description: "Rapid-response posture and disciplined planning support both urgent missions and scheduled capacity.",
  },
];

export default function MissionPage() {
  return (
    <>
      <section className="section-shell hero-glow overflow-hidden">
        <Container className="space-y-6">
          <SectionHeader
            eyebrow="MISSION"
            title="Veteran-led logistics for critical assets."
            description="Bluport exists to move the equipment, materials, and field-support assets that keep projects, crews, and infrastructure moving."
          />
        </Container>
      </section>

      <section className="section-shell pt-0">
        <Container>
          <article className="glass-card relative min-h-[320px] overflow-hidden rounded-2xl p-6 md:min-h-[380px] md:p-8">
            <Image
              src="/images/fleet/heavy-equipment-transport.jpg"
              alt="Representative mission-critical equipment transport scene"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.88)_12%,rgba(2,8,23,0.45)_58%,rgba(2,8,23,0.75)_100%)]" />
            <div className="relative z-10 max-w-2xl">
              <p className="technical-label text-[var(--cyan)]">VETERAN-LED EXECUTION</p>
              <h3 className="mt-3 text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
                Operational discipline from objective to closeout.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[rgba(226,232,240,0.9)] md:text-base">
                Representative field transport visual: a reminder that mission outcomes depend on
                planning quality, communication rhythm, and execution reliability.
              </p>
            </div>
          </article>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="grid gap-6 lg:grid-cols-2">
          <article className="glass-card rounded-2xl p-6 md:p-7">
            <p className="technical-label text-[var(--cyan)]">MORE THAN TRANSPORTATION</p>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              Bluport is built around the mission behind the move. A machine is not just freight -
              it may be the asset that keeps a jobsite productive, restores a utility line,
              supports a field crew, or protects a critical timeline.
            </p>
          </article>
          <article className="glass-card rounded-2xl p-6 md:p-7">
            <p className="technical-label text-[var(--cyan)]">VETERAN-LED EXECUTION</p>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              Military experience shapes how Bluport approaches logistics: confirm the objective,
              plan the movement, communicate clearly, execute with discipline, and close the loop.
            </p>
          </article>
        </Container>
      </section>

      <section className="section-shell bg-[rgba(6,26,51,0.16)]">
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="OPERATING VALUES"
            title="How Bluport runs every move."
            description="Operational principles that govern planning, dispatch, and customer communication."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <article key={value.title} className="glass-card rounded-2xl p-6">
                <p className="technical-label text-[var(--cyan)]">VALUE</p>
                <h3 className="mt-3 text-xl font-semibold text-[var(--foreground)]">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{value.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell border-b-0">
        <Container>
          <div className="glass-card bg-grid rounded-2xl p-8 md:p-10">
            <p className="technical-label text-[var(--cyan)]">MISSION CTA</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
              When the move matters, the process matters.
            </h2>
            <div className="mt-6">
              <Button href="/#request-capacity">Request Capacity</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
