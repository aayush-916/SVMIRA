import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './Nav'
import Whatsapp from './Whatsapp.jsx'
import Footer from './Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <Whatsapp/>
    <App />
    <Footer/>
  </StrictMode>,
)
