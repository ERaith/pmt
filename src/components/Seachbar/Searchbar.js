import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { nameFilter, typeFilter ,generalFilter} from '../../utils';
import { getPokemonList, filterPokemon } from '../../actionCreators/index';
import './Searchbar.scss';

class Searchbar extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      type: '',
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let searchName = this.state.name;
    let searchType = this.state.type;

    let { pokemonList, filterPokemon,filteredPokemon} = this.props;
    switch (name) {
      case 'name':
        if(value.length>searchName.length){
          pokemonList = filteredPokemon;
        }
        filteredPokemon = generalFilter(pokemonList, value,searchType);
        filterPokemon(filteredPokemon);
        break;
      case 'type':
        if(value.length>searchType.length){
          pokemonList = filteredPokemon;
        }
        filteredPokemon = generalFilter(pokemonList, searchName,value);
        filterPokemon(filteredPokemon);
        break;

      default:
        break;
    }
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const { name, type } = this.state;
    return (
      <form aria-label="Login Form">
        <input
          type="text"
          placeholder="Seach Name"
          name="name"
          value={name}
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type="text"
          placeholder="Seach Type"
          name="type"
          value={type}
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

const mapStateToProps = ({ pokemonList, filteredPokemon }) => ({
  pokemonList,
  filteredPokemon,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ filterPokemon }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
