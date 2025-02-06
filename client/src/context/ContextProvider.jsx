import { BlogProvider } from "./BlogContext";
import { ThemeProvider } from "./ThemeContext";
import { AuthProvider } from "./AuthContext";

const ContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <BlogProvider>{children}</BlogProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default ContextProvider;
