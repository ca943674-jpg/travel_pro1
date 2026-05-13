import React from "react";
import "./Footer1.css";

function Footer() {
  return (
    <div>
      <div className="footerbox">
        <div className="footercntainer d-flex flex-lg-row flex-md-row flex-column align-items-center justify-content-lg-between justify-content-md-between justify-content-start gap-4 px-5">
          <div className="footer1">
            <h3>Travel Pro</h3>
            <h6>
              Your trusted partner for unforgettable travel experiences. We
              create memories that last a lifetime.
            </h6>
          </div>
          <div className="footer1">
            <h3>Quick Links</h3>
            <h6>Home</h6>
            <h6>Destination</h6>
            <h6>Tour Package</h6>
            <h6>Gallery</h6>
            <h6>About Us</h6>
            <h6>Contact</h6>
          </div>
          <div className="footer1">
            <h3>Service</h3>
            <h6>Adventure Package</h6>
            <h6>Destination</h6>
            <h6>Family Holidays</h6>
            <h6>Corporate Travel</h6>
            <h6>Hotel Booking</h6>
            <h6>Flight Booking</h6>
          </div>
          <div className="footer1">
            <h3>Contact Info</h3>
            <h6>123 Travel Street, Adventure City, AC 12345 </h6>
            <h6>+1 (555) 123-4567</h6>
            <h6>info@travelpro.com</h6>
          </div>
        </div>
      </div>
      <div className="footer">
        <h6>
          © 2024 TravelPro. All rights reserved. | Privacy Policy | Terms of
          Service
        </h6>
      </div>
    </div>
  );
}

export default Footer;