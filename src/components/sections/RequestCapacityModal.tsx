"use client";

import { useEffect, useRef, useState } from "react";
import RequestCapacityForm from "@/components/forms/RequestCapacityForm";

const REQUEST_CAPACITY_SELECTOR = 'a[href*="request-capacity"], button[data-request-capacity="true"]';
const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

type ModalCopy = { eyebrow: string; title: string; description: string };

const DEFAULT_MODAL_COPY: ModalCopy = {
  eyebrow: "REQUEST CAPACITY",
  title: "Tell us about the move.",
  description:
    "Share the asset, route, timing, and any site constraints. Bluport operations reviews every request and follows up directly.",
};

// Copy tailored to the specific service the request was launched from, so the
// modal language matches the quote being requested.
const MODAL_COPY_BY_SERVICE: Record<string, ModalCopy> = {
  "Equipment Transport": {
    eyebrow: "EQUIPMENT TRANSPORT REQUEST",
    title: "Move a machine, attachment, or jobsite asset.",
    description:
      "Tell us the equipment, the pickup and drop sites, and your delivery window. We plan trailer fit and securement before the move starts.",
  },
  "Rapid Response": {
    eyebrow: "RAPID RESPONSE REQUEST",
    title: "Get an urgent move planned fast.",
    description:
      "Share what failed or shifted, where it needs to go, and how tight the window is. We mobilize the quickest workable plan under pressure.",
  },
  "Dedicated Capacity": {
    eyebrow: "DEDICATED CAPACITY REQUEST",
    title: "Reserve recurring truck and trailer support.",
    description:
      "Tell us the lanes, frequency, and equipment you need covered. We scope dedicated capacity you can plan around instead of chasing the spot market.",
  },
  "Project Logistics": {
    eyebrow: "PROJECT LOGISTICS REQUEST",
    title: "Coordinate a phased project move.",
    description:
      "Share the schedule, delivery windows, and sequencing dependencies. We plan movement around your project's hard dates and handoffs.",
  },
  "Storage / Staging": {
    eyebrow: "STORAGE & STAGING REQUEST",
    title: "Plan a staged or timed-release move.",
    description:
      "Tell us what needs staging, the site-readiness timing, and release windows. We keep equipment from arriving too early or too late.",
  },
  Consulting: {
    eyebrow: "LOGISTICS CONSULTING REQUEST",
    title: "Talk through your logistics operation.",
    description:
      "Share where movement workflows, lane setup, or dispatch standards create friction. We map practical next steps as your operation scales.",
  },
};

export default function RequestCapacityModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [presetOperationType, setPresetOperationType] = useState("");
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const closeModal = () => {
    setIsOpen(false);
    lastFocusedRef.current?.focus();
  };

  useEffect(() => {
    const onRequestOpen = (operationType?: string) => {
      lastFocusedRef.current = document.activeElement as HTMLElement | null;
      setPresetOperationType(operationType ?? "");
      setIsOpen(true);
    };

    const onWindowOpen = (event: Event) => {
      const detail = (event as CustomEvent).detail as { operationType?: string } | undefined;
      onRequestOpen(detail?.operationType);
    };

    const onDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) {
        return;
      }

      const trigger = target.closest(REQUEST_CAPACITY_SELECTOR) as HTMLAnchorElement | HTMLButtonElement | null;
      if (!trigger) {
        return;
      }

      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const href = trigger instanceof HTMLAnchorElement ? trigger.getAttribute("href") ?? "" : "";
      const isRequestTrigger = href.includes("request-capacity") || trigger.getAttribute("data-request-capacity") === "true";

      if (!isRequestTrigger) {
        return;
      }

      event.preventDefault();
      onRequestOpen(trigger.getAttribute("data-operation-type") ?? undefined);
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("open-request-capacity-modal", onWindowOpen);
    document.addEventListener("click", onDocumentClick);
    document.addEventListener("keydown", onEscape);

    return () => {
      window.removeEventListener("open-request-capacity-modal", onWindowOpen);
      document.removeEventListener("click", onDocumentClick);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusableItems = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      );

      if (focusableItems.length === 0) {
        event.preventDefault();
        closeButtonRef.current?.focus();
        return;
      }

      const firstElement = focusableItems[0];
      const lastElement = focusableItems[focusableItems.length - 1];
      const activeElement = document.activeElement as HTMLElement | null;

      if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
        return;
      }

      if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const modalCopy = MODAL_COPY_BY_SERVICE[presetOperationType] ?? DEFAULT_MODAL_COPY;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-3 py-5 md:px-6">
      <button
        type="button"
        aria-label="Close request capacity modal"
        onClick={closeModal}
        className="absolute inset-0 bg-[rgba(2,10,20,0.78)] backdrop-blur-md"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="request-capacity-modal-title"
        className="relative z-10 flex max-h-[92vh] w-full max-w-[860px] flex-col overflow-hidden rounded-[1.5rem] bg-white text-slate-900 shadow-[0_40px_90px_rgba(0,0,0,0.6)]"
      >
        <div className="relative shrink-0 overflow-hidden bg-[var(--navy-950)] px-6 py-6 text-white md:px-8">
          <div
            className="absolute inset-0 blueprint-grid opacity-[0.14]"
            aria-hidden
          />
          <div
            className="absolute -right-16 -top-10 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(47,116,189,0.32),transparent_70%)]"
            aria-hidden
          />
          <div className="relative flex items-start justify-between gap-6">
            <div>
              <p className="technical-label text-[var(--accent-light)]">{modalCopy.eyebrow}</p>
              <h2
                id="request-capacity-modal-title"
                className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white md:text-[1.7rem]"
              >
                {modalCopy.title}
              </h2>
              <p className="mt-2 max-w-[54ch] text-sm leading-7 text-[var(--steel-300)]">
                {modalCopy.description}
              </p>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeModal}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/5 text-lg text-white transition-colors hover:border-[var(--accent-light)] hover:bg-[rgba(47,116,189,0.2)]"
            >
              <span aria-hidden>×</span>
              <span className="sr-only">Close</span>
            </button>
          </div>
        </div>

        <div className="no-scrollbar overflow-y-auto bg-[#f7f9fc] px-6 py-6 md:px-8 md:py-7">
          <RequestCapacityForm
            key={presetOperationType || "default"}
            presetOperationType={presetOperationType}
          />
        </div>
      </div>
    </div>
  );
}
