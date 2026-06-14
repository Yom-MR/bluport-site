import {
  ArrowDown,
  Boxes,
  CalendarClock,
  ClipboardCheck,
  Gauge,
  MapPin,
  PhoneCall,
  Ruler,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react";

type Detail = {
  icon: LucideIcon;
  title: string;
};

const LOAD_PLAN_DETAILS: Detail[] = [
  { icon: MapPin, title: "Pickup & delivery locations" },
  { icon: CalendarClock, title: "Requested pickup/delivery dates" },
  { icon: Boxes, title: "Asset type" },
  { icon: Ruler, title: "Dimensions & weight" },
  { icon: TriangleAlert, title: "Site access constraints" },
  { icon: Gauge, title: "Urgency level" },
  { icon: PhoneCall, title: "Preferred contact method" },
];

function InputTile({ icon: Icon, title }: Detail) {
  return (
    <div className="group flex w-[120px] flex-col items-center gap-2 text-center">
      <Icon
        size={22}
        strokeWidth={1.75}
        aria-hidden
        className="text-sky-600/80 transition-colors group-hover:text-sky-700"
      />
      <span className="text-[0.72rem] font-medium leading-tight text-slate-600 text-balance">
        {title}
      </span>
    </div>
  );
}

function LoadPlanNode({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-3.5 text-center ${className}`}>
      <span className="relative inline-flex h-32 w-32 items-center justify-center">
        {/* soft outer glow marking this as the destination */}
        <span
          className="absolute -inset-3 rounded-[2.4rem] bg-[radial-gradient(circle,rgba(47,116,189,0.32),transparent_70%)] blur-lg"
          aria-hidden
        />
        {/* accent ring */}
        <span
          className="absolute inset-0 rounded-[2rem] ring-2 ring-sky-400/40"
          aria-hidden
        />
        <span className="relative inline-flex h-full w-full items-center justify-center rounded-[1.9rem] bg-[linear-gradient(150deg,#2f74bd_0%,#15324f_100%)] text-white shadow-[0_26px_55px_rgba(15,42,74,0.45)]">
          <span
            className="absolute inset-0 rounded-[1.9rem] bg-[radial-gradient(circle_at_32%_24%,rgba(255,255,255,0.3),transparent_60%)]"
            aria-hidden
          />
          <ClipboardCheck size={54} strokeWidth={1.75} aria-hidden className="relative" />
        </span>
      </span>
      <span className="technical-label text-sky-700">Load plan</span>
    </div>
  );
}

export default function LoadPlanDiagram() {
  return (
    <div className="mx-auto max-w-[760px]">
      {/* Details laid out horizontally, converging downward into the load plan */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-7">
        {LOAD_PLAN_DETAILS.map((detail) => (
          <InputTile key={detail.title} {...detail} />
        ))}
      </div>

      {/* connector flowing down to the destination */}
      <div className="my-6 flex justify-center" aria-hidden>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-200 bg-white text-sky-600 shadow-[0_4px_12px_rgba(15,23,42,0.12)]">
          <ArrowDown size={18} />
        </span>
      </div>

      {/* Load plan endpoint */}
      <div className="flex justify-center">
        <LoadPlanNode />
      </div>
    </div>
  );
}
