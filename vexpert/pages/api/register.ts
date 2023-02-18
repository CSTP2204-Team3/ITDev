import {
  addItem,
  getItem
} from "@/lib/resources/Controller/mongoose/user.RESTful";
import User from "@/lib/schema/User";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

const registerHandler = async (req: NextApiRequest, res: NextApiResponse) => {
mongoose.connect(process.env.DATABASE_URL|| "")
  if (req.method === "POST") {
    try {
      const { user: _regiUser } = req.body;
      console.log(_regiUser);
      console.log(_regiUser.email);
      const existingUser = await User.findOne({ email: _regiUser.email }).exec();
      console.log("existingUser", existingUser);
      if (existingUser) {
        throw new Error("Email already used");
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword: string = await bcrypt.hash(
        _regiUser.password,
        salt
      );
      _regiUser.password = hashedPassword;
      // addItem(_regiUser, User);
      await User.create(_regiUser)
      res.redirect('/login')
      res.end()
    } catch (e: any) {
        console.log(e.message)
    }
  }
};

export default registerHandler;
