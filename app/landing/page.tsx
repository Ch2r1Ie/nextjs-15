"use client";

import { useSearchParams } from "next/navigation";
import NavBarTabs from "@/components/animation/landing/Animate-Navbar";

export default function LandingPage() {
  const searchParams = useSearchParams();
  const isToggleLogIn = searchParams.get("isToggleLogIn");
  const toggleLogIn = isToggleLogIn === "true";

  return (
    <div>
      <NavBarTabs isToggleLogIn={toggleLogIn} />
    </div>
  );
}
