const User = require('../modules/user.module')
const validateEmail = require('../utils/emailValidation.utils')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const genarateToken = require('../utils/tokenGenerate.utils');

const register = async (req, res) => {
    try {
        const { email, password, name } = req.body

        if (!validateEmail(email)) {
            return res.status(400).json({ message: "Invalid email" })
        }

        const existEmail = await User.findOne({ email })

        if (existEmail) return res.status(400).json({ message: "Email already exists" })
            
        if (password.length <= 8) {
            return res.status(400).json({ message: "Password must be at least 8 characters" })
        }
        const hashpassword = await bcrypt.hash(password, 10)

        const user = new User({
            name,
            email,
            password: hashpassword,
        })

        await user.save()
        res.status(201).json({
            message: "User created successfully",
            email, name
        })
    } catch (error) {
        res.json({
            message: "Error creating user",
            error: error.message

        })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })

        if (!user) return res.status(400).json({ message: "Invalid email or password" })

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) return res.status(400).json({ message: "Invalid email or password" })
        const token = genarateToken(res, user._id)
        res.json({
            message: "Logged in successfully",
            token
        });
    } catch (error) {
        console.error("Error Login user ", error.message)
    }
}

const logout = async (req, res) => {
    try {
        res.cookie('token', '', {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 0
        })
        res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ message: "Error in logout", error: error.message });
    }
}

module.exports = { register, login, logout }