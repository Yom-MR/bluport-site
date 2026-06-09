// ============================================================
// MediaReadiness.tsx
// TEMPORARY SECTION — Remove this section once all priority
// assets have been collected and placed in /public/images/.
// See: src/data/mediaGuide.ts for the full recommended shot list.
// ============================================================
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const assetCards = [
  {
    num: "01",
    title: "Hero truck + trailer shot",
    whyItMatters:
      "Sets the first impression on every visit. A real F350 + 40' tilt trailer shot replaces the entire need for abstract design — it immediately tells customers who Bluport is.",
    shotStyle: "Wide cinematic landscape. Low angle. Blue hour or golden hour. Front-quarter or 3/4 profile.",
  },
  {
    num: "02",
    title: "Loaded equipment securement",
    whyItMatters:
      "Equipment rental companies and construction operations managers will judge load discipline instantly. This shot proves Bluport takes securement seriously.",
    shotStyle: "Close-detail. Straps, chains, or binders on a loaded machine. Natural light preferred.",
  },
  {
    num: "03",
    title: "Jobsite delivery",
    whyItMatters:
      "Customers hire Bluport to get equipment to a site on time. This shot shows the actual product: equipment arriving at a real, active jobsite.",
    shotStyle: "Medium-wide. Active construction entrance or staging area. Crew or equipment visible in background.",
  },
  {
    num: "04",
    title: "Driver / pre-trip inspection",
    whyItMatters:
      "Humanizes the brand and creates trust with operations managers who need to know a real professional is behind every move.",
    shotStyle: "Portrait or 3/4 profile. Pre-trip checklist or truck cab context. Professional but authentic.",
  },
  {
    num: "05",
    title: "Dispatch / operations workspace",
    whyItMatters:
      "Supports the mission-control narrative and veteran-led precision story. Shows there is a real operational mind behind every load.",
    shotStyle: "Lifestyle photo. Laptop + dispatch tools visible. Clean, purposeful, not staged.",
  },
  {
    num: "06",
    title: "Short hero loop (video)",
    whyItMatters:
      "A 8–12 second muted autoplay clip creates more brand impact than any static image. It is the single asset that elevates Bluport from strong website to elite logistics brand.",
    shotStyle: "Truck/trailer in motion. Gimbal or drone stabilized. Seamless loop candidate. No music needed.",
  },
];

export default function MediaReadiness() {
  return (
    <section className="section-shell">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="BRAND ASSET PLAN"
          title="The visuals that will make Bluport feel world-class."
          description="A premium website needs real operational proof. These are the images and short video clips that will turn the site from a strong interface into a believable, elite logistics brand."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {assetCards.map((card) => (
            <article
              key={card.num}
              className="relative flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[linear-gradient(145deg,rgba(6,26,51,0.55),rgba(15,23,42,0.4))] p-5 hover:border-[rgba(14,165,233,0.3)] transition-colors"
            >
              {/* Numbered label */}
              <div className="flex items-start justify-between gap-3">
                <span className="technical-label text-[var(--cyan)] text-[0.65rem]">{card.num}</span>
                {/* Placeholder frame — remove or replace with <Image> when real asset exists */}
                <div
                  aria-hidden
                  className="h-16 w-24 shrink-0 rounded-lg border border-[var(--border)] bg-[linear-gradient(135deg,rgba(6,26,51,0.8),rgba(14,165,233,0.04))] relative overflow-hidden"
                >
                  {/* Inner crosshair lines hint at a photo placeholder */}
                  <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[rgba(148,163,184,0.12)]" />
                  <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-[rgba(148,163,184,0.12)]" />
                  <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold tracking-[0.12em] text-[rgba(148,163,184,0.25)] uppercase">
                    Photo
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-[var(--foreground)]">{card.title}</h3>
                <p className="text-xs leading-relaxed text-[var(--muted)]">{card.whyItMatters}</p>
              </div>

              <div className="mt-auto border-t border-[rgba(148,163,184,0.08)] pt-3">
                <p className="technical-label mb-1">Shot style</p>
                <p className="text-xs leading-relaxed text-[rgba(148,163,184,0.7)]">{card.shotStyle}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-xs text-[rgba(148,163,184,0.45)] tracking-wide">
          Asset guide — <span className="font-mono">src/data/mediaGuide.ts</span> · Storage — <span className="font-mono">public/images/</span>
        </p>
      </Container>
    </section>
  );
}
