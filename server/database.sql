CREATE DATABASE travel;

CREATE TABLE user(
    user_id SERIAL PRIMARY KEY,
    description VARCHAR(20)
);

CREATE TABLE map(
    pin_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
)

CREATE TABLE discussion(
    post_id SERIAL PRIMARY KEY,
    post VARCHAR(255)
)

