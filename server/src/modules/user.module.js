const mongoose = require('mongoose')
const {uuid:v4} = require('uuid')

const userSchema = mongoose.Schema({
    _id:v4(),
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