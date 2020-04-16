import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { render } from '@testing-library/react';
import { fetchPokemon } from '../../apiCalls/apiCalls';
import { getPokemonList } from '../../actionCreators/index';

export class Pokedex extends React.Component {
  constructor(){
    super();
  }
  pokemonList = async () => {
    const {getPokemonList} = this.props;
    const pokemonData = await fetchPokemon();
    getPokemonList(pokemonData)
    console.log(pokemonData);
    return pokemonData;
  };

  componentDidMount = () => {
    this.pokemonList();
  };

  render() {
    return <div>Pokemon</div>;
  }
}

const mapStateToProps = ({ pokemonList }) => ({
  pokemonList,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getPokemonList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
