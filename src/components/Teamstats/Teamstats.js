import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadTypes } from '../../actionCreators/index';
import { fetchTypes } from '../../apiCalls/apiCalls';

class Teamstats extends React.Component {
  getStats = async () => {
    const { loadTypes } = this.props;
    let stats = await fetchTypes();
    loadTypes(stats);
  };

  calcResistance = (types, damageType) => {
    const { typeDetails } = this.props;
    return types.reduce((acc, val) => {
      let damage = typeDetails[val.type.name]['from'][damageType] || 1;
      return acc * damage;
    }, 1);
  };

  makeTable = () => {
    const { typeDetails, pokemonTeam } = this.props;
    let header = pokemonTeam.map((pokemon) => {
      let headerElement = (
        <th>
          <img src={pokemon.sprites.front_default} />
        </th>
      );
      return headerElement;
    });
    let tableBody = Object.keys(typeDetails);
    tableBody = tableBody.map((damageType) => {
      let totalResist = 0;
      let totalWeak = 0;
      let rowInfo = pokemonTeam.map((pokemon) => {
        let className;
        let individualDef = this.calcResistance(pokemon.types, damageType);
        if (individualDef < 1) {
          className = 'weak';
          totalWeak++;
        } else if (individualDef > 1) {
          className = 'strong';
          totalResist++;
        } else {
          individualDef = '';
        }
        let rowData = <td className={className}>{individualDef}</td>;
        return rowData;
      });

      let row = (
        <tr>
          <td className={`table-types ${damageType}`}>{damageType}</td>
          {rowInfo}
          <td>{totalResist}</td>
          <td>{totalWeak}</td>
        </tr>
      );
      return row;
    });

    return (
      <tbody>
        <tr>
          <th>Pokemon</th>
          {header}
          <th>Team Resistance</th>
          <th>Team Weakness</th>
        </tr>
        {tableBody}
      </tbody>
    );
  };

  componentDidMount = () => {
    this.getStats();
  };

  render() {
    return (
      <section className="team-stats-container">
        <h2>TEAM</h2>
        {this.makeTable()}
      </section>
    );
  }
}

const mapStateToProps = ({ pokemonTeam, typeDetails }) => ({
  pokemonTeam,
  typeDetails,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ loadTypes }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Teamstats);
