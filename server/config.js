require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY || 'Rhodes';

const PORT = +process.env.PORT || 5000;

let DB_URI;

if (process.env.NODE_ENV === 'Rhodes') {
	DB_URI = 'travel-test';
} else {
	DB_URI = process.env.DATABASE_URL || 'travel';
}

const BCRYPT_WORK_FACTOR = 12;

module.exports = {
	SECRET_KEY,
	PORT,
	DB_URI,
	BCRYPT_WORK_FACTOR
};
