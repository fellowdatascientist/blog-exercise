import { createContext } from "react";

const BlogContext = createContext();

const BlogProvider = ({children})=>{
    const data = {
        title: "Blog Title",
        description: "Blog Description",
    }
return(
    <BlogContext.Provider value={data} >
        {children}
    </BlogContext.Provider>
)
}
export default BlogProvider;