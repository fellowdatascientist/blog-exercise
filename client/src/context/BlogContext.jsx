import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from '../App'

const BlogContext = createContext(null); // Default value

const BlogProvider = ({ children }) => {
  const [comment, setComment] = useState([]);
  const [comments, setComments] = useState([]);

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
  useEffect(() => {
    getAllBlog();
  }, [])

  const data = {
    comment, setComment, blogData, setBlogData, comments, setComments, getAllBlog
  }

  return (
    <BlogContext.Provider value={data}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogProvider, BlogContext };
