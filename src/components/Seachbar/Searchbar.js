import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { nameFilter } from '../../utils';
import { getPokemonList, filterPokemon } from '../../actionCreators/index';
import './Searchbar.scss';

class Searchbar extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: '',
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    let filteredPokemon = nameFilter(this.props.pokemonList,event.target.value)
    this.props.filterPokemon(filteredPokemon)
  };

  handleSubmit = (event) => {
    event.preventDefault();

  };

  render() {
    const { filter } = this.props;
    return (
      <form aria-label="Login Form">
        <input
          type="text"
          placeholder="Seach Pokemon"
          name="pokemon"
          value={filter}
          onChange={(event) => this.handleChange(event)}
        />
        <button
          type="button"
          onClick={this.handleSubmit}
          className="submit-btn"
          aria-label="Submit Log In Form"
        >
          Search!
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ pokemonList, pokemonFiltered }) => ({
  pokemonList,
  pokemonFiltered,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ filterPokemon }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
