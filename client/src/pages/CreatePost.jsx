import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import toast from 'react-hot-toast';
import 'react-quill/dist/quill.snow.css';
import { IoMdClose } from "react-icons/io"
import { BlogContext } from '../context/BlogContext';

const CreatePost = () => {
  const { loading, setLoading, createBlog } = useContext(BlogContext);
  const navigate = useNavigate();
  const [postData, setPostData] = useState({
    title: '',
    category: '',
    content: '',
  });
  const [image, setImage] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(false);

  // Handle text input changes
  const handleInputChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  // Handle content change from ReactQuill
  const handleContentChange = (value) => {
    setPostData({ ...postData, content: value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
    } else {
      toast.error('Please upload a valid image file');
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!postData.title || !postData.category || !postData.content || !image) {
      toast.error('Please fill all fields and select an image');
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('title', postData.title);
    formData.append('category', postData.category);
    formData.append('content', postData.content);
    formData.append('picture', image);

    const blog = await createBlog(formData);
    navigate(`/blog/${blog._id}`);
  };

  // ReactQuill toolbar configuration
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image', 'video', 'code-block'],
      ['clean'],
    ],
  };

  return (
    <div className="w-full h-auto pb-5 dark:text-white p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 dark:text-white">Create a New Blog Post</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium">Featured Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-700 dark:file:text-gray-100"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Post Title</label>
          <input
            type="text"
            name="title"
            value={postData.title}
            onChange={handleInputChange}
            placeholder="Enter post title"
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Category</label>
          <input
            type="text"
            name="category"
            value={postData.category}
            onChange={handleInputChange}
            placeholder="Enter category"
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Post Content</label>
          <div className="border rounded-lg dark:border-gray-700">
            <ReactQuill
              theme="snow"
              value={postData.content}
              onChange={handleContentChange}
              modules={modules}
              className="dark:bg-gray-800 dark:text-white rounded-lg"
              placeholder="Write your post content here..."
            />
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setPreviewOpen(true)}
            className="w-full py-3 px-4 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
          >
            Preview
          </button>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Publishing...' : 'Publish Post'}
          </button>
        </div>
      </form>

      {/* Preview Modal */}
      {previewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center h-screen z-50">
          <div className="relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-3xl max-h-[80vh] overflow-y-auto">

            {/* Close Button */}
            <button
              onClick={() => setPreviewOpen(false)}
              className="absolute top-3 right-3 dark:bg-white dark:hover:bg-gray-100 dark:text-black text-sm p-1 rounded-full transition duration-200"
            >
              <IoMdClose/>
            </button>

            <h2 className="text-2xl font-bold mb-4">{postData.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Category: {postData.category}</p>

            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
            )}

            <div
              className="dark:text-white blog-content"
              dangerouslySetInnerHTML={{ __html: postData.content }}
            />

            <button
              onClick={() => setPreviewOpen(false)}
              className="mt-4 w-full py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition"
            >
              Close Preview
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default CreatePost;
