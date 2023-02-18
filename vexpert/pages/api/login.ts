import User from "@/lib/resources/Controller/mongoose/User";
import { getItem, addItem } from "@/lib/resources/Controller/mongoose/user.RESTful";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "POST") {
      const user = req.body
      const { email, password } = req.body;

      //fetch user by email from mongodb
    //   addItem(user)
    const dataBaseUser = await getItem(email, User)
    if(dataBaseUser){
        if(dataBaseUser.password === password) return res.redirect('/')
        else return res.redirect("/login")

    }else  return res.redirect('/login')
      //check if password matches

    } else {
      res.end("Only POST allowed");
    }
  } catch (e: any) {
    res.end(e.message);
  }
}
