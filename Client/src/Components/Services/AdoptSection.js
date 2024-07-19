import React from "react";
import adoptPet from "./images/adoptPet.png";
import { Link } from "react-router-dom";

const AdoptSection = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="adopt-section">
      <h2>Adopt a Pet</h2>
      <img src={adoptPet} alt="Happy Pet" />

      <p>
        Welcome to our pet adoption program! Adopting a pet is a wonderful way
        to bring joy and companionship into your life.
      </p>

      <h3>Benefits of Pet Adoption</h3>
      <ul>
        <li style={{ fontSize: '13px' }}>Provide a loving home to a pet in need</li>
        <li style={{ fontSize: '13px' }}>Experience the unconditional love of a pet</li>
        <li style={{ fontSize: '12.8px' }}>Create lasting memories and cherished moments</li>
      </ul>

      <h3>Adoption Process</h3>
      <ol>
        <li style={{ fontSize: '13px' }}>Fill out an adoption application</li>
        <li style={{ fontSize: '13px' }}>Meet potential pets in person</li>
        <li style={{ fontSize: '13px' }}>Complete the necessary paperwork</li>
      </ol>

      <h3>Responsibilities</h3>
      <p style={{ fontSize: '12.5px' }}>
        Adopting a pet comes with responsibilities, including feeding, grooming,
        regular exercise, and providing medical care.
      </p>

      <Link to="/pets">
        <button className="cta-button" onClick={scrollToTop}>Find Your Perfect Pet</button>
      </Link>
    </section>
  );
};

export default AdoptSection;
