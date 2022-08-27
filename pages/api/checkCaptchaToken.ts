// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();


type Data = {
  success: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {token} = req.body;

  try {
    const result = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_API_SECRET_KEY}&response=${token}`
    );
    res.status(200).json({ success: result.data.success });
  } catch(err) {
    res.status(200).json({ message: 0 });
  }
}
