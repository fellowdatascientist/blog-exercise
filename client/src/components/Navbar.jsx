import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi"; 
import assets from '../assets/assets';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchTerm);
    };

    return (
        <div className='w-full h-20 flex items-center justify-between px-6 md:px-10 bg-white '>
            {/* Logo */}
            <img src={theme === 'light' ? assets.Logo:assets.LogoDark} alt="Logo" className="h-10" />

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden text-gray-700 text-2xl" 
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <GiHamburgerMenu />
            </button>

            {/* Navigation Links */}
            <nav className={`absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex space-x-9 px-6 py-4 md:p-0 shadow-md md:shadow-none ${menuOpen ? 'block' : 'hidden'}`}>
                <NavLink className={({ isActive }) => isActive ? 'text-gray-950 font-semibold border-b-2 border-gray-950 pb-1' : 'text-gray-500'} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-gray-950 font-semibold border-b-2 border-gray-950 pb-1' : 'text-gray-500'} to="/blog">Blog</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-gray-950 font-semibold border-b-2 border-gray-950 pb-1' : 'text-gray-500'} to="/post">Single Post</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-gray-950 font-semibold border-b-2 border-gray-950 pb-1' : 'text-gray-500'} to="/pages">Pages</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-gray-950 font-semibold border-b-2 border-gray-950 pb-1' : 'text-gray-500'} to="/contact">Contact</NavLink>
            </nav>

            {/* Search Bar */}
            <div className='hidden md:block relative w-64'>
                <form onSubmit={handleSearch} className="flex items-center">
                    <input
                        className='bg-slate-100 h-7 w-full p-5 rounded-xl pl-5'
                        placeholder='Search...'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit" className="absolute right-3">
                        <IoSearchSharp className='text-gray-500' size={20} onClick={()=>toggleTheme()} />
                    </button>
                </form>
            </div>

            {/* Theme Toggle */}
            <label className="hidden md:inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-950 rounded-full peer peer-checked:bg-gray-400 after:absolute after:top-[2px] after:start-[2px] after:bg-white after:h-5 after:w-5 after:rounded-full after:transition-all peer-checked:after:translate-x-full"></div>
            </label>
        </div>
    );
};

export default Navbar;
