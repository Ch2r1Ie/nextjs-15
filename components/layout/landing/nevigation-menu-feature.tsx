import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FeatureMenu() {
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
          Feature
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
          aria-labelledby="feature-button"
        >
          <div className="text-xs font-bold text-gray-500">Featured</div>
          <Link
            href="/feature/analytics"
            className="block rounded px-3 py-2 text-sm text-black hover:bg-gray-100"
            role="menuitem"
          >
            📊 Analytics Dashboard
            <p className="text-xs text-gray-500">
              Monitor your business growth with in-depth insights.
            </p>
          </Link>
          <Link
            href="/feature/automation"
            className="block rounded px-3 py-2 text-sm text-black hover:bg-gray-100"
            role="menuitem"
          >
            ⚙️ Marketing Automation
            <p className="text-xs text-gray-500">
              Automate your marketing campaigns for better efficiency.
            </p>
          </Link>
          <div className="mt-3 text-xs font-bold text-gray-500">
            All Features
          </div>
          <Link
            href="/feature/crm"
            className="block rounded px-3 py-2 text-sm text-black hover:bg-gray-100"
            role="menuitem"
          >
            🤝 Customer Relationship Management (CRM)
            <p className="text-xs text-gray-500">
              Manage your client relationships with ease and effectiveness.
            </p>
          </Link>
          <Link
            href="/feature/collaboration"
            className="block rounded px-3 py-2 text-sm text-black hover:bg-gray-100"
            role="menuitem"
          >
            🤝 Team Collaboration Tools
            <p className="text-xs text-gray-500">
              Foster teamwork and collaboration within your organization.
            </p>
          </Link>
          <Link
            href="/feature/notifications"
            className="block rounded px-3 py-2 text-sm text-black hover:bg-gray-100"
            role="menuitem"
          >
            🔔 Push Notifications
            <p className="text-xs text-gray-500">
              Stay connected with customers via real-time notifications.
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}
