"use client";

import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link";
import MenuContent from "./menu-content";

export function MenubarDemo() {
  return (
    <div className="mx-auto flex w-full max-w-2xl items-center justify-center border-b p-2">
      <Menubar>
        <Link href="/">
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer px-1 sm:px-4 sm:text-xl">
              Home
            </MenubarTrigger>
          </MenubarMenu>
        </Link>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer px-1 sm:px-4 sm:text-xl">
            Product
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer px-1 sm:px-4 sm:text-xl">
            Features
          </MenubarTrigger>
          <MenuContent />
        </MenubarMenu>
        <MenubarMenu>
          <Link href="/pricing">
            <MenubarTrigger className="cursor-pointer px-1 sm:px-4 sm:text-xl">
              Pricing
            </MenubarTrigger>
          </Link>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
