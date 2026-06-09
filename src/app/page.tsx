import CapabilityStatement from "@/components/sections/CapabilityStatement";
import FleetFeature from "@/components/sections/FleetFeature";
import Hero from "@/components/sections/Hero";
import IndustriesEditorial from "@/components/sections/IndustriesEditorial";
import OperatingStandard from "@/components/sections/OperatingStandard";
import RequestCapacity from "@/components/sections/RequestCapacity";
import ServicesEditorial from "@/components/sections/ServicesEditorial";

export default function Home() {
  return (
    <>
      <Hero />
      <CapabilityStatement />
      <FleetFeature />
      <ServicesEditorial />
      <IndustriesEditorial />
      <OperatingStandard />
      <RequestCapacity />
    </>
  );
}
