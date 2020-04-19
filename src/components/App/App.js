import React from 'react';
import Pokedex from '../Pokedex/Pokedex';
import Team from '../Team/Team';
import Teamstats from '../Teamstats/Teamstats';

class App extends React.Component {
  render() {
    return <section className="app">
      <Team />
      <Teamstats/>
      <Pokedex />
      </section>;
  }
}

export default App;
