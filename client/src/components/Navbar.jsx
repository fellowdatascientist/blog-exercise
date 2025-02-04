import React, { useContext, useEffect, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { IoLogIn } from "react-icons/io5";
import { RiAccountPinCircleLine } from "react-icons/ri";
import assets from "../assets/assets";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { token } = useContext(AuthContext)
    const location = useNavigate();
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate('/login', { state: { from: location.pathname } });
        }
    }, [token, navigate, location]);
    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchTerm);
    };

    return (
        <div className="w-full h-20 flex items-center justify-between bg-white relative dark:bg-[#181A2A]">
            {/* Logo */}
            <NavLink to={"/"}>
                <img
                    src={theme === "light" ? assets.Logo : assets.LogoDark}
                    alt="Logo"
                    className="h-10"
                />
            </NavLink>

            {/* Mobile Controls */}
            <div className="flex items-center md:hidden">
                {/* Theme Toggle */}
                <label className="inline-flex items-center cursor-pointer mr-4 ">
                    <input type="checkbox" className="sr-only peer" onChange={toggleTheme} />
                    <div className="relative w-11 h-6 bg-gray-950 rounded-full peer peer-checked:bg-gray-400 after:absolute after:top-[2px] after:start-[2px] after:bg-white after:h-5 after:w-5 after:rounded-full after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
                {/* Search Icon */}
                <button onClick={() => setSearchOpen(!searchOpen)} className="text-2xl mr-4 text-gray-700 dark:text-white ">
                    <IoSearchSharp />
                </button>

                {/* Hamburger Menu */}
                <button
                    className="text-gray-700 text-2xl dark:text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <GiHamburgerMenu />
                </button>
            </div>

            {/* Mobile Search Bar */}
            {searchOpen && (
                <div className="absolute top-16 left-0 w-full px-6 z-10">
                    <form onSubmit={handleSearch} className="flex items-center bg-slate-100 p-2 rounded-lg">
                        <input
                            className="w-full bg-transparent p-2 outline-none border"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit">
                            <IoSearchSharp className="text-gray-500" size={20} onClick={() => setSearchOpen(!searchOpen)} />
                        </button>
                    </form>
                </div>
            )}

            {/* Mobile Navigation (Sliding Menu) */}
            <div
                className={`z-10 fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"
                    } md:hidden`}
            >
                <button
                    className="absolute top-4 right-4 text-gray-700 text-2xl dark:text-white"
                    onClick={() => setMenuOpen(false)}
                >
                    <IoCloseOutline
                        className={`text-3xl transition-transform duration-300 ease-in-out ${menuOpen ? "rotate-180" : "rotate-0"}`}
                    />
                </button>
                <nav className="flex flex-col items-start space-y-4 p-6 mt-10 text-gray-700 dark:text-white">
                    <NavLink className=" text-lg" to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink className=" text-lg" to="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink>
                    <NavLink className=" text-lg" to="/post" onClick={() => setMenuOpen(false)}>Single Post</NavLink>
                    <NavLink className=" text-lg" to="/pages" onClick={() => setMenuOpen(false)}>Pages</NavLink>
                    <NavLink className=" text-lg" to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
                    <NavLink className=" text-lg" to="/create-post" onClick={() => setMenuOpen(false)}>Create Post</NavLink>

                    {/* Login / Account in Mobile Menu */}
                    <div className="text-xl mt-4 text-gray-700 dark:text-white">
                        {token ? (<NavLink to={"/profile"} className="flex gap-2" onClick={() => setMenuOpen(false)}>
                            <RiAccountPinCircleLine className="w-6 h-7" /><p>Account</p>
                        </NavLink>
                        ) : (<NavLink to={"/login"} className="flex gap-2" onClick={() => setMenuOpen(false)}>
                            <IoLogIn className="w-6 h-7" /><p>Log In</p>
                        </NavLink>
                        )}
                    </div>
                </nav>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-3 md:space-x-10 dark:text-white text-gray-500">
                <NavLink
                    className={({ isActive }) =>
                        `text-sm md:text-base ${isActive ? 'text-black dark:text-red-600 font-semibold' : ''}`
                    }
                    to="/"
                >
                    Home
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `text-sm md:text-base ${isActive ? 'text-black dark:text-red-600 font-semibold' : ''}`
                    }
                    to="/blog"
                >
                    Blog
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `text-sm md:text-base ${isActive ? 'text-black dark:text-red-600 font-semibold' : ''}`
                    }
                    to="/post"
                >
                    Single Post
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `text-sm md:text-base ${isActive ? 'text-black dark:text-red-600 font-semibold' : ''}`
                    }
                    to="/pages"
                >
                    Pages
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `text-sm md:text-base ${isActive ? 'text-black dark:text-red-600 font-semibold' : ''}`
                    }
                    to="/contact"
                >
                    Contact
                </NavLink>
                {token?<NavLink
                    className={({ isActive }) =>
                        `text-sm md:text-base ${isActive ? 'text-black dark:text-red-600 font-semibold' : ''}`
                    }
                    to="/create-post"
                >
                    Create Post
                </NavLink>:''}
            </nav>


            {/* Desktop Search Bar */}
            <div className="hidden md:block relative sm:w-1 md:w-64">
                <form onSubmit={handleSearch} className="flex items-center">
                    <input
                        className="bg-slate-100 h-7 w-full p-5 rounded-xl pl-5 dark:bg-[#242535] dark:text-white"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit" className="absolute right-3">
                        <IoSearchSharp className="text-gray-500" size={20} />
                    </button>
                </form>
            </div>

            {/* Login Icon and Theme Toggle (Desktop Only) */}
            <div className="hidden md:flex items-center space-x-4">
                {/* Login Icon */}
                <div className="text-gray-700 text-xl dark:text-white">
                    {token ? (
                        <NavLink to="/profile"><RiAccountPinCircleLine className="w-6 h-7" /></NavLink>
                    ) : (
                        <NavLink to='/login'><IoLogIn className="w-6 h-7" /></NavLink>
                    )}
                </div>

                {/* Theme Toggle */}
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" onChange={toggleTheme} />
                    <div className="relative w-11 h-6 bg-gray-950 rounded-full peer peer-checked:bg-gray-400 after:absolute after:top-[2px] after:start-[2px] after:bg-white after:h-5 after:w-5 after:rounded-full after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
            </div>
        </div>
    );
};

export default Navbar;
