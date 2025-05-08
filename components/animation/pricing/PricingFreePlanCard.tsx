"use client";

import { motion } from "framer-motion";
import React from "react";

const PricingFreePlanCard: React.FC = () => {
  return <Card />;
};

const Card: React.FC = () => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
          height: "500px",
        },
      }}
      initial={{ height: "270px" }}
      className="relative w-80 shrink-0 overflow-hidden rounded-xl bg-teal-500 p-8 hover:cursor-pointer md:w-60 xl:w-80"
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
          Free Plan
        </span>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-2 block origin-top-left font-mono text-6xl leading-[1.2] font-black"
        >
          $0
          <br />
          Month
        </motion.span>
      </div>
      <button className="absolute right-4 bottom-4 left-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black text-neutral-800 uppercase backdrop-blur transition-colors hover:cursor-pointer hover:bg-white/30 hover:text-white">
        Get it now
      </button>
      <Background />
    </motion.div>
  );
};

const Background: React.FC = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          rotate: 45,
          scale: 1.3,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.polygon
        points="160,60 200,130 160,200 120,130"
        fill="#FFD700"
        variants={{
          hover: {
            scale: 1.2,
            rotate: 360,
          },
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
      />
      <motion.path
        d="M160 270c30-20 60-20 90 0s30 60 0 80-60 20-90 0-30-60 0-80z"
        fill="#ffffff33"
        variants={{
          hover: {
            d: "M160 270c40-40 70-20 90 10s10 70-20 90-70 10-90-10-20-60 20-90z",
          },
        }}
        transition={{
          duration: 1.25,
          ease: "easeInOut",
          delay: 0.2,
        }}
      />
    </motion.svg>
  );
};

export default PricingFreePlanCard;
