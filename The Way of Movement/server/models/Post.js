const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    // page: {
    //     type: String,
    //     required: true
    // },
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
    content: {
        type: String,
        require: true,
        trim: true
    }
    // sections: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Section',
    // }],
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
