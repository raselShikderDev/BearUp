import mongoose from "mongoose";
import NextAuth from "next-auth";
// import AppleProvider from "next-auth/providers/apple";
// import FacebookProvider from "next-auth/providers/facebook";
// import GoogleProvider from "next-auth/providers/google";
// import EmailProvider from "next-auth/providers/email";
import GithubProvider from "next-auth/providers/github";
import payment from "@/models/payment";
import user from "@/models/user";

export const authoptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET,
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
    // //Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: "NextAuth.js <no-reply@example.com>",
    // }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true;
      if (account.provider === "github") {
        // Connect to the Database
        const client = mongoose.connect("mongodb://localhost:27017/bearup");

        // Cheak weather user alredy exists or not
        const currentUser = user.findOne({ email: email });
        if (!currentUser) {
          //Create New User
          const newUser = new user({
            username: profile.login,
            email: email.split("@")[0],
          });
          await newUser.save()
          user.name = newUser.username
        } else {
          user.name = currentUser.username
        }
        return true
      }
    },
  },
});

export { authoptions as GET, authoptions as POST };
