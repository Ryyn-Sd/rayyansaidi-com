import { Link } from 'gatsby';
import React from 'react';
import './style.css';

const Nav = () => (
  <ul className="nav">
    <li className="navbar">
      <Link to="/" activeClassName="active">
        Home
      </Link>
    </li>
    <li className="navbar">
      <Link to="/bio" activeClassName="active">
        Bio
      </Link>
    </li>
    <li className="navbar">
      <Link to="/projects" activeClassName="active">
        Projects
      </Link>
    </li>
  </ul>
);

export default Nav;
