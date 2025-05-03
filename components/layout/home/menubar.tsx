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
          className="rounded-2xl px-4 py-6 text-xl text-black transition-all duration-300 hover:cursor-pointer hover:bg-white hover:text-blue-800"
        >
          Product
        </Button>
        <Button
          variant="ghost"
          className="rounded-2xl px-4 py-6 text-xl text-black transition-all duration-300 hover:cursor-pointer hover:bg-white hover:text-blue-800"
        >
          Features
        </Button>
        <Link href="/pricing">
          <Button
            variant="ghost"
            className="rounded-2xl px-4 py-6 text-xl text-black transition-all duration-300 hover:cursor-pointer hover:bg-white hover:text-blue-800"
          >
            Pricing
          </Button>
          <span className="mx-5 self-center text-xl text-black">|</span>
          <Link href="/login">
            <Button className="rounded-2xl bg-amber-300 px-4 py-6 text-xl text-black transition-all duration-300 hover:cursor-pointer hover:bg-white hover:text-blue-800">
              Start For Free
            </Button>
          </Link>
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
            className="mb-2 cursor-pointer rounded-xl px-6 py-2 text-center text-xl font-semibold text-blue-800 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-100"
          >
            Product
          </div>
          <div
            onClick={() => setIsOpen(false)}
            className="mb-2 cursor-pointer rounded-xl px-6 py-2 text-center text-xl font-semibold text-blue-800 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-100"
          >
            Features
          </div>
          <Link href="/pricing" onClick={() => setIsOpen(false)}>
            <div className="mb-2 cursor-pointer rounded-xl px-6 py-2 text-center text-xl font-semibold text-blue-800 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-100">
              Pricing
            </div>
          </Link>
          <Link href="/login" onClick={() => setIsOpen(false)}>
            <div className="cursor-pointer rounded-xl px-6 py-2 text-center text-xl font-semibold text-blue-800 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-100">
              Start For Free
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
