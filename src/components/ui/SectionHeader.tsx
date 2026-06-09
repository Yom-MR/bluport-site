type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <header className="relative z-10 max-w-3xl space-y-4">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">{title}</h2>
      {description ? <p className="text-base leading-relaxed text-[var(--muted)] md:text-lg">{description}</p> : null}
    </header>
  );
}