import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Teamstats extends React.Component {

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
        <th key ={Math.random()}>
          <img src={pokemon.sprites.front_default} alt ={pokemon.name} />
        </th>
      );
      return headerElement;
    });
    let tableBody = Object.keys(typeDetails);
    tableBody = tableBody.map((damageType) => {
      let totalWeak = 0;
      let totalResistant = 0;
      let rowInfo = pokemonTeam.map((pokemon) => {
        let className;
        let individualDef = this.calcResistance(pokemon.types, damageType);
        if (individualDef < 1) {
          className = 'strong';
          totalResistant++;
        } else if (individualDef > 1) {
          className = 'weak';
          totalWeak++;
        } else {
          individualDef = '';
        }
        let rowData = <td className={className} key={Math.random()}>{individualDef}</td>;
        return rowData;
      });

      let row = (
        <tr key = {damageType}>
          <td className={`table-types ${damageType}`} aria-label ={damageType}>{damageType}</td>
          {rowInfo}
          <td>{totalWeak}</td>
          <td>{totalResistant}</td>
        </tr>
      );
      return row;
    });

    return (
      <tbody>
        <tr>
          <th>Pokemon</th>
          {header}
          <th>Team Weakness</th>
          <th>Team Resistance</th>
        </tr>
        {tableBody}
      </tbody>
    );
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

export default connect(mapStateToProps, undefined)(Teamstats);

Teamstats.propTypes = {
  pokemonTeam:PropTypes.array,
  typeDetails:PropTypes.object
};