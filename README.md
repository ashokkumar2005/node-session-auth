# Node.js Session Authentication

This project is a simple authentication system built using Node.js and Express.js. It demonstrates how to implement login authentication using express-session.

## Features

- User login authentication
- Session management using express-session
- Protected routes (Dashboard)
- Logout functionality
- JSON request handling

## Technologies Used

- Node.js
- Express.js
- express-session
- JavaScript

## Project Structure

project
│
├── server.js
├── package.json
└── node_modules

## Installation

1. Clone the repository

git clone https://github.com/ashokkumar2005/node-session-auth.git

2. Navigate to project folder

cd node-session-auth

3. Install dependencies

npm install

4. Run the server

node server.js

Server will start at:

http://localhost:3000

## API Endpoints

### Login

POST /loginuser

Example Request Body:

{
 "username": "ashok",
 "password": 123
}

### Dashboard (Protected Route)

GET /dashboard

Returns welcome message if user session exists.

### Logout

GET /logout

Destroys the user session.

## Learning Purpose

This project is created to practice backend authentication using sessions in Express.js.
