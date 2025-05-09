import { Suspense } from "react";
import LandingPageClient from "./landing";

export default function LandingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LandingPageClient />
    </Suspense>
  );
}
