const express = require('express');
const db = require('../db/index');
const bcrypt = require('bcrypt');

const router = express.Router();

router.route('/').post(async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const result = await db.query(
			'SELECT password FROM users WHERE email = $1',
			[email]
		);
		let user = result.rows[0];
		if (user) {
			if ((await bcrypt.compare(password, user.password)) === true) {
				const userData = await db.query(
					'SELECT id, first_name, last_name FROM users WHERE email = $1',
					[email]
				);
				res.status(201).json({
					status: 'success',
					data: {
						users: userData.rows[0],
						loggedIn: true,
					},
				});
			}
		}
	} catch (error) {
		return next(error);
	}
});

module.exports = router;
