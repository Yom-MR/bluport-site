import { siteImages } from "@/data/siteImages";

export type IndustryEntry = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  alt: string;
  statLabel: string;
  statValue: string;
  painPoints: string[];
  solutions: string[];
  workflow: Array<{ stage: string; description: string }>;
  benefits: string[];
};

export const INDUSTRY_ENTRIES: IndustryEntry[] = [
  {
    slug: "construction-equipment-rental",
    title: "Construction & Equipment Rental",
    summary:
      "Keep rental fleets, attachments, and machines aligned with jobsite timing and customer demand.",
    image: siteImages.industriesConstruction,
    alt: "Construction site with equipment rental assets",
    statLabel: "Primary friction",
    statValue: "Fleet continuity",
    painPoints: ["Late repositioning", "Missed returns", "Crews waiting for handoff"],
    solutions: ["Pre-call site access and delivery windows", "Securement matched to each machine", "Clear handoff with yard or field contacts"],
    workflow: [
      { stage: "Request", description: "Capture machines, pickup windows, and access notes." },
      { stage: "Plan", description: "Match truck, trailer, and securement to the load." },
      { stage: "Dispatch", description: "Coordinate departure around the delivery window." },
      { stage: "Deliver", description: "Stage the asset where the crew can use it immediately." },
      { stage: "Closeout", description: "Confirm handoff, POD, and any follow-up notes." },
    ],
    benefits: ["Fewer idle crews", "Higher rental readiness", "Schedule protection for the next move"],
  },
  {
    slug: "utilities-infrastructure",
    title: "Utilities & Infrastructure",
    summary:
      "Support outage-sensitive work where equipment delays can stall crews, restoration timelines, and infrastructure schedules.",
    image: siteImages.industriesUtilities,
    alt: "Utility substation and infrastructure work",
    statLabel: "Primary friction",
    statValue: "Restoration windows",
    painPoints: ["Compressed outage timelines", "Access constraints", "Changing field conditions"],
    solutions: ["Dispatch around response priorities", "Coordinate handoff with field contacts", "Close out with documentation for accountability"],
    workflow: [
      { stage: "Request", description: "Capture outage urgency, location, and asset details." },
      { stage: "Plan", description: "Align the move with crew availability and site access." },
      { stage: "Dispatch", description: "Communicate clearly as conditions change." },
      { stage: "Deliver", description: "Place the asset where the response team needs it." },
      { stage: "Closeout", description: "Confirm arrival and completion with the right contacts." },
    ],
    benefits: ["Faster response support", "Less waiting on critical assets", "More reliable handoffs"],
  },
  {
    slug: "industrial-manufacturing",
    title: "Industrial & Manufacturing",
    summary:
      "Move support assets around shutdowns, production windows, vendor coordination, and controlled-access sites.",
    image: siteImages.industriesIndustrial,
    alt: "Industrial manufacturing facility",
    statLabel: "Primary friction",
    statValue: "Production windows",
    painPoints: ["Tight shutdown schedules", "Vendor timing conflicts", "Controlled-access handoffs"],
    solutions: ["Sequence moves around plant timing", "Coordinate with shutdown or maintenance teams", "Track documentation through closeout"],
    workflow: [
      { stage: "Request", description: "Capture plant schedule, asset, and access constraints." },
      { stage: "Plan", description: "Map timing against maintenance and vendor work." },
      { stage: "Dispatch", description: "Move with disciplined communication and timing discipline." },
      { stage: "Deliver", description: "Stage the load for the right maintenance window." },
      { stage: "Closeout", description: "Confirm handoff and record completion details." },
    ],
    benefits: ["Less production disruption", "Better maintenance timing", "Cleaner plant coordination"],
  },
  {
    slug: "data-center-construction",
    title: "Data Center Construction",
    summary:
      "Support scheduled equipment movement for uptime-driven infrastructure builds, generators, site equipment, and critical-path work.",
    image: siteImages.industriesDataCenter,
    alt: "Data center construction site",
    statLabel: "Primary friction",
    statValue: "Critical path",
    painPoints: ["Trade sequencing pressure", "Generator and rack timing", "Tight delivery windows"],
    solutions: ["Sequence deliveries by trade readiness", "Keep communication clear across stakeholders", "Document every closeout step"],
    workflow: [
      { stage: "Request", description: "Capture the critical-path dependency and site access needs." },
      { stage: "Plan", description: "Match the load to the schedule and lift plan." },
      { stage: "Dispatch", description: "Operate around delivery windows and gate timing." },
      { stage: "Deliver", description: "Stage the asset without disrupting adjacent trades." },
      { stage: "Closeout", description: "Confirm delivery and handoff with project controls." },
    ],
    benefits: ["Protected project sequencing", "Less trade interference", "Higher delivery visibility"],
  },
  {
    slug: "aerospace-defense",
    title: "Aerospace & Defense",
    summary:
      "Support mission-oriented ground movement that requires clear communication and controlled execution standards.",
    image: siteImages.equipmentSecurement,
    alt: "Securement detail on heavy equipment",
    statLabel: "Primary friction",
    statValue: "Controlled handling",
    painPoints: ["Sensitive cargo handling", "Strict access requirements", "Low tolerance for handoff errors"],
    solutions: ["Securement discipline before departure", "Controlled communication with approved contacts", "Closeout records that support accountability"],
    workflow: [
      { stage: "Request", description: "Capture cargo sensitivity and access rules." },
      { stage: "Plan", description: "Plan around site controls and handoff requirements." },
      { stage: "Dispatch", description: "Maintain communication discipline through transit." },
      { stage: "Deliver", description: "Complete the handoff with the approved receiver." },
      { stage: "Closeout", description: "Record completion and documentation details." },
    ],
    benefits: ["More controlled cargo movement", "Fewer handoff errors", "Higher confidence under scrutiny"],
  },
  {
    slug: "government-emergency-response",
    title: "Government & Emergency Response",
    summary:
      "Provide move support for urgent public missions and project operations where schedule integrity matters.",
    image: siteImages.fieldOperations,
    alt: "Field operations team supporting a response mission",
    statLabel: "Primary friction",
    statValue: "Urgent deployment",
    painPoints: ["Escalating urgency", "Fragmented communication", "Changing deployment priorities"],
    solutions: ["Structured intake and dispatch clarity", "Fast updates to the right contacts", "Simple closeout and confirmation flow"],
    workflow: [
      { stage: "Request", description: "Capture the mission need and deployment target." },
      { stage: "Plan", description: "Match the asset and route to the response window." },
      { stage: "Dispatch", description: "Keep stakeholders informed throughout the move." },
      { stage: "Deliver", description: "Get the asset where it can support the response." },
      { stage: "Closeout", description: "Confirm completion and document the handoff." },
    ],
    benefits: ["Better mission support", "Faster deployment visibility", "Cleaner public-sector coordination"],
  },
];

export function getIndustryBySlug(slug: string) {
  return INDUSTRY_ENTRIES.find((industry) => industry.slug === slug);
}
export type Industry = {
  title: string;
  description: string;
  signal: string;
};

export const industries: Industry[] = [
  {
    title: "Construction & Equipment Rental",
    description: "Coordinated movement of machines, trailers, attachments, and rental assets between yards, jobsites, and customers.",
    signal: "Fleet continuity",
  },
  {
    title: "Utilities & Infrastructure",
    description: "Support for field crews, outage response, restoration timelines, and infrastructure work where delays compound quickly.",
    signal: "Response readiness",
  },
  {
    title: "Data Center Construction",
    description: "Support for equipment and site logistics tied to schedule-sensitive infrastructure buildouts.",
    signal: "Schedule protection",
  },
  {
    title: "Industrial & Manufacturing",
    description: "Inbound and outbound movement support where production schedules depend on timely delivery.",
    signal: "Downtime reduction",
  },
  {
    title: "Aerospace & Defense",
    description: "Disciplined execution support for sensitive cargo and mission-focused ground operations.",
    signal: "Controlled handling",
  },
  {
    title: "Government & Emergency Response",
    description: "Reliable logistics support for urgent response environments, public missions, and field deployment needs.",
    signal: "Mission support",
  },
];