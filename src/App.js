import React from 'react'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Recommendation from './components/Recommendation'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <ScrollToTop/>
    <Navbar/>
    <Hero/>
    <Services/>
    <Recommendation/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default App