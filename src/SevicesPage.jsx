import React, { useEffect } from "react";
import ContactForm from './ContactForm'
import OurServices from './OurServices'

function SevicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className="topgap">
    <OurServices/>
    <ContactForm/>
    </div>
    
    </>
  )
}

export default SevicesPage