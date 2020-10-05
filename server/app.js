const express = require('express');

const ExpressError = require('./helpers/ExpressError');

const usersRoutes = require('./routes/users');
const discussionRoutes = require('./routes/discussion');
const bucketlistRoutes = require('./routes/bucketlist');
const authRoutes = require('./routes/auth');

const morgan = require('morgan');

const app = express();

app.use(express.json());

// logging system
app.use(morgan('tiny'));

app.use('/users', usersRoutes);
app.use('/discussion', discussionRoutes);
app.use('/bucketlist', bucketlistRoutes);
app.use('/', authRoutes);

/** 404 handler */

app.use(function (req, res, next) {
	const err = new ExpressError('Not Found', 404);
	return next(err);
});

/** general error handler */

app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	console.error(err.stack);

	return res.json({
		status: err.status,
		message: err.message,
	});
});

module.exports = app;
