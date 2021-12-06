import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">
          Books
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/categories">
          Categories
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
