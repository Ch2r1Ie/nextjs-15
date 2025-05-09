"use client";

import React, { useRef, useState, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { LoginForm } from "@/components/layout/login/login-form";
import { DragCloseDrawer } from "./Animate-ShootUp";

interface NavBarTabsProps {
  isToggleLogIn: boolean;
}

const NavBarTabs: React.FC<NavBarTabsProps> = ({ isToggleLogIn }) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [isVisible, setIsVisible] = useState(isToggleLogIn);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="item-center mt-30 flex justify-center md:mt-50">
        <AnimatePresence initial={false}>
          {isVisible && (
            <motion.div
              key="login-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <LoginForm isReturnLink={false} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div>
        <DragCloseDrawer open={open} setOpen={setOpen}>
          <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
            <h2 className="text-4xl font-bold text-neutral-200">
              Easily Close the Drawer
            </h2>
            <p>
              To close this drawer, simply drag the handle at the top downwards.
              You only need to pull it about 100px, and it&apos;ll slide away.
            </p>
            <p>
              Alternatively, you can tap outside the drawer to close it as well.
              Enjoy a seamless experience while navigating through the content!
            </p>
          </div>
        </DragCloseDrawer>
      </div>

      <ul
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className="absolute top-10 left-1/2 mx-auto flex w-fit -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-black p-1 font-mono md:top-15"
      >
        <Tab setPosition={setPosition} className="hover:text-white">
          Ours
        </Tab>
        <Link href="/pricing" passHref>
          <Tab setPosition={setPosition} className="hover:text-white">
            Pricing
          </Tab>
        </Link>
        <Tab
          setPosition={setPosition}
          className="hover:text-white"
          onClick={() => setOpen(true)}
        >
          Docs
        </Tab>
        <Tab
          setPosition={setPosition}
          className={`rounded-full transition-colors duration-300 hover:cursor-pointer ${
            isVisible
              ? "bg-red-700 text-white hover:bg-red-800"
              : "bg-green-300 text-black hover:bg-emerald-300"
          }`}
        >
          <motion.button onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? "CLOSE" : "LOGIN"}
          </motion.button>
        </Tab>

        <Cursor position={position} />
      </ul>
    </div>
  );
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};

interface TabProps {
  children: ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  onClick?: () => void;
  className?: string;
}

const Tab: React.FC<TabProps> = ({
  children,
  setPosition,
  onClick,
  className,
}) => {
  const ref = useRef<HTMLLIElement | null>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        const el = ref.current;
        if (!el) return;

        const { width } = el.getBoundingClientRect();
        setPosition({
          left: el.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={onClick}
      className={`relative z-10 block cursor-pointer px-3 py-1.5 text-xs text-black uppercase md:px-5 md:py-3 md:text-base ${className ?? ""}`}
    >
      {children}
    </li>
  );
};

interface CursorProps {
  position: Position;
}

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.li
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

export default NavBarTabs;
