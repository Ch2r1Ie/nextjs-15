"use client";

import Link from "next/link";
import { useRef, useState, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LoginForm } from "@/components/layout/login/login-form";
import { DragCloseDrawer } from "./Animate-ShootUp";
import { AnimatedHamburgerButton } from "@/components/animation/home/Animate-HamburgerButton";
import { Codepen, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavBarTabsProps {
  isToggleLogIn: boolean;
  isAuthentication: boolean;
}

const NavBarTabs: React.FC<NavBarTabsProps> = ({
  isToggleLogIn,
  isAuthentication,
}) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [isVisible, setIsVisible] = useState(isToggleLogIn);
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [Hamburger, setHamburger] = useState(false);

  return (
    <div>
      <div className="item-center mt-50 flex justify-center">
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

      <nav>
        <ul
          onMouseLeave={() => {
            setPosition((pv) => ({
              ...pv,
              opacity: 0,
            }));
          }}
          className="absolute top-15 left-1/2 hidden w-fit -translate-x-1/2 -translate-y-1/2 transform p-1 font-mono md:flex"
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
            {isAuthentication ? (
              <Link href="/avatar">
                <motion.button className="hover:cursor-pointer">
                  {isVisible ? "CLOSE" : "LOGIN"}
                </motion.button>
              </Link>
            ) : (
              <motion.button
                onClick={() => setIsVisible(!isVisible)}
                className="hover:cursor-pointer"
              >
                {isVisible ? "CLOSE" : "LOGIN"}
              </motion.button>
            )}
          </Tab>
          <Cursor position={position} />
        </ul>
        <div className="fixed top-0 left-0 flex h-18 w-full items-center justify-between border-b-2 border-black bg-black bg-gradient-to-br hover:cursor-pointer md:hidden">
          <div className="ml-3 flex items-center">
            <AnimatedHamburgerButton
              onClick={() => {
                setMobileOpen((prev) => {
                  if (!prev) setIsVisible(false);
                  return !prev;
                });
                setHamburger((pv) => !pv);
              }}
              isToggle={mobileOpen}
            />
          </div>
          <div className="flex items-center">
            <div className="mr-2 flex items-center justify-center">
              {/* <motion.button
                onClick={() => {
                  setIsVisible((prev) => {
                    if (!prev) setMobileOpen(false);
                    return !prev;
                  });

                  setHamburger((pv) => !pv);
                }}
              > */}
              {/* <div
                  className={`flex w-fit items-center bg-green-500 px-3 py-2 font-medium text-white shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none ${
                    isVisible
                      ? "bg-red-600 text-white"
                      : "bg-green-500 text-black"
                  }`}
                >
                  {isVisible ? "CLOSE" : "LOGIN"}
                  <LogIn className="ml-1 h-4 w-4 rotate-90 text-white" />
                </div> */}
              <Button
                variant="ghost"
                className="py-5 font-mono text-2xl text-gray-300"
                onClick={() => {
                  setIsVisible((prev) => {
                    if (!prev) setMobileOpen(false);
                    return !prev;
                  });

                  setHamburger((pv) => !pv);
                }}
              >
                {isVisible ? "CLOSE" : "LOGIN"}
              </Button>
              {/* </motion.button> */}
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="absolute top-16 right-0 left-0 z-[9999] flex h-[calc(100vh-4rem)] flex-col justify-end overflow-hidden px-2 py-8 font-mono shadow-md md:hidden">
            <div className="pb-6">
              <Tab setPosition={setPosition} className="text-[64px] text-black">
                Ours
              </Tab>
              <Link href="/pricing" passHref>
                <Tab
                  setPosition={setPosition}
                  className="text-[64px] text-black"
                >
                  Pricing
                </Tab>
              </Link>
              <Tab
                setPosition={setPosition}
                className="text-[64px] text-black"
                onClick={() => {
                  setOpen(true);
                  setMobileOpen(false);
                  setHamburger(false);
                }}
              >
                Docs
              </Tab>
            </div>
          </div>
        )}
      </nav>
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
