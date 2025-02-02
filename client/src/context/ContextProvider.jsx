import BlogProvider from "./BlogContext";
import ThemeProvider from "./ThemeContext";

const ContextProvider = ({ children }) => {
    return (
        <ThemeProvider>
            <AuthProvider>
                <BlogProvider>
                    {children}
                </BlogProvider>
            </AuthProvider>
        </ThemeProvider>
    );
};

export default ContextProvider;
