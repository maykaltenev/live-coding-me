const Post = require('../models/Post');

async function handleList(req, res) {
    console.log('Hello from handleList');
    const posts = await Post.find();
    res.send(posts)
}