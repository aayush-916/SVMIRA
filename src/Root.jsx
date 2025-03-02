import React from "react";
import { useState } from "react";
import BookingModal from "./BookingModal";
import "./App.css";
function Root() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div class="video-background">
        <video autoPlay loop muted class="video-background__video">
          <source src="./vd3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class="content">
        <h1 class="main-heading">
    <span class="highlight">Turn Your Dreams</span> into Reality <span class="highlight">– Built to Perfection</span>.
</h1>
<p class="sub-heading">We bring your vision to life with world-class construction solutions, Whether it’s residential, commercial, or industrial projects, we build with integrity and innovation.</p>




            <button className="button-85 open-modal-btn" onClick={() => setIsModalOpen(true)} >Get Quotation</button>
            

</div>

      </div>
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />


    </div>
  );
}

export default Root;
