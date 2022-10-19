const nodemailer = require("nodemailer");

// send mail with defined transport object
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "nehuenxtreem6@gmail.com", // generated ethereal user
    pass: "zphsvnijzrlkqfun", // generated ethereal password
  },
});

transporter
  .verify()
  .then(() => {
    console.log("Listo para enviar!");
  })
  .catch();
  
/////////////////FUNC LISTA PARA ENVIAR MAILS/////////////////////////
const infoTransporter = async (fromTitle, toList, subject, html) => {
  transporter
    .sendMail({
      from: `"${fromTitle}" <nehuenxtreem6@gmail.com>`, // sender address
      to: `${toList}`, // list of receivers
      subject: `${subject}`, // Subject line
      html: `${html}`, // html body
    })
    .then(() => {
      console.log("transport OK");
    })
    .catch(() => {
      console.log("transporter catch");
    });
};
module.exports = infoTransporter;
