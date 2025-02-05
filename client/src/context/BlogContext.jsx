import { createContext, useState } from "react";

const BlogContext = createContext(null); // Default value

const BlogProvider = ({ children }) => {
  const [comment, setComment] = useState([]);
  const [comments, setComments] = useState([]);

  const [blogData, setBlogData] = useState({
    title: "Blog Title",
    description: "Blog Description",
  });

  const data = {
    comment, setComment, blogData, setBlogData, comments, setComments
  }

  return (
    <BlogContext.Provider value={data}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogProvider, BlogContext };
