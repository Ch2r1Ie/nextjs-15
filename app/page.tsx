import { Suspense } from "react";
import { auth } from "@/actions/(auth)/use-auth";
import HomeClientSide from "./cliend-side";
import LoadingSpinner from "@/components/loading/loader-spinner";

export default async function Home() {
  const session = await auth();
  const isAuthentication = !!session;

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HomeClientSide isAuthentication={isAuthentication} />
    </Suspense>
  );
}
