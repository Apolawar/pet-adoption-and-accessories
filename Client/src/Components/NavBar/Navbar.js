// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from './images/logo.png';
// import Login from '../Login-logout/Loginn';
// import Logout from '../Login-logout/Logout';
// import { useAuth } from '../../context/AuthProvider';
// import '../NavBar/Navbar.css';
// const Navbar = (props) => {
//   const { authUser } = useAuth();

//   return (
//     <div className="navbar-container">
//       <div>
//         <Link className="logo-container" to="/">
//           <img className="navbar-logo" src={logo} alt="PawFinds Logo" />
//           <p>{props.title}</p>
//         </Link>
//       </div>
//       <div>
//         <ul className="navbar-links">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/services">Services</Link>
//           </li>
//           <li>
//             <Link to="/pets">Pets</Link>
//           </li>
//           <li>
//             <Link to="/accessories">Accessories</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact Us</Link>
//           </li>
//         </ul>
//       </div>
//       <div>
//         {authUser ? <Logout /> :
//           <Login />}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import Login from "../Login-logout/Loginn";
import Logout from "../Login-logout/Logout";
import { useAuth } from "../../context/AuthProvider";
import "../NavBar/Navbar.css";

const Navbar = (props) => {
  const { authUser } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbar-container">
        <div>
          <Link className="logo-container" to="/">
            <img className="navbar-logo" src={logo} alt="PawFinds Logo" />
            <p className="mb-0">{props.title}</p>
          </Link>
        </div>
        <div className={`navbar-links-container`}>
          <ul className="navbar-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/pets">Pets</Link>
            </li>
            <li>
              <Link to="/accessories">Accessories</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <div className="auth-links">{authUser ? <Logout /> : <Login />}</div>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div
        className={`navbar-links-container bg-white   ${
          menuOpen ? "d-block" : "d-none"
        }`}
      >
        <ul className="navbar-links">
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/pets" onClick={toggleMenu}>
              Pets
            </Link>
          </li>
          <li>
            <Link to="/accessories" onClick={toggleMenu}>
              Accessories
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="auth-links">{authUser ? <Logout /> : <Login />}</div>
      </div>
    </>
  );
};

export default Navbar;
