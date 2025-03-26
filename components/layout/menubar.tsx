"use client";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useRouter } from "next/navigation";

export function MenubarDemo() {
  const router = useRouter();

  return (
    <Menubar className="flex justify-center items-center p-6">
      <MenubarMenu>
        <MenubarTrigger
          className="hover:text-accent-foreground cursor-pointer"
          onClick={() => router.push("/")}
        >
          Home
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="hover:text-accent-foreground cursor-pointer">
          Edit
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="hover:text-accent-foreground cursor-pointer">
          Features
        </MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>
            Always Show Full URLs
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            Reload <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled inset>
            Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Toggle Fullscreen</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Hide Sidebar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger
          className="hover:text-accent-foreground cursor-pointer"
          onClick={() => router.push("/pricing")}
        >
          Pricing
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
