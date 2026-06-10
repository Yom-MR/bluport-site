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
        ? [
            "/images/brand/bpl-logo-transparent-white.png",
            "/images/brand/BPL White png.png",
            "/images/brand/bpl-logo-white.svg",
          ]
        : [
            "/images/brand/bpl-logo-transparent-black.png",
            "/images/brand/BPL Black png.png",
            "/images/brand/bpl-logo-black.png",
          ],
    [variant],
  );

  const sizes =
    placement === "navbar"
      ? { width: 320, height: 80, className: "h-[38px] w-auto object-contain" }
      : { width: 280, height: 68, className: "h-[34px] w-auto object-contain" };

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
