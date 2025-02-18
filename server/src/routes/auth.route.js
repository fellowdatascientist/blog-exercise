const express = require('express');
const { register, login, logout, authorProfile } = require('../controllers/auth.controller');
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router
.post("/register",register)
.post("/login",login)
.post("/logout",logout)
.get('/author/:_id',authMiddleware,authorProfile)

module.exports = router;