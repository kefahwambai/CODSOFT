import React, { useState } from 'react';
import './homepage.css';
import { Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Homepage = ({ cart }) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [error, setError] = useState('');
  const [menuOpen, setMenuOpen] = useState(false); 

  const size = cart ? cart.reduce((total, item) => total + item.amount, 0) : 0;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      <div className='banner'>
        <p>FRESH . ORGANIC . NUTRITIOUS</p>
      </div>

      <nav>
        <div className="nav_box">
          <NavLink to="/" className="my_shop">Farmarket</NavLink>

          <div className={`nav_links ${menuOpen ? 'open' : ''}`}>
            <Link to="/about" className="others p-4">About</Link>
            <NavLink to="/cart" className="others p-4">Cart ({size})</NavLink>
            <NavLink to="/contact-us" className="others p-4">Contact Us</NavLink>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          </div>
        </div>
      </nav>

      {message && <p>{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Homepage;
