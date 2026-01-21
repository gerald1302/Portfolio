import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="h-16 md:h-20"></div>
    <Hero/>
    <About/>
    <Skills/>
    </>
  )
}

export default Home