"use client";

import { useSearchParams } from "next/navigation";
import NavBarTabs from "@/components/animation/home/Animate-Navbar";

export default function HomeClientSide() {
  const searchParams = useSearchParams();
  const isToggleLogIn = searchParams.get("isToggleLogIn");
  const toggleLogIn = isToggleLogIn === "true";

  return <NavBarTabs isToggleLogIn={toggleLogIn} />;
}
