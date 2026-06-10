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
    <section className="section-pad bg-[#eef3f8] text-[#031426]">
      <Container className="space-y-10">
        <div className="space-y-4">
          <p className="eyebrow">CAPABILITY</p>
          <h2 className="section-title max-w-[18ch]">Practical movement for time-sensitive assets.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[44%_56%]">
          <div className="rounded-[28px] bg-[#031426] p-8 text-white md:p-10">
            <h3 className="text-2xl font-bold tracking-[-0.03em]">What Bluport moves</h3>
            <ul className="mt-6 space-y-4">
              {capabilityItems.map((item) => (
                <li key={item} className="flex items-center justify-between border-b border-white/20 pb-3">
                  <span className="text-lg font-medium tracking-[-0.01em]">{item}</span>
                  <span className="text-[#4cc9f0]" aria-hidden>
                    -&gt;
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-[rgba(6,29,51,0.16)] bg-white p-8 md:p-10">
            <Image
              src={siteImages.capabilityTexture}
              alt="Equipment and securement texture"
              fill
              className="object-cover opacity-25"
              sizes="(max-width: 1024px) 100vw, 640px"
            />
            <div className="relative space-y-7">
              <p className="max-w-[52ch] text-lg leading-relaxed text-[#031426]">
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
