"use client";

import { useSearchParams } from "next/navigation";
import NavBarTabs from "@/components/animation/home/Animate-Navbar";

type Props = {
  isAuthentication: boolean;
};

export default function HomeClientSide({ isAuthentication }: Props) {
  const searchParams = useSearchParams();
  const isToggleLogIn = searchParams.get("isToggleLogIn");
  const toggleLogIn = isToggleLogIn === "true";

  return (
    <NavBarTabs
      isToggleLogIn={toggleLogIn}
      isAuthentication={isAuthentication}
    />
  );
}
