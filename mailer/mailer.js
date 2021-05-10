const nodemailer = require('nodemailer');

const mailConfig = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'ila.macejkovic@ethereal.email',
        pass: 'RvN77Tnapj9kYUhjK5'
    }
}

module.exports = nodemailer.createTransport(mailConfig);