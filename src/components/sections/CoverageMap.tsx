"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// State FIPS ids
const PRIMARY = new Set(["48"]); // Texas
const EXTENDED = new Set(["22", "28", "01", "12", "40", "05", "35", "48"]); // LA, MS, AL, FL, OK, AR, NM (+TX)

type Terminal = {
  name: string;
  label: string;
  coordinates: [number, number];
  labelDx: number;
  central?: boolean;
};

// Bluport terminals across Texas.
const TERMINALS: Terminal[] = [
  { name: "Houston", label: "Houston (HQ)", coordinates: [-95.3698, 29.7604], labelDx: 12, central: true },
  { name: "Dallas", label: "Dallas", coordinates: [-96.797, 32.7767], labelDx: 12 },
];

const legend: Array<{ label: string; swatch: string; ring?: boolean }> = [
  { label: "Houston (HQ)", swatch: "var(--accent-light)", ring: true },
  { label: "Dallas", swatch: "var(--accent-light)" },
  { label: "Primary lanes — Texas", swatch: "var(--accent)" },
  { label: "Extended coverage — Gulf Coast", swatch: "rgba(47,116,189,0.45)" },
  { label: "National capability", swatch: "rgba(180,194,209,0.14)" },
];

export default function CoverageMap({ layout = "split" }: { layout?: "split" | "panel" }) {
  const [hovered, setHovered] = useState<string | null>(null);

  const isPanel = layout === "panel";

  return (
    <div
      className={
        isPanel
          ? "flex flex-col gap-5"
          : "grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center lg:gap-12"
      }
    >
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[rgba(5,11,22,0.55)] p-2">
        <div className="absolute inset-0 blueprint-grid opacity-[0.12]" aria-hidden />
        <ComposableMap
          projection="geoAlbersUsa"
          projectionConfig={{ scale: 1000 }}
          width={900}
          height={520}
          style={{ width: "100%", height: "auto" }}
          aria-label="Map of Bluport operating coverage across the United States"
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }: { geographies: Array<Record<string, unknown>> }) =>
              geographies.map((geo: Record<string, unknown>) => {
                const id = geo.id as string;
                const isPrimary = PRIMARY.has(id);
                const isExtended = EXTENDED.has(id);
                const fill = isPrimary
                  ? "var(--accent)"
                  : isExtended
                    ? "rgba(47,116,189,0.42)"
                    : "rgba(180,194,209,0.08)";
                return (
                  <Geography
                    key={geo.rsmKey as string}
                    geography={geo}
                    onMouseEnter={() =>
                      setHovered((geo.properties as { name?: string })?.name ?? null)
                    }
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      default: {
                        fill,
                        stroke: "rgba(132,188,232,0.35)",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      hover: {
                        fill: isPrimary
                          ? "var(--accent-light)"
                          : isExtended
                            ? "rgba(91,159,216,0.6)"
                            : "rgba(180,194,209,0.18)",
                        stroke: "rgba(132,188,232,0.6)",
                        strokeWidth: 0.7,
                        outline: "none",
                      },
                      pressed: { fill: "var(--accent-light)", outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>
          {TERMINALS.map((terminal) => (
            <Marker key={terminal.name} coordinates={terminal.coordinates}>
              {terminal.central ? (
                <circle r={9} fill="rgba(132,188,232,0.25)" />
              ) : (
                <circle r={7} fill="rgba(132,188,232,0.18)" />
              )}
              <circle
                r={terminal.central ? 4.5 : 3.6}
                fill="var(--accent-light)"
                stroke="#fff"
                strokeWidth={terminal.central ? 1.2 : 1}
              />
              <text
                x={terminal.labelDx}
                y={4}
                fill="#dce6ee"
                fontSize={13}
                fontWeight={600}
                style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
              >
                {terminal.label}
              </text>
            </Marker>
          ))}
        </ComposableMap>
        <p
          className="absolute bottom-4 left-5 max-w-[90%] text-xs font-medium text-[var(--steel-300)]"
          aria-live="polite"
        >
          {hovered ? hovered : "Houston (HQ) & Dallas, TX"}
        </p>
      </div>

      <ul className={isPanel ? "grid gap-2.5 sm:grid-cols-2" : "space-y-3.5"}>
        {legend.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3.5"
          >
            <span
              className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
              style={{
                backgroundColor: item.swatch,
                boxShadow: item.ring ? "0 0 0 4px rgba(132,188,232,0.2)" : undefined,
              }}
              aria-hidden
            />
            <span className="text-sm font-medium leading-snug text-[#dce6ee]">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
