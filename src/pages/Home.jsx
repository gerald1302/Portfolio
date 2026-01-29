import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Portfolio from '../components/Portfolio.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import ScrollToTop from '../components/ScrollToTop.jsx'
import Timeline from '../components/Timeline.jsx'
const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="h-16 md:h-20"></div>
    <Hero/>
    <About/>
    <Timeline/>
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}

export default Home