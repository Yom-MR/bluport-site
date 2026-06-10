import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function CinematicHero() {
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-[#020711]">
      <Image
        src="/images/loads/IMG_0914.JPEG"
        alt="Bluport Ford F-350 positioned with trailer in a logistics yard"
        fill
        priority
        className="object-cover object-[58%_48%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(102deg,rgba(2,7,17,0.86)_8%,rgba(2,7,17,0.72)_44%,rgba(2,7,17,0.4)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,20,36,0.24)_0%,rgba(3,20,36,0.52)_70%,rgba(2,7,17,0.8)_100%)]" />

      <Container className="relative z-10 flex min-h-[720px] items-end py-24 md:py-28">
        <div className="max-w-3xl space-y-8">
          <p className="eyebrow text-[rgba(32,199,232,0.9)]">VETERAN-OWNED HOTSHOT &amp; EQUIPMENT LOGISTICS</p>
          <h1 className="text-balance text-[3rem] leading-[0.9] font-semibold tracking-[-0.04em] text-[#f4f7fb] md:text-[6.2rem]">
            Move the equipment.
            <br />
            Keep the <span className="text-[#20c7e8]">job moving.</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-[rgba(244,247,251,0.88)] md:text-xl">
            Bluport moves equipment, attachments, trailers, and field-support assets for rental
            fleets, jobsites, utilities, infrastructure, and industrial operations.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/#request-capacity">Request Capacity</Button>
            <Button href="/services" variant="secondary" className="bg-[rgba(2,7,17,0.38)]">
              View Services
            </Button>
          </div>
          <p className="text-sm text-[rgba(148,163,184,0.95)] md:text-base">
            Houston-based operations. Ford F-350 hotshot capability. 40&apos; power tilt trailers.
          </p>
        </div>
      </Container>
    </section>
  );
}
