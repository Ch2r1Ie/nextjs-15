"use client";

import {
  DottedButton,
  LogInButton,
} from "@/components/layout/landing/hover-button";
import { SlideTabsExample } from "@/components/animation/slide-tab";
import { DivOrigami } from "@/components/animation/logo-origami";
import { AnimateHamBurger } from "./animate-hamburger";

const AnimateNavbar = () => {
  return (
    <div>
      <div className="fixed inset-x-0 top-2 left-1/2 z-10 hidden w-full -translate-x-1/2 md:flex">
        <div className="fixed inset-x-0 top-2 left-1/2 z-10 w-full -translate-x-1/2">
          <div className="mx-20 flex items-center justify-between gap-2 border-black">
            <span className="cursor-pointer">
              <DivOrigami />
            </span>
            <SlideTabsExample />
            <div className="flex justify-center gap-2">
              <DottedButton button="Start" href="#" />
              <LogInButton button="SignIn" href="#" />
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <AnimateHamBurger />
      </div>
    </div>
  );
};

export default AnimateNavbar;
