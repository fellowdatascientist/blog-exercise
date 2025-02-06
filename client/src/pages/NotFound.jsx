import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 text-center mb-5">
      <h1 className="text-6xl font-bold text-gray-700 dark:text-white">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="mt-4 text-blue-500 dark:text-blue-300 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
