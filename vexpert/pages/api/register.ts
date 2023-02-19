import User from "@/lib/schema/User";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import connectDB from "./connectDB";

const registerHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { user: _regiUser } = req.body;
      console.log(_regiUser)
      //Check if user exists
      await connectDB()

      //Throw error when email is already in use
      const existingUser = await User.findOne({ email: _regiUser.email }).exec();
      console.log("existingUser", existingUser);
      if (existingUser) {
        throw new Error("Email already used");
      }
      // Password encrypted
      console.log(_regiUser.password)
      const hashedPassword: string = await bcrypt.hash(_regiUser.password, 10);
      const isPasswordMatched = await bcrypt.compare(_regiUser.password, hashedPassword);
      console.log(isPasswordMatched)
      // Replace text password with encrypted password
      _regiUser.password = hashedPassword;
      console.log(_regiUser)
      
      //Add user on database
      await User.create(_regiUser)
      res.end()
    } catch (e: any) {
        console.log(e.message)
    }
  }
};

export default registerHandler;
