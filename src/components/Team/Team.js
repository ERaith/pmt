import React from 'react';
import { connect } from 'react-redux';
import PokemonMini from '../PokemonMini/PokemonMini';

export const Team = ({ pokemonTeam, details }) => {
  const renderPokemonTeam = () => {
    const emptySlots = 6 - pokemonTeam.length;
    const pokemonTeamDefault = new Array(emptySlots);
    pokemonTeamDefault.fill({ name: 'placeholder' });
    pokemonTeam = pokemonTeam.concat(pokemonTeamDefault);
    return (
      <article className="pokemon-mini-container">
        {pokemonTeam.map((pokemon) => {
          return (
            <PokemonMini
              pokemon={pokemon}
              key={pokemon.teamID}
              whereami="Team"
            />
          );
        })}
      </article>
    );
  };
  return (
    <section className="team-view-container">
      <h2>TEAM</h2>
      <button>Save Team</button>
      {renderPokemonTeam()}
      {details.show &&
        pokemonTeam.find(
          (element) => element.teamID === details.details.teamID,
        ) && (
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

export default connect(mapStateToProps, undefined)(Team);
