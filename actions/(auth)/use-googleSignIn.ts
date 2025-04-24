"use server";

import { signIn } from "./use-auth";

export const handleGoogleSignIn = async () => {
  try {
    await signIn("google", { redirectTo: "/home" });
  } catch (error) {
    throw error;
  }
};
