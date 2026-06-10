import { cn } from "@/lib/utils";

type FeatureRowItem = {
  title: string;
  description: string;
  label?: string;
};

type FeatureRowsProps = {
  items: FeatureRowItem[];
  variant: "light" | "dark";
};

export default function FeatureRows({ items, variant }: FeatureRowsProps) {
  const isLight = variant === "light";

  return (
    <div className="divide-y divide-[rgba(148,163,184,0.18)] rounded-[2rem] border border-[rgba(148,163,184,0.16)]">
      {items.map((item, index) => (
        <article
          key={item.title}
          className={cn(
            "grid gap-4 px-6 py-6 md:px-8 md:py-7 lg:grid-cols-[minmax(0,180px)_minmax(0,1fr)] lg:gap-8",
            isLight
              ? index % 2 === 0
                ? "bg-[rgba(255,255,255,0.92)]"
                : "bg-[rgba(241,245,249,0.92)]"
              : index % 2 === 0
                ? "bg-[rgba(255,255,255,0.03)]"
                : "bg-[rgba(255,255,255,0.05)]",
          )}
        >
          <div className="space-y-2">
            {item.label ? (
              <p className={cn("technical-label", isLight ? "text-sky-700" : "text-[var(--cyan)]")}>
                {item.label}
              </p>
            ) : null}
            <h3 className={cn("text-xl font-semibold tracking-[-0.03em]", isLight ? "text-slate-950" : "text-white")}>
              {item.title}
            </h3>
          </div>
          <p className={cn("max-w-[65ch] text-sm leading-7 md:text-base", isLight ? "text-slate-600" : "text-[rgba(203,213,225,0.84)]")}>
            {item.description}
          </p>
        </article>
      ))}
    </div>
  );
}