const nodemailer = require("nodemailer");
const user = require("../controller/registrationController");

const sendMail = async ({email,name}) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",

    auth: {
      user: "shohrab.hossain36@gmail.com",
      pass: "yufv giym rsge qllq",
    },
  });

  try {
    const info = await transporter.sendMail({
      from: "My Blog", // sender address
      to: email, // list of receivers
      subject: "Email Verification", // Subject line
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Email Template</title><style>table{width:100%;border-collapse:collapse}td{padding:10px}.logo{width:50px;height:50px}</style></head><body><table><tr><td style="text-align:center"><img src="https://www.logologo.com/logos/abstract-mollusk-sea-shell-free-logo.jpg" alt="Company Logo" class="logo"></td><td><h2>Hi,${name}</h2><p>Verify your email address by clicking on the link below:<a href="http://localhost:8000/${email}"><strong>Verify Email</strong>Click here</a></p>
      </td></tr></table></body></html>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendMail;
