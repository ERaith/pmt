import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/team-stats"
        activeClassName="active"
        className="nav-link"
        isActive={(match) => match}
      >
        Team Stats
      </NavLink>
      <NavLink
        to="/pokedex"
        activeClassName="active"
        className="nav-link"
        isActive={(match) => match}
      >
        Pokedex
      </NavLink>
    </div>
  );
};

export default Navbar;
