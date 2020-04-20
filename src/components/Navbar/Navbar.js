import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({path}) => {
  const createRoute = (path,details) => {
    let teamName = path.split('/team/').pop()
    return details + '/team/' +teamName
  }
  return (
    <div className="navbar">
      <NavLink
        to={createRoute(path,'/team-stats')}
        activeClassName="active"
        className="nav-link"
        isActive={(match) => match}
      >
        Team Stats
      </NavLink>
      <NavLink
        to={createRoute(path,'/pokedex')}
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
