"use client";

import { useEffect, useRef, useState } from "react";
import RequestCapacityForm from "@/components/forms/RequestCapacityForm";

const REQUEST_CAPACITY_SELECTOR = 'a[href*="request-capacity"], button[data-request-capacity="true"]';
const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function RequestCapacityModal() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const closeModal = () => {
    setIsOpen(false);
    lastFocusedRef.current?.focus();
  };

  useEffect(() => {
    const onRequestOpen = () => {
      lastFocusedRef.current = document.activeElement as HTMLElement | null;
      setIsOpen(true);
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
      onRequestOpen();
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("open-request-capacity-modal", onRequestOpen);
    document.addEventListener("click", onDocumentClick);
    document.addEventListener("keydown", onEscape);

    return () => {
      window.removeEventListener("open-request-capacity-modal", onRequestOpen);
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
        className="absolute inset-0 bg-[rgba(2,10,20,0.74)] backdrop-blur-sm"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="request-capacity-modal-title"
        className="relative z-10 w-full max-w-[980px] overflow-hidden rounded-[1.6rem] border border-[rgba(148,163,184,0.26)] bg-[#031426] text-white shadow-[0_40px_80px_rgba(2,10,20,0.5)]"
      >
        <div className="max-h-[90vh] overflow-y-auto p-4 md:p-6">
          <div className="mb-5 flex items-start justify-between gap-6 border-b border-[rgba(148,163,184,0.22)] pb-5">
            <div>
              <p className="technical-label text-[var(--cyan)]">REQUEST CAPACITY</p>
              <h2 id="request-capacity-modal-title" className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
                Request capacity
              </h2>
              <p className="mt-2 max-w-[56ch] text-sm leading-7 text-[rgba(203,213,225,0.86)] md:text-base">
                Send the asset, route, timing, and constraints. Bluport operations will review the request and follow up.
              </p>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeModal}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(148,163,184,0.3)] bg-[rgba(255,255,255,0.04)] text-white transition-colors hover:border-[var(--cyan)]"
            >
              <span aria-hidden>×</span>
            </button>
          </div>

          <RequestCapacityForm />
        </div>
      </div>
    </div>
  );
}