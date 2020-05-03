import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { generalFilter } from '../../utils';
import { fetchRegionalPokemon } from '../../apiCalls/apiCalls';
import { loadPokemonList, filterPokemon } from '../../actionCreators/index';
import './Searchbar.scss';
import PropTypes from 'prop-types';

class Searchbar extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      type: '',
      region: '',
    };
  }
  
  fetchPokemonList = async (regionNum) => {
    // eslint-disable-next-line no-shadow
    const { getPokemonList, filterPokemon } = this.props;
    const pokemonData = await fetchRegionalPokemon(regionNum);
    getPokemonList(pokemonData);
    filterPokemon(pokemonData);
  };


  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let searchName = this.state.name;
    let searchType = this.state.type;

    let { pokemonList, filterPokemon, filteredPokemon } = this.props;
    switch (name) {
      case 'name':
        if (value.length > searchName.length) {
          pokemonList = filteredPokemon;
        }
        filteredPokemon = generalFilter(pokemonList, value, searchType);
        filterPokemon(filteredPokemon);
        break;
      case 'type':
        if (value.length > searchType.length) {
          pokemonList = filteredPokemon;
        }
        filteredPokemon = generalFilter(pokemonList, searchName, value);
        filterPokemon(filteredPokemon);
        break;
      case 'region':
        this.fetchPokemonList(value)
        break;

      default:
        break;
    }
    this.setState({ [name]: value });
  };

  render() {
    const { name, type, region } = this.state;
    return (
      <form aria-label="pokemon search form">
        <div className="form_group">
          <input
            className="form_field"
            type="text"
            placeholder="Seach Name"
            name="name"
            aria-label="Search by Name"
            value={name}
            onChange={(event) => this.handleChange(event)}
          />
          <label className="form_label" htmlFor="name">
            Search by Name
          </label>
        </div>
        <div className="form_group">
          <select
            id={region}
            className="form_field"
            type="text"
            placeholder="Change Region"
            name="region"
            aria-label="Change Region"
            onChange={(event) => this.handleChange(event)}
          >
            <option value="2">kanto</option>
            <option value="3">johto</option>
            <option value="4">hoenn</option>
            <option value="5">sinnoh</option>
            <option value="6">unova</option>
            <option value="7">kalos</option>
            <option value="9">alola</option>
          </select>
          <label className="form_label" htmlFor="name">
            Region
          </label>
        </div>
        <div className="form_group">
          <input
            className="form_field"
            type="text"
            placeholder="Seach Type"
            name="type"
            aria-label="Search by Type"
            value={type}
            onChange={(event) => this.handleChange(event)}
          />
          <label className="form_label" htmlFor="type">
            Search by Type
          </label>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ pokemonList, filteredPokemon }) => ({
  pokemonList,
  filteredPokemon,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ filterPokemon,getPokemonList:loadPokemonList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);

Searchbar.propTypes = {
  pokemonList: PropTypes.array,
  filteredPokemon: PropTypes.array,
  filterPokemon: PropTypes.func,
};
