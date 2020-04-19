import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Pokedex from '../Pokedex/Pokedex';
import { filterPokemon, showDetails } from '../../actionCreators/index';
import PokemonMini from '../PokemonMini/PokemonMini';

export const Team = ({ pokemonTeam, details }) => {
  const renderPokemonTeam = () => {
    let emptyNum = 6-pokemonTeam.length
    let pokemonTeamDefault = new Array(emptyNum);
    pokemonTeamDefault.fill({name:'placeholder'})    
    pokemonTeam = pokemonTeam.concat(pokemonTeamDefault)
    return (
      <article className="pokemon-mini-container">
        {pokemonTeam.map((pokemon) => {
          return (
            <PokemonMini pokemon={pokemon} key={pokemon.id} whereami="Team" />
          );
        })}
      </article>
    );
  };
  return (
    <section className="team-view-container">
      <h2>TEAM</h2>
      {renderPokemonTeam()}
      {details.show && (
        <aside className="pokemon-details">
          <div>Name: {details.details.name}</div>
          <div>
            Type:
            {details.details.types.map((slot) => (
              <div key={slot.type.name} className={`type ${slot.type.name}`}>
                {slot.type.name}
              </div>
            ))}
          </div>
          <div>Weakness:In Progress</div>
          <div>Moves:In Progress</div>
        </aside>
      )}
    </section>
  );
};

const mapStateToProps = ({ pokemonTeam, details }) => ({
  pokemonTeam,
  details,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ filterPokemon }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Team);
