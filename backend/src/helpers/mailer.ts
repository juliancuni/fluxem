import nodemailer from "nodemailer";

const isProd = process.env.NODE_ENV === "production" ? true : false;

const sendMail = async () => {
  console.log(isProd);
  const transport = await transporter();
  const info = await transport.sendMail({
    from: '"Fluxem 👻" <info@microservices.al>',
    to: "julian.cuni@microservices.al",
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
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
