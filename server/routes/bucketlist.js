const express = require('express');
const db = require('../db/index');

const router = express.Router();

router
	.route('/')
	.get(async (req, res, next) => {
		try {
			const results = await db.query(
				'SELECT map.id, map.location, map.date, map.plans, users.email FROM map INNER JOIN users ON map.user_id = users.id'
			);
			res.status(200).json({
				status: 'success',
				results: results.rows.length,
				data: {
					markers: results.rows,
				},
			});
		} catch (err) {
			return next(err);
		}
	})
	.post(async (req, res, next) => {
		console.log(req.body);
		try {
			const { date, plans, location, zoom, user_id } = req.body;
			const results = await db.query(
				'INSERT INTO map (date, plans, location, zoom, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
				[date, plans, location, zoom, user_id]
			);
			res.status(201).json({
				status: 'success',
				data: {
					threads: results.rows[0],
				},
			});
		} catch (error) {
			return next(error);
		}
	})
	.patch()
	.delete();

module.exports = router;
