import mongoose from "mongoose";
import NextAuth from "next-auth";
// import AppleProvider from "next-auth/providers/apple";
// import FacebookProvider from "next-auth/providers/facebook";
// import GoogleProvider from "next-auth/providers/google";
// import EmailProvider from "next-auth/providers/email";
import GithubProvider from "next-auth/providers/github";
import payment from "@/models/payment";
import userModel from "@/models/user";

// MongoDb Connection Function
const connectToMongoDb = async () => {
  try {
    // Connect to the Database
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect("mongodb://localhost:27017/bearup");
    }
    console.log("Database Connected");
  } catch (error) {
    console.error("Database Connection Error:", error);
    throw new Error("Faild to Connect Database");
  }
};

// NextAuth Configuaration
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
      try {
        // ensuing user used Github
        if (account.provider === "github") {
          await connectToMongoDb();

          // Cheak weather user alredy exists or not
          const existingUser = await userModel.findOne({ email: user.email });
          if (!existingUser) {
            //Create New User if current user doesn't exist
            const newUser = new user({
              username: profile.login,
              email: user.email,
            });
            await newUser.save();
            user.name = newUser.username;
          } else {
            user.name = existingUser.username;
          }
        }
        return true;
      } catch (error) {
        console.log("SignIn Error", error);
        return false;
      }
    },

    async session({ session, user }) {
      const dbUser = await userModel.findOne({ email: session.user.email });
      session.user = {
        id: dbUser._id,
        username: dbUser.username,
        email: dbUser.email,
      };
      return session;
    },
  },
});

export { authoptions as GET, authoptions as POST };
