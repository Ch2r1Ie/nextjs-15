"use client";

import { useState } from "react";
import { RevealLinks } from "@/components/animation/pricing/FlipLink";
import PricingFreePlanCard from "@/components/animation/pricing/PricingFreePlanCard";
import PricingPlusPlanCard from "@/components/animation/pricing/PricingPlusPlanCard";
import PricingProPlanCard from "@/components/animation/pricing/PricingProPlanCard";
import PricingEnterprisePlanCard from "@/components/animation/pricing/PricingEnterprisePlanCard";
import TogglePlanButton from "@/components/animation/pricing/MonthlyAnnual-button";

interface PricingSectionCardsProps {
  authentication: boolean;
}
const navigate = (authenticated: boolean) =>
  authenticated
    ? "https://buy.stripe.com/aEU6rf3NhegqdpucMN"
    : "/landing?isToggleLogIn=true";

const PricingSectionCards: React.FC<PricingSectionCardsProps> = ({
  authentication,
}) => {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="flex min-h-screen justify-center p-2">
      <div className="mt-10 xl:mt-20">
        <div className="flex items-center">
          <RevealLinks />
          <TogglePlanButton toggled={toggled} setToggled={setToggled} />
        </div>

        <div className="mx-auto mt-5 flex w-full justify-center">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <PricingFreePlanCard
              href={navigate(authentication)}
              isToggle={toggled}
            />
            <PricingPlusPlanCard
              href={navigate(authentication)}
              isToggle={toggled}
            />
            <PricingProPlanCard
              href={navigate(authentication)}
              isToggle={toggled}
            />
            <PricingEnterprisePlanCard
              href={navigate(authentication)}
              isToggle={toggled}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSectionCards;
