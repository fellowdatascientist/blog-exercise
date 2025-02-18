import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import BlogLayout from "./layout/BlogLayout";
import PagesLayout from "./layout/PagesLayout";
import ContactLayout from "./layout/ContactLayout";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import AuthorProfile from "./pages/AuthorProfile";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
export const backendUrl = import.meta.env.VITE_BACKEND_URL;
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import CreatePost from "./pages/CreatePost";
import Blog from "./pages/Blog";
import SinglePage from "./pages/SinglePage";
import "aos/dist/aos.css";
import 'react-quill/dist/quill.snow.css';


function App() {
  const { token } = useContext(AuthContext)
  const Router = createBrowserRouter(
    createRoutesFromElements(<>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        {token ? <Route path="create-post" element={<CreatePost />} /> : ""}
        <Route path="login" element={<LoginPage />} />
        <Route path="blog" element={<BlogLayout />} >
          <Route index element={<Blog />} />
          <Route path=":id" element={<SinglePage />} />
        </Route>
        <Route path="pages" element={<PagesLayout />} />
        <Route path="contact" element={<ContactLayout />} />
        {token ? <Route path="profile" element={<Profile />} /> : ""}
        <Route path="author-profile" element={<AuthorProfile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
    )
  );

  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
