import { Suspense } from "react";
import HomeClientSide from "./cliend-side";
import LoadingSpinner from "@/components/loading/loader-spinner";

const Home: React.FC = async () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HomeClientSide />
    </Suspense>
  );
};

export default Home;
