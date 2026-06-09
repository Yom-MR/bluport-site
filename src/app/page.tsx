import CTA from "@/components/sections/CTA";
import FieldOperations from "@/components/sections/FieldOperations";
import FutureVision from "@/components/sections/FutureVision";
import Hero from "@/components/sections/Hero";
import IndustriesPreview from "@/components/sections/IndustriesPreview";
import MediaReadiness from "@/components/sections/MediaReadiness";
import OperatingPrinciples from "@/components/sections/OperatingPrinciples";
import RequestCapacity from "@/components/sections/RequestCapacity";
import ServicesPreview from "@/components/sections/ServicesPreview";
import TrustBar from "@/components/sections/TrustBar";
import WhyBluport from "@/components/sections/WhyBluport";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FieldOperations />
      <ServicesPreview />
      <IndustriesPreview />
      <WhyBluport />
      <OperatingPrinciples />
      <FutureVision />
      <MediaReadiness />
      <RequestCapacity />
      <CTA />
    </>
  );
}
