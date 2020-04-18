const defaultState = [];
const pokemonTeam = (state = defaultState, action) => {
  switch (action.type) {
    case 'TEAM_LIST':
      return [...state,action.pokemon];
    default:
      return state;
  }
};

export default pokemonTeam;