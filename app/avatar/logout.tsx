import { auth } from "@/actions/(auth)/use-auth";
import { UserProfileAvatar } from "@/components/layout/avatar/avatar";
import Image from "next/image";

export default async function UserAvatar() {
  const session = await auth();
  const name = session?.user?.name || "User Name";
  const email = session?.user?.email || "user@example.com";
  const imageUrl = session?.user?.image || "/assets/default-avatar.png";

  if (!session) return <div>Loading...</div>;

  return (
    <div className="relative flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <Image
        src="/assets/auth-background.jpg"
        alt="Background"
        fill
        className="-z-10 object-cover object-center"
        priority
      />
      <UserProfileAvatar avatar={{ email, name, imageUrl }} />
    </div>
  );
}
