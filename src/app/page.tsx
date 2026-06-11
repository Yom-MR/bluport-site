import CapabilitySplit from "@/components/sections/CapabilitySplit";
import CustomerConfidence from "@/components/sections/CustomerConfidence";
import ExecutionTimeline from "@/components/sections/ExecutionTimeline";
import FleetShowcase from "@/components/sections/FleetShowcase";
import IndustriesMosaic from "@/components/sections/IndustriesMosaic";
import MissionStrip from "@/components/sections/MissionStrip";
import PremiumHero from "@/components/sections/PremiumHero";
import RequestCapacity from "@/components/sections/RequestCapacity";
import ServicesEditorial from "@/components/sections/ServicesEditorial";
import StatsBand from "@/components/sections/StatsBand";

export default function Home() {
  return (
    <>
      <PremiumHero />
      <StatsBand />
      <MissionStrip />
      <CapabilitySplit />
      <ExecutionTimeline />
      <FleetShowcase />
      <ServicesEditorial />
      <IndustriesMosaic />
      <CustomerConfidence />
      <RequestCapacity />
    </>
  );
}
