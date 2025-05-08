"use client";

import { RevealLinks } from "@/components/animation/pricing/FlipLink";
import PricingFreePlanCard from "@/components/animation/pricing/PricingFreePlanCard";
import PricingPlusPlanCard from "@/components/animation/pricing/PricingPlusPlanCard";
import PricingProPlanCard from "@/components/animation/pricing/PricingProPlanCard";
import PricingEnterprisePlanCard from "@/components/animation/pricing/PricingEnterprisePlanCard";

export default function PricingSectionCards() {
  return (
    <div className="flex min-h-screen justify-center bg-black p-2">
      <div className="mt-10 xl:mt-20">
        <div className="flex">
          <RevealLinks />
        </div>
        <div className="mx-auto mt-5 flex w-full justify-center">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <PricingFreePlanCard href="https://buy.stripe.com/aEU6rf3NhegqdpucMN" />
            <PricingPlusPlanCard href="https://buy.stripe.com/aEU6rf3NhegqdpucMN" />
            <PricingProPlanCard href="https://buy.stripe.com/aEU6rf3NhegqdpucMN" />
            <PricingEnterprisePlanCard href="https://buy.stripe.com/aEU6rf3NhegqdpucMN" />
          </div>
        </div>
      </div>
    </div>
  );
}
