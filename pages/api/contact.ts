import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

type Data = {
  message: string
}

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.PASSWORD,
  },
  secure: true,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const mailData = {
    from: process.env.SENDER_EMAIL,
    to: process.env.RECEIVER_EMAIL,
    subject: `Message From ${req.body.name} <${req.body.email}>`,
    text: req.body.message,
    html: '<div>' + req.body.message + '</div>'
  };

  try {
    const result = transporter.sendMail(mailData);
    if (result.err) {
      res.status(500).json({ message: 'Error' });
    }
    else {
      res.status(200).json({ message: 'Success' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error' });
  }
}
