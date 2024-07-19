import React from "react";
import girlHoldingADog from "./images/girlHoldingADog.png";
import homepageDog from "./images/homepageDog.png";
import footPrint from "./images/footPrint.png";
import { Link } from "react-router-dom";
import "./HomeLandingContainer.css";

const HomeLandingContainer = (props) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="home-container pb-0 pb-md-5">
      <div className="homeContainer-left">
        <div>
          <p className="home-title">
            <div className="home-titlePlusPng">
              <p>Your Pets </p>
              <img src={homepageDog} alt="Dog sitting" />
            </div>
            Are Our
            <br />
            Priority
          </p>
          <p className="home-second-para">{props.description}</p>
        </div>
        <div className="adopt-btn">
          <Link to="./pets">
            <button className="Home-button py-2 px-1" onClick={scrollToTop}>
              <p className="mb-0">Adopt a Pet</p>
              <img src={footPrint} alt="footprint" />
            </button>
          </Link>
        </div>
      </div>
      <div className="homeContainer-right d-none d-md-flex">
        <img src={girlHoldingADog} alt="Girl holding a Dog" />
      </div>
    </div>
  );
};

export default HomeLandingContainer;
