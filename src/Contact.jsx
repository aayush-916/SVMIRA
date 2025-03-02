import React, { useEffect } from "react";
import ContactForm from './ContactForm'

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='topgap'>
         <ContactForm/>
    </div>
  )
}

export default Contact