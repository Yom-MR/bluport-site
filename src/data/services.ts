export type Service = {
  title: string;
  description: string;
  tag: string;
  useCase: string;
};

export const services: Service[] = [
  {
    title: "Equipment Transportation",
    description: "Hotshot and specialized equipment movement planned around jobsite timing, securement, and delivery constraints.",
    tag: "PRIORITY ROUTING",
    useCase: "Machines, attachments, rental fleets",
  },
  {
    title: "Rapid Response Logistics",
    description: "Fast mobilization for urgent equipment moves, outage support, recovery operations, and time-sensitive deployments.",
    tag: "RAPID DISPATCH",
    useCase: "Utilities, restoration, emergency crews",
  },
  {
    title: "Dedicated Capacity",
    description: "Committed truck and trailer capacity for customers that need predictable coverage instead of spot-market uncertainty.",
    tag: "RESERVED ASSETS",
    useCase: "Recurring jobs, rental fleet support",
  },
  {
    title: "Project Logistics",
    description: "Coordinated movement for multi-stop jobs, phased schedules, and hard delivery windows.",
    tag: "EXECUTION PLANNING",
    useCase: "Infrastructure, industrial work, data centers",
  },
  {
    title: "Storage & Staging",
    description: "Controlled equipment staging to reduce jobsite congestion, timing failures, and idle crews.",
    tag: "SITE READINESS",
    useCase: "Equipment yards, timed releases",
  },
  {
    title: "Logistics Consulting",
    description: "Operational planning support for customers improving equipment movement, communication standards, and dispatch workflows.",
    tag: "OPERATIONAL DESIGN",
    useCase: "Growing fleets, new lanes, complex projects",
  },
];