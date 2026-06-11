import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type EditorialSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  variant: "light" | "dark";
  layout: "split" | "stack";
  className?: string;
};

export default function EditorialSection({
  eyebrow,
  title,
  description,
  children,
  variant,
  layout,
  className,
}: EditorialSectionProps) {
  const isLight = variant === "light";

  return (
    <section
      className={cn(
        "border-b border-[rgba(200,210,221,0.08)] py-20 text-white md:py-24",
        isLight
          ? "bg-[linear-gradient(180deg,#0c1a2c_0%,#08111f_100%)]"
          : "bg-[linear-gradient(180deg,#08111f_0%,#050b16_100%)]",
        className,
      )}
    >
      <Container>
        <div className={cn(layout === "split" ? "grid gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-16" : "space-y-12")}>
          <div className="space-y-5">
            {eyebrow ? (
              <p className="technical-label">{eyebrow}</p>
            ) : null}
            <h2 className="max-w-[14ch] text-[clamp(2.1rem,4.4vw,3.5rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-balance text-white">
              {title}
            </h2>
            {description ? (
              <p className="max-w-[58ch] text-base leading-8 text-[rgba(203,213,225,0.8)] md:text-lg">
                {description}
              </p>
            ) : null}
          </div>
          <div>{children}</div>
        </div>
      </Container>
    </section>
  );
}
