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
        className="object-cover object-[70%_54%] saturate-[1.08] contrast-[1.08]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(96deg,rgba(2,10,20,0.9)_0%,rgba(2,10,20,0.8)_28%,rgba(2,10,20,0.48)_52%,rgba(2,10,20,0.15)_74%,rgba(2,10,20,0.03)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,10,20,0.56)_0%,rgba(2,10,20,0.1)_44%,rgba(2,10,20,0.66)_100%)]" />

      <Container className="relative flex min-h-[820px] items-end py-32 md:py-36">
        <div className="max-w-[720px] space-y-10 md:space-y-11">
          <p className="eyebrow">VETERAN-OWNED HOTSHOT &amp; EQUIPMENT LOGISTICS</p>
          <h1 className="max-w-[10.5ch] text-[clamp(3.75rem,7vw,6.75rem)] font-extrabold leading-[0.9] tracking-[-0.06em]">
            Move the equipment.
            <br />
            Keep the <span className="text-[#4cc9f0]">job moving.</span>
          </h1>
          <p className="max-w-[560px] text-[1.08rem] leading-[1.66] text-[#dce6ee]">
            Bluport moves equipment, attachments, trailers, and field-support assets for rental
            fleets, jobsites, utilities, infrastructure, and industrial operations.
          </p>
          <p className="text-base font-medium tracking-[0.01em] text-[#d0dce6]">
            Houston-based operations. Ford F-350 platform. 40&apos; power tilt trailers.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/#request-capacity"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-transparent bg-[#1fb6e8] px-8 text-sm font-semibold tracking-[0.075em] text-[#031426] uppercase transition-all duration-200 hover:bg-[#4cc9f0]"
            >
              Request Capacity
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[rgba(200,210,221,0.5)] bg-[rgba(2,10,20,0.24)] px-8 text-sm font-semibold tracking-[0.075em] text-white uppercase transition-all duration-200 hover:border-[#4cc9f0] hover:text-[#4cc9f0]"
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
