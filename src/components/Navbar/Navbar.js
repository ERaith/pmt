import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to ="/pokedex">Pokedex
      </Link>
      <Link to ="/team-stats">Team-stats
      </Link>
    </div>
  );
};