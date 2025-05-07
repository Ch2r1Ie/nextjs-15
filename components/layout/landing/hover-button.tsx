"use client";

import Link from "next/link";
import { LogIn } from "lucide-react";

interface Button {
  button: string;
  href: string;
}

export const DottedButton: React.FC<Button> = ({ button, href }) => {
  return (
    <Link href={href}>
      <button className="rounded-2xl border-2 border-black bg-white px-3 py-3 font-semibold text-black uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
        <span>{button}</span>
      </button>
    </Link>
  );
};

export const LogInButton: React.FC<Button> = ({ button, href }) => {
  return (
    <Link href={href}>
      <button className="flex rounded-2xl border-2 border-black bg-white px-3 py-3 font-semibold text-black uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
        <span>{button}</span>
        <LogIn className="h-6 w-6 p-1" />
      </button>
    </Link>
  );
};
