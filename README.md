# Node.js Session Authentication 🔐

This project is a simple **authentication system** built using **Node.js and Express.js**.
It demonstrates how login authentication works using **express-session** and how to protect routes using user sessions.

---

## 🚀 Features

* User login authentication
* Session management using express-session
* Protected route (Dashboard)
* Logout functionality
* JSON request handling
* Beginner-friendly project structure

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* express-session
* JavaScript

---

## 📂 Project Structure

project/

│
├── server.js
├── package.json
└── node_modules

---

## 📦 Installation

### 1. Clone the repository

git clone https://github.com/ashokkumar2005/node-session-auth.git

### 2. Navigate to the project folder

cd node-session-auth

### 3. Install dependencies

npm install

---

## ▶️ Run the Server

node server.js

Server will start at:

http://localhost:3000

---

## 📡 API Endpoints

### 🔐 Login

POST /loginuser

Example Request Body:

{
"username": "ashok",
"password": 123
}

---

### 📊 Dashboard (Protected Route)

GET /dashboard

Returns a welcome message if the user session exists.

---

### 🚪 Logout

GET /logout

Destroys the user session and logs out the user.

---

## 🎯 Learning Purpose

This project was created to **practice session-based authentication** in Express.js.
It helps beginners understand how sessions work and how protected routes are implemented in backend applications.

---

## 👨‍💻 Author

Ashok Kumar

GitHub:
https://github.com/ashokkumar2005

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.
