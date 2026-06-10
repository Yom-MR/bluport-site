"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type BrandLogoProps = {
  variant?: "light" | "dark";
  placement?: "navbar" | "footer";
};

export default function BrandLogo({ variant = "light", placement = "navbar" }: BrandLogoProps) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const sources = useMemo(
    () =>
      variant === "light"
        ? ["/images/brand/BPL White png.png", "/images/brand/bpl-logo-transparent-white.png", "/images/brand/bpl-logo-white.png"]
        : ["/images/brand/BPL Black png.png", "/images/brand/bpl-logo-transparent-black.png", "/images/brand/bpl-logo-black.png"],
    [variant],
  );

  const sizes =
    placement === "navbar"
      ? { width: 292, height: 70, className: "h-[34px] w-auto object-contain" }
      : { width: 236, height: 58, className: "h-[30px] w-auto object-contain" };

  if (sourceIndex >= sources.length) {
    return (
      <span className="text-sm font-semibold tracking-[0.08em] text-[var(--foreground)] uppercase">
        Bluport Logistics
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
        priority={placement === "navbar"}
        onError={() => setSourceIndex((current) => current + 1)}
      />
    </span>
  );
}
