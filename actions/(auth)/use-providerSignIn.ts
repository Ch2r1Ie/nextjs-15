"use server";

import { signIn } from "./use-auth";

export const handleGoogleSignIn = async () => {
  try {
    await signIn("google", { redirectTo: "/avatar" });
  } catch (error) {
    throw error;
  }
};

export const handleGithubSignIn = async () => {
  try {
    await signIn("github", { redirectTo: "/avatar" });
  } catch (error) {
    throw error;
  }
};

export const handleDiscordSignIn = async () => {
  try {
    await signIn("discord", { redirectTo: "/avatar" });
  } catch (error) {
    throw error;
  }
};
