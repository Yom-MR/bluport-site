import CapabilitySplit from "@/components/sections/CapabilitySplit";
import CustomerConfidence from "@/components/sections/CustomerConfidence";
import MissionStrip from "@/components/sections/MissionStrip";
import PremiumHero from "@/components/sections/PremiumHero";
import RequestCapacity from "@/components/sections/RequestCapacity";
import SavingsImpact from "@/components/sections/SavingsImpact";
import StatsBand from "@/components/sections/StatsBand";

export default function Home() {
  return (
    <>
      <PremiumHero />
      <StatsBand />
      <MissionStrip />
      <SavingsImpact />
      <CapabilitySplit />
      <CustomerConfidence />
      <RequestCapacity />
    </>
  );
}
