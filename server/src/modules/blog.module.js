const mongoose = require('mongoose');
const {uuid:v4} = require('uuid');

const blogSchema = mongoose.Schema({
    _id:v4(),
    title:String,
    content:String,
    userId:{type:String,ref:"User"},
    publishedAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now}
});

const Blog = mongoose.Schema("Blog",blogSchema);

module.exports = Blog;