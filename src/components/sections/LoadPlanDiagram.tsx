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
    <div className="flex w-[148px] flex-col items-center gap-2.5 rounded-2xl border border-slate-200 bg-white/70 px-4 py-5 text-center transition-colors hover:border-sky-300 hover:bg-white">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
        <Icon size={20} aria-hidden />
      </span>
      <span className="text-[0.78rem] font-semibold leading-tight text-slate-800 text-balance">
        {title}
      </span>
    </div>
  );
}

function LoadPlanNode({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-3 text-center ${className}`}>
      <span className="relative inline-flex h-24 w-24 items-center justify-center">
        {/* soft outer glow marking this as the destination */}
        <span
          className="absolute -inset-2 rounded-[2rem] bg-[radial-gradient(circle,rgba(47,116,189,0.28),transparent_70%)] blur-md"
          aria-hidden
        />
        {/* rotating accent ring */}
        <span
          className="absolute inset-0 rounded-[1.6rem] ring-2 ring-sky-400/40"
          aria-hidden
        />
        <span className="relative inline-flex h-full w-full items-center justify-center rounded-[1.5rem] bg-[linear-gradient(150deg,#2f74bd_0%,#15324f_100%)] text-white shadow-[0_22px_45px_rgba(15,42,74,0.4)]">
          <span
            className="absolute inset-0 rounded-[1.5rem] bg-[radial-gradient(circle_at_32%_24%,rgba(255,255,255,0.3),transparent_60%)]"
            aria-hidden
          />
          <ClipboardCheck size={40} strokeWidth={1.75} aria-hidden className="relative" />
        </span>
      </span>
      <span className="technical-label text-[0.62rem] text-slate-500">Load plan</span>
    </div>
  );
}

export default function LoadPlanDiagram() {
  return (
    <div className="mx-auto max-w-[760px]">
      {/* Details laid out horizontally, converging downward into the load plan */}
      <div className="flex flex-wrap justify-center gap-3">
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
