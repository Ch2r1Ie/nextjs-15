import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

interface FlipLinkProps {
  href: string;
  children: React.ReactNode;
}

export const RevealLinks: React.FC = () => {
  const pastelColors = [
    "text-pink-300",
    "text-purple-300",
    "text-blue-300",
    "text-green-300",
    "text-yellow-300",
    "text-rose-300",
    "text-indigo-300",
  ];

  return (
    <section className="grid place-content-center font-mono">
      <FlipLink href="#" pastelColors={pastelColors}>
        Pricing
      </FlipLink>
    </section>
  );
};

interface FlipLinkProps {
  href: string;
  children: React.ReactNode;
  pastelColors: string[];
}

const FlipLink: React.FC<FlipLinkProps> = ({
  children,
  href,
  pastelColors,
}) => {
  const text = typeof children === "string" ? children : "";

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden text-6xl font-black uppercase lg:text-7xl xl:text-8xl 2xl:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {text.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className={`inline-block ${pastelColors[i % pastelColors.length]}`}
            key={`top-${i}`}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {text.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className={`inline-block ${pastelColors[i % pastelColors.length]}`}
            key={`bottom-${i}`}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
