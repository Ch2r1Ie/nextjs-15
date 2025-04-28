"use server";

import { signIn } from "./use-auth";

export const handleGoogleSignIn = async () => {
  try {
    await signIn("google");
  } catch (error) {
    throw error;
  }
};

export const handleGithubSignIn = async () => {
  try {
    await signIn("github");
  } catch (error) {
    throw error;
  }
};

export const handleDiscordSignIn = async () => {
  try {
    await signIn("discord");
  } catch (error) {
    throw error;
  }
};
