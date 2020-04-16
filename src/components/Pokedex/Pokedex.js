import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { render } from '@testing-library/react';
import { fetchPokemon } from '../../apiCalls/apiCalls';
import { getPokemonList } from '../../actionCreators/index';
import { PokemonMini } from '../PokemonMini/PokemonMini';

export class Pokedex extends React.Component {
  pokemonList = async () => {
    const { getPokemonList } = this.props;
    const pokemonData = await fetchPokemon();
    getPokemonList(pokemonData);
    console.log(pokemonData);
    return pokemonData;
  };

  renderPokemon = () => {
    return this.props.pokemonList.length > 0 ? (
      this.props.pokemonList.map((pokemon) => {
        return <PokemonMini pokemon={pokemon} />;
      })
    ) : (
      <span>No Pokemon exist for that Querry</span>
    );
  };

  componentDidMount = () => {
    this.pokemonList();
  };

  render() {
    return <div>{this.renderPokemon()}</div>;
  }
}

const mapStateToProps = ({ pokemonList }) => ({
  pokemonList,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getPokemonList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
