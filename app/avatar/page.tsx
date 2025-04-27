import { auth } from "@/actions/(auth)/use-auth";
import { UserProfileAvatar } from "@/components/layout/avatar/avatar";
import Image from "next/image";

export default async function UserAvatar() {
  const session = await auth();
  const imageUrl = session?.user?.image;
  const name = session?.user?.name;
  const email = session?.user?.email;

  if (!imageUrl) return null;
  if (!name) return null;
  if (!email) return null;

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
