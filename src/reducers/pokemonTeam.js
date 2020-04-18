const defaultState = [];
const pokemonTeam = (state = defaultState, action) => {
  switch (action.type) {
    case 'TEAM':
      return action.pokemon;
    default:
      return state;
  }
};

export default pokemonTeam;