import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

const buttonVariants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "border border-transparent bg-[var(--blue)] text-slate-950 shadow-[0_0_0_1px_rgba(14,165,233,0.25),0_10px_30px_rgba(14,165,233,0.22)] hover:bg-[var(--cyan)] hover:text-slate-950",
  secondary:
    "border border-[var(--border)] bg-[rgba(15,23,42,0.35)] text-[var(--foreground)] hover:border-[var(--blue)] hover:text-[var(--cyan)]",
};

export default function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium tracking-wide transition-colors duration-200",
        buttonVariants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}