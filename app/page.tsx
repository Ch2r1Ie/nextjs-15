import React from "react";
import HeroSectionSimpleCentred from "@/components/layout/landing/simple-centre";
import Team05Page from "@/components/layout/landing/team-section";
import FeatureSectionSimple from "@/components/layout/landing/feature-section";
import CardGroup from "@/components/layout/landing/stats";
import { Logos3 } from "@/components/layout/landing/logos";
import { MenubarDemo } from "@/components/layout/landing/menubar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden scroll-smooth px-6 py-6">
      <div className="fixed inset-x-0 top-2 left-1/2 z-50 mx-auto mt-2 flex w-11/12 -translate-x-1/2 items-center justify-between rounded-2xl bg-gradient-to-b from-gray-800 via-gray-900 to-black px-5 py-2 text-white shadow-2xl transition-shadow duration-100 hover:bg-gray-800 hover:bg-gradient-to-r hover:text-green-500 sm:mx-2 xl:mt-5">
        <span className="flex-grow px-2 text-xl font-bold hover:cursor-pointer xl:text-3xl">
          .AI
        </span>
        <MenubarDemo />
      </div>
      <div className="mx-auto mt-30 w-11/12 items-center justify-center sm:mt-30 md:mt-30 xl:mt-15">
        <HeroSectionSimpleCentred />
        <FeatureSectionSimple />
        <CardGroup />
        <Logos3 />
        <Team05Page />
      </div>
    </div>
  );
}
