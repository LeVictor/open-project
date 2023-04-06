const nodemailer = require('nodemailer');
const nodemailerConfig = require('./nodemailerConfig')

const sendEmail = async ({ to, subject, html }) => {

    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport(nodemailerConfig);

    return transporter.sendMail({
        from: '"The Onca 🐆" <hello@onca.studio>', // sender address
        to, 
        subject,
        html,
      });
}

module.exports = sendEmail;