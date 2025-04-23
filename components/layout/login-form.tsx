import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaDiscord } from "react-icons/fa";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            Log in or sign up in seconds
          </CardTitle>
          <CardDescription>
            Use your email or another service to continue with MyCompany's (it’s
            free)!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="space-y-2">
              <Button variant="outline" className="w-full">
                <FcGoogle className="mr-2 h-6 w-6" />
                <span>Continue with Google</span>
              </Button>
              <Button variant="outline" className="w-full">
                <FaFacebook className="mr-2 h-6 w-6 text-[#1877F2]" />
                <span>Continue with Facebook</span>
              </Button>
              <Button variant="outline" className="w-full">
                <FaGithub className="mr-2 h-6 w-6" />
                <span>Continue with GitHub</span>
              </Button>
              <Button variant="outline" className="w-full">
                <FaDiscord className="mr-2 h-6 w-6 text-[#5865F2]" />
                <span>Continue with Discord</span>
              </Button>
            </div>
            <div className="text-muted-foreground mt-4 text-center text-sm">
              By continuing, you agree to MyCompany's{" "}
              <a
                href="/terms"
                className="text-black underline underline-offset-4"
              >
                Terms of Use
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="text-black underline underline-offset-4"
              >
                Privacy Policy
              </a>
              .
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
