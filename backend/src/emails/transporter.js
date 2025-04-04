import nodemailer from "nodemailer";

// // verify SMTP connection configuration
// transporter.verify(function (error, success) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Server is ready to take our messages");
//   }
// });

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export function sendEmail(from, to, subject, object) {
  transporter.sendMail({
    from: from,
    to: to,
    subject: subject,
    text: object,
  });
}
