import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteImages } from "@/data/siteImages";

export default function PremiumHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#020a14] text-white">
      <Image
        src={siteImages.premiumHero}
        alt="Industrial equipment yard and heavy machinery"
        fill
        priority
        className="object-cover object-[72%_54%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(93deg,rgba(2,10,20,0.94)_0%,rgba(2,10,20,0.88)_32%,rgba(2,10,20,0.58)_56%,rgba(2,10,20,0.22)_74%,rgba(2,10,20,0.06)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,10,20,0.68)_0%,rgba(2,10,20,0.2)_40%,rgba(2,10,20,0.76)_100%)]" />

      <Container className="relative flex min-h-[820px] items-end py-28 md:py-32">
        <div className="max-w-[650px] space-y-8">
          <p className="eyebrow">VETERAN-OWNED HOTSHOT &amp; EQUIPMENT LOGISTICS</p>
          <h1 className="max-w-[10ch] text-[clamp(4rem,8vw,7.75rem)] font-extrabold leading-[0.88] tracking-[-0.065em]">
            Move the equipment.
            <br />
            Keep the <span className="text-[#4cc9f0]">job moving.</span>
          </h1>
          <p className="max-w-[560px] text-lg leading-[1.66] text-[#d8e3ec]">
            Bluport moves equipment, attachments, trailers, and field-support assets for rental
            fleets, jobsites, utilities, infrastructure, and industrial operations.
          </p>
          <p className="text-base font-medium tracking-[0.01em] text-[#d0dce6]">
            Houston-based operations. Ford F-350 platform. 40&apos; power tilt trailers.
          </p>
          <div className="flex flex-wrap gap-4 pt-1">
            <Link
              href="/#request-capacity"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-transparent bg-[#1fb6e8] px-8 text-sm font-semibold tracking-[0.08em] text-[#031426] uppercase transition-colors hover:bg-[#4cc9f0]"
            >
              Request Capacity
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[rgba(200,210,221,0.5)] px-8 text-sm font-semibold tracking-[0.08em] text-white uppercase transition-colors hover:border-[#4cc9f0] hover:text-[#4cc9f0]"
            >
              View Services
            </Link>
          </div>
        </div>
        <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-white/15" />
      </Container>
    </section>
  );
}
