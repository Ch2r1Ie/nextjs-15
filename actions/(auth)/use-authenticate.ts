"use server";

import { auth } from "./use-auth";

export const isAuthenticated = async () => {
  const session = await auth();
  if (session) {
    return true;
  }
  return false;
};
