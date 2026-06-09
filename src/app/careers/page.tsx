import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Discover career opportunities at Bluport Logistics for drivers, owner operators, dispatchers, coordinators, brokers, and operations leaders in a veteran-friendly culture.",
  keywords: [
    "logistics careers",
    "driver jobs Houston",
    "dispatcher logistics careers",
    "veteran-friendly logistics employer",
  ],
};

const whyWork = [
  {
    title: "Purpose-driven work",
    description: "Support moves that directly affect crews, projects, and critical field timelines.",
  },
  {
    title: "Veteran-friendly culture",
    description: "A team built around accountability, clarity, and mission-focused execution.",
  },
  {
    title: "Operational discipline",
    description: "Structured workflows, communication standards, and process ownership at every level.",
  },
  {
    title: "Growth mindset",
    description: "Build capability through training, field exposure, and leadership development.",
  },
];

const roles = [
  "CDL / Non-CDL Drivers",
  "Owner Operators",
  "Dispatchers",
  "Operations Coordinators",
  "Logistics Brokers",
  "Fleet / Driver Managers",
];

export default function CareersPage() {
  return (
    <>
      <section className="section-shell hero-glow">
        <Container>
          <SectionHeader
            eyebrow="CAREERS"
            title="Build a logistics career with mission behind it."
            description="Bluport is building a veteran-focused logistics company for drivers, dispatchers, operators, and leaders who want their work to matter."
          />
        </Container>
      </section>

      <section className="section-shell">
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="WHY WORK AT BLUPORT"
            title="A team built for mission outcomes."
            description="Culture and operating expectations designed for people who value precision and ownership."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {whyWork.map((item) => (
              <article key={item.title} className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell bg-[rgba(6,26,51,0.14)]">
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="ROLES WE EXPECT TO HIRE FOR"
            title="Core positions in the Bluport operating model."
            description="Roles that shape field performance, customer communication, and execution quality."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {roles.map((role) => (
              <article key={role} className="glass-card rounded-2xl p-6">
                <p className="text-base font-medium text-[var(--foreground)]">{role}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <p className="technical-label text-[var(--cyan)]">VETERAN HIRING</p>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              Bluport values the discipline, leadership, accountability, and resilience that
              veterans bring to logistics operations.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-shell border-b-0">
        <Container>
          <div className="glass-card bg-grid rounded-2xl p-8 md:p-10">
            <p className="eyebrow">CAREERS CTA</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
              Interested in joining Bluport?
            </h2>
            <div className="mt-6">
              <Button href="/contact" variant="secondary">
                Contact Operations
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
