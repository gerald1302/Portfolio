import React from 'react'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Portfolio from '../components/Portfolio.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import Timeline from '../components/Timeline.jsx'

const Home = () => {
  return (
    <>
    <div className="h-16 md:h-20"></div>
    <Hero/>
    <About/>
    <Timeline/>
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home