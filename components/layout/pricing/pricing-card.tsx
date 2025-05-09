"use client";

import { useState } from "react";
import { RevealLinks } from "@/components/animation/pricing/FlipLink";
import PricingFreePlanCard from "@/components/animation/pricing/PricingFreePlanCard";
import PricingPlusPlanCard from "@/components/animation/pricing/PricingPlusPlanCard";
import PricingProPlanCard from "@/components/animation/pricing/PricingProPlanCard";
import PricingEnterprisePlanCard from "@/components/animation/pricing/PricingEnterprisePlanCard";
import TogglePlanButton from "@/components/animation/pricing/MonthlyAnnual-button";

export default function PricingSectionCards() {
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
              href="https://buy.stripe.com/aEU6rf3NhegqdpucMN"
              isToggle={toggled}
            />
            <PricingPlusPlanCard
              href="https://buy.stripe.com/aEU6rf3NhegqdpucMN"
              isToggle={toggled}
            />
            <PricingProPlanCard
              href="https://buy.stripe.com/aEU6rf3NhegqdpucMN"
              isToggle={toggled}
            />
            <PricingEnterprisePlanCard
              href="https://buy.stripe.com/aEU6rf3NhegqdpucMN"
              isToggle={toggled}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
