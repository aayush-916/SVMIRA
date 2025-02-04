import { useState } from 'react'
import About from './About'
import './App.css'
import OurProcess from './OurProcess'
import OurServices from './OurServices'
import Root from './Root'


function App() {

  return (
    <>
      <Root/>
      <About/>
      <OurServices/>
      <OurProcess/>
    </>
  )
}

export default App
