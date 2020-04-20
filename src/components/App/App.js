import React from 'react';
import { Route } from 'react-router-dom';
import Pokedex from '../Pokedex/Pokedex';
import Team from '../Team/Team';
import Teamstats from '../Teamstats/Teamstats';
import Navbar from '../Navbar/Navbar';
import { Header } from '../Header/Header';

class App extends React.Component {
  render() {
    return (
      <body>
        <Header />
        <section className = "app">
        <Team />
        <Route path="/">
          <Navbar />
        </Route>
        <Route path="/team-stats">
          <Teamstats />
        </Route>
        <Route path="/pokedex">
          <Pokedex />
        </Route>
        </section>
      </body>
    );
  }
}

export default App;
