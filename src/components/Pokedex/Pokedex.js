import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { render } from '@testing-library/react';
import { fetchPokemon } from '../../apiCalls/apiCalls';

class Pokedex extends React.Component {
  getPokemonList = async () => {
    const pokemonData = await fetchPokemon();
    console.log(pokemonData);
  };

  componentDidMount = () => {
    this.getPokemonList();
  };

  render() {
    return <div>Whatsup</div>;
  }
}

export default Pokedex;
