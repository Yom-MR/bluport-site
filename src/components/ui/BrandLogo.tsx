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
            "/images/brand/BPL White png.png",
            "/images/brand/bpl-logo-transparent-white.png",
            "/images/brand/bpl-logo-white.png",
          ]
        : [
            "/images/brand/BPL Black png.png",
            "/images/brand/bpl-logo-transparent-black.png",
            "/images/brand/bpl-logo-black.png",
          ],
    [variant],
  );

  const logoBox =
    placement === "navbar"
      ? {
          className: "relative h-[40px] w-[144px] md:h-[42px] md:w-[156px]",
          sizes: "(max-width: 768px) 144px, 156px",
        }
      : {
          className: "relative h-[34px] w-[110px] md:h-[36px] md:w-[116px]",
          sizes: "(max-width: 768px) 110px, 116px",
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
