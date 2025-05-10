import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

const LogOutButton = () => {
  return (
    <Link href="/avatar">
      <Button
        variant="outline"
        className="flex items-center gap-2 hover:cursor-pointer"
      >
        <LogOut />
        Log out
      </Button>
    </Link>
  );
};

export default LogOutButton;
