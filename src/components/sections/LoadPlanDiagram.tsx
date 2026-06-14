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
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-[0_1px_3px_rgba(15,23,42,0.06)] transition-colors hover:border-sky-300">
      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
        <Icon size={16} aria-hidden />
      </span>
      <span className="text-[0.78rem] font-semibold leading-tight text-slate-800">{title}</span>
    </div>
  );
}

function LoadPlanHub({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(150deg,#1d4e82,#0f2c4d)] px-5 py-6 text-center text-white shadow-[0_24px_50px_rgba(15,23,42,0.3)] ring-4 ring-white/60 ${className}`}
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-sky-200">
        <ClipboardCheck size={22} aria-hidden />
      </span>
      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-sky-200">The Output</p>
      <p className="text-xl font-bold leading-none tracking-[-0.02em]">Load Plan</p>
    </div>
  );
}

export default function LoadPlanDiagram() {
  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-[#f6f9fd] p-5 shadow-[0_1px_3px_rgba(15,23,42,0.06)] md:p-7">
      <p className="technical-label mb-5 text-sky-700">INPUTS → PLAN</p>

      {/* Convergence diagram — md and up */}
      <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_92px_minmax(0,180px)] md:items-center">
        {/* Inputs */}
        <div className="relative z-10 flex flex-col gap-2.5">
          {LOAD_PLAN_DETAILS.map((detail) => (
            <InputRow key={detail.title} {...detail} />
          ))}
        </div>

        {/* Connectors converging into the hub */}
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

        {/* Output hub */}
        <LoadPlanHub className="justify-self-end" />
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
        <LoadPlanHub />
      </div>
    </div>
  );
}
