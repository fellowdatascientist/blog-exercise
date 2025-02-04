import React from 'react'
import { Outlet } from 'react-router-dom'
import Blog from '../pages/Blog'
import BlogHeroSession from '../components/BlogHeroSession'

const BlogLayout = () => {
  return (
    <div className='w-full h-full'>
      {/* Page Title & Breadcrumb */}
      <div className="w-full h-auto flex flex-col justify-center items-center py-6">
        <h1 className="text-xl sm:text-2xl font-bold text-black dark:text-white">Page Title</h1>

        {/* Breadcrumb Section */}
        <div className="flex items-center gap-2 text-sm sm:text-base mt-2">
          <p className="text-gray-500 dark:text-white border-r-2 border-gray-400 pr-2">Home</p>
          <p className="text-gray-500 dark:text-white">Link One</p>
        </div>
      </div>

      {/* Hero Section */}
      <BlogHeroSession />
      
      {/* Blog */}
      <Blog />
      <Outlet />
    </div>
  )
}

export default BlogLayout