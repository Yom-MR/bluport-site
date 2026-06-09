"use client";

import { useState } from "react";

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
  "w-full rounded-xl border border-[var(--border)] bg-[rgba(2,8,23,0.62)] px-3 py-2.5 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-[rgba(148,163,184,0.55)] focus:border-[rgba(34,211,238,0.65)] focus:ring-2 focus:ring-[rgba(14,165,233,0.2)]";

export default function RequestCapacityForm() {
  const [formData, setFormData] = useState<RequestCapacityFormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    setFormData(initialFormData);
  };

  if (isSubmitted) {
    return (
      <div className="glass-card rounded-2xl p-6 md:p-7" role="status" aria-live="polite">
        <p className="technical-label text-[var(--cyan)]">INTAKE STATUS</p>
        <h3 className="mt-3 text-xl font-semibold text-[var(--foreground)]">
          Mission request received. Bluport operations will review the details and follow up.
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
          This form is currently configured as a front-end intake prototype. Connect to HubSpot,
          Zoho, Resend, or a custom API before production launch.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-6 inline-flex rounded-xl border border-[var(--border)] bg-[rgba(6,26,51,0.5)] px-4 py-2.5 text-xs font-semibold tracking-[0.12em] text-[var(--foreground)] uppercase transition-colors hover:border-[rgba(34,211,238,0.45)]"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-5 md:p-7" noValidate>
      <div className="grid gap-6">
        <p className="text-xs text-[rgba(148,163,184,0.78)]">Required fields are marked with *.</p>
        <div>
          <p className="technical-label text-[var(--cyan)]">CONTACT INFORMATION</p>
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
          <p className="technical-label text-[var(--cyan)]">MOVE DETAILS</p>
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
          <p className="technical-label text-[var(--cyan)]">ADDITIONAL DETAILS</p>
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
          <button
            type="submit"
            className="inline-flex rounded-xl bg-[var(--blue)] px-5 py-3 text-xs font-semibold tracking-[0.12em] text-[var(--foreground)] uppercase shadow-[0_12px_24px_rgba(14,165,233,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[var(--cyan)]"
          >
            Submit Request
          </button>
          <p className="mt-3 text-xs leading-relaxed text-[rgba(148,163,184,0.72)]">
            This form is currently configured as a front-end intake prototype. Connect to HubSpot,
            Zoho, Resend, or a custom API before production launch.
          </p>
        </div>
      </div>
    </form>
  );
}