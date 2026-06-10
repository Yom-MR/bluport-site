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
            "/images/brand/bpl-logo-white.png",
            "/images/brand/bpl-logo-white.png",
            "/images/brand/bpl-logo-white-cropped.png",
          ]
        : [
            "/images/brand/bpl-logo-transparent-black.png",
            "/images/brand/BPL Black png.png",
            "/images/brand/bpl-logo-black.png",
            "/images/brand/bpl-logo-black-cropped.png",
          ],
    [variant],
  );

  const logoBox =
    placement === "navbar"
      ? {
          className: "relative h-[64px] w-[172px] md:h-[68px] md:w-[196px]",
          sizes: "(max-width: 768px) 172px, 196px",
        }
      : {
          className: "relative h-[56px] w-[154px] md:h-[60px] md:w-[172px]",
          sizes: "(max-width: 768px) 154px, 172px",
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
