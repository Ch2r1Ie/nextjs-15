"use server";

import { signIn } from "./use-auth";

export const handleGithubSignIn = async () => {
  try {
    await signIn("github", { redirectTo: "/home" });
  } catch (error) {
    throw error;
  }
};
