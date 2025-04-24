"use server";

import { signIn } from "./use-auth";

export const handleGoogleSignIn = async () => {
  try {
    await signIn("google", { redirectTo: "/home" });
  } catch (error) {
    throw error;
  }
};

export const handleGithubSignIn = async () => {
  try {
    await signIn("github", { redirectTo: "/home" });
  } catch (error) {
    throw error;
  }
};

export const handleDiscordSignIn = async () => {
  try {
    await signIn("discord", { redirectTo: "/home" });
  } catch (error) {
    throw error;
  }
};
