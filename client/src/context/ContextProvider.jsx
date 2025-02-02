import { BlogProvider } from "./BlogContext";
import { ThemeProvider } from "./ThemeContext";
import { AuthProvider } from "./AuthContext";

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
