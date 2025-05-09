import { isAuthenticated } from "@/actions/(auth)/check-authenticate";
import PricingSectionCards from "@/components/layout/pricing/pricing-card";

const PricingCard = async () => {
  const authenticated = await isAuthenticated();

  return <PricingSectionCards authentication={authenticated} />;
};

export default PricingCard;
