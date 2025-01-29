const express = require('express');

const router = express.Router();

router
.post("/register",(req,res)=>{
    res.send("register")
})
.post("/login",(req,res)=>{
    res.send("login")
})
.post("/logout",(req,res)=>{
    res.send("logout")
})

module.exports = router;