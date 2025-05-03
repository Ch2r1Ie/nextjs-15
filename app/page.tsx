import React from "react";
import HeroSectionSimpleCentred from "@/components/layout/landing/simple-centre";
import Team05Page from "@/components/layout/landing/team-section";
import FeatureSectionSimple from "@/components/layout/landing/feature-section";
import CardGroup from "@/components/layout/landing/stats";
import { Logos3 } from "@/components/layout/landing/logos";
import { MenubarDemo } from "@/components/layout/home/menubar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden scroll-smooth px-6 py-6">
      <div className="mx-auto mt-5 flex w-11/12 items-center justify-between rounded-full border bg-gradient-to-r from-blue-600 via-purple-700 to-black px-5 py-2 shadow-lg transition-shadow duration-100 hover:shadow-xl sm:mx-2">
        <span className="flex-grow px-2 text-4xl font-bold text-white hover:cursor-pointer">
          .AI
        </span>
        <MenubarDemo />
      </div>
      <div>
        <HeroSectionSimpleCentred />
        <FeatureSectionSimple />
        <CardGroup />
        <Logos3 />
        <Team05Page />
      </div>
    </div>
  );
}
