"use client";

import { motion } from "framer-motion";
import React from "react";

const PricingEnterprisePlanCard: React.FC = () => {
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
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-gray-800 p-8 md:w-60 xl:w-80"
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white/20 px-3 py-0.5 text-sm font-light text-white">
          Enterprise Plan
        </span>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{ hover: { scale: 1 } }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="my-2 block origin-top-left font-mono text-5xl leading-[1.2] font-extrabold"
        >
          $499
          <br />
          Month
        </motion.span>
      </div>
      <button className="absolute right-4 bottom-4 left-4 z-20 rounded border-2 border-white bg-white/10 py-2 text-center font-mono font-bold text-white uppercase backdrop-blur transition-colors hover:bg-white/20 hover:text-white">
        Subscribe Now
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
        hover: { rotate: 15, scale: 1.1, skewX: 5 },
      }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.polygon
        points="160,100 200,130 200,170 160,200 120,170 120,130"
        fill="url(#gradient1)"
        variants={{
          hover: {
            points: "160,90 210,125 210,175 160,210 110,175 110,125",
          },
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      <motion.circle
        cx="160"
        cy="192"
        r="15"
        stroke="#00AEEF"
        strokeWidth="2"
        initial={{ opacity: 0.3, scale: 1 }}
        variants={{
          hover: {
            opacity: [0.6, 0.1],
            scale: [1, 2],
          },
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      <motion.polygon
        points="160,60 190,130 130,130"
        fill="url(#gradient2)"
        variants={{
          hover: {
            rotate: 180,
            scale: 1.2,
            points: "160,70 200,135 120,135",
          },
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#0061ff", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#60efff", stopOpacity: 1 }}
          />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#0078D4", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#00C8FF", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

export default PricingEnterprisePlanCard;
