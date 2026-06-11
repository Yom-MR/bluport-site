import type { Metadata } from "next";
import { Mail, MapPin, Phone, UserRoundCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import EditorialSection from "@/components/ui/EditorialSection";
import { siteImages } from "@/data/siteImages";
import {
  BLUPORT_BASE_DISPLAY,
  BLUPORT_PHONE_DISPLAY,
  CONTACT_CHANNEL_LIST,
} from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Bluport Logistics operations for urgent equipment movement, dedicated capacity, project logistics support, and mission-critical field transport planning.",
  keywords: [
    "contact Bluport logistics",
    "Houston logistics contact",
    "request equipment transport quote",
    "mission-critical logistics intake",
  ],
};

const contactItems = CONTACT_CHANNEL_LIST.map((channel) => ({
  label: channel.email,
  detail: channel.purpose,
  icon: Mail,
}));

const prepDetails = [
  "Pickup and delivery locations",
  "Requested pickup/delivery dates",
  "Asset type",
  "Dimensions/weight",
  "Site access constraints",
  "Urgency level",
  "Preferred contact method",
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title="Talk to Bluport operations."
        description="Use the right channel for the request so Bluport can route it quickly."
        image={siteImages.contactHero}
        imagePosition="object-[center_52%]"
        variant="light"
      />

      <EditorialSection
        eyebrow="OPERATIONS CONTACT"
        title="Command channel details."
        description="Use these points of contact for urgent intake, scheduling discussions, and operating coordination."
        variant="light"
        layout="stack"
      >
        <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <article className="rounded-[1.8rem] border border-[rgba(148,163,184,0.28)] bg-white/90 p-6">
            <p className="technical-label text-sky-700">OPERATIONAL CONTACT</p>
            <div className="mt-4 space-y-3">
              <p className="flex items-center gap-2.5 text-lg font-semibold text-slate-900">
                <Phone size={17} aria-hidden className="text-sky-700" />
                {BLUPORT_PHONE_DISPLAY}
              </p>
              <p className="flex items-center gap-2.5 text-base text-slate-700">
                <MapPin size={17} aria-hidden className="text-sky-700" />
                {BLUPORT_BASE_DISPLAY}
              </p>
              <p className="text-sm leading-7 text-slate-600">Mission intake and move planning</p>
            </div>
          </article>

          <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">
            {contactItems.map((item) => (
              <article key={item.label} className="border-t border-[rgba(148,163,184,0.28)] pt-4">
                <p className="mt-1 flex items-center gap-2.5 text-base font-semibold text-slate-900">
                  <item.icon size={17} aria-hidden className="text-sky-700" />
                  <span>{item.label}</span>
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </EditorialSection>

      <EditorialSection
        eyebrow="CONTACT PREP"
        title="Before you contact us, helpful details include:"
        description="Providing these details upfront helps operations scope the move accurately and respond faster."
        variant="light"
        layout="stack"
      >
        <ul className="grid gap-3 rounded-[1.7rem] border border-[rgba(148,163,184,0.24)] bg-white/85 p-5 md:grid-cols-2 md:p-6">
          {prepDetails.map((item) => (
            <li key={item} className="flex items-start gap-2.5 border-t border-[rgba(148,163,184,0.2)] pt-3 text-sm leading-7 text-slate-700 md:text-base">
              <UserRoundCheck size={16} aria-hidden className="mt-1 shrink-0 text-sky-700" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </EditorialSection>

      <EditorialSection
        eyebrow="REQUEST CAPACITY"
        title="Need to submit move details?"
        description="Open the capacity request form and include asset, route, timing, and site constraints for faster intake."
        variant="light"
        layout="stack"
        className="border-b-0"
      >
        <Button href="/#request-capacity">Request Capacity</Button>
      </EditorialSection>
    </>
  );
}
