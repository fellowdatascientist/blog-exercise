const User = require('../modules/user.module')
const validateEmail = require('../utils/emailValidation')
const bcrypt = require('bcrypt')
const register = async(req,res)=>{
    try {
        const {email,password,userName} = req.body
        if(!validateEmail(email)){
            return res.status(400).json({ message: "Invalid email" })
        }

        const existEmail = await User.findOne({email})
        if(existEmail) return res.status(400).json({message:"Email already exists"})
        const hasedPassword = await bcrypt.hash(password,10)
    res.json({
        message:"User created successfully",
        email,password:hasedPassword,userName
    })
    const user = new User({
        userName,
        email,
        password:hashpassword,
    })

    await user.save()
    
    } catch (error) {
        res.json({
            message: "Error creating user",

        })
    }
}

const login = async(req,res)=>{
    console.log("Login")
    res.send("Login")
}

const logout = async(req,res)=>{
    console.log("Logout")
    res.send("Logout")
}

module.exports = {register,login,logout}