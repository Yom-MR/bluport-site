"use client";

import { useMemo, useState } from "react";
import Button from "@/components/ui/Button";

const calculatorClass =
  "w-full rounded-xl border border-[rgba(148,163,184,0.35)] bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[rgba(14,165,233,0.7)] focus:ring-2 focus:ring-[rgba(14,165,233,0.15)]";

export default function QuoteCalculator() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [weight, setWeight] = useState("8000");
  const [urgency, setUrgency] = useState("Standard");
  const [assetType, setAssetType] = useState("Equipment");

  const estimate = useMemo(() => {
    const parsedWeight = Number(weight.replace(/[^0-9.]/g, "")) || 0;
    const urgencyMultiplier = urgency === "Emergency / Rapid Response" ? 1.35 : urgency === "Time-Critical" ? 1.18 : 1;
    const base = 340;
    const weightComponent = Math.min(560, parsedWeight / 40);
    return Math.round((base + weightComponent) * urgencyMultiplier);
  }, [urgency, weight]);

  return (
    <section className="section-pad bg-[#f4f8ff] text-[#031426]">
      <div className="mx-auto grid w-full max-w-[1180px] gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="space-y-4">
          <p className="eyebrow">QUOTE CALCULATOR</p>
          <h2 className="section-title max-w-[14ch] text-[#031426]">A quick estimate before you request capacity.</h2>
          <p className="max-w-[62ch] text-base leading-8 text-[#34465a] md:text-lg">
            Enter the basic move details to get a directional rate range. Bluport still reviews the
            actual route, access, timing, and securement requirements before confirming the move.
          </p>
          <div className="rounded-[1.6rem] border border-[rgba(148,163,184,0.22)] bg-white p-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="technical-label mb-2 block text-sky-700" htmlFor="origin">Origin</label>
                <input id="origin" value={origin} onChange={(event) => setOrigin(event.target.value)} className={calculatorClass} placeholder="Houston, TX" />
              </div>
              <div>
                <label className="technical-label mb-2 block text-sky-700" htmlFor="destination">Destination</label>
                <input id="destination" value={destination} onChange={(event) => setDestination(event.target.value)} className={calculatorClass} placeholder="Dallas, TX" />
              </div>
              <div>
                <label className="technical-label mb-2 block text-sky-700" htmlFor="assetType">Asset type</label>
                <input id="assetType" value={assetType} onChange={(event) => setAssetType(event.target.value)} className={calculatorClass} placeholder="Lift, generator, skid steer" />
              </div>
              <div>
                <label className="technical-label mb-2 block text-sky-700" htmlFor="weight">Estimated weight</label>
                <input id="weight" value={weight} onChange={(event) => setWeight(event.target.value)} className={calculatorClass} placeholder="8000" />
              </div>
              <div className="md:col-span-2">
                <label className="technical-label mb-2 block text-sky-700" htmlFor="urgency">Urgency</label>
                <select id="urgency" value={urgency} onChange={(event) => setUrgency(event.target.value)} className={calculatorClass}>
                  <option>Standard</option>
                  <option>Time-Critical</option>
                  <option>Emergency / Rapid Response</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[1.8rem] border border-[rgba(31,182,232,0.2)] bg-[#031426] p-6 text-white shadow-[0_24px_60px_rgba(3,20,38,0.22)] md:p-8">
          <p className="technical-label text-[var(--cyan)]">ESTIMATED RANGE</p>
          <p className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white">${estimate}</p>
          <p className="mt-2 text-sm leading-7 text-[rgba(203,213,225,0.85)]">
            Directional estimate only. Final pricing depends on route, access, load details, and schedule.
          </p>
          <p className="mt-6 text-sm leading-7 text-[rgba(203,213,225,0.9)]">
            {origin && destination
              ? `${assetType} movement from ${origin} to ${destination}.`
              : "Add origin and destination for a more helpful estimate."}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/#request-capacity">Request Capacity</Button>
            <Button href="/contact" variant="secondary">Speak with an expert</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
