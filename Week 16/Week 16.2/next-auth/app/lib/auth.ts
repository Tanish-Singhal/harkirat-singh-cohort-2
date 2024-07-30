import CredentialsProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"
import { signIn } from "next-auth/react";

export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Email",
          type: "text",
          placeholder: "Email"
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials: any) {
        const username = credentials.username;
        const password = credentials.password;
        // const user = await prisma.user.findOne({
        //   where: {
        //     email: username,
        //     password: password,
        //   },
        // });

        // if (!user) {
        //   return null;
        // }

        // return {
        //   id: user.id,
        //   email: user.email,
        // };

        console.log(credentials);

        //validation

        return {
          id: "user1",
          name: "Tanish Singhal",
          email: "tanish@gmail.com"
        };
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || ""
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  // to return the id of the user
  callbacks: {
    // if you want to block a specific email address user
    signIn: ({user}: any) => {
      if (user.email == "randomuser@gmail.com") {
        return false
      }
      return true
    },

    // JWT callback
    jwt: ({token, user}: any) => {
      console.log(token);
      // as the id was labeled by the sub
      token.userId = token.sub;
      return token;
    },

    // this callback, will return the id
    session: ({ session, token, user }: any) => {
      console.log(session);
      if (session && session.user) {
        session.user.id = token.sub;
      }
      return session;
    }
  },
  // to make he your custom page your default signIn page
  pages: {
    signIn: "/signin",
  }
}
