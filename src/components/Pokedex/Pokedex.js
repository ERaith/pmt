import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPokemon } from '../../apiCalls/apiCalls';
import { getPokemonList } from '../../actionCreators/index';
import { PokemonMini } from '../PokemonMini/PokemonMini';

class Pokedex extends React.Component {
  fetchPokemonList = async () => {
    // eslint-disable-next-line no-shadow
    const { getPokemonList } = this.props;
    const pokemonData = await fetchPokemon();
    getPokemonList(pokemonData);
    return pokemonData;
  };

  renderPokemon = () => {
    const { pokemonList } = this.props;
    return pokemonList.length > 0 ? (
      pokemonList.map((pokemon) => {
        return <PokemonMini pokemon={pokemon} key={pokemon.id} />;
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
      <article className="pokemon-mini-container">
        {this.renderPokemon()}
      </article>
    );
  }
}

const mapStateToProps = ({ pokemonList }) => ({
  pokemonList,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getPokemonList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
