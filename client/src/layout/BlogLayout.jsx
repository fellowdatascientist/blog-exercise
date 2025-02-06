import React from 'react'
import { Outlet } from 'react-router-dom'
import Blog from '../pages/Blog'
import BlogHeroSession from '../components/BlogHeroSession'

const BlogLayout = () => {
  return (
    <div className='w-full h-full'>
      <Outlet />
    </div>
  )
}

export default BlogLayout