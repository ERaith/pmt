import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export const Header = ({ logout, showModal, user }) => {
  return (
    <div className="header">
      <h1>Pokémon Team Builder</h1>
    </div>
  );
};