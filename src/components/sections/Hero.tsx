import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { siteImages } from "@/data/siteImages";

const credibilityBullets = [
  "Ford F-350 hotshot fleet",
  "40' power tilt trailer capability",
  "TWIC-certified personnel",
  "$1M auto / $250K cargo coverage",
  "Houston-based operations",
];

export default function Hero() {
  return (
    <section id="mission" className="section-shell section-dark hero-glow overflow-hidden">
      <div aria-hidden className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#041325_0%,#061a33_55%,#0b223f_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(34,211,238,0.22),transparent_34%)]" />
        <div className="absolute right-[-8%] top-[-10%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.22),transparent_68%)] blur-xl" />
      </div>
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="relative z-10 max-w-3xl space-y-7 pt-2">
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
            <ul className="grid gap-2 text-sm text-[var(--foreground)] md:grid-cols-2">
              {credibilityBullets.map((item) => (
                <li key={item} className="flex items-center gap-2.5 rounded-lg border border-[rgba(148,163,184,0.24)] bg-[rgba(2,8,23,0.3)] px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--green)]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="relative z-10 grid min-w-0 gap-4 md:grid-cols-2 lg:grid-cols-2">
            <article className="image-card relative overflow-hidden rounded-2xl border border-[rgba(148,163,184,0.24)] md:col-span-2">
              <Image
                src={siteImages.heroMain}
                alt="Bluport Ford F-350 and power tilt trailer in field operations"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,23,0.08)_0%,rgba(2,8,23,0.75)_92%)]" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <span className="rounded-full bg-[rgba(2,8,23,0.7)] px-3 py-1 text-xs font-semibold tracking-wide text-white">
                  F-350 Hotshot
                </span>
              </div>
            </article>
            <article className="image-card relative overflow-hidden rounded-2xl border border-[rgba(148,163,184,0.24)]">
              <Image
                src={siteImages.heroSupportA}
                alt="Field delivery equipment staged on Bluport trailer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 24vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,23,0.2)_0%,rgba(2,8,23,0.78)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-3">
                <span className="rounded-full bg-[rgba(2,8,23,0.75)] px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white">
                  40&apos; Power Tilt
                </span>
              </div>
            </article>
            <article className="image-card relative overflow-hidden rounded-2xl border border-[rgba(148,163,184,0.24)]">
              <Image
                src={siteImages.heroSupportB}
                alt="Bluport trailer loaded for field delivery"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 24vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,23,0.22)_0%,rgba(2,8,23,0.78)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-3">
                <span className="rounded-full bg-[rgba(2,8,23,0.75)] px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white">
                  Field Delivery
                </span>
              </div>
            </article>
          </aside>
        </div>
      </Container>
    </section>
  );
}