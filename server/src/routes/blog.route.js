const express = require('express');
const { createBlog, getAllBlog, getBlogById, getTodayBlog, deteteBlog } = require('../controllers/blog.controller');
const authMiddleware = require('../middlewares/auth.middleware'); // Example middleware
const upload = require('../middlewares/multer.middleware');

const router = express.Router();

router.post("/create-blog", upload.single('picture'), authMiddleware, createBlog);

router.get('/get-all-blog',getAllBlog)

router.get('/get-blog/:id',getBlogById)

router.get('/todayBlog',getTodayBlog)

router.get('/delete-blog/:id',deteteBlog)

module.exports = router;
