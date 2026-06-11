import Link from "next/link";
import Container from "@/components/ui/Container";

const phases = [
  {
    stage: "Request",
    detail: "Capture the move, the timing, and the site constraints before the truck rolls.",
  },
  {
    stage: "Plan",
    detail: "Match trailer, securement, route, and contacts to the actual load profile.",
  },
  {
    stage: "Dispatch",
    detail: "Launch with proactive communication so field teams know what is happening.",
  },
  {
    stage: "Deliver",
    detail: "Place the asset where the crew can keep working without a second delay.",
  },
  {
    stage: "Closeout",
    detail: "Confirm handoff, handle POD, and finish the record cleanly.",
  },
] as const;

export default function ExecutionTimeline() {
  return (
    <section className="section-pad bg-[#f4f8ff] text-[#031426]">
      <Container className="space-y-12">
        <div className="max-w-[72ch] space-y-4">
          <p className="eyebrow">EXECUTION MODEL</p>
          <h2 className="section-title max-w-[16ch] text-[#031426]">Request to closeout, built into the workflow.</h2>
          <p className="text-base leading-[1.7] text-[#34465a] md:text-lg">
            Bluport keeps the process simple and visible so customers understand the move at each
            stage instead of chasing updates after the fact.
          </p>
        </div>

        <div className="-mx-4 overflow-x-auto px-4 pb-2">
          <ol className="grid min-w-[900px] grid-cols-5 gap-4">
            {phases.map((phase, index) => (
              <li key={phase.stage} className="relative rounded-[1.6rem] border border-[rgba(148,163,184,0.25)] bg-white p-5 shadow-[0_18px_32px_rgba(3,20,38,0.06)]">
                <p className="text-xs font-bold tracking-[0.16em] text-[var(--accent-strong)] uppercase">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-slate-950">{phase.stage}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{phase.detail}</p>
                <Link href="/mission" className="mt-5 inline-flex text-xs font-semibold tracking-[0.12em] text-[var(--accent-strong)] uppercase hover:text-[var(--accent)]">
                  View mission detail
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
