// import { isAuthenticated } from "@/actions/(auth)/use-authenticate";
import Login from "./login";
// import { redirect } from "next/navigation";

const SignIn: React.FC = async () => {
  // const authenticated = await isAuthenticated();

  // if (!authenticated) {
  //   redirect("/home");
  // } else {
  return <Login />;
  // }
};

export default SignIn;
