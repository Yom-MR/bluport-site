import { ChevronDown } from "lucide-react";
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

const constraintRows = [
  {
    title: "Access",
    body: "Gate instructions, site contacts, yard details, and loading constraints are confirmed before dispatch.",
  },
  {
    title: "Asset fit",
    body: "Asset type, dimensions, weight, and trailer requirements shape the movement plan.",
  },
  {
    title: "Timing",
    body: "Pickup windows, delivery windows, and schedule pressure are aligned before the truck rolls.",
  },
  {
    title: "Closeout",
    body: "Delivery confirmation, POD handling, and follow-up keep the operation accountable.",
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
          <div className="relative min-h-[460px] overflow-hidden rounded-[34px] shadow-[0_24px_64px_rgba(3,20,38,0.32)]">
            <Image
              src={siteImages.equipmentOnTrailer}
              alt="Equipment loaded and secured for transport on Bluport trailer"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 44vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(3,20,38,0.90)_0%,rgba(3,20,38,0.70)_100%)]" />
            <div className="relative z-10 p-9 text-white md:p-12">
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
                    <span className="text-[var(--accent)]" aria-hidden>
                      -&gt;
                    </span>
                  </li>
                ))}
              </ul>
            </div>
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
                Built around the details that delay jobs.
              </h3>
              <div className="space-y-4">
                {constraintRows.map((item) => {
                  return (
                    <details
                      key={item.title}
                      className="group rounded-2xl border border-[rgba(6,29,51,0.14)] bg-white/90 p-4 transition-colors open:border-[rgba(242,105,28,0.45)]"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                        <span className="text-[1.08rem] font-semibold tracking-[-0.015em] text-[#031426]">
                          {item.title}
                        </span>
                        <ChevronDown
                          size={16}
                          aria-hidden
                          className="shrink-0 text-[var(--accent)] transition-transform duration-200 group-open:rotate-180"
                        />
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-[#355066] md:text-base">
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
