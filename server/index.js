/** @format */

const path = require("path");
const express = require("express");
const multiparty = require("multiparty");
const transporter = require("./config");
const dotenv = require("dotenv");
dotenv.config();

// creating the express app
const app = express();

// setting up the json parser
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});

// creating the post request handler below
// will be sent to the /send url
app.post("/send", (req, res) => {
	try {
		const mailOptions = {
			from: req.body.email, // sender address
			to: process.env.email, // list of receivers
			subject: req.body.comments, // Subject line
			html: `
        <p>You have a new contact request.</p>
        <h3>Contact Details</h3>
        <ul>
          <li>Name: ${req.body.name}</li>
          <li>Email: ${req.body.email}</li>
          <li>Phone: ${req.body.phone}</li>
          <li>Comments: ${req.body.comments}</li>
        </ul>
        `,
		};

		transporter.sendMail(mailOptions, function (err, info) {
			if (err) {
				res.status(500).send({
					success: false,
					message: "Something went wrong. Try again later",
				});
			} else {
				res.send({
					success: true,
					message: "Thanks for contacting us. We will get back to you shortly",
				});
			}
		});
	} catch (error) {
		res.status(500).send({
			success: false,
			message: "Something went wrong. Try again later",
		});
	}
});
// this will listen to requests on port 3030
app.listen(3030, () => {
	console.log("server started on port 3030");
});

// add new scripts to package.json!
