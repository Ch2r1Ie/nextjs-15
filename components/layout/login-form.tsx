"use client";

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
import { FaGithub, FaDiscord } from "react-icons/fa";
import { handleGoogleSignIn } from "@/actions/(auth)/use-googleSignIn";
import { handleGithubSignIn } from "@/actions/(auth)/use-githubSignIn";
import { handleDiscordSignIn } from "@/actions/(auth)/use-discordSignIn";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Log in or sign</CardTitle>
          <CardDescription>
            {
              "Use your email or another service to continue with MyCompany's (it’s free)!"
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex w-full justify-center">
            <div className="w-11/12">
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full"
                  type="button"
                  onClick={async () => {
                    await handleGoogleSignIn();
                  }}
                >
                  <FcGoogle className="mr-2 h-6 w-6" />
                  <span>Continue with Google</span>
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  type="button"
                  onClick={async () => {
                    await handleGithubSignIn();
                  }}
                >
                  <FaGithub className="mr-2 h-6 w-6" />
                  <span>Continue with GitHub</span>
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  type="button"
                  onClick={async () => {
                    await handleDiscordSignIn();
                  }}
                >
                  <FaDiscord className="mr-2 h-6 w-6 text-[#5865F2]" />
                  <span>Continue with Discord</span>
                </Button>
              </div>

              <div className="text-muted-foreground mt-4 text-center text-sm">
                {"By continuing, you agree to MyCompany's "}
                <a className="text-black underline underline-offset-4">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a className="text-black underline underline-offset-4">
                  Privacy Policy
                </a>
                .
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
