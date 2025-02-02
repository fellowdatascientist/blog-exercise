import { createContext, useState } from "react";

const BlogContext = createContext(null); // Default value

const BlogProvider = ({ children }) => {
  const [blogData, setBlogData] = useState({
    title: "Blog Title",
    description: "Blog Description",
  });

  return (
    <BlogContext.Provider value={{ blogData, setBlogData }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogProvider, BlogContext };
