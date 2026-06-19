import Image from "next/image";
import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  imageMirrored?: boolean;
  variant: "dark" | "light";
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imagePosition,
  imageMirrored,
  variant,
  children,
}: PageHeroProps) {
  const isLight = variant === "light";

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border-b border-[rgba(200,210,221,0.08)] text-white",
        isLight
          ? "bg-[linear-gradient(180deg,#0c1a2c_0%,#08111f_100%)]"
          : "bg-[linear-gradient(180deg,#08111f_0%,#050b16_100%)]",
      )}
    >
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            priority
            className={cn(
              "object-cover",
              imagePosition ?? "object-center",
              imageMirrored && "scale-x-[-1]",
            )}
            sizes="100vw"
          />
          <div
            className={cn(
              "absolute inset-0",
              "bg-[linear-gradient(94deg,rgba(5,11,22,0.93)_8%,rgba(5,11,22,0.78)_42%,rgba(5,11,22,0.36)_100%)]",
            )}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,116,189,0.2),transparent_36%)]" />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent_0%,rgba(5,11,22,0.65)_55%,var(--navy-950)_100%)]"
            aria-hidden
          />
        </>
      ) : (
        <>
          <div className="absolute inset-0 blueprint-grid opacity-60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,116,189,0.16),transparent_32%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03),transparent_40%,rgba(61,130,196,0.07)_100%)]" />
        </>
      )}

      <Container className="relative z-10 flex min-h-[420px] items-end py-20 md:min-h-[480px] md:py-24 lg:min-h-[520px] lg:py-28">
        <div className="max-w-[760px] space-y-6">
          <p className="technical-label">{eyebrow}</p>
          <div className="space-y-5">
            <h1 className="max-w-[12ch] text-[clamp(2.7rem,5.8vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-balance text-white">
              {title}
            </h1>
            <p className="max-w-[60ch] text-base leading-8 text-[rgba(226,232,240,0.88)] md:text-lg">
              {description}
            </p>
          </div>
          {children ? <div className="pt-3">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
