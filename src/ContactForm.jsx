import React from "react";
import "./App.css"; // Assuming you're using a global CSS file

const ContactForm = () => {
  return (
    <div className="container-fluid form-part">
      <div className="row title text-center">
        <div className="col-lg-12">
          <h3>Get in Touch</h3>
        </div>
      </div>

      <div className="col-lg-12">
        <div className="form">
          <form action="https://formsubmit.co/aayush91620@gmail.com" method="POST">
            {/* Hidden Inputs */}
            <input type="hidden" name="_subject" value="New Contact Inquiry" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_autoresponse" value="Thank you for contacting us! We will get back to you soon." />

            {/* Form Fields */}
            <input type="text" name="name" id="myname" placeholder="Name*" required />
            <input type="email" name="email" id="myemail" placeholder="Email*" required />
            <input type="text" name="phone" id="myphone" placeholder="Mobile*" required />
            <input type="text" name="subject" id="yoursubject" placeholder="Subject*" required />
            <textarea name="message" id="yourmessage" rows="7" placeholder="Message*" required></textarea>

            {/* Submit Button */}
            <input type="submit" value="Submit" id="mybtn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
