"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type BrandLogoProps = {
  variant?: "navbar" | "footer";
};

export default function BrandLogo({ variant = "navbar" }: BrandLogoProps) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const sources = useMemo(
    () => ["/images/brand/bpl-logo-white.svg", "/images/brand/bpl-logo-white.png"],
    [],
  );

  const sizes =
    variant === "navbar"
      ? { width: 248, height: 60, className: "h-10 w-auto object-contain md:h-11" }
      : { width: 220, height: 56, className: "h-9 w-auto object-contain md:h-10" };

  if (sourceIndex >= sources.length) {
    return (
      <span className="flex flex-col leading-none">
        <span className="text-[10px] font-bold tracking-[0.18em] text-[var(--cyan)]">BPL</span>
        <span className="mt-1 text-sm font-semibold tracking-[0.04em] text-[var(--foreground)]">
          Bluport
        </span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center">
      <Image
        src={sources[sourceIndex]}
        alt="BPL Bluport"
        width={sizes.width}
        height={sizes.height}
        className={sizes.className}
        priority={variant === "navbar"}
        onError={() => setSourceIndex((current) => current + 1)}
      />
    </span>
  );
}
