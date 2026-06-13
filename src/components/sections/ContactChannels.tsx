"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Mail, ShieldCheck } from "lucide-react";
import { CONTACT_CHANNELS } from "@/lib/contact";

type DepartmentKey = keyof typeof CONTACT_CHANNELS;

const CHANNELS: Array<{ key: DepartmentKey; title: string }> = [
  { key: "booking", title: "Freight booking" },
  { key: "support", title: "Customer support" },
  { key: "billing", title: "Billing" },
  { key: "vendors", title: "Vendors & carriers" },
  { key: "compliance", title: "Compliance & onboarding" },
  { key: "hr", title: "Recruiting & careers" },
];

const labelClass = "technical-label mb-2 block text-[0.64rem] text-slate-700";
const inputClass =
  "w-full rounded-xl border border-[rgba(148,163,184,0.35)] bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[rgba(14,165,233,0.7)] focus:ring-2 focus:ring-[rgba(14,165,233,0.15)]";

type FormState = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const emptyForm: FormState = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactChannels() {
  const [activeKey, setActiveKey] = useState<DepartmentKey | null>(null);
  const [formData, setFormData] = useState<FormState>(emptyForm);
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const activeChannel = activeKey ? CONTACT_CHANNELS[activeKey] : null;
  const activeTitle = CHANNELS.find((c) => c.key === activeKey)?.title ?? "";

  const openModal = (key: DepartmentKey, title: string) => {
    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    setActiveKey(key);
    setFormData({ ...emptyForm, subject: `${title} inquiry` });
    setIsSubmitted(false);
    setSubmitError("");
  };

  const closeModal = () => {
    setActiveKey(null);
    lastFocusedRef.current?.focus();
  };

  useEffect(() => {
    if (!activeKey) {
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveKey(null);
      }
    };
    document.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onEscape);
    };
  }, [activeKey]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!activeKey) {
      return;
    }
    setSubmitError("");
    setIsSending(true);

    try {
      const response = await fetch("/api/contact-department", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ department: activeKey, ...formData }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setIsSubmitted(true);
    } catch {
      setSubmitError(
        `We couldn't send your message. Please try again or email ${activeChannel?.email}.`,
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <div className="grid gap-px overflow-hidden rounded-2xl border border-[rgba(180,194,209,0.16)] bg-[rgba(180,194,209,0.12)] sm:grid-cols-2">
        {CHANNELS.map(({ key, title }) => {
          const channel = CONTACT_CHANNELS[key];
          return (
            <button
              key={key}
              type="button"
              onClick={() => openModal(key, title)}
              className="group flex flex-col gap-1.5 bg-[var(--navy-900)] p-5 text-left transition-colors hover:bg-[rgba(47,116,189,0.1)]"
            >
              <span className="text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-[var(--steel-400)]">
                {title}
              </span>
              <span className="flex items-center gap-2 text-[0.95rem] font-semibold tracking-[-0.01em] text-white">
                <Mail size={15} aria-hidden className="shrink-0 text-[var(--accent)]" />
                <span className="truncate transition-colors group-hover:text-[var(--accent-light)]">
                  {channel.email}
                </span>
              </span>
              <span className="text-[0.82rem] leading-6 text-[var(--steel-300)]">
                {channel.purpose}
              </span>
              <span className="mt-1 inline-flex items-center gap-1.5 text-[0.72rem] font-semibold text-[var(--accent-light)] opacity-0 transition-opacity group-hover:opacity-100">
                Message this department
                <ArrowRight size={13} aria-hidden className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </button>
          );
        })}
      </div>

      {activeKey && activeChannel ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-3 py-5 md:px-6">
          <button
            type="button"
            aria-label="Close contact modal"
            onClick={closeModal}
            className="absolute inset-0 bg-[rgba(2,10,20,0.78)] backdrop-blur-md"
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="department-contact-title"
            className="relative z-10 flex max-h-[92vh] w-full max-w-[640px] flex-col overflow-hidden rounded-[1.5rem] bg-white text-slate-900 shadow-[0_40px_90px_rgba(0,0,0,0.6)]"
          >
            <div className="relative shrink-0 overflow-hidden bg-[var(--navy-950)] px-6 py-6 text-white md:px-8">
              <div className="absolute inset-0 blueprint-grid opacity-[0.14]" aria-hidden />
              <div
                className="absolute -right-16 -top-10 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(47,116,189,0.32),transparent_70%)]"
                aria-hidden
              />
              <div className="relative flex items-start justify-between gap-6">
                <div>
                  <p className="technical-label text-[var(--accent-light)]">CONTACT · {activeTitle.toUpperCase()}</p>
                  <h2
                    id="department-contact-title"
                    className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white md:text-[1.7rem]"
                  >
                    Message {activeChannel.email}
                  </h2>
                  <p className="mt-2 max-w-[48ch] text-sm leading-7 text-[var(--steel-300)]">
                    Your message will be sent directly to the appropriate Bluport department.
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
              {isSubmitted ? (
                <div
                  className="rounded-2xl border border-[rgba(148,163,184,0.3)] bg-white p-6"
                  role="status"
                  aria-live="polite"
                >
                  <p className="technical-label">MESSAGE SENT</p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">
                    Your message is on its way to {activeChannel.email}.
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    Bluport will review the details and follow up directly.
                  </p>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="mt-6 inline-flex rounded-xl border border-[rgba(148,163,184,0.35)] bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-900 transition-colors hover:border-[rgba(14,165,233,0.45)]"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
                  <p className="flex items-center gap-2 text-xs text-slate-500">
                    <ShieldCheck size={14} aria-hidden className="text-sky-600" />
                    Routed to {activeChannel.email} · Required fields are marked with *.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="dc-fullName">
                        Name *
                      </label>
                      <input
                        id="dc-fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="dc-company">
                        Company *
                      </label>
                      <input
                        id="dc-company"
                        name="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="dc-email">
                        Email *
                      </label>
                      <input
                        id="dc-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="name@company.com"
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="dc-phone">
                        Phone
                      </label>
                      <input
                        id="dc-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="(###) ###-####"
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="dc-subject">
                      Subject *
                    </label>
                    <input
                      id="dc-subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Brief subject line"
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="dc-message">
                      Message *
                    </label>
                    <textarea
                      id="dc-message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="How can this department help?"
                    />
                  </div>

                  {submitError ? (
                    <div
                      className="rounded-xl border border-[rgba(239,68,68,0.4)] bg-[rgba(254,226,226,0.7)] px-4 py-3 text-sm text-red-700"
                      role="alert"
                    >
                      {submitError}
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    disabled={isSending}
                    className="inline-flex w-fit rounded-xl bg-[var(--accent)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-[0_12px_24px_rgba(47,116,189,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSending ? "Sending..." : "Send message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
