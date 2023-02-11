// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from '@/utils/connectMongo';
import { UserRegProfile } from '@/models/lib/types/UserReg';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('CONNECTING TO MONGO');

  await connectMongo();

  console.log('CONNECTED TO MONGO');

  console.log('CREATING DOCUMENT');

  let {
    userName,
    firstName,
    lastName,
    email,
} = req.body as UserRegProfile;

// Converts username to lowercase for uniformity
userName = userName.toLowerCase();

// Converts email to lowercase for uniformity
email = email.toLowerCase();

// Converts first letter of the firstname to capital and the rest is lowercase
firstName = firstName.charAt(0) + firstName.substring(1).toLowerCase();

// Converts first letter of the lastname to capital and the rest is lowercase
lastName = lastName.charAt(0) + lastName.substring(1).toLowerCase();

// Define user object to be created in the database
const userReg = {
    userName,
    email,
    firstName,
    lastName,
};
  

  res.json({ userReg });
}
