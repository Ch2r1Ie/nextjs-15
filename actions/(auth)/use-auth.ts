import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import Discord from "next-auth/providers/discord";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [Google, Github, Discord],
  callbacks: {
    async jwt({ token, user, account, profile, trigger, isNewUser, session }) {
      console.log("JWT Callback:");
      console.log("token:", token);
      console.log("user:", user);
      console.log("account:", account);
      console.log("profile:", profile);
      console.log("trigger:", trigger);
      console.log("isNewUser:", isNewUser);
      console.log("session (from trigger update):", session);

      return token;
    },
  },
});
