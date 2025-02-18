const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: ""
    },
    blog: [{
        type: String, 
        ref: "Blog"
    }]
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;
