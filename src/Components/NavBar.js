import React from 'react';
import Nav from "react-bootstrap/Nav";
import { NavLink } from 'react-router-dom';

const NavBar = props => (
  <nav className="column is-2 menu">
    <p className="menu-label">Menu</p>
    <ul className="menu-lbist">
      <NavLink to="/login" activeClassName="active-link">
        login
      </NavLink>
      <NavLink to="/home" activeClassName="active-link">
        balance
      </NavLink>
      <NavLink to="/about" activeClassName="active-link">
        About
      </NavLink>
    </ul>
    {props.children}
  </nav>
);

export default NavBar;
