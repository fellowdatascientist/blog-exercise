// CreatePost.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const CreatePost = () => {
  const [newPost, setNewPost] = useState({
    title: '',
    category: '',
    content: '',
  });
  const [img, setImg] = useState('')

  const navigate = useNavigate();

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.title && newPost.category && newPost.content) {
      // Here, you can store or send the data to the server
      alert('Post submitted successfully!');
      // Navigate back to the blog list
      navigate('/');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="w-full h-auto pb-5 dark:text-white p-6">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Create a Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium mb-2 dark:text-white">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none dark:bg-[#242535] dark:text-white dark:border-[#484848]"
            placeholder="Enter blog title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium mb-2 dark:text-white">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={newPost.category}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none dark:bg-[#242535] dark:text-white dark:border-[#484848]"
            placeholder="Enter category"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium mb-2 dark:text-white">Content</label>
          <textarea
            id="content"
            name="content"
            value={newPost.content}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none dark:bg-[#242535] dark:text-white dark:border-[#484848]"
            rows="5"
            placeholder="Write your blog content here..."
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all"
        >
          Submit Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
