import { CheckCircle2, Clock3, ClipboardCheck, KeyRound, Route } from "lucide-react";
import Container from "@/components/ui/Container";

const capabilityItems = [
  "Equipment",
  "Attachments",
  "Trailers",
  "Utility assets",
  "Field-support materials",
  "Project-critical freight",
] as const;

const constraintRows = [
  {
    title: "Site access",
    body: "Delivery details, yard instructions, gate requirements, and contact points matter before dispatch.",
    icon: KeyRound,
  },
  {
    title: "Timing windows",
    body: "Pickup and delivery expectations are aligned before the move starts.",
    icon: Clock3,
  },
  {
    title: "Securement needs",
    body: "Equipment type, dimensions, weight, and handling requirements shape the trailer plan.",
    icon: Route,
  },
  {
    title: "Closeout",
    body: "Delivery confirmation, POD handling, and follow-up keep the operation accountable.",
    icon: ClipboardCheck,
  },
] as const;

export default function CapabilitySplit() {
  return (
    <section className="section-pad bg-[#f4f7fb] text-[#031426]">
      <Container className="space-y-14">
        <div className="space-y-5">
          <p className="eyebrow">CAPABILITY</p>
          <h2 className="section-title max-w-[16ch]">Practical movement for time-sensitive assets.</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[44%_56%]">
          <div className="rounded-[34px] bg-[#031426] p-9 text-white shadow-[0_24px_64px_rgba(3,20,38,0.32)] md:p-12">
            <p className="text-sm font-medium tracking-[0.02em] text-[#9fb8ce]">
              Equipment-heavy moves with field consequences.
            </p>
            <h3 className="mt-4 text-3xl font-bold tracking-[-0.04em]">What Bluport moves</h3>
            <ul className="mt-7 space-y-4">
              {capabilityItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between border-b border-white/16 pb-3.5"
                >
                  <span className="text-[1.08rem] font-medium tracking-[-0.01em] text-[#f0f6fb]">{item}</span>
                  <span className="text-[#4cc9f0]" aria-hidden>
                    -&gt;
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-[34px] border border-[rgba(6,29,51,0.1)] bg-[linear-gradient(140deg,#ffffff_0%,#f3f7fc_55%,#eaf2fb_100%)] p-8 md:p-11">
            <div className="absolute inset-0 opacity-60">
              <div className="absolute left-0 right-0 top-8 h-px bg-[rgba(6,29,51,0.08)]" />
              <div className="absolute left-0 right-0 top-[34%] h-px bg-[rgba(6,29,51,0.08)]" />
              <div className="absolute left-0 right-0 top-[58%] h-px bg-[rgba(6,29,51,0.08)]" />
              <div className="absolute left-0 right-0 top-[82%] h-px bg-[rgba(6,29,51,0.08)]" />
            </div>
            <div className="relative space-y-8">
              <h3 className="max-w-[18ch] text-[2rem] font-bold leading-[1.03] tracking-[-0.04em] text-[#031426]">
                Built around the constraints that slow jobs down.
              </h3>
              <div className="space-y-4">
                {constraintRows.map((item) => {
                  const Icon = item.icon;
                  return (
                    <details
                      key={item.title}
                      className="group rounded-2xl border border-[rgba(6,29,51,0.14)] bg-white/90 p-4 transition-colors open:border-[rgba(31,182,232,0.45)]"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                        <span className="flex items-center gap-3">
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(31,182,232,0.16)] text-[#0c5978]">
                            <Icon size={17} aria-hidden />
                          </span>
                          <span className="text-[1.08rem] font-semibold tracking-[-0.015em] text-[#031426]">
                            {item.title}
                          </span>
                        </span>
                        <CheckCircle2
                          size={18}
                          aria-hidden
                          className="text-[#1fb6e8] transition-transform group-open:rotate-90"
                        />
                      </summary>
                      <p className="mt-3 pl-12 text-sm leading-relaxed text-[#355066] md:text-base">
                        {item.body}
                      </p>
                    </details>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
