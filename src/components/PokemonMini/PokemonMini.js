import React from 'react';
import PropTypes from 'prop-types';

export const PokemonMini = ({ pokemon }) => {
  let type = () => {
    return pokemon.types.map((slot) => {
      return (
        <div key={slot.type.name} className={`type ${slot.type.name}`}>
          {slot.type.name}
        </div>
      );
    });
  };
  return (
    <div className="pokemon-mini">
      <span
        className="tooltip"
        data-tooltip={pokemon.name}
        data-placement="top"
        data-trigger="hover"
      >
        <img
          className="pokemon-image"
          src={pokemon.sprites.front_default}
          alt={`${pokemon.name}`}
        />
      </span>
      <div>{type()}</div>
    </div>
  );
};

export default PokemonMini;
