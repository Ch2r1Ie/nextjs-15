import { Suspense } from "react";
import HomeClientSide from "./cliend-side";
import LoadingSpinner from "@/components/loading/loader-spinner";

export default function Home() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HomeClientSide />
    </Suspense>
  );
}
