const mongoose = require('mongoose');
const {uuid:v4} = require('uuid')

const commentSchema = new mongoose.Schema({
    _id:{
        type:String,
        default:v4
    },
    userId:{type:String, ref:'User'},
    blogId:{type:String, ref:'Blog'},
    content: String,
    createdAt: { type: Date, default: Date.now },
},{
    timestamps:true,
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;