"use server";

import { auth } from "./use-auth";

export const isAuthenticated = async () => {
  const session = await auth();
  console.log("Session data:", session);
  if (session) {
    return true;
  }
  return false;
};
