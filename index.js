const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');
const app = express();

const JWT_SECRET = "yuvrajnode";
app.use(express.json());
app.use(express.static('public')); // serve index.html and assets

const users = [];

function logger(req, res, next) {
    console.log(`${req.method} request came to ${req.url}`);
    next();
}

function auth(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Token not provided" });
    }

    try {
        const decodedData = jwt.verify(token, JWT_SECRET);
        req.username = decodedData.username;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
}

// Serve homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Signup route (returns token)
app.post('/signup', logger, (req, res) => {
    const { username, password } = req.body;

    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.json({ message: "Username already exists! Enter correctly" });
    }

    users.push({ username, password });

    const token = jwt.sign({ username }, JWT_SECRET);
    res.json({ message: "You are signed up", token });
});

// Signin route (returns token)
app.post('/signin', logger, (req, res) => {
    const { username, password } = req.body;

    const foundUser = users.find(user => user.username === username && user.password === password);

    if (!foundUser) {
        return res.json({ message: "Your credentials are incorrect... recheck" });
    }

    const token = jwt.sign({ username }, JWT_SECRET);
    res.json({ token });
});

// Protected route to get current user info
app.get('/me', logger, auth, (req, res) => {
    const foundUser = users.find(user => user.username === req.username);

    if (!foundUser) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json({
        username: foundUser.username
        // Don't send password here for security reasons
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});