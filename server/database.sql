CREATE DATABASE travel;

CREATE TABLE map(
    id SERIAL PRIMARY KEY,
    location VARCHAR(50) NOT NULL,
    date VARCHAR(10) NOT NULL,
    plans VARCHAR(500) NOT NULL,
    zoom INTEGER NOT NULL,
    user_id INTEGER NOT NULL REFERENCES users (id),
    created_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    password VARCHAR NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE category(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE post(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    message VARCHAR(500) NOT NULL,
    user_id INTEGER NOT NULL REFERENCES users(id),
    category_id INTEGER NOT NULL REFERENCES thread(id),
    created_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE comment(
    id SERIAL PRIMARY KEY,
    message VARCHAR NOT NULL,
    user_id INTEGER NULL REFERENCES users (id),
    post_id INTEGER NOT NULL REFERENCES post (id),
    created_at TIMESTAMP DEFAULT current_timestamp
);