import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { IoCartOutline } from "react-icons/io5";
import { useState } from 'react';
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="nav-section">
      <nav className="nav-container">
        <div className="nav-left">
          <div className="menu-icon" onClick={toggleMenu}>
            <MdMenu />
          </div>
          <h1 className="nav-logo">Taste now</h1>
        </div>
        <ul className={`nav-link ${showMenu ? 'show-menu' : ''}`}>
          <li>
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-item"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              activeClassName="active"
              className="nav-item"
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              activeClassName="active"
              className="nav-item"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeClassName="active"
              className="nav-item"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="nav-right">
          <NavLink
            to="/cart"
            activeClassName="active"
            className="nav-item"
          >
            <IoCartOutline className="nav-item-cart" />
          </NavLink>
          <p>
            <NavLink
              to="/sign-up"
              className="signup-button"
            >
              Sign Up
            </NavLink>
          </p>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;