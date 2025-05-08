import React from "react";
import { motion } from "framer-motion";

export const RevealLinks: React.FC = () => {
  return (
    <section className="grid place-content-center gap-4 text-white">
      <FlipLink href="#">Pricing</FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

interface FlipLinkProps {
  href: string;
  children: React.ReactNode;
}

const FlipLink: React.FC<FlipLinkProps> = ({ children, href }) => {
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
            className="inline-block"
            key={i}
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
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
