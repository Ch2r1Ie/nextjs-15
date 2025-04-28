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
import {
  handleGoogleSignIn,
  handleGithubSignIn,
  handleDiscordSignIn,
} from "@/actions/(auth)/use-providerSignIn";
import { motion } from "framer-motion";
import Link from "next/link";

const popPreset = {
  initial: {
    scale: 0.5,
    opacity: 0,
    filter: "blur(5px)",
  },
  animate: {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.5 },
  },
};

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <motion.div
      variants={popPreset}
      initial="initial"
      animate="animate"
      className="w-full max-w-md rounded-xl p-2 shadow-xl backdrop-blur-md"
    >
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Log in or Sign in</CardTitle>
            <CardDescription>
              "Use your email or another service to continue with
              MyCompany&apos;s (it&apos;s free)!"
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex w-full justify-center">
              <div className="w-11/12">
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full cursor-pointer"
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
                    className="w-full cursor-pointer"
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
                    className="w-full cursor-pointer"
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
                  <span className="cursor-pointer text-blue-800 underline underline-offset-4 hover:text-blue-500">
                    <Link href="/">Terms of Use </Link>
                  </span>
                  and
                  <span className="cursor-pointer text-blue-800 underline underline-offset-4 hover:text-blue-500">
                    <Link href="/"> Privacy Policy.</Link>
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
