const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const blogSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    userId: {
        type: String, 
        ref: "User",
        required: true
    },
    publishedAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    picture: {
        type: String,
        default: ""
    },
    category: {
        type: String,
        default: ""
    },
    tags: {
        type: [String], 
        default: []
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: {
        type: [
            {
                userId: { type: String, ref: "User" }, 
                text: String,
                createdAt: { type: Date, default: Date.now }
            }
        ],
        default: []
    }
}, { timestamps: true });

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
