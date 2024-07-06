import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import Login from '../Login-logout/Loginn';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../../context/AuthProvider';

const Navbar = (props) => {

  return (
    <div className="navbar-container">
      <div>
        <Link className="logo-container" to="/">
          <img className="navbar-logo" src={logo} alt="PawFinds Logo" />
          <p>{props.title}</p>
        </Link>
      </div>
      <div>
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
            <Link to="/Accessories">Accessories</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div>
       <Login/>
      </div>
    </div>
  );
};

export default Navbar;
