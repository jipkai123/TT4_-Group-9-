import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => (
  /*<nav className="column is-2 menu">
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
  </nav>*/
  <>
  <Navbar bg="light">
    <Navbar.Brand href="#home">Brand link</Navbar.Brand>
  </Navbar>
  <br />
  <Navbar bg="light">
    <Navbar.Brand>Brand text</Navbar.Brand>
  </Navbar>
  <br />
  <Navbar bg="dark">
    <Navbar.Brand href="#home">
      <img
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Navbar>
  <br />
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      React Bootstrap
    </Navbar.Brand>
  </Navbar>
</>
);

export default NavBar;
