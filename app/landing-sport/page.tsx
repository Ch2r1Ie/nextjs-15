import React from "react";
import { FlipLink } from "@/components/layout/fliplink/fliplink";
import FloatingPhone from "@/components/animation/floating-phone";
import AnimateNavbar from "@/components/animation/animate-navbar";

const LandingSection = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-100 to-yellow-200">
      <div className="flex flex-col items-center justify-center gap-10 px-4 md:flex-row md:justify-around">
        <AnimateNavbar />
        <div className="flex flex-col gap-4">
          {["Twitter", "Google", "Facebook", "Instagram"].map((platform) => (
            <FlipLink key={platform} href="/">
              {platform}
            </FlipLink>
          ))}
        </div>
        <div className="w-full max-w-xs md:mt-0 md:max-w-md">
          <FloatingPhone />
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
