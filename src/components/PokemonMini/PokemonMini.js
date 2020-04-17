import React from 'react';
import PropTypes from 'prop-types';

export const PokemonMini = ({pokemon}) => {
  return (
    <img
      className="pokemon-image"
      src={pokemon.sprites.front_default}
      alt={`${pokemon.name}`}
    />
  );
};

export default PokemonMini;
