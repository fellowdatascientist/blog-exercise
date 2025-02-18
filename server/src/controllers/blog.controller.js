const Blog = require("../modules/blog.module");
const User = require("../modules/user.module");

const createBlog = async (req, res) => {
    try {
        const { title, content, category } = req.body;
        const { _id: userId } = req.user;
        const picture = req.file ? req.file.path : null;

        // Create a new Blog instance
        const newBlog = new Blog({
            title,
            content,
            userId,
            picture,
            category
        });

        const savedBlog = await newBlog.save();

        // Find the user and update their blog list
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        user.blog.push(savedBlog._id);
        await user.save();

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

const deteteBlog = async (req,res)=>{
    try {
        const blogId = req.params.id
        console.log(blogId);
        const blog = await Blog.findByIdAndDelete(blogId)
        console.log(blog)
        res.status(200).json({
            message: "Blog deleted successfully",blog
        })

    } catch (error) {
        console.log(error)
    }
}

const getTodayBlog = async (req,res)=>{
    try {
        const date = new Date("2025-02-12")
        console.log(date)
        const blog = await Blog.find({publishedAt:"2025-02-12"})
        res.status(200).json(blog);
    } catch (error) {
        console.log(error)
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
module.exports = { createBlog, getAllBlog, getBlogById ,getTodayBlog,deteteBlog}
