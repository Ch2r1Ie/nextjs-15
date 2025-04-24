"use server";

import { signIn } from "./use-auth";

export const handleDiscordSignIn = async () => {
  try {
    await signIn("discord", { redirectTo: "/home" });
  } catch (error) {
    throw error;
  }
};
