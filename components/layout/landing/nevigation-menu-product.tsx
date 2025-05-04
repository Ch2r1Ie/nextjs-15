import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ProductMenu() {
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
        className="flex items-center justify-center gap-2 rounded-2xl py-6 text-xl transition-all duration-300 hover:cursor-pointer hover:bg-gray-200"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : "false"}
      >
        <div className="flex items-center justify-center">
          Product
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
          className="absolute top-full left-0 z-10 mt-3 w-56 flex-col gap-2 rounded-lg bg-white p-4 shadow-md transition-all duration-300 ease-in-out hover:cursor-pointer"
          role="menu"
          aria-labelledby="product-button"
        >
          <div className="text-xs font-bold text-gray-500">Products</div>
          <Link
            href="/product/analytics"
            className="block rounded px-3 py-2 text-sm text-black hover:bg-gray-100"
            role="menuitem"
          >
            📊 Analytics Dashboard
            <p className="text-xs text-gray-500">
              Monitor your business growth
            </p>
          </Link>

          <div className="mt-3 text-xs font-bold text-gray-500">
            All Products
          </div>
          <Link
            href="/product/crm"
            className="block rounded px-3 py-2 text-sm text-black hover:bg-gray-100"
            role="menuitem"
          >
            🤝 Customer CRM
            <p className="text-xs text-gray-500">
              Manage client relationships easily
            </p>
          </Link>
          <Link
            href="/product/automation"
            className="block rounded px-3 py-2 text-sm text-black hover:bg-gray-100"
            role="menuitem"
          >
            ⚙️ Marketing Automation
            <p className="text-xs text-gray-500">Automate your campaigns</p>
          </Link>
        </div>
      )}
    </div>
  );
}
