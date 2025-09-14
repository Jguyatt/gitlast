// src/lib/mail.ts
import "server-only";
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'guyattj39@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function sendEmail({ to, subject, html }: { to: string; subject: string; html: string }) {
  await transporter.sendMail({
    from: 'guyattj39@gmail.com',
    to,
    subject,
    html,
  });
}
