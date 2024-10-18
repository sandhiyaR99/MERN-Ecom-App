import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { signOut } from 'firebase/auth';
import auth from '../Config/firebase';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logoutfunc = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">MyWebsite</h1>
      
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/landing">Home</Link></li>
        <li><Link to="/product">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <button className='logoutbtn' onClick={logoutfunc}>Logout</button>
        <button className="close-btn" onClick={toggleMenu}>X</button>
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
