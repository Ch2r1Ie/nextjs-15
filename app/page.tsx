import { Suspense } from "react";
import { isAuthenticated } from "@/actions/(auth)/check-authenticate";
import HomeClientSide from "./cliend-side";
import LoadingSpinner from "@/components/loading/loader-spinner";

export default async function Home() {
  const authenticaiton = await isAuthenticated();

  console.log(authenticaiton);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HomeClientSide isAuthentication={authenticaiton} />
    </Suspense>
  );
}
