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

export default function LoadPlanDiagram() {
  return (
    <div className="mx-auto max-w-[760px]">
      {/* Details operations needs, laid out horizontally */}
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-8">
        {LOAD_PLAN_DETAILS.map((detail) => (
          <InputTile key={detail.title} {...detail} />
        ))}
      </div>
    </div>
  );
}
