import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addPokemonToTeam,
  removePokemonFromTeam,
  showDetails,
} from '../../actionCreators/index';

export const PokemonMini = ({
  whereami,
  pokemon,
  addPokemonToTeam,
  removePokemonFromTeam,
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
        let teamID = Math.floor(Math.random() * 100);
        let pokemonTeamMember = { ...pokemon, teamID: teamID };
        pokemonTeam.length < 6 && addPokemonToTeam(pokemonTeamMember);
        break;
      default:
        break;
    }
  };

  const deletePokemon = () => {
    removePokemonFromTeam(pokemon);
  };
  const styling = (pokemon) => {
    let mainType;
    if (Array.isArray(pokemon.types)) {
      mainType = pokemon.types[0].type.name;
      return `pokemon-mini ${whereami} ${mainType}`;
    } else {
      return `pokemon-mini ${whereami}`;
    }
  };

  return (
    <div className={styling(pokemon)} aria-label ={whereami+" " + pokemon.name}>
      {pokemon.name === 'placeholder' ? (
        <span
          className="tooltip"
          data-tooltip="Choose a Pokemon!"
          data-placement="top"
          data-trigger="hover"
        >
          <img
            className="placeholder-image"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/201.png"
            alt={`No Pokemon Yet`}
          />
        </span>
      ) : (
        <>
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
      )}
      {whereami === 'Team' && (
        <button className="delete" aria-label = {pokemon.name + " Release"}onClick={() => deletePokemon()}>
          Release
        </button>
      )}
    </div>
  );
};

const mapStateToProps = ({ pokemonTeam }) => ({
  pokemonTeam,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { addPokemonToTeam, showDetails, removePokemonFromTeam },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(PokemonMini);
