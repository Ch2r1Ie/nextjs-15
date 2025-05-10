import { isAuthenticated } from "@/actions/(auth)/check-authenticate";
import { redirect } from "next/navigation";
import Content from "./content";

const ContentPage: React.FC = async () => {
  const authenticated = await isAuthenticated();

  if (!authenticated) {
    redirect("/?isToggleLogIn=true");
  } else {
    return <Content />;
  }
};

export default ContentPage;
