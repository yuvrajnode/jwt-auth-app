🔐 JWT Auth Login App

This is a simple full-stack authentication app built using **Node.js**, **Express**, and **JWT** on the backend, with a clean **HTML/CSS + JavaScript frontend** using **Axios** for API calls.

It demonstrates how to create, sign in, and validate users using **JSON Web Tokens**.


 📁 Project Structure

```
W6-auth-app/
│
├── public/
│   └── index.html        # Frontend UI (Signup, Signin, Logout)
│
├── index.js              # Express backend
├── .gitignore
├── package.json
└── README.md
```



⚙️ Features

✅ Signup new users  
✅ Signin existing users  
✅ Get user info using JWT  
✅ JWT is stored in `localStorage`  
✅ Middleware-protected route (`/me`)  
✅ Clean frontend layout  
✅ Logging via middleware  


🧪 Technologies Used

Frontend:
- HTML5, CSS3
- JavaScript
- Axios (via CDN)

Backend:
- Node.js
- Express.js
- JSON Web Token (`jsonwebtoken`)


🚀 Getting Started

1. Clone the repository

```bash
git clone https://github.com/yuvrajnode/jwt-auth-login-api.git
cd jwt-auth-login-api
```

2. Install dependencies

```bash
npm install
```

3. Run the server

```bash
node index.js
```

Visit:  
👉 `http://localhost:3000`


🌐 Frontend Preview

When you open `http://localhost:3000`:

- You can **Signup** → token is generated and stored in `localStorage`
- You can **Signin** → token received on login
- **User info** loads automatically if logged in
- **Logout** clears the token


📦 API Endpoints

| Method | Endpoint      | Description                  |
|--------|---------------|------------------------------|
| POST   | `/signup`     | Register a new user          |
| POST   | `/signin`     | Login and receive a token    |
| GET    | `/me`         | Get logged-in user info (protected) |


🛡️ Authentication Flow

1. User signs up or logs in → receives a **JWT**
2. Token is stored in **`localStorage`**
3. Frontend sends this token in **`Authorization` header**
4. Backend middleware (`auth`) verifies token and extracts user
