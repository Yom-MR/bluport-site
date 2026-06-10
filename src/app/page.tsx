import CinematicHero from "@/components/sections/CinematicHero";
import FleetCapability from "@/components/sections/FleetCapability";
import IndustryMosaic from "@/components/sections/IndustryMosaic";
import IntroStatement from "@/components/sections/IntroStatement";
import OperatingPromise from "@/components/sections/OperatingPromise";
import RequestCapacity from "@/components/sections/RequestCapacity";
import ServicesPanel from "@/components/sections/ServicesPanel";

export default function Home() {
  return (
    <>
      <CinematicHero />
      <IntroStatement />
      <FleetCapability />
      <ServicesPanel />
      <IndustryMosaic />
      <OperatingPromise />
      <RequestCapacity />
    </>
  );
}
