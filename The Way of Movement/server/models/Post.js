const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    page: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    video: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    sections: [
        {
            title: {
                type: String,
                required: true
            },
        },
    ],
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
