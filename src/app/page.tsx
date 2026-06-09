import HomeFleetFeature from "@/components/sections/HomeFleetFeature";
import HomeHero from "@/components/sections/HomeHero";
import HomeIndustries from "@/components/sections/HomeIndustries";
import HomeOperatingModel from "@/components/sections/HomeOperatingModel";
import HomeProof from "@/components/sections/HomeProof";
import HomeServicesStory from "@/components/sections/HomeServicesStory";
import RequestCapacity from "@/components/sections/RequestCapacity";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeProof />
      <HomeServicesStory />
      <HomeFleetFeature />
      <HomeIndustries />
      <HomeOperatingModel />
      <RequestCapacity />
    </>
  );
}
