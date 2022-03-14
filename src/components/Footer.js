import React from 'react'
import './footer.css'
import { FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_about">
        <h1>Help Center</h1>
        <p>Safety information</p>
        <p> Cancellation options</p>
        <p>
          Our COVID-19 Response Supporting
          <br /> people with disabilities, Report a neighborhood concern
        </p>
      </div>
      <div className="footer_faqs">
        <h2>Faqs</h2>
        <p>About us</p>
        <p>Help Center</p>
        <p>How To Pay</p>
        <p>Is Payment refundable</p>
      </div>
      <div className="footer_socials">
        <i>
          <FaFacebook />
        </i>
        <i>
          <FaTwitter />
        </i>
        <i>
          <FaInstagramSquare />
        </i>
      </div>
    </div>
  );
}

export default Footer;