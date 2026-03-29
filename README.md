# MERN Starter (Vite + React + TypeScript + Node)

A clean and minimal **MERN starter project** with a modern setup:

* ⚛️ **Frontend:** Vite + React + TypeScript
* 🟢 **Backend:** Node.js + TypeScript
* 🔗 Ready for MongoDB integration
* 📁 Organized into `client` and `server` folders

This project is designed to be a **simple, scalable starting point** for full-stack applications.

---

# 📁 Project Structure

```
root/
│
├── client/        # Frontend (Vite + React + TS)
│   ├── src/
│   ├── public/
│   └── ...
│
├── server/        # Backend (Node + TS)
│   ├── src/
│   └── ...
│
└── README.md
```

---

# 🚀 Getting Started

## 1. Clone the repository

```
git clone <your-repo-url>
cd <project-name>
```

---

## 2. Install dependencies

Install separately for client and server:

```
cd client
pnpm install

cd ../server
pnpm install
```

*(You can use `npm` or `yarn` if you prefer)*

---

# 🖥️ Running the App

## ▶️ Start the backend

```
cd server
pnpm dev
```

Runs the server (typically on `http://localhost:5000`)

---

## ⚛️ Start the frontend

```
cd client
pnpm dev
```

Runs the Vite dev server (typically on `http://localhost:5173`)

---

# 🔗 Connecting Client & Server

In the frontend, use environment variables:

**client/.env**

```
VITE_API_URL=http://localhost:5000
```

Example usage:

```ts
fetch(`${import.meta.env.VITE_API_URL}/api`)
```

---

# ⚙️ Tech Stack

## Frontend

* Vite
* React
* TypeScript

## Backend

* Node.js
* TypeScript
* Express (recommended, but optional)

## Database (optional)

* MongoDB (not included by default)

---

# 📦 Scripts

## Client

```
pnpm dev        # Start dev server
pnpm build      # Build for production
pnpm preview    # Preview production build
```

## Server

```
pnpm dev        # Start with hot reload (tsx / nodemon)
pnpm build      # Compile TypeScript
pnpm start      # Run compiled server
```

