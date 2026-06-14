import {
  ArrowDown,
  ArrowRight,
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

function InputRow({ icon: Icon, title }: Detail) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/70 px-3.5 py-2.5 transition-colors hover:border-sky-300 hover:bg-white">
      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
        <Icon size={16} aria-hidden />
      </span>
      <span className="text-[0.78rem] font-semibold leading-tight text-slate-800">{title}</span>
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
    <div className="mx-auto max-w-[680px]">
      {/* Convergence diagram — md and up */}
      <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_84px_auto] md:items-center">
        {/* Inputs */}
        <div className="relative z-10 flex flex-col gap-2.5">
          {LOAD_PLAN_DETAILS.map((detail) => (
            <InputRow key={detail.title} {...detail} />
          ))}
        </div>

        {/* Connectors converging toward the load plan */}
        <div className="relative self-stretch">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            {LOAD_PLAN_DETAILS.map((detail, index) => {
              const y = ((index + 0.5) / LOAD_PLAN_DETAILS.length) * 100;
              return (
                <path
                  key={detail.title}
                  d={`M0 ${y} C 45 ${y}, 55 50, 100 50`}
                  fill="none"
                  stroke="rgba(47,116,189,0.4)"
                  strokeWidth={0.7}
                  strokeDasharray="1.6 1.6"
                  vectorEffect="non-scaling-stroke"
                />
              );
            })}
          </svg>
          <span
            className="absolute right-0 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-sky-200 bg-white text-sky-600 shadow-[0_4px_12px_rgba(15,23,42,0.12)]"
            aria-hidden
          >
            <ArrowRight size={15} />
          </span>
        </div>

        {/* Load plan endpoint */}
        <LoadPlanNode className="justify-self-end" />
      </div>

      {/* Stacked fallback — small screens */}
      <div className="md:hidden">
        <div className="grid grid-cols-1 gap-2.5">
          {LOAD_PLAN_DETAILS.map((detail) => (
            <InputRow key={detail.title} {...detail} />
          ))}
        </div>
        <div className="my-4 flex justify-center" aria-hidden>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-sky-200 bg-white text-sky-600 shadow-[0_4px_12px_rgba(15,23,42,0.12)]">
            <ArrowDown size={16} />
          </span>
        </div>
        <div className="flex justify-center">
          <LoadPlanNode />
        </div>
      </div>
    </div>
  );
}
