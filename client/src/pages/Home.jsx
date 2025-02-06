import React from 'react'
import HeroSession from '../components/HeroSession'
import Advertisement from '../components/Advertisement'
import LatestPost from '../components/LatestPost'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <HeroSession/>
    <Advertisement/>
    <LatestPost/>
    <Advertisement/>
    </>
  )
}

export default Home