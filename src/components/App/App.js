import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Pokedex from '../Pokedex/Pokedex';

class App extends React.Component {
  render() {
    return <section className="app"><Pokedex /></section>;
  }
}

export default App;
