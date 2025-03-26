import React from "react";
import HeroSectionSimpleCentred from "@/components/layout/simple-centre";
import Team05Page from "@/components/layout/team-section";
import FeatureSectionSimple from "@/components/layout/feature-section";
import CardGroup from "@/components/layout/stats";
import { Logos3 } from "@/components/layout/logos";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-6 px-6 scroll-smooth">
      <HeroSectionSimpleCentred />
      <FeatureSectionSimple />
      <CardGroup />
      <Logos3 />
      <Team05Page />
    </div>
  );
}
