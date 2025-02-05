const express = require('express');
const { createBlog, getAllBlog } = require('../controllers/blog.controller');
const authMiddleware = require('../middlewares/auth.middleware'); // Example middleware
const upload = require('../middlewares/multer.middleware');

const router = express.Router();

router.post("/create-blog", upload.single('picture'), authMiddleware, createBlog);

router.get('/get-all-blog',getAllBlog)

module.exports = router;
