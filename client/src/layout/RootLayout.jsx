import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const RootLayout = () => {
  return (
    <>
      <div className='px-4 md:px-10 lg:px-14 xl:px-20'>
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default RootLayout
