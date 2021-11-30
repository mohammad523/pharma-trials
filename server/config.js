/** @format */

const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

let transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true,

	auth: {
		user: "rtrialsww@gmail.com",
		pass: "rtrialsww??!",
	},
	tls: {
		secureProtocol: "TLSv1_method",
	},
});

transporter.verify((err, success) => {
	err
		? console.log("error", err)
		: console.log(`=== Server is ready to take messages: ${success} ===`);
});

module.exports = transporter;
