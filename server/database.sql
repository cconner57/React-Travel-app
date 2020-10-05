CREATE DATABASE travel;

CREATE TABLE users(
    email TEXT PRIMARY KEY,
    password TEXT NOT NULL,
    first_name TEXT,
    last_name TEXT,
    created_at TIMESTAMP DEFAULT current_timestamp,
);

CREATE TABLE map(
    id SERIAL PRIMARY KEY,
    location TEXT NOT NULL,
    date TEXT NOT NULL,
    plans TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT current_timestamp,
);

CREATE TABLE thread(
    id SERIAL PRIMARY KEY,
    category TEXT NOT NULL REFERENCES users ON DELETE CASCADE,
    thread TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT current_timestamp,
);

CREATE TABLE post(
    id SERIAL PRIMARY KEY,
    category TEXT NOT NULL REFERENCES users ON DELETE CASCADE,
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT current_timestamp,
);

CREATE TABLE comment(
    id SERIAL PRIMARY KEY,
    category TEXT NOT NULL REFERENCES users ON DELETE CASCADE,
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    user id
    created_at TIMESTAMP DEFAULT current_timestamp,
);

foreign key construct