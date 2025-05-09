import { auth } from "@/actions/(auth)/use-auth";
import { UserProfileAvatar } from "@/components/layout/avatar/avatar";
import LoadingSpinner from "@/components/loading/loader-spinner";

export default async function UserAvatar() {
  const session = await auth();
  const name = session?.user?.name || "User Name";
  const email = session?.user?.email || "user@example.com";
  const imageUrl = session?.user?.image || "/assets/default-avatar.png";

  if (!session) return <LoadingSpinner />;

  return (
    <div className="relative flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <UserProfileAvatar avatar={{ email, name, imageUrl }} />
    </div>
  );
}
