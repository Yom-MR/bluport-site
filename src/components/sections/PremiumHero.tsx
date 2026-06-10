import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteImages } from "@/data/siteImages";

export default function PremiumHero() {
  return (
    <section className="relative overflow-hidden bg-[#020a14] text-white">
      <div className="pointer-events-none absolute right-[8%] top-[18%] h-[420px] w-[420px] rounded-full bg-[rgba(31,182,232,0.28)] blur-[120px]" />
      <Container className="relative min-h-[700px] py-20 md:min-h-[760px] md:py-24">
        <div className="grid min-h-[inherit] items-center gap-12 lg:grid-cols-[52%_48%]">
          <div className="space-y-7">
            <p className="eyebrow">VETERAN-OWNED HOTSHOT &amp; EQUIPMENT LOGISTICS</p>
            <h1 className="headline-display max-w-[15ch]">
              Move the equipment.
              <br />
              Keep the <span className="text-[#4cc9f0]">job moving.</span>
            </h1>
            <p className="max-w-[60ch] text-base leading-[1.65] text-[#c8d2dd]">
              Bluport moves equipment, attachments, trailers, and field-support assets for rental
              fleets, jobsites, utilities, infrastructure, and industrial operations.
            </p>
            <p className="text-sm tracking-[0.02em] text-[#c8d2dd]">
              Houston-based. Ford F-350 platform. 40&apos; power tilt trailers.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/#request-capacity"
                className="inline-flex items-center justify-center rounded-xl border border-transparent bg-[#1fb6e8] px-6 py-3 text-sm font-semibold tracking-[0.06em] text-[#020a14] uppercase transition-colors hover:bg-[#4cc9f0]"
              >
                Request Capacity
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-[rgba(200,210,221,0.4)] px-6 py-3 text-sm font-semibold tracking-[0.06em] text-white uppercase transition-colors hover:border-[#4cc9f0] hover:text-[#4cc9f0]"
              >
                View Services
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="relative h-[360px] overflow-hidden rounded-[28px] border border-[rgba(255,255,255,0.12)] shadow-[0_34px_90px_rgba(0,0,0,0.4)] md:h-[610px] md:rounded-[32px]">
              <Image
                src={siteImages.premiumHero}
                alt="Bluport Ford F-350 in field operations"
                fill
                className="object-cover object-[58%_50%]"
                priority
                sizes="(max-width: 1024px) 100vw, 520px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(2,10,20,0.64)] via-transparent to-[rgba(2,10,20,0.16)]" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <p className="eyebrow text-[10px] text-[#4cc9f0]">FIELD OPERATIONS</p>
                <p className="mt-2 text-sm leading-relaxed text-[#eef3f8]">
                  Ford F-350 hotshot / 40&apos; power tilt capability
                </p>
              </div>
            </div>
          </div>
        </div>
        <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-white/15" />
      </Container>
    </section>
  );
}
