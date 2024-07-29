import CredentialsProvider from "next-auth/providers/credentials";

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
  }
}