import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPokemon } from '../../apiCalls/apiCalls';
import { loadPokemonList, filterPokemon } from '../../actionCreators/index';
import PokemonMini from '../PokemonMini/PokemonMini';
import Searchbar from '../Seachbar/Searchbar';
import PropTypes from 'prop-types';

class Pokedex extends React.Component {
  fetchPokemonList = async () => {
    // eslint-disable-next-line no-shadow
    const { getPokemonList, filterPokemon } = this.props;
    const pokemonData = await fetchPokemon();
    getPokemonList(pokemonData);
    filterPokemon(pokemonData);
  };

  renderPokemon = () => {
    const { filteredPokemon } = this.props;
    return filteredPokemon.length > 0 ? (
      filteredPokemon.map((pokemon) => {
        return <PokemonMini pokemon={pokemon} key={pokemon.id} whereami = "Pokedex" />;
      })
    ) : (
      <span>No Pokemon exist for that Querry</span>
    );
  };

  componentDidMount = () => {
    this.fetchPokemonList();
  };

  render() {
    return (
      <section className ="pokedex">
        <Searchbar className ="searchbar" />
        <article className="pokemon-mini-container">
          {this.renderPokemon()}
        </article>
      </section>
    );
  }
}

const mapStateToProps = ({ pokemonList, filteredPokemon }) => ({
  pokemonList,
  filteredPokemon,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { getPokemonList: loadPokemonList, filterPokemon },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);

Pokedex.propTypes = {
  pokemonList:PropTypes.array,
  filteredPokemon:PropTypes.array,
  getPokemonList:PropTypes.func,
  filterPokemon:PropTypes.func,
};