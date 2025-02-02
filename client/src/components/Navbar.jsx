import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { IoLogIn } from "react-icons/io5";
import { RiAccountPinCircleLine } from "react-icons/ri";
import assets from "../assets/assets";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isLogin,setIsLogin] = useState(true) 

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchTerm);
    };

    return (
        <div className="w-full h-20 flex items-center justify-between bg-white relative dark:bg-[#181A2A]">
            {/* Logo */}
            <NavLink to={"/"}><img 
                src={theme === "light" ? assets.Logo : assets.LogoDark}
                alt="Logo"
                className="h-10"
            /></NavLink>

            {/* Mobile Controls */}
            <div className="flex items-center md:hidden">
                {/* Search Icon */}
                <button onClick={() => setSearchOpen(!searchOpen)} className="text-gray-700 text-2xl mr-4">
                    <IoSearchSharp />
                </button>

                {/* Hamburger Menu */}
                <button
                    className="text-gray-700 text-2xl"
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
                            className="w-full bg-transparent p-2 outline-none"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit">
                            <IoSearchSharp className="text-gray-500" size={20} />
                        </button>
                    </form>
                </div>
            )}

            {/* Mobile Navigation (Sliding Menu) */}
            <div
                className={`z-10 fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"
                    } md:hidden`}
            >
                <button
                    className="absolute top-4 right-4 text-gray-700 text-2xl"
                    onClick={() => setMenuOpen(false)}
                >
                    <IoCloseOutline
                        className={`text-3xl transition-transform duration-300 ease-in-out ${menuOpen ? "rotate-180" : "rotate-0"}`}
                    />

                </button>
                <nav className="flex flex-col items-start space-y-4 p-6 mt-10">
                    <NavLink className="text-gray-700 text-lg" to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink className="text-gray-700 text-lg" to="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink>
                    <NavLink className="text-gray-700 text-lg" to="/post" onClick={() => setMenuOpen(false)}>Single Post</NavLink>
                    <NavLink className="text-gray-700 text-lg" to="/pages" onClick={() => setMenuOpen(false)}>Pages</NavLink>
                    <NavLink className="text-gray-700 text-lg" to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
                </nav>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-9 dark:text-white text-gray-500">
                <NavLink className="" to="/">Home</NavLink>
                <NavLink className="" to="/blog">Blog</NavLink>
                <NavLink className="" to="/post">Single Post</NavLink>
                <NavLink className="" to="/pages">Pages</NavLink>
                <NavLink className="" to="/contact">Contact</NavLink>
            </nav>

            {/* Desktop Search Bar */}
            <div className="hidden md:block relative w-64">
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

            {/* Login Icon and Theme Toggle */}
            <div className="flex items-center space-x-4">
                {/* Login Icon */}
                <NavLink to="/login" className="text-gray-700 text-xl dark:text-white">
                    {isLogin?<RiAccountPinCircleLine className="w-6 h-6"/>:<IoLogIn className="w-6 h-6" />}
                </NavLink>  

                {/* Theme Toggle */}
                <label className="hidden md:inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" onChange={toggleTheme} />
                    <div className="relative w-11 h-6 bg-gray-950 rounded-full peer peer-checked:bg-gray-400 after:absolute after:top-[2px] after:start-[2px] after:bg-white after:h-5 after:w-5 after:rounded-full after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
            </div>
        </div>
    );
};

export default Navbar;
