const register = async(req,res)=>{
    console.log("Register")
    res.send("Register")
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