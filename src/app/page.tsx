import CapabilitySplit from "@/components/sections/CapabilitySplit";
import FleetShowcase from "@/components/sections/FleetShowcase";
import IndustriesMosaic from "@/components/sections/IndustriesMosaic";
import MissionStrip from "@/components/sections/MissionStrip";
import OperatingPromise from "@/components/sections/OperatingPromise";
import PremiumHero from "@/components/sections/PremiumHero";
import RequestCapacity from "@/components/sections/RequestCapacity";
import ServicesEditorial from "@/components/sections/ServicesEditorial";

export default function Home() {
  return (
    <>
      <PremiumHero />
      <MissionStrip />
      <CapabilitySplit />
      <FleetShowcase />
      <ServicesEditorial />
      <IndustriesMosaic />
      <OperatingPromise />
      <RequestCapacity />
    </>
  );
}
