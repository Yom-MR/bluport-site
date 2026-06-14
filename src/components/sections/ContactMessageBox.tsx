"use client";

import { useState } from "react";
import { ChevronDown, Mail, Send, ShieldCheck } from "lucide-react";
import { CONTACT_CHANNELS } from "@/lib/contact";

type DepartmentKey = keyof typeof CONTACT_CHANNELS;

const DEPARTMENTS: Array<{ key: DepartmentKey; label: string }> = [
  { key: "booking", label: "Freight booking" },
  { key: "support", label: "Customer support" },
  { key: "billing", label: "Billing" },
  { key: "vendors", label: "Vendors & carriers" },
  { key: "compliance", label: "Compliance & onboarding" },
  { key: "hr", label: "Recruiting & careers" },
];

type FormState = {
  department: DepartmentKey;
  fullName: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialForm: FormState = {
  department: "booking",
  fullName: "",
  company: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const labelClass = "technical-label mb-2 block text-[0.64rem] text-[var(--steel-300)]";
const fieldClass =
  "w-full rounded-xl border border-white/12 bg-[rgba(255,255,255,0.04)] px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-[var(--steel-500)] focus:border-[var(--accent-light)] focus:ring-2 focus:ring-[rgba(91,159,216,0.25)]";

export default function ContactMessageBox() {
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const activeChannel = CONTACT_CHANNELS[formData.department];

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");
    setIsSending(true);

    try {
      const response = await fetch("/api/contact-department", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setIsSubmitted(true);
    } catch {
      setSubmitError(
        `We couldn't send your message. Please try again or email ${activeChannel.email}.`,
      );
    } finally {
      setIsSending(false);
    }
  };

  if (isSubmitted) {
    return (
      <div
        className="flex flex-col items-start rounded-[1.5rem] border border-white/10 bg-[var(--navy-900)] p-8 text-white shadow-[0_24px_60px_rgba(5,11,22,0.35)] md:p-10"
        role="status"
        aria-live="polite"
      >
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(91,159,216,0.16)] text-[var(--accent-light)]">
          <Mail size={22} aria-hidden />
        </span>
        <p className="technical-label mt-5 text-[var(--accent-light)]">MESSAGE SENT</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
          Your message is on its way to {activeChannel.email}.
        </h3>
        <p className="mt-3 max-w-[52ch] text-sm leading-7 text-[var(--steel-300)]">
          Bluport operations will review the details and follow up directly. Need to send another?
        </p>
        <button
          type="button"
          onClick={() => {
            setFormData(initialForm);
            setIsSubmitted(false);
          }}
          className="mt-6 inline-flex rounded-xl border border-white/20 bg-[rgba(255,255,255,0.04)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:border-[var(--accent-light)]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[1.5rem] border border-white/10 bg-[var(--navy-900)] p-6 text-white shadow-[0_24px_60px_rgba(5,11,22,0.35)] md:p-8"
    >
      <div className="grid gap-5">
        <div>
          <label className={labelClass} htmlFor="mb-department">
            Department *
          </label>
          <div className="relative">
            <select
              id="mb-department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className={`${fieldClass} cursor-pointer appearance-none pr-10 [&>option]:text-slate-900`}
            >
              {DEPARTMENTS.map((dept) => (
                <option key={dept.key} value={dept.key}>
                  {dept.label} — {CONTACT_CHANNELS[dept.key].email}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              aria-hidden
              className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--steel-400)]"
            />
          </div>
          <p className="mt-2 flex items-center gap-1.5 text-xs text-[var(--steel-400)]">
            <Mail size={13} aria-hidden className="text-[var(--accent-light)]" />
            Routes to {activeChannel.email} — {activeChannel.purpose}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="mb-fullName">
              Name *
            </label>
            <input
              id="mb-fullName"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={handleChange}
              className={fieldClass}
              placeholder="Full name"
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="mb-company">
              Company *
            </label>
            <input
              id="mb-company"
              name="company"
              type="text"
              required
              value={formData.company}
              onChange={handleChange}
              className={fieldClass}
              placeholder="Company name"
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="mb-email">
              Email *
            </label>
            <input
              id="mb-email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={fieldClass}
              placeholder="name@company.com"
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="mb-phone">
              Phone
            </label>
            <input
              id="mb-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className={fieldClass}
              placeholder="(###) ###-####"
            />
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor="mb-subject">
            Subject *
          </label>
          <input
            id="mb-subject"
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={handleChange}
            className={fieldClass}
            placeholder="Brief subject line"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="mb-message">
            Message *
          </label>
          <textarea
            id="mb-message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className={fieldClass}
            placeholder="Share the move details, timing, and site constraints."
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

        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="flex items-center gap-2 text-xs text-[var(--steel-400)]">
            <ShieldCheck size={14} aria-hidden className="text-[var(--accent-light)]" />
            Required fields are marked with *.
          </p>
          <button
            type="submit"
            disabled={isSending}
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-[0_12px_24px_rgba(47,116,189,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            <Send size={15} aria-hidden />
            {isSending ? "Sending..." : "Send message"}
          </button>
        </div>
      </div>
    </form>
  );
}
