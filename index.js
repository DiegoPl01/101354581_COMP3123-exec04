// JavaScript source code
// Diego Plata - 101354581
// COMP3123 - Full Stack Development
// Lab 4

// Import necessary modules
const express = require('express');
const app = express();
const port = 3000;

// GET request for /hello
app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
});

// GET request for /user with query parameters
app.get('/user', (req, res) => {
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    const user = { firstname, lastname };
    res.json(user);
});

// POST request for /user with path parameters
app.post('/user/:firstname/:lastname', (req, res) => {
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;
    const user = { firstname, lastname };
    res.json(user);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
