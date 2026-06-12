"use client";

import { useEffect, useState } from "react";
import { FileText, X } from "lucide-react";

const specSections = [
  {
    label: "Truck platform",
    rows: [{ k: "Configuration", v: "Ford F-350 hotshot" }],
  },
  {
    label: "Trailer capability",
    rows: [
      { k: "Deck", v: "40' power tilt" },
      { k: "Loading", v: "Ground-level — no ramp for most equipment" },
      { k: "Secondary", v: "Gooseneck deck for containers & project freight" },
    ],
  },
  {
    label: "Typical moves",
    rows: [
      { k: "Equipment", v: "Machines, attachments, powered units" },
      { k: "Project", v: "Containers, prefab assemblies, staging gear" },
      { k: "Response", v: "Rapid repositioning & schedule recovery" },
    ],
  },
  {
    label: "Operating disciplines",
    rows: [
      { k: "Access", v: "Site, gate, and contact confirmation pre-dispatch" },
      { k: "Securement", v: "Chain & binder plan documented per load" },
      { k: "Comms", v: "Field-aware dispatch updates" },
      { k: "Closeout", v: "POD signed at delivery, follow-up complete" },
    ],
  },
] as const;

export default function SpecSheetModal({ triggerClassName }: { triggerClassName?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          triggerClassName ??
          "inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[rgba(180,194,209,0.28)] bg-[rgba(255,255,255,0.03)] px-6 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-[var(--foreground)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent-light)]"
        }
      >
        <FileText size={16} aria-hidden />
        View equipment spec sheet
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Bluport equipment spec sheet"
        >
          <button
            type="button"
            aria-label="Close spec sheet"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-[rgba(2,8,16,0.8)] backdrop-blur-sm"
          />
          <div className="relative z-10 w-full max-w-[640px] overflow-hidden rounded-[1.5rem] border border-white/12 bg-[var(--navy-900)] shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-[rgba(255,255,255,0.02)] px-6 py-5">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[rgba(47,116,189,0.16)] text-[var(--accent-light)]">
                  <FileText size={18} aria-hidden />
                </span>
                <div>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[var(--steel-400)]">
                    Equipment spec sheet
                  </p>
                  <p className="text-base font-semibold tracking-[-0.02em] text-white">
                    Bluport Logistics
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/12 text-[var(--steel-300)] transition-colors hover:border-white/30 hover:text-white"
              >
                <X size={18} aria-hidden />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
              <div className="grid gap-5 sm:grid-cols-2">
                {specSections.map((section) => (
                  <div
                    key={section.label}
                    className="rounded-2xl border border-white/8 bg-[rgba(255,255,255,0.02)] p-5"
                  >
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--accent-light)]">
                      {section.label}
                    </p>
                    <dl className="mt-3 space-y-2.5">
                      {section.rows.map((row) => (
                        <div key={row.k} className="flex flex-col gap-0.5">
                          <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[var(--steel-400)]">
                            {row.k}
                          </dt>
                          <dd className="text-sm leading-snug text-[#dce6ee]">{row.v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
