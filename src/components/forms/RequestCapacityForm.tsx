"use client";

import { useState } from "react";
import { CONTACT_CHANNELS } from "@/lib/contact";

type RequestCapacityFormData = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  pickupLocation: string;
  deliveryLocation: string;
  requestedPickupDate: string;
  requestedDeliveryDate: string;
  assetType: string;
  estimatedWeight: string;
  dimensions: string;
  urgencyLevel: "Standard" | "Time-Critical" | "Emergency / Rapid Response";
  operationType:
    | "Equipment Transport"
    | "Rapid Response"
    | "Dedicated Capacity"
    | "Project Logistics"
    | "Storage / Staging"
    | "Consulting";
  preferredContactMethod: "Email" | "Phone" | "Either";
  notes: string;
};

const initialFormData: RequestCapacityFormData = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  pickupLocation: "",
  deliveryLocation: "",
  requestedPickupDate: "",
  requestedDeliveryDate: "",
  assetType: "",
  estimatedWeight: "",
  dimensions: "",
  urgencyLevel: "Standard",
  operationType: "Equipment Transport",
  preferredContactMethod: "Either",
  notes: "",
};

const labelClass = "technical-label mb-2 block text-[0.64rem] text-[var(--foreground)]";
const inputClass =
  "w-full rounded-xl border border-[rgba(148,163,184,0.35)] bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[rgba(14,165,233,0.7)] focus:ring-2 focus:ring-[rgba(14,165,233,0.15)]";

export default function RequestCapacityForm() {
  const [formData, setFormData] = useState<RequestCapacityFormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");
    setIsSending(true);

    try {
      const response = await fetch("/api/request-capacity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Request submission failed");
      }

      setIsSubmitted(true);
      setFormData(initialFormData);
    } catch {
      setSubmitError(
        `We couldn't send the request. Please try again or contact ${CONTACT_CHANNELS.booking.email}.`,
      );
    } finally {
      setIsSending(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-[rgba(148,163,184,0.3)] bg-white p-6 md:p-7" role="status" aria-live="polite">
        <p className="technical-label">INTAKE STATUS</p>
        <h3 className="mt-3 text-xl font-semibold text-slate-900">
          Mission request received. Bluport operations will review the details and follow up.
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          A confirmation has been routed to our operations inbox.
        </p>
        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setSubmitError("");
          }}
          className="mt-6 inline-flex rounded-xl border border-[rgba(148,163,184,0.35)] bg-white px-4 py-2.5 text-xs font-semibold tracking-[0.12em] text-slate-900 uppercase transition-colors hover:border-[rgba(14,165,233,0.45)]"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-[rgba(148,163,184,0.25)] bg-white p-5 md:p-7" noValidate>
      <div className="grid gap-6">
        <p className="text-xs text-slate-500">Required fields are marked with *.</p>
        <div>
          <p className="technical-label">CONTACT INFORMATION</p>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="fullName">
                Full Name *
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                className={inputClass}
                placeholder="Full legal name"
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="company">
                Company *
              </label>
              <input
                id="company"
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
              <label className={labelClass} htmlFor="email">
                Email *
              </label>
              <input
                id="email"
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
              <label className={labelClass} htmlFor="phone">
                Phone *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className={inputClass}
                placeholder="(###) ###-####"
              />
            </div>
          </div>
        </div>

        <div className="soft-divider pt-5">
          <p className="technical-label">MOVE DETAILS</p>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="pickupLocation">
                Pickup Location *
              </label>
              <input
                id="pickupLocation"
                name="pickupLocation"
                type="text"
                required
                value={formData.pickupLocation}
                onChange={handleChange}
                className={inputClass}
                placeholder="Houston, TX"
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="deliveryLocation">
                Delivery Location *
              </label>
              <input
                id="deliveryLocation"
                name="deliveryLocation"
                type="text"
                required
                value={formData.deliveryLocation}
                onChange={handleChange}
                className={inputClass}
                placeholder="Dallas, TX"
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="requestedPickupDate">
                Requested Pickup Date *
              </label>
              <input
                id="requestedPickupDate"
                name="requestedPickupDate"
                type="date"
                required
                value={formData.requestedPickupDate}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="requestedDeliveryDate">
                Requested Delivery Date
              </label>
              <input
                id="requestedDeliveryDate"
                name="requestedDeliveryDate"
                type="date"
                value={formData.requestedDeliveryDate}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="assetType">
                Asset / Equipment Type *
              </label>
              <input
                id="assetType"
                name="assetType"
                type="text"
                required
                value={formData.assetType}
                onChange={handleChange}
                className={inputClass}
                placeholder="Skid steer, generator, lift, trailer, attachment..."
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="estimatedWeight">
                Estimated Weight
              </label>
              <input
                id="estimatedWeight"
                name="estimatedWeight"
                type="text"
                value={formData.estimatedWeight}
                onChange={handleChange}
                className={inputClass}
                placeholder="Approx. 8,000 lbs"
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="dimensions">
                Dimensions
              </label>
              <input
                id="dimensions"
                name="dimensions"
                type="text"
                value={formData.dimensions}
                onChange={handleChange}
                className={inputClass}
                placeholder="L x W x H"
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="urgencyLevel">
                Urgency Level *
              </label>
              <select
                id="urgencyLevel"
                name="urgencyLevel"
                required
                value={formData.urgencyLevel}
                onChange={handleChange}
                className={inputClass}
              >
                <option>Standard</option>
                <option>Time-Critical</option>
                <option>Emergency / Rapid Response</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className={labelClass} htmlFor="operationType">
                Operation Type *
              </label>
              <select
                id="operationType"
                name="operationType"
                required
                value={formData.operationType}
                onChange={handleChange}
                className={inputClass}
              >
                <option>Equipment Transport</option>
                <option>Rapid Response</option>
                <option>Dedicated Capacity</option>
                <option>Project Logistics</option>
                <option>Storage / Staging</option>
                <option>Consulting</option>
              </select>
            </div>
          </div>
        </div>

        <div className="soft-divider pt-5">
          <p className="technical-label">ADDITIONAL DETAILS</p>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <div className="md:col-span-2">
              <label className={labelClass} htmlFor="notes">
                Notes / Constraints
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={5}
                value={formData.notes}
                onChange={handleChange}
                className={inputClass}
                placeholder="Site access, loading requirements, delivery window, contact on site..."
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="preferredContactMethod">
                Preferred Contact Method *
              </label>
              <select
                id="preferredContactMethod"
                name="preferredContactMethod"
                required
                value={formData.preferredContactMethod}
                onChange={handleChange}
                className={inputClass}
              >
                <option>Email</option>
                <option>Phone</option>
                <option>Either</option>
              </select>
            </div>
          </div>
        </div>

        <div className="soft-divider pt-5">
          {submitError ? (
            <div
              className="mb-4 rounded-xl border border-[rgba(239,68,68,0.45)] bg-[rgba(127,29,29,0.2)] px-4 py-3 text-sm text-[var(--foreground)]"
              role="alert"
            >
              {submitError}
            </div>
          ) : null}
          <button
            type="submit"
            disabled={isSending}
            className="inline-flex rounded-xl bg-[var(--accent)] px-5 py-3 text-xs font-semibold tracking-[0.12em] text-white uppercase shadow-[0_12px_24px_rgba(47,116,189,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
          >
            {isSending ? "Sending..." : "Submit Request"}
          </button>
          <p className="mt-3 text-xs leading-relaxed text-slate-500">
            Submissions are sent securely to Bluport operations for review.
          </p>
        </div>
      </div>
    </form>
  );
}
