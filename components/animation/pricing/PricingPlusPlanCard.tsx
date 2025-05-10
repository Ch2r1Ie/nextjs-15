"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useEffect } from "react";
import Link from "next/link";

const PricingPlusPlanCard: React.FC<PricingButton> = ({ href, isToggle }) => {
  const monthlyPrice = 199;
  const yearlyPrice = 199 * 12;

  const base = useMotionValue(monthlyPrice);

  const animatedValue = useSpring(base, {
    stiffness: 100,
    damping: 20,
  });

  const rounded = useTransform(animatedValue, (val) => `$${Math.round(val)}`);

  useEffect(() => {
    base.set(isToggle ? yearlyPrice : monthlyPrice);
  }, [isToggle, base, yearlyPrice, monthlyPrice]);

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
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-violet-500 p-8 hover:cursor-pointer md:w-60 xl:w-80"
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
          Plus Plan
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
          scale: 1.25,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.path
        d="M160 90 Q 180 150, 140 190 Q 100 230, 160 270"
        fill="url(#gradient1)"
        variants={{
          hover: {
            d: "M160 90 Q 180 170, 120 200 Q 80 230, 160 290",
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
        stroke="#ADD8E6"
        strokeWidth="3"
        initial={{ opacity: 0.5, scale: 1 }}
        variants={{
          hover: {
            opacity: [1, 0.3],
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

      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#00d4ff", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#00ff7f", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

export default PricingPlusPlanCard;
