const jwt = require('jsonwebtoken');

const generateToken = async(res, _id) => {
    
    if(!process.env.JWT_SECRET_KEY){
        throw new Error("JWT_SECRET_KEY is not defined in environment variables");
    }
    const token = jwt.sign({ _id }, process.env.JWT_SECRET_KEY, { expiresIn: '12h' });
    

    res.cookie("token", token, {
        httpOnly: true, // Cookie is accessible only by the server, preventing XSS attacks
        maxAge: 15 * 24 * 60 * 60 * 1000, // Cookie expiration in milliseconds (15 days)
        sameSite: "lax", // Prevents CSRF attacks by restricting cross-site requests
        secure: process.env.NODE_ENV !== "development", // Cookie is sent only over HTTPS in production
    });

    return token;
}

module.exports = generateToken;
