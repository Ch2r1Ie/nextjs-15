"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useEffect } from "react";
import Link from "next/link";

const PricingProPlanCard: React.FC<PricingButton> = ({ href, isToggle }) => {
  const monthlyPrice = 299;
  const yearlyPrice = 299 * 12;

  const base = useMotionValue(monthlyPrice);

  const animatedValue = useSpring(base, {
    stiffness: 100,
    damping: 20,
  });

  const rounded = useTransform(animatedValue, (val) => `$${Math.round(val)}`);

  useEffect(() => {
    base.set(isToggle ? yearlyPrice : monthlyPrice);
  }, [isToggle, base]);

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
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 p-8 hover:cursor-pointer md:w-60 xl:w-80"
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
          Pro Plan
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
          <motion.span>{rounded}</motion.span>
          <br />
          Month
        </motion.span>
      </div>
      <Link href={href}>
        <button className="absolute right-4 bottom-4 left-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black text-neutral-800 uppercase backdrop-blur transition-colors hover:cursor-pointer hover:bg-white/30 hover:text-white">
          Get it now
        </button>
      </Link>
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
          scale: 1.35,
        },
      }}
      transition={{
        duration: 1.5,
        ease: "backInOut",
      }}
    >
      <motion.path
        d="M160 90 L180 150 L160 190 L140 150 Z"
        fill="url(#gradient1)"
        variants={{
          hover: {
            d: "M160 90 L180 170 L120 200 L80 170 Z",
          },
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
      />
      <motion.circle
        cx="160"
        cy="192"
        r="20"
        stroke="rgb(0, 255, 255)"
        strokeWidth="3"
        initial={{ opacity: 0.5, scale: 1 }}
        variants={{
          hover: {
            opacity: [1, 0.2],
            scale: [1, 3],
          },
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      <motion.polygon
        points="160,30 180,120 160,180 140,120"
        fill="url(#gradient2)"
        variants={{
          hover: {
            scale: 1.3,
            rotate: 180,
            points: "160,50 200,140 160,190 120,140",
          },
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
      />

      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#ff0080", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#00ff80", stopOpacity: 1 }}
          />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#ff6347", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#3b9dff", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

export default PricingProPlanCard;
