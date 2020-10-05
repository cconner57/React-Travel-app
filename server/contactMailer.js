const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'covidtrackerapp1@gmail.com',
		pass: 'wynca6-jahveb-Dezqeh', 
	},
});

contactEmail.verify((error) => {
	if (error) {
		console.log(error);
	} else {
		console.log('Ready to Send');
	}
});

router.post('/', (req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const message = req.body.message;
	const mail = {
		from: name,
		to: 'username@example.com',
		subject: 'Contact Form Message',
		html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
	};
	contactEmail.sendMail(mail, (error) => {
		if (error) {
			res.json({ status: 'failed' });
		} else {
			res.json({ status: 'sent' });
		}
	});
});
