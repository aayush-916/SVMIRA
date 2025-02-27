import { useState } from 'react'
import About from './About'
import './App.css'
import ContactForm from './ContactForm'
import FAQ from './FAQ'
import OurProcess from './OurProcess'
import OurServices from './OurServices'
import Root from './Root'
import Team from './Team'
import WhyChooseUs from './whyChooseUs'


function App() {

  return (
    <>
      <Root/>
      <OurServices/>
      <About/>
      <OurProcess/>
      <WhyChooseUs/>
      <FAQ/>
      <Team/>
      <ContactForm/>
    </>
  )
}

export default App
