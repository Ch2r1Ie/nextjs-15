import React from "react";
import HeroSectionSimpleCentred from "@/components/layout/simple-centre";
import Team05Page from "@/components/layout/team-section";
import FeatureSectionSimple from "@/components/layout/feature-section";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-20 py-6 px-6 scroll-smooth">
      <HeroSectionSimpleCentred />
      <FeatureSectionSimple />
      <Team05Page />
    </div>
  );
}
