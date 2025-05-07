"use client";

import React, { useState } from "react";
import { MotionConfig, motion, Variants } from "framer-motion";
import { BrainCircuit, LogIn, ArrowRightFromLine } from "lucide-react";

export const AnimateHamBurger: React.FC = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div>
      <div className="relative inset-x-0 z-40 min-w-screen border-b-4 border-black bg-gradient-to-r from-red-300 via-red-400 to-red-500">
        <div className="ml-4 flex items-center justify-between">
          <div className="flex items-center">
            <BrainCircuit className="h-10 w-10" />
            <span className="text-5xl font-extrabold">Pr</span>
          </div>
          <div className="flex items-center">
            <button className="translate-x-[-4px] translate-y-[-4px] border-2 border-black bg-white px-2 py-2 font-semibold text-black uppercase shadow-[4px_4px_0px_black] transition-all duration-300">
              <div className="flex">
                <span>SignIn</span>
                <LogIn className="px-1" />
              </div>
            </button>
            <AnimatedHamburgerButton
              isToggle={isToggle}
              setIsToggle={setIsToggle}
            />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={isToggle ? { x: 0 } : { x: "-100%" }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="absolute inset-x-0 top-19 left-1/2 z-40 flex min-w-screen -translate-x-1/2 flex-col border-b-4 border-black bg-white text-4xl font-semibold"
      >
        <ul>
          <ul className="ml-12 flex w-full max-w-xs items-center justify-between">
            <li>Home</li>
            <ArrowRightFromLine className="h-10 w-10" />
          </ul>
          <ul className="ml-12 flex w-full max-w-xs items-center justify-between">
            <li>Pricing</li>
            <ArrowRightFromLine className="h-10 w-10" />
          </ul>
          <ul className="ml-12 flex w-full max-w-xs items-center justify-between">
            <li>Features</li>
            <ArrowRightFromLine className="h-10 w-10" />
          </ul>
          <ul className="ml-12 flex w-full max-w-xs items-center justify-between">
            <li>Docs</li>
            <ArrowRightFromLine className="h-10 w-10" />
          </ul>
        </ul>
      </motion.div>
    </div>
  );
};

interface ButtonProps {
  isToggle: boolean;
  setIsToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const AnimatedHamburgerButton: React.FC<ButtonProps> = ({
  isToggle,
  setIsToggle,
}) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={isToggle ? "open" : "closed"}
        onClick={() => setIsToggle((prev) => !prev)}
        className="relative h-18 w-18 rounded-full bg-white/0 transition-colors hover:bg-white/20"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-10 bg-white"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-10 bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-5 bg-white"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS: {
  top: Variants;
  middle: Variants;
  bottom: Variants;
} = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};
