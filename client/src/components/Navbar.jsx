import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoSearchSharp, IoLogIn } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import assets from "../assets/assets";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { token, handleLogout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]);

    return (
        <div className="w-full h-20 flex items-center justify-between bg-white relative dark:bg-[#181A2A] px-5 z-10">
            {/* Logo */}
            <NavLink to="/">
                <img
                    src={theme === "light" ? assets.Logo : assets.LogoDark}
                    alt="Logo"
                    className="h-8 lg:h-10"
                />
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:space-x-5 lg:space-x-10 dark:text-white text-gray-500">
                <NavLink to="/" className={({ isActive }) => `md:text-sm lg:text-base ${isActive ? 'text-black dark:text-red-600 font-semibold' : ''}`}>
                    Home
                </NavLink>
                <NavLink to="/blog" className={({ isActive }) => `md:text-sm lg:text-base ${isActive ? 'text-black dark:text-red-600 font-semibold' : ''}`}>
                    Blog
                </NavLink>
                <NavLink to="/blog/single Page" className={({ isActive }) => `md:text-sm lg:text-base ${isActive ? 'text-black dark:text-red-600 font-semibold' : ''}`}>
                    Single Post
                </NavLink>
                <NavLink to="/pages" className={({ isActive }) => `md:text-sm lg:text-base ${isActive ? 'text-black dark:text-red-600 font-semibold' : ''}`}>
                    Pages
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => `md:text-sm lg:text-base ${isActive ? 'text-black dark:text-red-600 font-semibold' : ''}`}>
                    Contact
                </NavLink>
                {token && (
                    <NavLink to="/create-post" className={({ isActive }) => `md:text-sm lg:text-base ${isActive ? 'text-black dark:text-red-600 font-semibold' : ''}`}>
                        Create Post
                    </NavLink>
                )}
            </nav>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center space-x-6">
                {/* Search Bar */}
                <div className="relative md:w-32 lg:w-64">
                    <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
                        <input
                            className="bg-slate-100 h-8 w-full p-5 rounded-xl pl-5 dark:bg-[#242535] dark:text-white"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit" className="absolute right-3">
                            <IoSearchSharp className="text-gray-500" size={20} />
                        </button>
                    </form>
                </div>

                {/* Account Dropdown */}
                <div
                    className="relative cursor-pointer"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    {token ? (
                        <RiAccountPinCircleLine className="w-6 h-7 text-gray-700 dark:text-white" />
                    ) : (
                        <NavLink to='/login'>
                            <IoLogIn className="w-6 h-7 text-gray-700 dark:text-white" />
                        </NavLink>
                    )}

                    {/* Dropdown Menu */}
                    {token && dropdownOpen && (
                        <div
                            className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-md"
                            onMouseEnter={() => setDropdownOpen(true)}  // Keep open when inside
                            onMouseLeave={() => setDropdownOpen(false)} // Close when leaving
                        >
                            <NavLink
                                to="/profile"
                                className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Profile
                            </NavLink>
                            <div
                                onClick={() => {
                                    handleLogout();
                                    navigate('/login');
                                }}
                                className="px-4 py-2 text-gray-700 dark:text-white cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
                            >
                                <CiLogout size={18} />
                                Logout
                            </div>
                        </div>
                    )}
                </div>


                {/* Theme Toggle */}
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" onChange={toggleTheme} />
                    <div className="relative w-11 h-6 bg-gray-950 rounded-full peer peer-checked:bg-gray-400 after:absolute after:top-[2px] after:left-[2px] after:bg-white after:h-5 after:w-5 after:rounded-full after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
                <button onClick={() => setSearchOpen(!searchOpen)} className="text-2xl mr-4 text-gray-700 dark:text-white">
                    <IoSearchSharp />
                </button>
                <button className="text-gray-700 text-2xl dark:text-white" onClick={() => setMenuOpen(!menuOpen)}>
                    <GiHamburgerMenu />
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`z-10 fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
                <button className="absolute top-4 right-4 text-gray-700 text-2xl dark:text-white" onClick={() => setMenuOpen(false)}>
                    <IoCloseOutline />
                </button>
                <nav className="flex flex-col items-start space-y-4 p-6 mt-10 text-gray-700 dark:text-white">
                    <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink>
                    <NavLink to="/pages" onClick={() => setMenuOpen(false)}>Pages</NavLink>
                    <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
                    {token && <NavLink to="/create-post" onClick={() => setMenuOpen(false)}>Create Post</NavLink>}

                    {/* Mobile Login / Logout */}
                    <div className="text-xl mt-4">
                        {token ? (
                            <NavLink to="/profile" className="flex gap-2" onClick={() => setMenuOpen(false)}>
                                <RiAccountPinCircleLine className="w-6 h-7" />
                                <p>Account</p>
                            </NavLink>
                        ) : (
                            <NavLink to="/login" className="flex gap-2" onClick={() => setMenuOpen(false)}>
                                <IoLogIn className="w-6 h-7" />
                                <p>Log In</p>
                            </NavLink>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
