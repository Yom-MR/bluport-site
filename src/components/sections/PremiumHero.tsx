import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteImages } from "@/data/siteImages";

export default function PremiumHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#020a14] text-white">
      <Image
        src={siteImages.premiumHero}
        alt="Ford pickup hauling equipment on a loaded power-tilt hotshot trailer"
        fill
        priority
        className="object-cover object-[70%_56%] saturate-[1.08] contrast-[1.08]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(96deg,rgba(2,10,20,0.92)_0%,rgba(2,10,20,0.82)_28%,rgba(2,10,20,0.5)_52%,rgba(2,10,20,0.16)_74%,rgba(2,10,20,0.03)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,10,20,0.56)_0%,rgba(2,10,20,0.1)_44%,rgba(2,10,20,0.66)_100%)]" />

      <Container className="relative flex min-h-[760px] items-end py-32 md:py-36">
        <div className="max-w-[720px] space-y-9">
          <p className="eyebrow">VETERAN-OWNED HOTSHOT &amp; EQUIPMENT LOGISTICS</p>
          <h1 className="max-w-[11ch] text-[clamp(3.5rem,6.6vw,6.25rem)] font-extrabold leading-[0.9] tracking-[-0.06em]">
            Mission-Critical Logistics
            <br />
            <span className="text-[var(--accent-light)]">for Equipment-Dependent Operations.</span>
          </h1>
          <p className="max-w-[576px] text-[1.12rem] leading-[1.66] text-[#dce6ee]">
            Houston-based hotshot transport for the equipment your projects run on, moved across Texas
            and the Gulf Coast with veteran-led planning, securement discipline, and schedule
            protection on every load.
          </p>
          <div className="flex flex-wrap gap-4 pt-1">
            <Link
              href="/#request-capacity"
              className="inline-flex min-h-[54px] items-center justify-center rounded-xl border border-transparent bg-[var(--accent)] px-8 text-sm font-semibold tracking-[0.075em] text-white uppercase shadow-[0_16px_30px_rgba(47,116,189,0.34)] transition-all duration-200 hover:bg-[var(--accent-strong)] hover:-translate-y-0.5"
            >
              Request Capacity
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-[54px] items-center justify-center rounded-xl border border-[rgba(200,210,221,0.5)] bg-[rgba(2,10,20,0.24)] px-8 text-sm font-semibold tracking-[0.075em] text-white uppercase transition-all duration-200 hover:border-[var(--accent-light)] hover:text-[var(--accent-light)]"
            >
              Explore Services
            </Link>
          </div>
        </div>
        <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-white/15" />
      </Container>
    </section>
  );
}
