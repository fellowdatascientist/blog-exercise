const mongoose = require('mongoose')
const {v4:uuid} = require('uuid')

const userSchema = new mongoose.Schema({
    _id:{
        type:String,
        default:uuid
    },
    name: String,
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: String,
},{
    timestamps:true,
})

const User = mongoose.model('User',userSchema);
module.exports = User;