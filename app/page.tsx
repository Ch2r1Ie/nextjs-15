import React from "react";
import HeroSectionSimpleCentred from "@/components/layout/landing/simple-centre";
import Team05Page from "@/components/layout/landing/team-section";
import FeatureSectionSimple from "@/components/layout/landing/feature-section";
import CardGroup from "@/components/layout/landing/stats";
import { Logos3 } from "@/components/layout/landing/logos";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden scroll-smooth px-6 py-6">
      <HeroSectionSimpleCentred />
      <FeatureSectionSimple />
      <CardGroup />
      <Logos3 />
      <Team05Page />
    </div>
  );
}
