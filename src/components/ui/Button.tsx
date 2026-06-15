"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  withArrow?: boolean;
  /** For request-capacity buttons: prepopulate the form's Operation Type. */
  operationType?: string;
};

const buttonVariants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-[var(--accent)] !text-white shadow-[0_14px_34px_rgba(47,116,189,0.32)] hover:bg-[var(--accent-strong)] hover:-translate-y-0.5",
  secondary:
    "border border-[rgba(180,194,209,0.28)] bg-[rgba(255,255,255,0.03)] text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent-light)]",
  ghost:
    "text-[var(--foreground)] hover:text-[var(--accent-light)]",
};

const baseClasses =
  "group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-[0.8rem] font-semibold tracking-[0.08em] uppercase transition-all duration-200";

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  withArrow = false,
  operationType,
}: ButtonProps) {
  const isRequestCapacity = href.includes("request-capacity");
  const classes = cn(baseClasses, buttonVariants[variant], className);
  const content = (
    <>
      {children}
      {withArrow ? (
        <ArrowRight
          size={16}
          aria-hidden
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      ) : null}
    </>
  );

  // Request-capacity buttons open a modal instead of navigating, so they must be
  // real buttons. Using a Link here causes client-side navigation to fire before
  // the modal's document click handler can preventDefault, sending users home.
  if (isRequestCapacity) {
    return (
      <button
        type="button"
        data-request-capacity="true"
        data-operation-type={operationType || undefined}
        onClick={() => {
          window.dispatchEvent(
            new CustomEvent("open-request-capacity-modal", {
              detail: { operationType: operationType || "" },
            }),
          );
        }}
        className={classes}
      >
        {content}
      </button>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
