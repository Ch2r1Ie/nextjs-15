import React from "react";
import HeroSectionSimpleCentred from "@/components/layout/simple-centre";
import Team05Page from "@/components/layout/team-section";
import FeatureSectionSimple from "@/components/layout/feature-section";
import CardGroup from "@/components/layout/stats";
import { Logos3 } from "@/components/layout/logos";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center scroll-smooth px-6 py-6">
      <HeroSectionSimpleCentred />
      <FeatureSectionSimple />
      <CardGroup />
      <Logos3 />
      <Team05Page />
    </div>
  );
}
