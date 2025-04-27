import { isAuthenticated } from "@/actions/(auth)/check-authenticate";
import UserAvatar from "./logout";
import { redirect } from "next/navigation";

const SignOut: React.FC = async () => {
  const authenticated = await isAuthenticated();

  if (!authenticated) {
    redirect("/avatar");
  } else {
    return <UserAvatar />;
  }
};

export default SignOut;
