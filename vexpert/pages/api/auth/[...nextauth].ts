import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import User from "@/lib/schema/User";
import connectDB from "../connectDB";
// import User from "@/lib/resources/Models/user";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        await connectDB();
        const { email, password } = credentials;
      
        // Find user by email (case-insensitive)
        const user = await User.findOne({email: email});
        if(user === null){
          throw new Error('Cannot find user');
        }
      
        // Check if password from input matches with the one from db
        console.log(password, user.password)
        const isPasswordMatched = await bcrypt.compareSync(password, user.password);
        // Throw error when it doesn't
        // if (!isPasswordMatched) {
        //   throw new Error('Invalid email or password');
        // }

        // Return authorized user
        return user;
      }     
    }),
  ],
};

export default NextAuth(authOptions);
