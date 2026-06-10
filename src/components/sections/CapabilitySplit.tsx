import Image from "next/image";
import Container from "@/components/ui/Container";
import { siteImages } from "@/data/siteImages";

const capabilityItems = [
  "Equipment",
  "Attachments",
  "Trailers",
  "Utility assets",
  "Field-support materials",
  "Project-critical freight",
] as const;

const executionItems = ["urgent moves", "scheduled capacity", "site-aware delivery"] as const;

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

          <div className="relative overflow-hidden rounded-[34px] border border-[rgba(6,29,51,0.1)] bg-white p-8 md:p-11">
            <Image
              src={siteImages.capabilityTexture}
              alt="Equipment and securement texture"
              fill
              className="object-cover opacity-35"
              sizes="(max-width: 1024px) 100vw, 640px"
            />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.93)_0%,rgba(255,255,255,0.75)_58%,rgba(255,255,255,0.46)_100%)]" />
            <div className="relative space-y-7">
              <p className="max-w-[52ch] text-[1.08rem] leading-[1.75] text-[#0f253a]">
                Built for jobsites, rental yards, utility crews, and industrial teams that cannot
                afford idle time.
              </p>
              <ul className="space-y-3">
                {executionItems.map((item) => (
                  <li key={item} className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.08em] text-[#031426] uppercase">
                    <span className="inline-block h-px w-7 bg-[#1fb6e8]" />
                    <span>{item}</span>
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
