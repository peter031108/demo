import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from '../NavLink';

const SideBar = () => (
  <div className="w3-sidebar w3-bar-block w3-light-grey sidebar">
    <Link className="w3-bar-item w3-button" to="/">Home</Link>
    <Link className="w3-bar-item w3-button" to="/about">About</Link>
    <Link className="w3-bar-item w3-button" to="/repos/react-route">Repos</Link>
    <Link className="w3-bar-item w3-button" to="/user">User</Link>
    <NavLink className="w3-bar-item w3-button" to="/contacts">Contacts</NavLink>
  </div>
);

export default SideBar;
