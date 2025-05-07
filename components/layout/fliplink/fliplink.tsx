"use client";

import { motion } from "framer-motion";

export const RevealLinks: React.FC = () => {
  return (
    <section className="grid place-content-center gap-2 px-8 py-24 text-black"></section>
  );
};

interface FlipLinkProps {
  href: string;
  children: string;
}

const DURATION = 0.25;
const STAGGER = 0.025;

export const FlipLink: React.FC<FlipLinkProps> = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden text-[50px] font-black whitespace-nowrap uppercase sm:text-[120px] md:text-[150px] lg:text-[180px]"
      style={{ lineHeight: 0.75 }}
    >
      <div>
        {children.split("").map((char, index) => (
          <motion.span
            key={`top-${index}`}
            className="inline-block"
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index,
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((char, index) => (
          <motion.span
            key={`bottom-${index}`}
            className="inline-block"
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index,
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default RevealLinks;
