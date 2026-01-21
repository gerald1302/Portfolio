import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="h-16 md:h-20"></div>
    <Hero/>
    <About/>
    </>
  )
}

export default Home