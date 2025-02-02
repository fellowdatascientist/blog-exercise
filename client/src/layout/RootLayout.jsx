import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeContext } from '../context/ThemeContext';

const RootLayout = () => {
  const { theme } = useContext(ThemeContext);

  // Apply the 'dark' class to the body
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div>
      <div className={`px-4 md:px-10 lg:px-14 xl:px-20 dark:bg-[#181A2A]`}>
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
