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