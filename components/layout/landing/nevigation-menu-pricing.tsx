import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function PricingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left">
      <Button
        ref={buttonRef}
        variant="ghost"
        className="flex items-center justify-center rounded-2xl py-6 text-xl text-black transition-all duration-300 hover:bg-gray-200"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : "false"}
      >
        <div className="flex items-center justify-center">
          Pricing
          {isOpen ? (
            <ChevronUp className="mx-1 mt-1" size={"xl"} />
          ) : (
            <ChevronDown className="mx-1 mt-1" size={"xl"} />
          )}
        </div>
      </Button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 z-10 mt-3 w-56 flex-col gap-2 rounded-lg bg-white p-4 shadow-md transition-all duration-300 ease-in-out"
          role="menu"
          aria-labelledby="pricing-button"
        >
          <div className="text-xs font-bold text-gray-500">Pricing Plans</div>
          <Link
            href="/pricing"
            className="block rounded px-3 py-2 text-sm text-black hover:bg-gray-100"
            role="menuitem"
          >
            💰 Basic Plan
            <p className="text-xs text-gray-500">Ideal for individuals</p>
          </Link>
          <Link
            href="/pricing"
            className="block rounded px-3 py-2 text-sm text-black hover:bg-gray-100"
            role="menuitem"
          >
            🚀 Pro Plan
            <p className="text-xs text-gray-500">Perfect for teams</p>
          </Link>
          <Link
            href="/pricing"
            className="block rounded px-3 py-2 text-sm text-black hover:bg-gray-100"
            role="menuitem"
          >
            🏢 Enterprise Plan
            <p className="text-xs text-gray-500">For large businesses</p>
          </Link>
          <div className="mt-3 text-xs font-bold text-gray-500">
            Additional Info
          </div>
          <Link
            href="/pricing"
            className="block rounded px-3 py-2 text-sm text-black hover:bg-gray-100"
            role="menuitem"
          >
            📝 Pricing Features
            <p className="text-xs text-gray-500">Learn more about our plans</p>
          </Link>
        </div>
      )}
    </div>
  );
}
