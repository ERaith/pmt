import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PokemonMini from '../PokemonMini/PokemonMini';
import { saveTeam, removeTeam, goToTeam } from '../../actionCreators/index';
import { NavLink } from 'react-router-dom';

class Team extends React.Component {
  constructor() {
    super();
    this.state = {
      teamName: 'Team Rocket',
    };
  }
  renderPokemonTeam = () => {
    let { pokemonTeam, details, typeDetails } = this.props;
    const emptySlots = 6 - pokemonTeam.length;
    const pokemonTeamDefault = new Array(emptySlots);
    pokemonTeamDefault.fill({ name: 'placeholder' });
    pokemonTeam = pokemonTeam.concat(pokemonTeamDefault);
    return (
      <article className="pokemon-mini-container">
        {pokemonTeam.map((pokemon) => {
          return (
            <PokemonMini
              pokemon={pokemon}
              key={pokemon.teamID || Math.random()}
              whereami="Team"
            />
          );
        })}
      </article>
    );
  };

  showResistances = (types, fromTo) => {
    const { pokemonTeam, details, typeDetails } = this.props;
    return types.map((slot) => {
      let type = slot.type.name;
      let keys = Object.keys(typeDetails[type][fromTo]);
      return keys.map((dmgType) => {
        if (typeDetails[type][fromTo][dmgType] > 1)
          return (
            <div key={dmgType} className={`type ${dmgType}`}>
              {dmgType}
            </div>
          );
      });
    });
  };

  showTypes = () => {
    const { pokemonTeam, details, typeDetails } = this.props;
    return details.info.types.map((slot) => (
      <div key={slot.type.name} className={`type ${slot.type.name}`}>
        {slot.type.name}
      </div>
    ));
  };

  showForm = () => {
    const { teamName } = this.state;
    return (
      <form aria-label="pokemon search form" className="team-form">
        <div className="form_group">
          <input
            className="form_field"
            type="text"
            placeholder="Team Name"
            name="teamName"
            aria-label="Name Your Team"
            value={teamName}
            onChange={(event) => this.handleChange(event.target.value)}
          />
          <label className="form_label" htmlFor="name">
            Team Name
          </label>
        </div>
        <button
          className="save-team"
          aria-label="Save Team"
          onClick={(event) => this.handleSubmit(event)}
        >
          Save Team
        </button>
        <button
          className="delete-team"
          aria-label="Delete Team"
          onClick={(event) => this.handleRemove(event)}
        >
          Delete Team
        </button>
      </form>
    );
  };

  handleChange = (value) => {
    this.setState({ teamName: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { pokemonTeam, saveTeam } = this.props;
    saveTeam(pokemonTeam, this.state.teamName);
  };
  handleRemove = (event) => {
    event.preventDefault();
    const { removeTeam } = this.props;
    removeTeam(this.state.teamName);
  };

  handleGoTo = (team) => {
    const { goToTeam, savedTeams } = this.props;
    this.handleChange(team.teamName);
    goToTeam(team.members);
  };

  createRoute = (path, teamName) => {
    let pathName = path.split('/team/').shift();
    return pathName + '/team/' + teamName;
  };

  showTeams = () => {
    return (
      <div className="Teams">
        {this.props.savedTeams!=undefined&&this.props.savedTeams.length!=0&&<h2>Teams:</h2>}

        {this.props.savedTeams.map((team) => {
          return (
            <NavLink
              to={this.createRoute(this.props.path, team.teamName)}
              activeClassName="active"
              className="nav-link team"
              isActive={(match) => match}
              onClick={() => this.handleGoTo(team)}
              key = {team.teamName}
              aria-label = {team.teamName}
            >
              {team.teamName}
            </NavLink>
          );
        })}
      </div>
    );
  };

  render() {
    const { pokemonTeam, details } = this.props;

    return (
      <section className="team-view-container">
        {this.showForm()}

        {this.showTeams()}

        {this.renderPokemonTeam()}
        {details.show &&
          pokemonTeam.find(
            (element) => element.teamID === details.info.teamID,
          ) && (
            <aside className="pokemon-details">
              <div>Name: {details.info.name}</div>
              <div>Type: {this.showTypes()}</div>
              <div>
                Weak To:{this.showResistances(details.info.types, 'from')}
              </div>
              <div>
                Resistant To:{this.showResistances(details.info.types, 'to')}
              </div>
            </aside>
          )}
      </section>
    );
  }
}

const mapStateToProps = ({
  pokemonTeam,
  details,
  typeDetails,
  savedTeams,
}) => ({
  pokemonTeam,
  details,
  typeDetails,
  savedTeams,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ saveTeam, removeTeam, goToTeam }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Team);
