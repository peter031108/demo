import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = (props) => (
  <div>
    <Link {...props} />
  </div>
);

export default NavLink;
