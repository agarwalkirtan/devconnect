# 🔗 DevConnect

A RESTful backend application for a developer-focused social platform — built with **Node.js**, **Express**, and **MongoDB**. DevConnect allows developers to register, authenticate, manage profiles, and share posts.

---

## 🚀 Features

- 🔐 JWT-based authentication (register, login, logout)
- 👤 User profile management
- 📝 Create, read, update, and delete posts
- 🍪 Cookie-based session handling
- 🎨 Server-side rendering with EJS templates
- 🌱 Environment-based configuration with dotenv

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js |
| Framework | Express.js v5 |
| Database | MongoDB + Mongoose |
| Auth | JWT + bcryptjs |
| View Engine | EJS |
| Dev Tool | Nodemon |

---

## 📁 Project Structure

```
devconnect/
├── config/
│   └── db.js               # MongoDB connection
├── routes/
│   ├── auth.routes.js      # /api/auth
│   ├── user.routes.js      # /api/users
│   ├── post.routes.js      # /api/posts
│   └── view.routes.js      # / (EJS views)
├── views/                  # EJS templates
├── app.js                  # Express app setup
├── server.js               # Entry point
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/devconnect.git
cd devconnect

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your values

# 4. Start the development server
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/devconnect
JWT_SECRET=your_secret_key_here
```

---

## 📡 API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT |
| POST | `/api/auth/logout` | Logout user |
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get user by ID |
| PUT | `/api/users/:id` | Update user profile |
| GET | `/api/posts` | Get all posts |
| POST | `/api/posts` | Create a new post |
| PUT | `/api/posts/:id` | Update a post |
| DELETE | `/api/posts/:id` | Delete a post |

---

## 📜 License

This project is licensed under the **ISC License**.

---

> Built with ❤️ by [Your Name](https://github.com/your-username)
