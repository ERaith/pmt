import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPokemonToTeam, showDetails } from '../../actionCreators/index';

export const PokemonMini = ({
  whereami,
  pokemon,
  addPokemonToTeam,
  pokemonTeam,
  showDetails,
}) => {
  const type = () => {
    return pokemon.types.map((slot) => {
      return (
        <div key={slot.type.name} className={`type ${slot.type.name}`}>
          {slot.type.name}
        </div>
      );
    });
  };
  const handlePokemon = () => {
    switch (whereami) {
      case 'Team':
        showDetails(pokemon);
        break;
      case 'Pokedex':
        pokemonTeam.length < 6 && addPokemonToTeam(pokemon);
        break;
      default:
        break;
    }
  };

  return (
    <div className="pokemon-mini">
      {pokemon.name==='placeholder'?
      <span>Choose Your Pokemon</span>
    :<>
      <span
        className="tooltip"
        data-tooltip={pokemon.name}
        data-placement="top"
        data-trigger="hover"
        onClick={() => handlePokemon()}
      >
        <img
          className="pokemon-image"
          src={pokemon.sprites.front_default}
          alt={`${pokemon.name}`}
        />
      </span>
      <div>{type()}</div>
    </>
    }
    </div>
  );
};

const mapStateToProps = ({ pokemonTeam }) => ({
  pokemonTeam,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addPokemonToTeam,showDetails }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PokemonMini);
