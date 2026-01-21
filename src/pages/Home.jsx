import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Portfolio from '../components/Portfolio.jsx'
import Contact from '../components/Contact.jsx'
const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="h-16 md:h-20"></div>
    <Hero/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Contact/>
    </>
  )
}

export default Home