import Image from "next/image";
import { cn } from "@/lib/utils";

type ImagePanelProps = {
  src: string;
  alt: string;
  caption?: string;
  tone: "dark" | "light";
};

export default function ImagePanel({ src, alt, caption, tone }: ImagePanelProps) {
  const isLight = tone === "light";

  return (
    <figure className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-[rgba(148,163,184,0.18)]">
      <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
      <div
        className={cn(
          "absolute inset-0",
          isLight
            ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(15,23,42,0.08)_45%,rgba(15,23,42,0.68)_100%)]"
            : "bg-[linear-gradient(180deg,rgba(2,10,20,0.12)_0%,rgba(2,10,20,0.26)_45%,rgba(2,10,20,0.84)_100%)]",
        )}
      />
      {caption ? (
        <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <p className={cn("max-w-[28rem] text-sm leading-7 md:text-base", isLight ? "text-white" : "text-[rgba(226,232,240,0.9)]")}>
            {caption}
          </p>
        </figcaption>
      ) : null}
    </figure>
  );
}