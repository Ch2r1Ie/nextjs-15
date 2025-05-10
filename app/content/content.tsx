import React from "react";
import UserItem from "@/components/layout/content/UserItem";
import { auth } from "@/actions/(auth)/use-auth";
import SideBarCommand from "@/components/layout/content/SideBarCommand";

export default async function Content() {
  const session = await auth();
  const name = session?.user?.name || "User Name";
  const email = session?.user?.email || "user@example.com";
  const imageUrl = session?.user?.image || "/assets/default-avatar.png";

  return (
    <div className="flex items-start justify-between">
      <div className="fixed flex min-h-screen w-[300px] flex-col gap-2 border-r p-4">
        <UserItem name={name} email={email} imageUrl={imageUrl} />
        <SideBarCommand />
      </div>
    </div>
  );
}
