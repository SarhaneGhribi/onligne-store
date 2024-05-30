import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import "./styles/Navbar.css";
import navbarLogo from "../../assets/images/shoppy.png"
const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="brand-logo">
        <img src={navbarLogo} className='logo'/>
        <h3 className='logo-text'>Shoppy</h3>
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <NavLink to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/SignIn" className={`nav-link ${location.pathname === "/SignIn" ? "active" : ""}`}>Sign In</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/SignUp" className={`nav-link ${location.pathname === "/SignUp" ? "active" : ""}`}>Sign Up</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
