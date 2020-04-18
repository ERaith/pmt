import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Pokedex from '../Pokedex/Pokedex';
import { filterPokemon } from '../../actionCreators/index';
import PokemonMini from '../PokemonMini/PokemonMini';

export const Team = ({ pokemonTeam }) => {
  const renderPokemonTeam = () => {
    return pokemonTeam.map((pokemon) => {
      return <PokemonMini pokemon={pokemon} key={pokemon.id} />;
    });
  };
  return (
    <section className="team-view-container">{renderPokemonTeam()}</section>
  );
};

const mapStateToProps = ({ pokemonTeam }) => ({
  pokemonTeam,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ filterPokemon }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Team);