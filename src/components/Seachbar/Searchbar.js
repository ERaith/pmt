import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

export default Searchbar;
