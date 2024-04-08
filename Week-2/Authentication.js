const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Sample user data (usually stored in a database)
const users = [
    {
        id: 1,
        username: 'user1',
        password: '$2b$10$9D4X0jOAX7HhRDn1pbbFveT.wkO.5nrSZF6PXH6Hk4C61ZzOL4W9G' // Hashed password: 'password'
    },
    {
        id: 2,
        username: 'user2',
        password: '$2b$10$c5RfhLBYfC/g5ZVjRGObnOTI8DcmA4PLfCmM/x6TeqF7R4/sYqD1G' // Hashed password: '123456'
    }
];

// Route for user login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Find user by username
    const user = users.find(user => user.username === username);

    // If user not found or password doesn't match, return error
    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    // If username and password are correct, return success
    res.json({ message: 'Login successful', user });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
