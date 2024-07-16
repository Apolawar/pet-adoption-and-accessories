import React from "react";
import developerPng from "./images/developer-png.png";
import './Contact.css'

const Contact = () => {
  return (
    <div className="contactUs-main-container container">
      <div className="content">
        <div className="contactUs-left-para">
          <h3>Let's get in touch</h3>
          <i class="fa fa-envelope"></i>
          <a class="mail-links" href="mailto:abc@gmail.com">
            abc@gmail.com
          </a>

          <i class="fa fa-linkedin"></i>
          <a class="mail-links" href="https://www.linkedin.com/in/kashiekzmi/">
            User Name: Code_mate
          </a>

          <i class="fa fa-github"></i>
          <a class="mail-links" href="https://github.com/Codemate">
            Codemate
          </a>

          <i class="fa fa-instagram"></i>
          <a class="mail-links" href="https://www.instagram.com/codemate/">
            codemate
          </a>

          <i class="fa fa-phone"></i>
          <a class="mail-links" href="tel:+923019583959">
            +91 9444444444
          </a>
        </div>
      </div>
      <div className="image">
        <div className="contactUs-pic">
          <img src={developerPng} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

// Function to check and update the layout based on window width
function checkWidth() {
  var container = document.querySelector('.container');
  if (window.innerWidth <= 768) {
    container.classList.add('column');
  } else {
    container.classList.remove('column');
  }
}

// Add event listeners for resize and load events
window.addEventListener('resize', checkWidth);
window.addEventListener('load', checkWidth);

// Initial check on page load
checkWidth();

export default Contact;
