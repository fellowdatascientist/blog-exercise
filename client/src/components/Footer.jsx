import React from 'react';
import { CiMail } from "react-icons/ci";
import assets from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 text-gray-700 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0">
        {/* About Section */}
        <div className="flex-1 max-w-md p-4">
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <p className="mb-4 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <p><strong>Email:</strong> info@istemplate.net</p>
          <p><strong>Phone:</strong> 880123.456789</p>
        </div>

        {/* Quick Links Section */}
        <div className="flex-1 max-w-md p-4">
          <h2 className="text-xl font-semibold mb-4">Quick Link</h2>
          <div className="grid grid-cols-2 gap-4 text-sm sm:text-base">
            <div>
              <p>Home</p>
              <p>About</p>
              <p>Blog</p>
              <p>Archived</p>
              <p>Author</p>
              <p>Contact</p>
            </div>
            <div>
              <p>Lifestyle</p>
              <p>Technology</p>
              <p>Travel</p>
              <p>Business</p>
              <p>Economy</p>
              <p>Sports</p>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="text-center flex-1 max-w-md py-4 px-10 bg-white rounded-2xl">
          <h2 className="text-xl font-semibold mb-4">Weekly Newsletter</h2>
          <p className="mb-4 text-sm sm:text-base">Get blog articles and offers via email.</p>
          <form className="flex flex-col space-y-4 relative">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <CiMail className='absolute w-9 h-9 right-2 mt-1 text-gray-500'/>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 flex justify-between items-center border-t border-gray-300 pt-4 text-center text-sm sm:text-base">
        <img src={assets.CopyrightInfo} placeholder='CopyrightInfo' />
        <div className='flex'>
            <p className='text-lg border-r px-2'>Terms of Use</p>
            <p className='text-lg border-r px-2'>Privacy Policy</p>
            <p className='text-lg px-2'>Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
