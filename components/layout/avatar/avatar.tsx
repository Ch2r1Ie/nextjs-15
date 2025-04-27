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
import { motion } from "framer-motion";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { handleSignOut } from "@/actions/(auth)/use-singOut";

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
    transition: { duration: 1 },
  },
};

interface UserProfileAvatar {
  name: string;
  email: string;
  imageUrl: string;
}

interface UserProfileAvatarProps extends React.ComponentPropsWithoutRef<"div"> {
  avatar: UserProfileAvatar;
}

export function UserProfileAvatar({
  avatar,
  className,
  ...props
}: UserProfileAvatarProps) {
  return (
    <motion.div
      variants={popPreset}
      initial="initial"
      animate="animate"
      className="w-full max-w-md rounded-xl p-2 shadow-xl backdrop-blur-md"
    >
      <div className={cn("flex flex-col gap-4", className)} {...props}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Jump back in!</CardTitle>
            <CardDescription className="text-sm">
              <span>
                🎉 Welcome aboard! Your account has been created successfully.
                Let&apos;s get started! ready.
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex w-full justify-center">
              <div className="w-11/12">
                <div className="flex flex-col items-center gap-2">
                  <Avatar className="h-18 w-18">
                    <AvatarImage src={avatar.imageUrl} alt="@user" />
                    <AvatarFallback>{avatar.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <div className="text-lg font-semibold">{avatar.name}</div>
                    <div className="text-muted-foreground text-sm">
                      {avatar.email}
                    </div>
                  </div>
                  <div className="mx-auto w-full max-w-xs">
                    <Link href="/home">
                      <Button className="m-1 w-full cursor-pointer bg-blue-600 hover:bg-blue-700">
                        Continue
                      </Button>
                    </Link>
                  </div>
                  <div className="m-1 flex w-full items-center justify-between gap-4">
                    <div className="h-px flex-grow bg-gray-300 dark:bg-gray-700" />
                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
                      OR
                    </span>
                    <div className="h-px flex-grow bg-gray-300 dark:bg-gray-700" />
                  </div>
                  <div className="mx-auto w-full max-w-xs">
                    <Link href="/login">
                      <Button
                        variant="ghost"
                        className="m-1 w-full cursor-pointer"
                        onClick={async () => {
                          await handleSignOut();
                        }}
                      >
                        Continue with another account
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="text-muted-foreground mt-3 text-center text-sm">
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
