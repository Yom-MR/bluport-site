import {
  CalendarClock,
  Gauge,
  MapPin,
  PhoneCall,
  Ruler,
  TriangleAlert,
  Boxes,
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

const RADIUS = 40; // percent of the square
const nodes = LOAD_PLAN_DETAILS.map((detail, index) => {
  const angle = (-90 + (360 / LOAD_PLAN_DETAILS.length) * index) * (Math.PI / 180);
  return {
    ...detail,
    x: 50 + RADIUS * Math.cos(angle),
    y: 50 + RADIUS * Math.sin(angle),
  };
});

function CenterHub() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[linear-gradient(150deg,#1d4e82,#0f2c4d)] text-center text-white shadow-[0_20px_50px_rgba(15,23,42,0.28)] ring-8 ring-white/70">
      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-sky-200">
        It forms the
      </p>
      <p className="mt-1 text-lg font-bold leading-none tracking-[-0.02em] md:text-xl">
        Load Plan
      </p>
    </div>
  );
}

export default function LoadPlanDiagram() {
  return (
    <div className="w-full">
      {/* Circular diagram — md and up */}
      <div className="relative mx-auto hidden aspect-square w-full max-w-[520px] md:block">
        {/* connector lines */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          {nodes.map((node) => (
            <line
              key={node.title}
              x1={50}
              y1={50}
              x2={node.x}
              y2={node.y}
              stroke="rgba(47,116,189,0.35)"
              strokeWidth={0.4}
              strokeDasharray="1.4 1.4"
            />
          ))}
        </svg>

        {/* center hub */}
        <div className="absolute left-1/2 top-1/2 h-[31%] w-[31%] -translate-x-1/2 -translate-y-1/2">
          <CenterHub />
        </div>

        {/* detail nodes */}
        {nodes.map((node) => {
          const Icon = node.icon;
          return (
            <div
              key={node.title}
              className="absolute flex w-[128px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-3 text-center shadow-[0_8px_24px_rgba(15,23,42,0.1)]"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <Icon size={18} aria-hidden />
              </span>
              <span className="text-[0.72rem] font-semibold leading-tight text-slate-800">
                {node.title}
              </span>
            </div>
          );
        })}
      </div>

      {/* Stacked fallback — small screens */}
      <div className="md:hidden">
        <div className="mx-auto mb-5 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-[linear-gradient(150deg,#1d4e82,#0f2c4d)] text-center text-white shadow-[0_16px_40px_rgba(15,23,42,0.24)]">
          <p className="text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-sky-200">
            It forms the
          </p>
          <p className="mt-1 text-base font-bold leading-none">Load Plan</p>
        </div>
        <ul className="grid grid-cols-2 gap-2.5">
          {LOAD_PLAN_DETAILS.map((detail) => {
            const Icon = detail.icon;
            return (
              <li
                key={detail.title}
                className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3 py-3 shadow-[0_1px_3px_rgba(15,23,42,0.06)]"
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
                  <Icon size={16} aria-hidden />
                </span>
                <span className="text-[0.74rem] font-semibold leading-tight text-slate-800">
                  {detail.title}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
