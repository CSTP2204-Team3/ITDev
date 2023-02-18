// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { UserRegProfile } from '@/lib/types/UserReg';
import connectMongo from '@/utils/connectMongo';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {

  console.log('CONNECTING TO MONGO');

  await connectMongo();

  console.log('SUCCESS! CONNECTED TO MONGO')

  console.log('CREATING DOCUMENT');

  let { name,
  email,
} = _req.body as UserRegProfile;

name = name.toLowerCase();

email = email.toLowerCase();

const userReg = {
  name,
  email,
};

  res.status(200).json({ userReg })
}