import { TrendingDown } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const missionPoints = [
  {
    index: "01",
    title: "Pre-plan the move",
    description: "Asset details, access, timing, and handoff expectations are clarified before dispatch.",
  },
  {
    index: "02",
    title: "Protect the crew day",
    description: "Late equipment creates idle labor and schedule drift. Bluport moves to prevent that downstream cost.",
  },
  {
    index: "03",
    title: "Communicate with field context",
    description: "Updates are built around jobsites, rental turns, utility work, and industrial operating reality.",
  },
] as const;

export default function MissionStrip() {
  return (
    <section className="section-pad bg-[#f4f7fb] text-[#031426]">
      <Container className="grid gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
        <Reveal className="space-y-6">
          <p className="eyebrow">WHY BLUPORT EXISTS</p>
          <h2 className="section-title max-w-[14ch]">When the asset is late, the whole job waits.</h2>
          <p className="max-w-[60ch] text-[1.06rem] leading-[1.72] text-[#34465a]">
            Crews stand idle, schedules slip, and costs compound. Bluport plans around timing, site
            access, securement, communication, and closeout to keep the mission moving.
          </p>
          <div className="inline-flex items-center gap-3 rounded-2xl border border-[rgba(47,116,189,0.28)] bg-[rgba(47,116,189,0.08)] px-5 py-4">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)] text-white">
              <TrendingDown size={20} aria-hidden />
            </span>
            <p className="text-sm font-semibold leading-snug tracking-[-0.01em] text-[#1c3146]">
              Idle equipment and waiting crews are the most expensive part of a delayed move.
            </p>
          </div>
        </Reveal>

        <div className="lg:pl-6">
          <ol className="space-y-px overflow-hidden rounded-[1.5rem] border border-[rgba(6,29,51,0.12)] bg-[rgba(6,29,51,0.08)]">
            {missionPoints.map((item, idx) => (
              <Reveal
                as="li"
                key={item.title}
                delay={idx * 110}
                className="group flex items-start gap-5 bg-[#ffffff] p-6 transition-colors hover:bg-[#fbfdff] md:p-7"
              >
                <span className="font-mono text-sm font-bold tracking-[0.04em] text-[var(--accent)]">
                  {item.index}
                </span>
                <div>
                  <p className="text-lg font-semibold tracking-[-0.02em] text-[#031426]">{item.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#4d5f74] md:text-base">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
