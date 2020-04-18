import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPokemonToTeam } from '../../actionCreators/index';

export const PokemonMini = ({ pokemon, addPokemonToTeam, pokemonTeam }) => {
  const type = () => {
    return pokemon.types.map((slot) => {
      return (
        <div key={slot.type.name} className={`type ${slot.type.name}`}>
          {slot.type.name}
        </div>
      );
    });
  };
  const handlePokemonAdd = () => {
    pokemonTeam.length < 6 && addPokemonToTeam(pokemon);
  };

  return (
    <div className="pokemon-mini">
      <span
        className="tooltip"
        data-tooltip={pokemon.name}
        data-placement="top"
        data-trigger="hover"
        onClick={() => handlePokemonAdd()}
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

const mapStateToProps = ({ pokemonTeam }) => ({
  pokemonTeam,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addPokemonToTeam }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PokemonMini);
