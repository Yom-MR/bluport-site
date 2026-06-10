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
            "/images/brand/bpl-logo-white-cropped.png",
            "/images/brand/BPL White png.png",
            "/images/brand/bpl-logo-transparent-white.png",
            "/images/brand/bpl-logo-white.png",
          ]
        : [
            "/images/brand/bpl-logo-black-cropped.png",
            "/images/brand/BPL Black png.png",
            "/images/brand/bpl-logo-transparent-black.png",
            "/images/brand/bpl-logo-black.png",
          ],
    [variant],
  );

  const logoBox =
    placement === "navbar"
      ? {
          className: "relative h-[52px] w-[136px] md:h-[56px] md:w-[148px]",
          sizes: "(max-width: 768px) 136px, 148px",
        }
      : {
          className: "relative h-[44px] w-[116px] md:h-[48px] md:w-[126px]",
          sizes: "(max-width: 768px) 116px, 126px",
        };

  if (sourceIndex >= sources.length) {
    return (
      <span className="text-sm font-semibold tracking-[0.08em] text-[var(--foreground)] uppercase">
        Bluport Logistics
      </span>
    );
  }

  return (
    <span className={`inline-flex shrink-0 ${logoBox.className}`}>
      <Image
        src={sources[sourceIndex]}
        alt="BPL Bluport"
        fill
        sizes={logoBox.sizes}
        className="object-contain object-left"
        priority={placement === "navbar"}
        onError={() => setSourceIndex((current) => current + 1)}
      />
    </span>
  );
}
