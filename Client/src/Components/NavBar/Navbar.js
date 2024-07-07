// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from './images/logo.png';
// import Login from '../Login-logout/Loginn';
// import Logout from '../Login-logout/Logout';
// import { useAuth } from '../../context/AuthProvider';

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
//         {authUser ? <Logout /> : <Login />}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import Login from '../Login-logout/Loginn';
import Logout from '../Login-logout/Logout';
import { useAuth } from '../../context/AuthProvider';

const Navbar = (props) => {
  const { authUser } = useAuth();

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
            <Link to="/accessories">Accessories</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div>
        {authUser ? <Logout /> : 
          <Login />}
      </div>
    </div>
  );
};

export default Navbar;

