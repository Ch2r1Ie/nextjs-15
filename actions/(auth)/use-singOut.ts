"use server";

import { signOut } from "./use-auth";

export const handleSignOut = async () => {
  try {
    await signOut();
  } catch (error) {
    throw error;
  }
};
