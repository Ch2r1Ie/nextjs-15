"use client";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function MenubarDemo() {
  return (
    <div className="mx-auto flex w-full max-w-2xl items-center justify-center rounded-full p-2">
      <Link href="/">
        <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
          <AvatarImage src="/assets/logo.png" alt="@logo" />
        </Avatar>
      </Link>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger
            className={cn("cursor-pointer", "sm:text-xl", "px-1 sm:px-4")}
          >
            Product
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger
            className={cn("cursor-pointer", "sm:text-xl", "px-1 sm:px-4")}
          >
            Features
          </MenubarTrigger>
          <MenubarContent className="mt-2">
            <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>
              {" "}
              Always Show Full URLs{" "}
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem inset>
              {" "}
              Reload <MenubarShortcut>⌘R</MenubarShortcut>{" "}
            </MenubarItem>
            <MenubarItem disabled inset>
              {" "}
              Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>{" "}
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Toggle Fullscreen</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Hide Sidebar</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <Link href="/pricing">
            <MenubarTrigger
              className={cn("cursor-pointer", "sm:text-xl", "px-1 sm:px-4")}
            >
              Pricing
            </MenubarTrigger>
          </Link>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
