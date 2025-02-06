const Blog = require("../modules/blog.module");

const createBlog = async (req, res) => {
    try {
        const { title, content, category, } = req.body;
        const { _id: userId } = req.user;
        const picture = req.file ? req.file.path : null;

        const newBlog = new Blog({
            title,
            content,
            userId,
            picture,
            category
        });

        const savedBlog = await newBlog.save();
        res.status(201).json({
            message: "Blog created successfully",
            blog: savedBlog
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating blog', error: error.message });
    }
};

const getAllBlog = async (req, res) => {
    try {
        const blogs = await Blog.find().populate('userId', 'name email profilePic').exec();
        res.status(200).json(blogs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching blogs', error: error.message });
    }
}

const getBlogById = async (req, res) => {
    try {
        const blogId = req.params.id;
        const blog = await Blog.findById(blogId).populate('userId', 'name email profilePic').
            populate('comments.userId', 'name email profilePic').exec();
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json(blog);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching blog', error: error.message });
    }
}
module.exports = { createBlog, getAllBlog, getBlogById }
