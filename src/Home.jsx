import About from './About'
import React, { useEffect } from "react";
import './App.css'
import CNI from './CNI'
import ContactForm from './ContactForm'
import CountingEffect from './CountingEffect'
import FAQ from './FAQ'
import OurProcess from './OurProcess'
import OurServices from './OurServices'
import Root from './Root'
import Team from './Team'
import UnderConstruction from './UnderConstruction'
import WhyChooseUs from './whyChooseUs'


function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Root/>
      <CNI/>
      <OurServices/>
      <CountingEffect/>
      <About/>
      <OurProcess/>
      <WhyChooseUs/>
      <UnderConstruction/>
      <FAQ/>
      <Team/>
      <ContactForm/>
    </>
  )
}

export default Home
