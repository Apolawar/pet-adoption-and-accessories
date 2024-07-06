import React, { useState, useEffect } from "react";
import CustomHTML from "./Questions";
import "./Service.css";
import Accordion from "./Accordian";

const Accessories = (props) => {
  const [data] = useState(Array.isArray(CustomHTML) ? CustomHTML : []);

  useEffect(() => {
    // JavaScript code
    const addEventOnElem = function (elem, type, callback) {
      if (!elem) return; // Check if the element is null
      if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
          elem[i].addEventListener(type, callback);
        }
      } else {
        elem.addEventListener(type, callback);
      }
    };

    const navToggler = document.querySelector("[data-nav-toggler]");
    const navbar = document.querySelector("[data-navbar]");
    const navbarLinks = document.querySelectorAll("[data-nav-link]");
    const header = document.querySelector("[data-header]");
    const backTopBtn = document.querySelector("[data-back-top-btn]");

    if (navToggler && navbar && navbarLinks && header && backTopBtn) {
      const toggleNavbar = function () {
        navbar.classList.toggle("active");
        navToggler.classList.toggle("active");
      };

      const closeNavbar = function () {
        navbar.classList.remove("active");
        navToggler.classList.remove("active");
      };

      const activeElemOnScroll = function () {
        if (window.scrollY > 100) {
          header.classList.add("active");
          backTopBtn.classList.add("active");
        } else {
          header.classList.remove("active");
          backTopBtn.classList.remove("active");
        }
      };

      addEventOnElem(navToggler, "click", toggleNavbar);
      addEventOnElem(navbarLinks, "click", closeNavbar);
      addEventOnElem(window, "scroll", activeElemOnScroll);

      // Cleanup function to remove event listeners
      return () => {
        navToggler.removeEventListener("click", toggleNavbar);
        navbarLinks.forEach(link =>
          link.removeEventListener("click", closeNavbar)
        );
        window.removeEventListener("scroll", activeElemOnScroll);
      };
    }
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <>
      <section className="Accessories-sec">
        <div className="main-div">
          <CustomHTML />
          <div className="Accordion">
            {data.map((val) => {
              const { id } = val;
              return <Accordion key={id} {...val} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Accessories;

