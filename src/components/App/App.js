import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Pokedex from '../Pokedex/Pokedex';
import Team from '../Team/Team';
import Teamstats from '../Teamstats/Teamstats';
import Navbar from '../Navbar/Navbar';
import { Header } from '../Header/Header';
import { loadTypes } from '../../actionCreators/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTypes } from '../../apiCalls/apiCalls';

class App extends React.Component {
  componentDidMount() {
    this.getStats();
  }

  getStats = async () => {
    const { loadTypes } = this.props;
    let stats = await fetchTypes();
    loadTypes(stats);
  };

  render() {
    return (
      <body>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/pokedex/team/team-rocket" />}
        />
        <Header />
        <section className="app">
          <Route
            path="/"
            render={({ location }) => <Team path={location.pathname} />}
          />
          <Route
            path="/"
            render={({ location }) => <Navbar path={location.pathname} />}
          />

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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ loadTypes }, dispatch);

export default connect(undefined, mapDispatchToProps)(App);
