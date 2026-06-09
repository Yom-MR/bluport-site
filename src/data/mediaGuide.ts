export type MediaShotPriority = "high" | "medium" | "low";
export type MediaShotOrientation = "landscape" | "portrait" | "square" | "vertical";
export type MediaShotCategory =
  | "Hero Assets"
  | "Fleet Assets"
  | "Load Assets"
  | "Jobsite Assets"
  | "Team/Veteran Assets"
  | "Video Assets";

export interface MediaShot {
  title: string;
  category: MediaShotCategory;
  purpose: string;
  recommendedOrientation: MediaShotOrientation;
  priority: MediaShotPriority;
}

export const mediaGuide: MediaShot[] = [
  // ─── Hero Assets ───────────────────────────────────────────────────────────
  {
    title: "F350 + 40' power tilt trailer — wide cinematic",
    category: "Hero Assets",
    purpose:
      "Primary brand image. Sets the first impression on every site visit. Must feel operational and Bluport-specific, not generic.",
    recommendedOrientation: "landscape",
    priority: "high",
  },
  {
    title: "Truck/trailer at sunrise or blue hour",
    category: "Hero Assets",
    purpose:
      "Creates a cinematic, mission-ready atmosphere. Blue hour aligns with the site's dark color palette.",
    recommendedOrientation: "landscape",
    priority: "high",
  },
  {
    title: "Loaded equipment secured on trailer",
    category: "Hero Assets",
    purpose:
      "Proves the service is real and operational. Connects the brand promise to visible proof.",
    recommendedOrientation: "landscape",
    priority: "high",
  },
  {
    title: "Low-angle front quarter truck shot",
    category: "Hero Assets",
    purpose:
      "Dramatic, authority-conveying angle. Works well as a background overlay or section header.",
    recommendedOrientation: "landscape",
    priority: "medium",
  },

  // ─── Fleet Assets ──────────────────────────────────────────────────────────
  {
    title: "F350 profile shot — clean background",
    category: "Fleet Assets",
    purpose:
      "Fleet/capabilities page asset. Shows the actual operating vehicle without distraction.",
    recommendedOrientation: "landscape",
    priority: "high",
  },
  {
    title: "Trailer deck and tilt mechanism detail",
    category: "Fleet Assets",
    purpose:
      "Demonstrates specialized equipment knowledge. Relevant to equipment rental and construction audiences.",
    recommendedOrientation: "landscape",
    priority: "medium",
  },
  {
    title: "Securement details: straps, chains, binders",
    category: "Fleet Assets",
    purpose:
      "Builds trust with shippers and equipment managers who care about load integrity.",
    recommendedOrientation: "square",
    priority: "high",
  },
  {
    title: "Driver performing pre-trip inspection",
    category: "Fleet Assets",
    purpose:
      "Humanizes the brand. Creates trust with operations managers and fleet customers.",
    recommendedOrientation: "portrait",
    priority: "medium",
  },

  // ─── Load Assets ───────────────────────────────────────────────────────────
  {
    title: "Skid steer on trailer",
    category: "Load Assets",
    purpose: "Primary proof-of-service asset. Core customer equipment type for construction rental.",
    recommendedOrientation: "landscape",
    priority: "high",
  },
  {
    title: "Mini excavator loaded and secured",
    category: "Load Assets",
    purpose: "Demonstrates handling of tracked equipment with specific securement discipline.",
    recommendedOrientation: "landscape",
    priority: "high",
  },
  {
    title: "Boom lift or telehandler transport",
    category: "Load Assets",
    purpose:
      "High-value equipment move. Relevant to rental companies and data center construction.",
    recommendedOrientation: "landscape",
    priority: "medium",
  },
  {
    title: "Generator or light tower on trailer",
    category: "Load Assets",
    purpose: "Utility and emergency response audience. Shows versatility beyond tracked machines.",
    recommendedOrientation: "landscape",
    priority: "medium",
  },
  {
    title: "Attachments and small equipment load",
    category: "Load Assets",
    purpose:
      "Represents the bucket/attachment delivery use case common in equipment rental.",
    recommendedOrientation: "square",
    priority: "low",
  },
  {
    title: "EquipmentShare or rental yard pickup",
    category: "Load Assets",
    purpose: "Contextualizes the customer relationship and real-world pickup environment.",
    recommendedOrientation: "landscape",
    priority: "medium",
  },
  {
    title: "Delivery at active jobsite",
    category: "Load Assets",
    purpose:
      "Shows the end result: the equipment arriving where the crew needs it.",
    recommendedOrientation: "landscape",
    priority: "high",
  },
  {
    title: "Before/after loaded and unloaded sequence",
    category: "Load Assets",
    purpose: "Content marketing asset. Shows the full move from pickup to delivery.",
    recommendedOrientation: "landscape",
    priority: "low",
  },

  // ─── Jobsite Assets ────────────────────────────────────────────────────────
  {
    title: "Construction site entrance",
    category: "Jobsite Assets",
    purpose:
      "Establishes construction industry context. Signals familiarity with real jobsite environments.",
    recommendedOrientation: "landscape",
    priority: "medium",
  },
  {
    title: "Utility/infrastructure work environment",
    category: "Jobsite Assets",
    purpose:
      "Supports the utilities and infrastructure vertical. Distinctive visual from standard construction.",
    recommendedOrientation: "landscape",
    priority: "medium",
  },
  {
    title: "Data center construction site",
    category: "Jobsite Assets",
    purpose:
      "Positions Bluport credibly for the data center construction vertical.",
    recommendedOrientation: "landscape",
    priority: "low",
  },
  {
    title: "Industrial yard or manufacturing plant entrance",
    category: "Jobsite Assets",
    purpose:
      "Supports industrial and manufacturing vertical. Large-scale environment imagery.",
    recommendedOrientation: "landscape",
    priority: "low",
  },
  {
    title: "Equipment staged near active crew",
    category: "Jobsite Assets",
    purpose:
      "Best-case scenario image: the equipment is there, the crew is ready. The mission succeeded.",
    recommendedOrientation: "landscape",
    priority: "high",
  },

  // ─── Team/Veteran Assets ───────────────────────────────────────────────────
  {
    title: "Driver portrait — professional, outdoor context",
    category: "Team/Veteran Assets",
    purpose:
      "Face of the brand. Creates trust. Should feel like a real working professional, not staged.",
    recommendedOrientation: "portrait",
    priority: "high",
  },
  {
    title: "Dispatch/operations workspace",
    category: "Team/Veteran Assets",
    purpose:
      "Supports the mission-control narrative. Laptop, dispatch tools, operational context.",
    recommendedOrientation: "landscape",
    priority: "high",
  },
  {
    title: "Veteran-led team image",
    category: "Team/Veteran Assets",
    purpose:
      "Reinforces the veteran-owned brand identity without it feeling like a recruitment ad.",
    recommendedOrientation: "landscape",
    priority: "medium",
  },
  {
    title: "Safety or securement checklist in progress",
    category: "Team/Veteran Assets",
    purpose:
      "Operational discipline proof. Relevant to equipment rental and compliance-focused customers.",
    recommendedOrientation: "portrait",
    priority: "medium",
  },

  // ─── Video Assets ──────────────────────────────────────────────────────────
  {
    title: "Hero loop — truck/trailer in motion (8–12 sec)",
    category: "Video Assets",
    purpose:
      "Highest-impact site asset. Autoplay muted background loop behind hero headline. Must be seamless and cinematic.",
    recommendedOrientation: "landscape",
    priority: "high",
  },
  {
    title: "Tilt trailer loading/unloading sequence",
    category: "Video Assets",
    purpose:
      "Shows the mechanics of the service. Extremely effective for equipment rental audiences.",
    recommendedOrientation: "landscape",
    priority: "high",
  },
  {
    title: "Securement detail closeups",
    category: "Video Assets",
    purpose:
      "Short 5–8 sec clip of straps being set or chains tightened. Builds confidence in load discipline.",
    recommendedOrientation: "square",
    priority: "medium",
  },
  {
    title: "Drone or gimbal shot of equipment move",
    category: "Video Assets",
    purpose:
      "Cinematic aerial or stabilized ground shot. Creates a premium brand signal with minimal effort.",
    recommendedOrientation: "landscape",
    priority: "medium",
  },
];
