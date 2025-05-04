"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function MenubarDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="hidden space-x-4 md:flex">
        <Button
          variant="ghost"
          className="rounded-2xl px-4 py-6 text-xl text-black transition-all duration-300 hover:cursor-pointer hover:bg-gray-200"
        >
          Product
        </Button>
        <Button
          variant="ghost"
          className="rounded-2xl px-4 py-6 text-xl text-black transition-all duration-300 hover:cursor-pointer hover:bg-gray-200"
        >
          Features
        </Button>
        <Link href="/pricing" passHref>
          <Button
            variant="ghost"
            className="rounded-2xl px-4 py-6 text-xl text-black transition-all duration-300 hover:cursor-pointer hover:bg-gray-200"
          >
            Pricing
          </Button>
        </Link>
        <span className="mx-5 self-center text-xl text-black">|</span>
        <Link href="/login" passHref>
          <Button className="rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 px-4 py-6 text-xl transition-all duration-300 hover:cursor-pointer">
            Start For Free
          </Button>
        </Link>
      </div>
      <div className="md:hidden">
        <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="size-md" /> : <Menu className="size-md" />}
        </Button>
      </div>
      {isOpen && (
        <div className="absolute left-1/2 z-50 mt-4 w-full max-w-xs -translate-x-1/2 rounded-3xl bg-white/70 p-6 shadow-lg ring-1 ring-black/10 backdrop-blur-lg md:hidden">
          <div
            onClick={() => setIsOpen(false)}
            className="mb-2 cursor-pointer rounded-xl px-6 py-2 text-center text-xl font-semibold text-black transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-100"
          >
            Product
          </div>
          <div
            onClick={() => setIsOpen(false)}
            className="mb-2 cursor-pointer rounded-xl px-6 py-2 text-center text-xl font-semibold text-black transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-100"
          >
            Features
          </div>
          <Link
            href="/pricing"
            onClick={() => setIsOpen(false)}
            className="mb-2 block rounded-xl px-6 py-2 text-center text-xl font-semibold text-black transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-100"
          >
            Pricing
          </Link>
          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="block rounded-xl px-6 py-2 text-center text-xl font-semibold text-black transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-100"
          >
            Start For Free
          </Link>
        </div>
      )}
    </div>
  );
}
