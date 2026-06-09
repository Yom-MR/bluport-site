import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { siteImages } from "@/data/siteImages";

export default function Hero() {
  return (
    <section id="mission" className="section-shell section-dark hero-glow overflow-hidden">
      <div aria-hidden className="absolute inset-0 z-0">
        <Image
          src={siteImages.heroMain}
          alt=""
          fill
          priority
          className="object-cover object-[58%_62%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(104deg,rgba(2,8,23,0.94)_8%,rgba(2,8,23,0.82)_44%,rgba(2,8,23,0.58)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_8%,rgba(14,165,233,0.24),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,23,0.24)_0%,rgba(2,8,23,0.52)_62%,rgba(2,8,23,0.88)_100%)]" />
      </div>
      <Container>
        <div className="relative z-10 max-w-3xl space-y-7 py-8 md:py-10">
            <p className="eyebrow">VETERAN-OWNED HOTSHOT &amp; EQUIPMENT LOGISTICS</p>
            <h1 className="text-balance text-[2.85rem] leading-[0.96] font-semibold tracking-[-0.04em] md:text-[4.75rem]">
              Move the equipment. <span className="text-gradient">Keep the job moving.</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              Bluport provides specialized hotshot and equipment transport for rental fleets,
              jobsites, utilities, infrastructure, and industrial operations - built around
              responsive communication, secure movement, and veteran-led execution.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="#request-capacity" variant="primary">
                Request Capacity
              </Button>
              <Button href="/services" variant="secondary">
                View Services
              </Button>
            </div>
            <p className="text-sm text-[rgba(226,232,240,0.88)] md:text-base">
              Houston-based equipment logistics for time-sensitive field operations.
            </p>
        </div>
      </Container>
    </section>
  );
}