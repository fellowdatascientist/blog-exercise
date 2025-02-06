import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from '../App'
import { toast } from 'react-hot-toast';

const BlogContext = createContext(null); // Default value

const BlogProvider = ({ children }) => {
  const [comment, setComment] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [blogData, setBlogData] = useState([]);

  const getAllBlog = async () => {
    try {
      const response = await axios.get(`${backendUrl}/v1/api/blog/get-all-blog`);
      setBlogData(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  const getBlog = async(id)=>{
    try {
      const response = await axios.get(`${backendUrl}/v1/api/blog/get-blog/${id}`)
      console.log(response.data);
       return  response.data.blog;
    } catch (error) {
      console.error(error);
    }
  }

  const createBlog = async (formData) =>{
    try {
      const { data , status } = await axios.post(`${backendUrl}/v1/api/blog/create-blog`, formData, {
        withCredentials: true,
      });
      if(status === 201){
        toast.success(data.message);
        return data.blog;
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
    comment, setComment, blogData, setBlogData, comments, setComments, getAllBlog, loading, setLoading ,createBlog,getBlog
  }

  return (
    <BlogContext.Provider value={data}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogProvider, BlogContext };
