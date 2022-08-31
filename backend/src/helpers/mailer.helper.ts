import nodemailer from "nodemailer";
import {
  InsertVerificationTokenMutation,
  RegisterUserMutation,
} from "../utils/gql/generated/graphql";
import { TokenIdentifier } from "./verificationToken";

const isProd = process.env.NODE_ENV === "production" ? true : false;

const sendMail = async (
  user: RegisterUserMutation,
  token: InsertVerificationTokenMutation
) => {
  console.log(isProd);
  const transport = await transporter();
  const info = await transport.sendMail({
    from: process.env.SMTP_FROM,
    to: user.insert_user_one?.email,
    subject: TokenIdentifier.EMAIL_VERIFY
      ? "Verify your email"
      : "Password Reset Request",
    text: token.insert_verification_token_one?.token,
    html: `<a href="http://methetethashe.com/verify_email?token=${token.insert_verification_token_one?.token}">Verify your email</b>`,
  });
  if (!isProd) {
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }
};

const transporter = async () => {
  let testAccount: any;
  if (!isProd) {
    testAccount = await nodemailer.createTestAccount();
  }
  const createTransporter = nodemailer.createTransport({
    host: isProd ? process.env.SMTP_HOST : "smtp.ethereal.email",
    port: isProd ? parseInt(process.env.SMTP_PORT!) : 587,
    secure: false,
    auth: {
      user: isProd ? process.env.SMTP_USER : testAccount.user,
      pass: isProd ? process.env.SMTP_PASS : testAccount.pass,
    },
  });
  return createTransporter;
};

export default sendMail;
