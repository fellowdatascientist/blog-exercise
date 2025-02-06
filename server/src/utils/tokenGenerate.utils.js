const jwt = require('jsonwebtoken');

const generateToken = async(res, _id) => {
    
    if(!process.env.JWT_SECRET_KEY){
        throw new Error("JWT_SECRET_KEY is not defined in environment variables");
    }
    const token = jwt.sign({ _id }, process.env.JWT_SECRET_KEY, { expiresIn: '12h' });

    await res.cookie("token", token, {
        httpOnly: true,
        maxAge: 12 * 60 * 60 * 1000,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? "None" : "Strict",
    });    
    console.log(token);
    
    return token;
}

module.exports = generateToken;
