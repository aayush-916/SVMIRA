import React from 'react'
import './Whatsapp.css'
function Whatsapp() {
  return (
   <>
    <div class="fixed-bottom-right2">
        <a
          href="tel:+919709993000"
          target="_blank"
          rel="noopener noreferrer"
          class="whatsapp-button"
        >
          <img src="/call_logo.webp" alt="WhatsApp" class="whatsapp-icon1" />
        </a>
      </div>
      <div class="fixed-bottom-right">
        <a
          href="https://wa.me/+919709993000"
          target="_blank"
          rel="noopener noreferrer"
          class="whatsapp-button"
        >
          <img src="/whatsapp-icon.webp" alt="WhatsApp" class="whatsapp-icon" />
        </a>
      </div>
   </>
  )
}

export default Whatsapp