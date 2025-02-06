import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from '../App'
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";

const BlogContext = createContext(null); // Default value

const BlogProvider = ({ children }) => {
  const [comment, setComment] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [blogData, setBlogData] = useState([]);

  const getAllBlog = async () => {
    try {
      const response = await axios.get(`${backendUrl}/v1/api/blog/get-all-blog`);
      console.log(response.data);
      setBlogData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const createBlog = async (formData) =>{
    try {
      const { data } = await axios.post(`${backendUrl}/v1/api/blog/create-blog`, formData, {
        withCredentials: true,
      });
      console.log(data);
      
      if (data.status === 201) {
        toast.success(data.message);
        return data
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to create post');
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getAllBlog();
  }, [])

  const data = {
    comment, setComment, blogData, setBlogData, comments, setComments, getAllBlog, loading, setLoading ,createBlog
  }

  return (
    <BlogContext.Provider value={data}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogProvider, BlogContext };
