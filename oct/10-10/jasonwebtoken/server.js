require('dotenv').config()
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json())
const posts = [
    {
        username: 'Kyle',
        title: 'Post 1',
    },
    {
        username: 'Jim',
        title: 'Post 1',
    }
]
app.post('/posts', (req, res) => {
    res.json(posts)
})
app.post('/login', (req, res) => {
    // Authenticate User
    const username = req.body.username;
    const user = { name: username };

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken: accessToken });
})
app.listen(3000)