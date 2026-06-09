import CTA from "@/components/sections/CTA";
import FieldOperations from "@/components/sections/FieldOperations";
import FutureVision from "@/components/sections/FutureVision";
import Hero from "@/components/sections/Hero";
import IndustriesPreview from "@/components/sections/IndustriesPreview";
import OperatingPrinciples from "@/components/sections/OperatingPrinciples";
import RequestCapacity from "@/components/sections/RequestCapacity";
import ServicesPreview from "@/components/sections/ServicesPreview";
import TrustBar from "@/components/sections/TrustBar";
import WhyBluport from "@/components/sections/WhyBluport";
import SectionDivider from "@/components/ui/SectionDivider";
import { siteImages } from "@/data/siteImages";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider variant="signal" label="Proof Signals" sectionNumber="01" />
      <TrustBar />
      <SectionDivider variant="line" label="Field Grid" sectionNumber="02" />
      <FieldOperations />
      <SectionDivider variant="image-band" imageSrc={siteImages.fieldOperations} label="Capability Layer" sectionNumber="03" />
      <ServicesPreview />
      <SectionDivider variant="angle" label="Industry Context" sectionNumber="04" />
      <IndustriesPreview />
      <SectionDivider variant="line" label="Why Bluport" sectionNumber="05" />
      <WhyBluport />
      <OperatingPrinciples />
      <FutureVision />
      <SectionDivider variant="image-band" imageSrc={siteImages.utilitiesInfrastructure} label="Request Intake" sectionNumber="06" />
      <RequestCapacity />
      <SectionDivider variant="signal" label="Launch Next Move" sectionNumber="07" />
      <CTA />
    </>
  );
}
