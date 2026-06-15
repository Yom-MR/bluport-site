import {
  Boxes,
  CalendarClock,
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
    <div className="group flex w-[150px] flex-col items-center gap-3 text-center">
      <Icon
        size={40}
        strokeWidth={1.5}
        aria-hidden
        className="text-sky-600/85 transition-colors group-hover:text-sky-700"
      />
      <span className="text-[0.8rem] font-medium leading-tight text-slate-600 text-balance">
        {title}
      </span>
    </div>
  );
}

export default function LoadPlanDiagram() {
  return (
    <div className="mx-auto max-w-[820px]">
      {/* Details operations needs, laid out horizontally */}
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-10">
        {LOAD_PLAN_DETAILS.map((detail) => (
          <InputTile key={detail.title} {...detail} />
        ))}
      </div>
    </div>
  );
}
