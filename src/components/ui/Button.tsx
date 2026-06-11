import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  withArrow?: boolean;
};

const buttonVariants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-[var(--accent)] text-white shadow-[0_14px_34px_rgba(47,116,189,0.32)] hover:bg-[var(--accent-strong)] hover:-translate-y-0.5",
  secondary:
    "border border-[rgba(180,194,209,0.28)] bg-[rgba(255,255,255,0.03)] text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent-light)]",
  ghost:
    "text-[var(--foreground)] hover:text-[var(--accent-light)]",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  withArrow = false,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-[0.8rem] font-semibold tracking-[0.08em] uppercase transition-all duration-200",
        buttonVariants[variant],
        className,
      )}
    >
      {children}
      {withArrow ? (
        <ArrowRight size={16} aria-hidden className="transition-transform duration-200 group-hover:translate-x-1" />
      ) : null}
    </Link>
  );
}
