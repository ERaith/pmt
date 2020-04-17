import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Pokedex from '../Pokedex/Pokedex';
import './App.css';

class App extends React.Component {
  render() {
    return <Pokedex />;
  }
}

export default App;