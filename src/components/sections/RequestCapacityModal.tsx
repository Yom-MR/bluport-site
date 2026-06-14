"use client";

import { useEffect, useRef, useState } from "react";
import RequestCapacityForm from "@/components/forms/RequestCapacityForm";

const REQUEST_CAPACITY_SELECTOR = 'a[href*="request-capacity"], button[data-request-capacity="true"]';
const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

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
              <p className="technical-label text-[var(--accent-light)]">REQUEST CAPACITY</p>
              <h2
                id="request-capacity-modal-title"
                className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white md:text-[1.7rem]"
              >
                Tell us about the move.
              </h2>
              <p className="mt-2 max-w-[54ch] text-sm leading-7 text-[var(--steel-300)]">
                Share the asset, route, timing, and any site constraints. Bluport operations reviews
                every request and follows up directly.
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
          <RequestCapacityForm presetOperationType={presetOperationType} />
        </div>
      </div>
    </div>
  );
}
