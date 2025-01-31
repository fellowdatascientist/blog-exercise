import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const RootLayout = () => {
  return (
    <>
      <div className='px-4 md:px-6 lg:px-8 xl:px-10'>
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default RootLayout
