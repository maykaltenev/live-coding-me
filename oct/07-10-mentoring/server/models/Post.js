const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        require: true,
    },
    likes: { type: Number },
    dateCreated: {
        type: Date,
        default: Date.now
    }
})
const Post = mongoose.model(`Post`, postSchema);

module.exports = Post;