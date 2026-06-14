import { siteImages } from "@/data/siteImages";

export type IndustryEntry = {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  image: string;
  alt: string;
  statLabel: string;
  statValue: string;
  cargoTypes: string[];
  painPoints: Array<{ title: string; description: string }>;
  solutions: Array<{ title: string; description: string }>;
  workflow: Array<{ stage: string; description: string }>;
  benefits: Array<{ title: string; description: string }>;
};

export const INDUSTRY_ENTRIES: IndustryEntry[] = [
  {
    slug: "construction-equipment-rental",
    title: "Construction & Equipment Rental",
    summary:
      "Keep rental fleets, attachments, and machines aligned with jobsite timing and customer demand.",
    intro:
      "For rental houses and contractors, revenue lives and dies by utilization. A machine sitting in the wrong yard isn't just a logistics problem — it's a stalled crew, a missed rental day, and a customer who remembers the delay. Bluport runs the moves between your yard, your jobsites, and your customers so equipment shows up ready to work and comes back on schedule.",
    image: siteImages.industryDetailConstruction,
    alt: "Gooseneck trailer delivering an excavator to an active construction jobsite at golden hour",
    statLabel: "What we protect",
    statValue: "Fleet utilization",
    cargoTypes: [
      "Excavators & skid steers",
      "Compact track loaders",
      "Attachments & buckets",
      "Light towers & generators",
      "Material handlers",
      "Portable equipment & containers",
    ],
    painPoints: [
      {
        title: "Late repositioning kills rental days",
        description:
          "When a machine doesn't reach the next job on time, you lose billable days and the crew loses the morning.",
      },
      {
        title: "Missed returns clog the yard",
        description:
          "Equipment that lingers on a closed job ties up assets you've already promised to the next customer.",
      },
      {
        title: "Crews waiting on a handoff",
        description:
          "An unconfirmed delivery window means an idle crew standing around the staging area on the clock.",
      },
    ],
    solutions: [
      {
        title: "On-time repositioning between jobs",
        description:
          "We plan the move around the next job's start so the machine reaches the new site inside its window and billable days don't slip.",
      },
      {
        title: "Scheduled returns that clear the yard",
        description:
          "Pickups are coordinated the moment a job closes, so machines come back on schedule and stay available for the next customer.",
      },
      {
        title: "Confirmed delivery windows and handoffs",
        description:
          "We confirm the contact and the window at both ends before dispatch, so the crew isn't standing around waiting on an unconfirmed drop.",
      },
    ],
    workflow: [
      { stage: "Request", description: "Capture machines, pickup windows, and access notes." },
      { stage: "Plan", description: "Match truck, trailer, and securement to the load." },
      { stage: "Dispatch", description: "Coordinate departure around the delivery window." },
      { stage: "Deliver", description: "Stage the asset where the crew can use it immediately." },
      { stage: "Closeout", description: "Confirm handoff, POD, and any follow-up notes." },
    ],
    benefits: [
      { title: "More billable rental days", description: "Equipment reaches the next job inside its window, so you stop losing revenue to machines stuck in transit between sites." },
      { title: "Higher fleet availability", description: "On-time returns keep the yard clear and assets ready, so the machine you promised the next customer is actually there." },
      { title: "Fewer idle crew hours", description: "Confirmed windows mean labor starts working the moment the machine lands instead of burning hours on standby." },
    ],
  },
  {
    slug: "utilities-infrastructure",
    title: "Utilities & Infrastructure",
    summary:
      "Support outage-sensitive work where equipment delays can stall crews, restoration timelines, and infrastructure schedules.",
    intro:
      "In utility work, the clock is rarely on your side. Outage windows are fixed, restoration timelines are public, and a late transformer or missing piece of equipment can hold an entire crew hostage. Bluport moves the assets that keep restoration and infrastructure work on schedule — with the communication discipline these high-stakes windows demand.",
    image: siteImages.industryDetailUtilities,
    alt: "Gooseneck trailer delivering a transformer to a power substation with transmission towers at dusk",
    statLabel: "What we protect",
    statValue: "Restoration windows",
    cargoTypes: [
      "Transformers & switchgear",
      "Pad-mount & substation equipment",
      "Cable reels & conduit",
      "Generators & power units",
      "Poles & crossarms",
      "Crew support equipment",
    ],
    painPoints: [
      {
        title: "Compressed outage timelines",
        description:
          "Planned outages have hard start and end times — equipment that arrives late puts the whole window at risk.",
      },
      {
        title: "Restricted, remote access",
        description:
          "Substations and right-of-way sites have gates, escorts, and terrain that catch unprepared carriers off guard.",
      },
      {
        title: "Conditions change mid-event",
        description:
          "Storm response and restoration priorities shift fast, and logistics has to keep up without losing the thread.",
      },
    ],
    solutions: [
      {
        title: "Dispatch around response priorities",
        description:
          "Moves are sequenced to the restoration plan so critical assets land first, not whenever a truck is free.",
      },
      {
        title: "Coordinated field handoffs",
        description:
          "We line up the site contact, escort, and access details so the equipment isn't stuck at a locked gate.",
      },
      {
        title: "Documented accountability",
        description:
          "Clean closeout records support the reporting and audit trail utility work depends on.",
      },
    ],
    workflow: [
      { stage: "Request", description: "Capture outage urgency, location, and asset details." },
      { stage: "Plan", description: "Align the move with crew availability and site access." },
      { stage: "Dispatch", description: "Communicate clearly as conditions change." },
      { stage: "Deliver", description: "Place the asset where the response team needs it." },
      { stage: "Closeout", description: "Confirm arrival and completion with the right contacts." },
    ],
    benefits: [
      { title: "Faster response support", description: "Critical assets reach crews inside the restoration window, so the outage clears on the timeline your customers and regulators are watching." },
      { title: "Less waiting on equipment", description: "Moves sequenced to the response plan put the highest-priority gear on site first, instead of whenever a truck happens to free up." },
      { title: "More reliable handoffs", description: "Pre-confirmed access, escorts, and contacts mean crews aren't stuck waiting at a locked substation gate with the clock running." },
    ],
  },
  {
    slug: "industrial-manufacturing",
    title: "Industrial & Manufacturing",
    summary:
      "Move support assets around shutdowns, production windows, vendor coordination, and controlled-access sites.",
    intro:
      "Inside a plant, every hour of unplanned downtime is measured in lost production. Turnarounds and shutdowns are planned to the hour, vendors stack up at the dock, and a late delivery can cascade across an entire maintenance window. Bluport sequences support moves around your production reality so the right equipment is staged exactly when the window opens.",
    image: siteImages.industryDetailIndustrial,
    alt: "Gooseneck trailer staged at an industrial plant loading dock during a maintenance window",
    statLabel: "What we protect",
    statValue: "Production uptime",
    cargoTypes: [
      "Production machinery & components",
      "Motors, pumps & gearboxes",
      "Maintenance & turnaround equipment",
      "Tooling & fixtures",
      "Spare parts & assemblies",
      "Vendor-supplied equipment",
    ],
    painPoints: [
      {
        title: "Tight shutdown schedules",
        description:
          "Turnarounds run on a fixed clock — equipment that misses its slot can stall the entire maintenance sequence.",
      },
      {
        title: "Vendor timing conflicts",
        description:
          "Multiple vendors converging on one dock creates congestion that delays the deliveries that matter most.",
      },
      {
        title: "Controlled-access handoffs",
        description:
          "Plant security, safety orientation, and dock scheduling trip up carriers who show up without a plan.",
      },
    ],
    solutions: [
      {
        title: "Sequenced around plant timing",
        description:
          "Deliveries are timed to the maintenance window and dock schedule, not just route convenience.",
      },
      {
        title: "Coordinated with maintenance teams",
        description:
          "We work directly with shutdown and maintenance contacts so the load lands when the crew is ready for it.",
      },
      {
        title: "Documentation through closeout",
        description:
          "Every move is tracked and confirmed so plant records and accountability stay clean.",
      },
    ],
    workflow: [
      { stage: "Request", description: "Capture plant schedule, asset, and access constraints." },
      { stage: "Plan", description: "Map timing against maintenance and vendor work." },
      { stage: "Dispatch", description: "Move with disciplined communication and timing." },
      { stage: "Deliver", description: "Stage the load for the right maintenance window." },
      { stage: "Closeout", description: "Confirm handoff and record completion details." },
    ],
    benefits: [
      { title: "Less production disruption", description: "Equipment is staged before the maintenance window opens, not after it starts — protecting the uptime that every hour of downtime erodes." },
      { title: "Better maintenance timing", description: "Moves sync to the turnaround plan and dock schedule so maintenance crews work their sequence instead of waiting on a late delivery." },
      { title: "Cleaner plant coordination", description: "Security, safety orientation, and dock scheduling are handled before arrival, so trucks don't stack up or stall the receiving dock." },
    ],
  },
  {
    slug: "data-center-construction",
    title: "Data Center Construction",
    summary:
      "Support scheduled equipment movement for uptime-driven infrastructure builds, generators, site equipment, and critical-path work.",
    intro:
      "Data center builds run on a critical path where every trade is sequenced and the schedule is unforgiving. A generator, switchgear lineup, or piece of site equipment that arrives early clogs the laydown yard; arriving late stalls the trade waiting on it. Bluport delivers to the build sequence so critical-path assets land exactly when the project needs them.",
    image: siteImages.industryDetailDataCenter,
    alt: "Gooseneck trailer delivering a backup generator to a data center construction site at dusk",
    statLabel: "What we protect",
    statValue: "Critical-path schedule",
    cargoTypes: [
      "Backup generators",
      "Switchgear & electrical lineups",
      "CRAC & cooling units",
      "Cable tray & conduit",
      "Site & construction equipment",
      "Prefabricated assemblies",
    ],
    painPoints: [
      {
        title: "Trade sequencing pressure",
        description:
          "Dozens of trades share one site — a mistimed delivery interferes with the crews already working.",
      },
      {
        title: "Generator & gear timing",
        description:
          "Long-lead, high-value equipment has to hit narrow installation windows tied to the energization plan.",
      },
      {
        title: "Tight, scheduled delivery slots",
        description:
          "Gate timing and laydown space are managed to the hour, leaving no room for an unplanned arrival.",
      },
    ],
    solutions: [
      {
        title: "Delivered to trade readiness",
        description:
          "We sequence drops to the build schedule so assets arrive when the receiving trade is ready for them.",
      },
      {
        title: "Clear multi-stakeholder comms",
        description:
          "Project controls, the GC, and site superintendents stay aligned on timing through every move.",
      },
      {
        title: "Documented every step",
        description:
          "Closeout records support the tight reporting and accountability these projects run on.",
      },
    ],
    workflow: [
      { stage: "Request", description: "Capture the critical-path dependency and site access needs." },
      { stage: "Plan", description: "Match the load to the schedule and lift plan." },
      { stage: "Dispatch", description: "Operate around delivery windows and gate timing." },
      { stage: "Deliver", description: "Stage the asset without disrupting adjacent trades." },
      { stage: "Closeout", description: "Confirm delivery and handoff with project controls." },
    ],
    benefits: [
      { title: "Protected project sequencing", description: "Deliveries align to the build plan so the critical path holds — no early arrivals clogging the laydown yard, no late ones stalling a trade." },
      { title: "Less trade interference", description: "Timed, scheduled drops keep the site clear for the crews already working, instead of adding congestion to an already-packed pad." },
      { title: "Higher delivery visibility", description: "Project controls, the GC, and superintendents know exactly what's arriving and when, so no one is planning around a guess." },
    ],
  },
  {
    slug: "aerospace-defense",
    title: "Aerospace, Defense & Military Logistics",
    summary:
      "Support mission-oriented ground movement and military logistics that demand clear communication, secure handling, and controlled execution standards.",
    intro:
      "Aerospace, defense, and military logistics leave no margin for improvisation. Cargo is sensitive, sites are controlled, and a sloppy handoff isn't an inconvenience — it's a compliance and security problem. As a veteran-owned company, Bluport speaks the language of military logistics and operates with the briefing-and-closeout discipline this work requires — supporting base deliveries, defense contractors, and program logistics so every move is controlled, documented, and accountable.",
    image: siteImages.industryDetailAerospace,
    alt: "Tarped, chain-secured military and defense cargo staged outside a controlled-access aerospace facility",
    statLabel: "What we protect",
    statValue: "Controlled handling",
    cargoTypes: [
      "Military & base logistics support",
      "Tooling & ground support equipment",
      "Sensitive components & assemblies",
      "Test & calibration equipment",
      "Containerized & crated cargo",
      "Defense program & secure-site deliveries",
    ],
    painPoints: [
      {
        title: "Sensitive cargo handling",
        description:
          "High-value, delicate, or controlled items require securement and handling that leaves nothing to chance.",
      },
      {
        title: "Base & controlled-site access",
        description:
          "Installations and controlled facilities demand approved contacts, escorts, gate credentials, and protocol that carriers must respect exactly.",
      },
      {
        title: "Low tolerance for handoff errors",
        description:
          "A wrong receiver or undocumented handoff creates a compliance failure, not just a delay.",
      },
    ],
    solutions: [
      {
        title: "Military logistics fluency",
        description:
          "As a veteran-owned team, we understand base access, defense program protocol, and the chain-of-custody discipline military and DoD-adjacent moves demand.",
      },
      {
        title: "Securement discipline before departure",
        description:
          "Loads are inspected and secured to standard before the truck moves — verified, not assumed.",
      },
      {
        title: "Controlled communication",
        description:
          "We coordinate only with approved contacts and follow site protocol through the entire move.",
      },
      {
        title: "Records that support accountability",
        description:
          "Documented closeout gives your program the paper trail it needs to satisfy scrutiny.",
      },
    ],
    workflow: [
      { stage: "Request", description: "Capture cargo sensitivity and access rules." },
      { stage: "Plan", description: "Plan around site controls and handoff requirements." },
      { stage: "Dispatch", description: "Maintain communication discipline through transit." },
      { stage: "Deliver", description: "Complete the handoff with the approved receiver." },
      { stage: "Closeout", description: "Record completion and documentation details." },
    ],
    benefits: [
      { title: "More controlled movement", description: "Every step follows protocol from pre-departure securement to the final handoff, so sensitive cargo is handled the same disciplined way each time." },
      { title: "Fewer handoff errors", description: "Approved contacts, escorts, and documented custody keep the chain clean — no wrong receivers, no undocumented gaps to explain later." },
      { title: "Confidence under scrutiny", description: "Complete closeout records hold up to the compliance, security, and audit demands these programs are measured against." },
    ],
  },
  {
    slug: "government-emergency-response",
    title: "Government & Emergency Response",
    summary:
      "Provide move support for urgent public missions and project operations where schedule integrity matters.",
    intro:
      "When the mission is public and the clock is real, logistics can't be the weak link. Emergency response and government operations demand fast intake, clear priorities, and assets that reach the staging area when they're needed. Bluport brings the structured execution of a veteran-owned operator to urgent public missions — calm, communicative, and accountable under pressure.",
    image: siteImages.industryDetailGovernment,
    alt: "Gooseneck trailer staged with a mobile generator and response equipment amid emergency response vehicles at dusk",
    statLabel: "What we protect",
    statValue: "Mission timelines",
    cargoTypes: [
      "Mobile generators & power",
      "Response & staging equipment",
      "Temporary infrastructure",
      "Relief & support supplies",
      "Project & field equipment",
      "Deployable assets",
    ],
    painPoints: [
      {
        title: "Escalating urgency",
        description:
          "Response timelines compress fast, and the move has to keep pace without cutting corners.",
      },
      {
        title: "Fragmented communication",
        description:
          "Multiple agencies and contacts make it easy for updates to get lost when they matter most.",
      },
      {
        title: "Shifting deployment priorities",
        description:
          "Where an asset is needed can change mid-mission, and dispatch has to adapt cleanly.",
      },
    ],
    solutions: [
      {
        title: "Structured intake & dispatch",
        description:
          "Clear intake captures the mission need so dispatch acts on accurate priorities from the start.",
      },
      {
        title: "Fast updates to the right contacts",
        description:
          "We keep the relevant stakeholders informed so coordination doesn't break down under pressure.",
      },
      {
        title: "Simple confirmation flow",
        description:
          "A clean closeout confirms the asset reached the staging area and the handoff is complete.",
      },
    ],
    workflow: [
      { stage: "Request", description: "Capture the mission need and deployment target." },
      { stage: "Plan", description: "Match the asset and route to the response window." },
      { stage: "Dispatch", description: "Keep stakeholders informed throughout the move." },
      { stage: "Deliver", description: "Get the asset where it can support the response." },
      { stage: "Closeout", description: "Confirm completion and document the handoff." },
    ],
    benefits: [
      { title: "Better mission support", description: "Assets reach the staging area inside the response window, so field teams have what they need when the mission can't wait." },
      { title: "Faster deployment visibility", description: "Stakeholders always know where the move stands, which keeps decision-makers acting on current information instead of stale updates." },
      { title: "Cleaner coordination", description: "Structured intake and disciplined comms keep multi-agency moves from fragmenting, even as priorities shift mid-mission." },
    ],
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
