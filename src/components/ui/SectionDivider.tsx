import Image from "next/image";

type SectionDividerProps = {
  variant?: "line" | "signal" | "image-band" | "angle";
  label?: string;
  sectionNumber?: string;
  imageSrc?: string;
};

export default function SectionDivider({
  variant = "line",
  label,
  sectionNumber,
  imageSrc,
}: SectionDividerProps) {
  const text = [sectionNumber, label].filter(Boolean).join(" / ");

  if (variant === "image-band") {
    return (
      <div className="relative h-12 overflow-hidden border-y border-[rgba(148,163,184,0.18)] md:h-16">
        {imageSrc ? (
          <Image src={imageSrc} alt="" fill className="object-cover" aria-hidden sizes="100vw" />
        ) : (
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,26,51,0.65),rgba(14,165,233,0.2),rgba(6,26,51,0.65))]" />
        )}
        <div className="absolute inset-0 bg-[rgba(2,8,23,0.6)]" />
        {text ? (
          <span className="technical-label absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[var(--foreground)]">
            {text}
          </span>
        ) : null}
      </div>
    );
  }

  if (variant === "signal") {
    return (
      <div className="relative h-9 overflow-hidden border-y border-[rgba(34,211,238,0.2)] bg-[rgba(6,26,51,0.35)]">
        <span className="absolute inset-x-[-10%] top-1/2 h-px -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.82),transparent)]" />
        {text ? (
          <span className="technical-label absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgba(2,8,23,0.75)] px-2 text-[var(--foreground)]">
            {text}
          </span>
        ) : null}
      </div>
    );
  }

  if (variant === "angle") {
    return (
      <div className="relative h-10 overflow-hidden border-y border-[rgba(148,163,184,0.16)]">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(6,26,51,0.45)_22%,rgba(14,165,233,0.08)_50%,rgba(6,26,51,0.45)_80%)]" />
        {text ? (
          <span className="technical-label absolute right-6 top-1/2 -translate-y-1/2 text-[var(--foreground)]">
            {text}
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <div className="relative h-6 border-t border-[rgba(148,163,184,0.18)]">
      <span className="absolute left-0 right-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.32),transparent)]" />
      {text ? (
        <span className="technical-label absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-[var(--background)] px-2 text-[var(--muted)]">
          {text}
        </span>
      ) : null}
    </div>
  );
}
