import Image from "next/image";
import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  variant: "dark" | "light";
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  variant,
  children,
}: PageHeroProps) {
  const isLight = variant === "light";

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border-b border-[rgba(200,210,221,0.08)]",
        isLight
          ? "bg-[linear-gradient(180deg,#f7fafc_0%,#eef4f8_100%)] text-slate-950"
          : "bg-[linear-gradient(180deg,#031426_0%,#071d33_100%)] text-white",
      )}
    >
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className={cn(
              "absolute inset-0",
              isLight
                ? "bg-[linear-gradient(90deg,rgba(247,250,252,0.96)_4%,rgba(247,250,252,0.82)_45%,rgba(247,250,252,0.36)_100%)]"
                : "bg-[linear-gradient(94deg,rgba(2,10,20,0.92)_8%,rgba(2,10,20,0.76)_42%,rgba(2,10,20,0.34)_100%)]",
            )}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(31,182,232,0.18),transparent_32%)]" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(31,182,232,0.16),transparent_30%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_40%,rgba(31,182,232,0.06)_100%)]" />
        </>
      )}

      <Container className="relative z-10 flex min-h-[420px] items-end py-20 md:min-h-[480px] md:py-24 lg:min-h-[520px] lg:py-28">
        <div className="max-w-[760px] space-y-6">
          <p className={cn("technical-label", isLight ? "text-sky-700" : "text-[var(--cyan)]")}>
            {eyebrow}
          </p>
          <div className="space-y-5">
            <h1
              className={cn(
                "max-w-[12ch] text-[clamp(2.7rem,5.8vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-balance",
                isLight ? "text-slate-950" : "text-white",
              )}
            >
              {title}
            </h1>
            <p
              className={cn(
                "max-w-[60ch] text-base leading-8 md:text-lg",
                isLight ? "text-slate-700" : "text-[rgba(226,232,240,0.88)]",
              )}
            >
              {description}
            </p>
          </div>
          {children ? <div className="pt-3">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}