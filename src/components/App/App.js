import React from 'react';
import Pokedex from '../Pokedex/Pokedex';
import Team from '../Team/Team';

class App extends React.Component {
  render() {
    return <section className="app"><Team /><Pokedex /></section>;
  }
}

export default App;
