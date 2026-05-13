# 🔐 Node.js Session Authentication

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

```
project/
│
├── server.js
├── package.json
└── node_modules
```

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/ashokkumar2005/node-session-auth.git
```

### 2. Navigate to the project folder

```bash
cd node-session-auth
```

### 3. Install dependencies

```bash
npm install
```

---

## ▶️ Run the Server

```bash
node server.js
```

Server will start at:

👉 http://localhost:3000

---

## 📡 API Endpoints

### 🔐 Login

**POST** `/loginuser`

#### Example Request Body

```json
{
  "username": "ashok",
  "password": 123
}
```

---

### 📊 Dashboard (Protected Route)

**GET** `/dashboard`

* Returns a welcome message if the user session exists
* Otherwise, access will be denied

---

### 🚪 Logout

**GET** `/logout`

* Destroys the user session
* Logs out the user

---

## 🎯 Learning Purpose

This project was created to **practice session-based authentication** in Express.js.
It helps beginners understand:

* How sessions work
* How authentication is handled
* How protected routes are implemented in backend applications

---

## 👨‍💻 Author

**Ashok Kumar**

🔗 GitHub: https://github.com/ashokkumar2005

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
