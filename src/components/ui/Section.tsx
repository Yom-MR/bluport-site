import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "dark" | "darker" | "raised";
};

const variants = {
  dark: "bg-[var(--navy-900)]",
  darker: "bg-[var(--navy-950)]",
  raised: "bg-[var(--navy-850)]",
} as const;

export default function Section({ children, className, id, variant = "dark" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative border-b border-[rgba(180,194,209,0.08)] section-pad",
        variants[variant],
        className,
      )}
    >
      {children}
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-5",
        align === "center" ? "mx-auto max-w-[640px] text-center" : "max-w-[640px]",
        className,
      )}
    >
      {eyebrow ? <p className="technical-label">{eyebrow}</p> : null}
      <h2 className="section-title text-white">{title}</h2>
      {description ? (
        <p className={cn("text-base leading-8 text-[var(--steel-300)] md:text-lg", align === "center" && "mx-auto")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
