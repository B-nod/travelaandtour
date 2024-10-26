import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Recommend from '../components/Recommendation'
import Testimonials from '../components/Testimonial'

const Homapage = () => {
  return (
    <>
    <ScrollToTop/>
    <Hero/>
    <Services/>
    <Recommend/>
    <Testimonials/>
    </>
  )
}

export default Homapage