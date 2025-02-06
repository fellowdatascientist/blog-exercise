const Blog = require("../modules/blog.module");

const createBlog = async (req, res) => {
    try {
        const { title, description, content, category } = req.body;
        const { _id: userId } = req.user;
        const picture = req.file ? req.file.path : null; 

        const newBlog = new Blog({
            title,
            description,
            content,
            userId,
            picture,
            category
        });

        const savedBlog = await newBlog.save();
        res.status(201).json(savedBlog); 

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating blog', error: error.message });
    }
};

const getAllBlog = async(req,res)=>{
    try {
        const blogs = await Blog.find().populate('userId','name email profilePic').exec();
        res.status(200).json(blogs);
    } catch (error){
        console.error(error);
        res.status(500).json({ message: 'Error fetching blogs', error: error.message });
    }
}
module.exports = {createBlog, getAllBlog}
