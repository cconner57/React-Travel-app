const express = require('express');
const db = require('../db/index');
const bcrypt = require('bcrypt');

const router = express.Router();

router
	.route('/')
	.post(async (req, res, next) => {
		try {
			const { email, password, first_name, last_name } = req.body;
			const hashedPassword = await bcrypt.hash(password, 10);
			const results = await db.query(
				'INSERT INTO users (email, password, first_name, last_name ) VALUES ($1, $2, $3, $4) RETURNING id, first_name, last_name',
				[email, hashedPassword, first_name, last_name]
			);
			res.status(201).json({
				status: 'success',
				data: {
					users: results.rows[0],
					loggedIn: true,
				},
			});
		} catch (err) {
			return next(err);
		}
	});

module.exports = router;
