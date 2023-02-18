import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import { NextApiRequest } from "next";
import { getItem } from "@/lib/resources/Controller/mongoose/user.RESTful";
import User, { IUser } from "@/lib/resources/Controller/mongoose/User";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;
        console.log("Auth", email, password)
        const user = await getItem({ email: email }, User);

        if (!user) {
          throw new Error("Invalid Email or password");
        }

        const isPasswordMatched = await bcrypt.compare(
          password,
          user.password
        );
        if (!isPasswordMatched) {
          throw new Error("Invalid Email or password");
        }
        return user;
      },
    }),
  ],
};

export default NextAuth(authOptions);
