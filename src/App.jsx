import { useState } from 'react'
import About from './About'
import './App.css'
import ContactForm from './ContactForm'
import FAQ from './FAQ'
import OurProcess from './OurProcess'
import OurServices from './OurServices'
import Root from './Root'
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
      <ContactForm/>
    </>
  )
}

export default App
