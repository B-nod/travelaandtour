import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommendation";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import scrollreveal from "scrollreveal";

const App = () => {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <>
    <ScrollToTop/>
    <Navbar/>
    <Hero/>
    <Services/>
    <Recommend/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default App