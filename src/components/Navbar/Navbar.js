import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="brand">
      Bookstore CMS
    </Link>
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
