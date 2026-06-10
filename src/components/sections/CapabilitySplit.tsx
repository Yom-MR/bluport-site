import Container from "@/components/ui/Container";

const capabilityItems = [
  "Equipment",
  "Attachments",
  "Trailers",
  "Utility assets",
  "Field-support materials",
  "Project-critical freight",
] as const;

const executionItems = ["Urgent moves", "Scheduled capacity", "Site-aware delivery"] as const;

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
              <p className="max-w-[48ch] text-[1.14rem] font-medium leading-[1.62] tracking-[-0.01em] text-[#0f253a]">
                Built for jobsites, rental yards, utility crews, and industrial teams.
              </p>
              <ul className="space-y-5">
                {executionItems.map((item, index) => (
                  <li key={item} className="flex items-center justify-between border-b border-[rgba(6,29,51,0.12)] pb-4">
                    <span className="text-[1.12rem] font-semibold tracking-[-0.015em] text-[#031426]">{item}</span>
                    <span className="text-xs font-bold tracking-[0.12em] text-[#1fb6e8]">0{index + 1}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
